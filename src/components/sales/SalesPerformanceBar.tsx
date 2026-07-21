interface Props {
  value?: number;
}

export default function SalesPerformanceBar({
  value,
}: Props) {
  let color = "bg-red-500";

  if (value ?? 0 >= 80) {
    color = "bg-green-500";
  } else if (value ?? 0 >= 60) {
    color = "bg-yellow-500";
  }

  return (
    <div className="flex items-center gap-3">

      <div className="w-28 h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`${color} h-3 rounded-full`}
          style={{
            width: `${Math.min(value?? 0, 100)}%`,
          }}
        />
      </div>

      <span className="font-medium">
        {value}%
      </span>

    </div>
  );
}