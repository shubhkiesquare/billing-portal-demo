// Utility helper functions

// Format date
export const formatDate = (dateString) => {
  if (!dateString) return 'Not uploaded';
  
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('en-US', options);
};

// Format file size
export const formatFileSize = (bytes) => {
  if (!bytes || bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

// Get status color
export const getStatusColor = (status) => {
  const colors = {
    completed: 'var(--success)',
    pending: 'var(--warning)',
    overdue: 'var(--danger)',
    processing: 'var(--info)'
  };
  
  return colors[status] || 'var(--gray-500)';
};

// Get status icon
export const getStatusIcon = (status) => {
  const icons = {
    completed: 'fa-check-circle',
    pending: 'fa-clock',
    overdue: 'fa-exclamation-circle',
    processing: 'fa-spinner fa-spin'
  };
  
  return icons[status] || 'fa-question-circle';
};

// Calculate days remaining
export const getDaysRemaining = (deadline) => {
  const today = new Date();
  const currentDay = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
  let remaining;
  if (deadline >= currentDay) {
    remaining = deadline - currentDay;
  } else {
    remaining = (daysInMonth - currentDay) + deadline;
  }
  
  return remaining;
};

// Validate file type
export const validateFileType = (filename) => {
  const allowedExtensions = ['.xlsx', '.xls', '.csv', '.txt'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return allowedExtensions.includes(extension);
};

// Validate file size (max 50MB)
export const validateFileSize = (size) => {
  const maxSize = 50 * 1024 * 1024; // 50MB in bytes
  return size <= maxSize;
};

// Generate random ID
export const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Sort array by property
export const sortBy = (array, property, order = 'asc') => {
  return [...array].sort((a, b) => {
    if (order === 'asc') {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
};

// Group array by property
export const groupBy = (array, property) => {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

// Calculate percentage
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

// Check if date is overdue
export const isOverdue = (deadlineDay) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  
  const deadlineDate = new Date(today.getFullYear(), currentMonth, deadlineDay);
  
  return today > deadlineDate;
};

// Format number with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Download file (simulated)
export const downloadFile = (filename, content, type = 'text/plain') => {
  const blob = new Blob([content], { type });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

// Export to CSV
export const exportToCSV = (data, filename) => {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => Object.values(row).join(','));
  const csv = [headers, ...rows].join('\n');
  downloadFile(filename, csv, 'text/csv');
};

// Get month name
export const getMonthName = (monthIndex) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthIndex];
};

// Get current month and year
export const getCurrentMonthYear = () => {
  const date = new Date();
  return `${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};

// Simulate API delay
export const simulateDelay = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Show toast notification (to be used with toast library)
export const showToast = (message, type = 'info') => {
  console.log(`[${type.toUpperCase()}] ${message}`);
  // This will be replaced with actual toast notification
  return { message, type };
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Get time ago
export const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }

  return 'Just now';
};
