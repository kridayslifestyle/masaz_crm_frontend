"use client";

interface Props {
  data: any[];
}

export default function ServiceStats({ data }: Props) {
  const total = data.length;

  const open = data.filter(
    (i) => i.status === "open"
  ).length;

  const inProgress = data.filter(
    (i) => i.status === "in_progress"
  ).length;

  const resolved = data.filter(
    (i) => i.status === "resolved"
  ).length;

  const Card = ({
    title,
    value,
    color,
  }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow w-full">
      <div className="text-gray-500">{title}</div>
      <div className={`text-3xl font-bold ${color}`}>
        {value}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <Card title="Total" value={total} color="text-black" />
      <Card title="Open" value={open} color="text-red-500" />
      <Card title="In Progress" value={inProgress} color="text-yellow-500" />
      <Card title="Resolved" value={resolved} color="text-green-600" />
    </div>
  );
}