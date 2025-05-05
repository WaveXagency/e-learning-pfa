

import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
  title: String,
  description: String,
  video: String,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  lectures: [lectureSchema],
});

export default mongoose.model('Course', courseSchema);
