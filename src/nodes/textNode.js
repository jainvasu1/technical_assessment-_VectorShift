// textNode.js (Tailwind Styled)

import { useState, useEffect, useRef } from "react";
import { useReactFlow } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

// Extract variables: {{ variable }}
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    variables.add(match[1].trim());
  }
  return Array.from(variables);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const [nodeDimensions, setNodeDimensions] = useState({
    width: 220,
    height: 150,
  });

  const textareaRef = useRef(null);
  const { updateNodeDimensions } = useReactFlow();
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Handle text change
  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    // Save in store
    updateNodeField(id, "text", value);

    // Extract variables
    const vars = extractVariables(value);
    setVariables(vars);
    updateNodeField(id, "variables", vars);
  };

  // Auto-resize node based on text
  useEffect(() => {
    if (!textareaRef.current) return;

    const el = textareaRef.current;
    el.style.height = "auto";

    const textHeight = Math.max(el.scrollHeight, 50);
    const newHeight = 100 + textHeight;

    const newDimensions = {
      width: 260,
      height: newHeight,
    };

    setNodeDimensions(newDimensions);

    setTimeout(() => updateNodeDimensions(id), 0);
  }, [currText, id, updateNodeDimensions]);

  // Initialize variables
  useEffect(() => {
    const vars = extractVariables(currText);
    setVariables(vars);
    updateNodeField(id, "variables", vars);
  }, []);

  // Create dynamic handles
  const inputHandles = variables.map((v, index) => ({
    id: `${id}-${v}`,
    name: v,
    style: {
      top: `${((index + 1) * 100) / (variables.length + 1)}%`,
    },
  }));

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output`, name: "output" }]}
      width={nodeDimensions.width}
      height={nodeDimensions.height}
    >
      <div className="flex flex-col gap-2">

        {/* Textarea Input */}
        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            placeholder="Write text... use {{ variables }}"
            className="
              w-full min-h-[50px] p-2 rounded-md border border-gray-300
              text-sm font-normal
              focus:ring-2 focus:ring-indigo-400 focus:outline-none
              resize-none bg-white
            "
          />
        </label>

        {/* Variable Display */}
        {variables.length > 0 && (
          <div className="text-[10px] text-gray-500 italic">
            Variables detected: {variables.join(", ")}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
