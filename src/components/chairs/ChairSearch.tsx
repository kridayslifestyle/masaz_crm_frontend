"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

export default function ChairSearch({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-6 mb-8 flex gap-5">
      <input
        type="text"
        placeholder="Search by serial, model, store, owner..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
      flex-1
      border
      border-gray-200
      rounded-2xl
      px-6
      py-4
      text-lg
      outline-none
    "
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="
      w-72
      border
      border-gray-200
      rounded-2xl
      px-5
      text-lg
    "
      >
        <option value="all">All statuses</option>
        <option value="active">Active</option>
        <option value="low_performing">Low Income</option>
        <option value="maintenance">Maintenance</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
}
