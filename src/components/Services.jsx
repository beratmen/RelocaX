export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Local Moving',
      description: 'Quick and efficient moving services within your city. Perfect for apartments, homes, and offices.',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop',
      features: ['Same-day service', 'Professional packing', 'Furniture assembly']
    },
    {
      id: 2,
      title: 'Long Distance Moving',
      description: 'Cross-country moves made easy with our experienced team and modern equipment.',
      icon: '🚛',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      features: ['GPS tracking', 'Insurance included', 'Door-to-door service']
    },
    {
      id: 3,
      title: 'Packing Services',
      description: 'Professional packing and unpacking services to protect your valuable belongings.',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=600&fit=crop',
      features: ['Quality materials', 'Expert handling', 'Item labeling']
    },
    {
      id: 4,
      title: 'Storage Solutions',
      description: 'Secure climate-controlled storage facilities for short or long-term needs.',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop',
      features: ['24/7 security', 'Climate control', 'Flexible terms']
    },
    {
      id: 5,
      title: 'Office Relocation',
      description: 'Minimize downtime with our specialized commercial moving services.',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      features: ['After-hours service', 'IT equipment care', 'Minimal disruption']
    },
    {
      id: 6,
      title: 'Specialty Items',
      description: 'Expert handling of pianos, antiques, artwork, and other valuable items.',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
      features: ['Custom crating', 'White glove service', 'Insurance coverage']
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive moving solutions tailored to your needs
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className="service-card h-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="position-relative mb-3">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-100 rounded-3"
                    style={{ height: '200px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className="position-absolute top-0 start-0 m-3 bg-primary text-white p-2 rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="h4 mb-3">{service.title}</h3>
                <p className="text-muted mb-3">{service.description}</p>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline-primary w-100 mt-3">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
