"use client";

import { useState } from "react";

import {
  createStore,
  updateStore,
} from "@/services/stores";

interface AddStoreModalProps {
  onClose: () => void;
  store?: any;
}

export default function AddStoreModal({
  onClose,
  store,
}: AddStoreModalProps) {
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: store?.name || "",
    owner_name: store?.owner_name || "",
    owner_phone: store?.owner_phone || "",
    owner_email: store?.owner_email || "",
    city: store?.city || "",
    address: store?.address || "",
    gst_number: store?.gst_number || "",
    store_type: store?.store_type || "other",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);

      if (store) {
        await updateStore(
          store.id,
          form
        );
      } else {
        await createStore(form);
      }

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        store
          ? "Failed to update store"
          : "Failed to create store"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-200">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            {store
              ? "Edit Store"
              : "Add Store"}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Store Name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="owner_name"
            placeholder="Owner Name"
            value={form.owner_name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="owner_phone"
            placeholder="Owner Phone"
            value={form.owner_phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="owner_email"
            placeholder="Owner Email"
            value={form.owner_email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="store_type"
            value={form.store_type}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option value="salon">
              Salon
            </option>

            <option value="spa">
              Spa
            </option>

            <option value="gym">
              Gym
            </option>

            <option value="other">
              Other
            </option>
          </select>

        </div>

        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
          className="
            border
            p-3
            rounded-lg
            w-full
            mt-4
            h-24
          "
        />

        <input
          name="gst_number"
          placeholder="GST Number"
          value={form.gst_number}
          onChange={handleChange}
          className="
            border
            p-3
            rounded-lg
            w-full
            mt-4
          "
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
              border
              px-5
              py-2
              rounded-lg
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-lg
              disabled:bg-gray-400
            "
          >
            {saving
              ? "Saving..."
              : store
              ? "Update Store"
              : "Save Store"}
          </button>

        </div>

      </div>

    </div>
  );
}