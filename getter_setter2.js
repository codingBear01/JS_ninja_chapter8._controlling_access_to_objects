const ninjaCollection = {
  ninjas: ['Yoshi', 'Kuma', 'Hattori'],

  get firstNinja() {
    console.log('get firstNinja');
    return this.ninjas[0];
  },

  set firstNinja(val) {
    console.log('set firstNinja');
    this.ninjas[0] = val;
  },
};

if (ninjaCollection.firstNinja === 'Yoshi')
  console.log('Yoshi is the first ninja');

ninjaCollection.firstNinja = 'Hachi';

if (
  ninjaCollection.firstNinja === 'Hachi' &&
  ninjaCollection.ninjas[0] === 'Hachi'
)
  console.log('Now Hachi is the first ninja');

console.log(`ninjaCollection.firstNinja: ${ninjaCollection.firstNinja}`);
console.log(`ninjaCollection.ninjas[0]: ${ninjaCollection.ninjas[0]}`);
