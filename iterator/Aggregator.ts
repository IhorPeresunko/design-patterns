import Iterator from './Iterator';

export default interface Aggregator {
  getIterator(): Iterator<string>
}
