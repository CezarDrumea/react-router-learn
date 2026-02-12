export type LessonLevel = "begginer" | "intermediate" | "advanced";

export type Lesson = {
  id: string;
  title: string;
  level: LessonLevel;
  duration: string;
  summary: string;
};

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "What is React Router?",
    level: "begginer",
    duration: "5 min",
    summary: "Single page navigation with URLs that map to UI",
  },
  {
    id: "links",
    title: "Links, NavLink and Active Styles",
    level: "begginer",
    duration: "10 min",
    summary: "Navigate without reloading and show active states",
  },
  {
    id: "nested",
    title: "Nested Routes + Layouts",
    level: "intermediate",
    duration: "15 min",
    summary: "Compose layouts and render children with Outlet",
  },
  {
    id: "params",
    title: "Route Params and Loaders",
    level: "intermediate",
    duration: "20 min",
    summary: "Use loader data and params to fetch per route data",
  },
  {
    id: "errors",
    title: "Errors and Not Found",
    level: "advanced",
    duration: "10 min",
    summary: "Handle errors with errorElement and route boundaries",
  },
];
