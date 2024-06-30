import ApplyLayout from "../../components/ApplyLayout";

export default function GrowWithUs() {
    return (
        <ApplyLayout>
    <div className="shadow-lg">
      <div
        className="flex-col bg-tertiary items-center justify-center text-center py-16 rounded-t-lg"
      >
        <h1 className="text-3xl font-semibold">Leafy Application</h1>
      </div>
      <div
        className="flex-col bg-card items-center md:items-start px-4 md:px-20 py-12"
      >
        <h1 className="text-3xl">Thanks for Applying!</h1>
      </div>
    </div>
  </ApplyLayout>
    )
}