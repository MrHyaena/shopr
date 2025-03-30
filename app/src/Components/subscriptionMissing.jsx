import { Link } from "react-router-dom";

export function SubscriptionMissing() {
  return (
    <div className="xl:min-h-[600px] max-w-[800px] mx-auto w-full flex justify-center items-center flex-col gap-3 text-center text-textDark font-semibold px-5 animate-scale-up">
      <h2 className="text-3xl">
        Vítáme Vás v uživatelském portálu naší aplikace!
      </h2>
      <p className="text-lg hidden xl:block">
        Toto je výchozí obrazovka, na které v budoucnu uvidíte všechna vaše
        předplatná. I když se teď možná neorientujete, věřte nám, že to zde není
        nijak složité. Hlavní panel je na levé straně. Můžete v něm přejít na
        různé stránky aplikace nebo se odhlásit.
      </p>
      <p className="text-lg xl:hidden">
        Toto je výchozí obrazovka, na které v budoucnu uvidíte všechna vaše
        předplatná. I když se teď možná neorientujete, věřte nám, že to zde není
        nijak složité. Hlavní panel je na horní straně. Kliknutím na ikonu v
        pravém horním rohu otevřete menu. Můžete v něm přejít na různé stránky
        aplikace nebo se odhlásit.
      </p>
      <h2 className="text-2xl mt-10">Založení předplatného</h2>
      <p className="text-lg">
        Pokud si chcete založit vaše první předplatné, klikněte na tlačítko
        níže, které Vás přenese na stránku s formulářem. Po jeho vyplnění se Vám
        vytvoří neaktivní předplatné, které už postačí jen aktivovat.
      </p>
      <Link
        to={"/form"}
        className="bg-quad text-textButton shadow-md shadow-slate-200 mt-3 mb-5 p-3 text-xl font-semibold rounded-md transition-all ease-in-out hover:scale-105 hover:bg-tertiary"
      >
        Založit předplatné
      </Link>
      <p className="text-lg ">
        Jestliže máte nějaké otázky, můžete se podívat do našeho FAQ.
      </p>
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
