import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="card">
      <h1>Page not found</h1>
      <p className="muted">We couldn't find that page</p>
      <Link className="muted" to="/">
        Back home
      </Link>
    </section>
  );
};

export default NotFound;
