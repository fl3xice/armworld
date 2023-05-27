import { Actor, InteractionObject, rUniqueId } from "../lib/interaction";
import { ArmObject, GameObject, RarityObject } from "../lib/object";
import { Weight } from "../lib/units";

interface Inventory {
  getSlots(): number;
  getMaxWeight(): Weight;
  getWeight(): Weight;
  getStorage(): GameObject[];
}

export class InventoryDefault
  extends ArmObject
  implements GameObject, Inventory, InteractionObject<null, void>
{
  constructor() {
    super();
  }

  use(i: Actor, data: null): void {
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
