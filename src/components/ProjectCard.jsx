import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '12px',
        padding: '1.8rem',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{
          background: 'var(--accent-bg)', color: 'var(--accent)',
          fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '6px', fontWeight: 600,
          fontFamily: 'Syne', letterSpacing: '0.05em',
        }}>{project.tag}</span>
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{project.year}</span>
      </div>
      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--text-h)' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
        {project.desc}
      </p>
      <a href={project.link} style={{
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s',
        fontFamily: 'Syne',
      }}>View Project →</a>
    </div>
  )
}