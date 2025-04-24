import React, { useState } from "react";

const GenerateNPC = () => {
  const [name, setName] = useState("");
  const [personality, setPersonality] = useState("");
  const [backstory, setBackstory] = useState("");

  const handleGenerate = () => {
    if (!name || !personality || !backstory) {
      alert("Please fill all fields.");
      return;
    }

    const newNPC = {
      id: Date.now(),
      name,
      personality,
      backstory,
    };

    // Get existing NPCs from localStorage
    const existingNPCs = JSON.parse(localStorage.getItem("npcs")) || [];

    // Add new NPC
    const updatedNPCs = [...existingNPCs, newNPC];

    // Save back to localStorage
    localStorage.setItem("npcs", JSON.stringify(updatedNPCs));

    // Alert user
    alert("NPC saved!");

    // Reset form
    setName("");
    setPersonality("");
    setBackstory("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Generate NPC</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-xl focus:outline-none"
      />

      <input
        type="text"
        placeholder="Personality"
        value={personality}
        onChange={(e) => setPersonality(e.target.value)}
        className="w-full p-2 border rounded-xl focus:outline-none"
      />

      <textarea
        placeholder="Backstory"
        value={backstory}
        onChange={(e) => setBackstory(e.target.value)}
        className="w-full p-2 border rounded-xl focus:outline-none"
        rows="4"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
      >
        Generate NPC
      </button>
    </div>
  );
};

export default GenerateNPC;
