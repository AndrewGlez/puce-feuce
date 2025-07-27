import mongoose from "mongoose";

export interface Miembro {
  _id?: mongoose.Types.ObjectId;
  name: string;
  role: string;
  department: string;
  email: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const MiembroSchema = new mongoose.Schema<Miembro>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    image: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
    collection: "miembros",
  }
);

const MiembroModel = mongoose.model<Miembro>("Miembro", MiembroSchema);
export default MiembroModel;
