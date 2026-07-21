export default function RecentCollectionsTable({
  collections,
}: {
  collections: any[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Recent Collections
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">

            <th className="text-left py-2">
              Date
            </th>

            <th className="text-left py-2">
              Chair
            </th>

            <th className="text-left py-2">
              Store
            </th>

            <th className="text-right py-2">
              Amount
            </th>

          </tr>
        </thead>

        <tbody>

          {collections.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="py-3">
                {item.date}
              </td>

              <td>
                {item.chair_code}
              </td>

              <td>
                {item.store_name}
              </td>

              <td className="text-right font-semibold">
                ₹{item.total_amount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}