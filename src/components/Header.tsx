import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <>
      <NavLink
        to="/"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary underline underline-offset-4" : "text-secondary"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/portfolio"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary underline underline-offset-4" : "text-secondary"}`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/cv"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary underline underline-offset-4" : "text-secondary"}`
        }
      >
        CV
      </NavLink>
      <NavLink
        to="/about"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary underline underline-offset-4" : "text-secondary"}`
        }
      >
        About
      </NavLink>
    </>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 p-8 h-24 bg-background">
      <nav className="flex items-center w-full px-4">
        <div className="flex-1 flex justify-start">
          <button className="md:hidden" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-primary text-white font-semibold rounded-sm px-3 py-1 sm:px-7 sm:py-2 hover:opacity-90">
            CONTACT
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-24 left-0 w-full bg-background md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border ${
          isOpen
            ? "h-[calc(100vh-6rem)] opacity-100"
            : "h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 h-[calc(100vh-6rem)] text-xl">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
}
