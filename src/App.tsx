import { useState } from "react";
import "@/App.css";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Toaster } from "@/components/ui/sonner";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <WavyBackground className="max-w-2xl mx-auto pb-40" />
      </div>

      <div className="relative flex flex-col h-full z-20">
        <Header
          settingsState={openSettings}
          setSettingsState={setOpenSettings}
        />
        <div className="flex-grow flex items-center justify-center">
          <HeroSection />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
