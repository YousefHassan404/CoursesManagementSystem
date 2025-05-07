import upload from "../middlewares/uploads.js";
import express from "express";
import Course from "../models/Courses.js";

const courseRouter = express.Router();

courseRouter.post(
  "/",
  upload.fields([{ name: "images" }]),
  async (req, res) => {
    try {
      const { title, description, price } = req.body;

      if (!req.files || !req.files.images) {
        return res.status(400).json({ error: "Images are required" });
      }

      const imagesPaths = req.files.images.map((file) => file.filename);

      const nweCourse = new Course({
        title,
        description,
        images,
        price,
      });
      await nweCourse.save();

      res.status(201).json(nweCourse);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    }
  }
);
export default courseRouter;