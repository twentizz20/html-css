//폰트 리스트
var list = [
  "firacode",
  "d2coding",
  "hack",
  "jetbrainsmono",
  "ubuntumono",
  "ibmplexmono",
  "anonymouspro",
  "sourcecodepro",
];

//변수
var i = 0;
var j = 0;
var k = 0;

var fontarr8 = [];
var fontarr4 = [];
var fontarr2 = [];
var winarr = [];

//순서 랜덤
function random() {
  while (fontarr8.length < 8) {
    var num = parseInt(Math.random() * 8);
    if (fontarr8.indexOf(num) == -1) {
      fontarr8.push(num);
    }
  }
  console.log(fontarr8);
}

//시작버튼 눌렀을 때 실행
function start() {
  $(".start").hide();
  $(".end").hide();
  $(".tournament").show();
  random();
  next();
}

//마지막 화면 실행
function end() {
  $(".tournament").hide();
  $(".start").hide();
  $(".end").show();

  document.getElementById("winFont").innerHTML = list[winarr[0]];
  document.getElementById("winFont").className = list[winarr[0]];
  clear();
}

//처음으로 초기화
function clear() {
  i = 0;
  j = 0;
  k = 0;
  fontarr8 = [];
  fontarr4 = [];
  fontarr2 = [];
  winarr = [];
}

//처음화면 가기
function gotostart() {
  $(".tournament").hide();
  $(".end").hide();
  $(".start").show();
}

//왼쪽버튼 클릭
function btnclickleft() {
  console.log("i=" + i);
  if (i > 12) {
    winarr.push(fontarr2[k - 2]);
  } else if (i >= 10) {
    fontarr2.push(fontarr4[j - 2]);
  } else {
    fontarr4.push(fontarr8[i - 2]);
  }
  console.log(fontarr4);
  console.log(fontarr2);
  next();
}

//오른쪽 버튼 클릭
function btnclickright() {
  console.log("i=" + i);
  if (i > 12) {
    winarr.push(fontarr2[k - 1]);
  } else if (i > 8) {
    fontarr2.push(fontarr4[j - 1]);
  } else {
    fontarr4.push(fontarr8[i - 1]);
  }
  console.log(fontarr4);
  console.log(fontarr2);
  console.log(winarr);

  next();
}

//다음 페이지 구성
function next() {
  if (i >= 14) {
    end();
  } else if (i >= 12) {
    tour2();
  } else if (i >= 8) {
    tour4();
  } else {
    tour8();
  }
}

//8강 화면
function tour8() {
  console.log("8강");
  document.getElementById("left").className = list[fontarr8[i]];
  console.log("8강=" + list[fontarr8[i]]);
  console.log("i=" + i);
  i = i + 1;
  document.getElementById("right").className = list[fontarr8[i]];
  console.log("8강=" + list[fontarr8[i]]);
  console.log("i=" + i);

  i = i + 1;
}

//4강 화면
function tour4() {
  console.log("4강");

  console.log(fontarr4);
  document.getElementById("left").className = list[fontarr4[j]];
  console.log("4강=" + list[fontarr4[j]]);
  i = i + 1;
  j = j + 1;
  document.getElementById("right").className = list[fontarr4[j]];
  console.log("4강=" + list[fontarr4[j]]);
  i = i + 1;
  j = j + 1;
}

//결승 화면
function tour2() {
  console.log("2강");

  document.getElementById("left").className = list[fontarr2[k]];
  console.log("2강=" + list[fontarr2[k]]);
  i = i + 1;
  k += 1;
  document.getElementById("right").className = list[fontarr2[k]];
  console.log("2강=" + list[fontarr2[k]]);
  i = i + 1;
  k += 1;
}
