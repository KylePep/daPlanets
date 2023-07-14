import mongoose from "mongoose";

const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    biome: { type: String, required: true, maxlength: 1000 },
    atmosphere: { type: Boolean, required: true, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)