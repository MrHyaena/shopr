import { Link } from "react-router-dom";

export function SubscriptionMissing() {
  return (
    <div className="xl:min-h-[600px] w-full flex justify-center items-center flex-col gap-3 text-center text-textDark font-semibold">
      <h2 className="text-2xl">
        V tuto chvíli nemáte vytvořené žádné předplatné.
      </h2>
      <h2 className="text-xl ">
        Pokud si chcete nějaké předplatné založit, klikněte na tlačítko níže.
      </h2>
      <Link
        to={"/app/form"}
        className="bg-quad text-textButton shadow-md shadow-slate-200 mt-3 mb-5 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
      >
        Založit předplatné
      </Link>
      <h2 className="text-xl ">
        Jestli-že máte nějaké otázky, můžete se podívat do našeho FAQ.
      </h2>
      <Link
        target="_blank"
        to={"https://shopr.cz/otazky"}
        className="bg-quad text-textButton shadow-md shadow-slate-200 mt-5 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
      >
        Otevřít sekci otázek
      </Link>
    </div>
  );
}
