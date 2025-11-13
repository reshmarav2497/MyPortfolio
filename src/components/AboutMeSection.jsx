import { Briefcase, Code, User } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>

            <p className="text-muted-foreground">
              With 2.5 years of experience building enterprise-scale
              applications, I specialize in creating secure, scalable solutions
              using React.js, Javascript/Typescript, .NET Core, and Blazor WASM.
              My work includes developing Chrome/Edge extensions and Outlook Web
              Add-ins that are deployed enterprise-wide.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about delivering high-performance applications with
              strong focus on security and user experience. My expertise extends
              to CI/CD practices, comprehensive testing, and optimizing
              application performance across different platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={import.meta.env.VITE_RESUME_URL}
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Expertise in React.js, Javascript/Typescript, Redux, and
                    Blazor WASM for building modern, responsive web applications
                    and browser extensions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in C#, .NET Core, REST APIs, and SQL for
                    building secure and scalable backend solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Testing</h4>
                  <p className="text-muted-foreground">
                    Experienced in CI/CD, Git, Jest, React Testing Library, and
                    performance optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
