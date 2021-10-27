const _ = {

    'clamp': function(number,lower,upper){
        let sBool = true;
        switch(sBool){
            case number<=lower : return lower;
            case number>=upper : return upper;
            default : return number;
        }

    },
    'inRange': function(number,start,end){
        let placeholder = 0;
        if (end === undefined){
            end = 0;
        }
        if(start >= end){
            placeholder = start;
            start = end;
            end = placeholder;
        }
       return number === end ? false : start<=number && number<=end;
    },
    'words': function(string){
        const words = string.split(' ');
        return words;
    },
    'pad' : function(string,length){
        if(string.length>=length){return string}
        else{
            const padNum = length - string.length;
            for(let i = 1; i<=padNum;i++){
                i%2 === 0 ? string =" " +string : string = string + " ";
            }
            return string;
        }

    },
    'has' : function(object, key){
        const hasValue = object[key] != undefined;
         return hasValue; 
    },
    'invert' : object =>{
        let invertedObject = {};
        for(let key in object){
            const originalValue = object[key];
            invertedObject = {originalValue : key}
        }
        return invertedObject;
    },
    'findKey' : (object,predicate)=>{
        for(let key in object){
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            }; 

        };
        return undefined;
    },
    'drop' : (array,n)=>{
        if(n === undefined){
            n = 1;
        }
        let droppedArray = array.slice(n,array.length);
        return droppedArray;
    },
    'dropWhile' : (array,predicate)=>{
        const findIndexPar = (element, index)=>{
            return !predicate(element, index,array);
        };
        let dropNumber = array.findIndex(findIndexPar)
        let droppedArray = _.drop(array,dropNumber);
        return droppedArray;
    },
    'chunk' : (array,size)=>{
        let arrayChunks = [];
     
        for(let i = 0; i<array.length; i+=size){
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

};



// Do not write or modify code below this line.
module.exports = _;