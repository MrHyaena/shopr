export function ErrorWindow({ error }) {
  return (
    <>
      <h2 className="font-bold text-center p-2 bg-errorBg rounded-lg border-2 border-errorBorder max-w-[200px] self-center">
        {error}
      </h2>
    </>
  );
}
