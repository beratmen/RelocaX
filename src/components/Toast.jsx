import { useEffect } from 'react'

export default function Toast({ message, type }) {
  useEffect(() => {
    const toastEl = document.getElementById('liveToast')
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl)
      toast.show()
    }
  }, [message])

  return (
    <div 
      id="liveToast" 
      className={`toast align-items-center text-bg-${type} border-0 position-fixed bottom-0 end-0 m-3`} 
      role="alert" 
      style={{ zIndex: 9999 }}
    >
      <div className="d-flex">
        <div className="toast-body">
          {message}
        </div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  )
}
