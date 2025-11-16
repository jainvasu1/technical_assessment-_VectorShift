// llmNode.js (Tailwind Styled)

import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputHandles={[
        { id: `${id}-system`, name: "system", style: { top: "33%" } },
        { id: `${id}-prompt`, name: "prompt", style: { top: "66%" } },
      ]}
      outputHandles={[{ id: `${id}-response`, name: "response" }]}
    >
      <div className="text-xs text-gray-600 italic">
        This is an LLM node.  
        Provide system + prompt to generate a response.
      </div>
    </BaseNode>
  );
};
