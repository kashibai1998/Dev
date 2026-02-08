export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Re try</button>
    </>
  );
}
