import { Profile } from "@/components/Profile";
import { Menu } from "lucide-react";

interface HeaderProps {
  settingsState: boolean;
  setSettingsState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ settingsState, setSettingsState }: HeaderProps) => {
  const toggleSettings = () => {
    setSettingsState((p) => !p);
  };

  return (
    <div className="sticky flex items-center justify-end width-full h-10">
      <Profile trigger={settingsState} onOpenChange={toggleSettings} />
      <div className="flex items-center">
          <Menu onClick={toggleSettings} className="text-accent-foreground mr-2" />
      </div>
    </div>
  );
};