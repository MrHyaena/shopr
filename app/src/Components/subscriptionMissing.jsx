import { Link } from "react-router-dom";

export function SubscriptionMissing() {
  return (
    <div className="xl:min-h-[600px] w-full flex justify-center items-center flex-col gap-3 text-center">
      <h2 className="text-2xl font-semibold text-textMedium">
        V tuto chvíli nemáte aktivní žádné předplatné.
      </h2>
      <h2 className="text-xl font-semibold text-textMedium">
        Pokud si chcete nějaké předplatné založit, klikněte na tlačítko níže.
      </h2>
      <Link
        to={"/app/form"}
        className="bg-quad shadow-md shadow-slate-200 mt-3 mb-5 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
      >
        Založit předplatné
      </Link>
      <h2 className="text-xl font-semibold text-textMedium">
        Jestli jste v aplikaci poprvé, můžete se podívat na naše návody.
      </h2>
      <Link
        to={"/app/navody"}
        className="bg-quad shadow-md shadow-slate-200 mt-5 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
      >
        Jak to funguje?
      </Link>
    </div>
  );
}
