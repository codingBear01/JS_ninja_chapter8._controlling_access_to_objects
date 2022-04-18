function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      console.log('Reading ' + property);
      return target[property];
    },

    set: (target, property, value) => {
      console.log('Writing value ' + value + ' to ' + property);
      target[property] = value;
    },
  });
}

let ninja = { name: 'Yoshi' };
ninja = makeLoggable(ninja);

if (ninja.name === 'Yoshi') console.log('ninja is Yoshi');
ninja.weapon = 'sword';
