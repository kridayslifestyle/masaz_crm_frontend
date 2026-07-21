export default function StoreBreakdownTable() {
  const stores = [
    {
      id: 1,
      store: "Wellness Hub Bodakdev",
      city: "Ahmedabad",
      chairs: 3,
      gross: 86924,
      company: 65193,
      partner: 21731,
    },
    {
      id: 2,
      store: "Royal Suites Anna Nagar",
      city: "Chennai",
      chairs: 3,
      gross: 83148,
      company: 62361,
      partner: 20787,
    },
    {
      id: 3,
      store: "Prime Lounge T Nagar",
      city: "Chennai",
      chairs: 2,
      gross: 75840,
      company: 56880,
      partner: 18960,
    },
    {
      id: 4,
      store: "Luxe Spa Velachery",
      city: "Chennai",
      chairs: 1,
      gross: 74764,
      company: 56073,
      partner: 18691,
    },
    {
      id: 5,
      store: "Tranquil Mall Velachery",
      city: "Chennai",
      chairs: 2,
      gross: 74408,
      company: 55806,
      partner: 18602,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">

      <div className="p-7 border-b">
        <h2 className="text-3xl font-bold">
          Store-level Breakdown
        </h2>
      </div>

      <table className="w-full">

        <thead className="text-gray-500 border-b">

          <tr>
            <th className="p-6 text-left">STORE</th>

            <th className="p-6 text-left">CITY</th>

            <th className="p-6 text-left">CHAIRS</th>

            <th className="p-6 text-left">GROSS</th>

            <th className="p-6 text-left">COMPANY</th>

            <th className="p-6 text-left">STORE</th>
          </tr>

        </thead>

        <tbody>

          {stores.map((store) => (
            <tr
              key={store.id}
              className="
                border-b
                hover:bg-slate-50
              "
            >
              <td className="p-6 font-semibold">
                {store.store}
              </td>

              <td className="p-6 text-gray-500">
                {store.city}
              </td>

              <td className="p-6">
                {store.chairs}
              </td>

              <td className="p-6 font-bold">
                ₹{store.gross.toLocaleString()}
              </td>

              <td className="p-6 text-blue-600 font-semibold">
                ₹{store.company.toLocaleString()}
              </td>

              <td className="p-6 text-green-500 font-semibold">
                ₹{store.partner.toLocaleString()}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}