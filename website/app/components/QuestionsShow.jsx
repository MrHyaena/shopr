export default function QuestionShow({ question, answer }) {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-2 text-start px-5">
        <h4>{question}</h4>
        <p>{answer}</p>
      </div>
    </>
  );
}
