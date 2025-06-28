import React from 'react';
import './Modal.css';
export default function Modal({ title, content, onClose }) {
  React.useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className='modal-box'>
      <h4 style={{ color: 'violet' }}>{title}</h4>
      <p style={{ color: 'red' }}>{content}</p>
      <button
        style={{
          backgroundColor: 'red',
          padding: '10px',
          color: 'white',
          borderRadius: '5px',
        }}
        onClick={onClose}>
        Close
      </button>
    </div>
  );
}
