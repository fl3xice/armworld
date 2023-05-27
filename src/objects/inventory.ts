import { Interacting, InteractionObject } from "../lib/interaction";
import { GameObject, RarityObject } from "../lib/object";
import { Weight } from "../lib/units";

interface Inventory {
  getSlots(): number;
  getMaxWeight(): Weight;
  getWeight(): Weight;
  getStorage(): GameObject[];
}

export class InventoryDefault
  implements GameObject, Inventory, InteractionObject<null, void>
{
  constructor() {}

  use(i: Interacting, data: null): void {
    throw new Error("Method not implemented.");
  }

  getSlots(): number {
    throw new Error("Method not implemented.");
  }

  getMaxWeight(): number {
    throw new Error("Method not implemented.");
  }

  getStorage(): GameObject[] {
    throw new Error("Method not implemented.");
  }

  getWeight(): number {
    throw new Error("Method not implemented.");
  }

  getName(): string {
    throw new Error("Method not implemented.");
  }

  getDescription(): string {
    return "It seems like a pretty big place.";
  }

  getRarity(): RarityObject {
    return RarityObject.Default;
  }
}
