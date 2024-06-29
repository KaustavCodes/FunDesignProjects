let currentProgress = 0;
let totalProgress = 3;

let stepsList = document.querySelectorAll('.step');


document.getElementById('next').addEventListener('click', function() {
    currentProgress += 1;
    if (currentProgress > totalProgress) {
        currentProgress = totalProgress;
    }

    setProgress();
    setCircleActive();
    setButtonStatus();
});

document.getElementById('prev').addEventListener('click', function() {
    currentProgress -= 1;
    if (currentProgress < 0) {
        currentProgress = 0;
    }
    
    setProgress();
    setCircleActive();
    setButtonStatus();
});

function setProgress() {
    var width = 100 / totalProgress * currentProgress;
    document.getElementById('progress').style.width = `${width}%`;
}

function setCircleActive() {
    for(var i = 0; i <= totalProgress; i++) {
        if(i <= currentProgress) {
            stepsList[i].classList.add('active');
        } else {
            stepsList[i].classList.remove('active');
        }
    }
}


function setButtonStatus() {
    document.getElementById('prev').disabled = document.getElementById('next').disabled = false;
    document.getElementById('prev').classList.remove('disabled');
    document.getElementById('next').classList.remove('disabled');


    if(currentProgress == 0) {
        document.getElementById('prev').disabled = true;
        document.getElementById('prev').classList.add('disabled');
    } else if (currentProgress == totalProgress) {
        document.getElementById('next').disabled = true;
        document.getElementById('next').classList.add('disabled');
    } else {
        
    }
}