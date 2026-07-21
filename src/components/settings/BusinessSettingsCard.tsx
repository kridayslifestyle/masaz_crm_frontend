export default function BusinessSettingsCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow">
      <h2 className="text-2xl font-bold mb-8">
        🏢 Company Settings
      </h2>

      <div className="space-y-5">

        <input
          placeholder="Company Name"
          className="w-full p-4 border rounded-2xl"
          defaultValue="MasaZ"
        />

        <input
          placeholder="Email"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          placeholder="Phone Number"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          placeholder="GST Number"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          placeholder="GST Percentage"
          className="w-full p-4 border rounded-2xl"
          defaultValue="18"
        />

        <input
          placeholder="Currency"
          className="w-full p-4 border rounded-2xl"
          defaultValue="₹"
        />

      </div>
    </div>
  );
}