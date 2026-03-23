import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>

      {projects.map((p, index) => (
        <ProjectCard
          key={index}
          title={p.title}
          desc={p.desc}
          link={p.link}
        />
      ))}
    </div>
  );
}

export default Home;