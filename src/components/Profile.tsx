import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ProfileProps {
  trigger: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Profile = ({ trigger, onOpenChange }: ProfileProps) => {
  return (
    <Drawer open={trigger} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Lazy Attendance</DrawerTitle>
          <DrawerDescription>
            Refer the Web UI for anything and everything.
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 py-2 space-y-4">
          <input
            id="apiKey"
            type="text"
            placeholder="Enter your API key"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="destructive">Wanna log out?</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
