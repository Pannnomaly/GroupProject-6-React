import { Plus, Minus } from "lucide-react";

export default function GuestControl({ label, subLabel, value, onUpdate, min = 0 }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-bold text-gray-800">{label}</div>
        <div className="text-xs text-gray-500 leading-tight">{subLabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <butt
          onClick={() => onUpdate(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </butt>
        <span className="w-6 text-center font-semibold text-lg">{value}</span>
        <button
          onClick={() => onUpdate(value + 1)}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}