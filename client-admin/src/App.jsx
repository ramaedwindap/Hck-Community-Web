import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Dashboard />
    </div>
  );
}
