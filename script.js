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
    let number = document.getElementById("numberIn").value;

    // Process
    let resultString = '"What am I going to do with all these ' + adjective + " " + pluralNoun + '", I thought. "They will all ' + presentVerb + " if I don't get the " + noun + " in " + number + ' seconds."';

    // Output
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("resultDiv").style.display = 'block';
}