function ProjectCard({ title, desc, link }) {
  return (
    <div style={{
      padding: "20px",
      borderRadius: "16px",
      width: "260px",
      margin: "15px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s ease",
      position: "relative"
    }}>
      <h3 style={{
        color: "#FFD700",
        marginBottom: "8px"
      }}>
        {title}
      </h3>

      <p style={{ opacity: 0.6 }}>
        {desc}
      </p>

      <a
        href={link}
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "12px",
          color: "white",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}
      >
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;