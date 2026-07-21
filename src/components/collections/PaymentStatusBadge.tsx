interface Props {
  status: string;
}

export default function PaymentStatusBadge({
  status,
}: Props) {
  if (status === "paid") {
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
        ● Paid
      </span>
    );
  }

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
      ● Pending
    </span>
  );
}