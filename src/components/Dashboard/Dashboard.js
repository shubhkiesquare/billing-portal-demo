import React, { useState } from 'react';
import { toast } from 'react-toastify';
import StatsCards from './StatsCards';
import FilterBar from './FilterBar';
import DataTable from './DataTable';
import Timeline from './Timeline';
import AlertsPanel from './AlertsPanel';
import UploadModal from '../common/UploadModal';
import './Dashboard.css';
import { uploadCategories, timeline, notifications, getStatistics } from '../../data/mockData';

const Dashboard = () => {
  const [data, setData] = useState(uploadCategories);
  const [filters, setFilters] = useState({
    month: 'November 2024',
    status: 'all',
    team: 'all'
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const stats = getStatistics();

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleApplyFilters = () => {
    let filtered = [...uploadCategories];

    if (filters.status !== 'all') {
      filtered = filtered.filter(item => item.status === filters.status);
    }

    if (filters.team !== 'all') {
      filtered = filtered.filter(item => item.team === filters.team);
    }

    setData(filtered);
    toast.success('Filters applied successfully');
  };

  const handleResetFilters = () => {
    setFilters({
      month: 'November 2024',
      status: 'all',
      team: 'all'
    });
    setData(uploadCategories);
    toast.info('Filters reset');
  };

  const handleUploadClick = (category) => {
    setSelectedCategory(category);
    setShowUploadModal(true);
  };

  const handleViewDetails = (category) => {
    toast.info(`Viewing details for: ${category.name}`);
  };

  const handleViewFile = (e, categoryId) => {
    e.stopPropagation();
    toast.info('Opening file viewer...');
  };

  const handleRefresh = () => {
    toast.success('Data refreshed successfully');
  };

  const handleExport = () => {
    toast.success('Exporting data to Excel...');
  };

  const handleUploadSubmit = (file, comments) => {
    toast.success(`File "${file.name}" uploaded successfully!`);
    setShowUploadModal(false);
    
    // Simulate data update
    setTimeout(() => {
      const updatedData = data.map(item => {
        if (item.id === selectedCategory.id) {
          return {
            ...item,
            status: 'completed',
            uploadDate: new Date().toISOString(),
            fileSize: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
          };
        }
        return item;
      });
      setData(updatedData);
    }, 1000);
  };

  return (
    <div className="dashboard fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> <i className="fas fa-chevron-right"></i> <span>Billing Dashboard</span>
        </div>
        <h1 className="page-title">Billing & Cost Allocation Dashboard</h1>
        <p className="page-subtitle">
          Real-time monitoring and management of monthly billing cycle - November 2024
        </p>
      </div>

      {/* Process Timeline - Now at the top */}
      <Timeline timeline={timeline} />

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Data Table */}
        <DataTable
          data={data}
          onUploadClick={handleUploadClick}
          onViewDetails={handleViewDetails}
          onViewFile={handleViewFile}
          onRefresh={handleRefresh}
          onExport={handleExport}
        />

        {/* Sidebar */}
        <div className="sidebar">
          {/* Alerts Panel */}
          <AlertsPanel notifications={notifications} />
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          category={selectedCategory}
          onClose={() => setShowUploadModal(false)}
          onSubmit={handleUploadSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;