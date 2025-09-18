'use client'

import { LoginForm } from "@/src/components/molecules/LoginForm";
import { RegisterForm } from "@/src/components/molecules/RegisterForm";
import { useState } from "react";


export default function AuthPage() {

    const [activeTab, setActiveTab] = useState('login');

  return (
    <div>
        <div className="max-w-md mx-auto overflow-hidden">
      <div className="flex bg-primary-foreground  p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === 'login'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 '
          }`}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
            activeTab === 'register'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 '
          }`}
        >
          Registrarse
        </button>
      </div>
      <div className="py-4">
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
        
    </div>
  );
}
