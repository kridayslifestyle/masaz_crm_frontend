"use client";

import { useEffect, useState } from "react";

import { createChair } from "@/services/chairs";
import { getStores } from "@/services/stores";
import { getEmployees } from "@/services/employees";

import { Employee } from "@/types/employee";

interface Props {
  onClose: () => void;
}

interface StoreOption {
  id: number;
  name: string;
  city?: string | null;
  owner_name?: string | null;
}

export default function AddChairModal({
  onClose,
}: Props) {

  const [stores, setStores] = useState<StoreOption[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [loadingStores, setLoadingStores] = useState(true);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    device_id: "",
    machine_number: "",
    equipment_type: "",
    store_id: "",
    installed_by_employee_id: "",
    installed_date: "",
    status: "active",
  });

  // --------------------------------------------------
  // Load Stores
  // --------------------------------------------------

  useEffect(() => {

    const loadStores = async () => {
      try {

        const data = await getStores();

        setStores(data);

      } catch (error) {

        console.error(
          "Failed to load stores:",
          error
        );

      } finally {

        setLoadingStores(false);

      }
    };

    loadStores();

  }, []);

  // --------------------------------------------------
  // Load Employees
  // --------------------------------------------------

  useEffect(() => {

    const loadEmployees = async () => {
      try {

        const data = await getEmployees();

        setEmployees(data);

      } catch (error) {

        console.error(
          "Failed to load employees:",
          error
        );

      } finally {

        setLoadingEmployees(false);

      }
    };

    loadEmployees();

  }, []);

  // --------------------------------------------------
  // Selected Store
  // --------------------------------------------------

  const selectedStore = stores.find(
    (store) =>
      store.id === Number(form.store_id)
  );

  // --------------------------------------------------
  // Selected Employee
  // --------------------------------------------------

  const selectedEmployee = employees.find(
    (employee) =>
      employee.id ===
      Number(form.installed_by_employee_id)
  );

  // --------------------------------------------------
  // Save
  // --------------------------------------------------

  const handleSave = async () => {

    if (!form.device_id.trim()) {
      alert("Please enter Device ID");
      return;
    }

    if (!form.machine_number.trim()) {
      alert("Please enter Machine Number");
      return;
    }

    if (!form.store_id) {
      alert("Please select a store");
      return;
    }

    try {

      setSaving(true);

      await createChair({

        device_id: form.device_id,

        machine_number:
          form.machine_number,

        equipment_type:
          form.equipment_type || null,

        store_id:
          Number(form.store_id),

        installed_by_employee_id:
          form.installed_by_employee_id
            ? Number(
                form.installed_by_employee_id
              )
            : null,

        installed_date:
          form.installed_date || null,

        status: form.status,

      });

      onClose();

      window.location.reload();

    } catch (error: any) {

      console.error(error);

      const message =
        error?.response?.data?.detail ||
        "Failed to create chair";

      alert(message);

    } finally {

      setSaving(false);

    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >

      <div
        className="
          bg-white
          rounded-3xl
          p-8
          w-175
          max-h-[90vh]
          overflow-y-auto
        "
      >

        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            mb-8
          "
        >

          <h2 className="text-3xl font-bold">
            Add Chair
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="space-y-5">

          {/* Device ID */}

          <div>

            <label className="text-gray-500 text-sm">
              Device ID
            </label>

            <input
              value={form.device_id}
              onChange={(e) =>
                setForm({
                  ...form,
                  device_id: e.target.value,
                })
              }
              placeholder="Example: MZ-001"
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />

          </div>

          {/* Machine Number */}

          <div>

            <label className="text-gray-500 text-sm">
              Machine Number
            </label>

            <input
              value={form.machine_number}
              onChange={(e) =>
                setForm({
                  ...form,
                  machine_number:
                    e.target.value,
                })
              }
              placeholder="Example: MC-001"
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />

          </div>

          {/* Equipment Type */}

          <div>

            <label className="text-gray-500 text-sm">
              Equipment Type
            </label>

            <input
              value={form.equipment_type}
              onChange={(e) =>
                setForm({
                  ...form,
                  equipment_type:
                    e.target.value,
                })
              }
              placeholder="Example: Massage Chair"
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />

          </div>

          {/* Store */}

          <div>

            <label className="text-gray-500 text-sm">
              Store
            </label>

            <select
              value={form.store_id}
              disabled={loadingStores}
              onChange={(e) =>
                setForm({
                  ...form,
                  store_id: e.target.value,
                })
              }
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
                bg-white
              "
            >

              <option value="">
                {loadingStores
                  ? "Loading stores..."
                  : "Select Store"}
              </option>

              {stores.map((store) => (

                <option
                  key={store.id}
                  value={store.id}
                >
                  {store.name}
                </option>

              ))}

            </select>

          </div>

          {/* Store Information */}

          {selectedStore && (

            <div
              className="
                bg-slate-50
                border
                rounded-xl
                p-4
                grid
                grid-cols-2
                gap-4
              "
            >

              <div>

                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="font-semibold mt-1">
                  {selectedStore.city || "—"}
                </p>

              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Store Owner
                </p>

                <p className="font-semibold mt-1">
                  {selectedStore.owner_name || "—"}
                </p>

              </div>

            </div>

          )}

          {/* Employee */}

          <div>

            <label className="text-gray-500 text-sm">
              Installed By
            </label>

            <select
              value={
                form.installed_by_employee_id
              }
              disabled={loadingEmployees}
              onChange={(e) =>
                setForm({
                  ...form,
                  installed_by_employee_id:
                    e.target.value,
                })
              }
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
                bg-white
              "
            >

              <option value="">
                {loadingEmployees
                  ? "Loading employees..."
                  : "Select Employee"}
              </option>

              {employees.map((employee) => (

                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.name}
                  {employee.designation
                    ? ` - ${employee.designation}`
                    : ""}
                </option>

              ))}

            </select>

          </div>

          {/* Selected Employee */}

          {selectedEmployee && (

            <div
              className="
                bg-slate-50
                border
                rounded-xl
                p-4
                grid
                grid-cols-2
                gap-4
              "
            >

              <div>

                <p className="text-xs text-gray-500">
                  Employee
                </p>

                <p className="font-semibold mt-1">
                  {selectedEmployee.name}
                </p>

              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Designation
                </p>

                <p className="font-semibold mt-1">
                  {selectedEmployee.designation || "—"}
                </p>

              </div>

            </div>

          )}

          {/* Installed Date */}

          <div>

            <label className="text-gray-500 text-sm">
              Installed Date
            </label>

            <input
              type="date"
              value={form.installed_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  installed_date:
                    e.target.value,
                })
              }
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />

          </div>

        </div>

        {/* Buttons */}

        <div
          className="
            flex
            justify-end
            gap-4
            mt-8
          "
        >

          <button
            onClick={onClose}
            disabled={saving}
            className="
              px-6
              py-3
              rounded-xl
              bg-slate-200
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="
              px-6
              py-3
              rounded-xl
              bg-blue-600
              text-white
              disabled:bg-blue-300
            "
          >
            {saving
              ? "Saving..."
              : "Save Chair"}
          </button>

        </div>

      </div>

    </div>
  );
}