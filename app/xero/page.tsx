import PasswordGate from "@/components/PasswordGate";
import XeroPage from "@/components/XeroPage";

export default function Xero() {
  return (
    <PasswordGate>
      <XeroPage />
    </PasswordGate>
  );
}
