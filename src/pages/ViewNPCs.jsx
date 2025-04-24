import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'; // You can install this with `npm install lucide-react`

const ViewNPCs = () => {
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    const savedNPCs = JSON.parse(localStorage.getItem('npcs')) || [];
    setNpcs(savedNPCs);
  }, []);

  const handleDelete = (id) => {
    const updatedNPCs = npcs.filter((npc) => npc.id !== id);
    localStorage.setItem('npcs', JSON.stringify(updatedNPCs));
    setNpcs(updatedNPCs);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f051d] to-[#2b044d] text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-300 flex items-center gap-2">
        🧬 Explore NPCs
      </h1>

      {npcs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {npcs.map((npc) => (
            <div
              key={npc.id}
              className="bg-gradient-to-b from-[#1b103f] to-[#1b103f] text-white rounded-2xl p-4 shadow-lg border border-purple-800"
            >
              <img
                src={npc.image || "https://placehold.co/300x200?text=No+Image"}
                alt={npc.name}
                className="rounded-xl mb-3 border border-cyan-500 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-bold text-cyan-400">{npc.name}</h2>
              <p className="mt-2">
                <span className="text-purple-400 font-semibold">Personality:</span> {npc.personality}
              </p>
              <p className="mt-1">
                <span className="text-purple-400 font-semibold">Backstory:</span> {npc.backstory}
              </p>
              <button
                onClick={() => handleDelete(npc.id)}
                className="mt-4 flex items-center justify-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-300 mt-10">No NPCs generated yet.</p>
      )}
    </div>
  );
};

export default ViewNPCs;
