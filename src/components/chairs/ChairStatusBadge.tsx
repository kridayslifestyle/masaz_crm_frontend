interface Props {
  status: string;
}

export default function ChairStatusBadge({
  status,
}: Props) {
  let classes = "";

  if (status === "active") {
    classes =
      "bg-green-100 text-green-700";
  } else if (status === "low_performing") {
    classes =
      "bg-yellow-100 text-yellow-700";
  } else if (status === "maintenance") {
    classes =
      "bg-purple-100 text-purple-700";
  } else {
    classes =
      "bg-red-100 text-red-700";
  }

  return (
    <span
      className={`
        px-4
        py-1
        rounded-full
        text-sm
        ${classes}
      `}
    >
      {status}
    </span>
  );
}