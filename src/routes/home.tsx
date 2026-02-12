import { Link } from "react-router";

const Home = () => {
  return (
    <section className="card">
      <h1>Learn React Router</h1>
      <div className="actions">
        <Link className="button" to={"/lessons"}>
          Browse lessons
        </Link>
        <Link className="button button--ghost" to={"/about"}>
          About React Router
        </Link>
      </div>
    </section>
  );
};

export default Home;
