export type Weight = number;

/**
 * This function convert grams to kilograms
 * @param input Grams input
 * @returns Kilograms
 */
export function gramsTo(input: number): Weight {
  return input / 1000;
}
