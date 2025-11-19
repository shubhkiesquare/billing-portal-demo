import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadModal.css';
import { formatFileSize, validateFileType, validateFileSize } from '../../utils/helpers';

const UploadModal = ({ category, onClose, onSubmit }) => {
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState('');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/csv': ['.csv'],
      'text/plain': ['.txt']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    }
  });

  const handleSubmit = () => {
    if (!file) {
      alert('Please select a file');
      return;
    }
    onSubmit(file, comments);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">
              <i className="fas fa-upload"></i> Upload Data File
            </h3>
            <button className="modal-close" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label className="form-label">Data Category</label>
              <input
                type="text"
                className="form-control"
                value={category?.name || ''}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Upload File <span style={{color: 'var(--danger)'}}>*</span>
              </label>
              <div {...getRootProps()} className={`file-upload-area ${isDragActive ? 'dragover' : ''}`}>
                <input {...getInputProps()} />
                <div className="file-upload-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <div className="file-upload-text">Drag and drop your file here</div>
                <div className="file-upload-hint">or click to browse (Excel, CSV, TXT - Max 50MB)</div>
              </div>

              {file && (
                <div className="file-info">
                  <div className="file-details">
                    <i className="fas fa-file-excel file-icon-large"></i>
                    <div>
                      <div className="file-name">{file.name}</div>
                      <div className="file-size">{formatFileSize(file.size)}</div>
                    </div>
                    <button onClick={() => setFile(null)} className="file-remove">
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Comments (Optional)</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Add any relevant notes or comments about this upload..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>

            <div className="alert info">
              <div className="alert-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="alert-content">
                <div className="alert-title">File Validation</div>
                <div className="alert-message">
                  Your file will be automatically validated for format, schema, and data integrity.
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              <i className="fas fa-times"></i> Cancel
            </button>
            <button className="btn btn-success" onClick={handleSubmit} disabled={!file}>
              <i className="fas fa-check"></i> Upload & Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;