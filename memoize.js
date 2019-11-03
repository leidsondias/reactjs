//Simple memoize


const add = (a,b) => a + b;

const memoize = (fn) => {
  let cache = {};

  return (...args) => {    
    if(cache[args]){
      console.log("cache")
      return cache[args]
    }

    console.log("calcul")
    cache[args] = fn(...args)
    return cache[args]
  }
}
