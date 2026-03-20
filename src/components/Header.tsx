import { Link } from "react-router";
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
          `mx-2 ${isActive ? "text-primary" : "text-secondary"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/portfolio"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary" : "text-secondary"}`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/cv"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary" : "text-secondary"}`
        }
      >
        CV
      </NavLink>
      <NavLink
        to="/about"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `mx-2 ${isActive ? "text-primary" : "text-secondary"}`
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
    <header className="sticky top-0 z-20 p-8 h-24">
      <nav className="flex items-center w-full px-4">
        <div className="flex-1" />
        <div className="hidden md:flex justify-center flex-1">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex-1 flex justify-end">
          <button className="md:hidden" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
          <button className="hidden md:block bg-primary rounded-xs px-6 py-1">
            CONTACT
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
