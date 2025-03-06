import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h3>Omlouváme se, ale na tomto odkazu nic není</h3>
      <Link
        href="/"
        className="p-3 bg-quad rounded-md shadow-md text-textButton text-xl font-semibold transition-all ease-in-out hover:scale-105"
      >
        Vrátit se na domovskou stránku
      </Link>
    </div>
  );
}
