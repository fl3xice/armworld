import { RarityObject } from "./lib/object";
import { Pin } from "./lib/pin";
import { InventoryDefault } from "./objects/inventory";
import { PaperDefault } from "./objects/paper";
import { PlayerDefault } from "./objects/player";

const player = new PlayerDefault("John Doe", "johndoe_");
const paper = new PaperDefault();
const inventory = new InventoryDefault();
const inventory2 = new InventoryDefault();

const InventoryPin = new Pin<InventoryDefault>();

InventoryPin.pin(player, inventory);
InventoryPin.pin(player, inventory2);

const res = InventoryPin.getPinsByActor(player)?.filter(
  (inventory) => inventory.getRarity() > RarityObject.Default
);

console.log(res);
