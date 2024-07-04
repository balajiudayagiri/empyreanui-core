import { Loader } from "lucide-react";
import React from "react";

function loading() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <Loader className="text-black animate-spin" size={32} />
    </div>
  );
}

export default loading;
