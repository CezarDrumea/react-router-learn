import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router";
import { lessons, type Lesson } from "../data/lessons";

type LessonLoaderData = {
  lesson: Lesson;
};

// eslint-disable-next-line react-refresh/only-export-components
export const lessonLoader = ({
  params,
}: LoaderFunctionArgs): LessonLoaderData => {
  const lesson = lessons.find((item) => item.id === params.lessonId);

  if (!lesson)
    throw new Response("Lesson not found", {
      status: 404,
      statusText: "Lesson not found",
    });

  return { lesson };
};

const LessonDetail = () => {
  const { lesson } = useLoaderData() as LessonLoaderData;
  const navigate = useNavigate();

  return (
    <section className="card">
      <div className="card__header">
        <div>
          <h1>{lesson.title}</h1>
          <div className="list-item__meta">
            <span className="pill">{lesson.level}</span>
            <span>{lesson.duration}</span>
          </div>
        </div>

        <p className="muted">{lesson.summary}</p>

        <div className="callout">
          <strong>Route params:</strong> <code>lessonId</code> = {lesson.id}
        </div>

        <button
          className="button button--ghost button--back"
          type="button"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </section>
  );
};

export default LessonDetail;
