var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
      background(219, 255, 255);
      var casaparte1 = function(){
          //Telhado1
          fill(214, 133, 90);
          beginShape();
          vertex(360,153);
          vertex(215,154);
          vertex(223,118);
          vertex(327,118);
          vertex(362,153);
          endShape();
          fill(176, 108, 74);
          rect(211,150,149,3);
          //Casa
          fill(255, 194, 153);
          rect(11,153,233,121);
          rect(228,153,122,121);
          fill(217, 157, 117);
          noStroke();
          rect(229,154,121,4);
          stroke(0, 0, 0);
          fill(207, 186, 186);
          rect(3,144,233,11);
          //Telhado 2
          fill(214, 133, 90);
          beginShape();
          vertex(2,145);
          vertex(245,144);
          vertex(217,94);
          vertex(22,94);
          vertex(-1,144);
          endShape();
          noStroke();
          fill(217, 157, 117);
          rect(12,156,216,5);
          stroke(0, 0, 0);
          fill(176, 108, 74);
          rect(-1,140,244,5);
          //Garagem
          fill(214, 133, 90);
          beginShape();
          vertex(219,213);
          vertex(220,207);
          vertex(237,181);
          vertex(313,144);
          vertex(390,186);
          vertex(383,190);
          vertex(378,185);
          endShape();
          fill(191, 163, 130);
          beginShape();
          vertex(225,213);
          vertex(219,214);
          vertex(239,186);
          vertex(313,149);
          vertex(386,188);
          vertex(379,192);
          endShape();
          fill(209, 148, 107);
          beginShape();
          vertex(225,274);
          vertex(225,213);
          vertex(244,188);
          vertex(244,284);
          vertex(226,275);
          endShape();
          fill(255, 194, 153);
          beginShape();
          vertex(244,284);
          vertex(380,284);
          vertex(380,188);
          vertex(313,153);
          vertex(244,188);
          endShape();
          noStroke();
          fill(217, 157, 117);
          beginShape();
          vertex(220,207);
          vertex(190,274);
          vertex(225,274);
          vertex(225,214);
          vertex(220,214);
          vertex(218,212);
          endShape();
          fill(176, 120, 83);
          beginShape();
          vertex(225,213);
          vertex(244,189);
          vertex(243,198);
          vertex(226,217);
          vertex(226,212);
          endShape();
          fill(217, 157, 117);
          beginShape();
          vertex(244,189);
          vertex(313,154);
          vertex(379,189);
          vertex(379,199);
          vertex(313,166);
          vertex(244,198);
          vertex(244,189);
          endShape();
          stroke(0, 0, 0);
          fill(196, 154, 115);
          beginShape();
          vertex(304,159);
          vertex(311,156);
          vertex(311,166);
          vertex(304,169);
          vertex(304,159);
          endShape();
          rect(309,156,8,9);
          beginShape();
          vertex(318,165);
          vertex(310,169);
          vertex(303,169);
          endShape();
          fill(45, 207, 191);
          rect(300,175,22,22);
          fill(184, 121, 50);
          beginShape();
          vertex(300,175);
          vertex(323,175);
          vertex(323,197);
          vertex(320,197);
          vertex(320,178);
          vertex(301,178);
          endShape();
          line(320,178,323,175);
          fill(196, 128, 72);
          beginShape();
          vertex(308,178);
          vertex(308,186);
          vertex(301,186);
          vertex(301,190);
          vertex(308,190);
          vertex(308,197);
          vertex(313,197);
          vertex(313,190);
          vertex(319,190);
          vertex(319,186);
          vertex(313,186);
          vertex(313,178);
          vertex(308,178);
          endShape();
          fill(247, 188, 148);
          rect(254,217,117,66);
          noStroke();
          fill(3, 135, 80);
          beginShape();
          vertex(192,275);
          vertex(244,284);
          vertex(226,275);
          vertex(191,275);
          endShape();
          stroke(0, 0, 0);
          };
      var detalhesgaragem = function(){
          fill(214, 153, 112);
          beginShape();
          vertex(255,218);
          vertex(371,218);
          vertex(371,283);
          vertex(368,283);
          vertex(368,221);
          vertex(255,221);
          endShape();
          line(368,221,371,218);
      };
      var porta = function() {
          rect(95,224,45,45);
          arc(118,226,45,45,181,360);
          fill(245, 139, 112);
          rect(101,224,33,45);
          arc(118,226,33,33,181,360);
          noFill();
          beginShape();
          vertex(120,210);
          bezierVertex(113,210,104,217,104,224);
          vertex(104,269);
          endShape();
          fill(224, 197, 197);
          rect(106,234,4,10);
          ellipse(106,239,5,5);
          fill(255, 240, 240);
          rect(86,272,42,7);
          beginShape();
          vertex(87,272);
          vertex(105,269);
          vertex(140,269);
          vertex(129,273);
          vertex(86,273);
          endShape();
          beginShape();
          vertex(128,279);
          vertex(140,275);
          vertex(140,270);
          vertex(129,273);
          endShape();
      };
      var janela = function(k){
          fill(0, 230, 255);
          rect(k+26,210,46,56);
          for(var b =202; b<227;b+=22){ 
          beginShape();
          vertex(k+27,b+29);
          vertex(k+37,b+26);
          vertex(k+63,b+26);
          vertex(k+72,b+29);
          endShape();
          }
          fill(176, 103, 67);
          beginShape();
          vertex(k+21,214);
          bezierVertex(k+23,212,k+45,182,k+76,214);
          vertex(k+59,210);
          vertex(k+38,210);
          vertex(k+22,213);
          endShape();
          beginShape();
          vertex(k+22,213);
          vertex(k+22,269);
          vertex(k+76,269);
          vertex(k+76,214);
          vertex(k+73,213);
          vertex(k+73,266);
          vertex(k+25,266);
          vertex(k+25,213);
          endShape();
          rect(k+35,210,3,55);
          rect(k+59,210,3,55);
          line(k+47,200,k+36,210);
          line(k+47,200,k+62,210);
      };
      
      var calcada = function(){
          fill(7, 168, 101);
          rect(-1,270,429,138);
          fill(140, 123, 123);
          rect(-1,363,444,52);
          fill(184, 184, 184);
          beginShape();
          vertex(87,280);
          bezierVertex(69,287,72,304,120,309);
          vertex(280,312);
          vertex(342,364);
          vertex(507,364);
          vertex(378,284);
          vertex(245,284);
          vertex(261,295);
          vertex(140,293);
          bezierVertex(144,292,106,293,127,280);
          endShape();
          beginShape();
          vertex(307,335);
          vertex(341,363);
          vertex(-10,363);
          vertex(-10,335);
          vertex(427,335);
          endShape();
          fill(148, 146, 148);
          beginShape();
          vertex(341,364);
          vertex(334,357);
          vertex(-77,357);
          vertex(-77,364);
          vertex(341,364);
          endShape();
      };
      
      calcada();
      casaparte1();
      for(var l=217;l<285;l+=23){
          line(371,l,254,l);
      }
      detalhesgaragem();
      for(var j =32; j<177; j+=110){
          fill(0, 230, 255);
          rect(j,156,64,26);
          fill(214, 133, 90);
          rect(j,156,5,26);
          rect(j+27,156,5,26);
      }
      janela(10);
      janela(128);
      porta();
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);