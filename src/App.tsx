import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "@/App.css";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Spotlight } from "@/components/ui/spotlight-new";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <WavyBackground className="max-w-2xl mx-auto pb-40" />
        <Spotlight />
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
    </div>
  );
}

export default App;
