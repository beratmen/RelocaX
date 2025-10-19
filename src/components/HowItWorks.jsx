export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: 'bi-search',
      title: 'Get a Quote',
      description: 'Fill out our simple form or call us for an instant, free quote tailored to your moving needs.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      icon: 'bi-calendar-check',
      title: 'Schedule Your Move',
      description: 'Choose a convenient date and time. Our team will work around your schedule for a stress-free experience.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      icon: 'bi-box-seam',
      title: 'We Pack & Load',
      description: 'Our professional movers carefully pack, load, and secure your belongings with premium materials.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      icon: 'bi-house-check',
      title: 'Safe Delivery',
      description: 'We transport and unload everything at your new location, ensuring everything arrives in perfect condition.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    }
  ]

  return (
    <section className="py-5" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-5 fw-bold mb-3">How It Works</h2>
          <p className="lead text-muted">
            Four simple steps to a successful move
          </p>
        </div>
        
        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={step.id}>
              <div className="text-center h-100 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="position-relative mb-4">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="rounded-circle shadow-lg"
                    width="150"
                    height="150"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                    style={{ width: '40px', height: '40px', fontSize: '1.25rem', fontWeight: 'bold' }}
                  >
                    {step.id}
                  </div>
                </div>
                <i className={`${step.icon} text-primary mb-3`} style={{ fontSize: '2.5rem' }}></i>
                <h3 className="h4 mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button 
            className="btn btn-primary btn-lg px-5"
            data-bs-toggle="modal" 
            data-bs-target="#quoteModal"
          >
            <i className="bi bi-rocket-takeoff me-2"></i>
            Start Your Move Today
          </button>
        </div>
      </div>
    </section>
  )
}
