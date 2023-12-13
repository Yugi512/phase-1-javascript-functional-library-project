function myEach(collection, callback){
    const copyColl = Object.values(collection);
    debugger;
    for(const element of copyColl){
     callback(element)
    }
    return collection
}


function myMap(collection, callback){
    const copyColl = Object.values(collection);
    let arr = []
    for(const element of copyColl){
        arr.push(callback(element))
    }
    return arr
}





function myReduce(collection, callback, acc){
    
    const copyColl = Object.values(collection);
    if ( typeof acc !== 'number' ){
        let accumaltedvalue = copyColl[0];
        for (let i = 1; i < copyColl.length; i++){
            let x = callback(accumaltedvalue,copyColl[i],copyColl);
            accumaltedvalue = x;
     } 
     return accumaltedvalue;
    } else if(typeof acc === 'number' ){
        let accumaltedvalue = 0;
        for ( const element of copyColl){
            let x = callback(accumaltedvalue,element,collection);
            accumaltedvalue = x;
     } 
     return accumaltedvalue + acc;
    } 
}





function myFind(collection, predicate){
    let copyCollection = Object.values(collection)
    
    for(const element of copyCollection){
        let found = predicate(element);
        
        if( found === true ){
            return element;
        } 
    }
    
}


function myFilter(collection, predicate){
    let copyCollection = Object.values(collection)
    let returnedArr = [];
    for(const element of copyCollection){
        let filtered = predicate(element);
        if(filtered === true){
            returnedArr.push(element)
        }
    }
    return returnedArr
}



function mySize(collection){
    let copyCollection = Object.values(collection);
    return copyCollection.length
}



function myFirst(array, [n]){
   for(const element of array){
    console.log(element)
   }
   
}


function myLast(array, [n]){}



function mySortBy(array, callback){}



function myFlatten(array, [shallow], newArr=[]){}



function myKeys(object){}



function myValues(object){}


