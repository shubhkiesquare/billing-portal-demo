import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './UploadData.css';
import { uploadCategories } from '../../data/mockData';
import UploadModal from '../common/UploadModal';

const UploadData = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleUploadSubmit = (file, comments) => {
    toast.success(`File uploaded successfully for: ${selectedCategory.name}`);
    setShowModal(false);
  };

  return (
    <div className="upload-page fade-in">
      <div className="page-header">
        <h1 className="page-title">Upload Data</h1>
        <p className="page-subtitle">Upload required files for monthly billing cycle</p>
      </div>

      <div className="upload-grid">
        {uploadCategories.map(category => (
          <div key={category.id} className="upload-card">
            <div className="upload-card-header">
              <div className="upload-icon">
                <i className="fas fa-file-upload"></i>
              </div>
              <div>
                <h3>{category.name}</h3>
                <p>{category.responsible} - {category.team}</p>
              </div>
            </div>
            <div className="upload-card-body">
              <div className="info-row">
                <span>Deadline:</span>
                <strong>{category.deadline}th of month</strong>
              </div>
              <div className="info-row">
                <span>Status:</span>
                <span className={`status-badge ${category.status}`}>
                  {category.status}
                </span>
              </div>
            </div>
            <div className="upload-card-footer">
              <button 
                className="btn btn-primary"
                onClick={() => handleUploadClick(category)}
              >
                <i className="fas fa-upload"></i> Upload File
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <UploadModal
          category={selectedCategory}
          onClose={() => setShowModal(false)}
          onSubmit={handleUploadSubmit}
        />
      )}
    </div>
  );
};

export default UploadData;