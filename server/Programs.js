// Program to find the number of vowels in a word

function findVowelsInWord(word){
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {}
    for(let Index = 0; Index < vowels.length; Index++){
        for(let wordIndex = 0; wordIndex < word.length; wordIndex++){
            if(vowels[Index] == word[wordIndex]) {
                result[vowels[Index]] = true;
            }
        }
    }
    return Object.keys(result).length;
}


let sampleInput= "Friendship"

console.log(findVowelsInWord(sampleInput));


// Program to tell how many times the vowel as repeated

function findVowelInstancesInWord2(word){

    let result = {}
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    word.split('').forEach((wordChar) => {
        //callback funtion for word
        vowels.forEach((vowelChar) => {
            //Its' own foreach scope
            //Outside foreach scope
            //Scope of findVowelInstancesInWord2
            //scope of Global Scope
            if(vowelChar == wordChar){
                if(result[vowelChar] == undefined){
                    result[vowelChar] = 1;
                } else {
                    result[vowelChar]++;
                }
            }
        })
    });
    return result;
}

let sampleInput1 = 'Friendship';
console.log(findVowelInstancesInWord2(sampleInput1));


// Program to get the vowels in declaed way

function findVowelInstancesInWord(word){
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {}
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        for(let wordIndex = 0; wordIndex < word.length; wordIndex++){
            if(vowels[vowelIndex] == word[wordIndex]) {
                // we check for a property/key exists in an object
                if(result[vowels[vowelIndex]] == undefined){
                    result[vowels[vowelIndex]] = 1; //way to create property/key and value pair in an object
                }
                else {
                    //increment a value
                    result[vowels[vowelIndex]]++;
                }
            }
        }
    }
    return result;
}

let sampleInput2 = "Friendsauo"

console.log(findVowelInstancesInWord(sampleInput2))