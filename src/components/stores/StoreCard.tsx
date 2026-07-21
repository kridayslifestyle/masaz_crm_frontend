"use client";

import {
  MapPin,
  Phone,
  Mail,
  Store as StoreIcon,
} from "lucide-react";

import { Store } from "@/types/store";
import { deactivateStore, activateStore } from "@/services/stores";

interface Props {
  store: Store;
  setSelectedStore: any;
  setShowModal: any;
}



export default function StoreCard({
  store,
  setSelectedStore,
  setShowModal,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        p-6
        hover:shadow-lg
        transition
      "
    >
      {/* Header */}

      <div className="flex justify-between">

        <div className="flex gap-4">

          <div
            className="
              h-14
              w-14
              rounded-full
              bg-teal-500
              flex
              items-center
              justify-center
            "
          >
            <StoreIcon
              className="text-white"
              size={26}
            />
          </div>

          <div>

            <h2 className="font-bold text-2xl">
              {store.name}
            </h2>

            <p className="text-gray-500">
              {store.owner_name}
            </p>

          </div>

        </div>

        <span
          className="
            bg-green-100
            text-green-600
            px-4
            py-1
            rounded-full
            h-fit
          "
        >
          Active
        </span>

      </div>

      {/* Contact */}

      <div className="space-y-3 mt-6">

        <div className="flex gap-3 text-gray-600">

          <MapPin size={18} />

          <span>
            {store.city}
          </span>

        </div>

        <div className="flex gap-3 text-gray-600">

          <Phone size={18} />

          <span>
            {store.owner_phone}
          </span>

        </div>

        <div className="flex gap-3 text-gray-600">

          <Mail size={18} />

          <span>
            {store.owner_email}
          </span>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          bg-slate-50
          rounded-2xl
          p-5
          mt-6
          grid
          grid-cols-3
        "
      >

        <div>

          <p className="text-gray-500 text-sm">
            CHAIRS
          </p>

          <h3 className="font-bold text-3xl">
            {store.total_chairs}
          </h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            SHARE
          </p>

          <h3 className="font-bold text-3xl">
            25%
          </h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            EARNED
          </p>

          <h3
            className="
              font-bold
              text-3xl
              text-green-500
            "
          >
            ₹
            {store.monthly_revenue.toLocaleString()}
          </h3>

        </div>

      </div>

      {/* Pending */}

      <div
        className="
          bg-yellow-50
          border
          border-yellow-200
          rounded-2xl
          p-4
          mt-6
          flex
          justify-between
        "
      >

        <span>
          Pending payment
        </span>

        <span
          className="
            bg-yellow-400
            px-4
            rounded-full
            font-semibold
          "
        >
          ₹11,233
        </span>

      </div>

      {/* Buttons */}

      <div
  className="
    grid
    grid-cols-3
    gap-3
    mt-6
  "
>
  <button
    onClick={() => {
      setSelectedStore(store);
      setShowModal(true);
    }}
    className="
      bg-blue-600
      text-white
      rounded-xl
      py-3
    "
  >
    Edit
  </button>

  <button
    className="
      bg-slate-200
      rounded-xl
      py-3
    "
  >
    View
  </button>

  <button
    onClick={async () => {
      if (
        confirm(
          `${store.is_active ? "Deactivate" : "Activate"} this store?`
        )
      ) {
        if (store.is_active) {
          await deactivateStore(store.id);
        } else {
          await activateStore(store.id);
        }

        window.location.reload();
      }
    }}
    className={`
      ${
        store.is_active
          ? "bg-red-500 text-white"
          : "bg-green-500 text-white"
      }
      rounded-xl
      py-3
    `}
  >
    {store.is_active ? "Deactivate" : "Activate"}
  </button>
</div>

    </div>
  );
}