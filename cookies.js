function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

setInterval(function (){
    setCookie(money,money,30);
    setCookie(time,time,30);
    setCookie(temp,temp,30);
    setCookie(ins,ins,30);
    setCookie(space,space,30);
    setCookie(food,food,30);
    setCookie(miceNames,miceNames,30);
    setCookie(miceAge,miceAge,30);
    setCookie(miceHealth,miceHealth,30);
    setCookie(miceTraitA,miceTraitA,30);
    setCookie(miceTraitB,miceTraitB,30);
    setCookie(miceTraitC,miceTraitC,30);
    setCookie(miceTraitD,miceTraitD,30);
    setCookie(miceTraitE,miceTraitE,30);
}, 10000);

function load() {
    var cmoney = getCookie(money);
    var ctime = getCookie(time);
    var ctemp = getCookie(temp);
    var cins = getCookie(ins);
    var cspace = getCookie(space);
    var cfood = getCookie(food);
    var cmiceNames = getCookie(miceNames);
    var cmiceAge = getCookie(miceAge);
    var cmiceHealth = getCookie(miceHealth);
    var cmiceTraitA = getCookie(miceTraitA);
    var cmiceTraitB = getCookie(miceTraitB);
    var cmiceTraitC = getCookie(miceTraitC);
    var cmiceTraitD = getCookie(miceTraitD);
    var cmiceTraitE = getCookie(miceTraitE);
    if (cmoney != "") {
        money = cmoney;
    }
    if (ctime != "") {
        time = ctime;
    }
    if (ctemp != "") {
        temp = ctemp;
    }
    if (cins != "") {
        ins = cins;
    }
    if (cspace != "") {
        space = cspace;
    }
    if (cmiceNames != "") {
        miceNames = cmiceNames;
    }
    if (cmiceAge != "") {
        miceAge = cmiceAge;
    }
    if (cmiceHealth != "") {
        miceHealth = cmiceHealth
    }
    if (miceTraitA != "") {
        miceTraitA = cmiceTraitA;
    }
    if (miceTraitB != "") {
        miceTraitB = cmiceTraitB;
    }
    if (miceTraitC != "") {
        miceTraitC = cmiceTraitC;
    }
    if (miceTraitD != "") {
        miceTraitD = cmiceTraitD;
    }
    if (miceTraitE != "") {
        miceTraitE = cmiceTraitE;
    }
})
