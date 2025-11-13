import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "./ui/toaster";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  }, []);
  
  return (
    <div className={`app ${isLoading ? "loaded" : ""}`}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
