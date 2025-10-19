export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'RelocaX made our cross-country move seamless! The team was professional, careful with our belongings, and delivered everything on time. Highly recommended!',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'We needed to relocate our office with minimal downtime. RelocaX handled everything perfectly, from packing to setting up at the new location. Exceptional service!',
      rating: 5,
      location: 'Austin, TX'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Apartment Renter',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Best moving experience ever! The movers were friendly, efficient, and took great care of my furniture. The pricing was transparent with no hidden fees.',
      rating: 5,
      location: 'New York, NY'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Retired',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'Moving my antique furniture collection was a concern, but RelocaX handled everything with white-glove service. Every piece arrived in perfect condition.',
      rating: 5,
      location: 'Miami, FL'
    }
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
          <p className="lead text-muted">
            Real stories from satisfied customers across the country
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6" key={testimonial.id}>
              <div className="testimonial-card h-100 slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="mb-0 h5">{testimonial.name}</h4>
                    <small className="text-muted">{testimonial.role} • {testimonial.location}</small>
                  </div>
                </div>
                <div className="mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="d-flex align-items-center mt-3 text-muted">
                  <i className="bi bi-shield-check me-2 text-success"></i>
                  <small>Verified Customer</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-3">
            <div className="p-3">
              <i className="bi bi-award-fill text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2 mb-0">Licensed & Insured</h5>
              <small className="text-muted">Fully certified</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-3">
              <i className="bi bi-truck text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2 mb-0">Modern Fleet</h5>
              <small className="text-muted">Well-maintained trucks</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-3">
              <i className="bi bi-people-fill text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2 mb-0">Trained Staff</h5>
              <small className="text-muted">Professional movers</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-3">
              <i className="bi bi-headset text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2 mb-0">24/7 Support</h5>
              <small className="text-muted">Always here to help</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
