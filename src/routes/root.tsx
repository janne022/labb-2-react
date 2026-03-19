import { Link, Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
