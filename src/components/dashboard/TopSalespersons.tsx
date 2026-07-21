export default function TopSalespersons({
  employees,
}: {
  employees: any[];
}) {

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6">
        Top Salespersons
      </h2>

      <div className="space-y-5">

        {employees.map((emp) => (

          <div
            key={emp.employee_id}
            className="flex justify-between"
          >

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">

                {emp.employee_name
                  .split(" ")
                  .map(
                    (x: string) =>
                      x[0]
                  )
                  .join("")
                  .slice(0, 2)}

              </div>

              <div>

                <h4 className="font-semibold">
                  {emp.employee_name}
                </h4>

                <p className="text-sm text-gray-500">
                  {emp.designation}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold text-green-600">
                ₹{emp.monthly_revenue.toLocaleString()}
              </p>

              <p className="text-sm text-gray-500">
                {emp.active_chairs} chairs
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}