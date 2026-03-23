function ProjectCard({ title, desc, link }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "20px",
      margin: "10px",
      borderRadius: "12px",
      width: "250px",
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)",
      transition: "0.3s"
    }}>
      <h3 style={{ color: "#FFD700" }}>{title}</h3>
      <p style={{ opacity: 0.7 }}>{desc}</p>

      <a
        href={link}
        target="_blank"
        style={{
          color: "white",
          textDecoration: "none",
          display: "inline-block",
          marginTop: "10px"
        }}
      >
        View →
      </a>
    </div>
  );
}

export default ProjectCard;