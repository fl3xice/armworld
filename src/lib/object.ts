import { rUniqueId } from "./interaction";
import { Weight } from "./units";

export enum RarityObject {
  Admin = 7,
  Arcane = 3,
  Default = 0,
  Divine = 6,
  Mystical = 2,
  Normal = 1,
  Unimaginable = 5,
  Unique = 4,
}

export interface GameObject {
  getWeight(): Weight;
  getName(): string;
  getDescription(): string;
  getRarity(): RarityObject;
}

export abstract class ArmObject {
  private readonly id: string;

  constructor() {
    this.id = rUniqueId();
  }

  getId(): string {
    return this.id;
  }
}
