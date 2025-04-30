"use client";
import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AuthLayout from "./AuthLayout";
import { usePathname } from "next/navigation";

const App = ({ children }) => {
  const pathname = usePathname(); // Get current route
  const isAuthPage = pathname.startsWith("/auth"); // Check if it's an auth page

  return (
    <ThemeProvider>
      {isAuthPage ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <>
          <Header />
          <main >{children}</main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
