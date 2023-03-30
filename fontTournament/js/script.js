function start() {
  $(".start").hide();
  $(".tournament").show();
  next();
}

var list = [
  "firacode",
  "d2coding",
  "hack",
  "jetbrainsmono",
  "ubuntumono",
  "ibmplexmono",
  "anonymouspro",
  "sourcecodepro",
  //   1: { name: "firacode" },
  //   2: { name: "d2coding" },
  //   3: { name: "hack" },
  //   4: { name: "jetbrainsmono" },
  //   5: { name: "ubuntumono" },
  //   6: { name: "ibmplexmono" },
  //   7: { name: "anonymouspro" },
  //   8: { name: "sourcecodepro" },
];
// var result = {
//   firacode: { name: font },
//   d2coding: { name: font },
//   hack: { name: font },
//   jetbarinsmono: { name: font },
//   ubuntumono: { name: font },
//   ibmplexmono: { name: font },
//   sourcecodepro: { name: font },
//   anonymouspro: { name: font },
//   fontName: { name: font },
// };

//랜덤배열생성
//에러 random개수가 length보다 적어서 함수가 안끝나서 무한로딩

var i = 0;

var fontarr = [];
while (fontarr.length < 8) {
  var num = parseInt(Math.random() * 8);
  if (fontarr.indexOf(num) == -1) {
    fontarr.push(num);
  }
  console.log(fontarr);
}

function btnclick() {
  //   var fontarr = [];
  //   while (fontarr.length < 8) {
  //     var num = parseInt(Math.random() * 8);
  //     if (fontarr.indexOf(num) == -1) {
  //       fontarr.push(num);
  //     }
  //     console.log(fontarr);
  //   }

  //랜덤+1을 하면 1부터 시작하므로 마지막번호가 없어서 에러가 난다.
  //   document.write(fontarr);
  //   console.log(list[fontarr[0]]);
  //   console.log(list[fontarr[1]]);
  //   console.log(list[fontarr[2]]);
  //   console.log(list[fontarr[3]]);
  //   console.log(list[fontarr[4]]);
  //   console.log(list[fontarr[5]]);
  //   console.log(list[fontarr[6]]);
  //   console.log(list[fontarr[7]]);

  //var i = 0;

  while (i < 9) {
    if (i >= 9) {
      $(".tournament").hide();
      $(".start").show();
    } else {
      // var a = " " + list[i]["name"];
      // document.getElementById("left").className = list[1]["name"];
      //   $(".fontName").attr("class", list[i]["name"]);
      //   fontarr.pop();
      // i++;
      // alert(i);
      // console.log(
      //   i + (document.getElementById("right").className = list[fontarr[i]])
      // );
      //console.log(list[fontarr[i]]);
      document.getElementById("left").className = list[fontarr[i]];
      console.log(list[fontarr[i]]);
      i = i + 1;
      document.getElementById("right").className = list[fontarr[i]];

      console.log(list[fontarr[i]]);
      i = i + 1;

      //className = list[4]["name"];
      //   $("#right").attr("fontName", list[i]["name"]);
      // i++;
      console.log(i);
      //break;
      //   $("div").attr("class", list[num]["name"]);
      break;
    }
  }
}
// $("cardButtonRight");
