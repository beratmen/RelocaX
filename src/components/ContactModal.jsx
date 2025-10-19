import { useState } from 'react'

export default function ContactModal({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      showToast('Thank you for contacting us! We\'ll respond shortly.', 'success')
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
      const modal = document.getElementById('contactModal')
      const bsModal = bootstrap.Modal.getInstance(modal)
      if (bsModal) bsModal.hide()
    }, 1500)
  }

  return (
    <div className="modal fade" id="contactModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contact Us</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} id="contactForm">
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contactName" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="contactEmail" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="contactMessage" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button 
              type="submit" 
              form="contactForm" 
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
