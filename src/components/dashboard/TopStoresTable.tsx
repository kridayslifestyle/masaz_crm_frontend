export default function TopStoresTable({
  stores,
}: {
  stores: any[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Top Stores
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-2">
              Store
            </th>

            <th className="text-left py-2">
              City
            </th>

            <th className="text-left py-2">
              Chairs
            </th>

            <th className="text-right py-2">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>

          {stores.map((store) => (

            <tr
              key={store.id}
              className="border-b"
            >
              <td className="py-3">
                {store.name}
              </td>

              <td>
                {store.city}
              </td>

              <td>
                {store.chair_count}
              </td>

              <td className="text-right font-semibold">
                ₹{store.monthly_revenue.toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}