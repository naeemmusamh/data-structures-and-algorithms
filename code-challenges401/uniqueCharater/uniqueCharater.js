function uniqueCharater(string){
    for(let x = 0; x < string.length; x++){
        for(let y = x +1; y < string.length; y++){
            // eslint-disable-next-line eqeqeq
            if(string[x] == string[y]){
                return false;
            }
        }
        return true;
    }
}
uniqueCharater();