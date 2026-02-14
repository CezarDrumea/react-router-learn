import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="stack">
      <h1>Why React Router</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia
        molestiae, repellat libero deleniti officia aliquam porro sint at et
        fugiat consectetur voluptates, impedit fuga, recusandae possimus eaque
        consequatur sequi!
      </p>
      <button
        className="button button--ghost button--back"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </section>
  );
};

export default About;
