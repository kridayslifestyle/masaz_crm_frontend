interface Props {
  value: number;
}

export default function ChairPerformanceBar({
  value,
}: Props) {

  let color = "bg-blue-600";

  if (value < 30) {
    color = "bg-red-500";
  } else if (value < 60) {
    color = "bg-yellow-500";
  } else {
    color = "bg-blue-600";
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`${color} h-2 rounded-full transition-all duration-500`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      <span className="text-gray-500 text-sm font-medium min-w-10">
        {value}%
      </span>
    </div>
  );
}