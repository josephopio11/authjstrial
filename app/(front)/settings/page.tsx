import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import SettingsModule from "./SettingsModule";

export const metadata: Metadata = {
  title: "Settings",
};

const SettingsPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingsModule user={user} />;
};

export default SettingsPage;
