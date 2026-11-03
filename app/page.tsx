import PasswordGate from "@/components/PasswordGate";
import MainSite from "@/components/MainSite";

export default function Home() {
  return (
    <PasswordGate>
      <MainSite />
    </PasswordGate>
  );
}
