import courseRouter from "./courses.js";

export default (app) => {
  app.use("/api/courses", courseRouter);
};
