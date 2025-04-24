import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
        🚀 Welcome to NPCverse
      </h1>
      <p className="max-w-xl text-lg mb-8 text-gray-300">
        Generate AI-powered NPCs with unique personalities, backstories, and art. Build your universe one character at a time.
      </p>
      <a
        href="/generate"
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold text-lg shadow-lg transition duration-300 ease-in-out"
      >
        Get Started
      </a>
    </div>
  );
};

export default Home;
