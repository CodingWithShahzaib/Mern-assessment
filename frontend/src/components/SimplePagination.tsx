import React from 'react';
import { Button } from 'antd';

interface SimplePaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export const SimplePagination: React.FC<SimplePaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '16px 0',
      borderTop: '1px solid #f0f0f0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Button 
          type="text"
          style={{
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            color: 'rgba(0, 0, 0, 0.45)',
            border: 'none'
          }}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        
        <div
          style={{
            width: 28,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0052CC',
            color: '#FFFFFF',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          {currentPage}
        </div>
        
        <Button 
          type="text"
          style={{
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            color: 'rgba(0, 0, 0, 0.45)',
            border: 'none'
          }}
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}; 