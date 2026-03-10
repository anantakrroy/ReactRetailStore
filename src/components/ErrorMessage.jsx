export default function ErrorMessage({ message }) {
  return (
    <div
      style={{
        padding: "20px",
        color: "red",
        border: "1px solid red",
        margin: "10px 0",
      }}
    >
      <strong>Error:</strong> {message || "Something went wrong."}
    </div>
  );
}