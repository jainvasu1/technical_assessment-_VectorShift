// filterNode.js (Tailwind Styled)

import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");

  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleChange = (e) => {
    const value = e.target.value;
    setCondition(value);
    updateNodeField(id, "condition", value);
  };

  useEffect(() => {
    updateNodeField(id, "condition", condition);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      inputHandles={[{ id: `${id}-input`, name: "input" }]}
      outputHandles={[
        { id: `${id}-pass`, name: "pass" },
        { id: `${id}-fail`, name: "fail" },
      ]}
    >
      <div className="flex flex-col gap-2">

        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Condition:
          <input
            type="text"
            value={condition}
            onChange={handleChange}
            placeholder='Example: value > 10'
            className="
              p-2 border rounded-md border-gray-300 
              bg-white text-sm 
              focus:ring-2 focus:ring-indigo-400 focus:outline-none
            "
          />
        </label>

        <p className="text-[10px] text-gray-500 italic">
          If true → pass • If false → fail
        </p>

      </div>
    </BaseNode>
  );
};
