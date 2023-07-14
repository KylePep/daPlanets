import { colonyService } from "../services/colonyService.js";
import BaseController from "../utils/BaseController.js";

export class ColonyController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .post('', this.createColony)
  }
  async createColony(req, res, next) {
    try {
      const colonyData = req.body
      const colony = await colonyService.createColony(colonyData)
      return res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}