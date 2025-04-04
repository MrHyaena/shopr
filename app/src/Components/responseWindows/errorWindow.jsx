export function ErrorWindow({ error }) {
  return (
    <>
      <h2 className="font-semibold text-center p-2 bg-errorBg text-textDark rounded-md border-2 max-w-[250px] border-errorBorder self-center m-7">
        {error}
      </h2>
    </>
  );
}
