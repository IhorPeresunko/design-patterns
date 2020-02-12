import Aggregator from "./Aggregator";
import Iterator from "./Iterator";
import WordsIterator from "./WordsIterator";

export default class Words implements Aggregator {
  private words: Array<string>;

  constructor(words: Array<string>) {
    this.words = words;
  }

  public getItems(): Array<string> {
    return this.words;
  }

  get length(): number {
    return this.words.length;
  }

  getIterator(): Iterator<string> {
    return new WordsIterator(this);
  }
}
