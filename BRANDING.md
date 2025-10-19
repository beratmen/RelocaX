# 🎨 RelocaX Branding Guide

## Logo Variations

### Primary Logo
The RelocaX logo consists of a modern truck icon with gradient colors and the brand name.

**Components:**
- 🚚 Truck icon (Bootstrap Icons)
- Gradient background container
- Brand name "RelocaX" with emphasized "X"
- Tagline "Move With Joy"

### Color Palette

#### Primary Colors
- **Primary Blue**: `#0d6efd`
- **Accent Cyan**: `#0dcaf0`
- **Dark Background**: `#1a1d20`
- **Darker Background**: `#0f1214`

#### Secondary Colors
- **Success Green**: `#198754`
- **Warning Yellow**: `#ffc107`
- **Text Muted**: `#6c757d`
- **White**: `#ffffff`

### Logo Files

1. **relocax-icon.svg** - Favicon/App Icon
   - Dimensions: 100x100px
   - Format: SVG
   - Features: Gradient truck with box
   - Usage: Browser tabs, app icons, social media

2. **logo-full.svg** - Full Logo with Text
   - Dimensions: 300x80px
   - Format: SVG
   - Features: Truck icon + "RelocaX" text + tagline
   - Usage: Website header, presentations, documents

### Usage Guidelines

#### Navigation Bar
```jsx
<a className="navbar-brand d-flex align-items-center" href="#">
  <div className="logo-container me-2">
    <i className="bi bi-truck text-primary" style={{ fontSize: '2rem' }}></i>
  </div>
  <div>
    <span className="fw-bold" style={{ fontSize: '1.5rem' }}>
      Reloca<span className="text-primary">X</span>
    </span>
    <small className="d-block text-muted" style={{ fontSize: '0.6rem' }}>
      Move With Joy
    </small>
  </div>
</a>
```

#### Footer
```jsx
<h3 className="mb-3">
  <i className="bi bi-truck text-primary me-2"></i>
  RelocaX
</h3>
```

#### Animated Logo (Optional)
For loading screens or special effects:
```jsx
<Logo animated={true} size="large" />
```

### Logo Sizes

- **Small**: 120px width - For compact spaces
- **Medium**: 180px width - Standard size
- **Large**: 240px width - Hero sections, splash screens

### Clear Space

Maintain minimum clear space around the logo:
- Minimum: Logo height × 0.5
- Recommended: Logo height × 1

### Do's and Don'ts

#### ✅ Do's:
- Use official color palette
- Maintain aspect ratio
- Use on contrasting backgrounds
- Keep clear space around logo
- Use vector formats when possible

#### ❌ Don'ts:
- Don't distort or stretch
- Don't change colors arbitrarily
- Don't add drop shadows or effects
- Don't rotate the logo
- Don't place on busy backgrounds

### Typography

#### Brand Font
- Primary: Arial, sans-serif (bold)
- Fallback: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- Letter spacing: -0.5px for brand name

#### Tagline
- Font size: 0.6rem
- Color: Text muted (#6c757d)
- Letter spacing: 0.5px

### Icon Usage

The truck icon (`bi-truck`) from Bootstrap Icons is our primary brand symbol:
- Represents movement and transportation
- Modern and recognizable
- Scalable vector icon
- Works in all sizes

### Gradient Application

Our signature gradient flows from Primary Blue to Accent Cyan:
```css
background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
```

Apply to:
- Logo backgrounds
- Accent elements
- Text effects
- Buttons (hover states)

### Animation Guidelines

#### Logo Movement
For animated versions, use subtle movements:
```css
@keyframes logoMove {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
```

- Duration: 2s
- Easing: ease-in-out
- Loop: infinite

#### Hover Effects
```css
.navbar-brand:hover .logo-container {
  transform: rotate(-5deg);
  background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%);
}
```

### File Formats

- **SVG**: Primary format for web and print
- **PNG**: Raster backup (300 DPI for print)
- **ICO**: Browser favicons (multiple sizes)

### Accessibility

- Logo alt text: "RelocaX - Professional Moving Services"
- Maintain minimum contrast ratio: 4.5:1
- Ensure logo is visible on dark and light backgrounds

### Social Media Profiles

#### Profile Picture
- Use: `relocax-icon.svg`
- Minimum size: 400x400px
- Export as PNG with transparent background

#### Cover Images
- Include full logo with tagline
- Use gradient background
- Add relevant imagery (trucks, boxes, happy customers)

---

**Brand Guidelines Version**: 1.0  
**Last Updated**: October 2025  
**Contact**: brand@relocax.com
