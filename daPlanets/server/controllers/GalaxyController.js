import { galaxyService } from "../services/GalaxyService.js";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
      .post('', this.createGalaxy)
  }
  async getGalaxies(req, res, next) {
    try {
      const galaxy = await galaxyService.getGalaxies()
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxy = await galaxyService.getGalaxyById(galaxyId)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxyPlanets = await planetService.getPlanetsByGalaxyId(galaxyId)
      return res.send(galaxyPlanets)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxyService.createGalaxy(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}