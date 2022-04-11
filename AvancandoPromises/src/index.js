import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceship_engine"

const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterda", 14, 10, 40)
const dwarfStar = new Spaceship("Estrela-Ana", 20, 4, 80)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const dwarfStarEngine = new SpaceshipEngine(dwarfStar)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStarEngine.turnOn()