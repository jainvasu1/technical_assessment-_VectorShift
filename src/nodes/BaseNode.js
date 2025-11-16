// BaseNode.js — BLACK + NEON CYBER EDITION

import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width,
  height,
  className = "",
}) => {
  return (
    <div
      className={`
        relative p-4 rounded-xl 
        backdrop-blur-xl bg-black/40 
        border border-purple-500/40
        shadow-[0_0_20px_rgba(181,55,242,0.4)]
        transition-all
        hover:shadow-[0_0_35px_rgba(181,55,242,0.8)]
        hover:border-purple-400
        ${className}
      `}
      style={{
        width: width || 220,
        height: height || "auto",
      }}
    >
      {/* Input Handles */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            background: "#B537F2",
            border: "2px solid white",
            width: "12px",
            height: "12px",
            borderRadius: "9999px",
            boxShadow: "0 0 10px #B537F2",
            ...(handle.style || {}),
          }}
          className="hover:scale-150 transition-transform"
        />
      ))}

      {/* Title */}
      {title && (
        <div
          className="
            font-bold text-purple-300 
            text-sm mb-3 tracking-wide
            drop-shadow-[0_0_5px_#B537F2]
          "
        >
          {title}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 text-gray-200">{children}</div>

      {/* Output Handles */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            background: "#00CFFF",
            border: "2px solid white",
            width: "12px",
            height: "12px",
            borderRadius: "9999px",
            boxShadow: "0 0 10px #00CFFF",
            ...(handle.style || {}),
          }}
          className="hover:scale-150 transition-transform"
        />
      ))}
    </div>
  );
};
