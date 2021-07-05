let url = 'http://code.org/hour of code.html';

function replaceSpace(string){
    string = string.replace(/ /g, '%20');

    return string;
}

replaceSpace(url);