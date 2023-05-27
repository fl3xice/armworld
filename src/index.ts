import { GameObject } from "./lib/object";
import { Paper, PaperDefault } from "./objects/paper";
import { Player, PlayerDefault } from "./objects/player";

const player = new PlayerDefault("John Doe", "johndoe_");
const paper = new PaperDefault();

paper.use(player, "Hello");
paper.use(player, ["nice", "ass", "bro"]);

console.log(paper.getText());
