import { useState } from 'react'

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Successfully subscribed! Check your email for confirmation.', 'success')
      setEmail('')
    } else {
      showToast('Please enter a valid email address.', 'danger')
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3 className="mb-3">
              <i className="bi bi-truck text-primary me-2"></i>
              RelocaX
            </h3>
            <p className="text-muted mb-4">
              Making your move stress-free and enjoyable. Professional moving services across the United States.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted hover-primary">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-muted hover-primary">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-muted hover-primary">
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-muted hover-primary">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#services">Local Moving</a></li>
              <li className="mb-2"><a href="#services">Long Distance</a></li>
              <li className="mb-2"><a href="#services">Packing Services</a></li>
              <li className="mb-2"><a href="#services">Storage</a></li>
              <li className="mb-2"><a href="#services">Office Moving</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about">About Us</a></li>
              <li className="mb-2"><a href="#testimonials">Testimonials</a></li>
              <li className="mb-2"><a href="#careers">Careers</a></li>
              <li className="mb-2"><a href="#blog">Blog</a></li>
              <li className="mb-2"><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <h5>Newsletter</h5>
            <p className="text-muted mb-3">Get moving tips and exclusive offers delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
            <div className="mt-4">
              <h6 className="mb-3">Contact Info</h6>
              <p className="text-muted mb-2">
                <i className="bi bi-telephone me-2"></i>
                (800) 123-4567
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@relocax.com
              </p>
              <p className="text-muted mb-0">
                <i className="bi bi-geo-alt me-2"></i>
                Nationwide Service
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0">
              © 2025 RelocaX, Inc. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#privacy" className="text-muted me-3">Privacy Policy</a>
            <a href="#terms" className="text-muted me-3">Terms of Service</a>
            <a href="#sitemap" className="text-muted">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
