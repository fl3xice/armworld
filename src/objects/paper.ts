import { Actor, InteractionObject } from "../lib/interaction";
import { ArmObject, GameObject, RarityObject } from "../lib/object";
import { Weight, gramsTo } from "../lib/units";

export enum StyleTextPaper {
  Default,
  Monospace,
  Bold,
  Thin,
}

export enum StylePaper {
  _4A0 = 0,
  _2A0 = 1,
  A0 = 2,
  A1 = 3,
  A2 = 4,
  A3 = 5,
  A4 = 6,
  A5 = 7,
  A6 = 8,
  A7 = 9,
  A8 = 10,
  A9 = 11,
  A10 = 12,
}

export type DensityPaper = 75 | 80 | 90 | 100 | 110 | 120 | 160;

export interface Paper {
  getText(): string;
  getTextStyle(): StyleTextPaper;
  getStyle(): StylePaper;
  getDensity(): DensityPaper;
}

export class PaperDefault
  extends ArmObject
  implements GameObject, Paper, InteractionObject<string | string[], void>
{
  private style: StylePaper = StylePaper.A4;
  private density: DensityPaper = 75;
  private styleText: StyleTextPaper = StyleTextPaper.Default;
  private text: string = "";

  /**
   * This weight table is presented in grams, not kilograms
   */
  private readonly weightTable = [
    [300, 320, 360, 400, 440, 480, 640],
    [150, 160, 180, 200, 220, 240, 320],
    [75, 80, 90, 100, 110, 120, 160],
    [37.5, 40, 45, 50, 55, 60, 80],
    [18.75, 20, 22.5, 25, 27.5, 30, 40],
    [9.38, 10, 11.25, 12.5, 13.75, 15, 20],
    [4.69, 5, 5.63, 6.25, 6.88, 7.5, 10],
    [2.34, 2.5, 2.81, 3.13, 3.44, 3.75, 5],
    [1.17, 1.25, 1.41, 1.56, 1.72, 1.88, 2.5],
    [0.59, 0.63, 0.7, 0.78, 0.86, 0.94, 1.25],
    [0.29, 0.31, 0.35, 0.39, 0.43, 0.47, 0.63],
    [0.15, 0.16, 0.18, 0.2, 0.21, 0.23, 0.31],
    [0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.16],
  ];

  constructor(options?: {
    style?: StylePaper;
    density?: DensityPaper;
    styleText?: StyleTextPaper;
    textInitial?: string;
  }) {
    super();

    if (options) {
      if (options.density) {
        this.density = options.density;
      }

      if (options.style) {
        this.style = options.style;
      }

      if (options.styleText) {
        this.styleText = options.styleText;
      }

      if (options.textInitial) {
        this.text = options.textInitial;
      }
    }
  }

  getName(): string {
    return "Paper";
  }

  getDescription(): string {
    return "On this scrap you can write your prose";
  }

  getRarity(): RarityObject {
    return RarityObject.Default;
  }

  private getMass(density: DensityPaper, style: StylePaper) {
    switch (density) {
      case 75:
        return gramsTo(this.weightTable[style][0]);
      case 80:
        return gramsTo(this.weightTable[style][1]);
      case 90:
        return gramsTo(this.weightTable[style][2]);
      case 100:
        return gramsTo(this.weightTable[style][3]);
      case 110:
        return gramsTo(this.weightTable[style][4]);
      case 120:
        return gramsTo(this.weightTable[style][5]);
      case 160:
        return gramsTo(this.weightTable[style][6]);
    }
  }

  getText(): string {
    return this.text;
  }

  getTextStyle(): StyleTextPaper {
    return this.styleText;
  }

  use(i: Actor, data: string | string[]): void {
    this.text += typeof data == "object" ? data.join("\n") : data;
  }

  getStyle(): StylePaper {
    return this.style;
  }

  getDensity(): DensityPaper {
    return this.density;
  }

  getWeight(): Weight {
    return this.getMass(this.density, this.style);
  }
}
