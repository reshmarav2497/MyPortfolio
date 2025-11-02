import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const ContactMeSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Feel free to reach out if
          you'd like to discuss about projects.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <a
                    href="mailto:reshmaraveendra2497@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    reshmaraveendra2497@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4 text-center">
                  Professional Profiles
                </h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/reshmaraveendra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://github.com/reshmarav2497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
