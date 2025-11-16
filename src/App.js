import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import NeonParticles from "./NeonParticles";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">

      {/* 🌟 Neon Particle Background */}
      <NeonParticles />

      {/* MAIN APP CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER */}
        <div
          className="
            bg-black/40 backdrop-blur-xl p-6 shadow-xl 
            border-b border-purple-500/20 z-10
          "
        >
          <h1
            className="
              text-3xl font-bold mb-3 
              bg-gradient-to-r from-purple-400 to-blue-400 
              bg-clip-text text-transparent drop-shadow-lg
            "
          >
            VectorShift Pipeline Builder
          </h1>

          <PipelineToolbar />
        </div>

        {/* CANVAS */}
        <div className="flex-1 relative z-10">
          <PipelineUI />
        </div>

        {/* SUBMIT BUTTON */}
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
