// myEach 
// parameters: collection, callback
// purpose:    performs callback function on each element of array or object
// returns:    original collection

function myEach(collection, callback) {
    for(let i = 0; i < Object.values(collection).length; i++) {
        callback(Object.values(collection)[i]); 
    }
    return collection; 
}

// myMap
// parameters: collection, callback
// purpose:    performs a return function on a given collection, returning a
//             a new collection with the modified values
// returns:    new collection without modifying original

function myMap(collection, callback) {
    let res = []; 
    for(let i = 0; i < Object.values(collection).length; i++) {
        res.push(callback(Object.values(collection)[i])); 
    }
    return res; 
}

// myReduce
// parameters: collection, callback, starting value for accumulator
// purpose:    aggregates a sum of callback performed for each array element
// returns:    single, aggregated value

function myReduce(collection, callback, acc=0) {
    let res = 0;
    // console.log(res); 
    for (let i = 0; i < Object.values(collection).length; i++) {
        if (i != 0)
        acc = 0;
        res += callback(acc, Object.values(collection)[i]);
        // console.log(acc); 
        // console.log(callback(Object.values(collection)[i])); 
    }
    return res + acc;
}

// myFind
// paremeters: collection, predicate
// purpose:    passes elements from collection through predicate, returning
//             once a true evaluation is reached
// returns:    first matching true value

function myFind(collection, predicate) {
    for (let i = 0; i < Object.values(collection).length; i++) {
        if (predicate(Object.values(collection)[i])) {
            return Object.values(collection)[i];
        }
    }
}
// myFilter
// parameters: collection, predicate
// purpose:    given a collection of elements, return elements in collection
//             for which predicate returns true 
// returns:    matching values

function myFilter(collection, predicate) {
    let res = [];
    for (let i =0; i < Object.values(collection).length; i++) {
        if (predicate(Object.values(collection)[i])) {
            res.push(Object.values(collection)[i]);
        };
    }
    return res; 
}

// mySize
// parameters: collection
// purpose:    calculate size of array
// returns:    integer value (size)

function mySize(collection) {
    // return Object.values(collection).length;

    // assuming we can't use object methods, this solution will only work
    // with an array or object with defined/initialized values 
    let i = 0;
    do {
        i++;
    } while(Object.values(collection)[i] != undefined);
   return i;  
}

// myFirst 
// parameters: array, [n] (first n elements); 
// purpose:    return first element of array, or the first n elements of the
//             array
// returns:    first value or array

function myFirst(array, n=1) {
    if (n == 1) {
        return array[n-1]; 
    } else {
        let res = [];
        for (let i = 0; i < n; i++) {
            res.push(array[i]); 
        }
        return res; 
    }

}

// myLast
// parameters: array, n (last n elements)
// purpose:    returns last element or last n elements of array
// returns:    last value or array

function myLast(array, n=0) {
    if (n == 0 || n == 1) {
        return array[mySize(array)-1]; 
    }
    let res = []; 
    for (let i = mySize(array) - n; i < mySize(array); i++) {
        res.push(array[i]); 
    }
    return res; 
}

// myKeys
// parameters: object
// purpose:    return keys of object
// returns:    array of object keys

function myKeys(object) {
    return Object.keys(object); 
}

// myValues
// parameters: object
// purpose:    return object value
// returns:    array of values
function myValues(object) {
    return Object.values(object); 
}