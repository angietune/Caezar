function Caezar(str, num) {
    num = num % 26;
    let lcStr = str.toLowerCase();
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString = '';
    for (let i = 0; i < lcStr.length; i++) {
        let curletter = lcStr[i];
        if (curletter === ' ') {
            newString += curletter;
            continue;
        }
        let curInd = abc.indexOf(curletter);
        let newInd = curInd + num;
        if (newInd > 25) newInd = newInd - 26;
        if (newInd < 0) newInd = 26 + newInd;
        if (str[i] === str[i].toUpperCase()) {
            newString += abc[newInd].toUpperCase();
        }
        else newString += abc[newInd];
    }
    return newString;
}