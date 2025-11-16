// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  FiCpu,
  FiType,
  FiGitMerge,
  FiGitBranch,
  FiFilter,
  FiCornerUpRight,
  FiCornerUpLeft
} from "react-icons/fi";
import { AiOutlineLogin, AiOutlineExport } from "react-icons/ai";

export const PipelineToolbar = () => {
  return (
    <div
      className="
      w-full px-6 py-5
      backdrop-blur-xl bg-black/30 
      border border-white/10 
      rounded-2xl 
      shadow-[0_0_25px_rgba(181,55,242,0.4)]
      flex flex-wrap items-center gap-4
      "
    >
      <span className="text-sm font-semibold text-white/80">
        Drag nodes:
      </span>

      <ToolbarButton icon={<AiOutlineLogin />} label="Input" type="customInput" />
      <ToolbarButton icon={<FiCpu />} label="LLM" type="llm" />
      <ToolbarButton icon={<AiOutlineExport />} label="Output" type="customOutput" />
      <ToolbarButton icon={<FiType />} label="Text" type="text" />
      <ToolbarButton icon={<FiCornerUpRight />} label="Transform" type="transform" />
      <ToolbarButton icon={<FiCornerUpLeft />} label="Condition" type="condition" />
      <ToolbarButton icon={<FiGitMerge />} label="Merge" type="merge" />
      <ToolbarButton icon={<FiGitBranch />} label="Split" type="split" />
      <ToolbarButton icon={<FiFilter />} label="Filter" type="filter" />
    </div>
  );
};

const ToolbarButton = ({ icon, label, type }) => {
  return (
    <div
      className="
      px-4 py-2 rounded-xl cursor-grab active:cursor-grabbing
      backdrop-blur-md bg-black/40 border border-purple-500/40 
      shadow-[0_0_15px_rgba(181,55,242,0.6)]
      text-purple-300 flex items-center gap-2 text-sm font-medium

      hover:bg-purple-600 hover:text-white
      hover:shadow-[0_0_25px_#B537F2]
      hover:border-purple-400
      hover:scale-110 transition-all 
      "
    >
      <DraggableNode
        type={type}
        label={
          <div className="flex items-center gap-2">
            {icon} {label}
          </div>
        }
      />
    </div>
  );
};
