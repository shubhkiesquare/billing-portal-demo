// Mock data for demo purposes

export const uploadCategories = [
  {
    id: 1,
    name: 'EB Billing Data',
    responsible: 'Manoj Pandey',
    team: 'Finance',
    deadline: 25,
    status: 'completed',
    uploadDate: '2024-11-24T14:30:00',
    fileSize: '2.4 MB',
    recordCount: 1250
  },
  {
    id: 2,
    name: 'EB Provision Data',
    responsible: 'Nilesh Luhadiya',
    team: 'AP Team',
    deadline: 25,
    status: 'completed',
    uploadDate: '2024-11-25T10:15:00',
    fileSize: '1.8 MB',
    recordCount: 980
  },
  {
    id: 3,
    name: 'Cost Site Wise Data',
    responsible: 'Nilesh Luhadiya',
    team: 'AP Team',
    deadline: 26,
    status: 'completed',
    uploadDate: '2024-11-26T09:45:00',
    fileSize: '3.1 MB',
    recordCount: 1540
  },
  {
    id: 4,
    name: 'Transaction Register',
    responsible: 'Rajesh Malik',
    team: 'AR Team',
    deadline: 1,
    status: 'completed',
    uploadDate: '2024-11-30T16:20:00',
    fileSize: '5.2 MB',
    recordCount: 2350
  },
  {
    id: 5,
    name: 'Revenue Provision Data',
    responsible: 'Amit Jain',
    team: 'AR Team',
    deadline: 1,
    status: 'completed',
    uploadDate: '2024-11-30T15:50:00',
    fileSize: '2.9 MB',
    recordCount: 1120
  },
  {
    id: 6,
    name: 'Unbilled Revenue Data',
    responsible: 'Harshal',
    team: 'Billing Team',
    deadline: 29,
    status: 'completed',
    uploadDate: '2024-11-28T17:10:00',
    fileSize: '1.5 MB',
    recordCount: 750
  },
  {
    id: 7,
    name: 'Invoice Listing / Billing Revenue',
    responsible: 'Vikas',
    team: 'Billing Team',
    deadline: 1,
    status: 'overdue',
    uploadDate: null,
    fileSize: null,
    recordCount: null
  },
  {
    id: 8,
    name: 'OPCO Allocation Processing',
    responsible: 'System Automated',
    team: 'System',
    deadline: 1,
    status: 'processing',
    uploadDate: '2024-12-01T08:00:00',
    progress: 65,
    eta: '45 minutes'
  },
  {
    id: 9,
    name: 'Cost Allocation (80-20 Split)',
    responsible: 'System Automated',
    team: 'System',
    deadline: 1,
    status: 'pending',
    uploadDate: null,
    dependency: 'OPCO Allocation'
  },
  {
    id: 10,
    name: 'P&L Monthly Report',
    responsible: 'System Automated',
    team: 'System',
    deadline: 1,
    status: 'pending',
    uploadDate: null,
    dependency: 'Cost Allocation'
  }
];

export const users = [
  { id: 1, name: 'Manoj Pandey', email: 'manoj.pandey@company.com', team: 'Finance', role: 'Finance Manager' },
  { id: 2, name: 'Nilesh Luhadiya', email: 'nilesh.l@company.com', team: 'AP Team', role: 'AP Lead' },
  { id: 3, name: 'Rajesh Malik', email: 'rajesh.malik@company.com', team: 'AR Team', role: 'AR Specialist' },
  { id: 4, name: 'Amit Jain', email: 'amit.jain@company.com', team: 'AR Team', role: 'AR Analyst' },
  { id: 5, name: 'Harshal', email: 'harshal@company.com', team: 'Billing Team', role: 'Billing Coordinator' },
  { id: 6, name: 'Vikas', email: 'vikas@company.com', team: 'Billing Team', role: 'Billing Specialist' }
];

export const notifications = [
  {
    id: 1,
    type: 'danger',
    title: 'Urgent: File Overdue',
    message: 'Invoice Listing file from Vikas is past deadline (1st Dec). Immediate action required.',
    timestamp: '2024-12-01T09:00:00',
    read: false
  },
  {
    id: 2,
    type: 'info',
    title: 'Processing Started',
    message: 'OPCO Allocation processing initiated automatically at 08:00 AM. ETA: 2 hours.',
    timestamp: '2024-12-01T08:00:00',
    read: false
  },
  {
    id: 3,
    type: 'success',
    title: 'Upload Successful',
    message: 'Revenue Provision data uploaded by Amit Jain. Validation completed successfully.',
    timestamp: '2024-11-30T15:50:00',
    read: false
  },
  {
    id: 4,
    type: 'warning',
    title: 'Reminder',
    message: 'Final deadline for December cycle is approaching in 3 days (25th Dec).',
    timestamp: '2024-11-30T10:00:00',
    read: true
  },
  {
    id: 5,
    type: 'success',
    title: 'Upload Complete',
    message: 'Transaction Register uploaded by Rajesh Malik.',
    timestamp: '2024-11-30T16:20:00',
    read: true
  }
];

