import Words from "./Words";

const words = new Words(['Hello', 'Iterator', 'pattern']);

const iterator = words.getIterator();

while (iterator.hasNext()) {
  console.log(`${iterator.key()} - ${iterator.next()}`);
}

iterator.rewind();

console.log(iterator.next());

const iterator2 = words.getIterator();
console.log(iterator2.key());
