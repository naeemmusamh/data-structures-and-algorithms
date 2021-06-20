function findRepeatedWord(string){
    let count =  {};
    let maxCount;
    let mostRepeated;
    string.match(/\w+/g).forEach((word) => {
        count[word] = (count[word] || 0 ) +1;
    });
    for(let word in count){
        if(!(count[word] < maxCount)){
            maxCount = count[word];
            mostRepeated = word;
        }
    }
    return mostRepeated;
}

module.exports = findRepeatedWord;