export const timeline = [
  {
    id: 1,
    title: 'Data Collection Phase',
    date: '25th - 29th Nov 2024',
    description: 'All required files collected from teams',
    status: 'completed'
  },
  {
    id: 2,
    title: 'OPCO Allocation',
    date: '1st Dec 2024 - In Progress',
    description: 'Processing PTM-wise allocation for active sites (65% complete)',
    status: 'active'
  },
  {
    id: 3,
    title: 'Cost Split (80-20)',
    date: '1st Dec 2024 - Scheduled',
    description: 'Automated cost allocation between OPCO and ISQ',
    status: 'pending'
  },
  {
    id: 4,
    title: 'Data Consolidation',
    date: '1st Dec 2024 - Pending',
    description: 'Merge all data sources into unified dataset',
    status: 'pending'
  },
  {
    id: 5,
    title: 'P&L Report Generation',
    date: '1st Dec 2024 - Pending',
    description: 'Generate and validate monthly P&L report',
    status: 'pending'
  },
  {
    id: 6,
    title: 'Report Distribution',
    date: '1st Dec 2024 - Pending',
    description: 'Email report to stakeholders',
    status: 'pending'
  }
];

export const reports = [
  {
    id: 1,
    name: 'P&L Report - October 2024',
    type: 'P&L Monthly',
    generatedDate: '2024-11-01T10:30:00',
    generatedBy: 'System',
    size: '4.2 MB',
    status: 'completed'
  },
  {
    id: 2,
    name: 'P&L Report - September 2024',
    type: 'P&L Monthly',
    generatedDate: '2024-10-01T10:15:00',
    generatedBy: 'System',
    size: '3.8 MB',
    status: 'completed'
  },
  {
    id: 3,
    name: 'Cost Analysis Report - Q3 2024',
    type: 'Quarterly',
    generatedDate: '2024-10-05T14:20:00',
    generatedBy: 'Admin',
    size: '8.5 MB',
    status: 'completed'
  },
  {
    id: 4,
    name: 'Revenue Summary - October 2024',
    type: 'Revenue',
    generatedDate: '2024-11-02T09:45:00',
    generatedBy: 'System',
    size: '2.1 MB',
    status: 'completed'
  }
];

export const chartData = {
  monthlyProgress: [
    { month: 'Jun', completion: 85, onTime: 90 },
    { month: 'Jul', completion: 92, onTime: 95 },
    { month: 'Aug', completion: 88, onTime: 92 },
    { month: 'Sep', completion: 95, onTime: 98 },
    { month: 'Oct', completion: 90, onTime: 94 },
    { month: 'Nov', completion: 80, onTime: 75 }
  ],
  teamPerformance: [
    { team: 'AP Team', completed: 95, pending: 5 },
    { team: 'AR Team', completed: 100, pending: 0 },
    { team: 'Billing', completed: 67, pending: 33 },
    { team: 'System', completed: 33, pending: 67 }
  ],
  uploadTrends: [
    { date: '25th', uploads: 2 },
    { date: '26th', uploads: 1 },
    { date: '27th', uploads: 0 },
    { date: '28th', uploads: 1 },
    { date: '29th', uploads: 0 },
    { date: '30th', uploads: 2 },
    { date: '1st', uploads: 1 }
  ]
};

export const systemConfig = {
  deadlines: [
    { category: 'EB Data', day: 25, description: 'EB Billing and Provision data' },
    { category: 'Cost Data', day: 26, description: 'Cost site wise allocation' },
    { category: 'Revenue Data', day: 29, description: 'Unbilled revenue' },
    { category: 'AR Data', day: 1, description: 'Transaction and revenue provision' },
    { category: 'Final Reports', day: 1, description: 'All automated processing' }
  ],
  emailTemplates: [
    { id: 1, name: 'Deadline Reminder', subject: 'Reminder: Upload Deadline Approaching' },
    { id: 2, name: 'Upload Confirmation', subject: 'Upload Successful - Validation Complete' },
    { id: 3, name: 'Overdue Alert', subject: 'Urgent: Upload Deadline Passed' },
    { id: 4, name: 'Processing Complete', subject: 'Monthly Report Generated' },
    { id: 5, name: 'Error Notification', subject: 'Error in Data Processing' }
  ],
  teams: [
    { id: 1, name: 'AP Team', lead: 'Nilesh Luhadiya', members: 5 },
    { id: 2, name: 'AR Team', lead: 'Rajesh Malik', members: 4 },
    { id: 3, name: 'Billing Team', lead: 'Harshal', members: 6 },
    { id: 4, name: 'Finance', lead: 'Manoj Pandey', members: 3 }
  ]
};

// Helper function to get statistics
export const getStatistics = () => {
  const completed = uploadCategories.filter(u => u.status === 'completed').length;
  const pending = uploadCategories.filter(u => u.status === 'pending').length;
  const overdue = uploadCategories.filter(u => u.status === 'overdue').length;
  const processing = uploadCategories.filter(u => u.status === 'processing').length;
  const total = uploadCategories.length;
  const completionRate = Math.round((completed / total) * 100);

  return {
    completed,
    pending: pending + processing,
    overdue,
    completionRate,
    total
  };
};

// Helper function to filter data
export const filterUploadData = (month, status, team) => {
  let filtered = [...uploadCategories];

  if (status && status !== 'all') {
    filtered = filtered.filter(item => item.status === status);
  }

  if (team && team !== 'all') {
    filtered = filtered.filter(item => item.team === team);
  }

  return filtered;
};
