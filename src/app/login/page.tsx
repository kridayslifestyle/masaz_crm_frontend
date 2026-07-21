"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { api } from "@/services/api";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const formData = new URLSearchParams();

      formData.append("username", username);

      formData.append("password", password);

      const response = await api.post("/api/auth/token", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      Cookies.set("token", response.data.access_token);

      router.push("/dashboard");
    } catch (err: any) {
      const detail = err?.response?.data?.detail;

      if (Array.isArray(detail)) {
        setError(detail[0]?.msg || "Login failed");
      } else {
        setError(detail || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">MasaZ CRM</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg p-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
