import { useState } from 'react'

export default function Navbar() {
  const [postcodeInput, setPostcodeInput] = useState('')

  const handlePostcodeSubmit = (e) => {
    e.preventDefault()
    if (postcodeInput.length === 5 && /^\d+$/.test(postcodeInput)) {
      alert(`Checking service availability for ${postcodeInput}...`)
    } else {
      alert('Please enter a valid 5-digit postcode.')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" role="navigation">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#" aria-label="RelocaX Home">
          <div className="logo-container me-2">
            <i className="bi bi-truck text-primary" style={{ fontSize: '2rem' }}></i>
          </div>
          <div>
            <span className="fw-bold" style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
              Reloca<span className="text-primary">X</span>
            </span>
            <small className="d-block text-muted" style={{ fontSize: '0.6rem', marginTop: '-5px' }}>
              Move With Joy
            </small>
          </div>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#residential">Residential Moving</a></li>
                <li><a className="dropdown-item" href="#commercial">Commercial Moving</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#storage">Storage Solutions</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handlePostcodeSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Enter Postcode"
              value={postcodeInput}
              onChange={(e) => setPostcodeInput(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Check</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
