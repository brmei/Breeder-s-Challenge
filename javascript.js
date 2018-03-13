var money = 100;
//money is earned by selling mice, it is used to buy mice, space, and other things.
var time = 0;
//time is used to determine mice growth. Ez
var temp = 22;
var ins = 1;
//temperature can control mice health. SAO is good. 30-32 is healthy. 20-25 default
var space = 100;
var isRoom = false;
//space determines the amount of mice the breeder could have
var food = 100;
//food is necessary for mice growth. Without enough food, mice lose health. Mice requires 5 grams per day
var miceNames = [
];
var miceAge = [
];
var miceHealth = [
];
var miceTraitA = [
];
var miceTraitB = [
];
var miceTraitC = [
];
var miceTraitD = [
];
var miceTraitE = [
];

var randNames = [
    "Joshua","Pedro","Phillip","Dancy","Dantey","Marchetti","Brian","Anthony","Matthew","Eric","Christy","Thinh","Ruben","Kevin","Burrito","Wilson","Li Wei","Thomas","Dalton","Jacky","Clinton","Albert","Edmond","Emmanuel","Salamander","Ruhma","Kelly","Steven","Timothy","Shadiah","Lance","Chris","Kang","Perry","Ryan","Kelsey","Nella","Ben","Brandon","Hongjun","Jake","Sasha","Susan","Kirito","Jerry","Larry","Summer","Steve","Alex","Asuna","Night","Calvin","Darwin","Mouse #3","Watson","NAME YOUR MOUSE NEXT TIME","Kate","Taylor","Lauren","Megan","Amber","Matt","David","Andrew","James","John","Joseph","Nicholas","William","Jonathan","Tyler","Jennifer","Emily","Samantha","Elizabeth","Nicole","Tuesday","Chicken","Cheese Grate","Joel","Razzi","Roan","Shen","Janhavi","Ellen","Russitano","Nielsen","Liam","Justin","Chess is a Sport","Golf is also a Sport","Savin","Morgan","Hom","Covfee","Breaux","Yeiter","White","Freedman","Trump",
];
//traits: trait 1-color(brown,white); trait 2-eye(black,red); trait 3-growth(slow,fast); trait 4-size(large,small); trait 5-tail(long,short). First Number is age(weeks 7 is adult. Mice die after two years, or 100 weeks. Mice develop as embryo for 3 weeks). Second Number is health.
var par1 = -1;
var par2 = -1;
function addMouse(bypass,name) {
    var birthName = "";
    if (bypass === 1) {
        if (name === "") {
            var randNumb = Math.floor(Math.random() * 99); 
            birthName = randNames[randNumb];
            miceNames.push(birthName);
        } else {
            miceNames.push(name);
        }
        miceAge.push(0);
        miceHealth.push(100);
        miceTraitA.push(genRandTrait());
        miceTraitB.push(genRandTrait());
        miceTraitC.push(genRandTrait());
        miceTraitD.push(genRandTrait());
        miceTraitE.push(genRandTrait());

    } else {
        if (name === "") {
            var randNumb = Math.floor(Math.random() * 99); 
            birthName = randNames[randNumb];
            miceNames.push(birthName);
        } else {
            miceNames.push(name);
        }
        miceAge.push(-3);
        miceHealth.push(100);
        
        miceTraitA.push(cross(miceTraitA[par1],miceTraitA[par2]));
        miceTraitB.push(cross(miceTraitB[par1],miceTraitB[par2]));
        miceTraitC.push(cross(miceTraitC[par1],miceTraitC[par2]));
        miceTraitD.push(cross(miceTraitD[par1],miceTraitD[par2]));
        miceTraitE.push(cross(miceTraitE[par1],miceTraitE[par2]));
        par1 = 0;
        par2 = 0;
    }
    $("#mice").empty();
    updateMice();
}
function genRandTrait(){
    var randTrait = Math.floor(Math.random()*4);
        if (randTrait >= 4) {
            randTrait = 2;    
        }
    return randTrait;
}
function killMouse(index) {
    miceNames.splice(index,1);
    miceAge.splice(index,1);
    miceHealth.splice(index,1);
    miceTraitA.splice(index,1);
    miceTraitB.splice(index,1);
    miceTraitC.splice(index,1);
    miceTraitD.splice(index,1);
    miceTraitE.splice(index,1);
}
function cross(p1,p2) {
    var child = 0;
    var rand = Math.floor((Math.random()*4)+1);
    console.log(rand);
    if (p1 !== 2 && p2 !== 2) {
        child = (p1 + p2)/2;    
    } else if (p1 !== p2) {
        if (rand<=2) {
            child = p1;
        }
        if (rand>=3) {
            child = p2;
        }
    } else {
        if (rand===4) {
            child = 2;
        }
        child = rand;
    }
    return child;
}
function parA(i) {
    if (miceAge[i] >= 7) {
        $("#p1name").text(miceNames[i]);
        par1 = i;
    } else {
        young();    
    }
}
function parB(i) {
    if (miceAge[i] >= 7) {
        $("#p2name").text(miceNames[i]);
        par2 = i;
    } else {
        young();    
    }
}
function resetBreed() {
    par1 = -1;
    par2 = -1;
    $("#p1name").text("None");
    $("#p2name").text("None");
    $("#breedName").val("");
}

