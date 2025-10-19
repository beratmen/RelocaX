export default function Logo({ animated = false, size = 'medium' }) {
  const sizes = {
    small: { width: '120px', iconSize: '1.2rem' },
    medium: { width: '180px', iconSize: '2rem' },
    large: { width: '240px', iconSize: '3rem' }
  }

  const currentSize = sizes[size] || sizes.medium

  return (
    <div className="logo-wrapper d-flex align-items-center" style={{ width: currentSize.width }}>
      <div className={`logo-icon ${animated ? 'logo-animated' : ''}`}>
        <i className="bi bi-truck text-primary" style={{ fontSize: currentSize.iconSize }}></i>
      </div>
      <div className="ms-2">
        <div className="logo-text">
          Reloca<span className="text-primary">X</span>
        </div>
        <small className="logo-tagline text-muted">Move With Joy</small>
      </div>
    </div>
  )
}
