export interface Interacting {
  getName(): string;
}

/**
 * This interface is needed to group all the objects that the player can interact with.
 */
export interface InteractionObject<T, R> {
  use(i: Interacting, data: T): R;
}
