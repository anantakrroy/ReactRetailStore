export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-md my-4">
      <strong className="font-semibold">Error:</strong>{" "}
      {message || "Something went wrong."}
    </div>
  );
}