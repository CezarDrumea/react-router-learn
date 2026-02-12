import { NavLink, Outlet } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link nav-link--active" : "nav-link";

const RootLayout = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">React Router Learn</div>
        <nav>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/lessons" className={linkClass}>
            Lessons
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <span>demo for learning React Router</span>
      </footer>
    </div>
  );
};

export default RootLayout;
