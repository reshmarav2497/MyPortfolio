import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eatzy - Food Delivery App",
    description:
      "A full-stack food delivery application built with React for the frontend and .NET Core for the backend.",
    image: "/projects/eatzy.png",
    tags: ["React.js", ".NET Core", "SQL", "REST APIs"],
    demoUrl: "https://eatzy-alpha.vercel.app/",
    githubUrl: "https://github.com/reshmarav2497/Eatzy",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A full-stack Todo Application built using React + TypeScript (Vite) for the frontend and .NET 8 Web API for the backend.",
    image: "/projects/todo.png",
    tags: ["React.js", ".NET Core", "SQL Server/Azure SQL", "REST APIs"],
    demoUrl: "https://todo-app-rho-sable.vercel.app/",
    githubUrl: "https://github.com/reshmarav2497/TodoApp",
  },
  {
    id: 3,
    title: "Browser Extension - Enterprise Grade",
    description:
      "Enterprise-grade Chrome/Edge extension integrated with Gmail, ServiceNow, and Salesforce. Features DOM manipulation and secure data handling.",
    image: "/projects/enterprise.png",
    tags: ["Blazor WASM", "JavaScript", "C#", ".NET Core"],
  },
  {
    id: 4,
    title: "Outlook Web Add-in - Email Validator",
    description:
      "Enterprise-wide Outlook web add-in for email validation and security, deployed across Windows, Mac, and Web platforms.",
    image: "/projects/outlook.png",
    tags: ["React.js", "Redux", "TypeScript", "Office JS API"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing a mix of personal and enterprise projects that demonstrate
          my expertise in full-stack development, browser extensions, and
          enterprise applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-5"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {project.demoUrl && (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/reshmarav2497"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
