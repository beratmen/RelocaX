import { useState } from 'react'

export default function QuoteModal({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    date: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      showToast('Success! We\'ll contact you soon with a quote.', 'success')
      setFormData({ name: '', email: '', phone: '', from: '', to: '', date: '' })
      setLoading(false)
      const modal = document.getElementById('quoteModal')
      const bsModal = bootstrap.Modal.getInstance(modal)
      if (bsModal) bsModal.hide()
    }, 1500)
  }

  return (
    <div className="modal fade" id="quoteModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Get a Free Quote</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} id="quoteForm">
              <div className="mb-3">
                <label htmlFor="quoteName" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="quoteName" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quoteEmail" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="quoteEmail" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quotePhone" className="form-label">Phone</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="quotePhone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quoteFrom" className="form-label">Moving From (Postcode)</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="quoteFrom" 
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quoteTo" className="form-label">Moving To (Postcode)</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="quoteTo" 
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quoteDate" className="form-label">Preferred Moving Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="quoteDate" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required 
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button 
              type="submit" 
              form="quoteForm" 
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
