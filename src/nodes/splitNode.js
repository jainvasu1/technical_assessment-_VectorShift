// splitNode.js (Tailwind Styled)

import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const SplitNode = ({ id, data }) => {
  const [key, setKey] = useState(data?.key || "");

  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleChange = (e) => {
    const value = e.target.value;
    setKey(value);
    updateNodeField(id, "key", value);
  };

  useEffect(() => {
    updateNodeField(id, "key", key);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Split"
      inputHandles={[{ id: `${id}-input`, name: "input" }]}
      outputHandles={[
        { id: `${id}-branch1`, name: "branch1" },
        { id: `${id}-branch2`, name: "branch2" },
      ]}
    >
      <div className="flex flex-col gap-2">

        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Key to Split:
          <input
            type="text"
            value={key}
            onChange={handleChange}
            placeholder="Example: category"
            className="
              p-2 border rounded-md border-gray-300 
              bg-white text-sm 
              focus:ring-2 focus:ring-indigo-400 focus:outline-none
            "
          />
        </label>

        <p className="text-[10px] text-gray-500 italic">
          Splits into two paths based on key value.
        </p>

      </div>
    </BaseNode>
  );
};
