function createNegativeArrayProxy(arr) {
  if (!Array.isArray(arr)) console.log('Expected an array');

  return new Proxy(arr, {
    get: (target, idx) => {
      idx = +idx;
      return target[idx < 0 ? target.length + idx : idx];
    },

    set: (target, idx, val) => {
      idx = +idx;
      return (target[idx < 0 ? target.length + idx : idx] = val);
    },
  });
}

function measure(items) {
  const startTime = new Date().getTime();
  for (let i = 0; i < 500000; i++) {
    items[0] === 'Yoshi';
    items[1] === 'Kuma';
    items[2] === 'Hattori';
  }
  return new Date().getTime() - startTime;
}

const ninjas = ['Yoshi', 'Kuma', 'Hattori'];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log(
  'Proxies are around',
  Math.round(measure(proxiedNinjas) / measure(ninjas)),
  'times slower'
);
