import { Interacting } from "../lib/interaction";

export type Player = {
  getDisplayName(): string;
  getNickname(): string;
};

export class PlayerDefault implements Player, Interacting {
  constructor(private displayName: string, private nickname: string) {
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
