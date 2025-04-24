import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { WandSparkles, Pencil, Rocket } from "lucide-react";

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
      image: image || `https://robohash.org/${name}?set=set2&size=150x150`,
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

  const handleEdit = () => {
    if (!npc) return;
    setName(npc.name);
    setPersonality(npc.personality);
    setBackstory(npc.backstory);
    setImage(npc.image);
  };

  const handleMint = () => {
    if (!npc) return;
    alert(`Minting NPC "${npc.name}" (feature coming soon)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e014d] to-[#3c0075] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#120233] p-6 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-300">✨ Create Your NPC</h2>

        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="🎤 NPC Name"
            className="w-full p-3 bg-[#1a1a2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            placeholder="🧠 Personality"
            className="w-full p-3 bg-[#1a1a2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            value={backstory}
            onChange={(e) => setBackstory(e.target.value)}
            placeholder="📘 Backstory"
            className="w-full p-3 bg-[#1a1a2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="🖼️ Image URL (optional)"
            className="w-full p-3 bg-[#1a1a2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <WandSparkles size={18} /> Save NPC
          </button>
        </div>

        {npc && (
          <div className="bg-[#0f0f2d] p-4 rounded-xl mt-6 text-center">
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">✨ Latest NPC</h3>
            <img
              src={npc.image}
              alt="NPC"
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-purple-500"
            />
            <div className="mt-4 space-y-1 text-lg">
              <p><strong>Name:</strong> <span className="text-purple-200">{npc.name}</span></p>
              <p><strong>Personality:</strong> <span className="text-purple-200">{npc.personality}</span></p>
              <p><strong>Backstory:</strong> <span className="text-purple-200">{npc.backstory}</span></p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleMint}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"
              >
                <Rocket size={16} /> Mint NPC
              </button>
              <button
                onClick={handleEdit}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generate;
