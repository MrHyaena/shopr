import React from "react";

export default function ReviewGrid() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="bg-slate-50 self-stretch flex justify-center py-30">
          <div className="grid grid-cols-2 max-w-[1300px] gap-20 items-start">
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="text-xl font-bold text-quad">
                  Martin Doležal - Projektový manažer
                </p>
                <h4 className="text-textDark">Čaj a kafe naskladněno</h4>
              </div>
              <p className="italic">
                "Zbožňuju čaj a kafe. S mojí spotřebou se rozhodně hodí, když mi
                každý měsíc přijde nová zásoba, aniž bych na to musel myslet."
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="text-xl font-bold text-quad">
                  Hana Doležalová - Doktorka
                </p>
                <h4 className="text-textDark">Léky pro příbuzné</h4>
              </div>
              <p className="italic">
                "Jako doktorka se starám o celou naší rodinu a příbuzné. Někteří
                z nich potřebují pravidelné dávky léků a doplňků stravy na
                podporu zdraví. Velká část z nich se musí brát pravidelně. Shopr
                mi pomáhá s tím, abychom nikdy z cyklu suplementů nevypadli."
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="text-xl font-bold text-quad">
                  Kateřina Zbihlejová - Milovnice koček
                </p>
                <h4 className="text-textDark">Pamlsky pro mého mazlíčka</h4>
              </div>
              <p className="italic">
                "Svojí skotskou kočku mám jako člena rodiny a ráda jí dopřeju
                různé pamlsky. Zkouším různé výrobky, takže mystery balíček
                jednou za dva měsíce je ideální."
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="text-xl font-bold text-quad">
                  Marek Sviradov - Fitness trenér
                </p>
                <h4 className="text-textDark">Suplementy pro klienty</h4>
              </div>
              <p className="italic">
                "S klienty je největší problém dodržování režimu. To se vztahuje
                i na suplementy, které jim doporučím. Typicky jde o vitamíny
                nebo jiné zlepšováky. Mám s nimi ale tu zkušenost, že když to
                nemají přímo před nosem, tak to neberou. Když jim pak doporučím
                shopr, často tenhle problém vyřešíme."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
