import './SectionHeader.css';

function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title">
        {typeof title === 'string' ? (
          <span className="gradient-text">{title}</span>
        ) : title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
