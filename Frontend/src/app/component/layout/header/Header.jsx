import Link from "next/link";

export default function Header() {
  const headerOptionList = [
    { name: "Home", id: 1, href: "/" },
    { name: "Legends", id: 2, href: "/" },
    { name: "Daily Editon", id: 3, href: "/" },
    { name: "Stories", id: 4, href: "/" },
    { name: "Submit & Tribute", id: 5, href: "/" },
    { name: "Login", id: 6, href: "/" },
  ];

  const leftOptions = headerOptionList.filter((option) => option.id <= 3);
  const rightOptions = headerOptionList.filter((option) => option.id > 3);

  const renderOptions = (options) =>
    options.map((option) => (
      <Link
        key={option.id}
        href={option.href}
        className="flex h-full w-1/3 items-center justify-center font-semibold text-lg"
      >
        {option.name}
      </Link>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-green-950/90 px-6 backdrop-blur">
      <div className="flex h-full w-1/3 items-center justify-between px-4">
        {renderOptions(leftOptions)}
      </div>
      <div className="flex h-full w-1/3 items-center justify-center px-4">
        <h1 className=" text-3xl flex items-center justify-center font-bold text-yellow-300">
          Never Forgotten
        </h1>
      </div>
      <div className="flex h-full w-1/3 items-center justify-between px-4">
        {renderOptions(rightOptions)}
      </div>
    </header>
  );
}
