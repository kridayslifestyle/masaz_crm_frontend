interface Props {
  value: number;
}

export default function TargetBadge({
  value,
}: Props) {
  if (value >= 100) {
    return (
      <span
        className="
          bg-green-100
          text-green-600
          px-4
          py-1
          rounded-full
          text-sm
          font-medium
        "
      >
        Above Target
      </span>
    );
  }

  if (value >= 75) {
    return (
      <span
        className="
          bg-yellow-100
          text-yellow-700
          px-4
          py-1
          rounded-full
          text-sm
          font-medium
        "
      >
        On Track
      </span>
    );
  }

  return (
    <span
      className="
        bg-red-100
        text-red-600
        px-4
        py-1
        rounded-full
        text-sm
        font-medium
      "
    >
      Below Target
    </span>
  );
}