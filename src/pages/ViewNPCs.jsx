import React, { useEffect, useState } from 'react';

const ViewNPCs = () => {
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    // Get NPCs from localStorage when the component loads
    const savedNPCs = JSON.parse(localStorage.getItem('npcs')) || [];

    // Debugging log to check the retrieved NPCs
    console.log('Loaded NPCs from localStorage:', savedNPCs);

    setNpcs(savedNPCs);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold mb-8">My NPCs</h1>
      {npcs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {npcs.map((npc, index) => (
            <div key={index} className="p-4 bg-gray-800 text-white rounded-lg">
              <h2 className="text-2xl">{npc.name}</h2>
              <p className="mt-2">{npc.personality}</p>
              <p className="mt-2">{npc.lore}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-300">No NPCs generated yet.</p>
      )}
    </div>
  );
};

export default ViewNPCs;
