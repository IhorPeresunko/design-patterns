import Iterator from './Iterator';
import Words from './Words';

export default class WordsIterator implements Iterator<string> {
  private words: Words;
  private index: number;

  constructor(words: Words) {
    this.words = words;
    this.index = 0;
  }

  public hasNext(): boolean {
    return this.words.length - 1 >= this.index;
  }

  public current(): string {
    return this.words.getItems()[this.index];
  }

  public next(): string {
    return this.words.getItems()[this.index++];
  }

  public rewind(): void {
    this.index = 0;
  }

  public key(): number {
    return this.index;
  }
}
