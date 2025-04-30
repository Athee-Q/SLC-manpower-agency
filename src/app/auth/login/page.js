"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import Logo from "@/components/common/Logo";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setErrorMsg("Invalid email or password");
    } else {
      router.push("/profile");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/profile" });
  };

  const handleLinkedInLogin = () => {
    signIn("linkedin", { callbackUrl: "/profile" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-background text-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 sm:p-10">
        <div className="flex items-center justify-center mb-6">
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
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

          <div className="flex justify-end text-sm text-blue-600 dark:text-blue-400 hover:underline">
            <Link href="/auth/forgot-password">Forgot password?</Link>
          </div>

          {errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="mt-2 p-3 cursor-pointer rounded-lg bg-primary dark:bg-dark-primary text-white font-semibold hover:opacity-90 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-600 dark:text-gray-400">
          OR
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 px-4 py-2 cursor-pointer rounded-lg bg-white dark:bg-gray-100 text-alert border-2 border-alert font-medium hover:opacity-90 transition-all"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <button
            onClick={handleLinkedInLogin}
            className="flex items-center justify-center gap-3 px-4 py-2 cursor-pointer rounded-lg bg-white dark:bg-gray-100 text-primary border-2 border-primary font-medium hover:opacity-90 transition-all"
          >
            <FaLinkedinIn />
            Continue with LinkedIn
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-primary dark:text-dark-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
