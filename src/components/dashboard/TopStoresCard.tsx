export default function TopStoresCard({
  stores,
}: {
  stores: any[];
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6">
        Top Performing Stores
      </h2>

      <div className="space-y-5">

        {stores.map((store, index) => (

          <div
            key={store.id}
            className="flex justify-between"
          >

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div>

                <h4 className="font-semibold">
                  {store.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {store.city} • {store.chair_count} chairs
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold">
                ₹{store.monthly_revenue.toLocaleString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}