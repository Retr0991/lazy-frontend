import { invoke } from "@tauri-apps/api/core";
import { toast } from "sonner";

export const sendToServer = async () => {
  try {
    const res: string = await invoke("do_stuff");
    toast.success(res);
  } catch (err: any) {
    toast.error(err);
  }
};
