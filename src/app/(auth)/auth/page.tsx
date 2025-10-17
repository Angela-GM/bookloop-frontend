"use client";

import { FormLogin } from "@/src/components/molecules/form-login";
import { FormRegister } from "@/src/components/molecules/form-register";
import { AuthForms } from "@/src/components/organisms/auth-form";
import { useState } from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <AuthForms>
      <div>
        <div className="max-w-md mx-auto overflow-hidden">
          <div className="flex bg-muted  p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-1 px-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === "login"
                  ? "bg-white/90 text-gray-900 shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-1 px-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === "register"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Registrarse
            </button>
          </div>
          <div className="py-4">
            {activeTab === "login" ? <FormLogin /> : <FormRegister />}
          </div>
        </div>
      </div>
    </AuthForms>
  );
}
