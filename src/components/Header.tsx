import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <>
      <Link to="/" onClick={onClick} className="mx-2">
        Home
      </Link>
      <Link to="/portfolio" onClick={onClick} className="mx-2">
        Portfolio
      </Link>
      <Link to="/cv" onClick={onClick} className="mx-2">
        CV
      </Link>
      <Link to="/about" onClick={onClick} className="mx-2">
        About
      </Link>
    </>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 border-b p-8 h-24">
      <nav className="flex items-center w-full px-4">
        <div className="flex-1" />
        <div className="hidden md:flex justify-center flex-1">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex-1 flex justify-end">
          <button className="md:hidden" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-23 left-0 w-full h-[calc(100vh-6rem)] bg-background z-50 md:hidden flex flex-col items-center justify-center space-y-6">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}
