import type {
  CustomerSegment,
  DashboardData,
  DateRange,
  Metric,
  SalesChannel,
} from '../types'

export const rangeLabels: Record<DateRange, string> = {
  '7d': '7 days',
  '30d': '30 days',
  '90d': '90 days',
}

export const segmentLabels: Record<CustomerSegment, string> = {
  all: 'All segments',
  startup: 'Startup',
  growth: 'Growth',
  enterprise: 'Enterprise',
}

export function getDashboardForRange(
  dashboards: DashboardData[],
  range: DateRange,
) {
  return dashboards.find((dashboard) => dashboard.range === range)
}

export function getChannelsForSegment(
  channels: SalesChannel[],
  segment: CustomerSegment,
) {
  if (segment === 'all') {
    return channels
  }

  return channels.filter((channel) => channel.segment === segment)
}

export function getPipelineTotal(channels: SalesChannel[]) {
  return channels.reduce((total, channel) => total + channel.revenue, 0)
}

export function getTopMetric(metrics: Metric[]) {
  return metrics.reduce((topMetric, metric) =>
    metric.change > topMetric.change ? metric : topMetric,
  )
}

export function formatMetricValue(metric: Metric) {
  if (metric.unit === 'currency') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(metric.value)
  }

  if (metric.unit === 'percent') {
    return `${metric.value.toFixed(1)}%`
  }

  return new Intl.NumberFormat('en-US').format(metric.value)
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}
