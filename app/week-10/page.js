"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week10Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Week 10 Shopping List</h1>

        {!user ? (
          <>
            <p className="mb-6 text-slate-300">
              Sign in with GitHub to continue.
            </p>
            <button
              onClick={handleLogin}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Login with GitHub
            </button>
          </>
        ) : (
          <>
            <p className="mb-2">Welcome, {user.displayName || "User"}</p>
            <p className="mb-6 text-sm text-slate-300">
              {user.email || "No email available"}
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/week-10/shopping-list"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}