import { ToggleTheme } from "@/components/ToggleTheme";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle Theme */}
      <ToggleTheme />

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
