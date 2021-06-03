export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/assets/warning.svg" className="h-96" />
      <span className="mt-8 text-2xl text-white">you look lost</span>
    </div>
  );
}
