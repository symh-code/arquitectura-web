"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContactClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setMenuOpen(false);

    if (pathname === "/") {
      const contactSection = document.getElementById("contacto");

      if (!contactSection) {
        return;
      }

      window.history.pushState(null, "", "/#contacto");
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push("/#contacto");
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6">
      <Link href="/" className="flex items-center">
        <Image
          src="/logonavbar.png"
          alt="A&S Architecture"
          width={180}
          height={60}
          priority
          className="w-auto h-12 md:h-12"
        />
      </Link>

      <div className="hidden md:flex gap-10 items-center">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-serif text-lg tracking-tight transition-colors duration-300 ${
              pathname === href
                ? "text-[#e9c176] border-b border-[#e9c176] pb-1"
                : "text-[#c3c7cd] hover:text-[#e9c176]"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/#contacto"
          onClick={handleContactClick}
          className="font-serif text-lg tracking-tight text-[#c3c7cd] hover:text-[#e9c176] transition-colors duration-300"
        >
          Contacto
        </Link>
      </div>

      <Link
        href="/#contacto"
        onClick={handleContactClick}
        className="hidden md:block px-6 py-2 bg-gradient-to-br from-[#c3c7cd] to-[#8f9194] text-[#2c3136] font-bold text-sm tracking-widest uppercase hover:opacity-80 transition-all duration-300 active:scale-95"
      >
        Cotizar
      </Link>

      <button
        className="md:hidden text-[#c3c7cd]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span className="material-symbols-outlined text-3xl">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#131313] flex flex-col items-start px-6 py-8 gap-6 md:hidden border-t border-[#c3c7cd]/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-xl tracking-tight transition-colors ${
                pathname === href ? "text-[#e9c176]" : "text-[#c3c7cd]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={handleContactClick}
            className="font-serif text-xl text-[#c3c7cd]"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
