import type { DashboardData } from '../types'

export const dashboardData: DashboardData[] = [
  {
    range: '7d',
    metrics: [
      {
        id: 'revenue',
        label: 'Revenue',
        value: 184250,
        unit: 'currency',
        change: 8.4,
      },
      {
        id: 'active-users',
        label: 'Active users',
        value: 12840,
        unit: 'number',
        change: 4.1,
      },
      {
        id: 'conversion',
        label: 'Conversion',
        value: 6.8,
        unit: 'percent',
        change: -1.2,
      },
      {
        id: 'support-load',
        label: 'Support tickets',
        value: 318,
        unit: 'number',
        change: -6.5,
      },
    ],
    salesChannels: [
      {
        id: 'self-serve',
        name: 'Self-serve checkout',
        segment: 'startup',
        revenue: 48200,
        opportunities: 84,
        winRate: 42,
      },
      {
        id: 'partner',
        name: 'Partner referrals',
        segment: 'growth',
        revenue: 63750,
        opportunities: 41,
        winRate: 51,
      },
      {
        id: 'field-sales',
        name: 'Field sales',
        segment: 'enterprise',
        revenue: 72300,
        opportunities: 18,
        winRate: 67,
      },
    ],
    activity: [
      {
        id: 'act-1',
        title: 'Usage spike in workspace imports',
        description:
          'Import jobs are running 22% above forecast after the template gallery launch.',
        owner: 'Platform',
        impact: 'medium',
        createdAt: '2026-09-06T08:30:00+09:00',
      },
      {
        id: 'act-2',
        title: 'Enterprise trial advanced',
        description:
          'The Maple Bank trial moved to procurement after security review cleared.',
        owner: 'Sales',
        impact: 'high',
        createdAt: '2026-09-05T15:10:00+09:00',
      },
      {
        id: 'act-3',
        title: 'Help center search improved',
        description:
          'New article tags reduced failed billing searches in the support portal.',
        owner: 'Success',
        impact: 'low',
        createdAt: '2026-09-04T11:45:00+09:00',
      },
    ],
  },
  {
    range: '30d',
    metrics: [
      {
        id: 'revenue',
        label: 'Revenue',
        value: 692800,
        unit: 'currency',
        change: 12.9,
      },
      {
        id: 'active-users',
        label: 'Active users',
        value: 43890,
        unit: 'number',
        change: 7.8,
      },
      {
        id: 'conversion',
        label: 'Conversion',
        value: 7.4,
        unit: 'percent',
        change: 0.6,
      },
      {
        id: 'support-load',
        label: 'Support tickets',
        value: 1264,
        unit: 'number',
        change: -3.4,
      },
    ],
    salesChannels: [
      {
        id: 'self-serve',
        name: 'Self-serve checkout',
        segment: 'startup',
        revenue: 164900,
        opportunities: 312,
        winRate: 39,
      },
      {
        id: 'partner',
        name: 'Partner referrals',
        segment: 'growth',
        revenue: 235100,
        opportunities: 155,
        winRate: 49,
      },
      {
        id: 'field-sales',
        name: 'Field sales',
        segment: 'enterprise',
        revenue: 292800,
        opportunities: 64,
        winRate: 63,
      },
    ],
    activity: [
      {
        id: 'act-4',
        title: 'Trial onboarding reached a new high',
        description:
          'Activation completed within 48 hours for 71% of new customer trials.',
        owner: 'Growth',
        impact: 'high',
        createdAt: '2026-09-03T10:00:00+09:00',
      },
      {
        id: 'act-5',
        title: 'Invoice retry volume dropped',
        description:
          'Card updater changes reduced manual billing tickets across growth accounts.',
        owner: 'Billing',
        impact: 'medium',
        createdAt: '2026-08-31T18:25:00+09:00',
      },
      {
        id: 'act-6',
        title: 'New dashboard exports adopted',
        description:
          'Finance teams exported 490 scheduled CSV reports during the period.',
        owner: 'Analytics',
        impact: 'medium',
        createdAt: '2026-08-28T09:15:00+09:00',
      },
    ],
  },
  {
    range: '90d',
    metrics: [
      {
        id: 'revenue',
        label: 'Revenue',
        value: 1894300,
        unit: 'currency',
        change: 18.2,
      },
      {
        id: 'active-users',
        label: 'Active users',
        value: 101240,
        unit: 'number',
        change: 11.6,
      },
      {
        id: 'conversion',
        label: 'Conversion',
        value: 7.1,
        unit: 'percent',
        change: 1.1,
      },
      {
        id: 'support-load',
        label: 'Support tickets',
        value: 3894,
        unit: 'number',
        change: 4.3,
      },
    ],
    salesChannels: [
      {
        id: 'self-serve',
        name: 'Self-serve checkout',
        segment: 'startup',
        revenue: 441200,
        opportunities: 920,
        winRate: 36,
      },
      {
        id: 'partner',
        name: 'Partner referrals',
        segment: 'growth',
        revenue: 618900,
        opportunities: 428,
        winRate: 47,
      },
      {
        id: 'field-sales',
        name: 'Field sales',
        segment: 'enterprise',
        revenue: 834200,
        opportunities: 181,
        winRate: 61,
      },
    ],
    activity: [
      {
        id: 'act-7',
        title: 'Enterprise expansion pipeline grew',
        description:
          'Seven existing customers opened expansion conversations for next quarter.',
        owner: 'Revenue',
        impact: 'high',
        createdAt: '2026-08-20T14:40:00+09:00',
      },
      {
        id: 'act-8',
        title: 'Regional latency improved',
        description:
          'Tokyo and Sydney dashboard load times improved after cache tuning.',
        owner: 'Infrastructure',
        impact: 'medium',
        createdAt: '2026-08-16T12:20:00+09:00',
      },
      {
        id: 'act-9',
        title: 'Churn review completed',
        description:
          'Customer success tagged the top five cancellation reasons for follow-up.',
        owner: 'Success',
        impact: 'medium',
        createdAt: '2026-08-08T16:55:00+09:00',
      },
    ],
  },
]
