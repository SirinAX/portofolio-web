import { useState, useEffect } from 'react'
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'

const skills = [
  { name: 'Java',       color: '#f89820' },
  { name: 'Python',     color: '#3776ab' },
  { name: 'Dart',       color: '#0175c2' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Django',     color: '#44b78b' },
  { name: 'Flutter',    color: '#54c5f8' },
  { name: 'Linux',      color: '#fcc624' },
  { name: 'VSCode',     color: '#007acc' },
  { name: 'Git',        color: '#f05032' },
  { name: 'React',      color: '#61dafb' },
]

const currently = [
  '🎮  Learning Game Development',
  '🌐  Exploring web & systems development',
  '🔍  Open to collaborative projects and open-source',
  '🔒  Diving into cyber security fundamentals',
]

function useTypewriter(words, speed = 100) {
  const [text, setText]           = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1500)
        else setCharIndex(c => c + 1)
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex === 0) { setDeleting(false); setWordIndex(w => (w + 1) % words.length) }
        else setCharIndex(c => c - 1)
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed])

  return text
}

/* ─── reusable hover link ─── */
function NavLink({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? 'var(--accent)' : 'var(--muted)',
        textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s',
        fontFamily: 'Syne', fontWeight: 600,
      }}>{children}</a>
  )
}

