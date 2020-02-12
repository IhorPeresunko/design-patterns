
export default interface Iterator<T> {
  key(): number;
  current(): T;
  next(): T;
  hasNext(): boolean;
  rewind(): void;
}
