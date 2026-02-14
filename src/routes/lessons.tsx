import { Link, useLoaderData, useSearchParams } from "react-router";
import {
  lessons as allLessons,
  type Lesson,
  type LessonLevel,
} from "../data/lessons";

const levels: Array<LessonLevel | "all"> = [
  "all",
  "beginner",
  "intermediate",
  "advanced",
];

type LessonsLoaderData = {
  lessons: Lesson[];
};

// eslint-disable-next-line react-refresh/only-export-components
export function lessonsLoader(): LessonsLoaderData {
  return { lessons: allLessons };
}

const Lessons = () => {
  const { lessons } = useLoaderData() as LessonsLoaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const level = searchParams.get("level") ?? "all";

  const filtered =
    level === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.level === level);

  return (
    <section className="stack">
      <header className="stack">
        <h1>Lessons</h1>
        <p className="muted">
          This route uses a loader and search params to filter the list
        </p>
        <div className="filters">
          {levels.map((value) => (
            <button
              key={value}
              className={value === level ? "chip chip--active" : "chip"}
              type="button"
              onClick={() =>
                setSearchParams((params) => {
                  const next = new URLSearchParams(params);

                  if (value === "all") next.delete("level");
                  else next.set("level", value);

                  return next;
                })
              }
            >
              {value}
            </button>
          ))}
        </div>
      </header>

      <ul className="list">
        {filtered.map((lesson) => (
          <li key={lesson.id} className="list-item">
            <div className="list-item__body">
              <div className="list-item__title">{lesson.title}</div>
              <div className="list-item__meta">
                <span className="pill">{lesson.level}</span>
                <span>{lesson.duration}</span>
              </div>
              <p className="muted">{lesson.summary}</p>
            </div>
            <Link className="link" to={`/lessons/${lesson.id}`}>
              Open
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Lessons;
