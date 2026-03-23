import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div style={{ padding: "60px" }}>
      
      {/* HERO */}
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        lineHeight: "1.2"
      }}>
        Hi, I'm <span style={{
          color: "#FFD700",
          textShadow: "0 0 10px rgba(255,215,0,0.7)"
        }}>
          Andi
        </span> 👋
      </h1>

      <p style={{
        marginTop: "10px",
        opacity: 0.6,
        maxWidth: "500px"
      }}>
        Computer Science Student focused on Game Development and Robotics with a passion for creating immersive experiences and innovative solutions.
      </p>

      {/* PROJECT SECTION */}
      <h2 style={{
        marginTop: "50px",
        color: "#FFD700"
      }}>
        Projects 🚀
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>

    </div>
  );
}

export default Home;