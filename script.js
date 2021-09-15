// Mad Lib

// Event Listeners

document.getElementById("madBtn").addEventListener("click", getResults);

// Event Function
function getResults() {
    // Input
    let pluralNoun = document.getElementById("pluralNounIn").value;
    let adjective = document.getElementById("adjectiveIn").value;
    let presentVerb = document.getElementById("presentVerbIn").value;
    let noun = document.getElementById("nounIn").value;

    // Process
    let resultString = '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + presentVerb + ' on the ' + noun + ' to solve this problem!"';

    // Output
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("result").style.display = 'block';
}