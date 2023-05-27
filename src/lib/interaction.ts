export function rUniqueId(): string {
  return Math.random().toString(36).slice(2, 9);
}

export interface Actor {
  getName(): string;
}

/**
 * This interface is needed to group all the objects that the player can interact with.
 */
export interface InteractionObject<T, R> {
  use(i: Actor, data: T): R;
}
