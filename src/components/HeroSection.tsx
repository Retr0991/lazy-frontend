import { Button } from "@/components/ui/button";
import { sendToServer } from "@/api/sendDataToServer";

export const HeroSection = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl text-white font-bold inter-var text-center">
        Well, you're locked in.
      </h1>
      <Button onClick={() => sendToServer()}>
        Click Me
      </Button>
    </div>
  );
};
