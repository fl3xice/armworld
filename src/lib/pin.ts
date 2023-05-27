import { Actor } from "./interaction";
import { ArmObject, GameObject } from "./object";

type PinActor = ArmObject & Actor;

export class Pin<T extends GameObject & ArmObject> {
  private pins: Map<string, Map<string, T>> = new Map();

  constructor() {}

  pin(actor: PinActor, object: T) {
    const map = this.pins.get(actor.getId());

    if (map) {
      map.set(object.getId(), object);
    } else {
      const map: Map<string, T> = new Map();
      map.set(object.getId(), object);
      this.pins.set(actor.getId(), map);
    }
  }

  unpin(actor: PinActor, object: T) {
    const map = this.pins.get(actor.getId());

    if (map) {
      map.delete(object.getId());
    }
  }

  getPinBy(actor: PinActor, object: T | string): null | T {
    const map = this.pins.get(actor.getId());
    if (map) {
      const find = map.get(typeof object == "string" ? object : object.getId());

      if (find) {
        return find;
      }
    }
    return null;
  }

  getPinsByActor(actor: PinActor): T[] | null {
    const map = this.pins.get(actor.getId());
    const objects: T[] = [];

    if (map) {
      for (const i of map.values()) {
        objects.push(i);
      }
      return objects;
    }

    return null;
  }

  forEachActors(
    actor: PinActor,
    callbackfn: (value: Map<string, T>, key: string) => void,
    thisArg?: any
  ): void {
    this.pins.forEach(callbackfn, thisArg);
  }

  forEachByActor(
    actor: PinActor,
    callbackfn: (value: T, key: string, map: Map<string, T>) => void,
    thisArg?: any
  ): void {
    const actorPins = this.pins.get(actor.getId());

    if (actorPins) {
      actorPins.forEach(callbackfn, thisArg);
    }
  }
}
