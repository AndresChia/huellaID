"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/infrastructure/firebase/config";
import { useRouter } from "next/navigation";

const HeaderAdmin = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (!user) return null;

  return (
    <header className="w-full bg-primary text-white shadow-md sticky top-[0px] left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/admin"
              className="text-white hover:text-gray-200 transition font-medium"
            >
              Panel Admin
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-200">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-primary hover:bg-gray-100 transition rounded-md font-medium text-sm"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
