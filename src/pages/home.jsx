import { useState, useEffect } from 'react'
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'

const skills = ['React', 'JavaScript', 'Python', 'Java', 'Git', 'Linux', 'Vite', 'Figma']

function useTypewriter(words, speed = 100) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        } else setCharIndex(c => c + 1)
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex === 0) {
          setDeleting(false)
          setWordIndex(w => (w + 1) % words.length)
        } else setCharIndex(c => c - 1)
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed])

  return text
}

export default function Home() {
  const role = useTypewriter(['Game Developer', 'CS Student', 'Pixel Artist', 'Problem Solver'])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.2rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(17,17,17,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: 'var(--yellow)' }}>
          andi.dev
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Projects', 'Skills', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(245,197,24,0.08) 0%, transparent 70%)',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--yellow)', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Hello, World 👋
          </p>
          <h1 style={{
            fontFamily: 'Syne', fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 800, lineHeight: 1.05, marginBottom: '1rem',
          }}>
            I'm <span style={{ color: 'var(--yellow)' }}>Andi</span>
          </h1>
          <div style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'Syne', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--muted)' }}>
              {role}<span style={{ color: 'var(--yellow)', animation: 'blink 1s step-end infinite' }}>|</span>
            </span>
          </div>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1rem' }}>
            Computer Science student at Fasilkom UI, focused on Game Development
            and creating immersive digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              background: 'var(--yellow)', color: '#111', padding: '0.75rem 2rem',
              borderRadius: '999px', textDecoration: 'none', fontWeight: 600,
              fontFamily: 'Syne', fontSize: '0.9rem', transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >See Projects →</a>
            <a href="#contact" style={{
              border: '1px solid var(--border)', color: 'var(--text)', padding: '0.75rem 2rem',
              borderRadius: '999px', textDecoration: 'none', fontFamily: 'Syne', fontSize: '0.9rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.target.style.borderColor = 'var(--yellow)'}
              onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
            >Contact Me</a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.1em',
        }}>
          <span>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--muted), transparent)' }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ color: 'var(--yellow)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Work</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>Projects 🚀</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: '4rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ color: 'var(--yellow)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Toolkit</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>Skills</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {skills.map((s, i) => (
            <span key={i} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              padding: '0.5rem 1.2rem', borderRadius: '999px',
              fontSize: '0.9rem', color: 'var(--text)', cursor: 'default', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--yellow)'; e.target.style.color = 'var(--yellow)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
            >{s}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: '6rem 1.5rem', textAlign: 'center',
        borderTop: '1px solid var(--border)', marginTop: '2rem',
      }}>
        <p style={{ color: 'var(--yellow)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get in touch</p>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Let's build something<br /><span style={{ color: 'var(--yellow)' }}>together.</span>
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Open for collaboration, internship, atau ngobrol soal game dev.
        </p>
        <a href="mailto:hakimandi976@gmail.com" style={{
          background: 'var(--yellow)', color: '#111', padding: '0.9rem 2.5rem',
          borderRadius: '999px', textDecoration: 'none', fontFamily: 'Syne', fontWeight: 700,
          fontSize: '1rem', display: 'inline-block', transition: 'transform 0.2s',
        }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >Say Hello ✉️</a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '1.5rem 2.5rem', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.8rem',
      }}>
        <span>© 2024 Andi Hakim Himawan</span>
        <span>Made with React + Vite ⚡</span>
      </footer>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  )
}