function updateMice() {
    var useSpace = 0;
    for (var i=0;i<miceNames.length;i++) {
        if (miceTraitD>=3) {
            useSpace = useSpace + 5;    
        } else {
            useSpace = useSpace + 10;    
        }
        if (30<=temp<=32) {
            if ((Math.floor(Math.random() * 2) + 1) <= 1) {
                miceHealth[i] = miceHealth[i] - 5;
            }
        }
        
        if (miceHealth[i] <= 0) {
            killMouse(i);
        } else {
            var age = miceAge[i];
            if (age >= 100) {
                killMouse(i);    
            }
            if (miceTraitC >= 3) {
                miceAge[i] = age + 2;
            } else {
                miceAge[i] = age + 1;
            }
            var mature = "No";
            if (miceAge[i] >= 7) {
                mature = "Yes";
            } else if (miceAge[i] <= 0) {
                mature = "Not even born";
            }
            
            var disName = $("<p>").text("Mouse: " + miceNames[i]);
            var disHealth = $("<p>").text("Health: " + miceHealth[i]);
            var disAge = $("<p>").text("Age: " + miceAge[i]);
            var disMature = $("<p>").text("Mature: " + mature);
            
            var disTrait1 = "Brown";
            var disTrait2 = "Black";
            var disTrait3 = "Average";
            var disTrait4 = "Long";
            if (miceTraitA[i] >= 3) {
                disTrait1 = "White";
            }
            if (miceTraitB[i] >= 3) {
                disTrait2 = "Red";
            }
            if (miceTraitD[i] >= 3) {
                disTrait3 = "Small";
            }
            if (miceTraitE[i] >= 3) {
                disTrait4 = "Short";
            }
            var disChar = $("<p>").text("Characteristics: "+disTrait1+" Fur, "+disTrait2+" Eyes, "+disTrait3+" Size, "+disTrait4+" Tail");
            var disButton1 = $("<button>").text("Choose as Parent 1").attr("onclick","parA("+i+")");
            var disButton2 = $("<button>").text("Choose as Parent 2").attr("onclick","parB("+i+")");
            var disSell;
            if (miceAge[i]>=0) {
                disSell = $("<button>").text("Sell Mouse (cost based on genotype and condition)").attr("onclick","sell("+i+")");
            } else {
                disSell = $("<button>").text("Mouse too young to sell").attr("onclick","young()");
            }
            var disBreed = $("<p>").append(disButton1,disButton2);
            var disMouse = $("<div>").addClass("org").append(disName,disHealth,disAge,disMature,disChar,disBreed,disSell);
            $("#mice").append(disMouse);
            if (miceTraitA[i]>=3&&miceTraitB[i]>=3&&miceTraitC[i]>=3&&miceTraitD[i]>=3&&miceTraitE[i]>=3) {
                alert("You have an all recessive mouse! You win!");    
            }
        }
        //kills or keeps mice based of health
    }
    $("#statSpaceL").text(useSpace);
    if (useSpace > space) {
        isRoom = false;    
    } else {
        isRoom = true;    
    }
}
function sell(i) {
    var geneValue = miceTraitA[i]+miceTraitB[i]+miceTraitC[i]+miceTraitD[i]+miceTraitE[i];
    var ageValue = miceHealth[i];
    if (ageValue >= 10) {
        ageValue = 10;    
    }
    var conditionValue = ageValue*miceAge[i]/100;
    var cost = geneValue*conditionValue;
    money = money + cost;
    $(".statMoney").text(money);
    killMouse(i);
    $("#mice").empty();
    updateMice();
}
function timeControl(x) {
    if (x===1) {
        clearTimeout(tt);
    } else if (x===3) {
        weekCycle();
        clearTimeout(tt);
    } else if (x===2) {
        setInterval(weekCycle(), 100);
    }
}
var tt;
function weekCycle() {
    time++;
    $("#statTime").text("Time: " + time + " weeks");
    //controls time
    
    var randTemp = Math.floor((Math.random() * 5) + 1);
    if (temp > randTemp + 20) {
        temp = temp - ins;    
    } else if (temp < randTemp + 20) {
        temp = temp + ins;
    }
    $("#statTemp").text(temp);
    //controls temp
    
    var damage = 0;
    
    if ((food - miceNames.length * 5) > 0) {
        food = food - miceNames.length * 5;
    } else {
        damage = (food - miceNames.length * 5) / -5;
        food = 0;
    }
    $("#statFood").text(food);
    
    for (damage;damage>0;damage--) {
        var randMouse = Math.floor(Math.random() * miceNames.length);
        miceHealth[randMouse] = miceHealth[randMouse] - 5;
    }
    //controls food
    $("#mice").empty();
    updateMice();
    resetBreed();
    
    if (miceNames.length < 1) {
        $("#mice").append("<p>No mice availible</p>");
    }
    //controls mice variables and updates html
    
    console.log(miceHealth);
    
    tt = setTimeout(arguments.callee, 30000);
    //timeout should be 30000
}
$("#breedMouse").click(function(){
    if (par1 !== par2 && par1 !== -1 && par2 !== -1 && isRoom) {
        var breedName = $("#breedName").val();
        addMouse(0,breedName);
        resetBreed();   
    } else {
        error();    
    }
});
$("#buyMouse").click(function(){
    if (money - 10 >= 0 && isRoom) {
        var shopName = $("#shopName").val();
        $("#shopName").val("");
        addMouse(1,shopName);
        money = money - 10;
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyCage").click(function(){
    if (money - 150 >= 0) {
        money = money - 150;
        space = space + 50;
        $("#statSpace").text(space);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyTank").click(function(){
    if (money - 250 >= 0) {
        money = money - 250;
        space = space + 100;
        $("#statSpace").text(space);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyLab").click(function(){
    if (money - 2000 >= 0) {
        money = money - 2000;
        space = space + 1000;
        $("#statSpace").text(space);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyCan").click(function(){
    if (money - 10 >= 0) {
        money = money - 10;
        food = food + 50;
        $("#statFood").text(food);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buySBag").click(function(){
    if (money - 15 >= 0) {
        money = money - 15;
        food = food + 100;
        $("#statFood").text(food);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyLBag").click(function(){
    if (money - 30 >= 0) {
        money = money - 30;
        food = food + 500;
        $("#statFood").text(food);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyAir").click(function(){
    if (money - 600 >= 0) {
        money = money - 600;
        temp = temp - 10;
        $("#statTemp").text(temp);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyHeat").click(function(){
    if (money - 600 >= 0) {
        money = money - 600;
        temp = temp + 10;
        $("#statTemp").text(temp);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyIns").click(function(){
    if (money - 300 >= 0) {
        money = money - 300;
        ins = ins / 2;
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
$("#buyTime").click(function(){
    if (money - 1000 >= 0) {
        money = money - 1000;
        timeControl(1);
        $(".statMoney").text(money);
    } else {
        poor();    
    }
});
function poor() {
    alert("Insufficient Funds!");
}
function young() {
    alert("Insufficient Age!");
}
function error() {
    alert("Insufficient Needs!");
}
$("#start").click(function(){
    setInterval(weekCycle(), 100);
    $("#start").hide();
    $("#container").show();
    load();
});
setInterval(function (){
    money = Math.round(money);
    $(".statMoney").text(money);
}, 50);
//homozygousd is 1 heterozygous is 2 homozygousr is 3. This means that when a cross occurs, we just find the average of
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
