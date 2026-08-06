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

    // Bank details
    account_holder_name:
      store?.account_holder_name || "",

    bank_name:
      store?.bank_name || "",

    account_number:
      store?.account_number || "",

    ifsc_code:
      store?.ifsc_code || "",

    // Payment details
    payment_invoice:
      store?.payment_invoice || "",

    payment_date:
      store?.payment_date || "",

    // Store login
    store_username:
      store?.store_username || "",

    // Never preload decrypted password
    store_password: "",
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

      /*
       * During edit:
       * if password is blank, don't send it.
       * This prevents accidentally replacing the
       * existing password with an empty password.
       */
      const payload: any = {
        ...form,
      };

      if (
        store &&
        !payload.store_password.trim()
      ) {
        delete payload.store_password;
      }

      if (store) {
        await updateStore(
          store.id,
          payload
        );
      } else {
        await createStore(payload);
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
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Header */}

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

        {/* STORE INFORMATION */}

        <h3 className="font-semibold text-lg mb-4">
          Store Information
        </h3>

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
            type="email"
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

        {/* BANK DETAILS */}

        <div className="border-t mt-7 pt-6">
          <h3 className="font-semibold text-lg mb-4">
            Bank Details
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="account_holder_name"
              placeholder="Account Holder Name"
              value={form.account_holder_name}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              name="bank_name"
              placeholder="Bank Name"
              value={form.bank_name}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              name="account_number"
              placeholder="Account Number"
              value={form.account_number}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              name="ifsc_code"
              placeholder="IFSC Code"
              value={form.ifsc_code}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>
        </div>

        {/* PAYMENT DETAILS */}

        <div className="border-t mt-7 pt-6">
          <h3 className="font-semibold text-lg mb-4">
            Payment Details
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="payment_invoice"
              placeholder="Payment Invoice"
              value={form.payment_invoice}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Payment Date
              </label>

              <input
                type="date"
                name="payment_date"
                value={form.payment_date}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* STORE LOGIN */}

        <div className="border-t mt-7 pt-6">
          <h3 className="font-semibold text-lg mb-4">
            Store Login Credentials
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="store_username"
              placeholder="Store Username"
              value={form.store_username}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              name="store_password"
              type="password"
              placeholder={
                store
                  ? "New Password (leave blank to keep current)"
                  : "Store Password"
              }
              value={form.store_password}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          {store && (
            <p className="text-sm text-gray-500 mt-2">
              Leave password blank if you do not want to change the existing password.
            </p>
          )}
        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            disabled={saving}
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