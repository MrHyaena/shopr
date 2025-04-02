export function MessageWindowApp({ message }) {
  return (
    <>
      <h2 className="font-semibold text-center p-2 bg-messageBg text-textDark rounded-md border-2 border-messageBorder max-w-full self-center justify-self-center">
        {message}
      </h2>
    </>
  );
}
