export type DateRange = '7d' | '30d' | '90d'

export type CustomerSegment = 'all' | 'startup' | 'growth' | 'enterprise'

export type Metric = {
  id: string
  label: string
  value: number
  unit: 'currency' | 'number' | 'percent'
  change: number
}

export type SalesChannel = {
  id: string
  name: string
  segment: Exclude<CustomerSegment, 'all'>
  revenue: number
  opportunities: number
  winRate: number
}

export type ActivityItem = {
  id: string
  title: string
  description: string
  owner: string
  impact: 'low' | 'medium' | 'high'
  createdAt: string
}

export type DashboardData = {
  range: DateRange
  metrics: Metric[]
  salesChannels: SalesChannel[]
  activity: ActivityItem[]
}
