export default function ErrorHandling() {
  const a = undefined;
  return (
    <div>
      <h2>Error</h2>
      <div>
        <div>{a.name}</div>
      </div>
    </div>
  );
}
