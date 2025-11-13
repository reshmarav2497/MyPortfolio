import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Blazor WASM", category: "frontend" },

  // Backend
  { name: "C#", category: "backend" },
  { name: ".NET Core (8+)", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "SQL Server/Azure SQL", category: "backend" },

  // Testing & Tools
  { name: "Jest", category: "testing" },
  { name: "React Testing Library", category: "testing" },
  { name: "Chrome DevTools", category: "testing" },
  { name: "Git", category: "tools" },
  { name: "Azure Repos", category: "tools" },
  { name: "CI/CD", category: "tools" },
  { name: "Agile/Scrum", category: "tools" },
  { name: "VS Code & Visual Studio", category: "tools" },
];

const categories = ["all", "frontend", "backend", "testing", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg text-primary">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
