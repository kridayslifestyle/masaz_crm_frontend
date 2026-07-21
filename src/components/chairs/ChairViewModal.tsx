"use client";

import { Chair } from "@/types/chair";

interface Props {
  chair: Chair;
  onClose: () => void;
}

export default function ChairViewModal({
  chair,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[700px]">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Chair Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">
              Serial Number
            </p>

            <h3 className="font-semibold text-lg">
              {chair.serial_number}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Device ID
            </p>

            <h3 className="font-semibold text-lg">
              {chair.device_id}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Model
            </p>

            <h3 className="font-semibold text-lg">
              {chair.model_name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Store
            </p>

            <h3 className="font-semibold text-lg">
              {chair.store_name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Owner
            </p>

            <h3 className="font-semibold text-lg">
              {chair.owner_name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              City
            </p>

            <h3 className="font-semibold text-lg">
              {chair.city}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Installed Days
            </p>

            <h3 className="font-semibold text-lg">
              {chair.installed_days}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Status
            </p>

            <h3 className="font-semibold text-lg capitalize">
              {chair.status}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Daily Revenue
            </p>

            <h3 className="font-semibold text-lg">
              ₹{chair.daily_revenue.toLocaleString()}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Monthly Revenue
            </p>

            <h3 className="font-semibold text-lg">
              ₹{chair.monthly_revenue.toLocaleString()}
            </h3>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-2xl
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}