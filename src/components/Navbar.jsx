import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 p-4 shadow-lg flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold tracking-widest">🧬 NPCverse</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-cyan-400">Home</a>
        <a href="/generate" className="hover:text-cyan-400">Generate</a>
        <a href="/view" className="hover:text-cyan-400">My NPCs</a>
      </div>
    </nav>
  );
};

export default Navbar;
