import { Actor } from "../lib/interaction";
import { ArmObject } from "../lib/object";

export type Player = {
  getDisplayName(): string;
  getNickname(): string;
};

export class PlayerDefault extends ArmObject implements Player, Actor {
  constructor(private displayName: string, private nickname: string) {
    super();

    if (!/^[a-z0-9_]+$/.test(nickname)) {
      throw Error("Nickname is not correct");
    }
  }

  getDisplayName(): string {
    return this.displayName;
  }

  getNickname(): string {
    return this.nickname;
  }

  getName(): string {
    return this.getNickname();
  }
}
