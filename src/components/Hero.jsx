export default function Hero({ showToast }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 fade-in">
            <h1 className="hero-title">
              Move With Joy 🚚
            </h1>
            <p className="hero-subtitle">
              Professional moving services that make relocation stress-free and enjoyable. 
              Experience the difference with RelocaX - where every move is a fresh start.
            </p>
            <div className="d-flex gap-3 mb-4">
              <button 
                type="button" 
                className="btn btn-primary btn-lg px-4"
                data-bs-toggle="modal" 
                data-bs-target="#quoteModal"
              >
                <i className="bi bi-clipboard-check me-2"></i>
                Get Free Quote
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light btn-lg px-4"
                data-bs-toggle="modal" 
                data-bs-target="#contactModal"
              >
                <i className="bi bi-envelope me-2"></i>
                Contact Us
              </button>
            </div>
            <div className="d-flex gap-4 mt-4">
              <div>
                <h3 className="text-primary mb-0">500+</h3>
                <small className="text-muted">Happy Customers</small>
              </div>
              <div>
                <h3 className="text-primary mb-0">50+</h3>
                <small className="text-muted">Cities Served</small>
              </div>
              <div>
                <h3 className="text-primary mb-0">99%</h3>
                <small className="text-muted">Success Rate</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 slide-in-right">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                className="img-fluid rounded-4 shadow-lg" 
                alt="Professional moving team with boxes" 
                loading="lazy" 
              />
              <div className="position-absolute top-0 end-0 m-3 bg-primary text-white p-3 rounded-3 shadow">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-star-fill"></i>
                  <div>
                    <strong>4.9/5</strong>
                    <small className="d-block">Rating</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
