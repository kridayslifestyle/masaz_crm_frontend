"use client";

import { useEffect, useState } from "react";
import { getTechnicians } from "@/services/technician";
import { startService } from "@/services/service";

export default function AssignTechnicianModal({
  complaintId,
  onClose,
  onSuccess,
}: any) {
  const [techs, setTechs] = useState<any[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchTechs = async () => {
      const res = await getTechnicians();
      setTechs(res);
    };
    fetchTechs();
  }, []);

  const handleAssign = async () => {
    if (!selected) {
      alert("Select technician");
      return;
    }

    await startService(complaintId, selected);

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-2xl w-[400px]">

        <h2 className="text-xl font-bold mb-4">
          Assign Technician
        </h2>

        <select
          className="border p-3 w-full rounded-xl mb-4"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option>Select Technician</option>
          {techs.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleAssign}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Assign & Start
          </button>
        </div>

      </div>
    </div>
  );
}