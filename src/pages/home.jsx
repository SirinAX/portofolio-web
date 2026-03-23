import { useState, useEffect } from 'react'
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'

const skills = [
  { name: 'Java', color: '#f89820' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Dart', color: '#0175c2' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Django', color: '#092e20' },
  { name: 'Flutter', color: '#54c5f8' },
  { name: 'Linux', color: 'var(--text-h)' },
  { name: 'VSCode', color: '#007acc' },
  { name: 'Git', color: '#f05032' },
  { name: 'React', color: '#61dafb' },
]

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
  const role = useTypewriter(['Game Developer', 'CS Student @ Fasilkom UI', 'Pixel Artist', 'Problem Solver'])

  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '1126px', maxWidth: '100%',
        zIndex: 100,
        padding: '1.2rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        boxSizing: 'border-box',
      }}>
        <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)' }}>
          andi.dev
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Projects', 'Skills', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* grid bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }} />
        {/* accent glow */}
        <div style={{
          position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '500px', height: '300px',
          background: 'radial-gradient(ellipse, var(--accent-bg) 0%, transparent 70%)',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
          <p style={{
            color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em',
            marginBottom: '1rem', textTransform: 'uppercase', fontFamily: 'Syne',
          }}>
            Hello, World 👋
          </p>
          <h1 style={{
            fontFamily: 'Syne', fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            fontWeight: 800, lineHeight: 1.05, marginBottom: '1rem',
            color: 'var(--text-h)',
          }}>
            I'm <span style={{ color: 'var(--accent)' }}>Andi</span>
          </h1>
          <div style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'Syne', fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--muted)' }}>
              {role}<span style={{ color: 'var(--accent)', animation: 'blink 1s step-end infinite' }}>|</span>
            </span>
          </div>
          <p style={{ color: 'var(--text)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1rem', margin: '0 auto 2.5rem' }}>
            Building stuff, fixing bugs, learning along the way. CS student focused on game dev, web, and systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              background: 'var(--accent)', color: '#fff', padding: '0.75rem 2rem',
              borderRadius: '999px', textDecoration: 'none', fontWeight: 600,
              fontFamily: 'Syne', fontSize: '0.9rem', transition: 'transform 0.2s, opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >See Projects →</a>
            <a href="https://github.com/SirinAX" target="_blank" rel="noreferrer" style={{
              border: '1px solid var(--border)', color: 'var(--text-h)', padding: '0.75rem 2rem',
              borderRadius: '999px', textDecoration: 'none', fontFamily: 'Syne', fontSize: '0.9rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
            >GitHub →</a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.15em',
        }}>
          <span>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--muted), transparent)' }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '6rem 2.5rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Syne' }}>Work</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-h)' }}>Projects 🚀</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: '4rem 2.5rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Syne' }}>Toolkit</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-h)' }}>Tools & Tech 🛠️</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {skills.map((s, i) => (
            <span key={i} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              padding: '0.45rem 1.1rem', borderRadius: '8px',
              fontSize: '0.85rem', color: 'var(--text-h)', cursor: 'default', transition: 'all 0.2s',
              fontFamily: 'Syne', fontWeight: 600, letterSpacing: '0.05em',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color === 'var(--text-h)' ? 'var(--accent)' : s.color
                e.currentTarget.style.color = s.color === 'var(--text-h)' ? 'var(--accent)' : s.color
                e.currentTarget.style.background = 'var(--bg3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-h)'
                e.currentTarget.style.background = 'var(--bg2)'
              }}
            >{s.name}</span>
          ))}
        </div>

        {/* what i'm up to */}
        <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'Syne' }}>Currently</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              '🎮 Learning Game Development',
              '🌐 Exploring web & systems development',
              '🔍 Open to collaborative projects and open-source',
              '🔒 Diving into cyber security fundamentals',
            ].map((item, i) => (
              <p key={i} style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: '6rem 2.5rem', textAlign: 'center',
        borderTop: '1px solid var(--border)', marginTop: 'auto',
      }}>
        <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Syne' }}>Get in touch</p>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-h)' }}>
          Let's build something<br /><span style={{ color: 'var(--accent)' }}>together.</span>
        </h2>
        <p style={{ color: 'var(--text)', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Open for collaboration, internship, atau ngobrol soal game dev.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hakimandi976@gmail.com" style={{
            background: 'var(--accent)', color: '#fff', padding: '0.85rem 2.2rem',
            borderRadius: '999px', textDecoration: 'none', fontFamily: 'Syne', fontWeight: 700,
            fontSize: '0.95rem', display: 'inline-block', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >Say Hello ✉️</a>
          <a href="https://github.com/SirinAX" target="_blank" rel="noreferrer" style={{
            border: '1px solid var(--border)', color: 'var(--text-h)', padding: '0.85rem 2.2rem',
            borderRadius: '999px', textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600,
            fontSize: '0.95rem', display: 'inline-block', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >GitHub →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '1.5rem 2.5rem', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.8rem',
      }}>
        <span>© 2026 Andi Hakim Himawan</span>
        <span style={{ color: 'var(--muted)' }}>Made with React + Vite ⚡</span>
      </footer>

    </div>
  )
}