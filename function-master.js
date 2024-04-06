//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   //create array to be returned
   let newArray = [];
   //for in loop over object for values
   for(var key in object){
    //pushing values onto new array
    newArray.push(object[key]);
   }
    // return values in an array
    return newArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //creating container for strings
    let newStrings;
    //creating for in over object
    for(var key in object){
     //initializing inner to the array of keys from object
        let inner = Object.keys(object);
            //assigning new strings to the join with a space
            newStrings = inner.join(' ');
    }
    //return all keys to strings
    return newStrings;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //creating container string for values
    let newString = '';
    //creating loop over object
    for(var key in object){
        //testing to see if key is a string
        if(typeof object[key] === 'string'){
        //assigning newString to the values separated by a space
        newString += object[key] + ' ';
        }
    }
    //returning newString
    return newString.slice(0, -1);
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else if(typeof collection === 'object'){
        return 'object';
    }
    
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//container for new string
let newString = string[0].toUpperCase() + string.slice(1);
    return newString;
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newString = [];
    let jkNewString;
    //= string.charAt(0).toUpperCase() + string.slice(1);;
//    // splitting string into array
    let newArray = string.split(' ')
    //creating for loop to loop over array 
    for( var i = 0; i < newArray.length; i++){
      let capArray = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
      newString.push(capArray);
      jkNewString = newString.join(' ');
    }
    return jkNewString; 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let greeting;
    for(var key in object){
greeting = 'Welcome ' + capitalizeWord(object.name) + '!';
    }
return greeting;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let newString;
for(var key in object){
    newString = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}
return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if(Object.keys(object).length === 0){
            return 'there are no noises';
        }else if(object.noises.length === 0){
            return 'there are no noises';
        }else{
            return object.noises.join(' ');
        }
       
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    for(var i = 0; i < string.length; i++){
    if(string.includes(word) === true){
        return true;
    } else {
        return false;
    }
    }
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    if(hasWord(object.friends, name) !== true){
     object.friends.push(name);
     return object;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Object.keys(object).length === 0){
        return false;
    }else if(object.friends.includes(name) !== true){
        return false;
    }else{
        return true;
    }
 }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let notFriends = [];
    for(var i = 0; i < array.length; i++){
    if(object.name.friends.includes(array[i]) !== true){
     notFriends.push(array[i]);
    }
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if(object.hasOwnProperty(key) !== true){
        object.key = value;
    }else if(object.hasOwnProperty(key) === true){
        object.key = value;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
   for(var i = 0; i < array.length; i++){
    for(var key in object){
        if(array[i] === key){
            delete object[key];
        }
    }
   }

    }



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  
    return array.filter((value, index) => array.indexOf(value) === index);
    
    }


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}