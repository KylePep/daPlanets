import { dbContext } from "../db/DbContext.js"

class PlanetService {
  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }
  async getPlanetById(planetId) {
    const planet = await dbContext.Planets.findById(planetId)
    return planet
  }
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
    return planets
  }
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}
export const planetService = new PlanetService()