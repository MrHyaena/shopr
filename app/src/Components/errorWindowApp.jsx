export function ErrorWindowApp({ error }) {
  return (
    <>
      <h2 className="font-semibold text-center p-2 bg-errorBg text-textDark rounded-md border-2 max-w-[100%] border-errorBorder self-center m-7">
        {error}
      </h2>
    </>
  );
}
