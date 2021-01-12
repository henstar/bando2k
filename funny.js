
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function colaa() {
    var i;
    for (i = 0; i < 200; i++) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;
        await sleep(300);
        i = 0;
    };
};


async function divCol(b) {
    var i;
    for (i = 0; i < 200; i++) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById(b).style.backgroundColor = '#' + randomColor;
        await sleep(200);
        i = 0;
    };
};



async function chungus() {

    await sleep(250)
    document.getElementById('hbug').checked = false;

};

function funny() {
    document.getElementById("bro").innerHTML = "bnado";

};

//var cps = 0;
//function cpsTest() {
//    cps = 4
//
//};
//
//
//function cpsDisp() {
//    cps = 1+1
//    var i;
//    for (i = 0; i < 200; i++) {
//        document.getElementById("cpsDisplay").innerHTML = cps
//        sleep(2000)
//        i = 0; 
//    };
//    
//};
// 
