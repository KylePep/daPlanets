import mongoose from "mongoose";

const Schema = mongoose.Schema
export const ColonySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' }
    //Species if maybe and stuff
  },
  { timestamps: true, toJSON: { virtuals: true } }
)