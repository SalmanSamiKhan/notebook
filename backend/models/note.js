import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    tag: { type: String, default:'General' },
    // date:{type:Date, default:Date.now}
  },
  {
    timestamps: true, // maintain operation time
  }
);

// Creating mongoose schema
const Note = mongoose.model('Note', noteSchema);
export default Note;