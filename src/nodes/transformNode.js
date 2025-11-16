// transformNode.js (Tailwind Styled)

import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const TransformNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || "");

  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleChange = (e) => {
    const value = e.target.value;
    setExpression(value);
    updateNodeField(id, "expression", value);
  };

  useEffect(() => {
    updateNodeField(id, "expression", expression);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      inputHandles={[{ id: `${id}-input`, name: "input" }]}
      outputHandles={[{ id: `${id}-output`, name: "output" }]}
    >
      <div className="flex flex-col gap-2">

        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Expression:
          <input
            type="text"
            value={expression}
            onChange={handleChange}
            placeholder='Example: text.toUpperCase()'
            className="
              p-2 border rounded-md border-gray-300 
              text-sm bg-white 
              focus:ring-2 focus:ring-indigo-400 focus:outline-none
            "
          />
        </label>

      </div>
    </BaseNode>
  );
};
