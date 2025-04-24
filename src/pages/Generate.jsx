import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Generate = () => {
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState("");
  const [backstory, setBackstory] = useState("");
  const [image, setImage] = useState("");
  const [npc, setNpc] = useState(null);

  const handleGenerate = () => {
    if (!name || !personality || !backstory) {
      alert("Please fill all fields!");
      return;
    }

    const newNPC = {
      id: uuidv4(),
      name,
      personality,
      backstory,
      image: image || `https://robohash.org/${name}?set=set2&size=150x150`, // fallback
    };

    const existing = JSON.parse(localStorage.getItem("npcs")) || [];
    const updated = [...existing, newNPC];
    localStorage.setItem("npcs", JSON.stringify(updated));

    setNpc(newNPC);
    setName("");
    setPersonality("");
    setBackstory("");
    setImage("");
    alert("NPC saved!");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-center text-purple-700">Create Your NPC</h2>

      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter NPC Name"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          placeholder="Enter Personality"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          value={backstory}
          onChange={(e) => setBackstory(e.target.value)}
          placeholder="Enter Backstory"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={3}
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL (optional)"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Save NPC
        </button>
      </div>

      {npc && (
        <div className="bg-gray-50 p-4 rounded-xl shadow-inner mt-6">
          <h3 className="text-xl font-semibold text-center mb-4">Latest NPC</h3>
          <img
            src={npc.image}
            alt="NPC"
            className="w-40 h-40 object-cover rounded-xl mx-auto"
          />
          <div className="mt-4 text-center">
            <p><strong>Name:</strong> {npc.name}</p>
            <p><strong>Personality:</strong> {npc.personality}</p>
            <p><strong>Backstory:</strong> {npc.backstory}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
