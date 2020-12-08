ctx = document.getElementById("myCanvas").getContext("2d");

var drawingBlueprint = new Array([785,369,69,"#fed202",746,366,69,"#fed202",701,359,69,"#fed202",651,351,69,"#fed202",677,317,69,"#fed202",733,327,69,"#fed202",788,325,69,"#fed202",820,352,69,"#fed202",832,368,69,"#fed202",847,327,69,"#fed202",821,314,69,"#fed202",778,310,69,"#fed202",735,311,69,"#fed202",666,311,69,"#fed202",654,328,69,"#fed202",649,367,69,"#fed202",676,378,69,"#fed202",721,388,69,"#fed202",797,397,69,"#fed202",770,402,69,"#fed202",829,403,69,"#fed202",865,390,69,"#fed202",886,370,69,"#fed202",887,333,69,"#fed202",653,357,69,"#fed202",647,355,69,"#fed202",643,351,69,"#fed202",627,350,69,"#fed202",630,335,69,"#fed202",923,353,49,"#fed202",940,351,49,"#fed202",957,348,49,"#fed202",977,348,49,"#fed202",990,349,49,"#fed202",1009,349,49,"#fed202",986,319,20,"#000300",987,319,20,"#000300",986,323,20,"#000300",985,328,20,"#000300",992,329,20,"#000300",992,329,20,"#000300",997,327,20,"#000300",998,327,20,"#000300",1003,328,25,"#000300",1030,324,25,"#000300",1017,324,25,"#000300",1015,322,25,"#000300",1002,323,25,"#000300",997,321,25,"#000300",998,299,25,"#000300",1010,297,25,"#000300",1015,297,25,"#000300",998,391,6,"#ff0000",998,391,6,"#ff0000",998,391,6,"#ff0000",998,392,10,"#ff0000",998,392,10,"#ff0000",998,395,10,"#ff0000",998,397,10,"#ff0000",998,400,10,"#ff0000",998,400,10,"#ff0000",998,402,10,"#ff0000",997,404,10,"#ff0000",997,405,10,"#ff0000",1004,393,10,"#ff0000",1004,393,10,"#ff0000",1006,394,10,"#ff0000",1008,402,10,"#ff0000",1010,403,10,"#ff0000",1045,359,10,"#fed202",1047,359,10,"#fed202",1052,363,10,"#fed202",1056,366,10,"#fed202",1062,368,10,"#fed202",1060,368,18,"#fed202",1060,368,18,"#fed202",1058,366,18,"#fed202",1052,363,18,"#fed202",1059,365,18,"#fed202",1070,376,18,"#fed202",1079,382,18,"#fed202",1082,385,18,"#fed202",1031,353,14,"#000300",721,452,14,"#000300",721,452,14,"#000300",717,465,14,"#000300",716,475,14,"#000300",717,489,14,"#000300",717,506,14,"#000300",717,518,14,"#000300",717,528,14,"#000300",718,495,14,"#000300",827,463,14,"#000300",830,476,14,"#000300",830,480,14,"#000300",830,488,14,"#000300",831,494,14,"#000300",831,500,14,"#000300",832,514,14,"#000300",834,523,14,"#000300",834,542,14,"#000300",835,529,14,"#000300",654,305,41,"#ff0000",658,294,41,"#ff0000",659,272,41,"#ff0000",660,228,41,"#ff0000",655,244,41,"#ff0000",654,217,41,"#ff0000",656,202,41,"#ff0000",855,308,41,"#ff0000",864,284,41,"#ff0000",872,278,41,"#ff0000",877,262,41,"#ff0000",877,262,41,"#ff0000",882,242,41,"#ff0000",885,233,41,"#ff0000",886,228,41,"#ff0000",886,227,41,"#ff0000",887,222,41,"#ff0000",890,218,41,"#ff0000",725,303,41,"#00ff00",726,301,41,"#00ff00",727,283,41,"#00ff00",727,265,41,"#00ff00",726,250,41,"#00ff00",726,240,41,"#00ff00",727,238,41,"#00ff00",729,228,41,"#00ff00",730,222,41,"#00ff00",734,212,41,"#00ff00",735,206,41,"#00ff00",796,305,41,"#0000ff",797,298,41,"#0000ff",797,293,41,"#0000ff",797,267,41,"#0000ff",804,243,41,"#0000ff",814,228,41,"#0000ff",814,220,41,"#0000ff",820,207,41,"#0000ff",859,310,41,"#feff04",859,310,41,"#feff04",859,310,41,"#feff04",859,307,41,"#feff04",863,298,41,"#feff04",868,288,41,"#feff04",873,274,41,"#feff04",877,269,41,"#feff04",881,260,41,"#feff04",887,240,41,"#feff04",889,238,41,"#feff04",889,238,41,"#feff04",896,211,41,"#feff04",890,210,41,"#feff04",883,227,41,"#feff04",872,261,41,"#feff04",870,269,41,"#feff04",866,282,41,"#feff04",853,306,41,"#feff04"]);

var current = 0;

var xPos = 0;
var yPos = 0;
var size = 0;
var color = 0;

function drawSquare(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBlueprint(blueprint) {
    for (x=0; x<=drawingBlueprint[0].length; x++) {
        if (x % 4 == 0) {
            if (current == 0) {
                posX = blueprint[x]
            } else if (current == 1) {
                posY = blueprint[x]
            } else if (current == 2) {
                size = blueprint[x]
            } else if (current == 3) {
                color = blueprint[x]
            }
            drawSquare(color, xPos, yPos, size, size);
            current = 0;
        }
    }
}
drawBlueprint(drawingBlueprint);
