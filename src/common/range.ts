export default function range(length: number): number[] {
  return new Array(length).fill(0).map((_, idx) => idx);
}
