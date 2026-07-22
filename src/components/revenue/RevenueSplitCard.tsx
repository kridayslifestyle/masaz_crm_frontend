"use client";

interface RevenueSplit {
  gross_revenue: number;
  company_share: number;
  store_share: number;
  tax_estimate: number;
}

interface Props {
  data: RevenueSplit | null;
}

export default function RevenueSplitCard({ data }: Props) {
  const gross = data?.gross_revenue ?? 0;
  const company = data?.company_share ?? 0;
  const store = data?.store_share ?? 0;
  const tax = data?.tax_estimate ?? 0;

  const companyPercentage =
    gross > 0 ? (company / gross) * 100 : 0;

  const storePercentage =
    gross > 0 ? (store / gross) * 100 : 0;

  return (
    <div className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-2xl font-bold mb-8">
        Revenue Split
      </h2>

      {gross === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No revenue data available.
        </div>
      ) : (
        <>
          {/* Company */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              <span className="font-medium">
                Company Share
              </span>

              <span className="font-bold text-blue-600">
                ₹{company.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="w-full bg-slate-200 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${companyPercentage}%`,
                }}
              />
            </div>
          </div>

          {/* Store */}
          <div className="mb-10">
            <div className="flex justify-between mb-3">
              <span className="font-medium">
                Store Share
              </span>

              <span className="font-bold text-green-600">
                ₹{store.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="w-full bg-slate-200 h-3 rounded-full">
              <div
                className="bg-green-600 h-3 rounded-full"
                style={{
                  width: `${storePercentage}%`,
                }}
              />
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">
                Gross Revenue
              </span>

              <span className="font-bold">
                ₹{gross.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Tax Estimate
              </span>

              <span className="font-bold text-red-500">
                ₹{tax.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}