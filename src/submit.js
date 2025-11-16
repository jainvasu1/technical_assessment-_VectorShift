// submit.js

import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const dagStatus = data.is_dag
        ? "✓ Valid DAG (No cycles detected)"
        : "✗ Not a DAG (Contains cycles)";

      const msg = `
Pipeline Summary:

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
DAG Status: ${dagStatus}
      `.trim();

      alert(msg);
    } catch (error) {
      alert(
        `Error submitting pipeline: ${error.message}\nMake sure backend is running!`
      );
    }
  };

  return (
    <div className="flex items-center justify-center py-5 bg-white/90 shadow-lg">
      <button
  type="button"
  onClick={handleSubmit}
  className="
    px-10 py-4 mt-4 font-bold rounded-xl
    bg-gradient-to-r from-purple-600 to-blue-500
    text-white text-lg tracking-wide
    shadow-[0_0_20px_#B537F2,0_0_40px_#00CFFF]
    hover:shadow-[0_0_30px_#B537F2,0_0_60px_#00CFFF]
    hover:scale-105 active:scale-95
    transition-all
  "
>
  Submit Pipeline
</button>

    </div>
  );
};
