function ProjectCard({ title, desc, link }) {
  return (
    <div style={{ border: "1px solid white", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} target="_blank">View Project</a>
    </div>
  );
}

export default ProjectCard;