"use client";

import { Store } from "@/types/store";
import StoreCard from "./StoreCard";

interface Props {
  stores: Store[];
  setSelectedStore: any;
  setShowModal: any;
}

export default function StoreGrid({
  stores,
  setSelectedStore,
  setShowModal,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
          setSelectedStore={setSelectedStore}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
}