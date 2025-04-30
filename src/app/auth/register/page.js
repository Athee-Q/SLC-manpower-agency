"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/common/Logo";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!agree) {
      setErrorMsg("You must agree to the Terms and Privacy Policy.");
      return;
    }

    try {
      // TODO: Replace with your registration logic (API call)
      console.log({ fullName, email, password });
      router.push("/profile");
    } catch (error) {
      setErrorMsg("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-background text-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 sm:p-10">
        <div className="flex items-center justify-center mb-6">
          <Logo />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6">
          Create your account
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
          />

          <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1"
            />
            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-primary dark:text-dark-primary underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-primary dark:text-dark-primary underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="mt-2 p-3 rounded-lg bg-accent dark:bg-dark-accent text-white font-semibold hover:opacity-90 transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary dark:text-dark-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
