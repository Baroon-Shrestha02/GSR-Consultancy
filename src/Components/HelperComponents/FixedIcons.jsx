import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppButton from "./WhatsAppButton";

export default function FixedIcons() {
  return (
    <div className="fixed bottom-10 right-4 z-150 flex items-center gap-4">
      <LanguageSwitcher />
      <WhatsAppButton />
    </div>
  );
}
