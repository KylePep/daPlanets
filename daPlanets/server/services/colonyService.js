import { dbContext } from "../db/DbContext.js"

class ColonyService {
  async createColony(colonyData) {
    const colony = await dbContext.Colonies.create(colonyData)
    return colony
  }

}
export const colonyService = new ColonyService()