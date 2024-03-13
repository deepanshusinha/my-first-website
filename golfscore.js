var names = ["Hole in one","Eagle","Birdie","Par","Bogey","Double Bogey","Lmao get better"];

document.getElementById("golfForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let par = parseInt(document.getElementById("parInput").value);
    let strokes = parseInt(document.getElementById("strokesInput").value);

    let result = golfscore(par, strokes);
    document.getElementById("result").innerText = result;
});

function golfscore(par, strokes){
    if (strokes == 1){
        return names[0];
    }
    else if (strokes <= par - 2){
        return names[1];
    }
    else if (strokes == par - 1){
        return names[2];
    }
    else if (strokes == par){
        return names[3];
    }
    else if (strokes == par + 1){
        return names[4];
    }
    else if (strokes == par + 2){
        return names[5];
    }
    else if (strokes >= par + 3){
        return names[6];
    }
    else {
        return "Error: Invalid input";
    }
}
