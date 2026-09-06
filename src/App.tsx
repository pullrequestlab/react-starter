import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { dashboardData } from './data/dashboardData'
import {
  formatCurrency,
  formatMetricValue,
  getChannelsForSegment,
  getDashboardForRange,
  getPipelineTotal,
  getTopMetric,
  rangeLabels,
  segmentLabels,
} from './lib/dashboardMetrics'
import type { CustomerSegment, DateRange } from './types'

const ranges: DateRange[] = ['7d', '30d', '90d']
const segments: CustomerSegment[] = ['all', 'startup', 'growth', 'enterprise']

function App() {
  const [activeRange, setActiveRange] = useState<DateRange>(
    () => (localStorage.getItem('dashboard.range') as DateRange) ?? '30d',
  )
  const [activeSegment, setActiveSegment] = useState<CustomerSegment>(
    () =>
      (localStorage.getItem('dashboard.customerSegment') as CustomerSegment) ??
      'all',
  )

  useEffect(() => {
    localStorage.setItem('dashboard.range', activeRange)
    localStorage.setItem('dashboard.customerSegment', activeSegment)
  }, [activeRange, activeSegment])

  const dashboard =
    getDashboardForRange(dashboardData, activeRange) ?? dashboardData[0]

  const visibleChannels = useMemo(
    () => getChannelsForSegment(dashboard.salesChannels, activeSegment),
    [activeSegment, dashboard.salesChannels],
  )

  const pipelineTotal = useMemo(
    () => getPipelineTotal(visibleChannels),
    [visibleChannels],
  )

  const topMetric = useMemo(
    () => getTopMetric(dashboard.metrics),
    [dashboard.metrics],
  )

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Northwind Analytics</p>
          <h1>Revenue Operations Dashboard</h1>
        </div>
        <div className="header-note">
          <strong>{topMetric.label}</strong>
          <span>is the fastest-moving metric for this period.</span>
        </div>
      </header>

      <section className="toolbar" aria-label="Dashboard filters">
        <div className="filter-group" aria-label="Date range">
          {ranges.map((range) => (
            <button
              key={range}
              type="button"
              className={range === activeRange ? 'active' : ''}
              onClick={() => setActiveRange(range)}
            >
              {rangeLabels[range]}
            </button>
          ))}
        </div>

        <div className="filter-group" aria-label="Customer segment">
          {segments.map((segment) => (
            <button
              key={segment}
              type="button"
              className={segment === activeSegment ? 'active' : ''}
              onClick={() => setActiveSegment(segment)}
            >
              {segmentLabels[segment]}
            </button>
          ))}
        </div>
      </section>

      <section className="metric-grid" aria-label="Key metrics">
        {dashboard.metrics.map((metric) => (
          <article className="metric-card" key={metric.id}>
            <p>{metric.label}</p>
            <strong>{formatMetricValue(metric)}</strong>
            <span className={metric.change >= 0 ? 'positive' : 'negative'}>
              {metric.change >= 0 ? '+' : ''}
              {metric.change.toFixed(1)}%
            </span>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel pipeline-panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">Pipeline</p>
              <h2>{formatCurrency(pipelineTotal)} forecast</h2>
            </div>
            <span>{segmentLabels[activeSegment]}</span>
          </div>

          <div className="channel-list">
            {visibleChannels.map((channel) => (
              <div className="channel-row" key={channel.id}>
                <div>
                  <strong>{channel.name}</strong>
                  <span>
                    {channel.opportunities} opportunities · {channel.winRate}%
                    win rate
                  </span>
                </div>
                <div className="bar-track" aria-hidden="true">
                  <span style={{ width: `${channel.winRate}%` }} />
                </div>
                <strong>{formatCurrency(channel.revenue)}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">Activity</p>
              <h2>Latest signals</h2>
            </div>
          </div>

          <div className="activity-list">
            {dashboard.activity.map((item) => (
              <div className="activity-item" key={item.id}>
                <span className={`impact impact--${item.impact}`}>
                  {item.impact}
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <small>{item.owner}</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