export default function Home() {
  const role = useTypewriter([
    'Game Developer', 'CS Student @ Fasilkom UI', 'Pixel Artist', 'Future Scientist', 'Tech Enthusiast', 'Lifelong Learner',
  ])

  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', width: '100%' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.1rem 4rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '-0.02em' }}>
          Andi H
        </span>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {[['#projects','Projects'],['#skills','Skills'],['#contact','Contact']].map(([href, label]) => (
            <NavLink key={href} href={href}>{label}</NavLink>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        padding: '7rem 4rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* big glow */}
        <div style={{
          position: 'absolute', top: '38%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, var(--accent-bg) 0%, transparent 68%)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* CONTAINER HERO (FLEX) */}
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '1100px', 
          width: '100%',
          display: 'flex', 
          flexWrap: 'wrap-reverse', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '3rem'
        }}>
          
          {/* KIRI: TEKS */}
          <div style={{ flex: '1 1 500px', textAlign: 'left', animation: 'fadeUp 0.7s ease both' }}>
            <p style={{
              color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.22em',
              marginBottom: '1.2rem', textTransform: 'uppercase', fontFamily: 'Syne', fontWeight: 700,
            }}>Hello, World 👋</p>

            <h1 style={{
              fontFamily: 'Syne', fontWeight: 800, lineHeight: 1.1,
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              marginBottom: '1.2rem', color: 'var(--text-h)',
              letterSpacing: '-0.04em',
            }}>
              I'm{' '}
              <span style={{
                color: 'var(--accent)',
                textShadow: '0 0 40px var(--accent-border)',
                display: 'inline-block', animation: 'float 4s ease-in-out infinite',
              }}>Andi !</span>
            </h1>

            <div style={{ height: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1.6rem' }}>
              <span style={{ fontFamily: 'Syne', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--muted)', fontWeight: 600 }}>
                {role}<span style={{ color: 'var(--accent)', animation: 'blink 1s step-end infinite' }}>|</span>
              </span>
            </div>

            <p style={{
              color: 'var(--text)', maxWidth: '500px', lineHeight: 1.75,
              marginBottom: '2.8rem', fontSize: '1rem',
            }}>
              Building stuff, fixing bugs, learning along the way.
              CS student focused on game dev, web, robotics, and security systems.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <a href="#projects" style={{
                background: 'var(--accent)', color: '#0f0f11',
                padding: '0.85rem 2.2rem', borderRadius: '999px',
                textDecoration: 'none', fontWeight: 700,
                fontFamily: 'Syne', fontSize: '0.95rem',
                transition: 'transform 0.2s, background 0.2s',
                boxShadow: '0 4px 20px var(--accent-border)',
              }}
                onMouseEnter={e => { e.target.style.background = 'var(--accent-hover)'; e.target.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'scale(1)' }}
              >See Projects →</a>

              <a href="https://www.linkedin.com/in/andihh/" target="_blank" rel="noreferrer" style={{
                border: '1px solid var(--border)', color: 'var(--text-h)',
                padding: '0.85rem 2.2rem', borderRadius: '999px',
                textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-h)' }}
              >LinkedIn</a>

              <a href="https://github.com/SirinAX" target="_blank" rel="noreferrer" style={{
                border: '1px solid var(--border)', color: 'var(--text-h)',
                padding: '0.85rem 2.2rem', borderRadius: '999px',
                textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-h)' }}
              >GitHub</a>
            </div>
          </div>

          {/* KANAN: FOTO */}
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: 'clamp(250px, 25vw, 350px)',
              aspectRatio: '1/1',
              borderRadius: '24px', 
              border: '4px solid var(--border)',
              backgroundImage: 'url(/Andi.jpeg)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 10px 40px var(--accent-bg)', // Efek glow di belakang foto
              transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-10px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            />
          </div>

        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: '7rem 4rem', width: '100%', maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Syne', fontWeight: 700 }}>Work</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text-h)', letterSpacing: '-0.03em' }}>Projects 🚀</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: '2rem 4rem 7rem', width: '100%', maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Syne', fontWeight: 700 }}>Toolkit</p>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text-h)', letterSpacing: '-0.03em' }}>Tools & Tech 🛠️</h2>
        </div>

        {/* Container Skills */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.8rem', 
          marginBottom: '4rem',
          justifyContent: 'flex-start' 
        }}>
          {skills.map((s, i) => (
            <SkillPill key={i} skill={s} />
          ))}
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1.2rem', fontFamily: 'Syne', fontWeight: 700 }}>What I'm Up To</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {currently.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 1.2rem',
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '12px', fontSize: '0.95rem', color: 'var(--text-h)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        padding: '7rem 4rem', textAlign: 'center',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg2)',
        width: '100%', boxSizing: 'border-box',
      }}>
        <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'Syne', fontWeight: 700 }}>Get in touch</p>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-h)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Let's build something<br />
          <span style={{ color: 'var(--accent)' }}>together.</span>
        </h2>
        <p style={{ color: 'var(--text)', maxWidth: '420px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          Open for collaboration, internship, attending hackathons, or just want to say hi. Feel free to reach out!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hakimandi976@gmail.com" style={{
            background: 'var(--accent)', color: '#0f0f11',
            padding: '0.9rem 2.4rem', borderRadius: '999px',
            textDecoration: 'none', fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem',
            boxShadow: '0 4px 20px var(--accent-border)',
            transition: 'transform 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.background = 'var(--accent-hover)' }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.background = 'var(--accent)' }}
          >Say Hello ✉️</a>

          <a href="https://www.linkedin.com/in/andihh/" target="_blank" rel="noreferrer" style={{
            border: '1px solid var(--border)', color: 'var(--text-h)',
            padding: '0.9rem 2.4rem', borderRadius: '999px',
            textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-h)' }}
          >LinkedIn</a>

          <a href="https://github.com/SirinAX" target="_blank" rel="noreferrer" style={{
            border: '1px solid var(--border)', color: 'var(--text-h)',
            padding: '0.9rem 2.4rem', borderRadius: '999px',
            textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-h)' }}
          >GitHub</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '1.4rem 4rem', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem',
        color: 'var(--muted)', fontSize: '0.8rem', fontFamily: 'Syne',
        background: 'var(--bg2)',
        marginTop: 'auto',
      }}>
        <span>© 2026 Andi Hakim Himawan</span>
        <span>Made with React + Vite ⚡</span>
      </footer>

    </div>
  )
}

function SkillPill({ skill }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hov ? skill.color : 'var(--border)'}`,
        padding: '0.5rem 1.2rem', borderRadius: '10px',
        fontSize: '0.9rem',
        color: hov ? skill.color : 'var(--text-h)',
        cursor: 'default', transition: 'all 0.2s',
        fontFamily: 'Syne', fontWeight: 600, letterSpacing: '0.04em',
      }}
    >{skill.name}</span>
  )
}