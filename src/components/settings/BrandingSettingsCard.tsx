export default function BrandingSettingsCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow">

      <h2 className="text-2xl font-bold mb-8">
        🎨 Branding
      </h2>

      <div className="space-y-5">

        <input
          type="file"
          className="w-full"
        />

        <div>

          <label className="text-gray-500">
            Primary Color
          </label>

          <input
            type="color"
            defaultValue="#2563eb"
            className="w-full h-14 mt-2"
          />

        </div>

        <div>

          <label className="text-gray-500">
            Secondary Color
          </label>

          <input
            type="color"
            defaultValue="#14b8a6"
            className="w-full h-14 mt-2"
          />

        </div>

      </div>

    </div>
  );
}