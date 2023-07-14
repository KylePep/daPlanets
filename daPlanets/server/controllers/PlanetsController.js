import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .get('/:planetId', this.getPlanetById)
      .post('', this.createPlanet)
  }
  async getPlanets(req, res, next) {
    try {
      const planets = await planetService.getPlanets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetById(req, res, next) {
    try {
      const planetId = req.params.planetId
      const planet = await planetService.getPlanetById(planetId)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const planet = await planetService.createPlanet(planetData)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}