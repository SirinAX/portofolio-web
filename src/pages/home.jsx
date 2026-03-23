import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Hi, I'm <span style={{ color: "#FFD700" }}>Andi</span> 👋
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "40px" }}>
        Computer Science Student | Tech Enthusiast
      </p>

      <h2 style={{ marginBottom: "20px", color: "#FFD700" }}>
        Projects 🚀
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Home;