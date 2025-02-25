export default function Question({ heading, answer }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h5>{heading}</h5>
        <p>{answer}</p>
      </div>
    </>
  );
}
