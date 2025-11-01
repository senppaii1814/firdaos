import '../Toast.css';

function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="toast-container">
      <div className="toast toast-success">
        <svg className="toast-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
}

export default Toast;

