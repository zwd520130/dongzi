(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
//new vertion
// library properties:
lib.properties = {
	width: 640,
	height: 1010,
	fps: 30,
	color: "#D2F5F3",
	manifest: [
		{src:"images/cl/_1_1.png", id:"_1_1"},
		{src:"images/cl/_1_2.png", id:"_1_2"},
		{src:"images/cl/_2_1.png", id:"_2_1"},
		{src:"images/cl/_2_2.png", id:"_2_2"},
		{src:"images/cl/_2_3.png", id:"_2_3"},
		{src:"images/cl/_2_4.png", id:"_2_4"},
		{src:"images/cl/_2_5.png", id:"_2_5"},
		{src:"images/cl/_3_1.png", id:"_3_1"},
		{src:"images/cl/_3_2.png", id:"_3_2"},
		{src:"images/cl/_3_3.png", id:"_3_3"},
		{src:"images/cl/_3_4.png", id:"_3_4"},
		{src:"images/cl/_3_5.png", id:"_3_5"},
		{src:"images/cl/_4_1.png", id:"_4_1"},
		{src:"images/cl/_4_1_1.png", id:"_4_1_1"},
		{src:"images/cl/_4_2.png", id:"_4_2"},
		{src:"images/cl/_4_3.png", id:"_4_3"},
		{src:"images/cl/_4_4.png", id:"_4_4"},
		{src:"images/cl/_4_5.png", id:"_4_5"},
		{src:"images/cl/_5_1.png", id:"_5_1"},
		{src:"images/cl/_5_2.png", id:"_5_2"},
		{src:"images/cl/_5_3.png", id:"_5_3"},
		{src:"images/cl/Bitmap1.png", id:"Bitmap1"},
		{src:"images/cl/Bitmap2.png", id:"Bitmap2"},
		{src:"images/cl/btn1.png", id:"btn1"},
		{src:"images/cl/btn2.png", id:"btn2"},
		{src:"images/cl/pao21.png", id:"pao21"},
		{src:"images/cl/pao22.png", id:"pao22"},
		{src:"images/cl/pao31.png", id:"pao31"},
		{src:"images/cl/pao32.png", id:"pao32"},
		{src:"images/cl/pao33.png", id:"pao33"},
		{src:"images/cl/pao4_1.png", id:"pao4_1"},
		{src:"images/cl/pao5_1.png", id:"pao5_1"},
		{src:"images/cl/pao5_2.png", id:"pao5_2"},
		{src:"images/cl/play.png", id:"play"},
		{src:"images/cl/rili1.png", id:"rili1"},
		{src:"images/cl/rili1_1.png", id:"rili1_1"},
		{src:"images/cl/rili2_1.png", id:"rili2_1"},
		{src:"images/cl/rili2_2.png", id:"rili2_2"},
		{src:"images/cl/rili2_3.png", id:"rili2_3"},
		{src:"images/cl/rili2_4.png", id:"rili2_4"},
		{src:"images/cl/rili3_1.png", id:"rili3_1"},
		{src:"images/cl/rili3_2.png", id:"rili3_2"},
		{src:"images/cl/rili3_3.png", id:"rili3_3"},
		{src:"images/cl/rili3_4.png", id:"rili3_4"},
		{src:"images/cl/rili4_1.png", id:"rili4_1"},
		{src:"images/cl/rili4_2.png", id:"rili4_2"},
		{src:"images/cl/rili4_3.png", id:"rili4_3"},
		{src:"images/cl/rili5_1.png", id:"rili5_1"},
		{src:"images/cl/rili5_2.png", id:"rili5_2"},
		{src:"images/cl/stop.png", id:"stop"},
		{src:"images/cl/text1.png", id:"text1"},
		{src:"images/cl/text1PNG复制.png", id:"text1PNG复制"},
		{src:"images/cl/text2_1.png", id:"text2_1"},
		{src:"images/cl/text2_2.png", id:"text2_2"},
		{src:"images/cl/text2_3.png", id:"text2_3"},
		{src:"images/cl/text2_4.png", id:"text2_4"},
		{src:"images/cl/text3_1.png", id:"text3_1"},
		{src:"images/cl/text3_2.png", id:"text3_2"},
		{src:"images/cl/text3_3.png", id:"text3_3"},
		{src:"images/cl/text3_4.png", id:"text3_4"},
		{src:"images/cl/text4_1.png", id:"text4_1"},
		{src:"images/cl/text4_2.png", id:"text4_2"},
		{src:"images/cl/text4_3.png", id:"text4_3"},
		{src:"images/cl/text5_1.png", id:"text5_1"},
		{src:"images/cl/text5_2.png", id:"text5_2"},
		{src:"images/cl/text5_3.png", id:"text5_3"},
		{src:"images/cl/tit.png", id:"tit"},
		{src:"images/cl/yld_0.png", id:"yld_0"},
		{src:"images/cl/yld_1.png", id:"yld_1"},
		{src:"images/cl/yld_10.png", id:"yld_10"},
		{src:"images/cl/yld_11.png", id:"yld_11"},
		{src:"images/cl/yld_12.png", id:"yld_12"},
		{src:"images/cl/yld_13.png", id:"yld_13"},
		{src:"images/cl/yld_14.png", id:"yld_14"},
		{src:"images/cl/yld_15.png", id:"yld_15"},
		{src:"images/cl/yld_2.png", id:"yld_2"},
		{src:"images/cl/yld_2_1.png", id:"yld_2_1"},
		{src:"images/cl/yld_2_2.png", id:"yld_2_2"},
		{src:"images/cl/yld_2_3.png", id:"yld_2_3"},
		{src:"images/cl/yld_2_4.png", id:"yld_2_4"},
		{src:"images/cl/yld_2_5.png", id:"yld_2_5"},
		{src:"images/cl/yld_2_6.png", id:"yld_2_6"},
		{src:"images/cl/yld_2_7.png", id:"yld_2_7"},
		{src:"images/cl/yld_2_8.png", id:"yld_2_8"},
		{src:"images/cl/yld_2_9.png", id:"yld_2_9"},
		{src:"images/cl/yld_3.png", id:"yld_3"},
		{src:"images/cl/yld_3_1.png", id:"yld_3_1"},
		{src:"images/cl/yld_3_10.png", id:"yld_3_10"},
		{src:"images/cl/yld_3_11.png", id:"yld_3_11"},
		{src:"images/cl/yld_3_2.png", id:"yld_3_2"},
		{src:"images/cl/yld_3_3.png", id:"yld_3_3"},
		{src:"images/cl/yld_3_4.png", id:"yld_3_4"},
		{src:"images/cl/yld_3_5.png", id:"yld_3_5"},
		{src:"images/cl/yld_3_6.png", id:"yld_3_6"},
		{src:"images/cl/yld_3_7.png", id:"yld_3_7"},
		{src:"images/cl/yld_3_8.png", id:"yld_3_8"},
		{src:"images/cl/yld_3_9.png", id:"yld_3_9"},
		{src:"images/cl/yld_3_9PNG复制.png", id:"yld_3_9PNG复制"},
		{src:"images/cl/yld_4.png", id:"yld_4"},
		{src:"images/cl/yld_4_1.png", id:"yld_4_1"},
		{src:"images/cl/yld_4_2.png", id:"yld_4_2"},
		{src:"images/cl/yld_4_3.png", id:"yld_4_3"},
		{src:"images/cl/yld_4_4.png", id:"yld_4_4"},
		{src:"images/cl/yld_5.png", id:"yld_5"},
		{src:"images/cl/yld_5_1.png", id:"yld_5_1"},
		{src:"images/cl/yld_5_2.png", id:"yld_5_2"},
		{src:"images/cl/yld_5_3.png", id:"yld_5_3"},
		{src:"images/cl/yld_5_4.png", id:"yld_5_4"},
		{src:"images/cl/yld_5_5.png", id:"yld_5_5"},
		{src:"images/cl/yld_5_6.png", id:"yld_5_6"},
		{src:"images/cl/yld_6.png", id:"yld_6"},
		{src:"images/cl/yld_7.png", id:"yld_7"},
		{src:"images/cl/yld_8.png", id:"yld_8"},
		{src:"images/cl/yld_9.png", id:"yld_9"},
		{src:"images/cl/云_.png", id:"云"},
		{src:"images/cl/云2.png", id:"云2"},
		{src:"images/cl/云3.png", id:"云3"},
		{src:"images/cl/云4.png", id:"云4"},
		{src:"images/cl/泡1.png", id:"泡1"}
	]
};



// symbols:



(lib._1_1 = function() {
	this.initialize(img._1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,97);


(lib._1_2 = function() {
	this.initialize(img._1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,156);


(lib._2_1 = function() {
	this.initialize(img._2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,108);


(lib._2_2 = function() {
	this.initialize(img._2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,34);


(lib._2_3 = function() {
	this.initialize(img._2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,198);


(lib._2_4 = function() {
	this.initialize(img._2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,134);


(lib._2_5 = function() {
	this.initialize(img._2_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,109);


(lib._3_1 = function() {
	this.initialize(img._3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,136);


(lib._3_2 = function() {
	this.initialize(img._3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,84);


(lib._3_3 = function() {
	this.initialize(img._3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,181);


(lib._3_4 = function() {
	this.initialize(img._3_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,166);


(lib._3_5 = function() {
	this.initialize(img._3_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,81);


(lib._4_1 = function() {
	this.initialize(img._4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,78);


(lib._4_1_1 = function() {
	this.initialize(img._4_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,44);


(lib._4_2 = function() {
	this.initialize(img._4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,229);


(lib._4_3 = function() {
	this.initialize(img._4_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib._4_4 = function() {
	this.initialize(img._4_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,38);


(lib._4_5 = function() {
	this.initialize(img._4_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,143);


(lib._5_1 = function() {
	this.initialize(img._5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,105);


(lib._5_2 = function() {
	this.initialize(img._5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,191);


(lib._5_3 = function() {
	this.initialize(img._5_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,96);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,18);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,18);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,69);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,69);


(lib.pao21 = function() {
	this.initialize(img.pao21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,62);


(lib.pao22 = function() {
	this.initialize(img.pao22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,40);


(lib.pao31 = function() {
	this.initialize(img.pao31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,52);


(lib.pao32 = function() {
	this.initialize(img.pao32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,100);


(lib.pao33 = function() {
	this.initialize(img.pao33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,128);


(lib.pao4_1 = function() {
	this.initialize(img.pao4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,122);


(lib.pao5_1 = function() {
	this.initialize(img.pao5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,156);


(lib.pao5_2 = function() {
	this.initialize(img.pao5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,87);


(lib.play = function() {
	this.initialize(img.play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.rili1 = function() {
	this.initialize(img.rili1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili1_1 = function() {
	this.initialize(img.rili1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili2_1 = function() {
	this.initialize(img.rili2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili2_2 = function() {
	this.initialize(img.rili2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili2_3 = function() {
	this.initialize(img.rili2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili2_4 = function() {
	this.initialize(img.rili2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili3_1 = function() {
	this.initialize(img.rili3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili3_2 = function() {
	this.initialize(img.rili3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili3_3 = function() {
	this.initialize(img.rili3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili3_4 = function() {
	this.initialize(img.rili3_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili4_1 = function() {
	this.initialize(img.rili4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili4_2 = function() {
	this.initialize(img.rili4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili4_3 = function() {
	this.initialize(img.rili4_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili5_1 = function() {
	this.initialize(img.rili5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.rili5_2 = function() {
	this.initialize(img.rili5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.stop = function() {
	this.initialize(img.stop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,174);


(lib.text1PNG复制 = function() {
	this.initialize(img.text1PNG复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,174);


(lib.text2_1 = function() {
	this.initialize(img.text2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,83);


(lib.text2_2 = function() {
	this.initialize(img.text2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.text2_3 = function() {
	this.initialize(img.text2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,85);


(lib.text2_4 = function() {
	this.initialize(img.text2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,84);


(lib.text3_1 = function() {
	this.initialize(img.text3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,140);


(lib.text3_2 = function() {
	this.initialize(img.text3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,109);


(lib.text3_3 = function() {
	this.initialize(img.text3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,175);


(lib.text3_4 = function() {
	this.initialize(img.text3_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,234);


(lib.text4_1 = function() {
	this.initialize(img.text4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,395,55);


(lib.text4_2 = function() {
	this.initialize(img.text4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,144);


(lib.text4_3 = function() {
	this.initialize(img.text4_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,140);


(lib.text5_1 = function() {
	this.initialize(img.text5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,176);


(lib.text5_2 = function() {
	this.initialize(img.text5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,139);


(lib.text5_3 = function() {
	this.initialize(img.text5_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,28);


(lib.tit = function() {
	this.initialize(img.tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,71);


(lib.yld_0 = function() {
	this.initialize(img.yld_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,42);


(lib.yld_1 = function() {
	this.initialize(img.yld_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,51);


(lib.yld_10 = function() {
	this.initialize(img.yld_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,333);


(lib.yld_11 = function() {
	this.initialize(img.yld_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,215);


(lib.yld_12 = function() {
	this.initialize(img.yld_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,171);


(lib.yld_13 = function() {
	this.initialize(img.yld_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,111);


(lib.yld_14 = function() {
	this.initialize(img.yld_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,105);


(lib.yld_15 = function() {
	this.initialize(img.yld_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,437);


(lib.yld_2 = function() {
	this.initialize(img.yld_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,73);


(lib.yld_2_1 = function() {
	this.initialize(img.yld_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,222);


(lib.yld_2_2 = function() {
	this.initialize(img.yld_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,179);


(lib.yld_2_3 = function() {
	this.initialize(img.yld_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,201);


(lib.yld_2_4 = function() {
	this.initialize(img.yld_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,320);


(lib.yld_2_5 = function() {
	this.initialize(img.yld_2_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,120);


(lib.yld_2_6 = function() {
	this.initialize(img.yld_2_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,282);


(lib.yld_2_7 = function() {
	this.initialize(img.yld_2_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,41);


(lib.yld_2_8 = function() {
	this.initialize(img.yld_2_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,244);


(lib.yld_2_9 = function() {
	this.initialize(img.yld_2_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,64);


(lib.yld_3 = function() {
	this.initialize(img.yld_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,58);


(lib.yld_3_1 = function() {
	this.initialize(img.yld_3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,221);


(lib.yld_3_10 = function() {
	this.initialize(img.yld_3_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,66);


(lib.yld_3_11 = function() {
	this.initialize(img.yld_3_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,168);


(lib.yld_3_2 = function() {
	this.initialize(img.yld_3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,219);


(lib.yld_3_3 = function() {
	this.initialize(img.yld_3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,322);


(lib.yld_3_4 = function() {
	this.initialize(img.yld_3_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,166);


(lib.yld_3_5 = function() {
	this.initialize(img.yld_3_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,216);


(lib.yld_3_6 = function() {
	this.initialize(img.yld_3_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,224);


(lib.yld_3_7 = function() {
	this.initialize(img.yld_3_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,210);


(lib.yld_3_8 = function() {
	this.initialize(img.yld_3_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,196);


(lib.yld_3_9 = function() {
	this.initialize(img.yld_3_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,132);


(lib.yld_3_9PNG复制 = function() {
	this.initialize(img.yld_3_9PNG复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,132);


(lib.yld_4 = function() {
	this.initialize(img.yld_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,75);


(lib.yld_4_1 = function() {
	this.initialize(img.yld_4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,548);


(lib.yld_4_2 = function() {
	this.initialize(img.yld_4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,243);


(lib.yld_4_3 = function() {
	this.initialize(img.yld_4_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,436);


(lib.yld_4_4 = function() {
	this.initialize(img.yld_4_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,283);


(lib.yld_5 = function() {
	this.initialize(img.yld_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,159);


(lib.yld_5_1 = function() {
	this.initialize(img.yld_5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,345);


(lib.yld_5_2 = function() {
	this.initialize(img.yld_5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,187);


(lib.yld_5_3 = function() {
	this.initialize(img.yld_5_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,294);


(lib.yld_5_4 = function() {
	this.initialize(img.yld_5_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,250);


(lib.yld_5_5 = function() {
	this.initialize(img.yld_5_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,90);


(lib.yld_5_6 = function() {
	this.initialize(img.yld_5_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,232);


(lib.yld_6 = function() {
	this.initialize(img.yld_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,345);


(lib.yld_7 = function() {
	this.initialize(img.yld_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,362);


(lib.yld_8 = function() {
	this.initialize(img.yld_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,68);


(lib.yld_9 = function() {
	this.initialize(img.yld_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,47);


(lib.云 = function() {
	this.initialize(img.云);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,186);


(lib.云2 = function() {
	this.initialize(img.云2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,235);


(lib.云3 = function() {
	this.initialize(img.云3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,187);


(lib.云4 = function() {
	this.initialize(img.云4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,188);


(lib.泡1 = function() {
	this.initialize(img.泡1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,80);


(lib.补间155 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_1();
	this.instance.setTransform(-90,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-39,180,78);


(lib.补间154 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_1();
	this.instance.setTransform(-90,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-39,180,78);


(lib.补间151 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_4();
	this.instance.setTransform(-24,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-19,48,38);


(lib.补间148 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_3();
	this.instance.setTransform(-29,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.补间147 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_3();
	this.instance.setTransform(-113.5,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.5,-70,227,140);


(lib.补间146 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_3();
	this.instance.setTransform(-113.5,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.5,-70,227,140);


(lib.补间145 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间144 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间143 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao4_1();
	this.instance.setTransform(-48,-61);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48,-61,96,122);


(lib.补间140 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_2();
	this.instance.setTransform(-69,-114.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-114.5,138,229);


(lib.补间139 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_2();
	this.instance.setTransform(-69,-114.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-114.5,138,229);


(lib.补间138 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间137 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间136 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_2();
	this.instance.setTransform(-113,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,-72,226,144);


(lib.补间135 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_2();
	this.instance.setTransform(-113,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,-72,226,144);


(lib.补间134 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间133 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili4_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间132 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_1();
	this.instance.setTransform(-197.5,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-27.5,395,55);


(lib.补间131 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text4_1();
	this.instance.setTransform(-197.5,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-27.5,395,55);


(lib.补间130 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_1_1();
	this.instance.setTransform(86,-22);

	this.instance_1 = new lib._4_1_1();
	this.instance_1.setTransform(-93,-22);

	this.instance_2 = new lib._4_1_1();
	this.instance_2.setTransform(-276,-22);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-276,-22,552,44);


(lib.补间129 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4_1_1();
	this.instance.setTransform(86,-22);

	this.instance_1 = new lib._4_1_1();
	this.instance_1.setTransform(-93,-22);

	this.instance_2 = new lib._4_1_1();
	this.instance_2.setTransform(-276,-22);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-276,-22,552,44);


(lib.补间187 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.btn2();
	this.instance.setTransform(-114.5,-34.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.5,-34.5,229,69);


(lib.补间182 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.btn1();
	this.instance.setTransform(-95.5,-34.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-34.5,191,69);


(lib.补间181 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_3();
	this.instance.setTransform(-270,-14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-14,540,28);


(lib.补间180 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_3();
	this.instance.setTransform(-270,-14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-14,540,28);


(lib.补间179 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_3();
	this.instance.setTransform(-55.5,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-48,111,96);


(lib.补间178 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_3();
	this.instance.setTransform(-55.5,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-48,111,96);


(lib.补间177 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao5_2();
	this.instance.setTransform(-52,-43.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-43.5,104,87);


(lib.补间174 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_2();
	this.instance.setTransform(-79,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-95.5,158,191);


(lib.补间173 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_2();
	this.instance.setTransform(-79,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-95.5,158,191);


(lib.补间172 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_2();
	this.instance.setTransform(-124,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-69.5,248,139);


(lib.补间171 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_2();
	this.instance.setTransform(-124,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-69.5,248,139);


(lib.补间170 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili5_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间169 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili5_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间168 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_1();
	this.instance.setTransform(-78,-52.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-52.5,156,105);


(lib.补间167 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5_1();
	this.instance.setTransform(-78,-52.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-52.5,156,105);


(lib.补间166 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili5_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间165 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili5_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间164 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_1();
	this.instance.setTransform(-96.5,-88);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-88,193,176);


(lib.补间163 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text5_1();
	this.instance.setTransform(-96.5,-88);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-88,193,176);


(lib.补间160 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao5_1();
	this.instance.setTransform(-85,-78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85,-78,170,156);


(lib.补间156 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.yld_5_2();
	this.instance.setTransform(-88,-93.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88,-93.5,176,187);


(lib.text2_1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text2_1();
	this.instance.setTransform(-193,-260.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193,-260.4,280,83);


(lib.rili2_1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_1();
	this.instance.setTransform(-91.5,-255.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.5,-255.9,117,106);


(lib.补间93 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao21();
	this.instance.setTransform(-57,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-31,114,62);


(lib.补间92 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text2_4();
	this.instance.setTransform(-122,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122,-42,244,84);


(lib.补间90 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_4();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间89 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_4();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间88 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_5();
	this.instance.setTransform(-112,-54.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-54.5,224,109);


(lib.补间87 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_5();
	this.instance.setTransform(-112,-54.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-54.5,224,109);


(lib.补间85 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text2_3();
	this.instance.setTransform(-151.5,-42.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151.5,-42.5,303,85);


(lib.补间84 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_4();
	this.instance.setTransform(-58,-67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-67,116,134);


(lib.补间83 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_4();
	this.instance.setTransform(-58,-67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-67,116,134);


(lib.补间82 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间81 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间80 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_1();
	this.instance.setTransform(-30.5,-54);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-54,61,108);


(lib.补间79 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_1();
	this.instance.setTransform(-30.5,-54);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-54,61,108);


(lib.补间78 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_3();
	this.instance.setTransform(-92,-99);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-99,184,198);


(lib.补间77 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_3();
	this.instance.setTransform(-92,-99);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-99,184,198);


(lib.补间76 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间75 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili2_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间74 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text2_2();
	this.instance.setTransform(-126,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-72,252,144);


(lib.补间73 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text2_2();
	this.instance.setTransform(-126,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-72,252,144);


(lib.补间72 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_2();
	this.instance.setTransform(-16.5,-17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-17,33,34);


(lib.补间71 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2_2();
	this.instance.setTransform(-16.5,-17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-17,33,34);


(lib.补间70 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao22();
	this.instance.setTransform(-21.5,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-20,43,40);


(lib.stop_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.stop();
	this.instance.setTransform(-30.2,-30.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgEgBACgEQADgGAFAAQARANgMAAIgLgCg");
	this.shape.setTransform(50.2,12.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-30.2,81.5,60);


(lib.play_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.play();
	this.instance.setTransform(-30,-30.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAFQgEgBACgEQADgGAFAAQARANgMAAIgLgCg");
	this.shape.setTransform(57.6,12.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30.2,88.7,60);


(lib.补间128 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_5();
	this.instance.setTransform(-84,-40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-40.5,168,81);


(lib.补间127 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_5();
	this.instance.setTransform(-84,-40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-40.5,168,81);


(lib.补间126 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_4();
	this.instance.setTransform(-88.5,-117);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-117,177,234);


(lib.补间125 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_4();
	this.instance.setTransform(-88.5,-117);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-117,177,234);


(lib.补间124 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_4();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间123 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_4();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间122 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_4();
	this.instance.setTransform(-87.5,-83);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-83,175,166);


(lib.补间121 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_4();
	this.instance.setTransform(-87.5,-83);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-83,175,166);


(lib.补间120 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间119 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_3();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间118 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_3();
	this.instance.setTransform(-86.5,-87.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.5,-87.5,173,175);


(lib.补间117 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_3();
	this.instance.setTransform(-86.5,-87.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.5,-87.5,173,175);


(lib.补间116 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao33();
	this.instance.setTransform(-26,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-64,52,128);


(lib.补间115 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao33();
	this.instance.setTransform(-26,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-64,52,128);


(lib.补间113 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao32();
	this.instance.setTransform(-52,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-50,104,100);


(lib.补间110 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_2();
	this.instance.setTransform(-100.5,-54.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-54.5,201,109);


(lib.补间109 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_2();
	this.instance.setTransform(-100.5,-54.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-54.5,201,109);


(lib.补间108 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间107 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_2();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间106 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_3();
	this.instance.setTransform(-38.5,-90.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-90.5,77,181);


(lib.补间105 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_3();
	this.instance.setTransform(-38.5,-90.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-90.5,77,181);


(lib.补间104 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_2();
	this.instance.setTransform(-32,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-42,64,84);


(lib.补间103 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_2();
	this.instance.setTransform(-32,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-42,64,84);


(lib.补间102 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_1();
	this.instance.setTransform(-69,-68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-68,138,136);


(lib.补间101 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3_1();
	this.instance.setTransform(-69,-68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-68,138,136);


(lib.补间100 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间99 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili3_1();
	this.instance.setTransform(-58.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-53,117,106);


(lib.补间98 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_1();
	this.instance.setTransform(-91,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-70,182,140);


(lib.补间97 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text3_1();
	this.instance.setTransform(-91,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-70,182,140);


(lib.补间95 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.pao31();
	this.instance.setTransform(-25.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-26,51,52);


(lib.text1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text1();
	this.instance.setTransform(-74,-1073.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74,-1073.9,260,174);


(lib.rili1_2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.rili1_1();
	this.instance.setTransform(-96.5,-991.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-991.9,117,106);


(lib.ico1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._1_2();
	this.instance.setTransform(-60,-113);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-113,106,156);


(lib.补间10 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云();
	this.instance.setTransform(-143,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-93,286,186);


(lib.补间9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云();
	this.instance.setTransform(-143,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143,-93,286,186);


(lib.补间8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云2();
	this.instance.setTransform(-153,-117.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153,-117.5,306,235);


(lib.补间7 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云2();
	this.instance.setTransform(-153,-117.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153,-117.5,306,235);


(lib.补间6 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云3();
	this.instance.setTransform(-145,-93.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145,-93.5,290,187);


(lib.补间5 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云3();
	this.instance.setTransform(-145,-93.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145,-93.5,290,187);


(lib.补间4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云4();
	this.instance.setTransform(-140,-94);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-94,280,188);


(lib.补间3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.云4();
	this.instance.setTransform(-140,-94);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-94,280,188);


(lib.元件6 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._1_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,97);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.泡1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,80);


(lib.飞船 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.补间148("synched",0);
	this.instance.setTransform(97.5,-343.4,1,1,21.2,0,0,-20.5,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.5,rotation:-30,x:96,y:-345.9},7).to({regY:23.6,rotation:21.2,x:97.5,y:-343.4},10).wait(8));

	// 图层 2
	this.instance_1 = new lib.补间151("synched",0);
	this.instance_1.setTransform(48,-335.9,1,1,-21.5,0,0,22,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.9,rotation:15,x:47.9},7).to({regX:22,rotation:-21.5,x:48},10).wait(8));

	// 图层 1
	this.instance_2 = new lib._4_5();
	this.instance_2.setTransform(-49.5,-407.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-407.4,212.2,143);


(lib.波浪 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuSJiIAAzDIclAAIAATDg");
	var mask_graphics_24 = new cjs.Graphics().p("AuSJiIAAzDIclAAIAATDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-148.5,y:-788.9}).wait(24).to({graphics:mask_graphics_24,x:-148.5,y:-788.9}).wait(1));

	// 图层 1
	this.instance = new lib.补间129("synched",0);
	this.instance.setTransform(34,-772.9);

	this.instance_1 = new lib.补间130("synched",0);
	this.instance_1.setTransform(-41,-772.9);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-41},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-794.9,183,44);


(lib.pao4_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间143("synched",0);
	this.instance.setTransform(25,-558.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9},12).to({startPosition:0},9).to({x:25},14).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-619.9,96,122);


(lib.pao5_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间177("synched",0);
	this.instance.setTransform(-3,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-17},12).to({startPosition:0},10).to({x:-3},15).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,39.5,104,87);


(lib.pao5_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间160("synched",0);
	this.instance.setTransform(-119,-262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-134},14).to({startPosition:0},8).to({x:-119},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-340.9,170,156);


(lib.btn2_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.补间187("synched",0);
	this.instance.setTransform(-75,1018);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.5,983.5,229,69);


(lib.btn1_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.补间182("synched",0);
	this.instance.setTransform(-222,1040);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-317.5,1005.5,191,69);


(lib._5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// 图层 26
	this.mc2 = new lib.btn2_1();
	this.mc2.setTransform(163,440.1,1,1,0,0,0,-75,1018);
	this.mc2._off = true;
	new cjs.ButtonHelper(this.mc2, 0, 1, 1);
	this.mc2.addEventListener("click", handleClick);
 	function handleClick(){
		 $('.canvas').fadeOut(200,function(){
        	$('.canvasbox').remove()
        })
		$('.page-6').fadeIn(500)
	}
	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(234).to({_off:false},0).wait(140).to({y:447.1},0).wait(1));

	// 图层 25
	this.mc1 = new lib.btn1_1();
	this.mc1.setTransform(-176,442.1,1,1,0,0,0,-222,1040);
	this.mc1._off = true;
	new cjs.ButtonHelper(this.mc1, 0, 1, 1);
	this.mc1.addEventListener("click", handleClick1);
 	function handleClick1(){
        $('.canvas').fadeOut(200,function(){
        	$('.canvasbox').remove()
        })
		$('.page-4').fadeIn(500)
	}
	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(234).to({_off:false},0).wait(141));

	// 图层 24
	this.instance = new lib.补间180("synched",0);
	this.instance.setTransform(3,371);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.补间181("synched",0);
	this.instance_1.setTransform(3,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},210).to({state:[{t:this.instance_1}]},20).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({_off:false},0).to({_off:true,y:353,alpha:1},20).wait(145));

	// 图层 23
	this.instance_2 = new lib.补间178("synched",0);
	this.instance_2.setTransform(-251.5,270);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.补间179("synched",0);
	this.instance_3.setTransform(-235.5,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},189).to({state:[{t:this.instance_3}]},7).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({_off:true,x:-235.5,alpha:1},7).wait(179));

	// 图层 22
	this.instance_4 = new lib.pao5_2_1();
	this.instance_4.setTransform(-53.7,217,1,1,0,0,0,-23,83);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({alpha:1},6).wait(189));

	// 图层 21
	this.instance_5 = new lib.补间173("synched",0);
	this.instance_5.setTransform(-8,35,0.696,0.696);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.补间174("synched",0);
	this.instance_6.setTransform(-8,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},156).to({state:[{t:this.instance_6}]},7).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,alpha:1},7).wait(212));

	// 图层 20
	this.instance_7 = new lib.补间171("synched",0);
	this.instance_7.setTransform(149,236.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.补间172("synched",0);
	this.instance_8.setTransform(149,227.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},146).to({state:[{t:this.instance_8}]},6).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).to({_off:true,y:227.1,alpha:1},6).wait(223));

	// 图层 19
	this.instance_9 = new lib.补间169("synched",0);
	this.instance_9.setTransform(226,87.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.补间170("synched",0);
	this.instance_10.setTransform(214,87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},137).to({state:[{t:this.instance_10}]},7).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({_off:true,x:214,alpha:1},7).wait(231));

	// 图层 18
	this.instance_11 = new lib.补间167("synched",0);
	this.instance_11.setTransform(16,-258,0.782,0.782);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.补间168("synched",0);
	this.instance_12.setTransform(16,-258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},109).to({state:[{t:this.instance_12}]},10).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,alpha:1},10).wait(256));

	// 图层 16
	this.instance_13 = new lib.补间165("synched",0);
	this.instance_13.setTransform(223,-292.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.补间166("synched",0);
	this.instance_14.setTransform(223,-299.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},80).to({state:[{t:this.instance_14}]},6).wait(289));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80).to({_off:false},0).to({_off:true,y:-299.9,alpha:1},6).wait(289));

	// 图层 15
	this.instance_15 = new lib.补间163("synched",0);
	this.instance_15.setTransform(203,-126);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.补间164("synched",0);
	this.instance_16.setTransform(203,-142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},76).to({state:[{t:this.instance_16}]},6).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(76).to({_off:false},0).to({_off:true,y:-142,alpha:1},6).wait(293));

	// 图层 14
	this.instance_17 = new lib.pao5_1_1();
	this.instance_17.setTransform(-227,-225.9,1,1,0,0,0,-134,-262.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(53).to({_off:false},0).wait(322));

	// 图层 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_164 = new cjs.Graphics().p("AiiADQAYh6CCgMQFeCMlXBrQgyAQgkAAQhkAAAZiBg");
	var mask_graphics_165 = new cjs.Graphics().p("AieB/QgMgagFg/QgOiCB9g5IASgIQApgCAlAAQApABAcAJQBCAlAJAxQAJAyg0AzQgjAqg+AkIgGADQhBAmg2ADIgIAAQgvAAgOghg");
	var mask_graphics_166 = new cjs.Graphics().p("AiTC+QgOgXgVhNQgziTCJhgIATgMQArgVAvgNQA0gOAhADQBLAjASBAQASA8gnBGQgdA+g8A0IgGAFQhCA3hDAPQgVAEgRAAQgmAAgNgWg");
	var mask_graphics_167 = new cjs.Graphics().p("AiGD/QgRgUgkhaQhYikCTiHQA1gxBJgiQA7gdAngDQBUAiAcBOQAaBIgaBXQgYBXg+BFQhCBKhSAaQgoAMgbAAQgdAAgMgPg");
	var mask_graphics_168 = new cjs.Graphics().p("AhQDvQggAAgWgKQgdgHgLgVQgQgkgYhZQgZhTAag9QAdhMBkgvQAQgIARgHQAzgTA2gKQAkgFAaACQATAAAPAFQAoAdASApQAPAeADAmQAEAigHAlQgKArgXAsQgLAVgMARQgsA1gqAnIgMAIQgkAYgfAHQgdAIggAAIgVgBg");
	var mask_graphics_169 = new cjs.Graphics().p("Ag6DyQgngJgngWQgbgMgTgUQgXgPgKgaQgOg1gOhVQgLhgAug3QAwhCB3gUIAmgGQA9gEA2AGQAkAFAZAMQASAIAMALQAhAmAHAxQAGAkgFAnQgFAkgQAkQgVAugfApQgPATgSAQQhAAxgsAdIgOAHQgZAKgXAAQgOAAgMgEg");
	var mask_graphics_170 = new cjs.Graphics().p("Ah7ECQgmgcghgpQgXgXgQgfQgSgYgIgdQgNhGgDhTQADhsBCgxQBDg5CLAJQASABAWACQBIAKA2AVQAlAQAYAXQAQAOAKARQAaAwgEA6QgCAogPAoQgNAmgYAmQggAwgoAlQgUASgWANQhVAugtAUIgQAEQgNACgLAAQgjAAgZgUg");
	var mask_graphics_171 = new cjs.Graphics().p("Ai9EaQgkgvgdg8QgSgjgNgpQgNgggGgiQgMhVAIhTQARh3BVgrQBXgvCbAkIAwAMQBRAZA2AlQAmAaAWAhQAPAWAIAXQATA5gQBCQgKAsgYAsQgVAnghAnQgrAxgwAhQgZARgbAMQhoAqgwALIgTACIgDAAQg6AAgfgrg");
	var mask_graphics_172 = new cjs.Graphics().p("Aj/E2Qg4hqgbiJQgdiXAahvQAfiDBoglQB7grDSBcQCbBDAyBpQArBbgnBqQgjBfhXBRQhTBOhaAcQh9AngyABIgFAAQhQAAgkhDg");
	var mask_graphics_173 = new cjs.Graphics().p("AjmFiQgcglgagrQgshDgXhZQgoicAjiLIAAgBQAhiKBtg7IAOgGQAsgYAwAAQAWgFAUACQAhgBAkAEQAiACAqAJIAaAGQAXAFAXAJQA5AXAwAkQAkAdAbAmQAMARAJASQAXAtAHAxQAJA8gRBAQgXBlhGBaIgKAMQhKBfhaAqQgnASgiAOQhHAagpAGIgVABQhKAAgtg4g");
	var mask_graphics_174 = new cjs.Graphics().p("AjNGYQgjghgigoQg9g/gehdQgxijAqilIAAgCQAkiSBxhQIAOgJQAvgjAvgDQAXgLASABQAbgHAigFQAcgIApACQANgBAOABQAXABAaAGQA9ATA7AoQAnAdAgAtQANASAMAUQAaAxALA1QAOBDgLBHQgNBwg/BnIgIAOQhCBwhZA3QgnAYgkATQhKAigvALQgUADgSAAQhGAAgygtg");
	var mask_graphics_175 = new cjs.Graphics().p("Ai2HZQgqgegqglQhNg6gmhiQg7ioAzjBIAAgCQAniaB1hnIAOgKQAygvAtgFQAYgSAQAAQAWgOAegOQAagRAmgGQAMgDAPgBQAYgEAdAEQBBAPBFArQAqAeAmAyQAPAVANAWQAdA0AQA7QATBIgFBNQgEB8g2B0IgIAQQg5CAhZBGQgnAegmAYQhMApg1ARQgeAGgbAAQhCAAg2gjg");
	var mask_graphics_176 = new cjs.Graphics().p("AigIbQgxgagzgjQhdg1gthnQhFitA7jcIABgDQApiiB5h8IAPgNQA1g7AqgHQAagYAOgBQAQgVAbgWQAWgcAkgNQANgGAOgDQAagJAgADQBFALBPAuQAsAeAsA4QARAXAPAYQAgA3AUBAQAZBPAABTQAGCIgvCBIgGASQgxCRhYBTQgnAkgoAdQhNAxg/AWQgnAKgmAAQg+AAg2gag");
	var mask_graphics_177 = new cjs.Graphics().p("AiMJcQg4gWg7gfQhvgygzhrQhPixBDj5IABgDQAsiqB9iSIAPgPQA4hGAogLQAbgdANgDQAKgbAWgfQATglAlgVQAMgJANgFQAbgNAiAAQBJAGBaAyQAvAfAxA+QATAYARAbQAkA7AYBEQAeBVAFBZQAQCUgmCOIgFAUQgpCihYBhQgnAqgqAiQhOA4hGAcQg1APgxAAQg4AAg1gTg");
	var mask_graphics_178 = new cjs.Graphics().p("Ah6KeQg/gThEgcQh/gtg6hwQhZi2BLkXIABgEQAvivCCioIAPgSQA6hRAngNQAcgkALgEQAFghASgoQAOgvAlgcQALgMAQgIQAZgRAmgCQBNACBjA2QAzAfA2BEQAVAZASAdQAoA/AcBJQAjBbALBfQAaCggfCbIgEAWQggCzhXBuQgnAxgsAnQhQA/hNAhQhCAWhAAAQgyAAgxgMg");
	var mask_graphics_179 = new cjs.Graphics().p("AhqLeQhFgPhMgZQiQgohBh1Qhji7BTkzIACgEQAxi3CGi+IAPgUQA+hdAkgQQAdgpAKgFQgBgpAOgxQAKg4AkgkQAMgOAPgKQAcgWAngEQBRgCBuA5QA2AfA8BKQAWAcAUAfQArBCAgBOQApBhAQBlQAkCugXCmIgDAYQgXDDhYB9QgmA3guAsQhRBGhUAnQhSAehRAAQgrAAgrgIg");
	var mask_graphics_180 = new cjs.Graphics().p("AhaMfQhNgMhUgWQiggkhJh5QhsjABblOIACgGQAzi+CLjUIAPgWQBBhpAigSQAfgwAHgGQgGgvAKg6QAGhCAjgrQALgSAQgMQAdgaAsgGQBTgGB4A8QA5AgBBBQQAYAdAWAhQAuBGAlBTQAuBoAWBqQAtC6gPCzIgBAaQgPDUhYCLQgmA8gvAyQhTBNhbAtQhhAnhmAAQgiAAgigEg");
	var mask_graphics_181 = new cjs.Graphics().p("AhMNfQhTgIhegUQiwgfhQh9Qh2jFBjlrIACgFQA2jHCPjqIAQgYQBEh1AggUQAfg2AGgHQgMg2AGhCQAChMAigzQAMgUAPgPQAegfAvgIQBYgKCCBAQA8AgBGBWQAaAfAYAkQAxBJApBYQAzBtAcBwQA3DHgHDAIgBAcQgGDlhXCYQgmBDgyA2QhUBVhiAyQhyAxh/AAIgsgBg");
	var mask_graphics_182 = new cjs.Graphics().p("Ag/OeQhagDhmgRQjBgbhXiCQiAjJBsmHIABgGQA5jPCTkAIAQgaQBHiAAfgXQAgg8AEgJQgRg7ABhMQgBhVAhg7QALgXAQgRQAfgjAxgLQBcgOCNBEQA+AhBMBbQAcAhAaAmQA0BNAuBdQA4BzAhB1QBBDUABDMIAAAeQACD2hWCmQgmBJg0A8QhWBchpA3QiDA8iZAAIgTAAg");
	var mask_graphics_183 = new cjs.Graphics().p("AkDPPQjRgVheiHQiKjPB0miIACgHQA7jXCXkVIARgcQBKiNAcgZQAihCACgKQgXhCgChVQgGhfAghCQALgaAQgTQAggoA1gMQBigSCVBGQBBAiBSBhQAdAjAcAoQA3BQAyBiQA9B6AnB7QBKDfAKDaIABAgQALEGhXC1QgmBOg1BBQhXBkhwA8QiSBHixACIgGAAQheAAhrgOg");
	var mask_graphics_184 = new cjs.Graphics().p("AkHQUQjigRhliLQiTjUB7m+IACgIQA+jeCckrIAQgfQBNiYAbgbQAjhJAAgLQgchJgHhdQgKhpAfhJQALgdARgVQAggtA4gOQBmgWCfBKQBFAiBXBnQAeAlAeApQA7BUA2BnQBDB/AsCCQBUDsARDmIADAiQATEXhWDCQgmBVg3BGQhZBrh3BCQiXBNi+AJIg2ABQhQAAhYgJg");
	var mask_graphics_185 = new cjs.Graphics().p("AkMRZQjzgNhsiQQidjYCEnbIACgIQBBjoCgk/IARghQBPijAZgfQAkhOgCgNQghhPgLhmQgOhyAehRQALggARgXQAhgxA7gRQBqgbCpBOQBIAiBcBuQAhAmAfAsQA/BYA6BrQBICGAxCHQBfD4AZDzIADAkQAcEohWDQQglBbg5BLQhbByh+BIQicBTjLAPQg2AEg5AAQg9AAhCgEg");
	var mask_graphics_186 = new cjs.Graphics().p("AkRScQkDgIhziVQinjdCMn2IACgJQBEjwCjlVIASgjQBSivAXghQAlhUgDgOQgnhWgPhuQgSh9AdhYQALgjARgZQAig2A+gTQBugeC0BRQBKAjBiBzQAiAoAiAuQBBBbA/BxQBNCMA3CMQBoEEAhEAIAFAnQAkE5hWDdQglBhg7BRQhcB5iFBNQiiBZjYAWQhPAIhYAAQgqAAgsgCg");
	var mask_graphics_187 = new cjs.Graphics().p("AkWTfQkUgDh6iaQixjiCUoSIADgJQBGj4ColrIARglQBWi7AUgjQAnhbgGgPQgshcgTh4QgViGAbhgQALglARgcQAkg6BAgVQBygiC+BUQBNAjBoB5QAkAqAjAxQBFBeBDB2QBSCSA9CSQByEQApEOIAGAoQAsFJhVDsQglBng9BVQheCBiMBSQinBgjlAdQhrANh5AAIgogBg");
	var mask_graphics_188 = new cjs.Graphics().p("ArCSFQi6jnCcouIADgKQBIkACsmBIASgnQBZjGASgmQAohhgHgQQgyhjgXiAQgaiQAbhnQALgpARgeQAkg+BEgXQB2gnDJBYQBQAkBtB/QAlArAmAzQBIBiBHB7QBXCYBCCYQB8EcAxEaIAHArQA1FahVD5QglBtg/BbQhfCIiTBYQitBljyAkQiDATiYAAIgEAAQkiAAiAidg");
	var mask_graphics_189 = new cjs.Graphics().p("Ar8GHQBOkUC/mzQBcjTAQgoQAphngJgRQg3hqgbiJQgeiZAahvQAfiDBpglQB6grDTBcQBTAkByCFQB0CGBxDBQEMHGBXHGQBqInjeFKQkMGOrLAOIgUAAQrgAAEavdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_graphics_164,x:-155.1,y:85.2}).wait(1).to({graphics:mask_graphics_165,x:-153.8,y:81.7}).wait(1).to({graphics:mask_graphics_166,x:-153.1,y:76.5}).wait(1).to({graphics:mask_graphics_167,x:-152.6,y:71.1}).wait(1).to({graphics:mask_graphics_168,x:-151.6,y:67.8}).wait(1).to({graphics:mask_graphics_169,x:-150.4,y:65.5}).wait(1).to({graphics:mask_graphics_170,x:-149,y:62.5}).wait(1).to({graphics:mask_graphics_171,x:-147.4,y:58.7}).wait(1).to({graphics:mask_graphics_172,x:-145.8,y:54.6}).wait(1).to({graphics:mask_graphics_173,x:-146.2,y:62.2}).wait(1).to({graphics:mask_graphics_174,x:-146.5,y:68.8}).wait(1).to({graphics:mask_graphics_175,x:-146.7,y:74.4}).wait(1).to({graphics:mask_graphics_176,x:-146.8,y:79.9}).wait(1).to({graphics:mask_graphics_177,x:-146.6,y:85.4}).wait(1).to({graphics:mask_graphics_178,x:-146.2,y:90.9}).wait(1).to({graphics:mask_graphics_179,x:-145.8,y:96.5}).wait(1).to({graphics:mask_graphics_180,x:-145.2,y:102.1}).wait(1).to({graphics:mask_graphics_181,x:-144.4,y:107.7}).wait(1).to({graphics:mask_graphics_182,x:-143.6,y:113.4}).wait(1).to({graphics:mask_graphics_183,x:-142.6,y:119.1}).wait(1).to({graphics:mask_graphics_184,x:-141.6,y:124.9}).wait(1).to({graphics:mask_graphics_185,x:-140.5,y:130.8}).wait(1).to({graphics:mask_graphics_186,x:-139.4,y:136.8}).wait(1).to({graphics:mask_graphics_187,x:-138.2,y:142.8}).wait(1).to({graphics:mask_graphics_188,x:-137,y:148.8}).wait(1).to({graphics:mask_graphics_189,x:-135.8,y:154.9}).wait(186));

	// 图层 12
	this.instance_18 = new lib.yld_5_6();
	this.instance_18.setTransform(-198.7,51.3);
	this.instance_18._off = true;

	this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(164).to({_off:false},0).wait(211));

	// 图层 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_146 = new cjs.Graphics().p("AgrEhQhHhZgchsQgZhegchkQhAjhDZgcQF/DmjEGPQgoBSgyAAQguAAg0hDg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AggEvIgVgUQhNhNgqhbIgRgkQglg4gRg3QgGgWgGgdQgNg0gBgtQgBhuBAgsQApgcBYgEQBaAxBMA8QBWBMA0BdQAiA3ADA1QAUBigyB3QgKAagZAbQgPAXgTAQQgkAmgrAAQg3AAg/hAg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AgYE9IgZgTQhhhJg6hYIgZgiQg6g3gSg2QgHgWgGgkIAAAAQgMg6AAg1QABiDBDgtQApgcBqACQBnAyBdA+QBhBMBNBeQA2A6AEAxQAqBqg6CHQgLAagjAaQgUAWgXAPQgrAkgxAAQhBAAhLg9g");
	var mask_1_graphics_149 = new cjs.Graphics().p("AgRFMIgdgSQh1hGhKhUIghghQhQg1gSg3QgIgUgGgrQgLhAABg9QADiYBFguQApgcB+AHQBxAzBxBBQBsBLBmBhQBIA7AHAtQBAByhDCYQgLAaguAZQgYAUgdAPQgxAig4AAQhKAAhXg6g");
	var mask_1_graphics_150 = new cjs.Graphics().p("AgJFbIgigRQiJhChbhQIgoggQhlg0gTg1QgJgXgFgwIAAAAQgLhGAChFQAFisBHgvQAqgcCRANQB6AzCGBEQB2BKB/BiQBbA9AKAtQBVB3hMCoQgLAbg4AXQgcAUgjANQg2AghAAAQhTAAhig3g");
	var mask_1_graphics_151 = new cjs.Graphics().p("AgCFqIgngPQicg/hshMIgvgfQh7gzgUg0QgJgWgFg3IAAAAQgLhMADhMQAHjCBKgwQArgcCjATQCFAzCaBHQCABKCZBkQBtA/AMAoQBqB/hTC5QgMAbhDAWQggATgoAMQg8AehGAAQhdAAhug1g");
	var mask_1_graphics_152 = new cjs.Graphics().p("AADF6IgqgPQiwg7h8hIIg2gdQiRgygUgzQgKgWgFhAIAAgBQgKhQADhTQAKjXBMgxQArgcC2AYQCPA0CuBKQCLBKCyBlQB/BBAQAlQB/CHhcDJQgMAbhOAVQgjASgvALQhBAchNAAQhnAAh7gyg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AAKGKIgugOQjEg3iMhFIg+gbQingxgUgxQgLgWgFhIIAAAAQgKhWAFhcQAMjrBPgyQArgcDJAeQCZA0DCBMQCWBKDKBnQCTBCARAiQCVCOhlDbQgLAahZAVQgnAQg0ALQhHAZhTAAQhxAAiIgvg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AARGbIgzgNQjYg1ichAIhGgaQi8gwgVgwQgMgWgFhOIAAgBQgJhcAGhjQAOkBBRgzQArgbDcAjQCjA1DXBPIGECyQClBEAUAeQCrCWhuDrQgMAbhjATQgsAPg5AKQhMAXhZAAQh7AAiUgrg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AAYGrIg4gMQjrgxitg8IhNgZQjSgvgWguQgMgWgFhWIAAgBQgIhiAGhrQAQkVBUg0QAsgbDuAoQCuA2DqBSIGoCzQC4BGAXAaQDACeh3D8QgLAahvATQgvAOg/AJQhRAUhfAAQiFAAihgog");
	var mask_1_graphics_156 = new cjs.Graphics().p("AAfG7Ig8gLQj/gti+g5IhUgXQjngugXgtQgMgWgFhcIAAgBQgIhoAGhzQATkrBWg0QAsgbECAtQC4A2D+BVIHLC0QDLBIAZAXQDWCmh/EMQgMAbh5ARQgzANhFAJQhWARhkAAQiQAAiuglg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AAlHMIhBgLQkSgqjOg0IhcgWQj9gtgXgrQgNgXgFhjIAAgBQgHhwAHh5QAVk/BZg2QAsgbEUAzQDCA3ETBYIHvC1QDdBKAcATQDrCuiHEdQgMAaiFARQg3AMhKAHQhaAQhpAAQibAAi8gig");
	var mask_1_graphics_158 = new cjs.Graphics().p("AAtHcIhGgJQkmgmjegxIhkgVQkSgrgYgqQgOgXgFhqIAAgBQgHh2AJiBQAXlUBbg3QAtgaEnA4QDMA3EpBbIIQC2QDwBMAfAQQEAC1iQEuQgMAaiPAQQg7AKhQAHQhdANhtAAQinAAjKgfg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AA0HtIhLgJQk5gjjvgtIhrgTQkogqgYgpQgPgWgFhyIAAgBQgGh8AJiIQAZlqBeg3QAtgbE6A+QDWA4E9BdII0C4QEDBOAhAMQEWC9iZE+QgMAbiaAOQg+AKhWAGQhhALhwAAQizAAjZgcg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AA7H9IhPgHQlOggj/gpQg7gIg4gKQk9gpgZgnQgPgWgFh5IAAgBQgGiCAKiQQAcl+Bgg5QAtgaFNBDQDhA4FQBgIJZC6QEUBPAlAIQErDGihFOQgNAbikANQhDAJhcAFQhiAIhxAAQjAAAjrgZg");
	var mask_1_graphics_161 = new cjs.Graphics().p("ABCIOIhUgHQlhgbkQgmIh6gQQlTgogagmQgQgXgEh/IAAgCQgFiIALiXQAdmTBjg6QAugaFfBJQDrA5FlBiIJ8C7QEnBRAnAFQFADNipFfQgNAbivAMQhHAIhhAEQhhAGhvAAQjQAAkAgWg");
	var mask_1_graphics_162 = new cjs.Graphics().p("ABJIeIhYgGQl1gYkgghIiCgPQlpgngaglQgQgWgFiHIAAgBQgFiOAMifQAgmpBlg6QAugaFzBOQD1A5F5BmIKfC8QE6BTAqABQFWDVizFwQgMAai6AMQhLAGhnADQheAFhrAAQjhAAkYgUg");
	var mask_1_graphics_163 = new cjs.Graphics().p("ABQIvIhdgFQmIgUkxgeIiJgOQl/glgagkQgSgWgEiOIAAgCQgEiUANimQAhm+Bog7QAvgaGFBUQD/A6GNBoILDC9QFNBVAsgCQFrDci6GBQgNAajFALQhPAFhsACQhTAChcAAQj5AAk8gQg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AgLI7Qn8gVlygiQmUgkgbgiQgSgXgEiWQgEiaAOivQAknSBqg8QBNgrQkEPILnC/QFgBXAugGQGBDkjDGRQgSAlmPAFIh0AAQlCAAmygSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_1_graphics_146,x:74.4,y:131.7}).wait(1).to({graphics:mask_1_graphics_147,x:67.7,y:130.3}).wait(1).to({graphics:mask_1_graphics_148,x:61.3,y:129}).wait(1).to({graphics:mask_1_graphics_149,x:55,y:127.6}).wait(1).to({graphics:mask_1_graphics_150,x:48.7,y:126.2}).wait(1).to({graphics:mask_1_graphics_151,x:42.5,y:124.7}).wait(1).to({graphics:mask_1_graphics_152,x:36.2,y:123.2}).wait(1).to({graphics:mask_1_graphics_153,x:29.9,y:121.6}).wait(1).to({graphics:mask_1_graphics_154,x:23.7,y:120.1}).wait(1).to({graphics:mask_1_graphics_155,x:17.5,y:118.5}).wait(1).to({graphics:mask_1_graphics_156,x:11.2,y:117}).wait(1).to({graphics:mask_1_graphics_157,x:5,y:115.4}).wait(1).to({graphics:mask_1_graphics_158,x:-1.3,y:113.8}).wait(1).to({graphics:mask_1_graphics_159,x:-7.6,y:112.3}).wait(1).to({graphics:mask_1_graphics_160,x:-13.8,y:110.7}).wait(1).to({graphics:mask_1_graphics_161,x:-20.1,y:109.1}).wait(1).to({graphics:mask_1_graphics_162,x:-26.4,y:107.5}).wait(1).to({graphics:mask_1_graphics_163,x:-32.6,y:105.9}).wait(1).to({graphics:mask_1_graphics_164,x:-38.9,y:104.4}).wait(211));

	// 图层 10
	this.instance_19 = new lib.yld_5_5();
	this.instance_19.setTransform(-159.4,61.9);
	this.instance_19._off = true;

	this.instance_19.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(146).to({_off:false},0).wait(229));

	// 图层 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_126 = new cjs.Graphics().p("Ak/CaQgXhpBDhXQCmjhEOgoQEqBFjxETQhPBchnBKQiDBhhVAAQhqAAghiWg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AlBDSQgpg3gPhFIAAgBQgIgjAGghQANhQBAg/IAHgHQArgxBCgTQBug5CBgPQBJgHBNACQBDAZAqAgQBSA/gMBLQgSBKhOBVQgYAZgaAYIgCABIgdAWQg7AuhMAYIgzAUQhLAhhDADQgcAGgYAAQhcAAg2hGg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AibEOQiJgEhNhnQg0hJgPhEIAAgBQgJgoALgmQAahdBOg9IAJgHQAugqBWADQB/geCQAOQBRAJBSAPQBIAlAvAoQBcBVgSBNQgeBVheBYQgeAagfAXIgCABIgjAUQhDAjhagBQgcADgeACQglAGglAAQgqAAgogIg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AAwE5QgfgEgfgGQhagEhUglQiQgehWh4Qg9hZgPhDIAAgBQgLgvAQgrQAmhnBeg9IALgGQAxglBpAbQCQgDCeAqQBaAZBWAcQBPAwAyAxQBoBqgYBOQgsBjhtBaQgkAcgkAWIgCABQgaAMgQAGQgjALgpAAQgvAAg3gOg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AAlFpQgjgKgigOQhggXhdg5QiXg6heiGQhIhpgPhFIAAgBQgLg1AUgvQAyhzBug7IANgGQA0ggB9AzQCfAZCtBGQBjAoBbAqQBUA8A3A5QByB9gdBTQg5Bvh8BcQgrAdgpAVIgBABQggAMgRAEQgQACgSAAQhHAAhfgqg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AAbGYQgkgRgogWQhngphlhOQighVhliVQhSh7gPhFIAAAAQgNg7Aag0QA+h9B9g6IAPgGQA3gaCQBKQCxA0C7BiQBsA5BfA2QBaBHA7BCQB9CTgjBVQhGB7iMBeQgwAeguAVIgCABQgmAMgRABIgGAAQhXAAiAhMg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AECI3QhggIiShoQgngYgsgdQhtg8huhiQimhxhuiiQhciOgPhFIAAgBQgOhAAfg5QBJiICNg5IARgGQA5gUCkBhQDBBQDLB+QB0BJBkBDQBgBTA+BJQCJCpgqBYQhSCHibBgQg3AggyATIgDABQgnALgUAAIgDAAg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AEMKLQhngTigiCQgrgfguglQh0hPh3h2QitiLh3izQhmifgPhFIAAAAQgPhGAkg+QBViTCdg3IATgGQA8gPC3B5QDQBrDbCaQB9BZBpBRQBlBdBCBSQCUC/gvBaQhgCTiqBiQg9Ahg3ATIgDABQglAKgVAAIgLgBg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AEXLfQhvgeisibQgwgngygsQh6hhiAiLQi0inh/jBQhwixgPhFIAAAAQgRhMAphCQBhieCtg2IAVgGQA/gKDKCRQDhCGDqC3QCFBoBtBeQBrBnBHBdQCeDUg1BdQhsCfi5BkQhEAig8ASIgDABQgkAJgWAAQgKAAgHgCg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AEiMyQh2goi7i1Qgygtg2g0QiAh0iJifQi8jCiHjRQh6jCgPhFIAAAAQgShSAuhHQBtioC8g1IAXgGQBCgEDeCoQDxCiD5DSQCNB5ByBrQBxByBLBlQCpDqg7BfQh5CrjJBnQhJAjhBARIgDABQgkAIgWAAQgPAAgJgEg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AEsOHQh9g0jJjOQg2g0g5g8QiGiGiSi0QjDjbiPjiQiFjUgPhFQgThXAzhLQB5i0DMgzIAZgGQBEABDyDAQECC9EHDuQCWCJB3B4QB3B+BOBuQC1D/hBBhQiGC4jYBoQhQAlhGAQIgDABQgjAGgXAAQgTAAgMgEg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AE3PbQiFg+jXjoQg5g8g8hDQiNiZibjHQjKj3iYjyQiOjlgPhFQgVhdA5hQQCEi9DcgzIAbgGQBHAHEFDXQETDYEVELQCfCZB8CFQB8CKBTB1QC/EVhGBkQiUDEjnBqQhWAmhKAPIgEABQgiAGgYAAQgYAAgNgGg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AFBQvQiLhJjmkBQg8hDhAhLQiTirijjcQjTkSifkBQiZj2gPhFQgVhjA9hVQCRjJDqgxIAegFQBKAMEYDvQEjDzElEnQCnCpCBCQQCCCXBWB/QDLEphNBnQigDQj3BsQhcAnhPAOIgEABQghAFgYAAQgdAAgQgHg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AFMSDQiThUj0kbQjRjxj3lZQjakuinkPQijkIgPhFQgXhpBChZQCnjhEQgoQBMASEsEGQE0EPEzFDQFkFzC0EMQDVE/hSBqQitDbkGBuQhlAqhWANQghAFgYAAQgiAAgRgJg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AFKStQiDhBi3iwQg3g2g+hAQgwgygxg2Qg9hBgtg2QiJidiOjrQhkidhZieQhbichPieQgdg4gZgzQhijMgLgyQgRhPAjhHQAOgcATgYIALgNQAPgSASgOIAngeQAggYAigVQCUheC1gYQBzANEpDnQDUCVDGC3QCGB7B7CLQC8DSB+DHQBtCgBDCQQARAhAPAgQCAEAg9B6IgIAOQhaCEhyBeQhOBEhVAlQgjAPglANQhqAlhdAIQgbADgVAAQgrAAgZgLg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AFITWQiVhAjBiqQg/g1hEhAQg0gxg2g3QhLhJgogvQiQiTiOkQQhfilhTizQhSimhJiwQgag8gWg3QhajlgKgsQgShUAohJQARgeAUgYIAMgNQARgRATgLIAugZIBIgmQCkhVC7gVQCYAHEnDJQDvCHDSC3QCRB+B9CVQC7DeBwDmQBeCsA1CjIAYBGQBkEEhCCQIgIAQQhYCShwBnQhSBShUAhQgmAOgoALQhuAfhlAEIghABQg3AAgigOg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AFEUAQimhAjNijQhFg1hJg/Qg6gyg7g4QhYhQgkgoQiXiKiOk0QhYiuhOjIQhKiuhCjCQgXhAgUg9QhSj9gIgmQgThYAuhNQASgfAVgXIANgNQATgRAWgJIAzgSQAngPApgRQCzhLDBgUQC+ADEkCqQELB4DdC4QCdCBB+CgQC5DoBjEIQBQC3AlC1QAJAmAIAmQBIEHhHCmIgIASQhXChhsBvQhXBghTAcQgpANgqAJQhzAbhtgCIgMABQhGAAgvgRg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AHGU8QhOgBg6gTQi4g+jYidQhLg1hPg/Qg+gyhAg4QhnhYgfghQieiBiNlYQhSi3hJjcQhCi3g7jUQgUhEgShDQhJkUgHghQgUhcAzhQQAVghAVgWIAPgOQAUgRAZgGQAggGAYgGQAqgJAtgQQDDhBDHgSQDkgDEgCLQEnBrDpC3QCpCEB/CrQC4DzBUEpQBDDCAVDHQAGAqADApQAtEKhLC9IgJAUQhVCvhqB3QhaBuhUAYQgrALgsAHQhbARhZAAQgdAAgcgCg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AHEVoQhOgEhBgUQjJg+jkiWQhRg1hUg+QhEgyhEg5Qh1hggbgZQilh4iNl9QhMi/hDjxQg6jAg0jmQgRhIgQhJIhGlGQgVhgA4hUQAYgiAWgWIAPgOQAWgRAcgEQAkgCAZgDQAugFAxgNQDSg4DNgQQEKgIEbBtQFFBcD0C4QC1CHCAC1QC2D+BHFIQA1DPAFDaQACAsAAAsQARENhQDTIgJAWQhUC+hnCAQheB8hTATQguAJgvAGQhJAKhJAAQg0AAgzgFg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AG5WTQhOgIhHgUQjbg9jviQQhYg0hag/QhIgxhJg5Iiah6QishviMmhQhGjIg+kFQgxjKguj4IgciaQg3lEgFgVQgWhkA9hWQAbglAWgVQAJgIAIgGQAYgQAegCIBCABQAyAAA0gLQDigvDTgOQEvgNEZBOQFgBOEAC4QDACKCDDAQC0EJA5FoQAnDbgLDsQgBAvgEAvQgLERhVDpIgJAYQhSDMhkCIQhjCKhSAPQgxAIgxAEQg1AFg2AAQhNAAhOgKg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AjcTYQiqhdiviAQiQhwgTgKQkGiWixuAQg1kRgylvQgvlfgDgMQgXhpBDhZQAng1AegUQAagQAhABIBHAHQA2AEA3gIQRui0JPGXQHiFMBLKnQAfEVgsE2QgnEThaEAQhUDshnCZQhmCYhTAKQhSALhUAAQmTAAnDj3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_2_graphics_126,x:-38.2,y:-119.5}).wait(1).to({graphics:mask_2_graphics_127,x:-32.3,y:-112.7}).wait(1).to({graphics:mask_2_graphics_128,x:-26.5,y:-106.2}).wait(1).to({graphics:mask_2_graphics_129,x:-20.6,y:-99.5}).wait(1).to({graphics:mask_2_graphics_130,x:-14.8,y:-93}).wait(1).to({graphics:mask_2_graphics_131,x:-9,y:-86.3}).wait(1).to({graphics:mask_2_graphics_132,x:-3.1,y:-79.7}).wait(1).to({graphics:mask_2_graphics_133,x:2.7,y:-73}).wait(1).to({graphics:mask_2_graphics_134,x:8.6,y:-66.4}).wait(1).to({graphics:mask_2_graphics_135,x:14.4,y:-59.8}).wait(1).to({graphics:mask_2_graphics_136,x:20.2,y:-53.3}).wait(1).to({graphics:mask_2_graphics_137,x:26.1,y:-46.7}).wait(1).to({graphics:mask_2_graphics_138,x:31.9,y:-40.1}).wait(1).to({graphics:mask_2_graphics_139,x:37.8,y:-33.5}).wait(1).to({graphics:mask_2_graphics_140,x:40.4,y:-27.3}).wait(1).to({graphics:mask_2_graphics_141,x:43.2,y:-21}).wait(1).to({graphics:mask_2_graphics_142,x:46.1,y:-14.7}).wait(1).to({graphics:mask_2_graphics_143,x:49.2,y:-8.3}).wait(1).to({graphics:mask_2_graphics_144,x:52.6,y:-1.8}).wait(1).to({graphics:mask_2_graphics_145,x:56.9,y:4.7}).wait(1).to({graphics:mask_2_graphics_146,x:61.9,y:11.3}).wait(229));

	// 图层 8
	this.instance_20 = new lib.yld_5_4();
	this.instance_20.setTransform(-23,-109.5);
	this.instance_20._off = true;

	this.instance_20.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(126).to({_off:false},0).wait(249));

	// 图层 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_95 = new cjs.Graphics().p("AiMEdQgjhRgNhcQgvlLDAi6QGVEnkUGnQg9Bdg0AAQg9AAg0h5g");
	var mask_3_graphics_96 = new cjs.Graphics().p("AhxF7QgVgYgTgiQgwhSgbhqIgBAAQhNksCui5QAlgsAxgnQA9AhA4AjQAyAcAbAhQAWARAOARQBiCJgnCgQgKA2gVBIQgIAcgJAWQgFALgFAEIgKARIgdA0IgZAnQgpA9gnAcQghAXgcAAQgxAAgsg5g");
	var mask_3_graphics_97 = new cjs.Graphics().p("Ah0GfQgagWgZgkQg9hUgqh3IAAAAQh2lQDqjHQAsgsA8gnQBGAaBFAcQBDAWAaAeQAfANANAPQB9CVg7C2IgiCQQgIAigKAXQgFANgHAAIgMATIghA5QgOAXgPAVQguBEgtAhQgpAdglAAQg0AAgxgyg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Ah2HDQgggWgfgkQhJhWg5iEIgBgBQielzEmjUQA0gtBHgoQBPATBSAWQBTAQAaAaQAmAKAPALQCWCjhPDOQgPA2gWBqQgIAogKAXQgFAQgJgFQgEAEgJARIgmA/IggAxQg1BLgzAmQgzAkguAAQg2AAg0gsg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Ah4HnQglgVglgmQhWhYhIiRIgBgCQjGmWFhjiQA8gtBSgpQBYANBfAQQBjAJAaAXQAuAGAPAJQCwCvhjDlQgSA2gWB6QgJAwgJAXQgGASgKgJQgDACgMAUIgrBGQgRAbgSAaQg7BSg5ArQg9Atg6AAQg3AAg1gng");
	var mask_3_graphics_100 = new cjs.Graphics().p("Ah7ILQgrgVgqgmQhjhbhXieIgBgCQjum5GcjwQBEguBdgpQBhAGBtAJQBzADAaAUQA1ADAQAFQDJC9h2D6QgVA6gWCIQgJA3gJAXQgHAVgLgPQgEACgOAXIguBMQgTAdgUAcQhBBZg/AwQhIA1hEAAQg5AAg3ghg");
	var mask_3_graphics_101 = new cjs.Graphics().p("Ah9IuQgxgVgwgnQhwhchlisIgBgCQkWncHXj9QBLgvBogqQBqAAB7ACQCDgEAaARQA9AAAQABQDjDLiKEQQgXA7gXCZQgJA9gJAYQgIAXgMgTQgEAAgQAaIgyBSQgVAggWAeQhGBghGA1QhTA+hRAAQg4AAg4gdg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AiAJYQg1gTg2goQh9heh0i6IgCgCQk+oAITkLQBTgvBzgrQBzgGCIgEQCTgKAaANIBVgFQD9DXieEmQgaA8gXCqQgJBDgJAYQgIAagOgYQgEAAgRAcIg4BYQgWAjgYAgQhMBnhMA6QhfBHhdAAQg4AAg5gZg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AiCKJQg7gTg7gpQiKhgiDjHIgCgDQlmojJOkYQBbgwB+gsQB7gMCWgLQCjgQAaAKQBMgIASgEQEWDlixE8QgdA8gYC7QgJBKgJAYQgJAdgPgdQgEgCgTAgIg8BeQgYAlgaAiQhRBuhTA/QhrBRhrAAQg3AAg4gVg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AiFK6QhBgShAgqQiXhiiSjUIgCgDQmOpGKJkmQBjgwCJgtQCEgTCjgRQC0gXAaAHQBTgLATgIQEwDyjGFSQgfA+gZDLQgJBQgIAZQgKAfgQghQgEgDgWAiIg/BkQgbAogbAkQhXB1hZBEQh4Bbh4AAQg3AAg3gSg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AiHLsQhGgShHgrQikhkigjiIgCgDQm2pqLEkzQBrgxCTgtQCOgaCwgXQDEgeAaAEQBbgOATgLQFKD/jZFoQgjA+gYDcQgKBYgIAZQgLAhgRgmQgEgEgYAlIhEBrQgcAqgdAmQhdB8hfBJQiGBliHAAQg0AAg1gOg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AiJMdQhMgShMgrQixhmivjvIgDgEQneqNMAlAQBygyCfguQCXggC9geQDUgkAaABQBigTAUgOQFkENjtF+QglA/gZDsQgKBfgIAZQgLAkgTgrQgEgFgZAoIhJBxQgeAsgeApQhkCDhlBNQiTBxiWAAQgzAAgygMg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AiMNNQhRgQhSgtQi+hoi+j8IgCgEQoHqxM8lOQB6gyCpgvQCggmDLglQDkgqAZgCQBrgWAUgRQF9EZkAGUQgoBAgaD9QgKBlgIAaQgLAmgVgvQgDgHgcAsIhNB2QgfAvghArQhpCKhrBTQiiB7ilAAQgwAAgwgKg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AiON+Qkig1knmAQourUN3lcQD8hiG7hYIENg2QBygaAVgUQGXEnkUGpQgrBCgaENQgKBsgIAaQgMApgWg0QgDgIgeAuIhRB9QiQDViUByQiwCHi1AAQgtAAgtgIg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AiyOXQg6gJg7gTQigg0iWiLQhhhYhWh9QhhiLgriFQhLjNA3isQA+jCDfiVQBthKCSg+QBOgjBfggQC5hADug0QA6gMA8gLQDxguApAAIANgDQBmgPAXgNIAeAWQBCA1AuA3QBrCBgDCXQAABPgcBbQgaBXgzBVIgBABQgpBRgiEHQgNBqgMAgQgFANgFAEQgKAIgPgeQgFgEgdAtIgpA/QglA5gIAJQgjAxglArQh1COiCBVQi5CCjEAAQgsAAgtgGg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AjVOwQg9gHg+gRQiugsiZiJQhnhZhSiFQhciQgfiRQg+jRBBi1QBHjJDeidQBwhQCRhEQBRgnBggjQDBhMDzg0QA7gMA+gLQDugrA4AFIAOgCQBlgGAbgJIAeAYQBGA3AuA4QBuCGgGCeQgCBQgaBhQgYBggvBUIgBABQgoBggqEDQgQBngRAmQgFANgGAFQgLAKgOgZQgHAAgbArIgrBBQglA4gLAMQgmAygpArQh5CHiTBTQjDB+jYAAQgoAAgpgFg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Aj3PJQg/gFhCgPQi8gliciGQhuhahNiNQhWiVgVieQgvjVBLi9QBQjPDeimQBxhXCRhIQBTgsBhgmQDLhXD1g1QA+gNA/gKQDrgpBIALIAOgBQBlACAdgDIAgAYQBJA6AvA6QBxCKgKCmQgEBQgXBnQgXBpgrBTIAAABQgnBugzEAQgUBlgVArQgFANgGAGQgLALgPgTQgIADgaApIgtBFQglA2gPAPQgoAygsArQh+CCikBRQjOB4jrAAQgkAAglgDg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AkYPrQhCgEhFgMQjLgeieiDQh0hchKiVQhQiagKipQghjZBVjHQBZjWDditQB0heCRhNQBVgwBigqQDThhD5g2QBAgOBBgKQDngmBZAQIAOAAICFAOIAgAYQBMA9AxA8QBzCOgOCtQgFBRgVBtQgVBxgnBTIAAABQgmB8g7D8QgXBkgaAwQgGANgGAHQgLAMgPgOQgJAHgaAnQgbArgUAcQgkA1gSASQgrAzgwArQiCB9i1BOQjaBzkCAAIg8gBg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Ak3QNQhFgDhIgJQjZgXihiAQh7hehFicQhLigABi1QgTjdBfjPQBjjdDci1QB2hlCQhSQBYg1BjgtQDchsD9g3QBBgOBDgJQDkgjBoAVIAOAAQBkATAkAJIAiAZQBPBAAxA9QB3CTgSC0QgHBRgTB0QgTB5gjBTIAAABIhpGDQgaBhgeA2QgGANgHAHQgMAOgOgJQgLALgYAmQgcArgVAeQgkA0gWAVQgtAzg0AqQiGB4jGBMQjrBvkgAAIgjAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AlUQuQhIAAhLgHQjngQikh9QiChfhBikIAAgBQhFikANjCQgGjhBpjXQBsjlDbi8QB5hrCQhYQBZg5BkgxQDmh3EAg3QBDgOBEgJQDighB3AaIAPABQBjAcAoAOIAiAbQBSBCAyA+QB6CXgWC7QgIBTgRB6QgRCBgfBSIAAACQgkCXhMD2QgdBfgjA7QgHANgHAJQgMAQgOgFQgNAPgXAkQgdAtgVAeQgkA0gZAYQgwAzg4AqQiLByjWBJQj8BslFAAIgDAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AoHRMQj2gIinh7QiIhgg9isIAAgBQg/ipAXjOQAJjlBzjgQB1jrDajFQB8hxCPhdQBcg+Blg0QDuiCEEg3QBFgPBGgJQDegeCHAfIAPACQBjAkArAUIAjAcQBVBEAzBBQB9CbgaDCIgYDTQgPCKgbBSIgBACQgiClhVDyQggBegoBAQgHANgHAJQgNASgNABQgPASgWAiQgeAvgWAfQgkAygcAbQgyA0g8AqQiPBsjoBHQkCBilYAHIgPAAQhDAAhGgEg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AomRyQkFgBiph4QiPhig4izIAAgBQg6ivAijZQAXjpB9jpQB/jzDZjMQB+h4CPhiQBdhCBmg4QD3iMEIg5QBHgPBHgIQDbgcCXAlIAPACQBjAtAuAaIAkAcQBYBHA1BCQCACggeDJQgMBUgMCGQgNCSgXBSIgBACQghCzheDvQgjBbgsBGQgHANgIAKQgNATgNAGQgQAWgVAgQgfAxgXAfQgkAyggAeQg0A0hAAqQiUBnj4BEQkIBYloAOIhXABIhHgBg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AwDQoQiWhjg0i8IAAgBQg0izAtjmQAmjtCGjyQCIj5DZjUQB/h/CPhnQBghHBng7QD/iXEMg5QBJgQBJgIQDYgZCnAqIAPADQBiA1AxAgIAmAdQBbBKA1BEQCDCkgiDQQgNBVgKCMQgMCagTBSIAAACQggDBhmDrQgnBagwBLIgQAXQgNAVgNALIgmA4QggAzgYAgQgjAwgkAhQg2A1hEApQiYBikJBCQkOBOl4AUQhQAEhUABIgZAAQkCAAikhvg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AwyRWQichlgwjDIAAgBQgvi5A5jyQAzjxCQj6QCRkADYjcQCCiGCPhsQBihLBog/QEHiiEQg6QBMgQBKgHQDUgWC3AvIAQADQBiA+A0AlIAmAeQBeBNA3BFQCFCoglDYQgPBVgICTQgKCjgPBQIAAACQgfDRhuDmQgqBYg1BQIgQAZQgOAWgNAQIgmA7QghAzgZAiQgjAvgnAkQg5A1hIApQicBckaBAQkUBEmIAbQhTAGhXADIg6ABQj5AAidhmg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AxgSDQijhmgsjMQgpi+BEj+QBBj1CakDQCbkHDXjkQDijvD+igQEQisETg7QEshAEVBNQCJBkA3AsQBiBQA3BGQCJCtgqDfQgQBWgGCZQgICtgLBQQgrFAjhFGQhOCCgvA/QhSBtiDBHQlbC7vSBCQguADgrAAQjyAAiWhfg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AlCSXQjKgajogmQhugShbglQiLgyhghZQiSiFgmjaIAAAAQgjjeBEkFQAOg3ATg0QBGjQCBiwIAdgmQCZjADAiMQA4grA7gnQCZhpCihGQBugyBuglQBighBggTID9geQAogDApAGIAiADQBCAMBBAIQCiAgCDBXIAWAcQAOAUAVAQQAgAYAjAUQAnAbAhATIAaATQBAAtAvArQAWAVASAVQBTBbAXBxQAWBogZB6QgVBggVCfIgHAwQgTCNgWBPQhIEYiqD6QgyBFg5BBQheB5hDAzQgbAYgfAUQhRA4hoAdQhvAfifALQgwACg1AAQjQAAkTgfg");
	var mask_3_graphics_121 = new cjs.Graphics().p("ABkT8Qj4gvlCh3QjAhOjTheQhjgshTg+Qh7hPhWhvQiAikggjnIAAgBQgfj8BGkNQAPg7AUg6QBRjsCYimIAkgkQC6i0DlhkQBCgfBEgZQCthGC1gaQB4gVBygIQBpgGBjAGQCbAfBXALQAfAIAhAXQAOAGANAIQA2AnA1AUQCABMBNB6IANAgQAGAYAYATQAfAYAsAVQAnAYArAUIAeARQBJAsA0ArQAaAVAVAVQBfBgAYB8QAWBvggCGQgZBrgjCjIgNA0QgfCRghBZQhtEzjCDyQg8BGhDA9QhuBwhXAnQghATgjAOQheAnhvAGIg2ACQhmAAh7gTg");
	var mask_3_graphics_122 = new cjs.Graphics().p("ADhWxQiCgSidg5Qj/hqkujIQi2iBi9iVQhZhGhKhWQhshuhLiFQhvjDgajyIAAgCQgZkdBHkUQAQhBAVg9QBckKCuibIAqgiQDcipELg7QBLgSBNgMQDBgjDIATQCBAIB5AUQBvAUBkAhQCnBPBBAiQAXAUAYAoQALALALANQApBCAoAgQBfB4AXCdIADAlQgCAcAbAVQAeAYA1AWQAoAVA0AVIAiARQBSApA6ArQAdAVAYAXQBrBiAZCIQAWB2glCQQgfB3gxCrIgSA3QgrCUgtBjQiTFMjYDrQhHBHhNA5Qh9BohrAaQgnAOgoAIQg+ANhCAAQgwAAgxgHg");
	var mask_3_graphics_123 = new cjs.Graphics().p("ABHZ0QiJgrifhbQkFikkakYQisi1injMQhPhhhBhuQheiMg+iaQhfjggUkDIAAgCQgUk9BIkbQAShGAWhCQBnkmDFiQIAwggQD9ieExgRQBUgIBWADQDWAADYA/QCOAlB+AxQB1AvBmA6QCyB/ArA6QAOAgARA3IAPAkQAeBcAaAsQA9CkgeDBIgHApQgJAgAdAXQAeAYA9AXQAoATA/AWIAlAPQBbApBAAqQAgAVAcAYQB3BlAZCTQAWB8grCeQgkCBg/CyIgXA7Qg3CXg5BsQi4FnjuDiQhTBJhWA1QiNBfiAAOQgsAIgtACIghABQhnAAhtghg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AC2eNQiCgKiFg8QiUhEigh9QkKjekGlpQiijpiRkCQhFh8g4iGQhPiqgziuQhOkBgOkRIAAgCQgOldBIkiQAThLAYhGQBxlDDciFIA3geQEeiTFWAYQBeAEBfAQQDqAkDrBrQCYBCCFBOQB6BJBoBUQC+CvAUBSIAPBzIAJAuQARB4AOA4QAbDPhUDkQgIAXgJAXQgQAlAfAZQAdAYBGAXQApARBIAXIApAOQBkAnBGAqQAkAVAeAZQCDBmAaCfQAWCEgxCrQgoCMhOC4IgcA/QhDCahFB1QjdGBkFDaQheBKhgAyQidBWiUACIgnABQgeAAgegDg");
	var mask_3_graphics_125 = new cjs.Graphics().p("EACfAiYQg3gCg2gLQiOgbiNhSQifhdififQkQkXjym6QiYkch7k6Qg6iWgwifQhAjGgojGQg8kggJkeIAAgCQgJl9BKkqQAUhQAZhJQB8lgDyh6QAfgPAfgNQE/iIF8BAQBnARBoAeQD8BGEACYQCjBeCKBrQCABkBqBuQDJDfgBBqQgEA2ABBZIADA5IAGDWQgGD7iKEHIgbAzQgYAoAiAcQAcAYBQAYQApAOBSAYIAsANQBuAjBKAqQAoAWAhAZQCQBsAaCqQAWCLg3C4QgtCXhbC+QgQAhgSAhQhQCdhQB/QkCGbkcDSQhpBMhqAtQiXBEiUAAIgpgBg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EgBSAmMQlJhckvlvQkWlQjdoMQjSnvh5o5Qh3ozgFn6QgEoQB8lgQCGl8EJhwQF8igHKBzQGABhGEEUQFPDuDgEcQDVEOgYCCQgQBWgGCZQgICtgLBQQgrFCjhFEQggAtAkAeQAcAYBYAZIC2AxQB2AjBRApQDlB2AhDfQArEhkVHhQmAKemSEKQkACqkAAAQhrAAhqgeg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_3_graphics_95,x:24.4,y:-390.3}).wait(1).to({graphics:mask_3_graphics_96,x:18.6,y:-385.9}).wait(1).to({graphics:mask_3_graphics_97,x:12.9,y:-381.5}).wait(1).to({graphics:mask_3_graphics_98,x:7.2,y:-377}).wait(1).to({graphics:mask_3_graphics_99,x:1.4,y:-372.5}).wait(1).to({graphics:mask_3_graphics_100,x:-4.3,y:-368}).wait(1).to({graphics:mask_3_graphics_101,x:-10,y:-363.5}).wait(1).to({graphics:mask_3_graphics_102,x:-15.8,y:-359.7}).wait(1).to({graphics:mask_3_graphics_103,x:-21.5,y:-356.5}).wait(1).to({graphics:mask_3_graphics_104,x:-27.2,y:-353.4}).wait(1).to({graphics:mask_3_graphics_105,x:-33,y:-350.2}).wait(1).to({graphics:mask_3_graphics_106,x:-38.7,y:-347.1}).wait(1).to({graphics:mask_3_graphics_107,x:-44.4,y:-343.9}).wait(1).to({graphics:mask_3_graphics_108,x:-50.2,y:-340.7}).wait(1).to({graphics:mask_3_graphics_109,x:-51.3,y:-337.3}).wait(1).to({graphics:mask_3_graphics_110,x:-52.4,y:-334}).wait(1).to({graphics:mask_3_graphics_111,x:-53.7,y:-330.6}).wait(1).to({graphics:mask_3_graphics_112,x:-55.1,y:-328.1}).wait(1).to({graphics:mask_3_graphics_113,x:-56.6,y:-325.6}).wait(1).to({graphics:mask_3_graphics_114,x:-58.4,y:-323.1}).wait(1).to({graphics:mask_3_graphics_115,x:-60.4,y:-320.6}).wait(1).to({graphics:mask_3_graphics_116,x:-62.5,y:-318.1}).wait(1).to({graphics:mask_3_graphics_117,x:-64.8,y:-315.5}).wait(1).to({graphics:mask_3_graphics_118,x:-67,y:-312.8}).wait(1).to({graphics:mask_3_graphics_119,x:-69.4,y:-310.1}).wait(1).to({graphics:mask_3_graphics_120,x:-67.6,y:-299.6}).wait(1).to({graphics:mask_3_graphics_121,x:-65.8,y:-285.4}).wait(1).to({graphics:mask_3_graphics_122,x:-64,y:-274.4}).wait(1).to({graphics:mask_3_graphics_123,x:-62.2,y:-266.5}).wait(1).to({graphics:mask_3_graphics_124,x:-60.4,y:-260.2}).wait(1).to({graphics:mask_3_graphics_125,x:-58.7,y:-254.4}).wait(1).to({graphics:mask_3_graphics_126,x:-57,y:-248.8}).wait(249));

	// 图层 6
	this.instance_21 = new lib.yld_5_3();
	this.instance_21.setTransform(-139.5,-392.5);
	this.instance_21._off = true;

	this.instance_21.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(95).to({_off:false},0).wait(280));

	// 图层 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_78 = new cjs.Graphics().p("AAPD3Qj9hSiojFQgtg1AOhOQAThoBpgOQHGgREXEVQAZAWgFAwQgWDpjSABQhSAAhvgkg");
	var mask_4_graphics_79 = new cjs.Graphics().p("ADyFrQhhgGhwgxIgcgOQgKgHgKgJIgYgKIg7gZQhbgphKgzQiChchFh9QglhCAahbIAAgBQAXhWBYghQAWgJAbgEQBXgIBYACQBzAEBkAWQBPAQA5AbQCVA7BqDoQAVAegFA4QgJBlghBLQgvBniCAAIgXAAg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AEEG7Qh1gPh3hEQgPgJgLgKQgMgLgIgMQgHgGgTgIIhFgeQhtgyhSg7Qibhxg2iZQgdhPAlhnIABgCQAehcBtgoQAbgKAegGQBjgNBpAAQCGAAB3AXQBjASA6AgQCEA1BTFOQASApgGA/QgJByggBhQgpB2iIAAQgYAAgbgEg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AEYIMQiJgZh+hXQgRgLgKgNQgLgOgGgRQgGgGgYgLIhOgjQh/g6hahDQi0iHgmi0QgWhdAxhzIABgDQAmhiCCguQAegLAigIQBvgRB7gEQCagDCHAYQB4ATA7AlQBzAwA9G1QANAygFBGQgLCAgdB1QgmCGiRAAQghAAgogHg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AEsJcQicgiiFhpQgQgOgLgQQgLgRgDgVQgFgHgdgOIhYgnQiQhEhjhKQjMidgXjQQgOhpA8iAIACgDQAuhoCWg2QAigMAmgJQB7gWCMgGQCvgHCYAZQCLAVA9AqQBiApAlIdQALA7gHBNQgLCOgcCKQgiCWibAAQgrAAg0gMg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AFCKtQixgsiMh8QgPgQgLgTQgLgVgBgYQgDgIgigQIhhgtQijhMhrhTQjkizgJjqQgFh3BIiMIACgEQA1huCqg8QAngOAqgJQCHgcCegJQDDgKCoAZQCfAXA/AvQBRAkAOKFQAHBDgHBUQgMCbgaCgQgfCmilAAQg0AAhAgQg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AFXL9QjEg1iTiOQgQgTgKgWQgLgYABgdQgCgIgmgTIhqgxQi1hWhzhaQj+jJAHkGQADiEBTiYIADgFQA8h0C/hCQArgPAugLQCSghCugLQDagOC4AaQCzAYBBA1QBAAegJLsQADBMgHBcQgNCogYC1QgdC2iwAAQg7AAhNgVg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AFnNOQjYg/iYihQgTgVgKgYQgJgcADghQgBgJgrgWIh0g2QjGheh8hiQkWjfAWkhQAKiRBfilIADgGQBFh5DThKQAugQAzgMQCegmC/gOQDvgRDIAbQDHAZBCA6QAvAYgfNUQgBBWgHBiQgOC2gWDJQgbDIi7AAQhDAAhYgag");
	var mask_4_graphics_86 = new cjs.Graphics().p("AFyOfQjshJifi0QgUgXgJgbQgJgfAFglQABgLgwgYIh9g6QjZhniEhqQkuj1Alk9QASieBqixIAEgGQBMiADohQQAygRA3gOQCqgrDQgRQEDgUDaAcQDbAbBDA+QAeATg3O8QgDBegJBpQgODEgVDeQgYDYjGAAQhLAAhjgeg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AF5PvQkAhSiljGQgtg2AOhOQACgLg0gaIiHhAQjrhwiMhyQnrmNFspFQBUiFD9hXQDdhMErgZQEYgYDpAcQDvAdBFBEQARAQiDa8QgWDpjSAAQhSAAhvgkg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AGdQSIgxgQQjIhKiPiWQgVgZgUgbQgNgSgGgUQgLgcgJgkQgBgOAAgPQgCgMgzgaIhJgkIhCggQjwh2iTh3IgHgGQoEmlFqpBIABAAQA+hjBpg8QBEgsBaghIAJgDQBpglCEgXQCJgZCogMQBLgFBKgCQDNgGCxAYQDuAgBRBJQASAOgCDSQATDsghHLQgVEggtF4IgVC3QgGAogKAiQgTA6gZAfQg5BciEAAQhNAAhngfg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AG1Q0QgagHgagJQjQhLiTidQgXgagQgdQgLgTgFgWQgJgZgTgmIgFgcQgGgMgxgaIhMgmIhEgiQj2h9iZh6IgHgGQomm/FqpCIAAAAQBIhzBdg2QBEgzBbgiIAJgEQBqgmCNgVQCJgXCzgKQBNgEBNgCQDVgEC2AbQDtAjBcBPQAfAWAKDBQA0D1giHRQgWErhAGBIgcC2QgIApgLAjQgYBBgVAbQg2BwiQAAQhJAAhggdg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AHLRWQgbgHgbgKQjYhMiWikQgZgbgOgfQgJgVgDgXQgHgXgcgmIgLgaQgJgNgwgaIhPgoIhGgkQj7iDifh/IgHgHQpJnYFrpCIAAAAQBSiDBQgwQBFg7BbgjIAJgEQBqgnCWgUQCKgVC9gIQBPgDBSgBQDdgDC5AfQDsAmBpBUQAsAeAVCwQBUD9gjHZQgXE1hRGKIgkC2QgJApgOAlQgbBHgSAYQgzCDicAAQhFAAhagag");
	var mask_4_graphics_91 = new cjs.Graphics().p("AHgR5QgcgIgcgKQjghNiairQgZgcgNgiQgIgVAAgZQgGgUglgoIgPgZQgNgNgvgZIhRgqIhIgnQkBiKiliDIgIgGQpqnyFqpCIABgBQBciTBDgqQBFhCBdglIAJgDQBpgoCfgTQCLgTDKgGQBPgDBVAAQDlgBC+AjQDrApB1BZQA4AmAgCgQB1EFgkHgQgYE/hiGTQgUBZgYBcQgLAqgPAmQggBPgOATQguCXioAAQhCAAhVgXg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AH1SaQgcgHgegKQjohPidiyQgagdgLgkQgIgWAAgaQgDgSgtgpIgTgXQgRgPgugYIhTgtIhLgoQkGiQiriIIgIgGQqNoLFrpEIABAAQBmijA1glQBGhJBegmIAJgDQBpgpCogSQCMgRDVgEQBQgCBZABQDuAADCAmQDqAtCBBeQBEAuAsCPQCVEOgkHmQgZFKh0GcQgYBZgbBcQgOAqgQAoQglBVgKAQQgpCrizAAQg/AAhRgWg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AIKS9QgegIgfgKQjwhQigi5QgagegKgmQgGgYACgbQgCgQg2gqIgYgWQgVgOgsgZIhWguIhMgrQkNiXixiLIgIgHQqvokFrpEIABgBQBwizApgeQBGhRBegnIAJgEQBqgpCxgRQCMgPDhgCQBUgBBaABQD2ACDHAqQDpAwCMBiQBRA3A3B+QC2EWglHuQgaFTiGGmQgbBZggBcQgPAqgRAqQgqBbgHAMQgiC/i+AAQg9ABhNgUg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AIfTfQgegIghgKQj4hRikjAQgbgfgHgoQgFgaAEgcQAAgOhAgqIgcgVQgZgPgrgYIhZgxIhOgsQkSiei3iQIgIgHQrRo+FrpEIABgBQB6jDAbgYQBHhYBfgoIAJgEQBqgrC6gPQCNgNDrAAIC1ABQD9AEDLAtQDoAzCZBoQBdA/BDBtQDWEegmH1QgbFeiXGuQgfBagjBbQgSArgTArIgxBqQgdDUjHAAQg7AAhKgSg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AHzTvQkAhSinjHQgtg1AOhOQACgLhJgsIjDhuQlUjBjZisQr0pYFspFQCEjTAPgTQBIhfBfgqQBrgvDLgOQDAgOF+AHQLkAOE0FvQD3EngnH8QgcFnioG4QgzCFg/CHQgyBpAAAEQgWDpjTAAQhSAAhugjg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_4_graphics_78,x:142.5,y:-204.7}).wait(1).to({graphics:mask_4_graphics_79,x:138.5,y:-213.2}).wait(1).to({graphics:mask_4_graphics_80,x:134.3,y:-221.6}).wait(1).to({graphics:mask_4_graphics_81,x:130.1,y:-230.1}).wait(1).to({graphics:mask_4_graphics_82,x:125.7,y:-238.5}).wait(1).to({graphics:mask_4_graphics_83,x:121.2,y:-247}).wait(1).to({graphics:mask_4_graphics_84,x:116.7,y:-255.4}).wait(1).to({graphics:mask_4_graphics_85,x:112.8,y:-263.9}).wait(1).to({graphics:mask_4_graphics_86,x:109.4,y:-272.3}).wait(1).to({graphics:mask_4_graphics_87,x:106.3,y:-280.8}).wait(1).to({graphics:mask_4_graphics_88,x:103.5,y:-284}).wait(1).to({graphics:mask_4_graphics_89,x:102,y:-287.2}).wait(1).to({graphics:mask_4_graphics_90,x:100.6,y:-290.4}).wait(1).to({graphics:mask_4_graphics_91,x:99.3,y:-293.6}).wait(1).to({graphics:mask_4_graphics_92,x:98,y:-296.7}).wait(1).to({graphics:mask_4_graphics_93,x:96.7,y:-299.9}).wait(1).to({graphics:mask_4_graphics_94,x:95.4,y:-303.1}).wait(1).to({graphics:mask_4_graphics_95,x:94.1,y:-306.3}).wait(280));

	// 图层 4
	this.instance_22 = new lib.补间156("synched",0);
	this.instance_22.setTransform(65,-299);
	this.instance_22._off = true;

	this.instance_22.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(78).to({_off:false},0).wait(297));

	// 图层 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AhKLRQh2hHhNh2QlWoMCWpCQAOg0AzggQC7h1DdgQQFThPAJEbQABAuAXA2QCOFRgVGMQgKDChMCmQhYDDiiAAQhrAAiIhUg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AhKLRQh2hHhNh2QlWoMCWpCQAOg0AzggQC7h1DdgQQFThPAJEbQABAuAXA2QCOFRgVGMQgKDChMCmQhYDDiiAAQhrAAiIhUg");
	var mask_5_graphics_47 = new cjs.Graphics().p("AB0NXQhagWhlhBQh9hOhTh9IgGgJQiEjKhBjYQg1iugGi5QgCg4ACg8QAAgbACgYQAGhvAeh2QAOg2AzgmIAJgHQAygmAzgZQARgJASgIQBKgfBPgPQBEgPA+ABQAVgDAUAAIAigBQAggBAdACQAlAFAdAIQAiAJAZARQAcASASAbQApA2AOBsIAAABQAEAvAaA5QAyBvAnB6QA5C1AOC0QAMBbgEBVIAAAIQgHBOgRBLQgbB1gwBqIgKATQhkDFieAAQgfAAgggHg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AB+OUQhggahqhGQiEhUhZiHIgHgJQiMjVhIjoQg6i6gLjGQgCg7AAhAQAAggACgXQgBhzAgiCQAOg5A0grIAJgIQAzgvAygaQARgLATgJQBPgiBVgQQBKgPA/AFQAXAAASADQAPAAARADQAgACAgAFQAnAIAdAJQAkAMAaATQAcAUARAeQAnA1AZB2IABACQAGAwAfA9QA2BzAwCCQBKDDAUC2QAVBkgCBUIAAAJQgLBTgTBOQggB+g0BvIgLAWQhvDYijAAQgfAAgggHg");
	var mask_5_graphics_49 = new cjs.Graphics().p("ACIPTQhmgehuhKQiLhbhgiPIgHgKQiVjghPj5Qg+jFgPjUQgEg8gBhGQgBgkABgWQgGh3AiiNQAPg8AzgyIAJgIQA1g3AwgcQARgNAVgKQBTgmBagPQBSgRA/ALQAXABATAGQAQADAPAEQAgAFAhAJQApAKAeALQAmAPAaAUQAdAXAQAhQAmA1AkCAIAAABQAJAyAjBBQA7B2A6CLQBYDRAcC4QAeBtgBBTIAAAJQgOBYgWBTQglCHg3B0IgLAXQh7DtinAAQggAAghgJg");
	var mask_5_graphics_50 = new cjs.Graphics().p("ACUQTQhsgih0hPQiRhihniWIgHgLQiejrhWkLQhDjPgTjhQgEg/gDhMQgCgnABgWQgNh7AliYQAPg/A0g3IAJgKQA2g/AugeQARgOAWgLQBYgpBggPQBYgUBBARQAXADASAJQAPAFARAHQAeAHAjAMQArAOAfAMQAnASAbAVQAeAaAPAjQAkA0AvCLIAAABQAMAzAnBGQBAB5BDCTQBoDgAiC6QAoB1AABTIAAAJQgRBdgZBYQgpCOg7B6IgMAYQiHEBirAAQggAAghgJg");
	var mask_5_graphics_51 = new cjs.Graphics().p("ACgRTQhzgnh4hTQiYhohuifIgHgMQinj2hdkcQhHjagXjuQgGhCgEhRQgDgrABgVQgSiAAmijQAQhBA0g9IAJgLQA3hHAtggQAQgQAYgMQBcgsBmgQQBggVBAAWQAXAGASAMIAgAPQAgALAiAPQAuARAfANQAqAUAbAYQAeAcAPAlQAiA1A6CUIAAABQAOA1AsBJQBEB+BNCbQB4DuApC8QAxB9AABTIAAAKQgUBigbBcQguCWg/CAIgNAaQiSEVivAAQghAAghgKg");
	var mask_5_graphics_52 = new cjs.Graphics().p("ACsSTQh4grh9hYQifhvh0inIgJgMQivkBhkktQhMjlgbj8QgGhEgGhWQgEgvABgVQgZiEApiuQAQhDA0hEIAKgMQA3hPAsghQARgSAYgNQBhgwBsgPQBmgXBBAbQAYAIARAPIAfAUIBGAfIBOAjQArAXAcAZQAfAfAOAoQAgAzBFCfIABABQAQA2AwBOQBJCBBWCjQCID8AvC+QA7CHABBRQABAGgBAFQgXBmgeBhQgzCfhCCFIgOAbQieEpizAAQghAAgigKg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AC4TTQh/gviBhcQimh2h7iwIgJgMQi4kMhrk+QhQjwgfkJQgHhHgHhbQgFgzAAgUQgfiJAri5QARhGA1hKIAJgMQA5hYAqgjQAQgTAagOQBmg0BxgPQBugYBBAgQAYAKAQASIAfAYIBIAlIBRAoQAsAZAcAbQAhAiAMAqQAfAzBQCpIABABQATA3AzBSQBOCFBgCsQCXEJA3DBQBDCPADBRIAAAKQgaBsghBlQg4CohFCLIgPAcQipE9i4AAQgiAAgigLg");
	var mask_5_graphics_54 = new cjs.Graphics().p("ADEUUQiEg0iGhgQiuh9iBi4IgJgNQjBkXhylPQhUj7gjkXQgJhJgIhgQgGg2AAgUQgliOAtjEQARhIA1hQIAJgNQA6hgApglQAQgVAcgPQBqg3B3gPQB0gaBCAlQAYAMAQAWQAMAMATAPIBJAsIBTAsQAvAcAcAdQAhAkAMAtQAdAzBbCyIABABQAWA5A3BWQBTCIBpC0QCnEYA9DDQBNCXAEBRIAAALQgdBxgkBpQg9CwhICRIgQAdQi1FRi7AAQgjAAgjgLg");
	var mask_5_graphics_55 = new cjs.Graphics().p("ADRVUQiLg4iKhlQi0iDiIjAIgKgOQjJkjh5lgQhZkFgokkQgJhMgKhmQgGg6gBgTQgriSAvjPQAShLA1hVIAJgPQA7hnAognQAQgXAdgQQBug6B9gQQB8gcBCArQAYAOAPAZQAMAOASASQAgAWAsAbIBWAxQAwAfAdAeQAiAnALAvICBDvIABABQAYA6A8BaQBYCMByC9QC2EmBFDFQBVCfAFBRIABALQghB2gnBuQhBC3hMCXIgQAfQjBFljAAAQgjAAgjgMg");
	var mask_5_graphics_56 = new cjs.Graphics().p("ADeWUQiRg8iPhqQi8iJiOjJIgKgPQjSktiAlxQhekRgrkxQgKhOgMhrIgJhRQgwiWAxjaQAShOA2hbIAJgPQA8hwAmgpQAQgYAegRQBzg+CDgPQCCgeBDAwQAZAQAOAcQALAQATAUQAfAZAuAeIBbA1QAwAiAdAgQAjApAKAyQAZAyByDHIAAABQAbA8BABeQBcCPB8DFQDGE0BLDHQBfCpAGBPQACAHgBAFQgkB6gpBzQhGDAhQCcIgRAgQjNF6jDAAQgkAAgjgNg");
	var mask_5_graphics_57 = new cjs.Graphics().p("ADqXUQiXhAiUhvQjCiQiVjRIgLgPQjak4iHmDQhikbgwk+QgLhRgNhwIgKhUQg2ibAzjmQAShPA2hiIAJgQQA9h4AmgqQAPgbAggRQB3hCCJgPQCJgfBDA0QAZATANAgQALARATAWQAfAcAwAhIBdA6QAzAlAdAiQAkArAJA1QAXAxB9DRIABABQAdA9BEBiQBhCTCFDNQDWFDBSDJQBoCxAHBPQACAHgBAFQgnB/gsB3QhLDJhTChIgSAiQjZGNjHAAQgkAAgkgNg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AD3YVQiehFiYhzQjJiXicjZIgLgQQjjlDiOmUQhnkmg0lMQgLhTgPh2IgLhXQg9ifA2jxQAThSA2hnIAJgRQA+iBAkgsQAPgcAhgSQB8hFCOgQQCRghBEA6QAZAVAMAjQAKATATAYQAgAfAxAkIBgA/QA0AnAeAkQAlAuAIA3QAVAxCIDbIABABQAfA+BJBmID1FtQDlFOBZDNQBxC6AIBOQACAIgBAFQgqCEgvB8QhQDQhWCoIgTAjQjkGijLAAQglAAgkgOg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AEDZVQikhJich4QjQidiijiIgMgQQjslPiVmlQhrkwg4lZQgNhWgQh7IgMhaQhDikA4j8QAThVA2htIAKgSQA/iIAiguQAQgeAigTQCAhJCUgPQCYgjBEA/QAZAXAMAmQAJAWAUAaQAfAiAzAmIBjBEQA4AqAcAlQAmAxAHA5QAUAxCTDlIABABQAhBABNBqIEDF4QD1FdBgDPQB6DCAJBOQACAIgBAFQgtCJgyCAQhUDZhaCtIgUAkQjvG2jQAAQglAAglgOg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AEQaVQiqhNihh8QjXikipjqIgMgRQj1laicm2Qhwk7g7lnQgOhXgSiBIgNheQhJioA6kHQAUhXA2hzIAKgTQBAiRAhgvQAPggAjgUQCFhMCagPQCfglBEBEQAaAZALAqQAJAXAUAcQAfAlA0AqIBmBIQA6AsAfAoQAkAzAGA8QATAwCdDvIABABQAlBBBRBuIERGFQEEFrBnDRQCEDLAKBNQACAIgCAFQgwCOg0CFQhZDhheCzIgUAlQj8HKjTAAQgmAAglgPg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AEdbWQixhSimiBQjeiqivjzIgNgSQj9lkijnHQh0lGhAl0QgPhagTiGIgPhhQhOitA8kSQAUhaA3h4IAJgVQBBiZAggxQAPghAlgVQCJhPCggQQCmgmBFBJQAZAbALAtQAIAZAUAeQAfAoA2AtIBpBNQA8AvAfApQAlA1AFA/QARAwCpD5IABABQAmBDBWByIEfGQQEUF5BuDTQCNDUALBNQACAIgCAFQgzCTg3CJQheDphhC5IgVAnQkHHejXAAQgnAAglgPg");
	var mask_5_graphics_62 = new cjs.Graphics().p("AEqcWQi3hXiriFQjkixi2j6IgOgTQkGlvipnZQh5lQhEmCQgQhcgUiMIgQhkQhVixA+kdQAVhcA3h/IAJgVQBCihAfgzQAPgjAmgXQCOhSClgQQCtgoBFBPQAaAdAKAwQAIAbAUAhQAfAqA4AwIBrBSQA+AxAfArQAoA4ACBBQAQAvCzEEIACABQApBEBZB2IEuGcQEjGIB1DVQCWDcAMBMQACAJgBAFQg2CYg6COQhjDxhkC+IgWApQkTHyjbAAQgoAAglgQg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AE2dWQi9haiviKQjsi4i8kDIgOgTQkPl6iwnqQh+lbhImPQgQhfgWiQQgOhZgEgPQhai1BAkpQAVhfA3iEIAKgWQBDiqAdg0QAPglAngXQCThWCrgQQC0gpBGBTQAaAgAJAzQAHAdAUAiQAfAuA6AyIBuBXQBAA0AgAtQAoA6ADBEQAOAvC9ENIABACQAsBFBdB6QB+CqC+D+QEzGWB8DXQCfDlANBLQADAKgCAFQg6Ccg8CSQhoD6hoDEIgWAqQkfIGjfAAQgoAAgmgRg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AFDeXQjDhfi0iPQjyi+jDkLIgPgUQkXmFi4n7QiClmhMmcQgRhigYiWQgPhcgEgPQhgi5BCk0QAWhhA3iLIAKgXQBEixAcg3QAPgmAogYQCXhaCxgQQC7grBGBZQAbAiAIA2QAGAfAVAlQAfAwA7A1IByBcQBBA3AgAuQAqA9ACBGQAMAuDIEYIABACQAuBGBiB+IFKG1QFDGjCCDZQCpDuAOBLQACAKgCAFQg8Chg/CXQhtEChrDJIgYAsQkqIajjAAQgpAAgmgRg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AFQfXQjKhki4iSQj6jFjJkUIgPgUQkgmRi/oMQiGlxhRmpQgShkgZibQgQhggEgOQhmi+BEk/QAWhkA4iQIAJgYQBGi6Aag4QAPgoAqgaQCbhcC3gQQDCgtBGBeQAbAkAIA5QAFAhAVAnQAfAzA9A5IB0BfQBEA6AgAwQAqBAACBJQAKAtDTEiIABABQAxBIBmCCIFYHBQFTGyCJDbQCyD2APBLQACAJgCAGQg/CmhCCbQhxEKhvDQIgZAsQk1IvjnAAQgqAAgmgSg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EAFcAgXQjPhni9iXQkBjMjQkcIgPgVQkpmbjGodQiKl8hVm3QgThngaigQgRhkgFgNQhsjDBHlKQAWhmA4iXIAJgYQBHjCAZg6QAOgqAsgaQCghhC8gPQDJgvBHBjQAbAmAHA9QAFAiAVApQAfA3A/A7IB3BlQBFA8AhAyQArBCAABLQAJAuDeErIABACQAzBJBqCGQCMC1DbEYQFiG/CQDeQC7D+AQBLQADAKgCAFQhDCshECfQh3EThyDVIgZAtQlBJDjsAAQgqAAgngTg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EAFpAhXQjWhrjBicQkIjSjWklIgRgVQkxmnjNouQiPmHhYnEQgUhpgcilQgShogFgNQhzjHBKlVQAWhpA5icIAJgaQBHjKAYg8QAPgrAsgbQClhkDCgQQDQgwBHBoQAcAoAGBAQAEAkAWAsQAeA5BBA+IB6BpQBGBAAiAzQAsBFgBBOQAHAsDpE2IACACQA1BKBuCLIF1HYQFyHOCXDgQDEEHARBJQADALgCAFQhGCwhHCkQh7Ebh2DbIgaAvQlNJWjvAAQgrAAgngTg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EAF1AiYQjchxjGigQkOjYjdktIgRgXQk6mxjUo/QiUmShcnRQgVhsgeirQgShrgFgNQh5jLBLlgQAYhrA4ijIAKgbQBIjSAXg9QAOgtAtgdQCqhnDHgQQDYgyBHBuQAcAqAFBDQAEAnAWAtQAfA8BCBBIB8BuQBJBCAiA1QAtBHgCBRQAFAsD0FAIACACQA4BMBzCOQCVC8DuEoQGBHcCeDiQDNEQASBJQADALgCAFQhJC1hKCpQiAEjh5DgIgbAxQlYJqjzAAQgrAAgpgTg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EAGCAjYQjih1jLilQkVjfjkk1IgRgXQlDm8japRQiZmchgnfQgWhugfiwQgThvgGgMQh/jQBOlrQAXhuA5ioIAKgcIBekaQAOgvAvgdQCuhqDOgQQDeg0BIBzQAcAsAFBGQADApAWAvQAeA/BFBEIB/BzQBKBEAjA3QAtBKgCBTQADAsD/FKIACACQA6BNB3CSQCaDAD3ExQGRHqClDkQDWEYAUBIQADAMgCAFQhNC6hMCtQiFErh9DmIgbAyQllJ/j2AAQgsAAgpgUg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EAGPAkYQjoh4jQiqQkcjmjqk9IgSgYQlLnHjipiQidmnhknsQgXhwghi2QgUhzgGgLQiFjVBQl2QAYhwA5ivIAKgcQBKjjAUhBQAOgwAwgeQCzhvDTgPQDlg2BJB4QAcAvAEBJQADAqAWAyQAeBCBGBHICCB3QBMBHAjA5QAuBMgDBWQACArEKFUIACACQA9BPB7CWIGfH9QGgH4CsDmQDgEgAUBJQADALgCAFQhPDAhQCxQiJE0iADrIgcAzQlxKTj6AAQgtAAgpgVg");
	var mask_5_graphics_71 = new cjs.Graphics().p("EAGcAlZQjvh+jUiuQkjjsjxlGIgSgYQlUnSjppzQihmyhpn6QgYhygii7QgVh3gGgLQiLjZBSmBQAYhzA6i0IAJgeQBMjrAShCQAOgzAygfQC3hxDZgQQDsg3BJB9QAcAxAEBMQACAsAWA0QAeBFBIBKICFB8QBOBKAjA6QAvBPgEBYQAAArEVFeIACACQA/BQCACaQCjDIEKFBQGwIGCzDoQDpEqAVBHQAEAMgDAFQhSDEhSC2QiPE8iDDxIgdA1Ql8Knj/AAQgtAAgpgVg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EAGpAmZQpOk5m0pVQldnejvqEQimm8htoHQgZh1gjjBQgWh6gHgLQiRjdBUmMQAbh/BBjPQBNjzARhFQAOg0AzggQC7h1DfgQQFThPAJEbQABAuAXA2QAeBIBKBNICHCBQBQBMAkA8QAwBSgFBaQgCArEiFqQCWC5HrJLQHAIVC5DqQEbFlgRAlQhWDJhVC7QijFoiVEJQmHK7kDAAQguAAgpgWg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EAIFAmxQinhKiehoQmakQlbnIQiTjDiGjjQjClIigmHQiTlmh1mUQgehrgdhuQghh9gri9IgDgLQgWhqgLgTQgbgsgTgwQhdjRBHlOIAAAAQAYhyA2ixIARg1QAtiPAWhNQAQg2AQgfIAFgMQAVgxA0gfQBuhAB6geQBhgbBfgCQCDgTBFAwQAmATAcAhQAuA0AUBYIAGAeQAKAuAYAzIAOAYQAnA/A5A/QBABCAhAwIAcAdQBLBIAyBCQA0BNANBXQADALASAbQBDBcDpEIQBwB4DrEDQCfCmC7DPQC+DKCHCXQDaDjBZB4QARAeAUAgIAKAQQAvBCAtBCQBRBzAoBDQApBEgCAXQgRBDgTBAQgmCMgsCDQgnB2grBrQhgDshzC+QgeAxgfAvQlwI9kWAAQgzAAgxgTg");
	var mask_5_graphics_74 = new cjs.Graphics().p("EAJhAnMQiuhAiphmQmkkFl2nbQibjFiQjoQjOlOizmNQiilriKmbQgkhtgihvQgriFgxi6IgEgMQgZhjgOgcQgbgvgTgwQhnjTBJlbIAAAAQAYh0A5i4IARg2QAwiZAVhJQAPg2AXgfIAIgMQAbguA1gdQBzg+B/gaQBpgdBcAEQCCgIA5BKQAeAYAbAlQArA4AfBVIAKAdQASAvAaAvIAQAYQAvBCA1A/QA8BEAaA5QAKAOASARQBGBDBBBIQA5BJAdBUQAHAMATAYQBSBfD2D8QCDB8D0D1QC0CqC+DBQDTDKCLCPQEBDxBEBnQAKAfAUAmIAJAQQAqBCAvBNQBPB5AnBGQAnBDADAdQgHBGgKBCQgSCRgfCHQgaB8glBxQhSD0iBDEQggAzgjAuQl9Igk8AAQg4AAg3gRg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EAK8AnrQi1g2i0hlQmuj5mSnuQiijIiajuQjalRjFmVQiylwifmiQgphugohxQg0iNg5i2IgEgMQgbhegSglQgagygVgwQhxjVBMlnIAAgBQAZh2A7i+IARg3QAzijAUhGQAPg1AdgfIAKgMQAigqA3gcQB3g9CEgWQBxgdBaAJQCAAEAsBhQAXAeAaApQAoA8ApBUIAOAcQAbAvAcArIASAYQA3BEAxA+QA5BIASBBQAIAOAVAUICQCMQA9BFAvBRIAeAjQBiBgEDDxQCVCAD9DnQDKCtDBC0QDoDKCPCHQEnD+AvBXQAEAfATAsIAIASIBWCYQBNB/AnBKQAkBBAJAkQADBJgBBDQABCXgRCMQgOCCgfB1QhED9iODLQgjAygmAwQmKIBllAAQg8AAg8gOg");
	var mask_5_graphics_76 = new cjs.Graphics().p("EAMHAoKQi9gsi/hkQm4jsmuoCQiojKilj0QjnlWjWmcQjCl0i0mqQguhvguhyQg9iWhAizIgFgMQgdhYgVgtQgbg1gVgwQh7jYBOlyIAAgCQAah5A9jDIASg5QA2itAShDQAOg0AlggIAMgLQApgnA4gbQB7g7CKgSQB4geBXAPQCAAPAfB6QAQAjAZAuQAkBAA0BRIASAbIBCBYIATAXQBABHAsA9QA2BMALBJQAFANAYAYQA6A5BgBTQBABBBBBNIAjAjQBwBiEQDlQCoCEEGDaQDgCwDDClQD+DMCSB+QFPELAZBHQgCAfASAzIAHATQAfA/A0BiQBLCGAoBNQAhBAAOAqQANBMAIBEQAVCegECPQgCCJgYB5Qg3EGibDSQglAygqAwQmZHkmNAAQhAAAg/gMg");
	var mask_5_graphics_77 = new cjs.Graphics().p("EANHAopQjEgijJhiQnCjhnKoVQivjMivj5QjzlbjpmjQjSl5jImxQg0hxgzhzQhHiehGiwIgGgMQgghSgZg2Qgag4gVgwQiGjaBRl/IAAgCQAah8A/jJIASg6QA5i2ARhAQAOg0AsggIAOgLQAwgjA5gaQCAg5CPgPQB/geBVAUQB/AbASCTQAIAoAYAyQAiBEA/BPIAWAaIBLBUIAWAXQBHBJAoA+QAzBOADBSQACAMAbAbQA2A1BuBZQBFA8BSBKIAoAhQCABkEcDaQC7CIEODMQD2CzDGCYQETDMCWB2QF1EZAEA2QgIAgARA5IAHATQAZA/A2BsQBKCNAnBQQAfA/ATAxQAXBOARBGQAoCjAKCUQALCOgTB/QgoEOipDYQgnA0guAwQmoHGm4AAQhCAAhCgKg");
	var mask_5_graphics_78 = new cjs.Graphics().p("EAHkAnPQp5kkqoumQnkqanVulQiNkbiIksIhvj1QiRjdBUmNQAbh/BBjPQBNjzARhEQAOg0AzggQC7h1DfgQQFThQAJEcQABAuAXA2QAeBIBKBNICHCAQBQBNAkA8QAwBRgFBbQgCArGmEsQDxCsKrHTQKVHBECC5QGcEngRAlQgRAlAZBPQATA+A5B3QBHCSAnBUQBFCVArB4QB3FPgZELQghFWkLEDQm3GqnlAAQkMAAkaiCg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:-227.2,y:-432.1}).wait(46).to({graphics:mask_5_graphics_46,x:-227.2,y:-432.1}).wait(1).to({graphics:mask_5_graphics_47,x:-223.3,y:-424.9}).wait(1).to({graphics:mask_5_graphics_48,x:-219.3,y:-418.2}).wait(1).to({graphics:mask_5_graphics_49,x:-215.4,y:-411.7}).wait(1).to({graphics:mask_5_graphics_50,x:-211.6,y:-405.3}).wait(1).to({graphics:mask_5_graphics_51,x:-207.9,y:-398.9}).wait(1).to({graphics:mask_5_graphics_52,x:-204.2,y:-392.5}).wait(1).to({graphics:mask_5_graphics_53,x:-200.4,y:-386.1}).wait(1).to({graphics:mask_5_graphics_54,x:-196.7,y:-379.7}).wait(1).to({graphics:mask_5_graphics_55,x:-193.1,y:-373.3}).wait(1).to({graphics:mask_5_graphics_56,x:-189.4,y:-366.9}).wait(1).to({graphics:mask_5_graphics_57,x:-185.7,y:-360.5}).wait(1).to({graphics:mask_5_graphics_58,x:-182,y:-354.1}).wait(1).to({graphics:mask_5_graphics_59,x:-178.3,y:-347.7}).wait(1).to({graphics:mask_5_graphics_60,x:-174.6,y:-341.4}).wait(1).to({graphics:mask_5_graphics_61,x:-170.9,y:-335}).wait(1).to({graphics:mask_5_graphics_62,x:-167.3,y:-328.6}).wait(1).to({graphics:mask_5_graphics_63,x:-163.6,y:-322.2}).wait(1).to({graphics:mask_5_graphics_64,x:-159.9,y:-315.8}).wait(1).to({graphics:mask_5_graphics_65,x:-156.2,y:-309.4}).wait(1).to({graphics:mask_5_graphics_66,x:-152.6,y:-303.1}).wait(1).to({graphics:mask_5_graphics_67,x:-148.9,y:-296.7}).wait(1).to({graphics:mask_5_graphics_68,x:-145.2,y:-290.3}).wait(1).to({graphics:mask_5_graphics_69,x:-141.5,y:-283.9}).wait(1).to({graphics:mask_5_graphics_70,x:-137.9,y:-277.5}).wait(1).to({graphics:mask_5_graphics_71,x:-134.2,y:-271.1}).wait(1).to({graphics:mask_5_graphics_72,x:-130.5,y:-264.7}).wait(1).to({graphics:mask_5_graphics_73,x:-121.6,y:-261.5}).wait(1).to({graphics:mask_5_graphics_74,x:-112.6,y:-258.6}).wait(1).to({graphics:mask_5_graphics_75,x:-103.5,y:-256.1}).wait(1).to({graphics:mask_5_graphics_76,x:-92.7,y:-253.6}).wait(1).to({graphics:mask_5_graphics_77,x:-81,y:-251.1}).wait(1).to({graphics:mask_5_graphics_78,x:-68.8,y:-248.6}).wait(297));

	// 图层 2
	this.instance_23 = new lib.yld_5_1();
	this.instance_23.setTransform(-242,-469);

	this.instance_23.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-469,65.6,117.4);


(lib.瓶盖 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间71("synched",0);
	this.instance.setTransform(-50.6,-329.9,1,1,135,0,0,16.6,17.1);

	this.instance_1 = new lib.补间72("synched",0);
	this.instance_1.setTransform(-50.5,-329.9,1,1,0,0,0,16.5,17);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:16.5,regY:17,rotation:0,x:-50.5},9).wait(6).to({_off:false,regX:16.6,regY:17.1,rotation:135,x:-50.6},17).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({startPosition:0},6).to({_off:true,regX:16.6,regY:17.1,rotation:135,x:-50.6},17).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-353.3,47.4,47.4);


(lib.pao2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间93("synched",0);
	this.instance.setTransform(-26,328);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-14},14).to({startPosition:0},9).to({x:-26},12).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,297,114,62);


(lib.pao2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间70("synched",0);
	this.instance.setTransform(-74,699);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-97},15).to({startPosition:0},10).to({x:-74},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,679,43,40);


(lib._2_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_348 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(348).call(this.frame_348).wait(19));

	// pao2
	this.instance = new lib.pao2_2("synched",0);
	this.instance.setTransform(77.3,445.5,1,1,0,0,0,-14,320.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).wait(159).to({startPosition:3},0).to({_off:true},1).wait(18));

	// rili4
	this.instance_1 = new lib.补间92("synched",0);
	this.instance_1.setTransform(442,399);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(193).to({_off:false},0).to({x:436,y:391,alpha:1},7).to({_off:true},149).wait(18));

	// text4
	this.instance_2 = new lib.补间89("synched",0);
	this.instance_2.setTransform(414.2,270);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.补间90("synched",0);
	this.instance_3.setTransform(402.2,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},207).to({state:[{t:this.instance_3}]},7).to({state:[]},135).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({_off:false},0).to({_off:true,x:402.2,y:280,alpha:1},7).wait(153));

	// ico4
	this.instance_4 = new lib.补间87("synched",0);
	this.instance_4.setTransform(217.6,315);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.补间88("synched",0);
	this.instance_5.setTransform(217.6,308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},199).to({state:[{t:this.instance_5}]},6).to({state:[]},144).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(199).to({_off:false},0).to({_off:true,y:308,alpha:1},6).wait(162));

	// ico3
	this.instance_6 = new lib.补间83("synched",0);
	this.instance_6.setTransform(300.5,123.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.补间84("synched",0);
	this.instance_7.setTransform(311.5,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},177).to({state:[{t:this.instance_7}]},6).to({state:[]},166).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(177).to({_off:false},0).to({_off:true,x:311.5,y:126.4,alpha:1},6).wait(184));

	// rili3
	this.instance_8 = new lib.补间81("synched",0);
	this.instance_8.setTransform(455.9,65);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.补间82("synched",0);
	this.instance_9.setTransform(443.9,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},168).to({state:[{t:this.instance_9}]},7).to({state:[]},174).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168).to({_off:false},0).to({_off:true,x:443.9,y:53,alpha:1},7).wait(192));

	// text3
	this.instance_10 = new lib.补间85("synched",0);
	this.instance_10.setTransform(98.8,96.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).to({x:109.8,y:109.6,alpha:1},7).to({_off:true},153).wait(18));

	// rili2
	this.instance_11 = new lib.补间75("synched",0);
	this.instance_11.setTransform(468,-303.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.补间76("synched",0);
	this.instance_12.setTransform(468,-312.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},98).to({state:[{t:this.instance_12}]},6).to({state:[]},245).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({_off:true,y:-312.9,alpha:1},6).wait(263));

	// text2
	this.instance_13 = new lib.补间73("synched",0);
	this.instance_13.setTransform(436.5,-166.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.补间74("synched",0);
	this.instance_14.setTransform(436.5,-176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},93).to({state:[{t:this.instance_14}]},7).to({state:[]},249).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(93).to({_off:false},0).to({_off:true,y:-176.9,alpha:1},7).wait(267));

	// ico2
	this.instance_15 = new lib.补间77("synched",0);
	this.instance_15.setTransform(227.3,-108.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.补间78("synched",0);
	this.instance_16.setTransform(215.3,-114.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},117).to({state:[{t:this.instance_16}]},10).to({state:[]},222).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(117).to({_off:false},0).to({_off:true,x:215.3,y:-114.9,alpha:1},10).wait(240));

	// rili1
	this.instance_17 = new lib.rili2_1_1("synched",0);
	this.instance_17.setTransform(154,-413,1,1,0,0,0,-33,-203);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(85).to({_off:false},0).to({y:-423,alpha:1},13).to({_off:true},251).wait(18));

	// text1
	this.instance_18 = new lib.text2_1_1("synched",0);
	this.instance_18.setTransform(98.6,-284.9,1,1,0,0,0,-53,-219);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(81).to({_off:false},0).to({y:-294.9,alpha:1},12).to({_off:true},256).wait(18));

	// 瓶盖
	this.instance_19 = new lib.瓶盖();
	this.instance_19.setTransform(301,-422.9,1,1,0,0,0,-26.8,-329.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(69).to({_off:false},0).to({alpha:1},7).to({_off:true},273).wait(18));

	// 瓶子
	this.instance_20 = new lib.补间79("synched",0);
	this.instance_20.setTransform(302,-363.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.补间80("synched",0);
	this.instance_21.setTransform(302,-363.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},65).to({state:[{t:this.instance_21}]},7).to({state:[]},277).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(65).to({_off:false},0).to({_off:true,alpha:1},7).wait(295));

	// pao1
	this.instance_22 = new lib.pao2_1();
	this.instance_22.setTransform(346,-485.9,1,1,0,0,0,-97,699);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(47).to({_off:false},0).to({_off:true},302).wait(18));

	// z9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_209 = new cjs.Graphics().p("AgcBtQjphtDNh5QFHgFi4DYQgbAggmAAQgWAAgcgNg");
	var mask_graphics_210 = new cjs.Graphics().p("AhfAnQABgBAHgeIACgBQAlgQBGgtQA8gEAHAWQANAEgLAYIgBAEQAKAig/AWIgSAEQh1gNADgEg");
	var mask_graphics_211 = new cjs.Graphics().p("Ah1BvIABgBQgighBchtQA0gmAigXQAngeAVgEIADACQBBATg2BNIgPASQhWAyg/BOQgKALgNAAQgPAAgRgRg");
	var mask_graphics_212 = new cjs.Graphics().p("AiJDgQhqgxBxiwQAshHBChDQA9hBA1ggQCQgChKCoQg0B0iECfQgcAggmAAQgXAAgcgNg");
	var mask_graphics_213 = new cjs.Graphics().p("Ah5C4IgHgDQghgTgsg1IgYg4QgBgFAGgQQAJgeALgbQAohKA2g8IAKgMQBYhMBLAkQA5gCAtAsIACABQARAKAVATQAUAQADAPQALAjgsA3QgXAcgmAjIgEADQgOAagyAsQguAqgWAbQgMAJgWAMQgPAPgQAAQgZAAgdgng");
	var mask_graphics_214 = new cjs.Graphics().p("AjiC3IgFgQIgviaQgLhJADgEQACgBARgYQAWgnATgdQBHhjBDg3IAOgKQCBhTBYCOQA0A6AmB4IABAEQAMAUAaAjQAVAZgHAVQgLAvhNA2QgpAdg6AeIgGADQgQAWhNA3QhMA1gZAUQgOAHglAJQgEACgDAAQgfAAgkipg");
	var mask_graphics_215 = new cjs.Graphics().p("AlOCaQgOiJgDhgQgDhrAMAEQAFADAagfIA/hNQBnh+BQgvQEOihBhJuQAEAfAhA3QAXAngQAcQgiA7hvA0Qg9AehUAbQgQARhsBDQhoA/gbAOIhDALIgBAAQggAAgjlUg");
	var mask_graphics_216 = new cjs.Graphics().p("Aj/GEQgLgbgeghQgpgqgag5IgMgVQhThogbhUQgfhaAcgXQAIgEAbgfQAqgwApgmQByh4B4hFQDPh4CvCfQAnAsBEBhQAlA6AdBFQAVAjAlA2QAKALAGANQAMAZgEAWQgBBBhMA2QgVAPgbAOQhEAkhoAcIibBHIgQAGQhJArhJAlIgHABQgaAJgqAJQgJAEgHAAQgjAAgQhEg");
	var mask_graphics_217 = new cjs.Graphics().p("AjTGLQgQgWg2gXQhKgcgsgmIgWgOQiYhGg0hHQg4hMAqgyQAMgJAcgeQAtgyA5guQB8hyChhaQDjiBD0AuQAzARB0BgQA8A4AvBAQAkAnAqA1QALAOAJANQARAbAEAYQAaBShOBCQgWATgfARQhLAph8AeIi5A6IgVAFQg3Adh4A9IgHACQgiAOgpAMQgbAMgUAAQgkAAgNglg");
	var mask_graphics_218 = new cjs.Graphics().p("AisGwQgUgRhPgMQhrgOg/gTIgfgHQjdgkhLg5QhUg+A6hMQAPgTAdgdQAxgzBJg1QCHhsDJhvQD3iJE4hEQBAgJCjBgQBSA0BBA8QA0AqAvA1QAOAOALAPQAWAcALAaQA0BkhPBOQgXAYgjATQhSAwiQAfQhUAUiDAZIgaAEQgjAPipBUIgJAEQgnATgoAPQg9AbghAAQgXAAgJgOg");
	var mask_graphics_219 = new cjs.Graphics().p("AiHHaQgZgMhngBIjdAAQlEAAhqguQliiWYFrZQBMgkDTBgQDYBjB5CGQCPCdhkBtQh5CInWAjQgQABjiBxQi/BfgrAAQgFAAgDgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_graphics_209,x:246.8,y:469.2}).wait(1).to({graphics:mask_graphics_210,x:250.6,y:464}).wait(1).to({graphics:mask_graphics_211,x:254.7,y:461.4}).wait(1).to({graphics:mask_graphics_212,x:257.7,y:457.7}).wait(1).to({graphics:mask_graphics_213,x:257.6,y:451.3}).wait(1).to({graphics:mask_graphics_214,x:258,y:442.9}).wait(1).to({graphics:mask_graphics_215,x:258.4,y:434.3}).wait(1).to({graphics:mask_graphics_216,x:248.3,y:441}).wait(1).to({graphics:mask_graphics_217,x:238.7,y:446.7}).wait(1).to({graphics:mask_graphics_218,x:229.6,y:449.4}).wait(1).to({graphics:mask_graphics_219,x:220.6,y:451.6}).wait(148));

	// x9
	this.instance_23 = new lib.yld_2_9();
	this.instance_23.setTransform(183.2,434);
	this.instance_23._off = true;

	this.instance_23.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(209).to({_off:false},0).to({_off:true},140).wait(18));

	// z8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_194 = new cjs.Graphics().p("AkShUQABg2A+gZQAhgOAfgCQG8hOgXFQQgGBJhRASQhrAZhQAAQkYAAAGkXg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AhmD6QhOgdgwhCQgwg8gShdQgBgxA7hDQAfgYAdgRIA1gfQCVhwBXAmIAOAEQBNAUAYBCQAiA+AgCXQAFAvgPAjQgMAdgdARQhBBUhQABQgfAKgsAFQhBgBg8gUg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AglFcQhjgYhGhDQhLg+gmhmIAAgBQgBgwA3hrIA5hCQAZgaAYgcQCQjLBRAjQAJAAAJACQBnAMAUBWQAgA7BIDJQAMA4gEAtQgEAmgUAaQgPCPhLACQgcAVg4AOQgeADgeAAQgxAAgxgJg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AAUG8Qh2gShdhDQhlhAg6hxIAAAAQgDguA1iVIA1hbQAYgkAXgpQCIkmBMAfQALgBALACQCBAFARBpQAdA4BwD+QAUA9AFA4QAGAvgLAiQAhDKhEADQgZAhhGAXQg5AMg+AAQgkAAgkgEg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AA1IcQiLgMh0hFQh+hBhPh8IAAAAQgEgrAyjAQAZg2AZg8QAWgwAVg1QCBmBBKAbQANgCAMACQCagCAOB9ICyFkQAbBFAQBCQAOA5gDArQBUEEg/AFQgWArhTAhQhUAYhjAAIgogBg");
	var mask_1_graphics_199 = new cjs.Graphics().p("ABTJ7QihgGiKhGQiZhDhiiGIgBAAQgEgoAujrQAXhCAXhJQAVg6AUhBQB5ndBGAYQAOgDAOABQC1gJAKCQQAYAyDAFiQAiBPAaBLQAXBCAGAzQCFE/g5AHQgSA2hgAqQhtAmiLAAIgHgBg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AjpKUQiyhFh3iQIgBAAQgFgmArkUQAWhNAVhXQAThEAShOQByo5BCAUQAQgEAQABQDPgPAHCjQAVAvDoGUQApBWAlBWQAfBLAPA8QC2F6gzAIQgPBBhtA0Qh7AwikADQi2gBihhGg");
	var mask_1_graphics_201 = new cjs.Graphics().p("Aj6L5QjNhIiKiZIgBgBQgHgjAok+QAUhYAThlQAShPARhaQBqqUA+AQQASgFARABQDsgWADC2QATAsENHGQAxBeAvBhQAoBUAYBFQDnG0gtAKQgLBMh7A9QiGA6i4AIIgZABQi+AAishDg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AkNNeQjmhKifikIgBgBQgIgfAmloQARhjATh2QAPhXAQhnQBhrvA6ANQAVgGATAAQEGgegBDKQARAqE1H3QA5BnA4BrQAyBeAgBNQEZHugnAMQgJBXiIBGQiSBDjMAOIg6ABQjAAAi1g+g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AkfPCQkBhMiziuIgBgBQgJgdAimSQAQhtARiEIAcjVQBatLA2AJQAWgHAVAAQEggkgDDdQAOAmFdIqQBABuBDB5QA5BkAqBWQFKIpgiANQgFBiiVBQQidBNjhASQgsADgsAAQjGAAi8g7g");
	var mask_1_graphics_204 = new cjs.Graphics().p("AkyQmQkahOjHi4IgCgBQgKgaAgm8QAOh4AOiSIAajsQBSunAyAGQAYgIAXgBQE6grgHDxQAMAjGFJcQBHB2BNCDQBCBuAzBeQF7JkgcAPQgBBsijBaQioBWj1AXQg9AFg9AAQjKAAjDg4g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AlFSKQk0hQjbjCIgCgBQgLgYAcnlQAMiDANihIAXkCQBLwDAuADQAZgKAZgBQFUgygKEEQAJAhGtKOICmEMQBLB2A8BnQGrKegVARQACB4iwBjQizBgkKAbQhPAIhNAAQjPAAjIg2g");
	var mask_1_graphics_206 = new cjs.Graphics().p("AlYTtQlOhRjvjNIgCgBQgMgVAZoPQAKiNALivIAUkaQBDxeAqgBQAcgLAZgBQFwg5gOEYQAGAdHVLAIC4EeQBTCABFBwQHdLZgPASQAFCCi9BtQi/BqkeAgQhgAKheAAQjTAAjOg0g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AlrVRQlohTkEjXIgBgCQgOgRAWo6IATlVIAQkxQA8y5AlgFQAegLAbgCQGKhAgRErQAEAbH8LyIDKEwQBcCKBNB4QIPMTgKAUQAICNjKB2QjJBzk0AmQhxANhvAAQjXAAjTgyg");
	var mask_1_graphics_208 = new cjs.Graphics().p("Al+W0QmDhVkXjhIgCgCQgOgOATpjIAOlvIAOlIQA00UAhgJQAggMAdgCQGkhHgUE+QABAYIkMkIDbFDQBlCTBWCBQJANNgEAWQAMCYjXB/QjVB9lIArQiBAQiAAAQjcAAjZgxg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AmRYYQmehYksjsQgXgSAt1tQAs1xAegMQAhgNAfgDQG+hNgXFRQgCAZM5SoQM9SqADAbQAPCjjlCJQjgCGlcAvQiTAUiSAAQjgAAjdgvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_1_graphics_194,x:90.9,y:197.1}).wait(1).to({graphics:mask_1_graphics_195,x:92.7,y:206.5}).wait(1).to({graphics:mask_1_graphics_196,x:95,y:215.7}).wait(1).to({graphics:mask_1_graphics_197,x:97.9,y:225}).wait(1).to({graphics:mask_1_graphics_198,x:103.3,y:234.4}).wait(1).to({graphics:mask_1_graphics_199,x:109.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_200,x:115.2,y:253.2}).wait(1).to({graphics:mask_1_graphics_201,x:121.4,y:262.6}).wait(1).to({graphics:mask_1_graphics_202,x:127.6,y:272}).wait(1).to({graphics:mask_1_graphics_203,x:133.9,y:281.4}).wait(1).to({graphics:mask_1_graphics_204,x:140.1,y:290.9}).wait(1).to({graphics:mask_1_graphics_205,x:146.4,y:300.3}).wait(1).to({graphics:mask_1_graphics_206,x:152.7,y:309.8}).wait(1).to({graphics:mask_1_graphics_207,x:159,y:319.3}).wait(1).to({graphics:mask_1_graphics_208,x:165.4,y:328.8}).wait(1).to({graphics:mask_1_graphics_209,x:171.7,y:338.3}).wait(158));

	// x8
	this.instance_24 = new lib.yld_2_8();
	this.instance_24.setTransform(69.5,213.4);
	this.instance_24._off = true;

	this.instance_24.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(194).to({_off:false},0).to({_off:true},155).wait(18));

	// z7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_173 = new cjs.Graphics().p("Ak1ArQgqgcAUg1QAqhtBmgjQHGg2BGFhQAMA+hEAGQgyAFgxAAQkKAAjhiTg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AA+DGQjIgai/hsQgSgKgPgMIgKgHQgMgJgIgMQgMgQgBgTQgDgTADgVQAnhnCagiIAlgDQDcgPBqAnQBzAaBGBNQAYAZARAeQAOAWAJAbQADAIAAALQADAWABAXIAAAYQADBChNALIgOACQhCAJhCAAQg/AAg+gIg");
	var mask_2_graphics_175 = new cjs.Graphics().p("ABCDXQjkgdjlh9QgUgLgSgPIgKgJQgMgKgJgQQgOgVgCgTQgGgXAAgVQAjhiDPggIArgEQEWgOBkAkQCJARBVBRQAeAaAVAjQARAcAKAdQADAIgCANQAAAZgDAaIgEAaQgIBHhWAQIgPADQhVAPhWAAQhAAAhBgIg");
	var mask_2_graphics_176 = new cjs.Graphics().p("ABFDnQj/gfkLiOQgYgMgTgSIgKgKQgNgNgKgQQgPgcgFgVQgHgZgEgXQAfhbEDggIAxgDQFQgOBeAiQChAHBjBVQAkAcAYAnQAVAfAKAhQADAIgEAQQgCAcgIAcIgIAdQgSBMhfAUIgRAEQhlAVhrAAQhCAAhEgIg");
	var mask_2_graphics_177 = new cjs.Graphics().p("ABID3QkbgikxieQgbgOgUgVIgLgLQgOgNgLgVQgRgggFgWIgSg1QAchVE3geIA4gDQGJgPBZAfQC2gBByBYQAqAfAdAqQAYAjALAnQADAHgHASQgFAegMAgIgNAfQgcBQhnAZIgUAFQh0Ach9AAQhGAAhIgJg");
	var mask_2_graphics_178 = new cjs.Graphics().p("ABLEIQk4gllWiuQgegQgXgYIgLgNQgOgOgMgYQgTglgGgYQgMgfgMgZQAZhQFqgdIA+gDQHEgOBSAdQDOgKCABbQAwAhAgAtQAcAnALAsQADAIgIATQgJAhgPAiQgIASgKAQQgmBVhvAeIgWAGQiDAhiRAAQhJAAhMgIg");
	var mask_2_graphics_179 = new cjs.Graphics().p("ABOEYQlUgnl8jAQghgQgYgcIgMgMQgPgSgNgbQgUgqgIgYQgOgjgQgaQAVhKGfgbIBEgDQH+gOBMAZQDlgSCOBfQA3AiAjAxQAgArAMAwQACAJgKAVQgLAkgUAlQgKASgMASQgwBZh5AjIgYAHQiRAoijAAQhNAAhRgJg");
	var mask_2_graphics_180 = new cjs.Graphics().p("ABQEoQlwgpmijQQgjgSgagdIgNgPQgPgUgOgeQgWgvgJgaQgRglgTgcQAShEHTgaIBKgCQI3gPBHAYQD7gcCdBjQA9AkAnA1QAjAuAMA0QADAJgNAZQgOAmgYAnIgaAnQg6BeiBAnIgbAIQifAvi2AAQhRAAhWgKg");
	var mask_2_graphics_181 = new cjs.Graphics().p("ABTE5QmMgsnIjhQgmgTgcghIgNgQQgQgWgPghQgYgzgKgbQgTgpgXgcQAPg/IHgYIBQgDQJxgOBBAVQESgkCrBmQBDAmArA5QAmAxAOA5QACAJgPAdQgRAngcAqQgOAVgQAVQhFBhiJAtIgdAJQiuA0jHAAQhWAAhbgJg");
	var mask_2_graphics_182 = new cjs.Graphics().p("ABWFKQmogtntjyQgqgUgegkIgNgSQgRgXgQglIgkhUQgWgsgbgdQALg5I7gXIBYgCQKqgOA8ASQEnguC6BqQBJAoAwA9QApA1AOA9QADAJgRAgQgUApghAtQgQAXgSAVQhQBniSAxIgeAKQi8A7jYAAQhcAAhggLg");
	var mask_2_graphics_183 = new cjs.Graphics().p("ABZFeQnFgwoSkDQgtgVgggoIgNgSQgRgagSgnIgnhaQgYgvgfgfQAIgzJvgVIBegDQLkgNA2APQE+g2DIBtQBQAqAzBAQAtA5AOBBQADAKgTAiQgXAsglAwQgSAYgVAXQhZBqibA2IggAMQjKBBjqAAQhhAAhlgLg");
	var mask_2_graphics_184 = new cjs.Graphics().p("ABbFyQnggzo5kTQgwgXghgqIgOgUQgSgcgSgqIgqhgQgagygjggQAFgtKjgUIBkgCQMdgOAxANQFUg/DXBwQBWAsA3BFQAwA8APBFQADAKgWAlQgaAvgpAyQgUAagXAXQhjBwijA6IgjANQjYBHj9AAQhlAAhqgLg");
	var mask_2_graphics_185 = new cjs.Graphics().p("ABeGGQn8g1pfkkQgzgZgigtIgPgVQgSgegUgtQgehHgPgeQgcg2gnghQABgnLYgSIBqgDQNXgOArAKQFrhHDlB0QBcAtA7BIQA0BBAPBJQADALgYAnQgcAxguA2QgWAagZAZQhuB0isA/IglAOQjlBNkPAAQhqAAhvgLg");
	var mask_2_graphics_186 = new cjs.Graphics().p("ABgGZQoYg3qEk1Qg2gZglgxIgPgXQgTgfgUgwQgghMgQggQgeg4grgiQgCgiMLgRIBwgCQOSgOAkAIQGDhRDzB4QBiAvA+BMQA4BEAQBOQACAKgZAqQggA0gxA4QgZAcgbAbQh4B4i0BEIgnAOQjzBUkiAAQhuAAh1gMg");
	var mask_2_graphics_187 = new cjs.Graphics().p("ABjGtQo0g6qqlFQg5gbgmg0QgIgKgIgOQgTghgWgzQghhQgRghQghg8gvgjQgFgcM/gPIB3gDQPLgNAfAEQGYhZECB7QBpAyBCBPQA6BIARBSQADALgcAsQgjA3g1A7QgbAdgdAbQiCB9i9BJIgqAPQkABbk0AAQhzAAh6gNg");
	var mask_2_graphics_188 = new cjs.Graphics().p("ABmHCQpQg9rQlVQg8gdgog3IgQgZQgUgjgXg2QgihVgTgjQgjg+gzglQgIgVNzgPIB9gCQQFgOAZADQGvhjERB/QBuA0BGBTQA+BLARBWQADALgeAvQgmA6g5A9QgdAfggAdQiMCBjFBNIgsARQkPBhlGAAQh3AAh/gNg");
	var mask_2_graphics_189 = new cjs.Graphics().p("ABoHWQpsg/r1lnQg/gdgqg7IgRgaQgUglgYg5QgkhagUgjQgmhCg2gmQgMgQOngMICEgDIRSgOQHFhrEfCDQB1A1BKBXQBBBPASBaQADAMghAxQgoA8g+BBQgfAgghAdQiXCGjOBSIguASQkcBnlYAAQh8AAiFgNg");
	var mask_2_graphics_190 = new cjs.Graphics().p("ABrHqQqIhCsbl3QhCgfgsg+QgcgpgjhVQgmhfgVgkQgohFg6gnQgQgKRmgNQR4gOAOgDQHch0EuCGQB7A3BNBbQBFBSASBfQADAMgjA0QgrA/hCBDQjFDHknBtQkqBulrAAQiBAAiJgOg");
	var mask_2_graphics_191 = new cjs.Graphics().p("ACqHoIg4gGQplhGrnlYQgdgOgkgKQhAgWg5gnIgEgDQgrgYgkg5IgGgHQgsgzgagZIgHgHQg6gygmg1IAAgBQgBgmHbhbQCzgFGfgGIGogFQK3gIBQgDQC8gdBogIQEggkDSBKQB3ArBUBKIAMALQBOBKAfBaQACAFgDALQgBASgLAcQgPA2ggA2IgaAhIgPAQQg1A6hBA0QiaB9jLBRQg+AYhCAUQkEBQk0AAQh5AAiAgNg");
	var mask_2_graphics_192 = new cjs.Graphics().p("ADnHpIg6gGQpxhFr4liQgcgNgogGQg/gNhGgTIgFgBQg6gHgogfIgIgEIhagpIgIgEQhNgegShFIAAgBQAKhFGSitQB7gHHrgHIG5gFQKLgHCUgDIElgbQEkgwDZA6QB9AiBcBBIANAKQBXBCAsBWQADAFAAAKQAFATgCAaQADA5gRA9QgFALgSAWIgPATQgxA7hBA6QiZCGjNBXQg/AahDAWQkSBalFAAQhyAAh4gLg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AETHrIg8gGQp8hDsKltQgbgMgsgBQg+gEhSAEIgHAAQhKAKgrgKIgKAAQhGgBgogFIgKgBQhfgKAChSIAAgCQAVhjFKkAQBBgKI4gHIHLgGIM2gJQD/gMAmgEQEpg9DgArQCCAYBlA6IAPAIQBfA6A5BSQAEAFACAIQAMAVAHAYQAWA8gCBBQgCAKgTAdIgOAUQguA8hCA+QiYCQjOBdQg/AchFAYQkdBklZAAQhrAAhwgKg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AD9HqQqIhCsbl3Qg6gbi1A0IiTAsQhUAYgvAGQh+APAYhqQAfiAEClSQAMgQRcgKQRrgMAJgCQHch0EuCGQB7A3BNBbQBFBSASBfQADAMgjA0QgrA/hCBDQjFDHknBtQkqBulrAAQiAAAiKgOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(173).to({graphics:mask_2_graphics_173,x:393.8,y:186.4}).wait(1).to({graphics:mask_2_graphics_174,x:385.5,y:187.8}).wait(1).to({graphics:mask_2_graphics_175,x:377.6,y:189.3}).wait(1).to({graphics:mask_2_graphics_176,x:369.7,y:190.8}).wait(1).to({graphics:mask_2_graphics_177,x:361.9,y:192.4}).wait(1).to({graphics:mask_2_graphics_178,x:354.2,y:193.9}).wait(1).to({graphics:mask_2_graphics_179,x:346.4,y:195.4}).wait(1).to({graphics:mask_2_graphics_180,x:338.6,y:196.9}).wait(1).to({graphics:mask_2_graphics_181,x:330.8,y:198.4}).wait(1).to({graphics:mask_2_graphics_182,x:323,y:199.8}).wait(1).to({graphics:mask_2_graphics_183,x:315.2,y:201}).wait(1).to({graphics:mask_2_graphics_184,x:307.5,y:202.1}).wait(1).to({graphics:mask_2_graphics_185,x:299.7,y:203.3}).wait(1).to({graphics:mask_2_graphics_186,x:291.9,y:204.5}).wait(1).to({graphics:mask_2_graphics_187,x:284.1,y:205.6}).wait(1).to({graphics:mask_2_graphics_188,x:276.3,y:206.7}).wait(1).to({graphics:mask_2_graphics_189,x:268.6,y:207.9}).wait(1).to({graphics:mask_2_graphics_190,x:260.8,y:209}).wait(1).to({graphics:mask_2_graphics_191,x:256,y:209.3}).wait(1).to({graphics:mask_2_graphics_192,x:251.4,y:209.4}).wait(1).to({graphics:mask_2_graphics_193,x:248.6,y:209.3}).wait(1).to({graphics:mask_2_graphics_194,x:246.2,y:209}).wait(173));

	// x7
	this.instance_25 = new lib.yld_2_7();
	this.instance_25.setTransform(79,179.5);
	this.instance_25._off = true;

	this.instance_25.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(173).to({_off:false},0).wait(194));

	// z6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_153 = new cjs.Graphics().p("AkHgKQgmhzBxgaQDnhLChCHQCbCBi+BXQh1A2hXAAQimAAg+i9g");
	var mask_3_graphics_154 = new cjs.Graphics().p("AguD0QgrgEgkgNQgdgKgUgPQhQg7gih7Qgkh8Bog4IAMgGQBRgsBOgVQAfgIAbgCQAPgEAMACQAvADApAVQAnARAoAwIAVAXQBRBUgHBLQgGBHhVA4IgkAcQgmAngnAJQgbAHgfAEQgbADgYAAIgfgBg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AgaE5Qg1gDgrgOQgkgKgWgQQhihIgjiSQgliMBthSIAMgJQBUg/BWgoQAigQAegIQASgJANACQA4gBAvAbQAoASArBGIAWAdQBRBkgBBgQgCBahNBGQgQAVgQASQghA+gnAKQgfAIgnAFQghAEghAAIgfgBg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AgIF/Qg9gDgygOQgsgKgYgSQh0hVgkinQglidBxhuIANgLQBYhRBdg8QAlgYAhgNQAVgOAMACQBDgGA1AhQAnATAwBcIAWAkQBSB0AEB1QADBthGBUQgOAbgOAYQgbBTgoALQgiAKgvAGQgqAFgrAAIgdgBg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AAJHGQhFgDg4gOQg0gLgagUQiGhhgli9QglitB2iJIANgPQBbhjBlhQQAogfAlgTQAWgSANABQBMgKA7AnQAoAUAzByIAXArQBTCDAJCKQAICAg/BiQgMAigMAdQgWBpgoALQgkAMg4AHQg0AGg1AAIgbAAg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AAbIMQhOgCg+gOQg9gMgcgVQiXhugmjUQgmi9B7ikIAOgRQBdh2BuhjQArgnAngZQAZgXANABQBWgOBCAtQAnAUA3CIIAYAyQBTCTAPCfQAMCTg3BxQgKAngLAjQgQB/goAMQgnANhBAIQg9AHhAAAIgXAAg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AAtJTQhXgChFgPQhEgMgegWQiph7gojqQgmjOCAi+IAOgVQBhiIB1h3QAvguApgfQAcgcANABQBggSBIAzQAnAVA7CeIAZA4QBTCjAUC0QASCmgwB/QgIAugJAnQgLCWgpAMQgqAPhIAJQhFAJhKAAIgWAAg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AA/KZQhhgBhMgPQhMgNgggYQi7iHgokAQgmjeCEjaIAPgXQBjibB+iKQAxg2AtgkQAeghANAAQBqgWBOA5QAnAWA/CzIAaBAQBTCyAaDJQAWC5gpCNQgGA0gHAtQgFCsgpANQgtAQhRAKQhPAKhWAAIgPAAg");
	var mask_3_graphics_161 = new cjs.Graphics().p("ABQLgQhpgBhTgQQhUgNgigZQjNiUgpkWQgnjxCJjzIAPgaQBnitCFieQA1g9AvgqQAhgmANAAQB0gaBVA/QAnAWBCDKIAbBGQBUDCAeDeQAbDMghCcQgEA6gFAyQAADCgqANQgvAThaALQhZALhjAAIgIAAg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AhsMWQhcgOgkgbQjeiggqksQgokCCOkNIAQgdQBqjACNixQA3hFAygwQAkgrAOAAQB9geBbBFQAnAXBGDgIAbBMQBVDSAkDzQAgDfgbCqQgBBAgEA4QAGDYgqAOQgzAUhhAMQhlAMhwAAQhygBhagPg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AhsNdQhkgPgmgcQjwitgslCQgnkSCSkpIAQggQBtjSCVjFQA7hMA0g1QAngwAOgBQCHgiBhBLQAnAYBKD1IAcBUQBVDhApEJQAlDxgTC5QABBGgCA9QALDugqAOQg2AWhqANQhrAOh6AAQh7gBhggPg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AhvOjQhrgPgpgeQkCi5gslZQgokiCWlEIARgjQBxjkCdjYQA9hUA3g7QAsg1AMgBQCRgmBoBRQAmAYBOEMIAdBaQBVDxAvEeQAqEEgMDHQACBMAABDQAQEEgqAPQg4AXhzAOQhyAPiDAAIgIAAQh/AAhkgQg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Ah1PqQhzgQgrgfQkTjGgulvQgokzCbleIARgmQB0j3CljsQBAhbA6hBQAug6APgBQCYgqBuBXQAnAZBSEhIAdBhQBWEBA0EzQAvEXgFDVQAEBTACBHQAWEbgqAPQg8AZh7APQh6AQiLAAIgJAAQiIAAhqgPg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Ah7QxQh8gRgtggQkkjTgvmFQgplDCgl5IASgpQB3kKCsj/QBEhjA8hGQAxg/APgBQCigvB1BdQAmAaBWE4IAeBnQBWERA5FHQA0ErACDjQAHBZAEBNQAbEwgrAQQg+AbiDAQQiBAQiVABIgRAAQiMAAhtgPg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AiCR3QiDgRgvgiQk3jfgvmbQgqlTClmVIASgsQB6kcC1kSQBGhrA/hMQA0hEAPgBQCsgzB7BjQAmAbBaFNIAfBuQBWEhA/FcQA4E+AKDxQAJBfAFBTQAhFGgrARQhBAciMARQiIARidACIgaAAQiQAAhxgQg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AiIS+QiLgSgxgjQlIjsgxmxQgqlkCpmwIATguQB9kvC9kmQBKhyBBhSQA3hIAPgCQC2g3CBBpQAmAcBdFjIAgB1QBXEwBEFyQA9FQAREAQALBlAHBYQAmFcgrARQhEAeiUASQiQATimABIgjAAQiTAAh0gPg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AiPUEQiTgSgzgkQlaj5gynHQgql1CunKIATgyQCAlBDFk5QBNh6BDhXQA6hOAPgCQDAg7CIBvQAmAcBhF5IAhB8QBXFABJGHQBCFjAYEOQANBrAJBdQAsFzgsASQhHAficAUQiXATivACIgkAAQicAAh6gQg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AiWVLQibgTg1gmQlskFgyndQgrmFCznmIAUg0QCDlUDMlNQBQiBBGhdQA9hTAPgCQDKg/COB1QAmAdBlGPIAhCCQBYFQBPGcQBHF2AfEdQAPBxALBiQAwGJgrASQhKAhilAVQieAUi4ACIguAAQifAAh9gPg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AicWSQijgUg3gnQl+kTg0nyQgrmWC4oBIAUg3QCHlmDUlgQBTiKBJhiQA/hXAPgDQDUhECUB8QAmAeBpGlIAiCJQBYFgBUGwQBMGKAmEqQASB3AMBoQA2GfgsATQhMAiiuAWQilAVjBADIg3AAQiiAAiAgPg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AijXYQirgUg5gpQmPkfg1oJQgsmmC8obIAVg6QCKl5Dcl0QBWiRBLhoQBChcAQgDQDehICaCCQAmAfBsG6IAjCQQBZFwBZHFQBRGdAuE4QATB+AOBtQA8G1gsATQhQAki2AXQisAWjKADIg6ABQipAAiGgQg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AiqYfQizgVg7gqQmhksg2ofQgsm2DBo3QCRmpD1mmQBZiZBOhtQBFhiAQgDQDohMCgCIQAmAfBwHRQBqG2ByI6QB3JdA5GQQBBHLgtAUQhSAli+AYQi0AXjTAEIhDAAQitAAiJgPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_3_graphics_153,x:353,y:-88.8}).wait(1).to({graphics:mask_3_graphics_154,x:351.9,y:-81.5}).wait(1).to({graphics:mask_3_graphics_155,x:350.8,y:-74.4}).wait(1).to({graphics:mask_3_graphics_156,x:349.8,y:-67.4}).wait(1).to({graphics:mask_3_graphics_157,x:348.8,y:-60.4}).wait(1).to({graphics:mask_3_graphics_158,x:347.9,y:-53.4}).wait(1).to({graphics:mask_3_graphics_159,x:346.9,y:-46.4}).wait(1).to({graphics:mask_3_graphics_160,x:346.1,y:-39.4}).wait(1).to({graphics:mask_3_graphics_161,x:345.2,y:-32.4}).wait(1).to({graphics:mask_3_graphics_162,x:344.5,y:-25.4}).wait(1).to({graphics:mask_3_graphics_163,x:343.8,y:-18.4}).wait(1).to({graphics:mask_3_graphics_164,x:343.4,y:-11.4}).wait(1).to({graphics:mask_3_graphics_165,x:343.3,y:-4.4}).wait(1).to({graphics:mask_3_graphics_166,x:343.2,y:2.6}).wait(1).to({graphics:mask_3_graphics_167,x:343.2,y:9.6}).wait(1).to({graphics:mask_3_graphics_168,x:343.1,y:16.6}).wait(1).to({graphics:mask_3_graphics_169,x:343.1,y:23.6}).wait(1).to({graphics:mask_3_graphics_170,x:343,y:30.6}).wait(1).to({graphics:mask_3_graphics_171,x:343,y:37.6}).wait(1).to({graphics:mask_3_graphics_172,x:343,y:44.6}).wait(1).to({graphics:mask_3_graphics_173,x:342.9,y:51.6}).wait(194));

	// x6
	this.instance_26 = new lib.yld_2_6();
	this.instance_26.setTransform(314.5,-74.6);
	this.instance_26._off = true;

	this.instance_26.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(153).to({_off:false},0).wait(214));

	// z5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_137 = new cjs.Graphics().p("AgUD2Qing7AajDQAYi2COhEQDNCIg5EOQgXBvhVAAQgeAAgjgNg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AgTELQiPgmhAh4QgNgYgEgdQgEgdAFghQAEgeAKgaQAJgYAPgaQAWgzA7gpQA2gtBKgbQAcALAZANQBeAuAyBDQAnAhAEArQAEBnglBqQgGARgHAPQguBjhnAAQghAAgkgKg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AgUEgQilgihsh+QgWgYgHgiQgIghAFgoIAAgBQAFgjAQggQALgZAWggQAbg0BVgrQBGgtBcgbIBDATQB7AlBFA8QA/AfADAuQgFCAg1B2QgJATgLARQhDB0iFAAQgiAAgkgIg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AgUE1Qi7gdiYiEQgfgagMgmQgLglAGgwIAAgBQAGgpAVgkQAOgcAeglQAeg2BwgsQBWgsBugbQApAGAoAIQCXAbBZA1QBYAdgBAwQgNCbhFCBQgMAWgOATQhaCDilAAQghAAgigFg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AgVFJQjRgZjEiJQgogbgPgqQgQgqAIg4IAAAAQAGgvAbgpQARgdAlgsQAig2CKgvQBngrCAgbQAuADAwAGQCzARBuAvQBvAagCAzQgWC2hWCMQgPAYgRAVQhxCUjGAAQggAAgfgEg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AgVFeQjogUjwiQQgwgcgUguQgTguAIhBIAAgBQAHgzAhguQATgeAsgxQAmg4ClgyQB3gqCTgbIBrAEQDQAICBAoQCIAYgFA1QgeDRhmCXQgSAagUAXQiLCljoAAQgcAAgbgCg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AgWFzQj+gQkciVQg5gegXgyQgYgyAKhJIAAgBQAHg5AmgyQAXggAzg3QAqg5DAg0QCGgqCmgaQA6gCA+AAQDtgBCUAhQCgAWgGA4QgnDrh2CiQgVAcgYAaQikC2kNAAIgtgBg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AgXGLQkUgLlIibQhCgfgbg2Qgbg3AKhQIAAgCQAJg+Arg3QAZgiA7g9QAug6Dag2QCXgpC4gaQBAgFBFgCQEJgLCpAbQC4ATgJA6QgvEGiHCtQgYAfgbAcQi/DHkxAAIgiAAg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AgXGlQkqgHl0ihQhLgggfg6Qgfg7ALhYIAAgCQAJhEAxg8QAcgjBChDQAyg7D1g4QCmgpDKgaQBHgHBNgFQElgUC8AUQDRARgLA9Qg4EfiXC5QgbAhgeAeQjbDalVAAIgWAAg");
	var mask_4_graphics_146 = new cjs.Graphics().p("Ar4EYQhUgigjg+Qgjg/ANhiQAKhKA2hAQAfglBJhJQA2g8EPg7QD4g1E8gdQFCgeDQANQDpAOgOBAQhLFwjcDSQj2Drl8AAQlDAAmliog");
	var mask_4_graphics_147 = new cjs.Graphics().p("AhPH0Qk3gBl4iSQgsgRghgXQghgYgTgfQgMgSgHgWQgTg2AKhJQAIg8AjgyQAMgRAPgSQASgVAgghIA7g/QAmgtB/g0QBDgeBXgbQCGgwCYgjQCGgjCRgWQFHg0DkAcQB+AMA+AeQAtAUgBAeQgDA0gIA0QgSBkglBeQgwB0hJBlQgnA1guAuQg3A4g+AtQj4C2leAAIgTAAg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AsGGoQgtgRgkgYQgkgXgWgfQgNgSgJgWQgVg4AKhNQAIg/Ang2QAMgRAQgTQAUgVAhghIA9hEQApgyB5hBQBDgnBUglQCHhDCVgwQCJgzCSgfQFLhJD5AqQB8ARBIAlQArAVAFAfQAFA0gDA4QgJBmgkBoQgtB4hLBuQgnA5gvAyQg3A8hAAyQkHDRlyAOQgkACglAAQktAAlaiCg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AsSHtQgvgRgogXQgngXgYgfQgOgTgKgWQgYg5ALhSQAIhBAqg4QAMgRASgUQAWgYAigjQAWgVApgyQAsg3BzhOQBDgxBQgsQCIhWCTg+QCMhDCSgoQFQhfENA5QB7AWBRAsQArAWAJAfQAOA0ACA8QgBBpgiBwQgqCAhNB1QgoA8gwA3Qg3A/hBA4QkQDml6AiQhHAHhJAAQkgAAlAh1g");
	var mask_4_graphics_150 = new cjs.Graphics().p("AsgIwQgwgRgsgXQgpgVgagfQgRgTgLgXQgbg7AMhWQAJhEAsg6QANgRAUgWQAWgZAkgjQAVgXAsg1QAvg8BthbQBDg7BNg0QCJhpCQhMQCPhSCTgyQFVh0EgBIQB6AaBaAzQArAXAPAhQAVA0AHA+QAIBrghB6QgmCFhQB+QgoBAgxA7Qg4BEhDA7QkXD+mCA0QhnAQhqAAQkUAAkshsg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AsuJzQgzgSgvgWQgsgVgcgfQgTgTgLgYQgeg8AMhaQAJhGAwg9QANgRAVgXQAYgaAlgkQAUgXAvg8QAyg/BohoQBDhFBJg8QCJh8COhaQCShiCTg6QFbiKE0BWQB5AfBiA7QArAXAUAiQAdA0AMBBQARBuggCDQgjCKhRCHQgpBEgyA/Qg5BIhEBAQkfEUmMBHQiCAaiJAAQkKAAkahjg");
	var mask_4_graphics_152 = new cjs.Graphics().p("As+K1Qg0gSgygWQgwgUgegfQgUgUgNgYQghg+ANhdQAJhKAzg+QAOgRAXgYQAZgcAmglQATgWAzhCQA0hGBihzQBDhOBGhFQCKiPCLhnQCVhyCUhEQFfifFJBlQB3AjBsBCQApAZAaAiQAlA0ARBFQAaBxgfCMQgfCPhUCQQgpBHgzBDQg5BMhGBGQkoEpmTBbQieAlikAAQkBAAkNhcg");
	var mask_4_graphics_153 = new cjs.Graphics().p("Au6LPQhUghgjg+QgjhAANhhQAKhMA2hBQAfglBJhIQAmgrC2j9QDPkQDJisQJ3ocJhF+QBnBAAkB5QAjBzgdCVQgdCUhWCZQhYCgiGCNQkwE/mbBuQi4Axi+AAQkuAAk4h9g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_4_graphics_137,x:190.4,y:29}).wait(1).to({graphics:mask_4_graphics_138,x:198.5,y:28.7}).wait(1).to({graphics:mask_4_graphics_139,x:206.8,y:28.5}).wait(1).to({graphics:mask_4_graphics_140,x:215,y:28.3}).wait(1).to({graphics:mask_4_graphics_141,x:223.2,y:28.2}).wait(1).to({graphics:mask_4_graphics_142,x:231.5,y:28}).wait(1).to({graphics:mask_4_graphics_143,x:239.7,y:27.8}).wait(1).to({graphics:mask_4_graphics_144,x:248,y:27.2}).wait(1).to({graphics:mask_4_graphics_145,x:256.2,y:26.5}).wait(1).to({graphics:mask_4_graphics_146,x:264.4,y:25.6}).wait(1).to({graphics:mask_4_graphics_147,x:266.6,y:18.9}).wait(1).to({graphics:mask_4_graphics_148,x:268.9,y:12.4}).wait(1).to({graphics:mask_4_graphics_149,x:271.6,y:6}).wait(1).to({graphics:mask_4_graphics_150,x:274.5,y:-0.2}).wait(1).to({graphics:mask_4_graphics_151,x:277.5,y:-6.3}).wait(1).to({graphics:mask_4_graphics_152,x:280.6,y:-12.3}).wait(1).to({graphics:mask_4_graphics_153,x:283.8,y:-18.3}).wait(214));

	// x5
	this.instance_27 = new lib.yld_2_5();
	this.instance_27.setTransform(204.5,-74.6);
	this.instance_27._off = true;

	this.instance_27.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(137).to({_off:false},0).wait(230));

	// z4 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_98 = new cjs.Graphics().p("Aiyh4QASgiAngEQFQhaANEJQAHCWipAMQgiACgeAAQlQAACcktg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AiCDLQjEhAA4i3QABgZAMgbQALgXAXgQQAPgJATgFQB/gsBvgOQBPgCA0AdQAhAKAMAaQAOARANAYQAMAYAIAeIACAFQAIAfABAZQABAZgIATQgOAcgmAgQgsAhhGATIgcAIQhRAXg6AFQgVAEgRAAQgUAAgPgFg");
	var mask_5_graphics_100 = new cjs.Graphics().p("Ah5D0Qj9hLAhi2QgHgdAMggQALgbAcgVQARgMAYgJQCHg4CSgoQBcgOBCAPQAuAAAMAYQAUAOAVAZQATAYAQAhIACAFQARAiAGAfQAHAegHAVQgNAdgwAvQgyArhNAiIgfAOQhcAqhCASQgoARgaAAQgLAAgJgDg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AhpEjQk4hVAKi4QgOgfAMgkQALgfAigbQATgPAbgMQCQhEC0hDQBqgaBPADQA8gLAMAVQAZALAeAaQAaAZAYAjIADAGQAZAlALAjQANAjgGAbQgMAdg5A8Qg4A2hVAwIgjAVQhmA9hKAfQg2AegeAAQgIAAgGgCg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AhYFYQlzhggNi3QgWglAMgoQAMgiAnghQAVgRAfgQQCYhPDaheQB0gmBegLQBJgVAMAUQAeAHAnAbQAhAZAfAmIAEAGQAhAoARAoQASAngFAfQgKAehDBKQg/BBhbA/IgmAbQhyBQhUAsQhBAtggAAQgGAAgEgCg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AhIGOQmthqgki3QgegqANguQALgjAtgoQAYgTAhgUQCihbD8h4QCBgyBsgYQBXggALASQAlAEAvAcQAoAZAmApIAGAGQAoArAXAsQAYAsgFAjQgIAfhNBaQhFBKhiBNIgqAiQh9BkhcA5QhMA6giAAIgJgBg");
	var mask_5_graphics_104 = new cjs.Graphics().p("Ag4HFQnnh1g7i2QgmgvANgyQAMgpAygsQAagVAlgYQCqhnEgiTQCNg+B6glQBkgqAMAPQAqABA3AdQAvAaAuArIAHAHQAwAuAcAwQAeAxgDAmQgIAghWBpQhLBVhqBbIgtAoQiIB3hkBGQhYBKgjAAIgIgBg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AgnH7Qoih/hSi2QgugyAOg3QALgtA5gxQAbgZApgbQCzhzFCitQCbhKCHgyQByg0AMAMQAvgCBAAeQA2AaA1AuIAIAHQA5AxAhA1QAkA1gDArQgGAghfB4QhSBfhxBqIgxAuQiSCLhsBTQhmBXgjAAIgGgBg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AgXIyQpciKhpi1Qg2g3AOg7QAMgxA+g5QAdgZAtgfQC8h+FkjIQCohWCVg/QB/g/AMAKQA1gFBIAeQA+AbA8AxIAKAHQBAA0AnA5QApA6gBAvQgFAghpCHQhYBqh5B4Ig0A1QidCeh0BgQhxBmgkAAIgGgBg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AgHJqQqWiUiAi1Qg+g7APhAQALg0BEg/QAggeAvggQDFiLGIjiQC0hiCjhMQCNhKAMAIQA6gIBRAfQBEAbBFAzIAKAIQBIA4AsA9QAwA/gBAyQgEAhhyCWQheB0iACHIg4A7QioCxh8BtQh8B1glAAIgGgBg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AAIKiQrQifiWi0QhGg/APhGQAMg3BJhFQAiggAzgmQDOiVGqj8QDBhuCxhaQCbhTALAGQBAgMBaAgQBLAbBMA2IALAJQBQA6AyBBQA1BEAAA2QgCAih8CkQhkB/iHCWIg8BBQizDEiEB6QiHCEgoAAIgFgBg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AAYLaQsKiqitizQhNhEAOhKQANg7BOhLQAkgiA3gqQDWigHNkYQDOh6C/hmQCoheAMAEQBFgQBiAhQBTAdBTA4IANAJQBXA9A4BGQA6BIACA6QgBAiiGCzQhqCMiPCiIg/BIQi+DYiMCHQiSCSgpAAIgFgBg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AApMTQtEi1jEizQhWhIAPhOQANg/BUhRQAmgkA6guQDfitHwkxQDbiGDNh0QC2hoALABQBLgSBqAiQBaAcBbA7IANAKQBgBAA9BKQBABNACA9QABAkiPDBQhxCXiWCwIhCBOQjJDriUCUQieChgqAAIgEAAg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AA5NLQt+i/jbiyQhehNAQhTQAMhCBahXQDBi5KgmkQDniSDbiAQDDhzAMgBQBQgWBzAjQBoAfBqBFQBnBEBDBOQBGBSADBBQACAkiZDQQiQDCjKDzQjUD+icChQipCwgrAAIgEgBg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AA0N6QhhgOhdgQQkGgsjJg+QjSg/iKhKQhtg4g8g5QgjgggUghQghg1AKg2QAGgjAYglQAcgoA1gxQDRjALLm5QDziXDsiKQDEhyAZgJQBCgVBTAJQAcAEAgAIQAYAHAZAJQA8AWA+AkQAaAPAZASQAfAUAaAVQApAhAdAhQAXAXASAeQA3BNAGBBIAAAQQgEAziWDSQg6BThDBaQhrCLiACZQhoB9hfBoQhqB0hcBZQi0Czg3AAIgBAAg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AiZOWQkVggjXhCQjahEiRhXQhvhBg9hBQgjgjgUgkQggg5AJg4QAGgnAZglQAegpA7g0QDijIL1nNQD+icD+iTQDEhyAogRQBHgZBXACQAeACAiAJQAaAHAaAJQBAAXBBAnQAbAQAbASQAgAWAbAXQArAkAbAkQAVAXAPAkQAxBQABBIIAAARQgKBBiTDTQg8BahGBfQhvCWiGCgQhuCDhnBsQhwB4hmBcQi5CxhFAHQhmgJhjgLg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AipPRQkjgUjlhHQjihHiXhmQhyhIg+hKQgjgmgUgnQggg9AJg7QAGgrAagkQAfgqBCg3QDzjPMgniQEJiiEQicQDDhxA2gZQBNgdBcgFQAgABAkAJQAaAGAcAKQBEAYBEApQAdARAbATQAhAYAdAZQAtAoAZAmQAUAXALApQAqBUgDBPIAAARQgQBQiQDUQg+BghIBjQh0CjiMCnQhzCJhwBxQh3B8hvBfQi8CthVAOQhrgChpgHg");
	var mask_5_graphics_115 = new cjs.Graphics().p("Ai6QLQkygHjxhNQjrhKieh1Qh0hPg/hTQgigogVgrQgghCAJg8QAGgvAcglQAggqBIg6QEDjXNLn2QEUinEiilQDEhxBDghQBSghBigMQAhAAAmAIQAcAHAeAKQBGAYBIAsQAeASAdAVQAiAZAeAaQAvAsAXAoQASAZAIAuIAAAAQAkBYgHBUIgCATQgWBeiNDWQg/BmhKBoQh5CviSCtQh5CPh3B2Qh+B/h4BiQjBCrhkAVQhGAChIAAIhRgBg");
	var mask_5_graphics_116 = new cjs.Graphics().p("AsLP0QjyhNimiDQh1hXhBhcQgigrgUgtQgghHAIg+QAGgyAdglQAjgrBNg+QEUjeN2oMQEfirE0iuQDDhxBSgpQBYglBmgSQAigCApAIQAdAGAfALQBKAZBLAuQAgAUAeAWQAkAaAeAcQAxAwAWArQAQAYAFAzIAAABQAdBbgLBbIgDAUQgcBsiJDYQhBBthNBsQh+C6iYC0Qh+CUh/B8QiFCDiBBlQjFCohzAcQh1AJh1ADIghAAQksAAjzhOg");
	var mask_5_graphics_117 = new cjs.Graphics().p("As4QwQj7hQisiRQh4hfhBhkQgigugUgxQgghKAIhCQAGg1AegmQAkgrBUhBQEkjlOhogQEqiyFGi3QDDhwBggxQBdgpBrgZQAkgDAqAIQAfAGAhALQBNAaBPAxQAhAUAfAXQAlAcAfAeQA0AzATAuQAPAYABA5IAAABQAXBfgQBhIgDAUQgiB7iGDZQhDBzhOBzQiEDFidC5QiECciHCAQiMCHiLBnQjICkiDAlQh5AOh7AIQg3ACg1AAQkPAAjhhJg");
	var mask_5_graphics_118 = new cjs.Graphics().p("AtnRrQkDhUizifQh6hmhChtQghgygVgzQgfhPAHhDQAGg6AfglQAmgtBahDQE1jtPLo1QE2i2FXjBQDEhvBug5QBiguBwggQAlgEAtAIQAgAGAiAMQBRAaBSAzQAjAWAfAYQAnAeAgAfQA2A4ARAvQANAZgBA+IAAABQAQBjgUBnIgEAVQgoCKiDDaQhFB6hQB4QiJDPijDBQiJChiQCGQiSCKiUBrQjMChiSArQh+AViBAMQhTAHhQAAQj+AAjYhHg");
	var mask_5_graphics_119 = new cjs.Graphics().p("AuWSmQkLhXi6iuQh8huhEh1Qggg1gUg2QgghTAHhGQAFg9AhglQAoguBfhHQFHjzP1pKQFBi7FqjLQDDhuB8hCQBogyB0gmQAngFAvAIQAhAGAkALQBVAcBVA1QAkAXAhAZQAoAgAgAhQA5A7APAyQALAZgEBEIAAAAQAJBngYBuIgEAVQguCZiBDbQhGCAhTB+QiNDaiqDIQiOCniYCLQiZCNidBuQjQCeihAzQiDAaiHARQhsAMhmAAQjyAAjRhFg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AvHThQkUhbjBi8Qh+h1hFh+Qggg4gUg5QgfhXAGhIQAFhCAiglQAqguBlhKQFXj7QhpfQFLjAF8jUQDDhtCKhKQBug2B5gtQAogHAxAIQAjAGAmAMQBXAcBZA4QAmAYAhAaQAqAhAhAjQA7A/ANA1QAKAYgIBKIAAAAQADBrgdB0IgFAWQg0Coh9DcQhICGhVCDQiSDmiwDOQiUCtifCQQigCRinBxQjTCaivA7QiKAgiNAVQiCASh5AAQjpAAjMhDg");
	var mask_5_graphics_121 = new cjs.Graphics().p("Av6UbQkchejIjKQiAh+hGiGQggg7gUg8QgfhbAGhLQAFhFAjglQAsgvBrhNQFokDRLpzQFXjFGNjdQDDhtCZhSQBzg7B9gzQAqgIA0AIQAjAFAoANQBbAcBcA7QAnAZAjAcQArAiAiAlQA9BCALA4QAIAYgLBPIAAABQgEBuggB6IgGAYQg6C2h6DeQhKCMhXCIQiXDxi2DVQiZCzioCVQimCViwBzQjYCYi+BCQiOAliTAaQiVAZiLAAQjkAAjJhDg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AwtVVQkkhhjPjZQiCiFhHiPQggg9gUhAQgfhgAGhMQAFhJAkgmQAtgvByhQQF4kKR2qIQFijLGfjmQDDhsCnhaQB4g/CCg6QAsgJA1AHQAlAGAqANQBeAdBfA9QApAbAkAcQAsAkAjAmQA/BHAJA5QAHAagPBUIAAABQgJBxglCBIgHAYQhADFh3DfQhMCThZCNQicD9i7DbQifC5iwCaQitCYi5B3QjcCUjNBJQiTAsiZAeQinAgiaAAQjhAAjHhDg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AxhWPQkrhkjWjoQiEiMhJiYQgfhAgUhDQgfhkAFhPQAFhMAlgmQAvgwB4hUQGJkRShqcQFtjQGxjvQDDhsC0hiQB/hDCHhBQAtgKA3AHQAmAFArANQBiAfBjA/QAqAcAlAdQAtAmAkAoQBCBKAHA8QAFAagSBZIAAABQgQB2gpCHIgIAZQhGDTh0DgQhNCahbCTQihEHjCDhQikDAi4CfQi0CcjCB5QjgCRjdBRQiYAxifAjQi2AniqAAQjeAAjHhDg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AyUXJQk0hojdj2QiGiUhKigQgfhDgUhGQgfhoAFhRQAFhRAmgmQAxgwB+hXQGakZTLqxQF4jVHDj4IGGjWQCEhHCLhHQAvgMA5AHQAoAFAtAOQBlAfBmBCQAsAdAlAeQAvAnAlAqQBEBOAFA/QADAZgVBfIAAABQgXB5gtCOIgIAaQhMDhhxDiQhPCgheCYQimETjHDoQiqDFjACkQi6CgjMB8QjjCOjsBYQidA3ilAoQjGAui4AAQjcAAjHhDg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AzIYDQk8hsjkkEQjAjbhGj4QgehtAEhTQAFhUAngmUAEtgEkAwwgagQBQgVBzAiQBoAgBqBFQBnBDBDBOQBGBSADBBQABAagYBkQgdB+gyCUQiPGtjqGFQk9IRmyFvQoaHGqsCwQjUA3jFAAQjcAAjIhEg");
	var mask_5_graphics_126 = new cjs.Graphics().p("AzFXwIgIgDQk0h4jgkCQhbhphBhwQhIh9gmiBIgJgjQgXhaAGhDQAIhRAsgoUAEwgEZAp6gW7QBNgoBSglQBcgqBegpIB5g2QAlgHAsAEQAzAIA5AVIAiAOQBQAlBQA+QBVBBA6BKIAMAQQBABTACBDQABAdgXBiQgcCAgwCVQgqCDgxCAQh0EpigESQhwDCiBCtQjkEzkXDtQiXCAijBpQluDsmtBjQhAAPhBANQioAiigAAQkFAAjshcg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AzBXdIgIgEQkxiFjfkDQhbhrhDhwQhLh/gmiAIgKgjQgZheAJhAIABAAQALhNAwgqUAFKgEmAp7gW6QBOgnBUgeQBdgkBggfIB3gqQAlgDAqAHQAzAMA2AXIAgARQBJArBIBDQBOBFA0BOIAKARQA6BUABBGQAAAggVBfQgbCDgtCVQgpCFgwCBQhwEwicEUQhvDGiACvQjjE6kYDuQiYCCilBqQlxDrm2BIQhBAMhBAIQh9ATh3AAQkuAAkSh4g");
	var mask_5_graphics_128 = new cjs.Graphics().p("Ay9XIIgIgFQkviRjekFQhbhrhDhyQhOiBgnh+IgLgkQgahgAMg+IAAAAQAOhJA1gtUAFkgEwAp8gW8QBOglBYgYQBegdBggVIB2gdQAlAAApAKQAzAQAyAaIAdATQBCAxBBBIQBGBIAuBTIAKARQAzBVAABIQAAAlgUBcQgaCGgrCVQgnCHgvCDQhtE1iYEXQhtDJh+CyQjiFAkaDxQiYCDioBqQl0DrnAAtQhAAHhCAFQhQAHhOAAQlZAAk4iYg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ay6WxIgIgFQksiejdkGQhbhthEhyQhQiEgoh8IgLgkQgdhkAPg7QARhFA5gwUAF/gE8Ap9gW8QBOgjBbgRQBfgXBhgLIB2gRQAkAEAnAMQAzAVAuAdIAbAVQA7A3A6BNQA+BMApBYIAIARQAtBWAABLQgBAogTBZQgZCJgpCVQglCJgtCFQhqE6iVEaQhrDNh9C1QjhFGkbDzQiZCEiqBqQl3DrnJARQhBAEhDABIhEABQmEAAlii+g");
	var mask_5_graphics_130 = new cjs.Graphics().p("AkNaBQhBABhDgEQmjgGmCjjIgIgFQkpiqjckIQhbhuhGhzQhSiGgqh7IgLgkQgfhnASg4IAAgBQAUhBA+gyUAGZgFJAp+gW7QBPgiBdgKQBggQBjgBIB0gFQAkAHAmAPQAyAZArAfIAYAZQA1A8AyBSQA3BQAiBcIAHASQAnBXgBBNQgCAsgRBXQgYCLgnCWQgjCKgsCGQhmFAiSEdQhpDRh8C3QjgFMkbD1QibCGisBrQlqDhm7AAIgogBg");
	var mask_5_graphics_131 = new cjs.Graphics().p("AkNabQhCgEhDgHQmdgfmDj2IgJgGQkmi2jbkJQhbhvhHh0QhUiJgrh5IgLgkQgihqAVg2IAAgBQAXg+BDg0UAGzgFVAp/gW7QBPggBggEQBigJBjAJQA9ADA2AFQAkAKAlARQAyAeAmAiQANANAKANQAtBCArBXQAvBVAdBgIAGASQAgBZgCBPQgCAvgPBUQgXCOgmCXQgiCMgpCIQhjFFiOEgQhoDUh7C6QjeFTkdD3QicCHiuBrQlIDKmOAAQhBAAhCgFg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AkOa4QhCgHhDgMQmXg2mFkLIgIgFQkkjEjZkKQhchwhIh1QhXiLgrh4IgMgkQgkhtAYgzIAAgBQAag6BHg3UAHOgFhAqAgW7QBPgeBjACQBjgCBlATQA8AJA1ALQAkAOAjATQAyAjAjAkQALAPAJAOQAnBHAjBcQAnBZAXBlIAFATQAaBZgDBSQgCAygOBSQgWCQgkCYQggCNgoCKQhgFJiKElQhmDXh6C9QjdFZkeD5QidCJiwBrQktC3lpAAQhmAAhqgOg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AkPbXQhCgLhDgQQmRhOmGkeIgJgHQkhjPjYkMQhbhxhKh2QhZiOgsh2IgNgkQglhwAagxIABgBQAdg2BLg5UAHogFuAqBgW7QBPgcBnAJQBkAEBlAdQA8APA0ASQAkARAiAWQAxAnAfAnQALAQAHAPQAgBNAcBhQAfBdARBpIAEAUQAUBagEBUQgDA2gMBPQgVCTghCYQgfCQgnCLQhcFPiHEnQhkDbh4DAQjcFekgD8QieCKiyBsQkWColNAAQiDAAiNgbg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AkQb2QhCgPhEgUQmLhnmHkxIgIgHQkfjdjXkNQhbhyhLh3QhciQgth0IgNglQgnhzAdguIAAgBQAggzBRg7UAICgF6AqBgW7QBQgaBqAPQBlALBmAnQA8AVAzAYQAjAVAhAZQAxArAcApQAJASAGAQQAZBTAVBmQAXBgALBuIADAUQAOBcgFBWQgEA6gLBMQgUCWgfCYQgdCRglCNQhZFViDEqQhiDeh3DDQjbFlkhD9QifCMi0BsQkDCbk0AAQidAAisgpg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AkRcUQhDgThEgYQmEh/mJlFIgIgHQkcjpjWkOQhch0hMh3QhdiTguhyIgOglQgqh3AggrIABgBQAjgvBVg+UAIcgGHAqDgW6QBQgZBsAWQBmASBoAxQA8AbAyAeQAjAYAfAcQAxAwAYAsQAIASAEASQATBYAOBrQAPBkAFBzIACAUQAIBdgGBZQgEA9gKBKQgTCYgdCZQgcCTgjCPQhWFZiAEuQhfDhh3DGQjaFrkiEAQigCNi2BsQjxCPkfAAQi0AAjIg5g");
	var mask_5_graphics_136 = new cjs.Graphics().p("AkScyQhEgWhEgcQl+iYmKlYIgJgIQkZj2jVkPQhbh1hOh5QhgiUgvhxIgOglQgrh6AigpIABgBQAmgrBag+UAI2gGWAqEgW5QBQgXBwAcQBnAYBoA7QA8AhAxAlQAjAcAdAeQAxA0AUAuQAIAVADASQALBeAHBwQAHBoAAB3IAAAVQACBegHBbQgFBBgIBHQgSCbgbCZQgaCVgiCQQhSFgh8EwQheDlh1DIQjZFykjEBQiiCPi4BtQjjCFkMAAQjIAAjhhLg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AkadPQm8ionYm2QmPlxkGmRQhzixgth7Qgvh+AngmUAEtgEhAwwgaiQBQgWBzAjQBoAfBqBFQBnBEBDBOQBGBSADBBQAJDAgMEAQgXHyhkHJQiLJ1kNHWQlQJJoJEwQjWB9j9AAQjZAAj5hfg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_5_graphics_98,x:330.2,y:-292}).wait(1).to({graphics:mask_5_graphics_99,x:323.8,y:-287.6}).wait(1).to({graphics:mask_5_graphics_100,x:317.3,y:-283}).wait(1).to({graphics:mask_5_graphics_101,x:310.3,y:-279.1}).wait(1).to({graphics:mask_5_graphics_102,x:303.2,y:-275.7}).wait(1).to({graphics:mask_5_graphics_103,x:296.1,y:-272.4}).wait(1).to({graphics:mask_5_graphics_104,x:289,y:-269.1}).wait(1).to({graphics:mask_5_graphics_105,x:281.9,y:-265.9}).wait(1).to({graphics:mask_5_graphics_106,x:274.8,y:-262.7}).wait(1).to({graphics:mask_5_graphics_107,x:267.7,y:-259.6}).wait(1).to({graphics:mask_5_graphics_108,x:260.6,y:-256.5}).wait(1).to({graphics:mask_5_graphics_109,x:253.5,y:-253.4}).wait(1).to({graphics:mask_5_graphics_110,x:246.3,y:-250.4}).wait(1).to({graphics:mask_5_graphics_111,x:239.2,y:-247.3}).wait(1).to({graphics:mask_5_graphics_112,x:232.3,y:-242.2}).wait(1).to({graphics:mask_5_graphics_113,x:225.3,y:-237.2}).wait(1).to({graphics:mask_5_graphics_114,x:218.4,y:-232.3}).wait(1).to({graphics:mask_5_graphics_115,x:211.5,y:-227.3}).wait(1).to({graphics:mask_5_graphics_116,x:204.7,y:-222}).wait(1).to({graphics:mask_5_graphics_117,x:197.9,y:-216.5}).wait(1).to({graphics:mask_5_graphics_118,x:191.3,y:-210.8}).wait(1).to({graphics:mask_5_graphics_119,x:184.6,y:-205.2}).wait(1).to({graphics:mask_5_graphics_120,x:178.3,y:-199.6}).wait(1).to({graphics:mask_5_graphics_121,x:172,y:-193.9}).wait(1).to({graphics:mask_5_graphics_122,x:165.8,y:-188.2}).wait(1).to({graphics:mask_5_graphics_123,x:159.6,y:-182.5}).wait(1).to({graphics:mask_5_graphics_124,x:153.5,y:-176.7}).wait(1).to({graphics:mask_5_graphics_125,x:147.3,y:-171}).wait(1).to({graphics:mask_5_graphics_126,x:147.4,y:-168.4}).wait(1).to({graphics:mask_5_graphics_127,x:147.4,y:-165.6}).wait(1).to({graphics:mask_5_graphics_128,x:147.5,y:-162.7}).wait(1).to({graphics:mask_5_graphics_129,x:147.5,y:-159.7}).wait(1).to({graphics:mask_5_graphics_130,x:147.6,y:-156.1}).wait(1).to({graphics:mask_5_graphics_131,x:147.6,y:-152.7}).wait(1).to({graphics:mask_5_graphics_132,x:147.7,y:-149.7}).wait(1).to({graphics:mask_5_graphics_133,x:147.7,y:-146.9}).wait(1).to({graphics:mask_5_graphics_134,x:147.8,y:-144}).wait(1).to({graphics:mask_5_graphics_135,x:147.9,y:-141.1}).wait(1).to({graphics:mask_5_graphics_136,x:148.1,y:-138.1}).wait(1).to({graphics:mask_5_graphics_137,x:148.8,y:-135.1}).wait(230));

	// x4
	this.instance_28 = new lib.yld_2_4();
	this.instance_28.setTransform(85.3,-274.6);
	this.instance_28._off = true;

	this.instance_28.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(98).to({_off:false},0).wait(269));

	// z3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_79 = new cjs.Graphics().p("AhpCIQgsg+gPhNQgii+Cqg5QEVBHhtE3QgpB3g/AAQg8AAhRhzg");
	var mask_6_graphics_80 = new cjs.Graphics().p("Ah0DiQgWgTgYgiIgWgfQgPgYgNgaQgWgqgMgpQgIgdgCgYQAAgUAGgUIADgSQAAgjAtgkQAfgrA0ggQAygaA/gOQAwAKAqAPQBQAeAsAzQAnAsAIA4QAIA+gZBHQgJAegVAjQgRAdgUAdQgOAVgPAQQg9BOhFAAQg8AAhEg/g");
	var mask_6_graphics_81 = new cjs.Graphics().p("AiyD9QgagWgfgsIgagoQgTgdgQghQgag2gPgwQgLgqABgaQADgXANgZQAGgMACgJIAAABQABgaBPgmQAvgpBGggQBCgZBKgLQA/AKA1ASQBnAhA5A9QAzA1AGBHQAGBLgsBXQgNAhgkAnQgbAggeAeQgVAWgXAQQhTBJhSAAQhVAAhXhKg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AjwEXQgfgZglg3QgPgWgQgZQgVgkgTgnQgghDgQg4QgPg1AFgcQAGgaATgeQAJgOAEgKIAAACQABgRBygoQBAgnBWghQBUgXBWgIQBMAKBBAUQB+AlBEBGQBABAAEBVQAEBXg/BnQgSAkgyAsQgkAjgpAfQgcAWgeASQhmBFhhAAQhvAAhrhXg");
	var mask_6_graphics_83 = new cjs.Graphics().p("AkuExQgjgbgrhCQgSgagSgdQgYgqgWguQglhNgThDQgRg/AHgeQAJgdAbgjQAMgQAFgLIAAACQADgHCTgqQBQglBogiQBlgWBjgFQBZALBMAVQCVAqBQBPQBNBLABBiQACBmhRB1QgXAnhAAxQgvAlgyAhQgkAXgmASQh3BBhuAAQiLAAiAhkg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AlrFKQgogdgyhMQgUgegUgiQgcgvgZg2QgqhYgVhMQgUhKAKggQAMggAigoQAPgSAGgMIABADQAEACC1grQBhgkB5gjQB2gTBwgDQBlALBXAYQCsAtBdBZQBZBVgBBwQAAB0hjCEQgcAqhPA1Qg4Aog9AiQgrAYguASQiGA+h6AAQioAAiWhyg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AmpFkQgtggg5hWQgWgigWgmQgfg1gcg9QgvhkgXhUQgWhVAMgiQAPgjApgtQASgVAIgMIAAADQAGAMDXguQBxgiCKgjQCHgSB9ABQByALBjAZQDCAyBpBiQBmBfgDB+QgDCCh1CSQghAthdA6QhCArhIAkQgyAYg1ATQiUA5iFAAQjIAAish+g");
	var mask_6_graphics_86 = new cjs.Graphics().p("AnnF+QgxgjhAhgQgYgmgYgqQgig7gfhEQg1hxgZhcQgZhgAPgkQASgmAwgyQAVgXAJgNIABADQAHAWD5gvQCBghCcgjQCYgRCJAEQB/ALBuAbQDaA2B0BsQBzBpgFCLQgFCRiHChQgnAwhrA+QhMAuhSAlQg5AZg9ATQifA3iQAAQjpAAjEiMg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AolGYQg2glhGhrQgbgqgaguQglhBgihLQg6h9gahlQgdhqATgmQAVgqA2g3QAYgYALgPIABAFQAHAeEcgwIE+hEQCpgPCXAHQCLAMB6AdQDwA5CBB2QB/BzgHCZQgHCfiaCvQgrA0h5BDQhXAxhcAlQhBAahDAUQirA0iaAAQkLAAjciag");
	var mask_6_graphics_88 = new cjs.Graphics().p("ApjGyQg6gnhNh2QgdgugcgyQgohHglhSQg/iJgdhtQggh2AWgnQAYgtA9g8QAcgbAMgPIABAFQAIAoE9gzQCigcC/gmQC4gNClAKQCZALCEAgQEIA9CMB/QCMB9gJCoQgJCsitC/QgwA2iHBIQhhAzhmAnQhIAbhLAUQi1AxijAAQkuAAj1iog");
	var mask_6_graphics_89 = new cjs.Graphics().p("AqhHMQg/gqhTiAQhMh2hFiYQhEiVgfh2QgiiAAYgqQAbgwBEhAQAfgdANgRIABAGQAKAxFfg0QCzgbDPgmQGGgWErBEQEeBBCZCJQCYCIgLC1QgMC7i+DNQg1A5iWBMQi1BdjIAyQi+AvirAAQlTAAkOi3g");
	var mask_6_graphics_90 = new cjs.Graphics().p("AmjJ3Qh+gqhzhlIgSgOQg6gzhNiCQg9hsg6iGIgPglQhAiZgdh7Qgfh+AUgwQAYg2A9hBQAbgeAMgSIABAEQAEAMA3ABQAsgEBOgNIA2gKIAEgBQAugBBCgJQBbgMBngRIDKgkQBCgEBAgDQE4gHDyBKIANAEQESBRCNCfIAQASQB6CKgMCtQgJB5hKCBQgtBOhCBOQg2BCiNBQQg1Afg2AbQiDBBiPAkIg5ANQiMAeiCAAQjHAAi2hDg");
	var mask_6_graphics_91 = new cjs.Graphics().p("Am4KbQh2gphsh7IgQgQQg3g7hGiEQg5hwg1iLIgPgmQg6icgbiAQgdh8ARg3QAUg7A1hCQAYggALgUIABADQADAEAygCQAqgIBNgUQAbgJAZgGIAFABQAoACBJgIQBagMBtgSQBjgQBrgTICFgKQFAgJDvBgIANAFQEGBfCBC2IAPAUQBtCRgNCyQgJB8hHCEQgrBSg/BQQg2BMiFBUQg0Aig1AeQiCBJiRAmIg6ANQh7Aah1AAQjaAAjNhWg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AnLLAQhugqhmiRIgPgRQgzhEg/iFQg1h1gwiPIgOgnQg1iggaiFQgah6AOg9QARhBAthCQAUgiAKgVIAAABQAEgEAsgEIBzgpQAcgLAYgIIAEABQAjAGBQgIQBZgKBzgSQBlgRBugTICHgMQFIgLDsB0IANAHQD6BvB1DMIAOAWQBhCYgPC1QgKCAhDCHQgpBWg8BTQg2BVh9BXQgyAng1AgQiABSiVAnIg7AOQhuAWhqAAQjoAAjhhog");
	var mask_6_graphics_93 = new cjs.Graphics().p("AngLkQhlgphhioIgNgTQgvhLg5iIQgwh5gsiUIgMgnQgwikgYiKQgXh4AKhEQANhGAmhCQARgkAIgXIAAAAQAEgNAmgGQAmgUBKghQAcgOAXgJIADACQAeAKBXgIQBZgJB4gTQBngQBwgUICKgPQFPgMDrCJIAMAIQDuB+BqDjIAMAXQBUCggQC5QgLCDg/CKQgnBbg4BVQg3Beh1BbQgxAqg0AkQh/BaiXAoQgeAIgeAGQhjAUhiAAQjzAAj1h8g");
	var mask_6_graphics_94 = new cjs.Graphics().p("An0MIQhegqhai+IgMgTQgrhVgyiJQgrh+goiYIgLgoQgsingViPQgVh2AIhLQAIhLAfhDQANglAHgZIAAgCQAEgVAhgIQAjgaBJgnQAdgRAUgLIADADQAaANBcgGQBZgJB+gTQBpgRBygUICMgRQFYgODoCfIANAJQDiCNBdD5IAKAaQBJCngRC6QgNCJg6CNQgmBfg1BXQg4BohtBfQgvAtgyAmQh/BjiZAqQgfAJgfAGQhYARhYAAQj+AAkJiQg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AoIMsQhWgqhUjUIgKgVQgnhdgsiLQgniCgjidIgKgpQgmirgUiUQgShzAEhSQAFhRAXhDQAKgnAFgbIABgCQADgeAbgKQAigfBIguIAvggIADAEQAUAQBkgGQBYgHCEgUQBqgRB1gVICPgTQFfgQDmC0IAMAKQDWCcBSERIAJAbQA8CvgTC9QgNCNg3CQQgjBjgyBaQg4BwhlBjQguAxgyApQh9BricAsQgfAJggAGQhQAPhRAAQkHAAkaikg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AocNQQhNgqhPjrIgJgWQgihlgmiNQgiiHgfihIgIgqQgiiugSiZQgPhyABhXQABhXAPhEIALhFIAAgEQAEglAVgNQAfglBHg0IAvglIABAFQAQAUBqgGQBYgGCKgUQBsgRB3gVICPgWQFqgRDjDIIAMAMQDKCrBGEnIAHAdQAwC2gUDBQgPCQgyCTQgiBoguBcQg5B6hdBmQgsA1gxAsQh8B0ifAtQggAJggAGQhJANhKAAQkOAAksi4g");
	var mask_6_graphics_97 = new cjs.Graphics().p("AowNzQhFgphIkCIgIgXQgfhugfiOQgdiMgbilIgHgsQgdixgQieQgMhvgDhfQgChcAHhEIAGhJIAAgFQAEguAQgPQAdgqBFg7QAegaAQgPIABAGQALAYBwgGQBYgFCPgVQBugRB5gVICSgYQFygUDhDeIAMANQC+C6A6E+IAFAeQAkC+gVDFQgQCUguCWQggBrgsBfQg5CDhUBqQgrA4gwAwQh8B7ihAvQggAJghAGQhCANhEAAQkVAAk9jOg");
	var mask_6_graphics_98 = new cjs.Graphics().p("ApCOXQg9gphCkYQg5jzgwlkQgslLgPkOQgQkVAYgrQAbgwBFhBQAfgdANgRIABAHQAKAxFfg0QCygbDOgmQF5gVDfDzQDEDVAsF2QAoFXhiFnQhjFpjCDRQiTCejOAlQg8ALg/AAQkZAAlPjig");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_6_graphics_79,x:310.4,y:-468.1}).wait(1).to({graphics:mask_6_graphics_80,x:318.1,y:-462.2}).wait(1).to({graphics:mask_6_graphics_81,x:325.7,y:-456.4}).wait(1).to({graphics:mask_6_graphics_82,x:333.3,y:-450.4}).wait(1).to({graphics:mask_6_graphics_83,x:340.9,y:-444.5}).wait(1).to({graphics:mask_6_graphics_84,x:348.5,y:-438.6}).wait(1).to({graphics:mask_6_graphics_85,x:356.1,y:-432.7}).wait(1).to({graphics:mask_6_graphics_86,x:363.7,y:-426.7}).wait(1).to({graphics:mask_6_graphics_87,x:371.3,y:-420.8}).wait(1).to({graphics:mask_6_graphics_88,x:378.9,y:-414.9}).wait(1).to({graphics:mask_6_graphics_89,x:386.5,y:-409}).wait(1).to({graphics:mask_6_graphics_90,x:384.1,y:-403.5}).wait(1).to({graphics:mask_6_graphics_91,x:381.8,y:-398}).wait(1).to({graphics:mask_6_graphics_92,x:379.4,y:-392.4}).wait(1).to({graphics:mask_6_graphics_93,x:377.1,y:-386.8}).wait(1).to({graphics:mask_6_graphics_94,x:374.8,y:-381.1}).wait(1).to({graphics:mask_6_graphics_95,x:372.5,y:-375.5}).wait(1).to({graphics:mask_6_graphics_96,x:370.1,y:-369.8}).wait(1).to({graphics:mask_6_graphics_97,x:367.8,y:-364.1}).wait(1).to({graphics:mask_6_graphics_98,x:365.2,y:-358.5}).wait(269));

	// x3
	this.instance_29 = new lib.yld_2_3();
	this.instance_29.setTransform(307.3,-467.5);
	this.instance_29._off = true;

	this.instance_29.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(79).to({_off:false},0).wait(288));

	// z2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_59 = new cjs.Graphics().p("Ah8CMQhckKC8iJQDFBAgPEEQgDA8gnAxQhKBeg2AAQhCAAgqh8g");
	var mask_7_graphics_60 = new cjs.Graphics().p("AhMD3QgugOghg7QgVgmgMgyQgIgnADgiQAAgsAPglQANg2AgghQAdgsA1gZIA9gaIAmAUQAhAVAXAMQA9AlAWBKIAGAWIACATQgEBHgeBRQgPAlgeAcQgNANgQALQghAXgeAMQgkAUghAAQgQAAgPgEg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AiEDiQg1gbgjhCQgXgwgIg4QgGguAMglQALgyAggiQAdgxAvgRQAogdBBgDQAigBAkgFIArAcQAoAeAYAIQBLAoASBdIAFAaQABANgCAHQggBMg3BHQgaAfgpAVQgSAJgUAHQgpAQgjADQgYAGgXAAQgmAAgggRg");
	var mask_7_graphics_62 = new cjs.Graphics().p("Ag4D5QhKACg6gnQg7gmgkhLQgag6gFg9QgCg3AVgpQAVg1AwgfQAugsA+AAQAzgQBLATQAqAMAnAEIAvAjQAvAnAaAEQBZArAOBtIAEAeQgBAQgEAJQg7BQhPA7QgnAagzANQgXAGgYAEQgbAEgYAAQgVAAgUgDg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AALEcQg3gBg0gPQhTgMhBgzQhAgzgmhSQgdhFgChDQABg/AegtQAhg3BBgcQA8goBPARQA+gCBWApQAwAYAqANIAzAqQA2AxAcgBQBnAuALCAIACAiQgBATgIAJQhVBThoAwQgzAVg+AGQgWACgYAAIgKAAg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AA0FHQgggBgegEQhCgIg8gYQhcgahHhAQhGg/gnhaQgghNABhLQAEhIAogwQAqg6BSgZQBNgjBeAhQBJANBhA+QA3AlAtAVQAhAeAWATQA+A7AdgFQB1AwAHCTIABAnQgDAVgKAJQhwBXiAAlQg3ANg9AAIgUAAg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AAjFzQgjgFgjgIQhJgQhEghQhmgohNhMQhMhLgphiQgihXAEhSQAHhQAxg0QA1g9BjgWQBdgeBtAyQBUAbBtBUQA9AxAwAeQAkAjAXAVQBFBEAggJQCCAxADCoIgBArQgDAXgNAJQiLBciZAZQgmAGgpAAQgnAAgpgFg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AAUGdQgngIgogMQhSgXhLgqQhvg2hThZQhShXgqhoQgmhjAIhYQAJhYA7g4QA/hAB0gTQBtgZB9BCQBdApB6BqQBEA+AyAmQAnAoAZAXQBMBMAhgLQCQAzAAC7QgBAhgBAOQgFAagPAJQimBgixAOIgpACQhFAAhIgPg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AAEHIQgsgMgsgQQhagfhSgzQh5hEhZhlQhYhkgshvQgohuALheQAMhgBFg7QBJhDCFgQQB8gVCOBTQBnA3CGCAQBKBKA1AvQAqAtAaAZQBUBVAigRQCeA4gEDOQgBAkgCAPQgGAcgSAKQjABjjLADIgDAAQhiAAhngZg");
	var mask_7_graphics_68 = new cjs.Graphics().p("ADYIYQhwgFhygiQgygOgxgUQhhgnhag8QiChShghyQhdhvgth4Qgsh4AOhlQAQhnBOg/QBUhGCVgNQCMgRCeBkQByBGCSCVQBQBXA4A3QAtAyAbAcQBaBeAlgVQCrA7gHDhQgCAngDAQQgHAegUAKQjLBfjSAAIghAAg");
	var mask_7_graphics_69 = new cjs.Graphics().p("ADeJOQh7gKh9gpQg3gTg0gXQhqgvhihFQiKhghmh+Qhkh8gvh/QguiCAShrQAShwBXhDQBfhJCmgKQCcgLCtB0QB9BUCdCrQBXBjA7BAQAwA3AcAcQBiBpAmgZQC5A+gLDzQgCArgEARQgIAhgXAKQjRBajVAAQgmAAgmgDg");
	var mask_7_graphics_70 = new cjs.Graphics().p("AgpJDQiyhAieh1QiThuhtiLQhpiIgwiHQgxiMAUhyQAWh4BghGQBphMC3gHQCsgHC9CFQCIBiCpDBQCqDOBBBEQBpBzAogdQDHBAgPEHQgDAugFARQgJAkgZAKQjWBWjYAAQjDAAjDhHg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AEhKrQh5gHh8gnIg5gUQiag5iNhlIgIgFQiLhlhsiBIgbghQhjh/g0iAIgNghQgziUAVh7QAVh/BihPQAbgVAfgRQBhg1COgPQC0gUDMBwQCGBGCfCHQAdAXAZAdQCiDDAUBvIAUAfQBCBSAVgLQBSAqAcBcIARCKIALBFIACA8IAAAFQgFAjgSANQg3Ajg3AcQhTAshaAUQg3AThCACQgTAEgTAAIgVABIgRgBg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AB+KzQgfgIgggLQiig3iYhpIgIgGQiVhph0iJIgcgjQhpiGg3iIIgNgkQg3ibAWiEQAViGBkhXQAbgYAggUQBkg+CTgZQC7ggDfBbQCUA4CyB2QAjATAZAeQCZC3gYCZIALAlQAyBPAIADQA9AzAJBhQgLBTALA5IAVBEQAFAmAGAXIABAFQAAAjgMAQQgmApglAlQg5A6hEAhQglAjg6AJQgRAKgSABQgRAHgVAAIgNAAQh5AAh+gig");
	var mask_7_graphics_73 = new cjs.Graphics().p("ADPLqQgigIghgLQisg0ijhvIgJgGQiehth8iRIgeglQhviMg6iRIgOglQg5ikAWiMQAWiNBlhhQAbgaAhgWQBnhICYgiQDDgsDwBGQCkAqDFBjQAoARAaAeQCPCshDDCIACApQAiBRgFARQAnA5gJBnQgfBgANAtIAgBEQAJAkALAaIABAFQAFAigFATIgpBdQgeBIgvAvQgTAygyARQgPAPgQAEQgQAKgVABQgkADglAAQhjAAhogXg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AEVMgQgkgHgkgKQi3gyith0IgKgGQinhxiDiZIgggnQh1iUg9ibIgPglQg7isAWiVQAWiUBmhpQAcgdAigZQBphQCdgsQDMg5ECAxQCyAcDYBSQAtAOAbAeQCGChhvDrQgCAXgEAWQASBRgTAfQARBDgaBqQg0BtAQAjQAQAXAbAsQAMAjAQAbIACAFQAKAjACAWQgFA1gDA3QgDBWgaA7QAABCgrAZQgNAUgNAGQgPAOgWADQg7AJg9AAQhUAAhXgRg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AEvNZQglgGgngKQjBgwi3h4IgLgHQiwh1iLiiIghgoQh7iahBikQgIgVgHgSQg+i0AWidQAXicBohyQAcgfAigcQBthaCig0QDShGEUAcQDCAPDrBAQAzAKAaAfQB+CVibEVIgPAwQABBRgfAtQgFBMgtBvQhHB6ATAYQASAUAiAuQARAiAVAdIACAGQAPAiAIAYIAbB7QAYBlgFBJQASBRgjAgQgLAZgMAIQgOATgWAEQhPARhTAAQhHAAhKgMg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AFIOUQgngFgpgJQjLgujDh9IgLgIQi6h5iSipIgjgqQiBiihEisIgPgrQhBi5AXinQAWijBqh6QAcgiAjgeQBwhjCng+QDahSEmAHQDRAAD+AvQA4AHAbAgQB0CJjHE+IgXA0QgPBRgtA7QgaBVg/B0QhbCHAVAMQAWASApAwQAVAgAZAgIAEAFIAiA+IA9CKQAzByAQBWQAkBhgbAnQgJAfgKAKQgNAXgXAGQhgAahnAAQg8AAg/gJg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AFgPVQgqgFgrgJQjUgrjOiDIgNgHQjCh9iaiyIglgsQiHiohHi1IgQgtQhDjBAXivQAXiqBqiDQAdgkAkghQByhtCshHQDjhfE3gOQDggNERAcQA9AFAcAgQBrB+jzFnQgPAcgRAcQgeBRg6BJQgxBdhQB7QhwCTAYABQAZAPAxAyIA2BBIAFAFIAuBAQAuBHAxBSQBNCBAmBjQA2BwgTAvQgHAkgIANQgMAbgYAHQhxAkh7AAQgxAAg0gGg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AF2QbQgsgEgtgIQjegpjZiIIgNgIQjMiBiii6IgmgtQiNivhKi+IgRgvQhGjJAYi4QAXixBsiLQAdgnAkgkQB2h1CxhRQDqhrFKgjQDugbEkAKQBDACAcAgQBiBzkfGQIgoA8QgvBRhHBXQhGBlhjCBQiECfAbgKQAdANA3A0IBABBIAFAGIA5BDQA/BNBCBaQBpCPA6BxQBJCAgMA2QgFApgGAPQgLAfgYAJQiAAuiOAAQgpAAgqgEg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AEuRcQjngmjliNQjdiHivjIQixjMhXjgQhdjrAbjXQAdjrCqixQGOmgQjgZQE3gGn2KGQiDCojgEBQiYCtAdgVQAwAPB3BzQByBuB8CUQCDCdBQB+QBaCPgDA9QgDAvgFARQgJAjgZAKQiOA6igAAQhOAAhSgOg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_7_graphics_59,x:311.4,y:-288}).wait(1).to({graphics:mask_7_graphics_60,x:305.4,y:-290.9}).wait(1).to({graphics:mask_7_graphics_61,x:299.5,y:-293.4}).wait(1).to({graphics:mask_7_graphics_62,x:293.4,y:-296.7}).wait(1).to({graphics:mask_7_graphics_63,x:287.4,y:-300.6}).wait(1).to({graphics:mask_7_graphics_64,x:281.2,y:-304.7}).wait(1).to({graphics:mask_7_graphics_65,x:275.2,y:-308.6}).wait(1).to({graphics:mask_7_graphics_66,x:269.1,y:-312.5}).wait(1).to({graphics:mask_7_graphics_67,x:263,y:-316.3}).wait(1).to({graphics:mask_7_graphics_68,x:256.9,y:-320}).wait(1).to({graphics:mask_7_graphics_69,x:250.9,y:-323.7}).wait(1).to({graphics:mask_7_graphics_70,x:244.8,y:-327.4}).wait(1).to({graphics:mask_7_graphics_71,x:241.1,y:-332.7}).wait(1).to({graphics:mask_7_graphics_72,x:237.9,y:-337.7}).wait(1).to({graphics:mask_7_graphics_73,x:234.9,y:-342.7}).wait(1).to({graphics:mask_7_graphics_74,x:233,y:-347.7}).wait(1).to({graphics:mask_7_graphics_75,x:235.3,y:-352.9}).wait(1).to({graphics:mask_7_graphics_76,x:237.9,y:-358.4}).wait(1).to({graphics:mask_7_graphics_77,x:240.6,y:-364.4}).wait(1).to({graphics:mask_7_graphics_78,x:243.4,y:-371}).wait(1).to({graphics:mask_7_graphics_79,x:246.3,y:-378.2}).wait(288));

	// x2
	this.instance_30 = new lib.yld_2_2();
	this.instance_30.setTransform(221.6,-467.3);
	this.instance_30._off = true;

	this.instance_30.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(59).to({_off:false},0).wait(308));

	// z1 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_1 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_2 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_3 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_4 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_5 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_6 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_7 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_8 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_9 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_10 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_11 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_12 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_13 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_14 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_15 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_16 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_17 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_18 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_19 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_20 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_21 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_22 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_23 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_24 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_25 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_26 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_27 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_28 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_29 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_30 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_31 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_32 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_33 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_34 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_35 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_36 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_37 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_38 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_39 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_40 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_41 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_42 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_43 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_44 = new cjs.Graphics().p("AD9F/IgigNQikg8ixhqQjgh5iFiGQiEh+gGg9QgEggAUgaQAbgkAogPQAagPAagVIAegZIALgJQAVgQAPgGQAUgHAVAEQBbAICeBNIA7AXQEFBhCsCRQBxBeA+BkQAvBJAOA7QAlCcjJAzQgHADgNAAQgxAAh/g9g");
	var mask_8_graphics_45 = new cjs.Graphics().p("AEYGvIgKgEIgbgNQixhMjFh/IgTgLQjqiNiQiNIgHgFQiUiMgGg8QgEgjAXgbIABgCQAfgnAugOIADgCQAcgPAdgWIABgBIAggaIAMgKIADgCQAVgQARgGIADgBQAVgHAVAGIAFAAQBiASCsBaIBBAdIANAGQEUB7C7CgIAOALQB2BmBCBnQA3BRAQBCIABAFQAnCojjAzIgBAAQgGADgKAAQg0AAiUhPg");
	var mask_8_graphics_46 = new cjs.Graphics().p("AEyHeIgKgFIgegPQi9hdjaiTIgUgNQkAilihiZIgIgGQipiegHg7QgEgnAbgeIABgCQAkgqAzgNIAEgCQAfgPAhgZIABgBIAkgdIAMgKIADgCQAYgSASgGIAEgCQAXgGAYAHIAFABQBqAZC9BpIBIAkIANAHQEtCXDOCxIAOANQCEBzBKBuQA/BZASBJIACAFQAsC5kBA1IgCAAQgFACgHAAQg0AAishig");
	var mask_8_graphics_47 = new cjs.Graphics().p("AFNINIgMgGIgfgRQjLhujtinIgXgPQkVi8iyimIgIgHQjAivgGg7QgFgrAfghIABgCQAogsA5gNIAEgBQAkgQAkgbIABgBIAogfIANgLIADgDQAagTAUgHIAEgBQAZgHAbAIIAFACQBxAhDPB4IBOArIAPAIQFECyDhDDIAQAOQCRCABSB1QBGBiAVBPIACAFQAzDLkgA1IgCAAIgJABQg2AAjBh0g");
	var mask_8_graphics_48 = new cjs.Graphics().p("AFnI8IgNgHIgggTQjYh/kBi7IgZgRQkrjUjDiyIgJgHQjWjCgFg7QgFguAhgkIADgCQAtgvA9gMIAFgBQAngRAngdIACgBIArgiIAPgKIADgDQAdgWAWgHIADgBQAbgIAeAKIAFACQB6ApDgCIIBUAxIARAKQFbDMDzDVIARAQQCfCMBaB9QBPBrAXBVIACAGQA4Dak+A3IgCAAIgIABQg3AAjWiHg");
	var mask_8_graphics_49 = new cjs.Graphics().p("AGCJsIgOgIIgigWQjliPkWjQIgagTQlBjpjUjBIgJgIQjsjTgGg7QgFgyAmgmIACgCQAxgyBEgLIAEgCQAsgRArgfIABgBQATgOAcgWIAPgLIAEgEQAfgXAYgIIAEgBQAdgIAgAMIAGACQCAAxDyCXIBbA4IASALQFzDnEFDnIATARQCtCZBhCEQBWB0AaBbIACAGQA/DsldA4IgCAAIgGAAQg3AAjsiZg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AGcKbIgOgJIglgYQjxigkrjkIgcgVQlWkBjljNIgKgJQkBjlgGg6QgGg2AqgpIADgCQA1g1BJgKIAFgBQAvgTAvghIABgBQAUgOAfgZIAPgLIAFgEQAhgZAZgIIAFgBQAfgIAjANIAGACQCIA5EECnIBgA+IATAMQGLEDEZD5IATASQC7CmBpCLQBeB8AcBiIACAGQBFD9l7A5IgCAAIgFAAQg3AAkCisg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AGoLAQkYjAlqkbQl0kej4jdQkXj3gGg6QgHg6AugrQA9g7BUgJQAzgTAzgkQAcgUAwgmQAngdAdgHQAkgKApATQCuBOFyD7QGxEnExESQGBFdA/DeQBLEOmcA6IgEAAQg4AAkljJg");
	var mask_8_graphics_52 = new cjs.Graphics().p("AJYOKQhdgnh+hOQiPhWich5QisiGjAitQhbhRhUhQQjzjdi0jIIg4g9QjNjcgGg+QgEgrAYgjQAKgPAOgNQAfgcAlgPQAmgRApgKIAHgBQAagLAcgQIAvgdIAGgEIArgYIAogVQAogXAggCQAlgGArAUIAOAHQCLBDDdCNQBeA7BoBHQFcDtEHDfQBYBLBNBHQD2DrBdC3QA8BvAGBbQAmEHmnBEIgKABQgrAAhsg2g");
	var mask_8_graphics_53 = new cjs.Graphics().p("AI5PQQhngciEhJQiahSikiFQiwiPi/jFQhZhZhShbQjnjyisjpIg1hFQi+jxgHhIQgFgtAbgkQAMgPAPgNQAigdAogOQAngSArgNIAHgCQAagMAdgSQAbgRAYgNIAGgEQAVgKAagJIArgOQAogQAkACQAngBArAVIAPAHQCbBMDfCOQBlBABsBJQFyD6EPDrQBcBRBPBMQEBEABIDHQAvB1gOBhQADD/myBOQgJACgMAAQg0AAhkgng");
	var mask_8_graphics_54 = new cjs.Graphics().p("AIUQWQhzgRiJhDQilhOipiQQi3iZi9jcQhXhhhQhoQjckFikkLQgagngYgmQiukGgJhSQgEgvAegmQAMgPAQgNQAkgdArgNIBWgjIAHgDQAagNAggVQAcgSAZgMIAHgEQAWgJAcgFIAugGQApgLAnAHQAoADAuAWIAPAIQCpBWDjCOQBsBEBtBLQGLEIEXD4QBhBWBQBQQEMEWAyDXQAjB7ghBmQgjD4m9BYQgRAEgWAAQg4AAhYgag");
	var mask_8_graphics_55 = new cjs.Graphics().p("AHsReQh/gGiOg/QixhJivicQi8iii8jzQhUhqhPhzQjQkZidkuQgYgqgWgrQifkZgKhdQgFgxAignQANgQARgNQAngdAugMQArgSAugVIAHgDQAbgPAhgXQAegVAagLIAHgDQAZgIAdgBIAxABQAqgEAqALQAqAHAvAYIAQAIQC4BfDmCQQByBHBxBNQGhEWEgEEQBlBbBSBWQEWErAdDoQAWCBg1BqQhHDxnIBiQgeAHgnAAQg2AAhGgNg");
	var mask_8_graphics_56 = new cjs.Graphics().p("AHASrQiKAFiTg6Qi6hFi6ioQi/iri7kKQhThzhMh/QjFktiVlPIgqhdQiQkugLhnQgFg0AkgnQAPgRASgNQApgeAwgKQAugSAvgZIAIgEQAagQAjgZQAhgXAagKIAIgDQAagHAfADIA1AIQAqADAuAQQArALAwAZIASAJQDGBnDpCRQB5BLB0BPQG4EjEoERQBpBhBUBaQEhFBAID4QAJCHhIBwQhsDpnTBsQg1AOhIAAQglAAgqgEg");
	var mask_8_graphics_57 = new cjs.Graphics().p("ABkTPQjGhBjAizQjEi1i5khQhRh7hLiLQi4lBiOlxIgnhlQiBlCgMhyQgFg1AngpQAQgRATgNQArgeA0gJQAvgTAxgcIAIgFQAbgRAkgbQAjgaAbgJIAIgCQAdgHAgAIIA4APQArAJAxAUQAsAQAyAaIASAJQDWBxDrCSQCABPB4BRQHOExExEdQBtBmBWBfQErFWgNEJQgECNhbB1QiQDineB2QhbAYh8ACQghADgiAAQh0AAh3gpg");
	var mask_8_graphics_58 = new cjs.Graphics().p("AAjUnQjQg+jIi+QjIi/i5k4QhNiDhLiXQislViGmTIgkhsQhxlYgNh7QgGg4AqgqQASgSAUgNQAtgeA3gIQAygTAxggIAJgGQAagRAmgeQAlgbAcgIIAJgDQAegGAiAMIA7AXQAsAPA1AZQAtATAzAcIATAKQDlB6DuCTQCHBTB8BTQHjE+E6EqQBxBsBYBjQE3FsgkEYQgQCUhuB5Qi2DcnpB/QhkAbh9APQg5AJg5AAQhnAAhmgeg");
	var mask_8_graphics_59 = new cjs.Graphics().p("AnIR5Qkikbj3orQi1mYiKn6QhilsgOiFQgGg6AtgsQA9g6BUgKQAzgTAzgkQAdgUAvglQAngeAdgHQAkgJApASQBgArC6BlQDzCDDyCUQK0GpGUGFQIgIJhIF7QhZHSwADdQhQARhOAAQk8AAkfkag");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_1,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_2,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_3,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_4,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_5,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_6,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_7,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_8,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_9,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_10,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_11,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_12,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_13,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_14,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_15,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_16,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_17,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_18,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_19,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_20,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_21,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_22,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_23,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_24,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_25,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_26,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_27,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_28,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_29,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_30,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_31,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_32,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_33,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_34,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_35,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_36,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_37,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_38,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_39,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_40,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_41,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_42,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_43,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_44,x:238.2,y:-503.3}).wait(1).to({graphics:mask_8_graphics_45,x:245.4,y:-498.4}).wait(1).to({graphics:mask_8_graphics_46,x:252.6,y:-493.4}).wait(1).to({graphics:mask_8_graphics_47,x:259.9,y:-488.5}).wait(1).to({graphics:mask_8_graphics_48,x:267.1,y:-483.6}).wait(1).to({graphics:mask_8_graphics_49,x:274.3,y:-478.7}).wait(1).to({graphics:mask_8_graphics_50,x:281.6,y:-473.7}).wait(1).to({graphics:mask_8_graphics_51,x:288.8,y:-468.8}).wait(1).to({graphics:mask_8_graphics_52,x:291.2,y:-462}).wait(1).to({graphics:mask_8_graphics_53,x:294,y:-455.3}).wait(1).to({graphics:mask_8_graphics_54,x:297.4,y:-448.7}).wait(1).to({graphics:mask_8_graphics_55,x:301.2,y:-442.2}).wait(1).to({graphics:mask_8_graphics_56,x:305.3,y:-436.2}).wait(1).to({graphics:mask_8_graphics_57,x:309.7,y:-429.9}).wait(1).to({graphics:mask_8_graphics_58,x:314.3,y:-423.3}).wait(1).to({graphics:mask_8_graphics_59,x:318.9,y:-416.6}).wait(308));

	// x1
	this.instance_31 = new lib.yld_2_1();
	this.instance_31.setTransform(199.4,-510.3);

	this.instance_31.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(367));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.4,-510.3,100.7,51.6);


(lib.pao3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间116("synched",0);
	this.instance.setTransform(15,203);

	this.instance_1 = new lib.补间115("synched",0);
	this.instance_1.setTransform(-1,203);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-1},13).wait(9).to({_off:false,x:15},15).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},13).to({startPosition:0},9).to({_off:true,x:15},15).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,139,52,128);


(lib.pao3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间113("synched",0);
	this.instance.setTransform(0,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-16},13).to({startPosition:0},9).to({x:0},14).to({startPosition:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-8,104,100);


(lib.pao3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间95("synched",0);
	this.instance.setTransform(-84,-348.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-68},14).to({startPosition:0},10).to({x:-84},15).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.5,-374.9,51,52);


(lib._3_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_379 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(379).call(this.frame_379).wait(1));

	// 图层 41
	this.instance = new lib.pao3_2();
	this.instance.setTransform(65.5,516,1,1,0,0,0,-16,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(271).to({_off:false},0).wait(109));

	// 图层 40
	this.instance_1 = new lib.补间127("synched",0);
	this.instance_1.setTransform(-44,388.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.补间128("synched",0);
	this.instance_2.setTransform(-43,411.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},233).to({state:[{t:this.instance_2}]},6).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(233).to({_off:false},0).to({_off:true,x:-43,y:411.7,alpha:1},6).wait(141));

	// 图层 39
	this.instance_3 = new lib.补间125("synched",0);
	this.instance_3.setTransform(287,368);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间126("synched",0);
	this.instance_4.setTransform(271,368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},215).to({state:[{t:this.instance_4}]},7).wait(158));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(215).to({_off:false},0).to({_off:true,x:271,alpha:1},7).wait(158));

	// 图层 38
	this.instance_5 = new lib.补间123("synched",0);
	this.instance_5.setTransform(120,304);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.补间124("synched",0);
	this.instance_6.setTransform(113,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},211).to({state:[{t:this.instance_6}]},6).wait(163));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(211).to({_off:false},0).to({_off:true,x:113,alpha:1},6).wait(163));

	// 图层 37
	this.instance_7 = new lib.补间121("synched",0);
	this.instance_7.setTransform(46,124);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.补间122("synched",0);
	this.instance_8.setTransform(46,117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},196).to({state:[{t:this.instance_8}]},8).wait(176));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(196).to({_off:false},0).to({_off:true,y:117,alpha:1},8).wait(176));

	// 图层 36
	this.instance_9 = new lib.补间119("synched",0);
	this.instance_9.setTransform(-119,64);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.补间120("synched",0);
	this.instance_10.setTransform(-119,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},176).to({state:[{t:this.instance_10}]},7).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(176).to({_off:false},0).to({_off:true,y:53,alpha:1},7).wait(197));

	// 图层 35
	this.instance_11 = new lib.补间117("synched",0);
	this.instance_11.setTransform(-154.7,217);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.补间118("synched",0);
	this.instance_12.setTransform(-154.7,204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},171).to({state:[{t:this.instance_12}]},8).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(171).to({_off:false},0).to({_off:true,y:204,alpha:1},8).wait(201));

	// 图层 34
	this.instance_13 = new lib.pao3_3();
	this.instance_13.setTransform(190,114,1,1,0,0,0,-1,203);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).wait(230));

	// 图层 33
	this.instance_14 = new lib.补间109("synched",0);
	this.instance_14.setTransform(266,-65.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.补间110("synched",0);
	this.instance_15.setTransform(240,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},140).to({state:[{t:this.instance_15}]},8).wait(232));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(140).to({_off:false},0).to({_off:true,x:240,y:-64.9,alpha:1},8).wait(232));

	// 图层 32
	this.instance_16 = new lib.补间107("synched",0);
	this.instance_16.setTransform(81.5,-74);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.补间108("synched",0);
	this.instance_17.setTransform(68.5,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},136).to({state:[{t:this.instance_17}]},7).wait(237));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(136).to({_off:false},0).to({_off:true,x:68.5,alpha:1},7).wait(237));

	// 图层 31
	this.instance_18 = new lib.补间105("synched",0);
	this.instance_18.setTransform(-21,-112.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.补间106("synched",0);
	this.instance_19.setTransform(-21,-115.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},126).to({state:[{t:this.instance_19}]},6).wait(248));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(126).to({_off:false},0).to({_off:true,y:-115.8,alpha:1},6).wait(248));

	// 图层 30
	this.instance_20 = new lib.补间103("synched",0);
	this.instance_20.setTransform(-105.5,-95);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.补间104("synched",0);
	this.instance_21.setTransform(-103.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},123).to({state:[{t:this.instance_21}]},4).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(123).to({_off:false},0).to({_off:true,x:-103.5,y:-102,alpha:1},4).wait(253));

	// 图层 29
	this.instance_22 = new lib.补间101("synched",0);
	this.instance_22.setTransform(51,-316.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib.补间102("synched",0);
	this.instance_23.setTransform(51,-321.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},83).to({state:[{t:this.instance_23}]},8).wait(289));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(83).to({_off:false},0).to({_off:true,y:-321.9,alpha:1},8).wait(289));

	// rili1
	this.instance_24 = new lib.补间99("synched",0);
	this.instance_24.setTransform(222,-376.9);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.补间100("synched",0);
	this.instance_25.setTransform(222,-382.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},71).to({state:[{t:this.instance_25}]},7).wait(302));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(71).to({_off:false},0).to({_off:true,y:-382.9,alpha:1},7).wait(302));

	// text1
	this.instance_26 = new lib.补间97("synched",0);
	this.instance_26.setTransform(255,-231.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.补间98("synched",0);
	this.instance_27.setTransform(255,-245.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},67).to({state:[{t:this.instance_27}]},6).wait(307));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(67).to({_off:false},0).to({_off:true,y:-245.9,alpha:1},6).wait(307));

	// 泡1
	this.instance_28 = new lib.pao3_1();
	this.instance_28.setTransform(-95,-409.9,1,1,0,0,0,-68,-348.9);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(44).to({_off:false},0).wait(336));

	// 图层 23 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_274 = new cjs.Graphics().p("AjbAVQgPg0A6gbQB0g0B4giQE7BNkkCeQhhA2hFAAQhnAAghh8g");
	var mask_graphics_275 = new cjs.Graphics().p("AhrCQIgSgHQgQgFgMgIQg7gjgOh5QgHhDA5gcQAVgKAXgGQAbgIAqgFQAjgEAZgIQA0gEAxALIAGADQA2AeAeAmQAvAvgJAvQgKAzhAAsQgqAagwAWQg3AXgoAAQgsAAgegag");
	var mask_graphics_276 = new cjs.Graphics().p("AiLCTQgFgGgNgIQgRgKgLgNQgvgwgBiRIAAgBQgBhQA5gdQAWgMAdgEQAbgFA1ADQAuABAWgHQA+AGAyAjIAGAFQA0AtAWA7QAfBAgSA5QgTBAhDAoQgzAfgxARQgnAMgeAAQhMAAgjhHg");
	var mask_graphics_277 = new cjs.Graphics().p("AisCWQgDgIgPgNQgSgOgKgRQgjg+AMirQAKiGBvgEQAZgBBDAIQA1AHAWgGQBMATA1BAQAxA8APBQQAPBOgbBGQgcBMhGAmQhjA2hDAAQhnAAghh8g");
	var mask_graphics_278 = new cjs.Graphics().p("AgrEXQgtgTg2g7IgBgBIgXgSQgVgPgNgQQgXgagLgjQgLglgIgiIgdhuIgBAAQgniJCCgkQAcgIAxgDIAYgCQAxgBAogHQAeABAhAGQA+AHAgASQALACAEADQA4AiAhA/IAIAPQAZA4ABA9QABAWgEAXQgHAtgVAlQgVAlgiAaQgVAQgXAMQgwAYgmAaQgrAhgQgBQgNAFgMAAQgSAAgSgHg");
	var mask_graphics_279 = new cjs.Graphics().p("AAcE9QgvgHhcgyQhYgvgcg9IgghMQgZg5glg5QhtisD9g/QBMgTB8gLQB6gMAMgDQBLATA1BAQAyA8APBQQAOBQgaBEQgdBMhGAmQgxAbgnAtIg0A9QgWATggAAIgRgCg");
	var mask_graphics_280 = new cjs.Graphics().p("AAIF1Qg/gRhnhAQgSgLgQgNQhKg2ggg9IgqhbIhCiPQg6h/BrhIQA8gqBzgYQAsgJA4gHQAxgGA7gFIAngCIAQgBQAeAAAXAEQAdAEASAGQAZAEADAEIAIAGQARANALANQAVARAhApQAMAMANASQAmAwAdBEQAMAbAHAcQAUA/gCA0QAAAigJAdQgFASgKAOQguA9hGAhQhAAfg1ApQg8A1gPgBQgJAFgJACQgQAFgSAAQgRAAgTgEg");
	var mask_graphics_281 = new cjs.Graphics().p("AgKGyQhRgZhyhOQgVgPgTgQQhThEgphHQgfg9gWguQgshagahTQgviSCNhPQBMgtCHgYQA1gKBCgGQA6gGBIgEIAtgCIATgBQAjACAaALQAgAKARAOQAXAKABAKIAGAJQAMAVACAQIA2BLQAMAOARAXQAoA3ApBUQAPAfAMAgQAdBLADA7QAFApgIAhQgFAXgOAOQg+BChSAkQhPAihDAlQhGAwgdgEIgVAFIgXABQgcAAgegJg");
	var mask_graphics_282 = new cjs.Graphics().p("AgeHvQhhgjh8hcQgYgTgWgTQhdhRgxhSQgnhEgag2Qg1hsgUhfQglikCwhXQBcgwCagZQA/gJBLgHQBCgFBVgDIA0gCIAWgBQAoAEAdASQAiAQARAXQAWAQAAAQIAEAMQAGAbgHATQAFATAxBKQAMAQAUAdQAsA9A0BjQATAlAOAhQAoBaAIBAQAKAygIAkQgEAcgRAPQhPBGhfAnQhdAkhSAiQhPAqgqgHQgNACgNABIgIAAQgpAAgtgPg");
	var mask_graphics_283 = new cjs.Graphics().p("ABYJAIgeABQg0gDg2gUQhygsiHhrQgagVgZgXQhnhfg5hcQguhMgeg+Qg/h9gOhrQgbi4DSheQBtgyCtgZQBIgKBWgGQBLgGBhgCIA6gBQATAAAGgBQAtAGAhAYQAkAXARAeQAUAYgCAVIACAPQABAigQAVQgDAVA5BbIAjAzQAvBEBABzQAWAnASAnQAxBoANBFQAPA5gGAoQgEAhgVAQQhgBLhrApQhsAohgAeQhFAcgxAAQgOAAgMgCg");
	var mask_graphics_284 = new cjs.Graphics().p("ABWKDIgigBQg5gGg+gYQiCg1iRh5QgdgZgcgbQhwhshDhmQg0hUgjhGQhIiPgIh3QgRjKD1hmQB8g1DBgaQBSgKBfgGQBUgFBugBIBAgBIAcgBQAyAIAkAfQAnAdAQAnQATAegEAbIAAARQgDApgZAZQgNAWBBBsIAnA6QAyBKBLCDQAbAsAVArQA7B0ASBLQAUBBgGAsQgDAkgZASQhwBPh4AsQh6ArhvAaQhEAWg2AAQgYAAgVgFg");
	var mask_graphics_285 = new cjs.Graphics().p("ABULHQgSgBgTgDQhAgKhEgcQiTg+iciHQgfgcgfgfQh5h5hMhxQg7hbgnhOQhRihgDiDQgGjdEXhtQCMg4DVgaQBbgLBpgFQBdgFB6AAIBHgBIAfgBQA3AKAnAmQApAjAQAvQARAkgGAhIgCAUQgIAxgiAbQgVAYBJB8IAqBBQA1BQBXCRQAeAzAZAvQBFCAAYBSQAYBIgFAwQgDApgdASQiABUiEAuQiJAvh9AVQhCARg4AAQgkAAghgHg");
	var mask_graphics_286 = new cjs.Graphics().p("ABTMKIgpgGQhHgOhKgfQijhIimiVQgigfgigjQiDiGhUh7QhChjgshUQhai1ADiPQAEjwE6h0QCcg7DogaQBkgLBygFQBogFCGABIBNgBQAdAAAFgBQA8AMArAtQArApAPA3QAQArgIAnQgBAMgDALQgNA3grAeQgdAZBRCNIAtBIQA4BXBjCgQAiA4AbAzQBQCNAcBXQAdBQgEA0QgDAtggAUQiQBZiRAwQiYAyiLARQg8ALg3AAQg0AAgvgKg");
	var mask_graphics_287 = new cjs.Graphics().p("ABTNMQgXgDgXgFQhOgRhPgjQizhRixikQglgjglgmQiMiThdiGQhJhqgwhcQhkjGAJibQAOkDFdh8QCsg+D7gbQBugLB8gFQBxgECSABIBTAAQAhAAAEgBQBBAPAvAzQAtAvAPBAQAOAxgJAtIgGAZQgSA+g0AhQgmAbBZCeIAxBOQA7BeBuCwQAmA9AeA2QBaCaAiBdQAiBYgEA3QgCAygkAVQihBdidAyQinA1iaAOQgyAHgvAAQhJAAhCgPg");
	var mask_graphics_288 = new cjs.Graphics().p("ABTOPIgygKQhVgWhVgnQjEhai7iyQgogmgngpQiXihhliQQhQhzg0hjQhtjYAPinQAYkWF/iDQC8hBEPgbQB3gMCGgEQB6gECeACIBaABQAjAAAFgBQBGAQAyA5QAvA2APBIQANA4gLAyQgDAPgFAOQgYBFg9AjQgtAdBhCuQAOAZAlA8IC4EkQApBCAjA6QBjCnAnBjQAnBfgDA7QgCA3gnAVQiyBiiqA1Qi1A4ioAKQglADgkAAQhhAAhZgTg");
	var mask_graphics_289 = new cjs.Graphics().p("AAdPEQljhglDleQoqpZArlyQAjkpGhiKQEnhiHYgNQCDgECqADQCDACAIgCQBMASA1BAQAxA8APBQQAPBRgbBFQgcBMhGAmQg2AeBpC/QAmBGDXFRQCxEVA7CLQBVDJhYAvQmoDglyAAQiZAAiPgmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(274).to({graphics:mask_graphics_274,x:153.9,y:419.5}).wait(1).to({graphics:mask_graphics_275,x:152.3,y:415.5}).wait(1).to({graphics:mask_graphics_276,x:150.7,y:411.1}).wait(1).to({graphics:mask_graphics_277,x:149.2,y:406.6}).wait(1).to({graphics:mask_graphics_278,x:143.9,y:409.8}).wait(1).to({graphics:mask_graphics_279,x:138.3,y:411.9}).wait(1).to({graphics:mask_graphics_280,x:135,y:419}).wait(1).to({graphics:mask_graphics_281,x:131.7,y:425.4}).wait(1).to({graphics:mask_graphics_282,x:128.4,y:432}).wait(1).to({graphics:mask_graphics_283,x:125,y:438.7}).wait(1).to({graphics:mask_graphics_284,x:121.6,y:445.5}).wait(1).to({graphics:mask_graphics_285,x:118.2,y:452.4}).wait(1).to({graphics:mask_graphics_286,x:114.7,y:459.2}).wait(1).to({graphics:mask_graphics_287,x:111.1,y:466.2}).wait(1).to({graphics:mask_graphics_288,x:107.6,y:473.1}).wait(1).to({graphics:mask_graphics_289,x:104,y:480.2}).wait(91));

	// 图层 22
	this.instance_29 = new lib.yld_3_11();
	this.instance_29.setTransform(104.5,394);
	this.instance_29._off = true;

	this.instance_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(274).to({_off:false},0).wait(106));

	// 图层 21 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_263 = new cjs.Graphics().p("AAIDhQmRjtFwjlQFuCXjhEsQgYAgggAAQgYAAgcgRg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AhrC1QkZi1EVjLQBkAEBfAHQBtAQATAyQBRBphfCTQgSAcgZARQgZAKgxALQggAAggAEQgfAIgaAAQgsAAgXgXg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AhAECQmmi/EejxQBkggCJgmQCWgfAhAVQCdBwhkCvQgTAhgcAbQgUALg7AvQghARgmAcQhTBEgoAAQgNAAgIgGg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AgUFmQoyjHEmkYQBkhFC1hTQC9hOAvgIQDqB3hpDNQgUAlggAmQgPAMhEBRQgiAjgsAzQh4CNglAAQgFAAgDgCg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AAXHOQq+jREwk+QBkhqDfiAQDmh8A9gmQFwCXjhEuQgNAQieDtQiXDZgiAAIgDAAg");
	var mask_1_graphics_268 = new cjs.Graphics().p("ABZHbQkzgRichvQhZhGgMhaQgOhQAyhdIACgCQAghJBLhQQBBhKBlhHIAIgFQDTiHBygwQCRAfBaA2QCQCBiFDHQgKARglA1QgMASgDAoQgIA4gaBBIgMAjQhtDdhTAfIgaAAg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AlUGrQhmg/gmheQglhXAXhoIABgBQALhcA+hgQA4hgBnhVIAHgGQDDiQCkg8QCWAFB+AeQDICAh+DUQgOAagkAzQgKAPAOAxQAPBEgKBCQgCAUgDATQg9DYiHBIIgdAHQhsAThcAAQi9AAiHhLg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AkpH0Qhyg4g/hiQg+hdgEhzIABgBQgJhwAvhvQAvh1BphkIAHgHQCxiaDYhGQCagWCiAGQEACAh4DfQgRAjgjAxQgIALAfA9QAlBOAGBEQAEAWAAAVQgNDTi7BxIggANQi0BFiaAAQiHAAh1g0g");
	var mask_1_graphics_271 = new cjs.Graphics().p("AkPJHQiAgxhYhlQhWhjgeh/QgfiDAih/QAmiLBrhyQD7kLIcg0QFwCXjhEuQgGAHAwBIQA8BbAWBEQBPD7kyCwQjiCBjJAAQhyAAhqgpg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AgLJYQi2gCibhLIgTgJQiGhIhPhwIgBgBQhQh2ACiGQgBiCBMh8QBEh8CIhnQCZh2DihNQD7gCBpBTIABACQAEAEAOABQAWAHAhAEQBkAZA3AuQCDBnhpDdQgGAWAbBCQANAqAGAsQALAygBAqQACB0hFBaQhVBti1BCIgDABQifA5icAAIgUAAg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AhxJvQjBgiibhgIgTgMQiOhehFh7IAAgBQhLiJAiiMQAeiFB0h4QBihtCmhbQCyhlD6hJQE1BKg5C/IgBADQAAAEATgBQATACArgCQBxADBFAgQCuBNhHD/QgGAhAHA9QAAAxgHA0QgEA1gOAuQghB1hdBSQh1BkjEAkIgDAAQhXAQhZAAQhfAAhjgTg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AjYJ6QjNhDich1Qijh7g/iOQhGidBCiUQCgloNbjYQFwCXjhEuQgEAFAZgEIBGgLQB+gTBTAUQEgBDihHnQhADEinBmQiVBcjWAFIgaAAQi3AAjDg/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(263).to({graphics:mask_1_graphics_263,x:82.6,y:370.2}).wait(1).to({graphics:mask_1_graphics_264,x:75.9,y:376.4}).wait(1).to({graphics:mask_1_graphics_265,x:69.4,y:383.4}).wait(1).to({graphics:mask_1_graphics_266,x:62.7,y:388}).wait(1).to({graphics:mask_1_graphics_267,x:56,y:392.3}).wait(1).to({graphics:mask_1_graphics_268,x:54.1,y:395.3}).wait(1).to({graphics:mask_1_graphics_269,x:51.6,y:399.6}).wait(1).to({graphics:mask_1_graphics_270,x:48.1,y:404.6}).wait(1).to({graphics:mask_1_graphics_271,x:46.4,y:408.5}).wait(1).to({graphics:mask_1_graphics_272,x:49.3,y:412.9}).wait(1).to({graphics:mask_1_graphics_273,x:53.9,y:413.7}).wait(1).to({graphics:mask_1_graphics_274,x:58.8,y:415.8}).wait(106));

	// 图层 20
	this.instance_30 = new lib.yld_3_10();
	this.instance_30.setTransform(48,380);
	this.instance_30._off = true;

	this.instance_30.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(263).to({_off:false},0).wait(117));

	// 图层 19 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_233 = new cjs.Graphics().p("AiVCkQlhikEQjHQGmhOCRE2QArBchoAuQhnAthnAAQhtAAhug0g");
	var mask_2_graphics_234 = new cjs.Graphics().p("AiiDVQgngTgjgVQgygegiguQhLhTAWhcQARhSBVhPQAwgcAwgHQCKgOBbAuIAZAKIA5AbQBTAuA8BHQAwA4AiBEQAzBrhfA+QgfAWghASQgXALgcAJQgsAMgwABIgSAAQh7AAiDhBg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AivEGQgsgXgogZQg1ggglhAQhKhfAShuQANhlBPhbQAtgvAygKQChgUBgBEQAKAEASAKQApAYAVAKQBeA6BEBPQA4BCAnBMQA7B5hXBOQgcAeghAaQgXAQggAMQgxARg4ACIgUABQiLAAiZhQg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Ai9E3QgxgagugeQg3gignhRQhJhsANiAQAKh3BIhoQArhCAzgNQC5gZBkBaQAKAFAUANQAxAfAUAKQBpBFBLBYQBABMArBUQBECHhPBeQgaAmghAiQgWAUglAQQg2AVhAADIgXABQiZAAivheg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AjLFpQg2geg0giQg5gkgqhjQhHh4AJiSQAFiKBDh1QAohUA0gRQDRgeBpBwIAgAVQA4AnATAJQBzBRBSBiQBJBVAvBcQBNCUhIBvQgXAuggApQgWAZgqAUQg6AahJADIgaABQioAAjEhrg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AjZGZQg7ghg6gmQg7gmgsh0QhGiFAEikQABidA9iCQAlhmA2gVQDpgjBvCGIAhAZQA/AuARAJQB+BdBaBqQBQBfA1BkQBUCig/B/QgUA2ggAxQgWAeguAYQg/AehRAEIgcABQi5AAjZh6g");
	var mask_2_graphics_239 = new cjs.Graphics().p("AjoHKQhAgkg/grQg9gogviFQhFiSAAi2QgDiwA3iOQAih5A4gYQEAgpBzCdIAkAdQBHA1APAJQCJBoBhBzQBYBpA6BrQBdCxg3CPQgSA9ggA6QgVAigzAcQhEAihZAFIgfABQjJAAjuiIg");
	var mask_2_graphics_240 = new cjs.Graphics().p("Aj2H8QhFgohFgwQg/gqgyiWQhEiegEjIQgHjDAxibQAfiMA5gbQEYguB4CzIAnAgQBNA9APAIQCTB1BoB7QBhByA+B0QBlC/gvCfQgPBFggBCQgVAmg4AgQhIAnhiAFIghABQjYAAkDiVg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AkFItQhKgrhLg0QhBgsg0ioQhDiqgIjaQgMjXAsinQAcieA6gfQExgzB7DJIArAjQBUBFANAHQCeCBBvCEQBpB8BDB8QBtDMgnCwQgMBNggBJQgUArg9AkQhNAshqAFIgkABQjnAAkZijg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AkTJdQhPgthRg5QhDgug3i6QhBi2gOjsQgPjqAmizQAZixA8giQFIg5CADgQAGAGAnAgQBbBNAMAGQCpCNB3CNQBwCFBICEQB1DageDAQgKBVggBRQgUAxhBAnQhSAwhyAGIgmACQj3AAkuizg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AkiKPQhUgyhWg9QhGgwg5jLQhAjDgSj+QgTj8AgjAQAXjEA8glQFgg+CFD1QAFAHArAkQBiBTAKAHQCzCYB/CWQB4CPBMCLQB/DpgXDQQgIBdgfBZQgTA0hGAsQhXA0h6AHIgpACQkGAAlEjAg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AkxLAQhZg1hchCQhHgyg9jcQg+jPgWkQQgYkPAajNQAUjXA+goQF4hECJEMQAFAIAtAmQBqBbAJAGQC+CkCFCfQCBCZBRCTQCGD3gODgQgFBkgfBiQgTA4hLAwQhbA5iDAHIgsACQkVAAlZjOg");
	var mask_2_graphics_245 = new cjs.Graphics().p("Ak/LxQheg4hihGQhJg0g/juQg+jcgakiQgckiAUjZQASjpA/gsQGQhJCNEhQAEAJAxAqIB4BoQDJCvCNCoQCJCjBVCbQCPEEgHDwQgCBtgeBpQgTA+hPAzQhgA9iLAJIgvABQkkAAlvjcg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AoYKcQhMg2hBj/Qg8jogfk0Qggk2AOjlQAPj8BBgvQGnhOCRE3QAEAJA0AtIB+BvQDUC8CUCwQHvJKiJH+QgSBChUA3QhlBCiTAJQgZABgZAAQl/AAoDlwg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AClO5QiHgciWg+Qiag+imhiQhagthTjpIgNgfQhUjKg5kOQghiYgWiIQgLh7AGiBQAMj4A+hEQA1gSAxgLQD6gxB/CEQAeAdAXAoQAFADAxAlQApAZAcAUQA4AqAIADQCjB2B2CMQANAOAQANQAdAfAlAgIAJAJQB1BzBXByQFAGpg0GXQgHA2guAvQgLAMgOAMQg6A2hXAcQghALglAHQg6AMhAADIgXAAQhnAAh1gYg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AEaOfQiKgNidgvQiiguiwhTQhpglhjjRIgRgcQhzi3hWkCQgziOgmiGQgShzAEiUQALj0A6hZQAxgYAtgTQDlhSB5BbQAdASAXAeQAGgEAuAdQAoAOAdAQQA4AkANADQCzBpB3CYQAMANAUANQAbAcAuAeIAKAJQCABsBjBsQFjGQADGbQAAA3gjAwQgIANgKANQgrA8hNAmQgdAPgiANQg1ATg/ALQhCAKhKAAQgyAAg1gEg");
	var mask_2_graphics_249 = new cjs.Graphics().p("ABYNoQipgdi4hFQh4gch0i6IgVgaQiSikhzjzQhEiGg3iEQgYhsACilQAJjwA2hvQAsgeAqgbQDQhyB0AxQAbAHAWATQAIgJAqAVQAoACAdAMQA5AfASACQDFBbB1ClQALANAYANQAaAZA2AcIALAIQCNBkBtBmQGGF3A7GhQAIA2gYAzQgFANgHAOQgcBChDAwQgYAUggARQgxAbg9ATQhrAfiJAEIgYAAQiDAAiXgdg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AC8NxQizgNi/g3QiGgSiGikIgZgWQiwiSiQjkQhViAhIiBQgfhkABi3QAGjsAziEIBNhHQC8iTBuAHQAagEAWAJQAJgPAnANQAngJAdAHQA6AaAXABQDVBOB2CxQAKANAbAMQAZAWA+AcIAMAHQCaBbB4BgQGoFgBzGkQAPA3gNA0QgCAPgEAOQgMBIg4A6QgVAZgdAWQgsAig9AcQhnAtiMATQhOAJhVAAQhKAAhQgHg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AhlNrQiWgKiXiNIgdgTQjOh+itjWQhnh5hZiAQgmhdAAjHQAFjoAuiZIBGhWQCmiyBpgkQAZgPAVgBQALgWAjAFQAngTAeADQA6AUAcABQDlBAB4C+QAJAMAfAMQAVATBGAaIAOAHQCnBTCDBaQHKFJCrGnQAXA3gCA2QABAPgBAQQADBOguBEQgRAcgaAbQgoAqg7AlQhkA6iQAjQiTAhizAAIgbAAQivAAi5glg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AgfOiQikgBinh1IghgRQjuhrjJjHQh4hyhqh+QgthVgCjZQADjlAsiuIA8hjQCSjTBihOQAZgZAVgMQALgcAhgDQAmgeAegCQA7APAhAAQD1AzB5DKQAIAMAiALQAWARBNAYIAOAGQCzBMCPBUQHsEwDjGrQAeA5AIA3QAFAQACAQQATBUgkBOQgNAhgXAgQgkAyg6AtQhhBIiTAyQiVAwi7AQQhTAIhVAAQh1AAh4gPg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AAjPVQixAIi4hfIglgNQkMhYjmi5QiKhqh7h8QgzhOgEjsQACjfAnjDIA0hyQB+jzBch4QAXglAVgWQANgiAdgLQAlgpAfgGQA8AKAmgBQEEAlB6DXQAHAMAmAKQAUAOBXAXIAQAGQC+BDCZBOQIPEYEbGvQAlA5ATA5QAIARAFARQAjBagaBYQgJAlgVAlQgfA5g4A3QheBViXBBQiYBAjCAfQiaAaijAAQg1AAg2gCg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AklPKIgpgKQkrhGkCipQichjiMh6Qg6hGgFj/QAAjbAkjYIAriAQBpkUBWihQAXgwAUggQAOgoAbgTQAkg1AfgKQA9AEAqgBQEVAYB6DjQAHALAoAKQATALBgAWIARAFQDKA7ClBIQIxEAFSGzQAtA6AeA6QALASAIASQAyBggPBiQgGAqgRAqQgbBAg3A/QhbBjiaBRQibBPjJAuQjVA0jkADQglADglAAQicAAijg6g");
	var mask_2_graphics_255 = new cjs.Graphics().p("AkGQVIgtgIQlKgykfibQishbidh4QhBg/gGkQQgDjZAgjsIAjiOQBUk0BRjMQAWg6ATgrQAPguAYgbQAjhAAfgOIBugDQEkAKB7DwQAGALAsAKQARAIBoAUIASAEQDaAzCtBCQJTDnGLG5QA0A5ApA9QAOASALATQBCBmgFBsQgCAugOAvQgXBIg2BHQhXBxieBgQieBfjQA+QjdBDjtASQhIAJhJAAQiJAAiPggg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AjoRfIgxgEQloggk8iMQi+hTiuh3QhHg3gIkiQgFjWAdkAQAMhMAOhRQBAlUBLj1QAUhGAUg1QAQg0AUgjQAjhLAfgTQA/gGA0gDQE1gDB7D8QAFALAwAJQAQAFBwATIATAEQDmArC4A8QJ2DPHDG+QA7A7A0A7QARAUAOATQBRBsAFB2QADAzgMA0QgSBPg1BQQhUB/ihBvQihBujXBNQjlBUj2AgQiAAUiDAAQhiAAhkgLg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AkASjQpygUn8k3QhOgvgJk0QgJkQAtmCQArl0BFkgQBKkyBBgxQGohOCRE4QAEAKAzAJICIATQD+AkDMA5QLvDOIlIlQCDCBASCXQARCOhUCSQhSCMikB/QikB9jeBdQm9C7n0AAIhZgBg");
	var mask_2_graphics_258 = new cjs.Graphics().p("A11NpIgLgIQhGg7gJkhQgIkJAql2IADgXQAolaA/kRIALgtQA4jpA0hOQAUgaATgLQFyhBCaDvQAUAeAdAjQAGAIAjAGIAPADICHARQBwAOBlASQCEAWB2AdQJsCVIBFgQBzBMBZBkIADAEQBkBxAJCFQACASAAAUQADCKhZCQQgYAngeAmQhOBih0BcQhrBUiBBHQhGAnhMAjQnkDgoeAFIgNABIgeAAQpkAAnpkrg");
	var mask_2_graphics_259 = new cjs.Graphics().p("A1/N4IgMgIQhHg5gJkkIAAgBQgIkKArl4IADgXQAoldBAkSIAKgtQA7jvA2hIQAWgWAVgJQFyg9CXD4QARAcAnAeQAJAGAhAGIAPACQAhADBmANQBxANBmAPQCEATB5AZQJsCCIgEtQCABCBQBmIAEAFQBXBwgJCNIgBAlQgLCIheCOQgZAmgfAmQhRBihyBdQhqBVh/BLQhGAqhLAlQnkD1oXAcIgMABQhHAEhEAAQotAAm9kOg");
	var mask_2_graphics_260 = new cjs.Graphics().p("A2NOEIgMgHQhIg3gKkoIAAgBQgIkLArl7IADgXQAplfBBkTIAKgtQA9j2A4hBQAYgSAXgIQFzg5CTEDQAPAYAwAZQAMAGAfAEIAQACQApAEBdAKQByAMBmAMQCFARB8AVQJtBtI/D7QCNA4BHBpIADAFQBMBwgbCXIgGAjQgYCEhjCNQgaAlgfAlQhUBjhxBeQhpBXh+BOQhFAshKAoQnkEKoPAzIgMACQh3AMhyAAQn+AAmYj3g");
	var mask_2_graphics_261 = new cjs.Graphics().p("A2eOPIgLgIQhLg0gJksIAAAAQgJkNAsl+IADgXQAplhBCkUIALgtQA/j8A5g7QAagNAZgHQF1g1COEMQANAWA6AUQAPAEAdAEIAPACICGAMQB0AKBmAKQCFAOB/ASQJuBYJeDIQCZAuA/BsIADAFQBBBwgvCfIgJAlQglB+hoCLQgcAlgfAlQhXBjhvBeQhpBah8BSQhFAuhIAqQnlEfoHBKIgMACQijAYiZAAQnVAAl4jig");
	var mask_2_graphics_262 = new cjs.Graphics().p("A2xOZIgMgIQhMgygJkvIAAgBQgJkOAtmAIADgXQApljBCkWIALgtQBCkCA6g0QAdgKAbgFQF1gyCLEXQAKATBEAOQASAEAbADIAPABICGALIDcAQQCFALCBAOQJwBFJ9CUQClAkA3BvIACAGQA1BvhACnIgOAkQgyB8htCJQgdAkggAkQhZBkhuBfQhpBbh6BWQhFAxhGAsQnlE0n/BhIgNADQjKAmi6AAQmyAAlcjQg");
	var mask_2_graphics_263 = new cjs.Graphics().p("A3ROaQhOgvgKk0QgIkQAtmCQArl0BFkgQBJkyBCgxQGnhOCRE4QAKAUB6AKIFyAWQLqAuMsB2QC2AbAsB3QAqBwhTCvQhQCpiyDBQi1DFj0C1QosGfpHCHQjuA3jYAAQmaAAlHjIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(233).to({graphics:mask_2_graphics_233,x:-145.9,y:354}).wait(1).to({graphics:mask_2_graphics_234,x:-142.3,y:360.3}).wait(1).to({graphics:mask_2_graphics_235,x:-138.8,y:366.7}).wait(1).to({graphics:mask_2_graphics_236,x:-135.1,y:373}).wait(1).to({graphics:mask_2_graphics_237,x:-131.5,y:379.3}).wait(1).to({graphics:mask_2_graphics_238,x:-127.8,y:385.6}).wait(1).to({graphics:mask_2_graphics_239,x:-124.1,y:391.9}).wait(1).to({graphics:mask_2_graphics_240,x:-120.4,y:398.2}).wait(1).to({graphics:mask_2_graphics_241,x:-116.7,y:404.5}).wait(1).to({graphics:mask_2_graphics_242,x:-113,y:410.9}).wait(1).to({graphics:mask_2_graphics_243,x:-109.3,y:417.2}).wait(1).to({graphics:mask_2_graphics_244,x:-105.6,y:423.5}).wait(1).to({graphics:mask_2_graphics_245,x:-101.9,y:429.8}).wait(1).to({graphics:mask_2_graphics_246,x:-98.2,y:436.1}).wait(1).to({graphics:mask_2_graphics_247,x:-96,y:438.4}).wait(1).to({graphics:mask_2_graphics_248,x:-93,y:440.6}).wait(1).to({graphics:mask_2_graphics_249,x:-89.7,y:442.8}).wait(1).to({graphics:mask_2_graphics_250,x:-86.1,y:444.6}).wait(1).to({graphics:mask_2_graphics_251,x:-82.2,y:444.2}).wait(1).to({graphics:mask_2_graphics_252,x:-77.5,y:444.4}).wait(1).to({graphics:mask_2_graphics_253,x:-72.4,y:445}).wait(1).to({graphics:mask_2_graphics_254,x:-67,y:446.4}).wait(1).to({graphics:mask_2_graphics_255,x:-61.4,y:447.8}).wait(1).to({graphics:mask_2_graphics_256,x:-55.7,y:449.3}).wait(1).to({graphics:mask_2_graphics_257,x:-49.9,y:451.3}).wait(1).to({graphics:mask_2_graphics_258,x:-48.9,y:449.7}).wait(1).to({graphics:mask_2_graphics_259,x:-47.7,y:448.4}).wait(1).to({graphics:mask_2_graphics_260,x:-46.1,y:447.3}).wait(1).to({graphics:mask_2_graphics_261,x:-44.3,y:446.3}).wait(1).to({graphics:mask_2_graphics_262,x:-42.2,y:445.5}).wait(1).to({graphics:mask_2_graphics_263,x:-39.9,y:444.7}).wait(117));

	// 图层 18
	this.instance_31 = new lib.yld_3_9();
	this.instance_31.setTransform(-145,380);
	this.instance_31._off = true;

	this.instance_31.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(233).to({_off:false},0).wait(147));

	// 图层 17 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_207 = new cjs.Graphics().p("AhQDoQiegrhOh+Qh9jHDQhXQFThjDUDbQBQBTg6BsQhZCni5AAQhCAAhQgXg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AANEhQgmgBgvgIIgSgEQgygJgugSQh4gug/hhQglg5AAhBQgHheA/g8QAfgdA8gdQBGgYBIgRQCWgjBuAcQCAAYBhBiIAMANQA+BKhLCDQgYAqgdAjQhMBfhsAgQgyAWgvAAIgUgBg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AhPFFIgUgCQg4gIg1gQQiPgshHhnQgmg6AHhVQAChrBChAQAfggBGgkQBKgeBUgaQCtg3ByASQCVALBtBsIAOAOQA6BGhhCiQgbAuggAqQhVBthvAxQhEArg2gDIgdABQgfAAgkgEg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AhWFzIgVgCQg/gFg8gQQilgphOhuQgog6APhoQAKh4BEhGQAggiBPgsQBQgjBegkQDEhKB1AJQCrgCB5B1IAQAQQA2BBh2DBQgeAygkAxQheB8hxBBQhNA9gygCQgfAEgpAAIgkAAg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AhzGgQhFgDhEgOQi8gnhVh1Qgpg6AXh6QASiHBGhLQAhgkBZgzQBUgpBpgtQDcheB4gBQDAgPCFCAIASARQAzA8iMDhQghA2goA3QhnCLh0BQQhVBPgvABQgvAJhHAAIgXgBg");
	var mask_3_graphics_212 = new cjs.Graphics().p("Ah8HQQhLAAhLgOQjTglhch7Qgqg6AfiNQAaiUBHhRQAiglBjg8QBYguB1g2QDzhyB8gKQDVgcCRCJIATATQAwA4iiEAQgkA5gsA+QhvCZh2BhQheBhgsACQgxANhPADIgagBg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AkoH2QjpgihkiCQgsg6AnigQAiiiBKhWQAignBuhEQBcgzCAhAQELiFB+gUQDrgpCeCUIAUAUQAtAzi4EfQgnA9gwBEQh3Cph5BxQhnBygpAEQg0ARhXAFIgbAAIgRAAQhKAAhJgLg");
	var mask_3_graphics_214 = new cjs.Graphics().p("Ak+IqQkAgghriJQgtg6AviyQAqixBMhbQAjgpB3hLQBhg5CMhJQEhiZCCgeQEAg2CqCeQALAKALAMQApAujNE+QgqBCg0BKQiAC3h8CBQhvCEglAHQg3AUhfAHIgdACIgqABQhEAAhEgJg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AlUJdQkWgehziPQgug6A3jFQAyi+BOhhQAjgrCBhTQBmg+CWhSQE5isCFgoQEVhDC3CnIAXAYQAmApjiFeQguBHg4BPQiIDGh+CRQh5CWghAIQg6AYhnAKIgfACQgiACgjAAQg9AAg9gHg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AlqKRQktgbh6iWQgvg7A+jXQA7jOBQhkQAkgtCLhbQBqhDCihcQFQjACIgxQErhQDCCxIAZAZQAjAlj4F8QgxBMg8BVQiRDViBChQiACngfALQg9AbhuANIghADQgvADguAAQg4AAg4gFg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AmALFQlEgaiBicQgxg7BHjpQBCjdBShpQBAhTGVjsQFojUCLg7QFWhjDUDcQAlAmmHJBQiaDkiDCxQiKC5gbAMQhAAfh2APQhLAKhOAAQgyAAgygEg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AmdLXQlWgQiFiiQgvg5A3isQAKgiAPgkQA1iVBHhkQAZgoAeghQA0g5DCh4IDNh9IAogZQCghgCJhOQCRhPBRgkQBQgaBGgJQDrgcCjCXQAOAMAJARQAVAqj0F2QhDBohUB4Ig0BLQg+BagxBDQhJBchLBTIgLANQiGChgoAQQhBAehqARIgSACQhfANhgAAQgkAAgkgBg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Am7LpQlngIiKinQg0hABCisQANghASglQA9iQBWhnQAdgmAjgiQA9g6DGh4QB0hEBhg8IAogbQCahgCdhZQCWhTBWgoQBVgeBFgLQD3gkCpCeQAMANAGAVQAMAzj4F8QhIBuhVB6Ig3BPQhHBkguA8QhOBYhXBSIgNANQiKCXg2AUQhHAehsATIgSADQh1AShzAAIgqAAg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AnYL6Ql5ACiOiuQg7hHBOirQAQgiAUgkQBGiLBmhpQAfglAogiQBGg8DKh3QCGhMBXg5IApgdQCUhfCxhmQCbhWBbgrQBZgjBFgNQEDgsCuCnQAMALACAZQAEA/j9GAQhNB1hWB7Ig6BSQhPBvgsA3QhTBUhjBQIgOAMQiQCNhEAYQhNAghtATIgTADQiLAZiFAAIgLAAg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AwTJiQhAhPBZiqQASghAYglQBNiGB3hrQAhglAtghQBPg+DPh3QCVhSBPg3IAqgfQCOheDEhxQCghaBggvQBdgnBFgPQEPg0CzCuQAMAMgBAdQgFBIkBGGQhSB7hYB9Ig8BWQhYB5gqAwQhYBQhvBQIgQALQiUCDhSAcQhTAghuAVIgUAEQiXAciOADIgrABQloAAiKiqg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AxIJ2QhGhWBlipQAUgiAbglQBViACHhuQAjgjAygiQBahADSh2QCmhZBHg0QAQgPAZgSQCHheDah9QCkhdBlgyQBigrBFgSQEag8C5C2QAMALgFAhQgOBTkFGLQhXCChaB/Ig/BYQhgCEgnAqQhdBMh8BOIgRALQiZB5hfAgQhbAhhuAWIgUAEQifAgiQAFQgpACglAAQlfAAiHing");
	var mask_3_graphics_223 = new cjs.Graphics().p("Ax9KKQhMhdBwipQAXgiAfglQBch7CXhxQAmghA3glQBjg/DWh2QC2hgA/gwQAQgQAagTQCAheDviJQCohgBrg2QBmgvBEgUQEmhEC/C9QALAMgIAkQgYBekJGPQhbCHhcCDIhCBbQhoCPgkAkQhjBIiIBMIgSALQifBuhsAkQhhAihvAYIgVAFQimAjiTAIQg5AEg0AAQlXAAiGimg");
	var mask_3_graphics_224 = new cjs.Graphics().p("AyyKeQhRhlB7ioQAZgiAiglQBlh2CnhzQAoggA8glQBshBDah2QDHhnA2gtQAPgQAbgVQB7hdECiVQCthkBwg5QBqg0BEgWQEzhLDDDEQALAMgLAoQghBokNGUQhgCOheCEIhEBfQhxCZgiAeQhoBEiTBLIgUALQikBjh6AoQhnAjhwAaIgWAFQisAmiXALQhIAGhBAAQlTABiEilg");
	var mask_3_graphics_225 = new cjs.Graphics().p("AzoKxQhXhsCHinQAcgjAlgkQBshxC4h2QAqgeBBgmQB1hDDfh0QDXhvAtgqQAPgRAcgWQB1hcEWiiQCyhmB1g9QBug4BEgYQE+hUDJDNQALAKgPAsQgpBzkSGaQhlCUhfCGIhHBhQh5CkggAZQhtBAigBJIgVAKQipBZiIAsQhtAlhxAaIgXAFQiyAqiaAOQhYAJhOAAQlNAAiEikg");
	var mask_3_graphics_226 = new cjs.Graphics().p("A0dLFQhdh0CSinQAegiApglQB0hsDHh4QAtgcBGgnQB/hEDjh0QDnh2AlgnQAOgRAdgYQBwhcEpitQC2hqB6hBQB0g8BDgaQFKhbDPDUQAKAKgTAwQgyB9kWGfQhqCbhhCHIhJBlQiBCugeATQhyA8isBIIgXAKQitBPiXAwQhzAlhyAcIgXAFQi6AticASQhnAMhYAAQlLAAiDikg");
	var mask_3_graphics_227 = new cjs.Graphics().p("A1TLYQhih7CdimQB8iCEkimQCFhLFkixQD4h9AcgkQBAhTGTjsQFqjUCLg7QFWhjDUDcQAlAmmHJDQiaDiiDCxQiKC5gbAMQh/A8jIBMQkzB2kQBGQlfBajyAAQlIAAiDikg");
	var mask_3_graphics_228 = new cjs.Graphics().p("A1aMtQjEjNEsj1QCYiMFHiuQCThME2ibQDkhxAagiQBAhTGTjsQFpjUCMg7QFVhjDUDcQAlAmmHJDQiZDiiECxQiJC5gbAMIlOCdQlBCTkSBYQmqCMkPAAQkNAAh1iKg");
	var mask_3_graphics_229 = new cjs.Graphics().p("A1gN+QknkeG7lEQC0iVFpi0IGqjVQDPhlAYgfQA+hTGVjtQFqjTCLg7QFWhjDUDbQAlAnmHJDQiaDjiDCvQiKC5gbANQhfAsj2CFQlRCvkRBrQnrDDkjAAQjiAAhph2g");
	var mask_3_graphics_230 = new cjs.Graphics().p("A1nPOQmJlwJKmSQDRieGLi9QCyhVDZhrQC6haAUgdQBAhTGVjsQFqjUCLg7QFWhjDUDcQAlAmmHJDQiaDkiDCvQiKC5gbAMQhOAlkNCiQlgDLkSB9QonD+kyAAQjAAAhghlg");
	var mask_3_graphics_231 = new cjs.Graphics().p("A1uQdQnrnCLZnhQDuilGsjHQDBhZCqhTQClhOAUgaQBAhTGVjtQFpjTCMg7QFVhjDUDbQAlAnmHJDQiZDjiECvQiJC5gbANQg/AdkjC+QlvDokTCOQpdE9k9AAQimAAhYhXg");
	var mask_3_graphics_232 = new cjs.Graphics().p("A10RqQpOoUNoovQEKivHOjPQDQhcB8g7QCQhDASgXQBAhTGVjtQFqjTCLg7QFWhjDUDbQAlAnmHJDQiaDjiDCxQiKC3gbANQguAWk7DaQl8EEkVChQqPF9lGAAQiRAAhQhMg");
	var mask_3_graphics_233 = new cjs.Graphics().p("A17S3QqwpmP3p8QEni6HwjXQDfhfBMgjQB9g4AQgVQBAhTGVjsQFqjUCLg7QFWhjDUDcQAlAmmHJDQiaDkiDCxQiKC3gbAMQgeAPlRD2QmLEhkWCzQq+G/lOAAQiAAAhKhCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(207).to({graphics:mask_3_graphics_207,x:119.5,y:197.5}).wait(1).to({graphics:mask_3_graphics_208,x:114.2,y:202.4}).wait(1).to({graphics:mask_3_graphics_209,x:108.9,y:207.1}).wait(1).to({graphics:mask_3_graphics_210,x:103.5,y:211.8}).wait(1).to({graphics:mask_3_graphics_211,x:98.1,y:216.4}).wait(1).to({graphics:mask_3_graphics_212,x:92.7,y:220.9}).wait(1).to({graphics:mask_3_graphics_213,x:87.3,y:225.3}).wait(1).to({graphics:mask_3_graphics_214,x:81.9,y:229.8}).wait(1).to({graphics:mask_3_graphics_215,x:76.6,y:234.3}).wait(1).to({graphics:mask_3_graphics_216,x:71.2,y:238.7}).wait(1).to({graphics:mask_3_graphics_217,x:65.8,y:243.2}).wait(1).to({graphics:mask_3_graphics_218,x:60.3,y:244.9}).wait(1).to({graphics:mask_3_graphics_219,x:54.7,y:246.6}).wait(1).to({graphics:mask_3_graphics_220,x:49.2,y:248.3}).wait(1).to({graphics:mask_3_graphics_221,x:43.7,y:250.1}).wait(1).to({graphics:mask_3_graphics_222,x:38.3,y:251.9}).wait(1).to({graphics:mask_3_graphics_223,x:32.9,y:253.7}).wait(1).to({graphics:mask_3_graphics_224,x:27.5,y:255.6}).wait(1).to({graphics:mask_3_graphics_225,x:22.1,y:257.4}).wait(1).to({graphics:mask_3_graphics_226,x:16.8,y:259.3}).wait(1).to({graphics:mask_3_graphics_227,x:11.4,y:261.1}).wait(1).to({graphics:mask_3_graphics_228,x:6.8,y:267}).wait(1).to({graphics:mask_3_graphics_229,x:2.1,y:273.2}).wait(1).to({graphics:mask_3_graphics_230,x:-2.6,y:279.5}).wait(1).to({graphics:mask_3_graphics_231,x:-7.2,y:286}).wait(1).to({graphics:mask_3_graphics_232,x:-11.9,y:292.6}).wait(1).to({graphics:mask_3_graphics_233,x:-16.6,y:299.2}).wait(147));

	// 图层 16
	this.instance_32 = new lib.yld_3_8();
	this.instance_32.setTransform(-147,222);
	this.instance_32._off = true;

	this.instance_32.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(207).to({_off:false},0).wait(173));

	// 图层 15 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_186 = new cjs.Graphics().p("AjLCQQgvhLAahXQA+jcD0gcQETCDjdEZQhfB5hTAAQhWAAhLh7g");
	var mask_4_graphics_187 = new cjs.Graphics().p("AiODyQgwgpgwhSQgMgVgJgWQgag/AGgwQAAgTAFgUQAHgYAKgUQALgVAPgQQCCiPDZgFIASAKQA6AhAjApQAlArAMAyQAMA1gQA9QgOAzgiA5QgdAugoAtIgFAHQgjAnghAZQgyAugyAAQg9AAg/g+g");
	var mask_4_graphics_188 = new cjs.Graphics().p("AinDvQgzgyg3hhQgOgZgLgaQgihOAEgyQgCgVAHgYQAIgcANgXQAPgXATgPQC3iHDqANIAWAMQBDAoAnAzQAoA0AJA9QALA+gWBEQgTA+gqBBQglA1gwAzIgFAHQgrArgpAaQgoAjgqAAQhNAAhYhqg");
	var mask_4_graphics_189 = new cjs.Graphics().p("Ai/DtQg3g8g+hwQgPgdgNgeQgqhfACgxQgEgYAHgbQAKghAQgZQASgaAZgOQDrh+D8AfIAYAOQBNAvAqA9QArA9AHBHQAJBIgbBNQgZBHgyBIQgrA9g5A3IgFAHQg0AwgwAbQghAcglAAQhWAAhxiZg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AjYDrQg6hFhEiAQgRgggPghQgyhyABgwQgHgbAIgfQALgmAUgaQAWgdAdgNQEgh2ENAyIAcAQQBWA2AtBHQAuBFAFBTQAGBQggBXQgeBQg5BPQgzBGhBA7IgGAHQg8A1g3AcQgcAWggAAQhfAAiKjKg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AjwDqQg+hPhLiPQgSgigRgmQg7iDgBgwQgJgeAKgiQAMgrAXgdQAZgeAjgNQFUhtEfBDIAeATQBgA9AwBRQAxBOADBdQAEBZgmBhQgjBZhABXQg7BNhJBAIgGAHQhEA5g/AdQgYASgbAAQhmAAiij8g");
	var mask_4_graphics_192 = new cjs.Graphics().p("AkKDqQhAhZhSibQgUgogTgrQhDiUgCgwQgMghALglQANgvAbgfQAcghAogMQGIhkExBVIAhAVQBqBEAzBbQA0BXABBnQACBjgsBqQgoBhhIBfQhCBVhRBFIgHAGQhMA/hHAdQgUAPgYAAQhrAAi7kvg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AkiDrQhEhjhZirQgWgrgVgvQhLilgDgvQgOgkALgpQAPgzAegiQAggjAtgLQG8hcFDBnIAkAXQBzBMA3BlQA2BfgBByQAABsgxBzQgtBrhQBmQhKBchZBKIgHAGQhUBEhPAeQgRAMgWAAQhvABjSljg");
	var mask_4_graphics_194 = new cjs.Graphics().p("Ak7DsQhIhthei6QgYgvgXgzQhTi2gGgvQgQgmANgsQAQg4AhgkQAjgmAzgKQHvhUFWB6IAnAZQB8BTA6BvQA5BogDB8QgCB1g2B9QgzBzhXBuQhRBkhiBOIgHAHQhdBIhWAgQgPAKgTAAQhzAAjqmXg");
	var mask_4_graphics_195 = new cjs.Graphics().p("AlUDtQhLh2hmjJQgZgzgZg3QhcjHgGguQgTgqAOgvQARg9AkgmQAngoA4gJQIjhLFoCLQAWANAUAOQCFBaA+B5QA8BxgFCHQgEB8g8CIQg4B9hfB1QhZBshpBTIgHAGQhmBNhdAhQgOAIgQAAQh2AAkCnMg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AltDvQhPiAhsjYQgbg2gbg7QhkjZgIguQgVgsAPgzQAShBAogoQAqgrA+gIQJXhDF5CeQAYAOAVAPQCPBhBBCDQA+B6gHCRQgGCGhBCRQg9CFhmB9QhhB0hyBXIgHAHQhuBShlAhQgMAIgOAAQh4AAkaoCg");
	var mask_4_graphics_197 = new cjs.Graphics().p("AmGDyQhSiKhzjmQgcg6gdhAQhsjqgKgtQgXgvAPg2QAUhGArgqQAuguBCgHQKMg6GLCwQAZAPAXAQQCYBoBECNQBCCDgKCbQgHCPhICbQhCCOhuCFQhnB7h7BcIgHAHQh2BWhtAjQgLAGgMAAQh6AAkyo3g");
	var mask_4_graphics_198 = new cjs.Graphics().p("AmfD0QhViTh6j2Qgeg9gfhEQh0j7gMgtQgZgxAQg6QAVhLAugsQAygwBIgGQK/gyGdDCIAzAhQCiBvBHCXQBECMgLCmQgKCYhNCkQhHCXh1CMQhvCEiDBgIgHAHQh/Bch0AjQgKAFgLAAQh7AAlKptg");
	var mask_4_graphics_199 = new cjs.Graphics().p("Am5D4QhYidiAkFQgghBghhIQh9kMgMgsQgcg1ARg9QAWhPAygvQA1gyBNgFQL0gqGvDUQAbARAaASQCrB3BLChQBHCUgNCxQgMChhTCuQhMCgh9CTQh3CLiKBmIgIAGQiHBhh8AkQgIAEgKAAQh9AAliqig");
	var mask_4_graphics_200 = new cjs.Graphics().p("AnSD8QhciniGkUQgihFgjhMQiFkdgOgsQgeg3AShBQAYhTA0gxQA5g1BSgEQMpghHADmQAdASAbATQC1B+BOCrQBKCdgQC7QgOCqhXC3QhSCpiECcQh/CSiTBqIgHAHQiQBliDAlQgIAEgJAAQh9AAl6rYg");
	var mask_4_graphics_201 = new cjs.Graphics().p("AnrD/QhfixiOkiIhIiZQiNkugQgrQggg6AThFQAZhYA4gzQA8g3BYgDQNcgZHSD4QAfATAdAUQC9CFBSC1QBMCngRDEQgQC0hdDBQhXCyiMCiQiGCbibBuIgIAHQiYBqiLAmQgGADgIAAQh+AAmSsOg");
	var mask_4_graphics_202 = new cjs.Graphics().p("AoEEEQhji6iUkyIhMigQiVlAgRgrQgjg9AUhHQAahdA8g1QA/g6BdgCQORgQHjEKQAhAUAeAVQDHCMBVC/QBPCvgTDQQgSC9hjDKQhcC6iUCrQiNCiijBzIgJAGQigBwiSAmQgGACgHAAQh/AAmptDg");
	var mask_4_graphics_203 = new cjs.Graphics().p("AodEJQhmjFiblAIhQioIiwl7QglhAAVhLQAchhA+g4QBDg8BigCQPFgHH2EcQAiAVAfAXQDQCTBZDJQBSC4gWDZQgUDHhoDTQhhDEibCyQiVCpisB4IgIAHQipB0iaAnQgFACgGAAQh/AAnBt5g");
	var mask_4_graphics_204 = new cjs.Graphics().p("Ao3ENQhpjOihlPIhUiwIi6mMQgnhDAWhOQAdhmBCg6QBHg/BmAAQP6ABIHEvQAjAWAhAXQDaCaBcDTQBVDBgYDkQgWDPhuDdQhmDNijC5QicCyi0B9IgJAGQixB5ihAoQgFACgFAAQh/AAnauwg");
	var mask_4_graphics_205 = new cjs.Graphics().p("ApQESQhtjYioleIhWi4QiulzgWgpQgqhGAXhSQAehqBFg8QBLhBBsAAQQuAJIYFBQAlAXAiAZQDkChBfDdQBXDKgaDuQgYDZhzDmQhsDWiqDBQijC5i9CBIgIAGQi6B+ipAqIgIABQiAAAnxvmg");
	var mask_4_graphics_206 = new cjs.Graphics().p("AppEXQhwjiivltIhajAQi3mEgXgpQgshIAYhWQAfhvBJg+QBOhEBxACQRiASIqFTQAnAYAkAZQDsCpBjDnQBaDSgcD5QgaDih5DvQhxDfixDIQisDCjECGIgJAGQjCCCiwArIgIABQiAAAoIwcg");
	var mask_4_graphics_207 = new cjs.Graphics().p("AqCEcQiRkkj2oMQi/mVgZgoQguhLAZhZQAhh0BLhAQBShGB2ACQTpAcI3GXQD2CwBmDxQBdDbgeEDQgcDrh/D5Qh2Doi5DQQizDJjMCKQjQCNi8AsIgGABQiAAAogxSg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(186).to({graphics:mask_4_graphics_186,x:29.8,y:6.7}).wait(1).to({graphics:mask_4_graphics_187,x:34.7,y:12.3}).wait(1).to({graphics:mask_4_graphics_188,x:39.7,y:18.1}).wait(1).to({graphics:mask_4_graphics_189,x:44.6,y:23.8}).wait(1).to({graphics:mask_4_graphics_190,x:49.5,y:29.6}).wait(1).to({graphics:mask_4_graphics_191,x:54.5,y:35.2}).wait(1).to({graphics:mask_4_graphics_192,x:59.5,y:40.8}).wait(1).to({graphics:mask_4_graphics_193,x:64.4,y:46.3}).wait(1).to({graphics:mask_4_graphics_194,x:69.4,y:51.7}).wait(1).to({graphics:mask_4_graphics_195,x:74.4,y:57.1}).wait(1).to({graphics:mask_4_graphics_196,x:79.4,y:62.5}).wait(1).to({graphics:mask_4_graphics_197,x:84.3,y:67.7}).wait(1).to({graphics:mask_4_graphics_198,x:89.3,y:73}).wait(1).to({graphics:mask_4_graphics_199,x:94.3,y:78.2}).wait(1).to({graphics:mask_4_graphics_200,x:99.3,y:83.4}).wait(1).to({graphics:mask_4_graphics_201,x:104.3,y:88.6}).wait(1).to({graphics:mask_4_graphics_202,x:109.3,y:93.6}).wait(1).to({graphics:mask_4_graphics_203,x:114.3,y:98.7}).wait(1).to({graphics:mask_4_graphics_204,x:119.3,y:103.8}).wait(1).to({graphics:mask_4_graphics_205,x:124.3,y:108.9}).wait(1).to({graphics:mask_4_graphics_206,x:129.3,y:114}).wait(1).to({graphics:mask_4_graphics_207,x:134.3,y:119}).wait(173));

	// 图层 14
	this.instance_33 = new lib.yld_3_7();
	this.instance_33.setTransform(48,16);
	this.instance_33._off = true;

	this.instance_33.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(186).to({_off:false},0).wait(194));

	// 图层 13 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_165 = new cjs.Graphics().p("AiyDFQhdgfAThzQAijTDTg4QFBguhHD3QhFDvjIAAQhEAAhUgbg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AjDDsIgIgCQh7guAHiDQAGiQBohuQAygvB3gUIAdgGQA2gEAngCQAwAAAdACQAoACAjAeQBDApAOBdQAJA0gIA8IgHAyQgHA5gSAhQgoBWhNAVQg2AWhDADIgVABQhoAAh0gpg");
	var mask_5_graphics_167 = new cjs.Graphics().p("ABIFLQiTgFiSg2IgIgDQiYg9gFiTIAAgBQgJilCCiWQAygxCjgRIAkgFQBFgDAugBIBdAAQAsACAsAvQBHA4AYBxQAPBBgCBGQAAAggCAeQABBMgSAkQguBuhmAHQg9ARhLAAIgNAAg");
	var mask_5_graphics_168 = new cjs.Graphics().p("ABdGBQizgOikhBIgJgDQi2hMgQijIgBgBQgXi8Cci9QAygzDPgOIAqgEICJgCQBOAAAggBQAvAAA1BCQBLBFAiCGQAVBNAEBSIAFBJQAIBfgSAnQgzCFiAgFQg4AKhDAAQgaAAgdgCg");
	var mask_5_graphics_169 = new cjs.Graphics().p("ABxG2QjVgWi1hLIgKgEQjThbgcizIgBgBQgmjTC3jkQAxg1D7gKIAxgEICfgBQBdABAhgCQAzgCA+BUQBOBTAtCbQAbBaAKBcQAGAsAEApQAQBygSAqQg4CdiZgTQgsAFgxAAQg2AAg8gGg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AFwHyQhpAFiCgPQj2gfjHhVIgLgEQjwhrgojDIgBgBQg0jpDQkLQAyg4EngHIA3gCIC0AAQBtACAjgEQA2gDBGBmQBTBhA3CvQAhBoAQBmQAJAyAHAuQAXCFgSAtQg1CaiJAAQgYAAgagFg");
	var mask_5_graphics_171 = new cjs.Graphics().p("AGhIsQh2ABiSgUQkXgojaheIgLgFQkOh7g0jTIAAgBQhDj/DqkzQAyg5FTgEIA+gBIDKACQB8ACAkgGQA6gEBPB4QBWBvBBDDQAoB1AXByQALA2AJA1QAfCYgSAvQg3CoiUAAQgfAAgkgIg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AHRJmQiDgEihgYQk5gyjrhoIgMgFQkriKhAjjIgBgBQhRkWEElaQAyg7F/gBIBEAAIDgADQCLADAmgHQA+gFBXCJQBaB9BMDYQAuCCAcB8QAPA9ALA6QAmCrgRAyQg6C2ieAAQgoAAgtgLg");
	var mask_5_graphics_173 = new cjs.Graphics().p("AIBKfQiQgHixgeQlag6j9hyIgNgGQlIiZhMjzIAAgBQhgktEemBQAxg9GsADIBLAAID1AFQCbADAngIQBBgHBgCbQBeCLBWDtQA0CPAjCHQARBCAOBAQAuC+gSA1Qg8DEipABQgvAAg3gQg");
	var mask_5_graphics_174 = new cjs.Graphics().p("AIxLZQidgMjBghQl6hEkPh8IgOgGQlmiohXkDIgBgCQhulDE4moQAxhAHYAHIBRABIELAGQCqADApgJQBEgIBpCtQBiCZBgEBQA7CcAoCSQAVBIARBFQA0DSgRA3Qg/DUi0AAQg2AAhBgUg");
	var mask_5_graphics_175 = new cjs.Graphics().p("AJhMUQipgQjRgnQmchMkhiGIgOgHQmDi3hjkTIgBgCQh9laFSnPQAxhCIEAKIBYACIEhAIQC5AEAqgLQBIgKByC/QBmCnBqEWQBACpAvCcQAYBOATBLQA8DlgRA6QhDDii+AAQg+AAhKgXg");
	var mask_5_graphics_176 = new cjs.Graphics().p("AKSNOQi2gUjhgrQm9hWkziPQmvjKhwkpQiMlxFtn2QAxhEIwANIGUAMQDJAFAsgMQBLgLB7DRQBpC0B0ErQBrEPBCDyQBDD4gRA8QhGDyjKAAQhEAAhTgcg");
	var mask_5_graphics_177 = new cjs.Graphics().p("AKjOKQjAgdjtg4QnVhuk9ikQm8jlhdk4Qh0mCG1nxQBuhYI+A0QEXAVCAAWQC5AHAxgBQBKgFBwC9QBwCsBHFoQBWEOAsEAQAvEAgRA6QhFDxjKAAQhEAAhUgbg");
	var mask_5_graphics_178 = new cjs.Graphics().p("AK3PHQjLglj5hEQntiHlHi4QnJkBhLlEQhcmWH/nrQCqhsJJBaQESAgCLAqQCoAKA4AJQBJACBlCpQB1CjAbGkQBCEOAVEOQAaEJgPA2QhGDyjKAAQhEAAhTgcg");
	var mask_5_graphics_179 = new cjs.Graphics().p("ALKQGQjVgukFhRQoGiflQjMQnXkeg3lRQhEmnJHnnQDniAJXCCQEKArCWA8QCYANA9ATQBIAJBbCWQB6CagSHhQAuEMgBEdQAGESgPAzQhFDxjKAAQhEAAhUgbg");
	var mask_5_graphics_180 = new cjs.Graphics().p("ALQRFQjgg3kRhdQoei4lajgQnkk5gklgQgtm5KRnhQEkiUJkCoQEDA3CgBPQCIAQBDAeQBGAPBRCCQB/CSg+IdQAaELgYEsQgOEagOAwQhGDxjKAAQhEAAhTgbg");
	var mask_5_graphics_181 = new cjs.Graphics().p("AK7SEQjqg/kehpQo2jRlkj1QnxlVgRluQgVnKLancQFgioJyDPQD8BCCrBjQB3ASBJAoQBFAXBGBtQCFCJhrJZQAGEMguE6QgjEigNAtQhGDxjKAAQhEAAhTgbg");
	var mask_5_graphics_182 = new cjs.Graphics().p("AKlTDQj0hHkqh2QpOjqlukJQn+lxACl8QADncMinWQGdi8KAD1QD0BOC2B2QBnAVBPAzQBDAdA7BZQCLCAiXKWQgPELhEFIQg4ErgMAqQhFDxjKAAQhEAAhUgbg");
	var mask_5_graphics_183 = new cjs.Graphics().p("AKPUCQj/hPk2iDQpmkCl3kdQoMmNAVmKQAbnuNrnQQHajRKNEcQDtBaDACIQBXAZBVA9QBBAjAyBGQCQB3jELTQgjEJhbFXQhME0gLAmQhFDyjKAAQhFAAhTgcg");
	var mask_5_graphics_184 = new cjs.Graphics().p("AJ5VBQkJhYlDiPQp/kbmBkxQoYmpAomYQAyn/O1nLQIUjlKdFDQDlBlDLCbQBHAcBaBHQBAAqAnAyQCWBvjwMPQg3EIhyFmIhqFfQhGDyjKAAQhEAAhTgcg");
	var mask_5_graphics_185 = new cjs.Graphics().p("AJiWBQkThhlPibQqXk0mLlFQolnFA7mmQBKoRP9nGQJSj4KpFpQDeBwDWCvQA3AeBgBSQA/AxAcAeQCbBmkcNMQhMEHiIF0Qh0FFgKAgQhFDxjKAAQhEAAhUgbg");
	var mask_5_graphics_186 = new cjs.Graphics().p("AJMXAQkehplZioQqxlNmVlZQoznhBPm0QBhoiRHnBQKOkMK3GQQDXB7DgDCQAnAhBlBcQA+A4ASAKQChBdlKOJQhfEGifGCQiJFOgIAdQhGDxjKAAQhEAAhTgbg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_5_graphics_165,x:47.8,y:241.7}).wait(1).to({graphics:mask_5_graphics_166,x:39.7,y:235.3}).wait(1).to({graphics:mask_5_graphics_167,x:31.6,y:229.1}).wait(1).to({graphics:mask_5_graphics_168,x:23.9,y:222.9}).wait(1).to({graphics:mask_5_graphics_169,x:16.4,y:216.8}).wait(1).to({graphics:mask_5_graphics_170,x:8.9,y:211}).wait(1).to({graphics:mask_5_graphics_171,x:1.4,y:205.3}).wait(1).to({graphics:mask_5_graphics_172,x:-6,y:199.6}).wait(1).to({graphics:mask_5_graphics_173,x:-13.5,y:194}).wait(1).to({graphics:mask_5_graphics_174,x:-20.9,y:188.3}).wait(1).to({graphics:mask_5_graphics_175,x:-28.4,y:182.5}).wait(1).to({graphics:mask_5_graphics_176,x:-35.9,y:176.8}).wait(1).to({graphics:mask_5_graphics_177,x:-37.7,y:170.8}).wait(1).to({graphics:mask_5_graphics_178,x:-39.6,y:164.7}).wait(1).to({graphics:mask_5_graphics_179,x:-41.6,y:158.4}).wait(1).to({graphics:mask_5_graphics_180,x:-42.1,y:152.1}).wait(1).to({graphics:mask_5_graphics_181,x:-40,y:145.8}).wait(1).to({graphics:mask_5_graphics_182,x:-37.9,y:139.5}).wait(1).to({graphics:mask_5_graphics_183,x:-35.7,y:133.2}).wait(1).to({graphics:mask_5_graphics_184,x:-33.4,y:126.9}).wait(1).to({graphics:mask_5_graphics_185,x:-31.2,y:120.5}).wait(1).to({graphics:mask_5_graphics_186,x:-28.9,y:114.2}).wait(194));

	// 图层 12
	this.instance_34 = new lib.yld_3_6();
	this.instance_34.setTransform(-60.5,15);
	this.instance_34._off = true;

	this.instance_34.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(165).to({_off:false},0).wait(215));

	// 图层 11 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_138 = new cjs.Graphics().p("AjZB+QhkhVBhhwQBOhcBugjQGLgnh7EaQg8CKiYASQgWADgSAAQhxAAhchOg");
	var mask_6_graphics_139 = new cjs.Graphics().p("Ah6DrQgmgMgjgYQgUgNgSgRQhqhfBeiKIAAgBQApg3AygxQAcgdAbgMQANgMAWgLIAOgDIAggHQAQgDAOAAQCIgHBHArQBUAzgPBxQgEAngPArQgSA2ggApQg+BQhuAaIgPAEQghAHgiAAQgtAAgqgNg");
	var mask_6_graphics_140 = new cjs.Graphics().p("Ah8EcQgtgLgngbQgWgQgVgUQhvhpBbikIAAgBQAng+AzhBQAcgoAYgNQAJgOAXgPIAPgGQASgHARgEQASgEARgCQCXgKBVA0QBfA5gHB9QgBAtgOAxQgRA9ggAyQhABfh4AoIgPAFQgyARgxAAQgmAAgkgKg");
	var mask_6_graphics_141 = new cjs.Graphics().p("Ah/FNQgzgLgrgeQgZgSgWgXQh1h0BZi+IAAgBQAlhFAzhQQAdgzAVgNQAEgSAYgTIAQgIQATgKATgFQAUgHATgBQCngOBjA7QBqBAAACJQADAzgNA3QgPBFgiA6QhBBviBA1IgRAHQhBAcg+AAQghAAgggIg");
	var mask_6_graphics_142 = new cjs.Graphics().p("AiCF+Qg6gKgvgiQgcgUgYgZQh6h/BWjZIAAgBQAkhMAzhgQAcg+AUgNQgCgVAZgXIARgKQAVgNAUgHQAWgIAWgCQC3gRBwBDQB2BGAICVQAFA5gLA9QgNBMgjBDQhEB+iKBDIgSAJQhQAnhJAAQgdAAgcgGg");
	var mask_6_graphics_143 = new cjs.Graphics().p("AiGGuQhAgKg0glQgegWgagcQh/iJBTjzIAAgCQAihSAzhwQAdhJARgOQgHgYAbgbIARgNQAXgPAWgIQAXgKAYgDQDIgUB9BLQCCBMAPCiQAIA/gKBFQgLBRgkBLQhFCOiTBQIgUALQhcAzhWAAQgaAAgZgFg");
	var mask_6_graphics_144 = new cjs.Graphics().p("AiKHfQhHgKg4goQgggYgcggQiFiTBQkNIAAgCQAhhZAziAQAehUAOgOQgMgbAcggIATgOQAYgSAXgKQAZgMAagDQDYgYCMBTQCMBTAXCtQAMBFgJBLQgKBZglBUQhHCdicBeIgVANQhoA+hhAAQgYAAgXgDg");
	var mask_6_graphics_145 = new cjs.Graphics().p("AiOIPQhNgJg8gsQgjgagegjQiKieBNknIAAgCQAghgAziQQAeheAMgOQgSgfAegkQAIgIALgJQAagUAYgLQAcgPAbgDQDpgbCZBaQCYBaAeC6QAPBLgHBRQgJBfgmBdQhICsimBsIgWAPQh0BLhtAAQgVAAgVgDg");
	var mask_6_graphics_146 = new cjs.Graphics().p("AiTI/QhSgIhBgwQgmgcgfglQiQipBLlBIAAgDQAehmAzifQAfhqAIgPQgWghAfgoQAIgJAMgKQAcgYAZgMQAegQAdgEQD5gfCnBjQCjBgAlDGQASBQgFBXQgHBognBlQhKC7ivB6IgYAQQiABXh3AAQgUAAgTgCg");
	var mask_6_graphics_147 = new cjs.Graphics().p("AiXJvQhZgIhFgzQgpgegggoQiWizBIlcIAAgDQAdhtAzivQAfh1AGgOQgcglAhgsQAIgKANgMQAdgaAbgOQAfgSAggEQEJgiC0BqQCvBnAtDSQAVBXgEBdQgFBugoBuQhMDLi4CHIgZASQiLBkiDAAQgSAAgRgCg");
	var mask_6_graphics_148 = new cjs.Graphics().p("AibKfQhggHhJg3QgrgfgjgsQibi+BFl1IAAgDQAbh0A0i/IAjiPQghgnAhgxQAKgMANgMQAfgcAcgQQAhgUAigFQEZglDCByQC7BtA0DeQAYBdgDBjQgDB2gqB2QhNDajCCVIgaAUQiWBxiNAAIgggCg");
	var mask_6_graphics_149 = new cjs.Graphics().p("AigLPQhmgHhNg6QgughgkgvQihjIBDmQIAAgDQAZh7A0jPQAgiLABgOQgmgrAig1QAKgNAOgNQAggfAegSQAjgWAkgEQEpgpDQB5QDGB1A7DpQAcBjgCBpQgBB9grCAQhPDpjLCiIgbAWQiiB9iYAAIgdgBg");
	var mask_6_graphics_150 = new cjs.Graphics().p("AilL/QhsgGhSg+QgwgjgmgyQinjTBBmqIAAgDQAYiCAzjeQAhiWgCgPQgrguAkg5QAKgOAOgOQAigiAfgTQAlgYAmgFQE6gsDdCBQDRB7BDD2QAfBoAABvQAACFgsCIQhRD4jUCwIgcAYQitCKijAAIgagBg");
	var mask_6_graphics_151 = new cjs.Graphics().p("AipMvQhygGhXhBQgzglgng1QitjdA+nEIAAgEQAXiIAzjuQAhiigEgPQgxgxAmg9QAKgPAPgQQAkgkAggVQAngZAogGQFKgvDrCJQDdCBBKECQAhBvACB1QACCMgtCQQhTEIjdC9IgeAaQi3CXiuAAIgXgBg");
	var mask_6_graphics_152 = new cjs.Graphics().p("AiuNfQh4gFhbhFQg1gngqg4QiyjoA7neIAAgEQAViPA0j+QAiisgHgPQg2g0AnhCQAKgQAQgRQAlgnAigWQApgcAqgGQFagyD5CQQDoCIBREOQAlB1ADB7QAECTguCZQhVEXjmDMIgfAbQjDCki4AAIgVgBg");
	var mask_6_graphics_153 = new cjs.Graphics().p("AiyOPQh/gFhfhHQg4gqgrg7Qi3jyA4n4IAAgFQATiVA0kOQAii3gJgQQg7g3AohGQAKgRARgSQAngqAjgXQArgeArgGQFsg3EFCZQD0COBZEbQAoB6AECBQAFCbgvChQhWEnjvDZIghAdQjNCxjDAAIgSgBg");
	var mask_6_graphics_154 = new cjs.Graphics().p("Ai3O/QiFgEhkhLQg6gsgtg9Qi9j9A2oTIAAgFQASicAzkeQAjjCgMgQQhAg6AphKQALgSARgTQApgtAkgZQAtgfAugHQF9g6ESChQD/CVBgEmQArCAAGCHQAHCigwCrQhYE1j5DnIgiAfQjXC9jOAAIgQAAg");
	var mask_6_graphics_155 = new cjs.Graphics().p("Ai7PvQiMgEhohOQg9guguhAQjDkIAzotIAAgFQARijAzktQAjjNgOgQQhGg+ArhOQALgTASgVQAqgvAmgaQAvgiAwgHQGNg9EfCoQELCcBoEyQAuCHAHCNQAJCpgyCzQhZFFkCD0IgkAhQjiDKjZAAIgMAAg");
	var mask_6_graphics_156 = new cjs.Graphics().p("AjAQfQiSgDhshSQg/gwgxhDQjIkSAwpHIAAgGQAPipA0k9QAkjZgRgQQhLhAAshTQAMgUASgWQAsgyAngcQAwgjAygIQGfhAEsCwQEWCiBvE+QAyCNAICTQAKCxgyC7QhbFUkMECIgkAjQjtDXjjAAIgLAAg");
	var mask_6_graphics_157 = new cjs.Graphics().p("AjERPQiYgDhxhWQlOj/A6r8QANiwA0lNQAkjkgTgQQhkhVBghyQAtg1ApgdQAyglA0gIQGvhEE6C4QEhCpB3FKQB0FFhdFjQhjF7k1EcQj3DljuAAIgIAAg");
	var mask_6_graphics_158 = new cjs.Graphics().p("AljPbQgbgOgYgRQichrhUjRQg/iFgYi3QgYhNADhgQgNisA5lcQAjjZgJgkQhShZBch1QAbgjAagcQAPgQAPgNQAwgoAygPQDhg8DJgDQCXgMByA/IAKAGIB3A9QAmAUAiAbQAhAYAfAeQBoBjBFCHQBICFAdCUQAlCwgeDDQgLBGgSBGQhGEHi7DiQgeAkghAjQjbDljnAoIggADIgmACQh9AAhpg2g");
	var mask_6_graphics_159 = new cjs.Graphics().p("Aj5PUQgbgJgagMQimhKhwijQhahkgwiUQgxg7gChWQgpirA/loQAjjPABg3QhAhfBXh5QAaglAaggIAdgfQAtgrAwgYQDPhRDDguQCZg3BfA0IAHADQAiAMBGANQAmAKAjATQAkAPAiAZQB1BQBWB3QBZB2AxCMQA+CqgIDGQgDBFgLBJQgsEQitD1QgcAmgfAlQjMDxjtBFIgfAHQgzAIgzAAQhXAAhTgYg");
	var mask_6_graphics_160 = new cjs.Graphics().p("AiSPPQgdgEgcgHQiwgpiLh1Qh2hDhIhyQhJgogHhLQhEipBEl3QAijEALhLQguhkBSh8QAagoAagjIAcgjQAqgtAtggQC+hmC+hbQCchiBKApIAEABQAOgEBJgHQAoAAAkALQAmAGAlAUQCEA9BkBnQBsBnBFCFQBXCiANDIQAFBIgEBLQgREXigEIQgaApgdAoQi8D9jyBiIgfAKQhiAYhhAAQgoAAgogEg");
	var mask_6_graphics_161 = new cjs.Graphics().p("AhtPeQi6gIinhIQiRghhhhQQhhgWgMhAQhginBKmIQAii3AUhfQgchoBPiAQAZgqAZgnIAbgmQAngwArgnIFkkCQCeiOA5AdIAAgBQgEgTBLgbQAogLAlADQApgCAoAOQCSAqBzBYQB/BXBYB+QBwCaAjDLQAMBJADBOQAKEfiTEaQgXAtgbArQitEIj2B/IgeANQiFAviTAKIg8gBg");
	var mask_6_graphics_162 = new cjs.Graphics().p("AmaPzQirABh6gvQh6gCgQg3Qh7ijBPmXQAhivAehyQgKhsBKiCQAYgtAagsIAagoQAjgzApgvQCbiRCziyQCfi5AmASIgCgEQgZgiBQgvQAogWAmgFQArgLArAJQCgAYCDBHQCQBIBtB4QCJCSA4DNQAUBKAKBQQAlEoiGEtQgVAvgZAuQidEUj6CbIgfARQiAA8ieAiIg8AJQhgAMhfAAQhlAAhkgOg");
	var mask_6_graphics_163 = new cjs.Graphics().p("AtpQtQiXihBVmmQAgikApiGQAIhzBFiEQAYgvAZgvIAZgsQAhg1Amg3QCJimCtjfQChjjATAGIgFgGQgsgyBThDQArggAngNQAsgTAtADQCvAFCSA3QCjA5CABwQCiCLBNDPQAdBLARBSQA/E0h4E9QgSAygYAxQiOEgj+C4IgfAUQh6BIioA6IhBATQjNA5jfAUQjGAjiTgOQgnAFgfAAQhRAAgQggg");
	var mask_6_graphics_164 = new cjs.Graphics().p("AuLSuQiyifBbm0QAfiZAziaQAah4BAiJIAwhjIAYguQAeg4AkhAIEfnFQCjkPgBgFIgIgIQhAhBBYhYQAsgqAngVQAwgcAxgDQC6gNCiAnQC1AqCUBpQC7CDBjDRQAkBMAZBVQBaE8hrFQQgRA1gVAzQh/EskCDVIgeAYQh3BUixBSIhDAdQjXBaj7BCQjhBEirAVQhXARgyAAQgvAAgNgQg");
	var mask_6_graphics_165 = new cjs.Graphics().p("AuvUyQlPj/HUwRQBrjrDxnNQCkk6gUgQQhkhVBhhyQAtg1AogdQAzglA0gIQGshEE8C4QEiCpB2FKQB1FFheFlQhjF5k0EcQiJB/kHCOQjkB7kUBwQj8BljEA2QiJAmg4AAQgYAAgJgHg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(138).to({graphics:mask_6_graphics_138,x:112.4,y:9.9}).wait(1).to({graphics:mask_6_graphics_139,x:114.4,y:14.3}).wait(1).to({graphics:mask_6_graphics_140,x:116.6,y:18.9}).wait(1).to({graphics:mask_6_graphics_141,x:118.7,y:23.5}).wait(1).to({graphics:mask_6_graphics_142,x:121,y:28.1}).wait(1).to({graphics:mask_6_graphics_143,x:123.3,y:32.8}).wait(1).to({graphics:mask_6_graphics_144,x:125.6,y:37.4}).wait(1).to({graphics:mask_6_graphics_145,x:127.9,y:42.1}).wait(1).to({graphics:mask_6_graphics_146,x:130.3,y:46.8}).wait(1).to({graphics:mask_6_graphics_147,x:132.6,y:51.5}).wait(1).to({graphics:mask_6_graphics_148,x:135,y:56.2}).wait(1).to({graphics:mask_6_graphics_149,x:137.3,y:60.9}).wait(1).to({graphics:mask_6_graphics_150,x:139.7,y:65.6}).wait(1).to({graphics:mask_6_graphics_151,x:142.1,y:70.3}).wait(1).to({graphics:mask_6_graphics_152,x:144.4,y:75}).wait(1).to({graphics:mask_6_graphics_153,x:146.8,y:79.7}).wait(1).to({graphics:mask_6_graphics_154,x:149.2,y:84.4}).wait(1).to({graphics:mask_6_graphics_155,x:151.5,y:89.1}).wait(1).to({graphics:mask_6_graphics_156,x:153.9,y:93.8}).wait(1).to({graphics:mask_6_graphics_157,x:156.2,y:98.5}).wait(1).to({graphics:mask_6_graphics_158,x:151.1,y:102.4}).wait(1).to({graphics:mask_6_graphics_159,x:145.8,y:104.2}).wait(1).to({graphics:mask_6_graphics_160,x:140.9,y:105.8}).wait(1).to({graphics:mask_6_graphics_161,x:136.6,y:105.3}).wait(1).to({graphics:mask_6_graphics_162,x:132.7,y:105.2}).wait(1).to({graphics:mask_6_graphics_163,x:129.1,y:108.8}).wait(1).to({graphics:mask_6_graphics_164,x:125.7,y:115.5}).wait(1).to({graphics:mask_6_graphics_165,x:122.5,y:121.9}).wait(215));

	// 图层 10
	this.instance_35 = new lib.yld_3_5();
	this.instance_35.setTransform(22.5,24);
	this.instance_35._off = true;

	this.instance_35.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(138).to({_off:false},0).wait(242));

	// 图层 9 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_113 = new cjs.Graphics().p("AlpBTQAdilBzhjQA+g2BJgSQGQg4AwE1QATCAiOAaQi9Ahi+A4QhCATgvAAQiQAAAgizg");
	var mask_7_graphics_114 = new cjs.Graphics().p("AkJEDQiIgCgZhvQgIgfABgmQAAgSADgSQAGgjANgdQAGgQAIgOQAjg4AhghQAcgoA7gWIAMgHQBBgoBSgGQBDgEA9AHQC/ARBdBRQA/AxAVA5IACAJIAFAOQAHAVAEATQADASgBASQADA8gmAjQgpArhXALQh/APh8ARIi6AYQgmAGggAAIgcgBg");
	var mask_7_graphics_115 = new cjs.Graphics().p("Ak0EAQiSgRgih7QgLgkgBgpQgCgWADgRQAHgpARghQAIgSALgOQAyg4AigSQAcgmBNgKIAOgFQBHghBhADQBLACBGAMQDdAlBmBUQBSA7ATA2QAAAEABAGIAFAOQAIAaADAWQADAVgEATQgDA+g0AhQg1AphgAJQiSALiMAGQhqAEhoACIgPAAQgzAAgqgJg");
	var mask_7_graphics_116 = new cjs.Graphics().p("AAAEYQh3gDhygKQhCgFg2gRQicgggqiHQgPgpgDgrQgDgaADgSIAAgBQAIguAVglQAKgTAOgOQBBg4AjgEQAagjBgACIAQgDQBOgbBwANQBSAIBQASQD7A4BtBXQBmBEARAzQgBADABAHIAGASQAIAeAEAXQACAZgIAVQgJA/hCAfQhBAnhpAHQhnAEhlAAIh0gCg");
	var mask_7_graphics_117 = new cjs.Graphics().p("AgHEpQiGgMh9gVQhHgLg8gYQilgvg0iTQgSgsgFgxQgFgdADgTIAAgBQAJg0AZgnQAOgVAPgOQBSg5AiALQAaggBxAOIASgCQBWgTB/AWQBZANBaAZQEZBLB1BZQB6BOAPAxQgCADABAIIAFAUQAKAiADAZQABAcgKAWQgQBBhQAeQhMAkhyAEIgvABQieAAiUgMg");
	var mask_7_graphics_118 = new cjs.Graphics().p("AgRE9QiTgTiHghQhNgRhCgfQivg9g8ifQgVgygHg0QgHghADgUIAAgBQAKg5AegqQAPgXATgPQBgg4AkAZQAYgdCEAaIAUAAQBcgNCOAhQBeASBnAfQE3BdB9BdQCNBWAMAwQgDADABAJIAGAWQALAmACAbQABAegOAYQgVBDheAcQhYAih7ACQjKgCi6gYg");
	var mask_7_graphics_119 = new cjs.Graphics().p("AGNGBQjdgHjKghQiggciSgsQhTgXhHgmQi4hMhFirQgZg3gJg4QgIgkADgVIAAgBQALg/AhgtQASgYAVgPQBwg4AkAoQAYgbCWAmIAWACQBjgGCdAqQBmAXBwAmQFVBwCFBfQCgBgALAuQgEAEABAJIAGAYQALArACAcQABAhgRAaQgcBEhrAaQhjAgiBAAIgEAAg");
	var mask_7_graphics_120 = new cjs.Graphics().p("AGmGvQjwgLjagrQitgkicg3QhZgehMgsQjDhbhOi3Qgbg9gLg7QgLgoAEgVIAAgBQALhFAngwQAUgZAYgPQB/g4AlA1QAWgXCoAyIAYADQBrABCrA0QBtAdB6ArQFzCDCNBiQC0BqAIAsQgFADABAKQACAKAFARQAMAuACAeQAAAkgUAbQgiBGh6AZQhlAbh+AAIgZAAg");
	var mask_7_graphics_121 = new cjs.Graphics().p("AG/HdQkCgPjrg2Qi5griohCQheglhRgzQjNhphXjEQgehCgOg+QgMgrAEgXIAAgBQAMhKArgyQAWgbAbgQQCOg4AmBEQAVgVC7A+IAaAFQBxAIC7A+QB0AiCEAyQGQCVCVBkQDIB0AGAqQgGAEABALQABAKAGASQANAzACAfQgBAngYAdQgnBIiIAWQhoAYh8AAIgtgBg");
	var mask_7_graphics_122 = new cjs.Graphics().p("AHYIMQkVgTj6hAQjHg0ixhNQhkgrhXg6QjXh4hfjQQgihHgQhCQgNguADgYIAAgBQAOhPAvg2QAYgcAegQQCdg4AmBSQAVgSDNBKIAcAHQB4AODJBIQB8AnCOA4QGuCpCdBmQDbB/AEAnQgGAEAAAMQABAKAGAUQAPA3ABAhQgBAqgbAeQguBKiWAVQhoATh3AAQgjAAgkgBg");
	var mask_7_graphics_123 = new cjs.Graphics().p("AHxI6QkngXkLhKQjTg7i8hZQhqgxhdhBQjgiHhojcQgmhMgRhFQgPgyADgZIAAgBQAPhVAzg4QAbgeAggQQCtg4AnBgQATgPDfBWIAeAIQB/AWDZBRQCCAtCYA+QHNC8ClBpQDuCIACAlQgIAEABANQABALAGAVQAQA7AAAjQgBAtgeAgQg0BLikATQhmAQhyAAQgwAAgzgDg");
	var mask_7_graphics_124 = new cjs.Graphics().p("AIKJpQk6gckahTQjhhEjHhkQhvg3hihIQjqiVhxjpQgphRgThJQgRg2ADgYIAAgCQAQhaA3g7QAeggAigQQC9g4AnBvQASgNDxBiIAgAKQCHAcDnBcQCKAyCiBEQHqDOCtBsQECCSAAAkQgJADABAOQABALAGAXQARBAAAAjQgCAwgiAiQg6BNixARQhlAOhuAAQg9AAhAgFg");
	var mask_7_graphics_125 = new cjs.Graphics().p("AIkKYQlNggkqheQjuhLjRhwQh2g9hnhPQj0ikh6j1QgshWgVhNQgTg5AEgZIAAgCQAQhgA8g+QAgghAlgQQDMg4AnB9QASgKEDBuIAiALQCOAkD2BlQCRA3CsBLQIIDfC1BxQEWCbgDAiQgJADAAAPQABAMAGAYQASBEAAAlQgCAzglAjQhABPjAAPQhgALhmAAQhOAAhQgGg");
	var mask_7_graphics_126 = new cjs.Graphics().p("AI9LGQlggkk6hoQj7hTjch6Qh7hEhthVQj9i0iDkBQgvhbgYhQQgUg9ADgaIABgCQARhlBAhBQAigjAogQQDbg4ApCLQAQgGEWB5IAkANQCUAqEFBvQCYA9C2BRQInDyC8B0QEqClgFAfQgLAEABAOQAAANAIAaQATBIgBAnQgDA2goAlQhHBQjNANQhbAJheAAQheAAhigJg");
	var mask_7_graphics_127 = new cjs.Graphics().p("AJXL1QlzgolKhyQkIhbjmiGQiBhKhzhcQkHjDiLkNQgzhggahUQgVhAADgbIAAgCQAThqBEhFQAkgkArgQQDqg4ApCZQAQgDEoCFIAmAPQCbAwEUB5QCfBCDABYQJFEFDEB2QE9CvgHAdQgLAEAAAPQAAANAIAcQAUBMgBApQgEA5grAmQhMBSjcAMQhTAGhVAAQhxAAh0gLg");
	var mask_7_graphics_128 = new cjs.Graphics().p("AJwMkQmGgtlah8QkUhjjyiRQiGhQh4hjQkRjRiUkaQg2hlgchYQgXhDADgcIAAgCQAUhwBIhHQAngmAtgQQD6g4ApCoQAPgBE6CRIAoAQQCjA4EjCDQCmBHDKBeQJiEXDNB6QFQC4gJAbQgMAEAAAQQAAAOAIAdQAVBRgBApQgEA8gvAoQhTBUjpAKQhMAEhOAAQiCAAiGgNg");
	var mask_7_graphics_129 = new cjs.Graphics().p("AKJNSQmYgxlriGQkhhrj8icQiMhXh+hqQkbjdickpQg6hpgdhcQgZhHADgcIAAgCQAVh2BMhKQAqgnAwgRQEJg4AqC2QANACFMCeIAqARQCqA/EyCNQCtBMDUBkQKBEqDUB9QFkDCgLAZQgOADAAASQABAOAIAfQAWBUgCAsQgEA+gyAqQhZBWj3AHQhDAEhEAAQiXAAiZgRg");
	var mask_7_graphics_130 = new cjs.Graphics().p("AKiOAQmrg1l6iPQkuhzkGioQiThdiDhxQkljsilk1Qg9hugfhfQgbhLADgdIABgCQAVh7BRhNQAsgpAzgRQEYg4AqDEQANAFFeCqIAsATQCxBFFBCXQC0BSDeBqQKfE9DcB/QF4DMgOAXQgOAEgBASQABAOAIAhQAYBYgDAtQgFBCg1ArQhfBYkFAGQg3ACg3AAQiuAAiwgVg");
	var mask_7_graphics_131 = new cjs.Graphics().p("AK7OvQm9g6mKiaQk8h6kRi0QiYhjiIh3Qkvj7iulBQhAh0gihiQgchOADgfIABgCQAWiABVhQQAugqA2gRQEng5ArDTQAMAIFxC1IAuAVQC3BMFQChQC8BXDoBwQK8FQDkCDQGMDVgQAUQgPAEgBATQAAAPAJAiQAZBdgDAvQgGBEg4AtQhlBZkTAEIhYABQjEAAjFgXg");
	var mask_7_graphics_132 = new cjs.Graphics().p("ALUPcQnQg9maikQlIiDkci+QiehqiNh+Qk5kKi3lNQhDh5gkhmQgehSADgeIABgDQAXiGBahSQAwgsA4gRQE3g5AsDhQAKALGDDCIAwAWQC/BTFfCqQDCBdDyB2QLaFjDtCFQGeDfgSATQgQADAAAUQAAAQAJAjQAaBhgDAwQgGBIg8AuQhrBbkhADIg5AAQjfAAjegcg");
	var mask_7_graphics_133 = new cjs.Graphics().p("ALtQKQnjhBmqiuQlViLkmjKQikhviTiGQlCkYjAlaQhHh+glhpQgghVADggIABgCQAYiMBehVQAyguA7gRQFGg4AtDvQAJANGWDOIAyAYQDFBaFuC0QDKBiD8B8QL4F2D0CIQGyDpgUAQQgRAEAAAVQgBAQAKAlQAbBlgEAyQgGBKg/AwQhxBdkvAAIgdAAQj5AAj1ggg");
	var mask_7_graphics_134 = new cjs.Graphics().p("AUmRdQkUAAkLgkQn2hGm6i4QliiTkxjVQiph2iZiMQlMknjJlnQhJiCgohtQgihZAEggIAAgDQAZiRBjhYQA0gvA+gSQFVg4AuD+QAIAQGoDaIA0AZQDMBhF9C+QDRBnEGCDQMWGID8CLQHGDzgXAOQgSAEAAAVQgBARALAmQAbBqgEAzQgHBNhCAyQh1Bdk1AAIgKAAg");
	var mask_7_graphics_135 = new cjs.Graphics().p("AVUSPQkfgCkVgnQoJhKnKjCQlvibk7jgQivh8ieiTQlWk2jSlzQhNiHgqhxQgjhcAEghIAAgDQAaiWBnhbQA3gxBAgSQFlg4AuEMQAHATG6DmIA2AbQDTBnGMDIQDZBsEPCKQM0GbEFCOQHZD8gZAMQgTAEAAAWQgBARALAoQAcBugEA1QgIBQhFAzQh5Bdk7AAIgUAAg");
	var mask_7_graphics_136 = new cjs.Graphics().p("AWCTCQkrgEkegqQobhOnajMQl8ijlGjrQi1iDikiZQlglFjal/QhQiNgsh0QglhgAEghIAAgDQAbicBrheQA6gyBDgSQF0g5AuEbQAGAVHMDyIA4AdIJ2FAIH5EBQNSGuEMCRQHtEGgbAKQgUADgBAYQAAARALAqQAdBygEA2QgIBThJA1Qh9Bdk+AAIghAAg");
	var mask_7_graphics_137 = new cjs.Graphics().p("AWwT0Qk3gGkmgsQovhTnqjWQmJiqlQj3Qi7iJipigQlplUjjmLQhUiSguh4QgmhjADgiIABgDQAciiBvhgQA8g0BFgSQGEg5AvEpQAFAYHeD+IA6AfIKLFQIILENQNwHBEUCUQIAEPgdAIQgVAEAAAYQgBASALArQAfB2gFA4QgJBWhMA2QiBBdlEAAIgrAAg");
	var mask_7_graphics_138 = new cjs.Graphics().p("AXeUmQuogYsFlVQp3kWnpnVQl0ljjrmXQhXiXgwh7QgqhrAGgiQAdinBzhkQA+g1BJgSQGSg5AwE3QAEAdItEoQFnDANVG6QOOHUEcCWQIUEZgfAGQgWAEgBAZQgBASAMAtQAgB6gGA5QgYDvoNAAIg3gBg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_7_graphics_113,x:-212.6,y:-153.6}).wait(1).to({graphics:mask_7_graphics_114,x:-205.8,y:-149.4}).wait(1).to({graphics:mask_7_graphics_115,x:-198.9,y:-145.1}).wait(1).to({graphics:mask_7_graphics_116,x:-191.8,y:-140}).wait(1).to({graphics:mask_7_graphics_117,x:-184.9,y:-134.4}).wait(1).to({graphics:mask_7_graphics_118,x:-177.9,y:-129.2}).wait(1).to({graphics:mask_7_graphics_119,x:-170.9,y:-124.7}).wait(1).to({graphics:mask_7_graphics_120,x:-163.9,y:-120.6}).wait(1).to({graphics:mask_7_graphics_121,x:-156.9,y:-116.6}).wait(1).to({graphics:mask_7_graphics_122,x:-150,y:-112.6}).wait(1).to({graphics:mask_7_graphics_123,x:-143,y:-108.6}).wait(1).to({graphics:mask_7_graphics_124,x:-136,y:-104.6}).wait(1).to({graphics:mask_7_graphics_125,x:-129,y:-100.6}).wait(1).to({graphics:mask_7_graphics_126,x:-122,y:-96.6}).wait(1).to({graphics:mask_7_graphics_127,x:-115.1,y:-92.6}).wait(1).to({graphics:mask_7_graphics_128,x:-108.1,y:-88.6}).wait(1).to({graphics:mask_7_graphics_129,x:-101.1,y:-84.5}).wait(1).to({graphics:mask_7_graphics_130,x:-94.1,y:-80.5}).wait(1).to({graphics:mask_7_graphics_131,x:-87.1,y:-76.5}).wait(1).to({graphics:mask_7_graphics_132,x:-80.1,y:-72.4}).wait(1).to({graphics:mask_7_graphics_133,x:-73.1,y:-68.3}).wait(1).to({graphics:mask_7_graphics_134,x:-66.2,y:-64.3}).wait(1).to({graphics:mask_7_graphics_135,x:-59.2,y:-60.2}).wait(1).to({graphics:mask_7_graphics_136,x:-52.2,y:-56.1}).wait(1).to({graphics:mask_7_graphics_137,x:-45.2,y:-52}).wait(1).to({graphics:mask_7_graphics_138,x:-38.2,y:-47.9}).wait(242));

	// 图层 8
	this.instance_36 = new lib.yld_3_4();
	this.instance_36.setTransform(-215,-133.9);
	this.instance_36._off = true;

	this.instance_36.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(113).to({_off:false},0).wait(267));

	// 图层 7 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_76 = new cjs.Graphics().p("Aj1BwQjAj0DjigQG4ARBgFxQAmCWiSAjQg+AOg6AAQjJAAiOi1g");
	var mask_8_graphics_77 = new cjs.Graphics().p("AhuEXQh8grhChqQhYiCAnhzQAYhqCBhYQBLgDBGAGQBHAIBGAQQAmAHAcAPQBRAlAyBEQASAZAJAWQAaAnAGA7QAJApAFAvQAIBUgjAyQgjAwhMAWQhdAdhSAAQhUAAhJggg");
	var mask_8_graphics_78 = new cjs.Graphics().p("AiME0Qicgpg6h0IAAAAQhQiIBHiCQAlhwCRhgQBTgIBOgBQBNAEBRAJQAvACAbANQBeAlA1BQQASAdADAWQAXAngIBEQABAsAAAyQgFBbgoA1QgqA1hRAZQh9AuhnAAQhLAAhBgZg");
	var mask_8_graphics_79 = new cjs.Graphics().p("Ai0FRQi6gngyh9IAAgBQhIiOBliRQAzh1ChhoQBagNBWgHQBUgBBdABQA2gDAaANQBtAjA2BcQAUAigDAXQATAlgWBNIgMBlQgSBhgsA3QgyA6hWAfQibBAh5AAQhGAAg7gVg");
	var mask_8_graphics_80 = new cjs.Graphics().p("AjbF1QjaglgqiHIABAAQhAiUCDihQBCh6CwhwQBigTBegNIDCgMQA+gIAaAMQB7AjA4BnQAUAngJAXQARAlgmBVIgYBrQgeBogyA6Qg5A/hbAjQi6BTiLAAQg/AAg1gRg");
	var mask_8_graphics_81 = new cjs.Graphics().p("AkEGaQj6gjggiRQg4ibCiiwQBPiADBh3QBpgZBngTQBfgJB0gPQBGgMAaAKQCIAiA6BzQAVArgPAYQANAkgzBfQgUA5gRA4QgrBug3A9QhBBEhfAnQjZBoiaAAQg5AAgygOg");
	var mask_8_graphics_82 = new cjs.Graphics().p("AktG+QkaghgYiaIAAAAQgvihDAjAQBeiFDRh/QBwgeBwgZQBkgOB/gWQBOgSAaAJQCWAiA7B+QAWAxgVAYQALAjhCBnQgbA+gXA6Qg4B1g7BAQhJBIhkAsQj1B8irAAQg1AAgtgMg");
	var mask_8_graphics_83 = new cjs.Graphics().p("AlWHjQk5gfgPikIAAgBQgnimDejQQBsiKDhiHQB3gjB5ggQBpgSCLgeQBWgWAZAHQClAhA9CKQAWA1gaAZQAHAihQBxQgiBBgdA9QhEB7hBBDQhQBNhpAwQkTCSi6AAQgwAAgqgKg");
	var mask_8_graphics_84 = new cjs.Graphics().p("Al+IIQlZgdgHiuIAAgBQgeisD9jgQB5iPDxiPQB/goCCgmQBugXCWglQBegcAZAHQCzAgA+CVQAYA7ghAZQAEAhheB5QgpBGgjA/QhRCBhFBGQhYBShuA1QkyCnjIAAQgrAAgmgIg");
	var mask_8_graphics_85 = new cjs.Graphics().p("AmmIsQl4gbABi4IAAAAQgWizEbjvQCIiUEAiXQCGguCLgsQB0gbCigtQBlghAZAGQDAAfBBChQAYBAgnAZQACAghtCDQgwBJgpBBQheCJhKBIQhfBXhzA5QlQC9jVAAQgnAAgjgHg");
	var mask_8_graphics_86 = new cjs.Graphics().p("AnOJQQmXgZAJjBIABgBQgOi5E5j+QCWiZERifQCLgzCWgyQB4ggCug1QBtglAZAEQDOAfBCCsQAZBEgsAbQgCAeh7CMQg4BNguBEQhqCPhPBLQhnBbh4A/QltDSjiAAQgkAAghgGg");
	var mask_8_graphics_87 = new cjs.Graphics().p("An1J1Qm3gXASjLIAAgBQgGi/FYkNQCkifEhinQCTg4Ceg4QB+glC5g8QB2grAYAEQDcAdBEC5QAaBJgzAbQgFAdiKCVQg+BQg0BHQh3CVhUBOQhuBgh9BDQmMDpjtAAQghAAgegFg");
	var mask_8_graphics_88 = new cjs.Graphics().p("AocKaQnXgVAbjVIAAgBQADjFF2kdQCyikExivQCag+Cng+QCDgpDFhEQB9gwAYADQDqAdBGDEQAbBOg5AbQgIAciYCeQhFBUg6BKQiECbhZBRQh2BliCBIQmpD+j6AAQgdAAgcgDg");
	var mask_8_graphics_89 = new cjs.Graphics().p("ApDK+Qn2gTAjjfIAAgBQALjLGVksQDAiqFBi2QChhDCwhFQCJgtDQhMQCFg0AYABQD4AcBHDQQAbBSg+AcQgLAbinCnQhMBYhABMQiQCiheBUQh9BqiHBMQnIEVkFAAQgbAAgZgDg");
	var mask_8_graphics_90 = new cjs.Graphics().p("ApqLiQoVgRArjoIABgBQASjSG0k7QDOivFQi+QCphJC5hLQCOgxDbhUQCOg5AXAAQEGAbBJDcQAcBXhFAcQgNAbi1CwQhUBbhFBRQidCnhjBWQiFBviMBQQnlEskRAAQgYAAgXgDg");
	var mask_8_graphics_91 = new cjs.Graphics().p("AqRMHQo1gPA0jyIABgBQAbjYHRlLQDci0FhjHQCwhODChQQCTg2DnhcQCVg+AYgBQETAbBLDnQAdBchLAdQgQAZjEC5QhbBfhLBTQipCuhoBZQiMBziSBVQoCFDkdAAQgWAAgUgCg");
	var mask_8_graphics_92 = new cjs.Graphics().p("Aq3MrQpVgNA8j8IABgBQAjjeHwlaQDqi5FxjPQC3hTDLhXQCYg6DzhkQCdhDAXgCQEhAaBNDzQAeBhhRAdQgTAYjSDCQhiBjhRBWQi2C0htBcQiUB4iWBaQohFZknAAIglgCg");
	var mask_8_graphics_93 = new cjs.Graphics().p("AreNQQp1gLBFkGIABgBQArjkIPlqQD4i/GBjWQC+hZDUhdQCeg+D+hrQClhJAWgDQEwAZBOD/QAfBmhXAdQgXAXjgDLQhpBnhXBZQjCC6hyBfQibB9icBeQo/FwkyAAIgggBg");
	var mask_8_graphics_94 = new cjs.Graphics().p("AsFN0QqUgJBOkPIAAgCQA0jqItl5QEGjEGRjeQDGheDdhjQCihEEKhyQCthNAWgFQE+AZBQEKQAfBqhdAfIkIDqQhwBqhdBbQjPDBh3BiQiiCBihBjQpcGHk+AAIgcgBg");
	var mask_8_graphics_95 = new cjs.Graphics().p("AsrOYQq0gHBWkZIABgCQA8jwJLmJQEUjJGhjmQDNhjDmhqQCnhHEWh7QC0hSAXgFQFLAYBSEVQAgBwhjAeQgcAVj+DeQh3BuhiBdQjcDIh8BkQiqCHilBnQp6GelIAAIgYgBg");
	var mask_8_graphics_96 = new cjs.Graphics().p("AtSO8QrTgFBekjIABgBQBEj3JqmaQEijMGxjuQDUhpDvhvQCthMEgiCQC9hYAWgGQFZAXBUEhQAhB1hpAfQggAUkLDmIjnDSQjoDOiBBnQixCLirBsQqYG1lTAAIgTgBg");
	var mask_8_graphics_97 = new cjs.Graphics().p("At5PhQrygDBmktIABgCQBNj8KImqQEwjRHBj2QDbhuD4h2QCyhQEtiKQDEhcAWgIQFnAWBVEtQAiB5hvAgQgiATkaDvIjzDZQj2DUiFBqQi6CQivBxQq2HLldAAIgQAAg");
	var mask_8_graphics_98 = new cjs.Graphics().p("AugQFQsSgBBvk2IABgCQBVkDKnm5QE+jXHRj9QDih0EBh8IHvjmQDNhhAVgJQF1AWBXE4QAjB+h1AgQglASkpD4IkADfQkCDbiKBtQjBCVi0B1QrUHiloAAIgMAAg");
	var mask_8_graphics_99 = new cjs.Graphics().p("AvGQpQsyABB4lAIABgCQBdkJLFnJQFMjcHhkFQDqh5EKiCIIAjyIDphwQGDAUBZFEQAjCDh7AhQgoARk3EBIkNDlQkODhiQBwQjICai5B6QryH5lyAAIgIAAg");
	var mask_8_graphics_100 = new cjs.Graphics().p("A6+MGIABgBQBlkPLknZQFajhHxkNQDxh/ETiIIIQj+IDyh2QGQAUBbFPQAkCIiBAhQgrAQlGEKIkZDsQkbDniVBzQjQCfi+B+QsTITl9gDIgPAAQtBAAB/lHg");
	var mask_8_graphics_101 = new cjs.Graphics().p("A78MiIABgBQBukWMBnnQFpjnIBkVQD4iEEciOIIhkLQDkhwAVgLQGfATBcFbQAlCNiHAhQguAPlUETIknDyQkoDuiZB1QjXCkjDCDQsuInmHAAIgZAAQtVAACGlPg");
	var mask_8_graphics_102 = new cjs.Graphics().p("A85M/IABgCQB1kbMhn3QF2jsIRkdQEAiJEkiVQDNhmFliwQDth1AUgNQGsASBeFnQAmCRiNAiQgxAOliEcIk0D5Qk0D0ieB4QjfCpjICHQtII8mRACIgjAAQtqAACOlWg");
	var mask_8_graphics_103 = new cjs.Graphics().p("A92NZQB+khM+oHQJDlnOXnYQDShrFxi4QD0h6AUgOQG7ASBfFyQAnCXiTAiQg0ANlxElQo4HDjsCyQy0OIn9AGIgtABQuBAACZlhg");
	var mask_8_graphics_104 = new cjs.Graphics().p("AxvTuQuegoCWl+QB6k+NGoQIAPgJQIXlSMzmjICthXIFbisQB/g9B2g7IADgBQDzhtAggCQCGAPBhA0QDQBQAcEVIABAIQAbCUiNAuQg/AjlfElIjYC5IpIHsQhyBdhsBUQjuDDi0B0QgyAegyAjQhGAxg/AmQhYA1hXAmQirBRibAjQiyAxiIAAQgYAAgYgCg");
	var mask_8_graphics_105 = new cjs.Graphics().p("Ax9UhQuLhaCPmTQB2lZNOodIAPgJQIklfNNmoQBXgsBbgtQCVhJDQhkQCRhDBrg2IADgBQDxhgAsAKQCEAYBbBCQC6BLgLEvIAAAIQAPCSiIA4QhKA7lNElIjWDGQl8FVjIC5QhyBkhqBaQj7DmikBnQgzAcgzApQhIA4g9AmQhZA3hcAiQisBHinASQiFAYhuAAQhDAAg7gJg");
	var mask_8_graphics_106 = new cjs.Graphics().p("AyTVRQt3iKCImpQBzl1NWooIAPgLQIylrNlmuIC4haQCbhLDUhkQCihJBfgwIADgCQDxhSA3AXQCDAgBVBPQCkBHgzFKIAAAIQADCPiDBDQhUBSk8ElQhuBrhnBoQlyFijODOQhxBrhqBhQkHEHiUBbQgyAag2AvQhJA/g7AmQhaA6hjAcQisA+iyAAQhMAGhFAAQiBAAhogXg");
	var mask_8_graphics_107 = new cjs.Graphics().p("AsuWsQjdgBikgwQtji8CBm9QBumSNfo0IAPgKQI/l5N+mzQBcgtBhguIF6ixQCzhPBUgrIADgBQDvhFBDAiQCCAqBPBdQCOBBhbFlIAAAHQgKCOh9BNQhfBqkqEkQhsBxhnBvQlpFwjUDjQhxByhoBnQkUEoiDBQQgzAYg3A1QhLBGg6AlQhaA8hpAYQiAAniKAAQgwAAgxgEg");
	var mask_8_graphics_108 = new cjs.Graphics().p("AtGXwQjhgUiog8QtQjtB6nTQBrmtNmpAIAQgLQJMmGOXm5IDDhcQCphPDbhjQDEhWBJglIADgBQDug4BOAvQCBAzBJBqQB4A8iCF/IgCAIQgVCLh3BYQhqCBkZEjQhqB3hoB3QlfF9jaD5QhwB5hnBsQkhFLhzBDQgzAWg5A7QhMBNg4AlQhbA/hvATQheAYhnAAQhWAAhcgRg");
	var mask_8_graphics_109 = new cjs.Graphics().p("AtiY0QjlgnithJQs8keB0noQBmnKNvpLIAQgMQJamTOvm/IDIhcQCwhRDfhjQDVhcA9ggIADgBQDugrBZA8QB/A7BEB4QBiA4iqGZIgCAHQghCJhyBjQh1CYkHEjIjRD7QlVGKjgEPQhvCAhnByQkuFshiA4QgzAUg7BAQhNBUg2AlQhdBBh0APQhDANhJAAQh0AAiDghg");
	var mask_8_graphics_110 = new cjs.Graphics().p("AuCZ4Qjog7ixhVQsplQBtn9QBinmN3pXIARgMQJmmgPJnEQBiguBrgwQC3hTDihjQDnhhAygbIADgBQDsgeBlBIQB9BFA/CFQBLAzjRGzIgDAHQgtCHhtBuQh/Cvj2EjIjPEGQlLGZjnEkQhuCHhlB4Qk7GOhSAsQg0ASg8BGQhOBbg1AlQhdBDh6ALQgsAGgvAAQiMAAipg1g");
	var mask_8_graphics_111 = new cjs.Graphics().p("Auka7QjshOi1hiQsVmBBmoSQBfoCN+pjIARgMQJ0mtPinKIDShfQC+hVDlhiQD4hoAngWIADAAQDrgQBwBTQB9BOA4CTQA1Atj4HPIgEAHQg5CEhnB5QiKDGjkEjIjOESQlCGnjsE5QhuCOhkB/QlIGvhBAgQg0AQg+BMQhQBigyAlQhfBGiAAFQgZADgaAAQidAAjMhNg");
	var mask_8_graphics_112 = new cjs.Graphics().p("AvIb/Qjwhhi5huQsBmzBfonQBbodOGpwIASgMQKBm6P7nQQBmgvBxgxQDEhWDqhjQEJhuAbgQIADAAQDqgDB8BfQB7BXAzChQAfAokhHpIgEAHQhFCChiCDQiVDejSEiIjMEgQk4G0jzFPQhtCVhjCEQlSHSgzATQg0AOhABSQhRBpgxAkQhgBJiGABIgQAAQipAAjvhmg");
	var mask_8_graphics_113 = new cjs.Graphics().p("Ao5fFQivgEkGh9Qy0pCBurOQBYo9OfqEQKPnHQTnWQEhiCF0iZQEbh0APgLQG7ARBfFzQAJAjlIIDQklHMm5KNQmyKFlDHHQlfHzgjAIQg0AMhBBXQhTBwgvAkQhcBIiEAAIgMAAg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(76).to({graphics:mask_8_graphics_76,x:82.2,y:-449.6}).wait(1).to({graphics:mask_8_graphics_77,x:75.6,y:-445.2}).wait(1).to({graphics:mask_8_graphics_78,x:68.8,y:-441.2}).wait(1).to({graphics:mask_8_graphics_79,x:63,y:-437.2}).wait(1).to({graphics:mask_8_graphics_80,x:57.1,y:-433.9}).wait(1).to({graphics:mask_8_graphics_81,x:51.4,y:-430.6}).wait(1).to({graphics:mask_8_graphics_82,x:45.8,y:-427.3}).wait(1).to({graphics:mask_8_graphics_83,x:40,y:-424}).wait(1).to({graphics:mask_8_graphics_84,x:34.3,y:-420.8}).wait(1).to({graphics:mask_8_graphics_85,x:28.5,y:-417.5}).wait(1).to({graphics:mask_8_graphics_86,x:22.7,y:-414.2}).wait(1).to({graphics:mask_8_graphics_87,x:16.8,y:-410.9}).wait(1).to({graphics:mask_8_graphics_88,x:10.9,y:-407.6}).wait(1).to({graphics:mask_8_graphics_89,x:5,y:-404.3}).wait(1).to({graphics:mask_8_graphics_90,x:-0.9,y:-401}).wait(1).to({graphics:mask_8_graphics_91,x:-6.8,y:-397.7}).wait(1).to({graphics:mask_8_graphics_92,x:-12.7,y:-394.4}).wait(1).to({graphics:mask_8_graphics_93,x:-18.6,y:-391.1}).wait(1).to({graphics:mask_8_graphics_94,x:-24.5,y:-387.8}).wait(1).to({graphics:mask_8_graphics_95,x:-30.4,y:-384.5}).wait(1).to({graphics:mask_8_graphics_96,x:-36.3,y:-381.2}).wait(1).to({graphics:mask_8_graphics_97,x:-42.3,y:-377.9}).wait(1).to({graphics:mask_8_graphics_98,x:-48.2,y:-374.6}).wait(1).to({graphics:mask_8_graphics_99,x:-54.1,y:-371.2}).wait(1).to({graphics:mask_8_graphics_100,x:-60,y:-367.9}).wait(1).to({graphics:mask_8_graphics_101,x:-65.9,y:-364.6}).wait(1).to({graphics:mask_8_graphics_102,x:-71.9,y:-361.3}).wait(1).to({graphics:mask_8_graphics_103,x:-77.8,y:-357.9}).wait(1).to({graphics:mask_8_graphics_104,x:-81.4,y:-351.3}).wait(1).to({graphics:mask_8_graphics_105,x:-85,y:-344.5}).wait(1).to({graphics:mask_8_graphics_106,x:-87.9,y:-337.4}).wait(1).to({graphics:mask_8_graphics_107,x:-90.1,y:-329.7}).wait(1).to({graphics:mask_8_graphics_108,x:-91.9,y:-321.5}).wait(1).to({graphics:mask_8_graphics_109,x:-93.3,y:-313.2}).wait(1).to({graphics:mask_8_graphics_110,x:-94.3,y:-304.8}).wait(1).to({graphics:mask_8_graphics_111,x:-95.2,y:-296.5}).wait(1).to({graphics:mask_8_graphics_112,x:-95.8,y:-288.2}).wait(1).to({graphics:mask_8_graphics_113,x:-96.3,y:-280}).wait(267));

	// 图层 6
	this.instance_37 = new lib.yld_3_3();
	this.instance_37.setTransform(-218,-440.4);
	this.instance_37._off = true;

	this.instance_37.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(76).to({_off:false},0).wait(304));

	// 图层 25 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_58 = new cjs.Graphics().p("AiDCsQhskrDeinQEpB5i0FLQhJCJg6AAQg4AAgsh7g");
	var mask_9_graphics_59 = new cjs.Graphics().p("AiKEuQgegXgZglQgQgVgIgWQgkhlAThPQADgPAKgTQAHgjAVgnQAdg3AZgpQAkgwArgnQAnghApgaQAzALAnAWQBuBAATCJQAQBuhABvQgbAtgpAsQgjAngkAZQg6A3g3AAQgoAAglgeg");
	var mask_9_graphics_60 = new cjs.Graphics().p("Ai/FOQgqgZgggmQgYgXgJgYQgth+AshZQAHgKAUgYQAOgjAlguIBQhpQAzg2A1gpQAxglA0gZQBBAFAvAZQB9BHATC2QAPCOhZB2QgnAyg5AqQgvAlg0AVQhCAshAAAQg6AAg2gjg");
	var mask_9_graphics_61 = new cjs.Graphics().p("AjzFvQg2gbgognQgggagJgZQg3iXBGhjQALgIAegcQAWgiAzg1QBHhKAjgoQBDg8A/grQA9gqA9gYQBOAAA3AdQCNBMASDkQAPCvhxB9QgzA2hKApQg7AjhEARQhHAhhHAAQhOAAhKgog");
	var mask_9_graphics_62 = new cjs.Graphics().p("AknGPQhCgdgvgoQgpgdgJgaQhAiwBghtQAOgFApgfQAcgiBDg8QBchTAngnQBThDBHguQBMgtBFgYQBbgFBAAhQCcBSASEQQAPDQiLCFQg/A6haAnQhHAhhUAOQhIAXhJAAQhmAAhjgvg");
	var mask_9_graphics_63 = new cjs.Graphics().p("AlbGvQhOgfg2gpQgygggJgbQhIjJB4h5QASAAAzgjQAkgiBShCQByhcArgoQBihJBRgwQBZgxBOgXQBngLBJAlQCrBYASE+QAODwijCMQhLA+hrAlQhUAghjAKQhEAPhFAAQiEAAiBg3g");
	var mask_9_graphics_64 = new cjs.Graphics().p("AmOHOQhbghg9gqQg6gigKgcQhRjiCRiEQAWADA9gmICNhrQCHhlAwgnQBxhQBbgyQBlg1BXgXQB1gQBRAoQC6BeASFrQAOERi9CTQhWBDh8AjQhgAehzAGQg6AIg8AAQinAAikhAg");
	var mask_9_graphics_65 = new cjs.Graphics().p("AnCHtQhngjhFgrQhCglgKgdQhaj7CriPQAaAHBHgqQAzgiBwhPIDQiWQCBhWBlg0QByg5BfgXQCCgUBaAsQDKBjARGYQANEyjVCbQhiBGiMAiQhtAciDADQgpACgnAAQjUAAjRhLg");
	var mask_9_graphics_66 = new cjs.Graphics().p("An1ILQhzgmhMgrQhLgogLgfQhjkUDEiaQAeALBSgtQA6giB/hWIDrieQCQhdBvg2QB+g9BogWQCPgaBiAvQDZBqASHFQAMFSjuCiQhuBLidAgQh4AaiTgBIgaAAQkIAAkHhYg");
	var mask_9_graphics_67 = new cjs.Graphics().p("AA0KQQkugJkvhgQh/gohUgsQhSgrgMgfQhsktDeilQAiAOBbgwQBCgiCOhdQDGiBA+gmQCehjB7g5QFLiaC3BYQDpBvARHzQAMFykHCqQjKCBlTAAIgyAAg");
	var mask_9_graphics_68 = new cjs.Graphics().p("An5KbQifgkiChYQhPgrgFhHQhbkxDRjJQAqgoBehSQBGhICFhXQC0hyBBgiQCUhYB6gzQFIiLC5BTQEYB0ATIfQAMF5j3DFQjOCvloAVQhGAGhEAAQjpAAjvhDg");
	var mask_9_graphics_69 = new cjs.Graphics().p("AnJMIQjAgiiviCQhNgtADhuQhKk1DFjtQAyhdBfh1QBMhuB7hRQChhiBEgeQCIhNB8gvQFFh7C6BOQFKB4AUJMQAMF/jnDhQjGDSlZA0QiFAbiGAAQiqAAixgqg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AmYNwQjhgfjditQhJgtAJiWQg5k5C5kRQA6iSBhiYQBSiUBxhLQCOhTBHgaQB8hCB/gpQFBhtC8BJQF5B9AWJ5QAMGFjXD+Qi8D1lLBTQitA5i2AAQiBAAiGgcg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AlnPWQkBgckLjYQhHguARi9Qgok9Csk1QBCjIBji6QBXi6BnhGQB8hCBKgXQBxg3CCgkQE8hdC9BEQGqCCAXKlQANGMjIEZQizEZk8ByQjLBbjcAAQhhAAhmgSg");
	var mask_9_graphics_72 = new cjs.Graphics().p("Ak0Q6QkhgYk5kEQhEguAXjlQgXlBChlZQBKj9BljcQBcjiBdg/QBqgzBNgSQBkgtCEgfQE5hNC/A/QHaCGAZLTQANGRi4E1QipE9kuCRQjgCAj8AAQhKAAhNgLg");
	var mask_9_graphics_73 = new cjs.Graphics().p("Aj+SeQlCgWlmkuQhCgvAfkNQgGlFCUl9QBSkyBnj/QBikIBTg6QBXgiBQgPQBZgiCFgZQE2g/DAA7QILCLAaL/QANGXioFSQigFfkfCwQjwCpkYAAQg3AAg4gGg");
	var mask_9_graphics_74 = new cjs.Graphics().p("AjHUBQljgTmUlZQg/gwAmkzQALlKCImhQBZloBpkhQBokuBJg0QBFgTBSgLQBOgXCHgUQEygvDCA2QI7CPAcMsQANGeiZFtQiWGDkQDPQj8DSkyAAQgmAAgngDg");
	var mask_9_graphics_75 = new cjs.Graphics().p("AiRVjQmEgQnCmEQg7gwAslbQAclOB8nFQBimdBqlEQBtlUBAguICHgKQBCgMCJgPQEvggDDAxQJsCTAdNZQANGkiIGJQiNGnkCDuQkFD9lJAAIgxgCg");
	var mask_9_graphics_76 = new cjs.Graphics().p("AhaXGQmkgMnwmwQg5gxA0mCQAtlSBvnpQBqnSBslnQBzl6A1gpQAgANBYgDQA2gBCLgKQEsgRDEAtQKcCYAfOFQAOGqh5GmQiEHKjzENQkMEolfAAIgYgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_9_graphics_58,x:8.9,y:-227.4}).wait(1).to({graphics:mask_9_graphics_59,x:17.5,y:-230.1}).wait(1).to({graphics:mask_9_graphics_60,x:25.6,y:-232.6}).wait(1).to({graphics:mask_9_graphics_61,x:33.6,y:-235.2}).wait(1).to({graphics:mask_9_graphics_62,x:41.6,y:-237.7}).wait(1).to({graphics:mask_9_graphics_63,x:49.6,y:-240.2}).wait(1).to({graphics:mask_9_graphics_64,x:57.6,y:-242.7}).wait(1).to({graphics:mask_9_graphics_65,x:65.6,y:-245.1}).wait(1).to({graphics:mask_9_graphics_66,x:73.6,y:-247.3}).wait(1).to({graphics:mask_9_graphics_67,x:81.6,y:-249.5}).wait(1).to({graphics:mask_9_graphics_68,x:83.5,y:-257.9}).wait(1).to({graphics:mask_9_graphics_69,x:85.5,y:-265.6}).wait(1).to({graphics:mask_9_graphics_70,x:87.4,y:-272.8}).wait(1).to({graphics:mask_9_graphics_71,x:89.3,y:-279.9}).wait(1).to({graphics:mask_9_graphics_72,x:91,y:-286.7}).wait(1).to({graphics:mask_9_graphics_73,x:92.4,y:-293.5}).wait(1).to({graphics:mask_9_graphics_74,x:93.7,y:-300.2}).wait(1).to({graphics:mask_9_graphics_75,x:95.1,y:-306.9}).wait(1).to({graphics:mask_9_graphics_76,x:96.4,y:-313.6}).wait(304));

	// 图层 24
	this.instance_38 = new lib.yld_3_2();
	this.instance_38.setTransform(27.5,-440.4);
	this.instance_38._off = true;

	this.instance_38.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(58).to({_off:false},0).wait(322));

	// 图层 4 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_1 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_4 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_10 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_11 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_12 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_13 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_14 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_37 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AjnLOQhhgHgmghQi5ihANngQAAhEAThPIAAgEQBNlFCmjfIABgCQArg5BYAEQD7gXASCuQA2A9A9BXQCFC4BHC0QBWDWAJCzQAKCKhEBIQgiAsg1AZQg9AbhrAaQh0Abh1AOQhSAJhEAAQgnAAgjgDg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AkXMPIgEAAQhfgRgmgtQixi8AcoGIAAgBQADhMAUhUIAAgEQA+kOByjUQAjhAAygvIACgCIAMgKQA1gqBQAGQCagFA5BNQAvAsAOBNIAsA4QAlAyAmA7QBeCKBBCEQAfBCAZBAQBeDvADC8QAFCHhBBIIgOAPQgnArg9AbIgpAQQg7AUhSAUQg0AMg1AJQhNAOhJAIQgtAFgpACIgmABQhBAAgwgKg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AlKNSIgFgBQhcgZgmg6QipjXAroqIABgDQAFhVAVhaIAAgEQBCkiBzjrQAlhGA8gqIADgCIAOgJQBAgmBSAIQCiACAuBlQAwAyATBRIAtA/QAnA4AoBAQBiCYBDCPQAiBHAaBFQBlEJgBDFQAACQhMBLIgQAPQgrAqhEAcIgsARQhDAWhWAUQg5ANg5AKQhVAPhOAIQgxAEgrACIgYAAQhVAAg1gQg");
	var mask_10_graphics_52 = new cjs.Graphics().p("Al9OUIgEgBQhagjgnhHQigjxA6pRIAAgEQAIhcAWhgIABgEQBFk1B1kDQAmhNBIglIADgBQAIgFAIgDQBLgiBTAKQCrAKAjB8QAvA3AaBXIAuBEQApA/ApBEQBmCnBHCaQAjBNAbBIQBtEkgGDOQgECahXBMIgSAPQgwAqhLAdIgwARQhJAYhbAVQg9AOg+ALQhaAQhVAHQg1AFgvABIgNAAQhnAAg4gXg");
	var mask_10_graphics_53 = new cjs.Graphics().p("AmvPXIgFgCQhXgsgnhTQiYkNBJp3IABgFQAKhjAXhmIABgEQBIlJB3kaQAohUBSgfIAEgBQAJgEAKgDQBVgfBVANQCzARAYCVQAwA8AfBbIAwBLQArBFAqBIQBqC2BKClQAkBTAdBMQB0E+gLDXQgICjhiBPIgUAPQg0AphSAfIg0ARQhQAahgAVQhBAPhDALQhhARhaAIQg5AFgyAAIgEAAQh5AAg5geg");
	var mask_10_graphics_54 = new cjs.Graphics().p("AnhQaIgEgDQhVg1gohgQiPkoBXqdIABgHQANhpAYhsIABgFQBMldB5kxQAqhaBdgaIAEgBIAVgFQBfgcBXAPQC8AZANCsQAvBDAlBfIAyBQQAtBMArBNQBuDEBNCwQAnBZAeBRQB7FYgQDgQgMCshtBRIgWAPQg4AohaAgIg3ATQhXAahkAXQhGAPhHANQhqASheAHQg9AFg1AAQiIgBg5gkg");
	var mask_10_graphics_55 = new cjs.Graphics().p("AlHSJQiUgCg3gqIgFgDQhSg/gohtQiHlCBmrDIACgJQAPhwAZhyIABgFQBQlxB6lIQAshgBngWIAGAAIAXgEQBpgYBZARQDEAgACDFQAwBIAqBjIA0BXQAvBSAsBSQByDSBQC7QAoBeAgBWQCDFygVDpQgRC2h4BTIgYAPQg8AnhhAiIg7ATQheAchpAXQhKAQhMANQhxAThjAIQg6AEgzAAIgMAAg");
	var mask_10_graphics_56 = new cjs.Graphics().p("AltTTQifgDg2gwIgFgEQhQhJgoh5Qh/ldB1rqIACgKQASh3Aah3IABgFQBTmFB8lfQAthoBzgQIAGAAQAMgCANAAQB1gVBaATQDMAogJDcQAwBOAxBoIA0BdQAxBYAtBWQB3DhBTDGQAqBjAgBcQCLGLgaDyQgUDAiDBVIgbAPQhAAmhoAjQgeAKghAKQhkAehuAYQhPARhOANQh7AVhoAHQg5AFgzAAIgUgBg");
	var mask_10_graphics_57 = new cjs.Graphics().p("AmSUeQisgEg0g3IgFgEQhNhSgpiGQh3l4CEsQIACgLQAVh+Abh9IABgGQBXmYB9l3QAvhuB+gLIAGAAQAOgBAOAAQB/gRBbAVQDWAwgVD0QAwBTA3BtIA2BjQAzBeAuBbQB7DwBVDQQAsBpAiBhQCSGlgeD7QgZDJiOBXIgdAQQhEAkhvAlIhCAUQhsAghyAZQhTARhUAPQiCAVhsAIQg3ADgxAAIgfAAg");
	var mask_10_graphics_58 = new cjs.Graphics().p("Am3VpQi3gGg0g8QkglSDOx3QBoo+CnoJQA3iECmAKQHSgugsF7ICjEzQDCFwB6EtQGTPjmCDgQhcA1jHA6QjHA5jSAjQjPAhiXAAIgjAAg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_1,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_2,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_3,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_4,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_5,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_6,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_7,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_8,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_9,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_10,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_11,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_12,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_13,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_14,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_15,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_16,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_17,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_18,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_19,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_20,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_21,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_22,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_23,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_24,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_25,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_26,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_27,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_28,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_29,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_30,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_31,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_32,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_33,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_34,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_35,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_36,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_37,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_38,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_39,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_40,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_41,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_42,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_43,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_44,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_45,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_46,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_47,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_48,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_49,x:-7,y:-411.3}).wait(1).to({graphics:mask_10_graphics_50,x:-5.8,y:-403.8}).wait(1).to({graphics:mask_10_graphics_51,x:-4.7,y:-396.4}).wait(1).to({graphics:mask_10_graphics_52,x:-3.6,y:-389}).wait(1).to({graphics:mask_10_graphics_53,x:-2.6,y:-381.6}).wait(1).to({graphics:mask_10_graphics_54,x:-1.7,y:-374.2}).wait(1).to({graphics:mask_10_graphics_55,x:-0.8,y:-366.9}).wait(1).to({graphics:mask_10_graphics_56,x:0,y:-359.5}).wait(1).to({graphics:mask_10_graphics_57,x:0.8,y:-352.2}).wait(1).to({graphics:mask_10_graphics_58,x:1.5,y:-344.9}).wait(322));

	// 图层 3
	this.instance_39 = new lib.yld_3_1();
	this.instance_39.setTransform(-51.5,-445);

	this.instance_39.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-445,83,105.9);


(lib.泡泡 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(55,-32,1,1,0,0,0,50.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45},19).wait(11).to({x:55},15).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,-72,101,80);


(lib._1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_281 = function() {
		stop();
	}
	this.frame_426 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(281).call(this.frame_281).wait(145).call(this.frame_426).wait(1));

	// tit
	this.instance = new lib.tit();
	this.instance.setTransform(-117.7,-1515.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(427));

	// rili1
	this.instance_1 = new lib.rili1_2("synched",0);
	this.instance_1.setTransform(263,-852.9,1,1,0,0,0,-38,-938.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({_off:false},0).to({y:-862.9,alpha:1},8).wait(147));

	// 文字
	this.instance_2 = new lib.text1_1("synched",0);
	this.instance_2.setTransform(203.5,-704,1,1,0,0,0,56,-986.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(267).to({_off:false},0).to({y:-714,alpha:1},7).wait(153));

	// ico1_2
	this.instance_3 = new lib.元件6();
	this.instance_3.setTransform(39,-784.9,1,1,0,0,0,31.5,48.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({alpha:1},9).wait(164));

	// ico1_1
	this.instance_4 = new lib.ico1_1("synched",0);
	this.instance_4.setTransform(-33,-748,1,1,0,0,0,-7,-35.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).to({alpha:1},8).wait(167));

	// pao2
	this.instance_5 = new lib.泡泡();
	this.instance_5.setTransform(-212,-643,1,1,0,0,0,16,-32);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(268).to({_off:false},0).wait(159));

	// pao1
	this.instance_6 = new lib.泡泡();
	this.instance_6.setTransform(97,-975.9,1,1,0,0,0,16,-32);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(197).to({_off:false},0).wait(1).to({regX:50,x:131},0).wait(1).to({regX:16,x:97,alpha:1},0).wait(228));

	// z13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_261 = new cjs.Graphics().p("AjshvQAQhbBegIQGXgegnFOQgLBZhfARQhKANg7AAQklAAA2lEg");
	var mask_graphics_262 = new cjs.Graphics().p("AAEEyQg7gBg1gdQhQgqglhXQgqhjAOiTIAAAAQALhuBWgqQA0gZAwgUQAOgGAPgCQAQgCAPABQBcAHA8AlQA8AlASA+QAgBlgLCDQgEA4gYAmQgWAogoAVQhVBShDAAIgJgBg");
	var mask_graphics_263 = new cjs.Graphics().p("AA3GUQhEAChEgnQhcg1gxhqQg3h4AIitIAAgBQAGiABOhMQAvguAvgrQAOgNARgGQARgGAWABQBvADBJArQBMAsALBPQAcCBgJCYQgDBCgTA0QgTA0ghAjQhKCYg+AAIgEAAg");
	var mask_graphics_264 = new cjs.Graphics().p("Ag0HJQhpg+g8h9QhFiOABjHIAAgBQACiTBGhuQAqhDAuhDQAOgTASgJQAUgKAagBQCFAABWAxQBaA0AGBfQAXCegGCtQgDBMgPBAQgOBCgbAwQg9Dhg5gCIgRABQhIAAhHgug");
	var mask_graphics_265 = new cjs.Graphics().p("AgYIkQh1hJhIiPQhSikgFjhIAAgBQgDimA+iRQAmhXAthaQANgaAUgNQAVgOAggBQCZgEBjA3QBqA8gBBuQATC8gEDCQgBBWgMBMQgKBRgUA9QguElgzAAIgYABQhOAAhSg1g");
	var mask_graphics_266 = new cjs.Graphics().p("AADJ/QiAhThTiiQhfi6gMj7IAAgBQgHi5A2iyQAghtAshxQANghAWgQQAXgSAkgCQCvgIBwA+QB5BDgHB/QAODZgBDYQAABegIBZQgGBegNBKQgfFqgtACQgPACgQAAQhVAAheg9g");
	var mask_graphics_267 = new cjs.Graphics().p("AAgLaQiMhehfi0QhsjQgSkVIAAgCQgMjLAujVQAbiBAsiIQAMgoAYgUQAYgWApgCQDEgMB9BEQCJBKgNCPQAJD2ABDtQABBpgDBlQgDBrgGBYQgQGvgmAEQgTADgTAAQhcAAhphFg");
	var mask_graphics_268 = new cjs.Graphics().p("AA8M1QiZhohqjHQh6jmgYkxQgalkBwmmQANgvAZgXQAagZAugEQDZgQCKBKQCYBSgTCgQAHGPAEFqQAHLQgmAHQgWAEgWAAQhkAAhzhNg");
	var mask_graphics_269 = new cjs.Graphics().p("AEHOcQg5gDg8gbQhGgfhLg9QhThHhIhhQg9hUgyhkQgxhggihqQg+i8gRjOQgOioASilQADgZAGgWQAFgXAJgSIBPimQAjg2APguQADgMAJgLIAHgKQATgbAZgPQARgIARgFQAUgEAZAAQClAHB9A0QAwAUAqAbQCcBigBCrQAjFUgIFWQgCBVgDBPQgGBwgLBZQgQBtgYBDQgXBogeAvQgUBmgbAAQgEAAgEgCg");
	var mask_graphics_270 = new cjs.Graphics().p("ADNO2Qg6gPg9gmQhHgthIhHQhXhWhLhvQg/hgg0huQgzhrgmh0QhFjUgUjdQgRjBAZitQAFgdAIgWQAJgXAPgQQBHhMA3g0QA2ggAJgLQADgJAOgHIAJgGQAbgSAbgJIAmgHQAWgBAbADQCwAaCFBEQAzAaAsAgQChBzASC2QBAFpgVGHQgEBegIBVQgMB+gWBdQggB2gwA2QgsBVg4ALQgaA3gdAAQgOAAgPgNg");
	var mask_graphics_271 = new cjs.Graphics().p("ACSPMQg6gcg+gxQhGg6hKhTQhYhkhNh8QhBhsg3h4Qg2h3goh9QhNjugWjrQgVjYAfi2QAHghAMgWQAMgYAVgNQBlhABHgbQBKgJADAXQACgGATgCIAMgDQAjgIAdgEQAaAAAQgBQAZADAbAGQC7AsCOBVQA2AgAvAmQClCCAkDCQBdF+ghG3QgHBogLBbQgUCLggBhQgwCAhHApQhCBBhSgYQgXATgYAAQggAAgjgjg");
	var mask_graphics_272 = new cjs.Graphics().p("ADnQ7QhFAJhKhTQg8gpg8g7QhJhIhKhdQhZhzhPiKQhEh5g5iBQg5iCgriGQhUkIgZj5QgYjwAmi/QAIgkAPgXQAQgYAbgLQCCg0BYgCQBeAOgCA5QABgCAXADIAPAAIBLACQAdAGAPAAQAcAGAdAJQDGA+CWBmQA5AmAxAsQCqCSA2DOQB6GSgsHoQgKBxgQBhQgaCZgrBmQg/CJhfAaQgnAUgqAAQg2AAg9ghg");
	var mask_graphics_273 = new cjs.Graphics().p("ADKSWQhUgbhZhpQg6g2g+hGQhLhWhKhoQhaiBhRiXQhHiFg7iLQg8iOguiPQhckigbkHQgbkIAtjIQAJgnASgXQAUgZAhgIQCggoBpAXQBxAlgIBbIAdAJIARAEIBVAQQAiAKAOACQAeAKAfALQDRBRCfB3QA7AsAzAxQCvCjBIDZQCXGlg4IaQgMB7gUBnQgiCng1BpQhPCTh3ANQgXAFgZAAQhaAAhphJg");
	var mask_graphics_274 = new cjs.Graphics().p("ACtTzQhjg/hlh/Qg9hCg/hRQhMhkhKhyQhbiQhUilQhJiRg8iVQg/iXgyibQhjk7gekVQgekgAzjRQALgrAWgXQAXgZAngGQC+gcB5AxQCEA7gNB+QAAAEAhANIAUAHIBfAfQAmAOAOAEQAgANAhAOQDbBkCoCIQA9AxA2A3QC0CzBaDkQC0G6hEJLQgPCFgYBsQgoC1hBBtQheCdiOgBIgNAAQh+AAiYh7g");
	var mask_graphics_275 = new cjs.Graphics().p("AHjYDQiZgNi6ikQisiai2kJQiwkBiZk/QiblBhmlCQhrlVggkiQgik4A6jaQANguAZgYQAagZAugEQDbgQCKBLQCYBSgTCfQgBAJA9AbIChBGQERCBDKCvQKjJLiFQlQgwGBh4C0QhmCZiUAAIgagBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(261).to({graphics:mask_graphics_261,x:-124.2,y:-697.9}).wait(1).to({graphics:mask_graphics_262,x:-121.9,y:-689}).wait(1).to({graphics:mask_graphics_263,x:-119.7,y:-680.3}).wait(1).to({graphics:mask_graphics_264,x:-117.6,y:-671.6}).wait(1).to({graphics:mask_graphics_265,x:-115.5,y:-662.9}).wait(1).to({graphics:mask_graphics_266,x:-113.5,y:-654.2}).wait(1).to({graphics:mask_graphics_267,x:-111.5,y:-645.5}).wait(1).to({graphics:mask_graphics_268,x:-109.3,y:-636.9}).wait(1).to({graphics:mask_graphics_269,x:-101.4,y:-627.9}).wait(1).to({graphics:mask_graphics_270,x:-93.2,y:-618.5}).wait(1).to({graphics:mask_graphics_271,x:-85,y:-608.7}).wait(1).to({graphics:mask_graphics_272,x:-76.8,y:-600.5}).wait(1).to({graphics:mask_graphics_273,x:-68.6,y:-591.8}).wait(1).to({graphics:mask_graphics_274,x:-60.4,y:-583.3}).wait(1).to({graphics:mask_graphics_275,x:-52.2,y:-575}).wait(152));

	// x13
	this.instance_7 = new lib.yld_12();
	this.instance_7.setTransform(-132.5,-764);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(261).to({_off:false},0).wait(166));

	// z12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_232 = new cjs.Graphics().p("AkFCKQkTiMDxixQATgNATgDQFJhWDzC3QCqB/iJCVQgJAJgNAEQh7AhhzAAQi3AAimhWg");
	var mask_1_graphics_233 = new cjs.Graphics().p("Ah5EEQhAgVhAg3IgRgMQhvhOgbhbQghhuB0hxQAQgRAQgIQAogdAsgLIAsgGQAzgFAxABQB4ACBcAmQA3AVA3A4QAdAZAcAeQBBBAAUBEQAdBjhCBhQgHAMgLAHIgIAGQgzArg4ALIgPAEQg7AJg5AAQhyAAhtglg");
	var mask_1_graphics_234 = new cjs.Graphics().p("Ah6FEQhBgXhDhPIgQgQQhohegehwQgmiIBfh8QANgXAOgMQAigvAsgPQAQgDAigDQA4gGA4ABQCQACBdAsQA0AYA5BPQAcAhAbAlQA8BMAXBTQAgBzg0BrQgFAQgIAKIgHAIQgmBGg0APQgIADgJACQhGANhDAAQh9AAh1gtg");
	var mask_1_graphics_235 = new cjs.Graphics().p("Ah8GEQhBgZhGhoIgQgUQhghtgiiHQgqifBKiJQAKgbAMgRQAbhBAtgSQAOgEApgEQA/gGA+ABQCnACBfAzQAyAZA7BoQAaAnAaAuQA4BXAZBhQAiCFgkB1QgDASgHANIgEALQgaBhgxATQgHAEgKADQhRARhOAAQiKAAh8g2g");
	var mask_1_graphics_236 = new cjs.Graphics().p("Ah/HFQhBgbhIiAIgPgYQhZh+gnidQgti3A1iWQAHgfAJgWQAVhSAtgWQAMgEAygFQBEgGBEABQC/ACBhA6QAvAaA9CAQAZAvAZA1QAzBiAcBwQAlCWgWB/QgCAUgDASIgEANQgNB7gtAXQgIAGgKACQhdAVhXAAQiVAAiGg9g");
	var mask_1_graphics_237 = new cjs.Graphics().p("AiCIGQhBgehLiZIgPgcQhRiOgrizQgxjPAhiiQAEgjAGgbQAPhkAtgZQAKgEA5gGQBKgHBLABQDWACBjBBQAtAbA+CZQAZA1AXA9QAvBuAeB+QAnCngHCJQABAXgCAVIgBAQQgCCWgoAbQgIAHgMADQhmAZhhAAQihAAiQhFg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AiHJGQhCgfhOiyIgOgfQhKiegujKQg2jnAMiuQABgoADgfQAKh2AtgdQAIgFBBgGQBQgHBRABQDtACBlBHQArAdBACxQAXA9AWBEQAqB5AhCNQAqC4AICTIADAyIAAASQALCxgkAfQgJAJgMADQhxAdhpAAQitAAiahOg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AiNKHQhCgihQjKQhKi7g5j3Qg6j+gIi7QgKjPA5gqQAGgEBJgHQBWgIBYABQEEACBnBOQAoAfBCDIQA8C6A3D2QA5D9AUC2QAXDMggAjQgJAKgNADQh7AhhzAAQi5AAikhVg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AhOKYIgtgUQhPgihbi+QgSghgQgjQg6hmgjhzQgWhAgVhLIgBgFQgfh4gVhuQgWh8gGhnQgFhSAKg1QAIhWA0gZQAIgEAogEIAjgDQBbgIBdABQB9ABBcAQQBqATA9AmQA3AdBKC6QBFB5ApCXQATBCAVBVIAAAAQAhCLAXB/QASBnAKBYQAGAsADAlQAIBygQAnQgFAKgFAGIgBAAQgKAJgPADQhzAeh0AAQiuAAithDg");
	var mask_1_graphics_241 = new cjs.Graphics().p("Ag5KUQgYgJgXgLQhegihkixQgWgggUghQhPhiglhtQgZg9gbhUIgCgFQgkh5gYh1QgbiCgGhrQgHhaAOgzQAIhQBEgXQAKgDAogEIAlgDQBggIBhABQCCABBlAPQBrARBEAjQBFAbBSCrQBhBxAqCOQAVA/AYBfIABAAQAjCPAZCJQAUBsALBbQAGAvAEAnQAJB6gSAnQgEAKgHAFIgCAAQgKAJgQADQhsAbhyAAQi7AAjLhGg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AgkKQIgygSQhrgjhuilQgagegYgfQhjhfgohmQgdg6gghbIgCgFQgoh8gdh8QgfiJgIhvQgHhgARgzQAIhJBUgWQAMgDAogDIAngDQBlgHBlABQCHAABsAOQBvAPBJAhQBVAYBaCcQB7BpAtCFQAWA9AdBoIAAAAQAlCTAcCTQAWBxAMBgIAKBaQALCBgTAmQgFAKgHAFIgDABQgMAIgRADQhlAXhwAAQjHAAjqhIg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AgOKNIg1gSQh5gkh3iYQgegcgcgdQh4hcgrhfQggg3gmhhIgCgGQgth+ghiEQgjiQgJhyQgJhoAWgyQAHhCBkgUQAOgDApgDIAogDQBqgGBqAAQCLAABzAMQBzAOBPAeQBkAXBiCNQCWBgAvB9QAYA5AgByIAAABQAoCWAfCcQAWB4AOBjQAHAzADArQAMCJgUAmQgFAKgIAFIgEABQgMAHgTADQheAUhtAAQjSAAkKhKg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AAEKJIg1gSQiGgjiCiMQgigagfgcQiNhYgthYQgkg1grhoIgDgGQgxiBgliLQgniWgKh3QgLhvAagxQAHg7BzgSQARgDAogDIArgCQBugGBvAAQCQAAB5ALQB4AMBVAbQByAUBqB/QCyBYAwB0QAaA2AjB8IABABQAqCaAhCmQAZB8AOBoQAHA1AEAtQAOCQgWAmQgGAKgIAFIgFABQgOAHgUADQhVARhnAAQjeAAkxhNg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AAZKFIg4gRQiUgkiLh/QgmgZgjgZQihhVgwhSQgngygyhuIgCgHQg2iDgpiSQgsiegLh6QgMh2AegwQAHg0CDgRIA7gFIAsgDQB0gFBzAAQCUAACBAJQB7ALBbAYQCBASByBwQDNBPAyBsQAcAzAnCFIAAACQAtCfAkCuQAaCCAPBsQAIA3AEAvQAPCYgXAlQgGAKgJAFIgGABQgPAHgVADQhOAOhhAAQjoAAlWhQg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AAuKAIg6gPQiigliVhyQgqgXgngYQi2hSgyhKQgrgwg2h1IgEgGQg6iHgtiZQgwikgMh+QgNh9AhgwQAHgtCTgPQAVgCApgDIAugCQB3gFB5AAQCYgBCIAJQB/AJBhAVQCQAQB6BhQDoBHAzBiQAeAxArCPIABABQAuCkAnC4QAbCHARBvQAIA6AFAyQAPCfgYAlQgHAJgJAFIgHABQgPAHgXACQhGAMhaAAQjwAAl/hUg");
	var mask_1_graphics_247 = new cjs.Graphics().p("ABEJ8IhAgPQitglifhmQgtgVgsgWQjKhOg0hDQgvgug8h7IgEgHQg/iJgxihQg0irgNiBQgPiFAlguQAHgnCjgNIBAgEIAwgCQB8gFB9AAQCdgBCPAHQCDAIBnASQCeAOCCBSQEEA/A1BZQAfAuAvCYIABACQAwCnAqDCQAdCNARBzQAJA8AFA0QARCmgaAlQgHAJgKAFIgIACQgQAGgYACQg/AJhRAAQj4AAmohXg");
	var mask_1_graphics_248 = new cjs.Graphics().p("ABYJ4IhBgOQi8gliohaIhhgnQjehLg3g9QgzgrhCiCIgDgHQhEiMg1inQg5iygOiGQgQiLApguQAHgfCzgMIBCgEIAxgCQCCgECBAAQCigBCVAGQCHAGBtAPQCtAMCKBDQEfA2A3BRQAhArAzCiIAAACQAzCrAsDMQAfCRASB4QAJA+AGA2QASCugbAkQgHAKgLAEIgJACQgRAGgaACQg1AHhHAAQj9AAnZhbg");
	var mask_1_graphics_249 = new cjs.Graphics().p("ABtJ0IhEgOQjJgmiyhNIhpgjQjzhIg5g2Qg2gohIiIIgEgIQhIiQg6itQg8i5gPiJQgSiTAtgtQAGgYDDgKIBFgEIAzgBQCGgECGgBQCngBCcAEQCLAFBzAMQC7AKCTA1QE6AuA4BIQAjAoA2CrIABADQA1CuAvDVQAgCYATB7QAKBAAGA4QATC2gcAkQgIAJgLAEIgKADQgSAFgbACQguAFg7AAQkCAAoJheg");
	var mask_1_graphics_250 = new cjs.Graphics().p("ACCJwIhHgNQjWgmi8hBIhwggQkIhEg8gvQg6gmhNiPIgEgHQhNiUg+i0QhAi/gRiOQgSiZAxgsQAFgSDTgIIBHgDIA1gCIEWgEQCrgBCjADQCRADB2AJQDLAICaAmQFVAlA7BAQAkAlA7C1IAAACQA3CzAyDfQAiCcAUCAQAKBCAGA6QAVC9geAkQgIAJgMAEIgLADQgTAFgcABQgmAEgwAAQkCAAo+hig");
	var mask_1_graphics_251 = new cjs.Graphics().p("ACXJrIhJgNQjlgmjFg0Ih4gdQkdhAg+gpQg9gjhTiVIgFgIQhRiWhCi8QhFjFgRiSQgUihA1grQAFgLDjgGIBJgDIA3gBIEfgEQCvgBCqABQCVACB9AGQDZAGCjAXQFwAdA8A3QAmAiA+C/IABACQA5C2A1DpQAjCiAVCEQALBEAGA8QAWDFgfAjQgIAKgNADIgMADQgUAEgeACQgbACgjAAQj/AAp6hmg");
	var mask_1_graphics_252 = new cjs.Graphics().p("ACsJnQltg5kgg6Qkxg+hBghQhCgihcijQhWiZhGjCQhJjNgSiVQgWioA5gqQAGgFE9gGQFogHFeABQQQAEBnBOQApAfBBDIQA8C6A4D2QA4D9AVC2QAXDMghAjQgIAKgOADQgjAJhJAAQj5AAq1hqg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AMDK/IgQAAQhtgLijgDQhcgGhhgIQivgJiRgPQjPgPisgWQkggdhVghIgcgKQhIgeh1iEQhShihShzIguhHIhri6QgmgwgBg3IAAAAQgFglAAgtQAAhrAogrQADgHA+gJQBKgbCdgZQDGgtDIgmQCLgcCNgXQEMgrDbgWQJBgbCNArQA3AYBMCgIAMAVQBlCnBVDmQA9CRAoCCQAYBPARBJQAlDIgXA4QgHALgMAGIgIADQhLAxkQALQg9AHhHAEQgbAEgbAAIgRgBg");
	var mask_1_graphics_254 = new cjs.Graphics().p("ABGLaQjdABi1gKQk8gGhTgiQgPgGgQgDQhOgaiOhmIjPikQgcgbgfgbQhJhThHg+Qg8gfAEg0IAAAAQgEggABg6QABhsAkg2QAEgOA2gOQBFgyCOgvQC3hXDAhKQCGg3CKguQEHhWDqg1QIzhIDQAeQBHATBcCNIAPASQCPCVBzDVQBXCKA6B/QAkBQAZBLQAzDEgOBMQgFANgJAJIgHAEQg8BPj7A0Qg6AVhEAQQgkAPgiABQgIACgJAAQhmgIi+APQhiABhkgBQhpADheAAQhMAAhFgCg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AquMLQgQgHgTgDQhTgViohIQhxg4iGg6QgjgTgmgTQhXg+hegnQhTgPAKgxIAAgBQgDgbABhGQAChxAhhBQAEgTAwgVQA+hHCAhGQCoiAC3huQCAhSCIhFQEDiCD3hSQInh0ERAQQBYANBsB6IATAQQC5CCCQDDQBxCCBNCBQAvBNAhBOQBBDAgEBhQgDAPgIAKIgFAGQgsBtjmBdQg3AjhCAcQgkAZggAFQgJACgJABQhggFjYAgQhpAJhnAFQjQAVidAFQjtARi+ADQhzAGhVAAQirAAg3gXg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AqCNlQgQgHgWgDQhZgQjBgqQiBgjiggeQgogLgugLQhmgoh0gRQhqACAPgvIABAAQgCgYAChSQAChzAehMQAEgaApgaQA5hhBxhbQCZioCuiTQB7htCGhbQD+ivEEhvQIbihFTADQBpAIB7BnIAXANQDjBvCtCyQCLB5BgCBQA6BPAqBQQBPC6AFB2QgCARgFANIgEAHQgdCLjRCGQg0Axg+AoQgmAjgeAIQgIADgLABQhYgBj0AxQhuAQhqAMQjhAkiiAPQkAAijEAOQjHAWh0AAQhkAAgmgQg");
	var mask_1_graphics_257 = new cjs.Graphics().p("ApUO+QgRgIgZgBQhggMjZgMQiQgOi7gBQgugEg1gCQh0gSiLAEQiCATAWgsIABgBQgCgSADhfQADh2AbhXQAEggAiggQAzh4BjhyQCJjTCmi1QB2iICDhzQD6jZERiNQIQjNGUgLQB5ACCLBUIAbALQEMBdDLCgQClBwBzCAQBFBPAzBUQBcC3APCJQAAASgDAQIgEAIQgMCpi9CvQgwA/g8A1QgmAsgdALQgIAFgLABQhSACkOBDQh0AXhuASQjyAzimAZQkRAzjMAaQkAAoh8AAQhHAAgcgMg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A8zQzIABAAQgBgPAEhqQAEh6AXhhQAFgmAbgmQAtiQBUiHQB7j9CcjZQBxijCBiKQD2kGEdiqQIGj6HUgYQCKgDCbBBIAfAIQE1BKDpCPQC/BnCFCAQBRBPA7BWQBqCzAZCgQABAUgBASIgCAJQADDGioDYQgtBNg5BBQgnA1gbAPQgIAGgMACQhLAFkpBUQh6AehxAZQkDBCirAjQkhBDjVAmQmrBXhPgkQgQgIgdgBQhlgIjzASQigAIjUAbQg0AEg9AHQiCADiiAaQhGARggAAQgmAAAPgXg");
	var mask_1_graphics_259 = new cjs.Graphics().p("A+YTgIACgBIADiBQAFh8AUhtQAFgrAVgtQAninBFidQBskmCUj+QBri+B/ihQDxkxEqjHQH7knIVgmQCbgICrAtIAiAHQFgA3EGB9QDYBeCYCAQBdBOBDBaQB4CvAiC1QADAVABAUIgBALQATDmiTD/QgqBag2BNQgnBAgaASQgIAHgMACQhFAJlEBlQiAAlh0AfQkTBSixAsQkxBUjgAzQnFBuhNglQgRgJggAAQhrgDkMAwQivAcjuA4Ih+AbQiQAZi5AwQhlAfggAAQgYAAAOgRg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EggAAWNIACgBQABgFAEiDQAGh/ARh4QAFgyAOgyQAgi/A4izQBclPCLkiQBnjZB8i4QDtldE3jlQHulTJYg0QCrgNC7AaIAmAEQGJAkEjBtQDzBVCqB/QBoBOBMBcQCGCrAsDKIAHAuIABAMQAiEEh+EoQgnBog0BZQgnBKgYAUQgIAJgNADQg+ALleB4Ij+BRQkkBgi1A3QlCBljoA+QnhCFhMgmQgSgIgiABQhxAAkmBPQi+AxkJBUIiLArQieAvjQBGQiCAtgcAAQgPAAANgMg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EghoAY7QACgBAFiPQAKi6AXi7QBLpoDIn2QEZrFHumJQJrnsOXAfQM9AaGrEgQFaDpBDGIQAyEihpFTQgkB0gxBmQgoBTgWAYQgIAJgOAEQg3APl5CIQnzC1kDBaQwdFuhug4Qhrg3tyFYQjVBTlXCJQieA+gWAAQgJAAAOgLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(232).to({graphics:mask_1_graphics_232,x:115.9,y:-783.3}).wait(1).to({graphics:mask_1_graphics_233,x:114.1,y:-790.6}).wait(1).to({graphics:mask_1_graphics_234,x:112.2,y:-797.8}).wait(1).to({graphics:mask_1_graphics_235,x:110.4,y:-805.1}).wait(1).to({graphics:mask_1_graphics_236,x:108.6,y:-812.4}).wait(1).to({graphics:mask_1_graphics_237,x:106.8,y:-819.6}).wait(1).to({graphics:mask_1_graphics_238,x:105.4,y:-826.9}).wait(1).to({graphics:mask_1_graphics_239,x:103.9,y:-834.2}).wait(1).to({graphics:mask_1_graphics_240,x:97.9,y:-834.3}).wait(1).to({graphics:mask_1_graphics_241,x:92,y:-834.4}).wait(1).to({graphics:mask_1_graphics_242,x:86,y:-834.6}).wait(1).to({graphics:mask_1_graphics_243,x:80,y:-834.7}).wait(1).to({graphics:mask_1_graphics_244,x:74,y:-834.8}).wait(1).to({graphics:mask_1_graphics_245,x:68.1,y:-834.9}).wait(1).to({graphics:mask_1_graphics_246,x:62.1,y:-835}).wait(1).to({graphics:mask_1_graphics_247,x:56.1,y:-835.1}).wait(1).to({graphics:mask_1_graphics_248,x:50.1,y:-835.2}).wait(1).to({graphics:mask_1_graphics_249,x:44.2,y:-835.3}).wait(1).to({graphics:mask_1_graphics_250,x:38.2,y:-835.4}).wait(1).to({graphics:mask_1_graphics_251,x:32.2,y:-835.4}).wait(1).to({graphics:mask_1_graphics_252,x:26.2,y:-835.5}).wait(1).to({graphics:mask_1_graphics_253,x:18,y:-837.7}).wait(1).to({graphics:mask_1_graphics_254,x:9.9,y:-839.2}).wait(1).to({graphics:mask_1_graphics_255,x:2,y:-837.5}).wait(1).to({graphics:mask_1_graphics_256,x:-5.8,y:-835.1}).wait(1).to({graphics:mask_1_graphics_257,x:-13.7,y:-832.6}).wait(1).to({graphics:mask_1_graphics_258,x:-21.5,y:-825.8}).wait(1).to({graphics:mask_1_graphics_259,x:-29.2,y:-815.3}).wait(1).to({graphics:mask_1_graphics_260,x:-36.5,y:-804.8}).wait(1).to({graphics:mask_1_graphics_261,x:-43.7,y:-794.5}).wait(166));

	// x12
	this.instance_8 = new lib.yld_11();
	this.instance_8.setTransform(-133,-891.4);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(232).to({_off:false},0).wait(195));

	// z11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_197 = new cjs.Graphics().p("Ag6DMQmfhQDZkeQAMgQATgCQEFhUC9CMQDKCTi3B7QhkBDh2AAQgoAAgsgJg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AliBVQgkhQBOh3QAMgTATgIQBggsBjgXQCRgWCHAsQAOAGAQAFIA6AcQAbALAOARIAFAFQAqApgEAyQABAjglAhQgLAKgOAQIgUATQgWATgWAPQhhBKhwANQgfAFgdAAIgUAAQkGAAgsiDg");
	var mask_2_graphics_199 = new cjs.Graphics().p("Al5CTQhDhSBMiJQAMgXAVgLQBhg7BygtQCbgpCfAOQAOAFAVAAQAiALAiAEQAhAEAOAPIAHADQA2AjAGA2QAMArguAnQgKAKgQATIgUAYQgXAZgWATQhlBjh0AhQgfALghAHQhZAShHAAQigAAg6heg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AmPDUQhjhUBMiaIAAgBQAMgaAWgQQBhhJCChDQClg8C3gPQAPADAZgEQAlAFAogDQApgEAOAMQAEAAAEADQBCAcAQA7QAWAxg1ArQgLAKgQAbIgWAcQgXAdgWAYQhpB8h3A1QghASgjAMQiMA2hnAAQh5AAhDhKg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AmkEeQiChXBLitQAMgcAWgVQBjhXCRhZQCxhQDNgrQAQABAcgJQApAAAvgKQAvgMAPAKQAEgBAFACQBNAWAbBAQAhA2g9AwQgLAKgSAiIgWAgQgXAkgXAcQhsCUh7BJQgjAYgkATQiyBgiDAAQhoAAhIg9g");
	var mask_2_graphics_202 = new cjs.Graphics().p("Am4FoQiihZBKi/QAMghAXgaQBlhjCfhvQC8hjDjhJQASgBAggNQAsgEA2gSQA2gUAPAIQAEgCAHACQBYAPAlBEQArA9hEA0QgLAKgTAoIgXAlQgYAqgXAgQhwCth+BdQgkAfgmAYQjRCPieAAQhfAAhMg0g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AnMGyQjChbBKjQIAAgBQAMgkAYgfQBlhxCviEQDGh3D7hmQASgDAkgRQAvgKA8gZQA+gcAQAFQAFgCAHABQBkAIAvBKQA2BChMA5QgMAKgUAuQgLAWgMATQgZAwgYAlQhzDHiBBwQgmAlgnAfQjsDAi6AAQhbAAhPgug");
	var mask_2_graphics_204 = new cjs.Graphics().p("AngH7QjhhdBJjiQAMgoAYgjQBniAC+iaQDQiKETiDQATgEAogWQAygPBDghQBEgjAQACQAGgDAIABQBvACA6BOQBABIhTA+QgMAKgWA0IgXAtQgaA2gYApQh3DgiECFQgnArgpAlQkEDzjYAAQhZAAhRgqg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AnzJEQkBhfBIjzIAAgBQAMgrAagoQBniQDNiuQDbidEqihQAUgGAsgaQA1gTBKgpQBLgrARAAQAGgEAIAAQB8gEBDBTQBLBOhbBCQgMAKgXA6IgYAyQgbA7gYAtQh6D6iICZQgoAygrAqQkaEnj2AAQhYAAhTgmg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AoHKOQkghiBHkFIAAAAQAMgvAagsQBpifDcjDQDlixFCi+QAUgHAxgfQA4gYBQgxQBTgzAQgCQAHgFAKAAQCHgLBNBYQBWBUhjBHQgMAKgYBAIgZA2QgcBBgYAxQh+EUiLCsQgqA5gsAwQkuFbkWAAQhYAAhVgig");
	var mask_2_graphics_207 = new cjs.Graphics().p("AoaLYQlAhlBGkWIAAAAQAMgyAcgxQBqitDqjZQDwjFFZjaQAWgKA0gjQA8gdBWg4QBag7ARgEQAHgHAKAAQCTgSBYBdQBgBahrBMQgMAKgZBFIgZA8QgdBGgZA2QiBEtiODAQgsA/gtA2QlCGQk3AAQhYAAhWgfg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AotMhQlghnBGknIAAgBQALg1Adg2QBri7D6jvQD6jYFwj4QAXgLA4goQA/giBdhAQBghCASgHQAIgHALAAQCegZBiBhQBrBhhyBQQgNAKgbBLIgZBAQgdBMgaA6QiEFHiSDTQgtBGgvA9QlVHFlYAAQhYAAhXgdg");
	var mask_2_graphics_209 = new cjs.Graphics().p("ApANqQl/hpBEk5IAAAAQAMg5Adg6QBtjKEJkFQEEjrGIkVQAXgNA8gsQBDgnBkhHQBnhKASgKQAIgIAMAAQCqggBsBmQB1Bnh6BVQgMAJgcBSIgaBEQgeBSgaA+QiIFgiVDoQgvBMgwBDQlnH7l6AAQhYAAhZgcg");
	var mask_2_graphics_210 = new cjs.Graphics().p("ApTO0QmfhsBElKIAAgBQALg8Afg/QBtjYEYkaQEPj/GfkyQAYgPBBgwQBFgsBrhPQBuhSASgLQAJgKANAAQC1gmB2BrQCABsiBBZQgNAKgdBYIgbBJQgfBXgaBCQiLF6iZD7QgwBTgyBJQl5IwmcAAQhYAAhagZg");
	var mask_2_graphics_211 = new cjs.Graphics().p("ApmP9Qm/huBDlcIAAAAQAMhAAfhDQBvjnEmkwQEakSG2lPQAagRBEg0QBIgyByhWICHhoQAJgKAOgBQDBgsCBBvQCKByiJBfQgNAJgeBeIgbBNQggBdgbBHQiPGVibENQgyBagzBOQmMJnm9AAQhZAAhbgYg");
	var mask_2_graphics_212 = new cjs.Graphics().p("Ap6RGQnehwBDltIAAAAQALhDAghJQBwj0E2lGQEkkmHOlsQAagSBIg5QBMg3B4heICPhyQAJgLAPgBQDNgzCKB0QCVB4iQBjQgOAKggBkIgbBRQghBjgaBLQiTGvifEhQgzBgg1BUQmdKdngAAQhZAAhdgXg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AqMSQQn+hzBBl+IAAgBQAMhGAhhNQBxkDFFlcQEuk5HlmJQAbgUBMg9QBPg8B/hmQCDhpAUgSQAKgNAPgBQDYg6CVB5QCgB+iZBoQgNAKghBpIgcBXIg9C3QiWHIiiE1Qg0Bng3BaQmuLUoDAAQhaAAhdgWg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AqfTZQoeh1BBmQIAAAAQAMhKAhhSQBzkRFUlyQE4lMH9mmIBshYQBShBCFhtQCKhxAUgVQALgNAQgCQDkhACfB+QCqCEigBsQgNAKgjBwIgcBaQgiBvgcBTQiZHhimFJQg2Btg4BhQm/MKomAAQhbAAhegVg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AqyUiQo9h3BAmhIAAgBQAMhNAihWQB0kgFimHQFElgIUnDIBxheQBVhGCMh0QCRh5AUgYQALgOARgCQDwhGCpCCQC1CKioBxQgOAJgjB2IgdBfQgjB0gcBYQidH7ipFdQg4Bzg5BnQnPNApKABQhcAAhfgVg");
	var mask_2_graphics_216 = new cjs.Graphics().p("ArFVsQpch6A/myIAAgBQALhRAkhaQB1kuFxmdQFOl0IsngIB1hkIDrjHQCYiBAVgZQALgPATgDQD7hNCzCHQC/CQivB2QgOAJglB8IgdBkIhADVQihIVitFwQg4B6g7BtQngN3puAAQhcAAhggTg");
	var mask_2_graphics_217 = new cjs.Graphics().p("ArYW1Qp9h8A/nFQAylrH1o3QFYmHJDn+QA9g2EykHQCfiJAVgcQAMgQATgCQEHhUC9CMQDKCVi3B7QgOAJgmCCQg4DDgnCFQikIuiwGEQoWSiriAAQhdAAhhgTg");
	var mask_2_graphics_218 = new cjs.Graphics().p("ArdXaIgqgMQjfhCiBh1QjWiuAoknIAAgCQAij2DIk+QB6jGC2jYQAngvAqgxQC7jZDyjkQDDi4DgizIAbgVQBeg+EvjcIACgBQAFgDAEgEIAMgKQCMhvAkgSQANgNAUgBQA6gMA2gBQCaADBNBDQAgARAcAmQARASAOATQB1COiQB0QgJAKgQAzIgZBTQg2DGgpCPQhfFPhjETQhJDKhMCsQmpPIouChQiBAliAAAQh1AAh1geg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AsOX3IgogQQjWhWh1iRQi9jBAqkyIAAgCQAkkGC+lFQB5jTCyjiQAngyAqgzQDAjsD1jmQDQjDDqioIAdgUQB+hGErixIADAAQAFgDAFgFIANgKQCOhkAygLQAQgKAUABQA7gHA3AHQCiAbAiBMQAZAQATAyQAOATAKAWQBbCZh+B6QgJAPgPAxIgXBVQg1DLgqCYQhfFdhkEaQhKDThOCzQm5QEpNBvQhaAQhYAAQilAAicg6g");
	var mask_2_graphics_220 = new cjs.Graphics().p("As+YUIgogUQjLhrhqisQikjUArk9IAAgCQAnkXC0lNQB4jiCujpQAng1Aqg2QDFj+D4jnQDdjPD1ieIAdgSQCghOEniFIADgBQAFgBAGgGQAIgHAFgDQCQhaBCgEQARgHAVACQA9gBA4APQCqAzgKBWQASAOAKA9QAKAVAGAZQBBCkhrCBQgIATgOAuIgXBYQgzDPgrCiQhgFshlEjQhLDahOC5QnKRAprA8QgyAEgwAAQjbAAi+hdg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AtwYvIgmgZQjAh/hfjHQiLjoAtlIIAAgBQAoknCrlVQB2jyCqjxQAng4Aqg3QDKkRD7jpQDrjaD/iTIAegSQDAhVEkhaIADAAQAGgBAGgHQAJgIAFgCQCShPBRAEQATgEAVADQA+AEA5AWQCzBNg1BeQAKAMACBJQAFAYADAbQAnCuhYCIQgJAZgLAqIgXBbQgyDTgsCsQhhF6hlEtQhLDhhQDAQnbR7qKAJIgIAAQkcAAjfiIg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AmocAQkwgUjbijIglgdQi2iUhTjiQhyj8AulSIAAgBQAqk4CilbQB0kCCnj5QAng7Apg6QDQkkD+jqQD4jlEJiJIAfgQQDhhdEhguIACgBQAHAAAHgHQAJgJAFgCQCUhFBhAMQAUgBAVAEQBAALA6AdQC7BlhhBoQADAKgHBUQACAagBAeQAMC5hFCOIgSBGIgWBdQgwDXgtC2QhiGIhmE2QhMDphRDGQnaSPqLAAIgvgCg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AnvdJQk/grjUi8QgTgQgRgRQisiohIj+QhYkPAvleIAAAAQAslICYliQBzkSCjkBQAng9Apg9QDVk2EBjsQEFjwEUh+IAhgPQEBhlEdgDIADAAQAGAAAIgIQAKgKAFgBQCWg6BwATQAWACAWAGQBBAPA7AlQDCB9iLBxQgFAJgPBgIgGA9QgPDEgyCUIgRBIIgUBgQgwDbguDAQhiGWhnE/QhNDwhSDNQnZSdqJAAQgwAAgxgHg");
	var mask_2_graphics_224 = new cjs.Graphics().p("Ao2eSQlPhBjNjVQi9jFhEk3Qg/kiAwlpQAvlZCOlpQCNloDUlBQDalJEEjtQESj7Eeh0QE2h9ErArQAHABAIgJQAKgKAGgBQEGhUC+CMQDKCWi3B6QgPAKgjCqIhXG0QiXLuilIKQoHZ4r7AAQhHAAhJgOg");
	var mask_2_graphics_225 = new cjs.Graphics().p("Andf1QhrgQhigeQjehCicicQgVgVgTgWQiojBhFkqIgCgHQhEkuAml5IAAgCQAmlqCCl9IAEgLQB8lsC9lIIAZgrQCxksDQjlQAsgwAsgsQCvivC2hvQBvhFB0grQBugpBtgPQAGgBAFgCQAIgDAHgBQDAgtCvApIAdAGQAHACAIgGQAKgHAGABQBkgGAxAQQBOACBeBGQAqAaAmAiQDACkiJCBQgDALgKA5IgJB1QgSEFgKC/QgfHcg7GGQgnEAgzDcQhtHai2FRQm5NXqqAAQhOAAhRgLg");
	var mask_2_graphics_226 = new cjs.Graphics().p("EgGRAhtQhwgOhrgYQjtg4ioijQgXgWgVgYQixjHhOk9IgCgHQhMk9AemQIAAgCQAdl+B5mWIAEgNQB0mGC3lgIAYgvQCtlHDQj4QAsg1AtgwQCyjBC8h2QB2hLB6gqQB1goB1gIQAGAAAGgEQAIgEAHgCQDOg0CyA8IAcAKQAHADAIgEQALgDAGADQBlASAKAhQA8ADBmBmQApAhAlAlQC2C0hcCHQACARgEA1QAFAzACBEQAQEJARDNQAdHxgXGaQgOEOgmDqQhPH+jTFgQnGMvspAAQhSAAhVgIg");
	var mask_2_graphics_227 = new cjs.Graphics().p("EgGeAjkQh2gKh0gVQj9gti0irQgYgWgXgZQi6jNhXlRIgBgHQhUlLAVmnIAAgBQAVmVBwmvIADgNQBtmhCwl4IAYgzQCplhDPkLQAsg6Aug0QC1jUDDh9QB+hQB+gpQB8goB9AAQAGAAAHgFQAIgGAHgBQDcg8C1BQIAcANQAHAEAIgBQAKAAAHAEQBnArgeAyQAqAEBuCGQAoAnAkAqQCsDDgvCNQAHAXACAwQANA3ALBEQAxEMArDbQBaIGANGrQALEggYD2QgzIjjuFuQnTMIuyAAQhRAAhUgGg");
	var mask_2_graphics_228 = new cjs.Graphics().p("EgG5AlcQh8gIh9gQQkMgjjBiyQgagXgYgaQjDjShgllIgBgHQhblaAMm9IAAgBQAMmrBnnIIAEgOQBkm7CqmRIAXg2QCml8DOkeQAtg+Atg5QC6jnDJiDQCEhXCGgoQCBgmCEAHQAHAAAHgGQAJgIAGAAQDqhFC4BlIAdAQQAHAFAIABQAKADAHAHQBoBDhGBCQAYAGB4CmQAlAtAjAvQCiDSgBCTQANAcAHAsQAVA7ATBEQBTEQBFDoQCWIcAzG+QAjEvgLEDQgWJGkJF9QnjLhxEAAQhKAAhNgDg");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgHaAnTQiBgFiGgLQkcgZjNi5QgbgYgagbQjMjYhpl5IgCgHQhilpADnUIAAAAQADnABfnhIADgPQBdnVCkmqIAWg5QCimXDOkyQAshDAvg8QC8j5DQiLQCKhcCNgnQCKgmCKAOQAGABAIgIQAKgIAGgBQD4hMC7B4IAcAUIAPAJQAKAHAIAIQBpBchuBTQAGAHCADGIBGBmQCYDhAtCZQARAjAOAoQAdA/AbBCQB1ETBfD2QDSIyBXHRQA8E+ADERQAHJqklGLQn0K6zmABQg7AAg9gCg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgMTApCQlTgRjqjzQjYjhhxmRQhpl3gGnrQgFnVBWn6QBVn4CgnKQCmnYDblbQDplxEIi1QEejCEqArQAHABAHgJQAKgKAFgBQEHhUC9CMQDKCWi3B6QgMAJCJDlQDkGABxDNQIjPaDALwQEVRGnOJNQoGKU2aAAQinAAi0gIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(197).to({graphics:mask_2_graphics_197,x:44.6,y:-1007.8}).wait(1).to({graphics:mask_2_graphics_198,x:40.2,y:-1001}).wait(1).to({graphics:mask_2_graphics_199,x:35.6,y:-993.6}).wait(1).to({graphics:mask_2_graphics_200,x:30.9,y:-986.6}).wait(1).to({graphics:mask_2_graphics_201,x:26.1,y:-980.4}).wait(1).to({graphics:mask_2_graphics_202,x:21.3,y:-974.3}).wait(1).to({graphics:mask_2_graphics_203,x:16.4,y:-968.1}).wait(1).to({graphics:mask_2_graphics_204,x:11.5,y:-961.9}).wait(1).to({graphics:mask_2_graphics_205,x:6.5,y:-955.7}).wait(1).to({graphics:mask_2_graphics_206,x:1.6,y:-949.5}).wait(1).to({graphics:mask_2_graphics_207,x:-3.3,y:-943.3}).wait(1).to({graphics:mask_2_graphics_208,x:-8.3,y:-937}).wait(1).to({graphics:mask_2_graphics_209,x:-13.3,y:-930.8}).wait(1).to({graphics:mask_2_graphics_210,x:-18.2,y:-924.6}).wait(1).to({graphics:mask_2_graphics_211,x:-23.2,y:-918.4}).wait(1).to({graphics:mask_2_graphics_212,x:-28.1,y:-912.2}).wait(1).to({graphics:mask_2_graphics_213,x:-33.1,y:-906}).wait(1).to({graphics:mask_2_graphics_214,x:-38.1,y:-899.7}).wait(1).to({graphics:mask_2_graphics_215,x:-43.1,y:-893.5}).wait(1).to({graphics:mask_2_graphics_216,x:-48.1,y:-887.3}).wait(1).to({graphics:mask_2_graphics_217,x:-53.1,y:-881.1}).wait(1).to({graphics:mask_2_graphics_218,x:-55.6,y:-874.5}).wait(1).to({graphics:mask_2_graphics_219,x:-58,y:-868}).wait(1).to({graphics:mask_2_graphics_220,x:-60.5,y:-861.4}).wait(1).to({graphics:mask_2_graphics_221,x:-62.9,y:-854.6}).wait(1).to({graphics:mask_2_graphics_222,x:-63.5,y:-847.7}).wait(1).to({graphics:mask_2_graphics_223,x:-62.9,y:-840.8}).wait(1).to({graphics:mask_2_graphics_224,x:-62.2,y:-833.8}).wait(1).to({graphics:mask_2_graphics_225,x:-56.5,y:-820.8}).wait(1).to({graphics:mask_2_graphics_226,x:-49.5,y:-809.8}).wait(1).to({graphics:mask_2_graphics_227,x:-33.6,y:-798.7}).wait(1).to({graphics:mask_2_graphics_228,x:-16.2,y:-787.7}).wait(1).to({graphics:mask_2_graphics_229,x:1.7,y:-776.7}).wait(1).to({graphics:mask_2_graphics_230,x:19.8,y:-765.6}).wait(197));

	// x11
	this.instance_9 = new lib.yld_10();
	this.instance_9.setTransform(-107.5,-985.4);
	this.instance_9._off = true;

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(197).to({_off:false},0).wait(230));

	// z10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_182 = new cjs.Graphics().p("AjUAGQgZiaCqgRQGcgmi7EXQg4BUhtAKIgZABQiaAAgailg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AgUDHQgtgHgngaQg4gfghg+QgZgvgIgxQgTh1BhgkQAvgSA2gFIAfgDQAvgEAiACQAZADAOAJQAcAKAJAYQAPAJAXATQArAjAGArQANBEhKBgQgoA0hAAgQgUAKgXAAQgUAAgUgHg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AghDhQgrgTgpgqQg1gugihGQgdg4gIgyQgUiCB5geQA8gOA1gFIAggEQA8gEAhADQAeAEAJARQASASgJAmQAHALAdAdQAwAsAJAqQAZBRhYBlQgtA1hKAoQgPAIgSAAQgZAAgggTg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AgvD6Qgogegrg5Qgyg+gkhNQgfhFgIgwQgXiPCRgXQBKgMA0gFIAjgDQBHgGAgAFQAkAGADAYQAJAZgcA2QgBAMAkAnQA0A1ANApQAjBdhmBsQgyA2hUAwQgNAHgPAAQgeAAgngig");
	var mask_3_graphics_186 = new cjs.Graphics().p("AiQCgQguhMglhUQgkhSgHguQgZicCqgRQB/gOAxgEQBRgHAgAHQAoAIgBAfQgBAhguBFQgKAOAqAwQA5A/AQAnQBFCfkfCrQgMAHgOAAQg+AAhjijg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AilCxIgYgkQgig6grhPIgCgEQguhZgIgxQgOhbA4goQAtgkBagIIA0gEQBggJAygCQBPgGAqAFIAGABQArAHAGAcQANAegeA+QACAOArAsQAmAgALAeQANAbACAWQAHAfgEAeQgRBmhyBhQg8AyhPAtQgSAJgUAAQhOAAhnibg");
	var mask_3_graphics_188 = new cjs.Graphics().p("Ai9DAQgOgSgOgUIhbiUIgDgEQg4higJg1QgQhkBJglQA0gfBjgIIA6gEQBngIA7gCQBUgEAzAFIAHABQAtAGANAZQAcAagNA4QAMAOArAnQAwAhAFAiQAGAcgDAaQACAggKAhQgjBxh3BjQhFA5hUAsQgaAOgcAAQhcAAhqiWg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AjaDQQgQgTgPgWQgjg2hHhoIgDgFQhDhrgJg4QgShtBZgiQA7gcBtgHIBAgEQBtgHBFgBQBZgDA7AEIAHABQAxAGAUAVQArAYACAwQAXAOAtAkQA4AhgCAlQACAegJAdQgEAjgPAjQg2B7h8BmQhOBAhYAsQgkARgjAAQhqAAhtiPg");
	var mask_3_graphics_190 = new cjs.Graphics().p("Aj6DgQgSgUgRgXQgjg1hVh1IgEgFQhNh0gKg8QgSh2BpgfQBBgYB3gGIBGgEQBygGBQAAQBegDBEAFIAHABQA0AFAaASQA6AVATApQAiANAtAgQBCAigJApQgEAfgOAhQgKAkgUAnQhJCEiBBpQhXBGhdAtQguAVgsAAQh1AAhwiJg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AkaDwQgUgVgTgZQgkg0hjiBIgEgGQhYh8gKg/QgUiAB5gbQBJgUCAgGIBMgDQB4gGBaABQBjgCBMAFIAJAAQA2AFAiAPQBIARAjAiQAtAOAuAcQBLAigQAsQgJAigUAkQgPAlgaAqQhcCPiFBrQhgBNhiAtQg6AZg1AAQh+AAhziDg");
	var mask_3_graphics_192 = new cjs.Graphics().p("Ak6D/QgWgWgVgbQgkgxhxiOIgFgHQhiiFgLhCQgViJCJgYQBQgQCJgGIBSgDQB9gEBmABQBngBBVAFIAJABQA5AEApALQBXAOAzAcQA4ANAuAYQBVAjgXAwQgOAigZAoQgWAngfAsQhvCaiJBtQhqBUhmAtQhGAeg/AAQiIAAh0h+g");
	var mask_3_graphics_193 = new cjs.Graphics().p("AlbEPQgYgXgWgdQglgvh/ibIgGgHQhsiOgLhGQgXiSCZgVQBXgMCTgFIBXgCQCEgEBvACQBsAABeAFIAKAAQA8AEAwAHQBmAMBDAUQBCANAwAUQBeAkgeAzQgUAlgfAqQgaApglAvQiCCkiOBwQhyBbhrAtQhRAihMAAQiPAAh3h4g");
	var mask_3_graphics_194 = new cjs.Graphics().p("AmtDoQglgtiOinQh8idgMhLQgZicCqgRQB5gLDegEQECgFDZAKQJZAchRB6QgwBIhYBoQiUCuiTBzQjoC2i5AAQi1AAiLiqg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AjCGVQidgYh3h8Qgggegzg9IhxiHIgmguQhniIgLhEQgWiKCDgcQAagGAhgDQBsgJC1gEIBSgCQDygEDPAHIBBACQJvAcgmB3QgDAKgFALQgiBQhTBiQgnAugsAqQh5B6iFBXQg1Ajg2AdQjHBtinAAQgpAAgmgHg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AjNGhQizgViBhyQgsgkgwg6Ih6iRIgqgyQhyiUgMhHQgXiTCXgXQAcgEAjgDQB1gIDDgFIBXgCQEEgFDgAIIBHACQKDAbAGB1QABALgDAMQgWBdhbBrQgpAugzAwQiDB6idBYQg7Aig+AcQjcBli+AAQgnAAgngEg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AjbGrQkagXifjBQglguiNilQh9ifgMhLQgYibCpgSQCCgMERgGQFKgIEaAIQMnAYgOCQQgPCYjDCqQi/CokJBnQj0BejVAAQglAAglgDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_3_graphics_182,x:-107.1,y:-982.2}).wait(1).to({graphics:mask_3_graphics_183,x:-105.7,y:-979.2}).wait(1).to({graphics:mask_3_graphics_184,x:-104.3,y:-975.7}).wait(1).to({graphics:mask_3_graphics_185,x:-102.8,y:-972.2}).wait(1).to({graphics:mask_3_graphics_186,x:-101.3,y:-968.6}).wait(1).to({graphics:mask_3_graphics_187,x:-96.2,y:-967.6}).wait(1).to({graphics:mask_3_graphics_188,x:-90.8,y:-966.6}).wait(1).to({graphics:mask_3_graphics_189,x:-84.9,y:-965.5}).wait(1).to({graphics:mask_3_graphics_190,x:-78.8,y:-964.5}).wait(1).to({graphics:mask_3_graphics_191,x:-72.6,y:-963.4}).wait(1).to({graphics:mask_3_graphics_192,x:-66.4,y:-962.3}).wait(1).to({graphics:mask_3_graphics_193,x:-60.1,y:-961.3}).wait(1).to({graphics:mask_3_graphics_194,x:-53.9,y:-960.2}).wait(1).to({graphics:mask_3_graphics_195,x:-46.5,y:-959.5}).wait(1).to({graphics:mask_3_graphics_196,x:-38.9,y:-958.8}).wait(1).to({graphics:mask_3_graphics_197,x:-30.9,y:-958.1}).wait(230));

	// x10
	this.instance_10 = new lib.yld_9();
	this.instance_10.setTransform(-102.5,-992.4);
	this.instance_10._off = true;

	this.instance_10.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(182).to({_off:false},0).wait(245));

	// z9 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_169 = new cjs.Graphics().p("AiMA1QgsifCRguQFPAzj+DQQg2AugoAAQg8AAgchkg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AiIB2QglgdgNgtQghh2BPg0QAqgTA+gEIAcAGQBQAUAzAcQB7BFhSBbQgYAbgxAUQgTAJgWAJQgkAOgiAEQgQACgOAAQgzAAgjggg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AgeCZQhRgFg3glQg2ghgMgrQgmiKBvgyQA4gEBFAKIAiAJQBaAcA+AkQCXBWhjBeQgcAbhCALQgZAFgaADQgYADgZAAQgTAAgVgCg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AgnCfQhcgVhBghQhHglgLgoQgsifCRguQBYANBeAhQBoAjBHArQCzBrhzBfQghAbhTACIgLAAQhIAAhUgTg");
	var mask_4_graphics_173 = new cjs.Graphics().p("ABJDgQgigEgmgSQgxgWg0goQgWgQgVgSQg3gugngvIgWgcQgmg8AHgZQATgsAzgiQA3gpBFgDIAfgDQB2APBeAeQCVAugHBIIAAAGQAKBEgVA8QgUBBg2AuQgiAegkAHQgTAGgUAAQgLAAgLgCg");
	var mask_4_graphics_174 = new cjs.Graphics().p("Ah2DsQhHg3hGhsQg+hfgfhaQgfhcAXgSQA3gbBbgWQBggXBIAZQIHA1iACcQhDBcg/BNQh6CVg/ARQgTAIgTAAQgzAAg7gvg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AgxEIQhogHhXg9QhxgpgohfIgCgGQgehQAVg2QAhgnA0gzQAKgLAOgLQArgfAzgXQAkgPAggBQAjgKAhACQHWAfgGB0QAmBKg/BXIgPAUQg/BOhUA7QgdAag9AcQgqAUg1ACIgPABQgdAAgggIg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AkJEqQimAMgwhoIgDgGQgdhJAThaQAVg0AkhTQAGgTALgSQAfgwA2gyQAlgfAhgOQApgXAlABQHmAIBtBTQCIBAhFBtIgRAXQg+BKh2BOQgRAOhcAxQguAXg9AVQgtAPgpAIQhqAghXAAQgaAAgYgDg");
	var mask_4_graphics_177 = new cjs.Graphics().p("Ao7E1Qggg/ASiFQAJhIAThxQAFhWBShqQBVhtBJgCQQJgfiTD4QgxBTi3BwIj2CLQlmDLisAAQhlAAgkhGg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AoTF9QgogPgYgfQgZgdgLgvQgOgxAHhCQAHg3AhheIAMgkQAUhXBYhpIALgNQBTheBIgPQAqgIAogHQBZgUBAAAQM+gFiBDfIgEAFQgsBIiQBfQgUALgkAWIiSBSIhvA+Ql/DWi/AAQgrAAghgKg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AohGOQgtgLgdgaQghgZgSgsQgagwAHhEQAGg0A0hlIAQgiQAkhWBfhpIAMgNQBVhcBLgcQArgPAogNQBignA6AAQNtgLiCDjIgDAGQgtBKiaBkQgQAJgtAaIiYBVQg2Afg+AiQmZDhjVAAQgkAAgegGg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AowGeQgvgHgjgVQgqgVgZgoQgkgwAFhGQAFgwBGhrIAWgjQA0hUBlhpIANgNQBZhaBNgpIBTgoQBsg6AzgBQOcgRiBDoIgEAFQgvBOijBoIhBAlIifBZIh4BDQm2DtjuAAQgbAAgZgDg");
	var mask_4_graphics_181 = new cjs.Graphics().p("Ao+GuQgzgDgogQQgzgSgggjQgvgwAFhJQADgrBZhxIAbgjQBDhUBshoIAOgNQBchYBQg3IBTg0QB2hNAsgBQPLgYiBDtIgEAGQgwBQitBtIhFAmIimBeIh9BEQnUD7kKAAIgggBg");
	var mask_4_graphics_182 = new cjs.Graphics().p("ApMG+QiCgBhEg3Qg7gxAEhKQACgoBsh2QBhhpCTiDQCQiBB2hZQB/hfAlgBQQJggiUD5QgxBTi3ByIj2CIQpTFRlOAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(169).to({graphics:mask_4_graphics_169,x:-43.9,y:-1035.5}).wait(1).to({graphics:mask_4_graphics_170,x:-39.3,y:-1034.7}).wait(1).to({graphics:mask_4_graphics_171,x:-34.7,y:-1033.8}).wait(1).to({graphics:mask_4_graphics_172,x:-30.1,y:-1033}).wait(1).to({graphics:mask_4_graphics_173,x:-28.8,y:-1024.3}).wait(1).to({graphics:mask_4_graphics_174,x:-21.7,y:-1016.4}).wait(1).to({graphics:mask_4_graphics_175,x:-23.1,y:-1018.3}).wait(1).to({graphics:mask_4_graphics_176,x:-20.2,y:-1018}).wait(1).to({graphics:mask_4_graphics_177,x:-16.7,y:-1013.3}).wait(1).to({graphics:mask_4_graphics_178,x:-21.6,y:-1012}).wait(1).to({graphics:mask_4_graphics_179,x:-26.6,y:-1010.8}).wait(1).to({graphics:mask_4_graphics_180,x:-31.6,y:-1009.4}).wait(1).to({graphics:mask_4_graphics_181,x:-36.7,y:-1008.1}).wait(1).to({graphics:mask_4_graphics_182,x:-41.7,y:-1006.6}).wait(245));

	// x9
	this.instance_11 = new lib.yld_8();
	this.instance_11.setTransform(-103.5,-1027.9);
	this.instance_11._off = true;

	this.instance_11.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(169).to({_off:false},0).wait(258));

	// z8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_139 = new cjs.Graphics().p("Ai1DUQgPlhDkjSQDtDRiHFlQgrB1hsARQgVADgSAAQh3AAgGiMg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AiLFEQgigPgcgeQgWgWgTgqQgOgfgCgiQgDgcAIgcQAEgSAOgUQALgmAagjQAog1AVgvQAogzArgsQBRhIBYgvIATAQQBpBgATCOQAEAbgDAbQgDAXgHAWQgEAoghAoQgjA/g5BGIgCACQhTBXhtAIQgrgBgWgHg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AiJE5Qg1gHgTgLQgcgZgfgmQgVgXgcgzQgVgkgDgjQgEghAPgeQAIgLAagPQAUgfAtghQBGguAYgnQA8gsA4gkQByg6BjgXIAXASQB4BqAHCtQADAggKAbQgJAagRAUQgJAjg6AcQg9AwhSAzIgCACQhyA7hvAAIgJAAg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AjJElQg+gOgQgPQgXgjgjguQgUgZglg6QgbgrgEgjQgFgjAWgiIAygQQAegZA/gcQBlgoAaggQBQglBCgbQCWgsBvABIAaAUQCHB0gEDMQAAAmgRAdQgPAbgZASQgPAdhUARQhWAhhqAgIgDABQh0AbhhAAQghAAgegDg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AkJESQhIgUgMgTQgSgugmg2QgUgaguhDQgggtgGgkQgGgpAdgmQAQADAzgIQAmgSBSgYQCDgiAdgYQBkgeBPgTQC3gdB6AZQAPAKAOALQCYB+gQDtQgCArgYAfQgVAbgiAQQgWAYhtAFQhvASiCANIgFABQg9ADg4AAQh1AAhTgPg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AFFEsQiIADiagGIgGAAQjpgPh+ggQhRgagJgXQgNg5gpg+IhKhkQgng2gHgkQgIgtAlgpQAUAKA/gFQAvgLBlgTQChgcAggRQB4gWBbgLQDagPCEAxQASALAPAMQCnCIgbENQgFAwgfAhQgbAcgqAOQgVAOhRAAIg9gCg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AFgFJQihgMizgZIgGAAQkPgpiDgqQhbghgFgbQgIhCgshHQgTgbg/hSQgug7gHgmQgJgwAsgtQAXARBMgBQA4gEB4gPQC/gVAjgKQCLgPBpgDQD6AACQBIQATAMASAOQC2CRgnEuQgGA1gmAiQgiAegzALQgOAGgkAAQgzAAhdgLg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AF6FoQi9gdjNgsQogh0gDhIQgDhNgwhMQgTgfhHhaQg0hBgIgmQgLg1A0gwQAbAYBYADQBBACCLgJIECgSQCdgIB4AGQFDAPCcB6QDGCcgzFOQgIA5gtAkQgoAfg8AKQgHABgNAAQg2AAiYgXg");
	var mask_5_graphics_147 = new cjs.Graphics().p("AG/GoIgsAAQi7AHjOgYQhtgEhegUQgggHgggIQg3gPgwgQQjNhCgMg5QgCgQgDgQQgNhEgohFQgVgnhGhgQgzhGgHgtIAAgBQgKg6Azg2QAaAPBWgFIDLgjQCLgXBGgTQAKABAHgDQAYgDAJgFIAKgCQBIgRBGgHQBBgHBBACQAtACAtAFQEQAcCmB5QA4AqApA2QALAQAGAVQAQAlAHAsQAHAsACAtIgBA1QAAAXgCAeQgCA1gJBAIgDAQQgMA1gmAkQgnAmg6AQQgWAMhDAAQglAAgygDg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AiyHuQgigHglgKQg7gQg0gTQjUhJgWhGIgHgjQgShJgphMQgXgvhEhmQgxhMgHg1QgJg/Axg9QAbAGBUgNQBBgZCJglQCJgkBKgiQALACAHgGQAWgEAIgJIAJgEQBDgeBHgNQBDgOBJACQAxABAxAGQEbAgDECGQA9AtAwA4QAMAQADAZQAMAnACAwQADAvgCAxQgGAdgBAZIgDA5QgDA3gKBJIgDARQgMA6glApQgmAtg4AWQgjAiiJAAIgrAGQi4ArjNgEQgyAGgyAAQg7AAg2gJg");
	var mask_5_graphics_149 = new cjs.Graphics().p("AimJNQgkgFgpgMQg/gSg5gWQjbhPgfhUIgJglQgWhOgrhSQgZg4hChvQgwhPgGg8IAAgBQgJhFAxhCQAagDBSgWQBCgmCHgzQCIgxBOgwQALACAGgIQAVgFAHgOIAIgFQA+grBJgUQBGgUBQABQA0ABA2AHQElAiDiCWQBDAuA2A7QANAQAAAcQAJAqgDAzQgCAzgGAzQgJAigDAXIgFA9QgDA4gLBSIgDATQgMA+gkAvQglAzg3AdQgjAviEALIgqAMQi1BQjNAPQhNAWhKAAQglAAgjgFg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AidKsQgmgFgtgNQhEgUg9gZQjihWgphiIgLgnQgahTgrhZQgdg/g/h2QgvhVgFhDIAAgBQgJhLAwhIQAagMBQgeQBCgzCGhBQCHg/BSg+QAMADAFgKQATgHAGgSIAIgHQA5g3BJgbQBIgbBYAAQA4ABA7AIQEvAmEACjQBIAxA+A9QANAQgDAgQAGAsgIA3QgHA3gKA1QgNAlgEAXIgHBAQgDA7gMBaIgDAUQgMBEgkAzQgkA6g1AjQgjA9h/AVIgpATQizB0jLAjQhdAphaAAQgaAAgZgDg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AiWMKQgngFgygOQhHgVhCgdQjphdgzhuIgNgqQgehYgthfQgehIg+h9QgthagFhLIAAgBQgIhQAvhPQAagUBOgnQBChACFhPQCFhMBWhNQAMAFAFgNQASgJAFgVIAHgJQAzhEBMgiQBJghBhgBQA6ABBBAJQE4AoEfCyQBNAzBFBAQANAQgGAjQADAvgNA7QgLA6gOA3QgSAogFAWIgIBHQgEA6gNBjIgDAVQgMBJgjA5QgjBAgzAqQgjBLh6AgIgoAZQixCYjLA2QhoA9hmAAQgTAAgTgCg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AiPNoQgqgFg1gPQhMgXhGggQjwhjg9h8IgPgsQgiheguhlQghhQg8iDQgshigEhRIAAgBQgHhVAthVQAbgeBMgvQBBhOCFhcQCEhZBZhbQANAFAEgPQARgKADgaIAHgKQAuhSBNgnQBLgpBrgBQA8ABBFAKQFDArE8DAQBTA2BLBCQAPAPgKAoQAAAxgRA+QgQA+gTA5QgVArgGAVQgEASgGA5QgFA/gNBqIgDAWQgNBOgiA9QgiBHgxAxQgkBZh1AqQgTAQgUAPQiuC8jKBLQhxBQhxAAIgcgBg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AiJPFQgsgEg6gRQhPgXhLgkQj2hqhHiKIgRguQgnhjgvhrQgjhYg6iLQgqhngEhYIAAgBQgGhbAshbQAagnBKg3QBChbCDhqQCDhnBdhpQAOAGADgSQAPgLACgeIAGgMQApheBOgvQBNgvBzgBQBAAABKALQFNAuFbDPQBYA4BSBEQAPAQgNAqQgDA0gXBCQgUBBgWA7QgaAvgHATQgFARgHA/QgFBBgOByIgDAYQgOBTggBCQgiBOgvA3QgkBnhwA0QgSAUgUASQisDgjIBeQh6Blh5AAIgWgBg");
	var mask_5_graphics_154 = new cjs.Graphics().p("AiDQjQgugDg+gTQhTgZhQgnQj9hxhQiXIgUgwQgrhogwhyIhdjyQgphsgEhfIAAgCQgFhhArhhQAagvBIhAQBChoCCh4QCCh0Bgh3QAPAHACgVQAPgMABgjIAFgNQAjhrBQg1QBPg2B7gCQBFgBBNANQFXAxF5DdQBeA6BYBHQAQAPgQAvQgGA1gcBHQgZBEgaA9QgeAygIASQgGARgIBEQgGBCgOB7IgEAaQgNBXgfBIQghBUguA+QgkB0hrA/QgSAXgTAWQipEEjIByQiAB4iCAAIgRAAg");
	var mask_5_graphics_155 = new cjs.Graphics().p("Ah9SAQgvgChDgUQhYgbhUgqQkDh3hbilIgVgyQgwhugxh4Qgohpg1iYQgohygDhoIAAgCQgEhkAphoQAag4BGhIQBCh2CBiFQCAiBBliGQAPAIACgXQANgOAAgnIAEgPQAfh4BRg8QBQg8CEgDQBIAABSANQFhA0GXDsQBjA8BgBJQAQAQgTAyQgJA4ghBKQgeBIgeA/QgiA0gKASQgGAPgJBKQgGBEgPCGIgEAaQgNBbgfBNQggBbgsBEQgkCDhmBJQgRAagTAZQinEojHCGQiFCNiLAAIgNgBg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Ah3TeQgxgChHgWQhcgchZguQkKh9hkiyIgYg1Qgzhzgzh+Qgqhxg0ifQgmh4gChwIAAgBQgEhqAphuQAZhBBEhQQBCiDCAiTQB/iPBpiUQAQAJABgaQAMgPgCgrIADgRQAaiFBShCQBShDCMgDQBMgBBXAPQFrA2G1D6QBpA/BmBMQARAPgWA2QgMA6gmBOQgjBLgiBBIgxBIQgHAPgKBPQgGBGgQCPIgEAcQgOBfgdBSQgfBigqBKQglCRhhBUQgRAdgSAcQikFMjGCZQiLCiiUAAIgJAAg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AhxU8QgzgChLgXQhggdhegyQkQiEhvi/IgZg3Qg4h5g0iEQgsh5gyimQglh9gBh3IAAgCQgDhwAnhzQAZhKBChZQBDiQB/ihQB9icBsijQARAKAAgcQALgQgDgwIADgSQAUiSBUhIQBThLCVgDQBPgBBcAPQF1A6HTEIQBuBBBtBOQASAPgZA6QgQA9gqBRQgnBPgnBDIg2BKQgIAOgKBVIgYDfIgEAdQgOBlgdBWQgeBpgoBRQglCehcBfQgQAhgSAeQiiFxjFCtQiQC2idAAIgFAAg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AhrWZQg1gBhPgYQhkgfhjg1QkXiLh4jMIgbg6Qg9h9g1iLQguiCgwisQgkiDgBh+IAAgCQgCh1Amh7QAahSBAhhQBCieB+iuQB8ipBwiyQARAMAAggQAJgRgEg0IACgUQAPieBWhQQBVhQCdgEQBSgCBjARQF9A8HyEXQBzBDB0BRQASAPgcA9QgTA/gvBWQgsBSgqBEQguA+gOAPQgJANgLBaIgaDqIgDAfQgPBrgbBaQgdBvgnBXQgkCthYBpIghBGQifGUjFDAQiVDLikAAIgDAAg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AjvXcQhogghog4QkeiSiBjaIgeg7QhAiDg3iSQgwiJguizQgjiJAAiFIAAgDQgCh7AliAQAahbA+hqQBCiqB9i9QB7i2B0jAQASANgBgiQAIgTgFg4IABgVQAKisBWhWQBXhXClgFQBWgCBoASQGHA/IQElQB5BGB6BTQATAPgfBBQgWBBg0BaQgxBVguBHQgyBBgPAOQgKAMgMBgIgbD0IgEAgQgOBwgaBfQgdB1glBfQgkC6hTBzQgQAngQAmQidG4jEDUQiZDfitAAQg3AAhTgag");
	var mask_5_graphics_160 = new cjs.Graphics().p("AjvY4Qhsghhsg8QkliYiMjnIgfg+QhFiIg4iYQgyiSgti6QghiNABiOIAAgCQgBiCAkiFQAZhkA8hyQBCi4B8jKQB6jDB3jPQATAOgCglQAHgUgGg8IAAgXQAFi5BYhcQBYheCugFQBZgDBtATQGRBCIuE0QB+BICBBVQAUAPgiBFQgZBDg5BeQg2BZgyBIQg2BEgQANQgLALgNBmIgcD+IgEAiQgPB1gZBkQgbB8gjBlQglDIhOB+QgPAqgQApQiaHcjDDoQidDxi0ADIgCAAQg4AAhWgcg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AjwaVQhwgjhxg/QkrieiWj1IghhBQhJiNg5ieQg1iagqjBQggiTABiVIAAgCQAAiIAiiLQAahtA6h6QBCjFB7jYQB4jRB8jdQATAPgCgnQAFgWgIhAIAAgZQAAjFBZhjQBahlC2gGQBdgCBxATQGcBGJMFCQCDBJCIBYQAUAPgkBJQgdBGg+BhQg6Bcg2BLQg7BHgRAMQgLAKgOBrIgdEJIgEAjQgPB6gZBpQgaCDgiBrQglDWhJCJQgOAtgQAsQiXIAjCD8QihEEi6AEIgEAAQg6AAhZgcg");
	var mask_5_graphics_162 = new cjs.Graphics().p("AjvbxQh1gkh1hCQkyiligkDIgjhCQhNiTg7ikQg3ijgojHQgfiZACicIAAgDQABiNAhiRQAZh2A4iCQBDjTB6jmID2nJQAUAQgDgqQAEgXgJhEIgBgaQgGjTBbhpQBchsC+gGQBggDB3AVQGlBIJqFQQCJBMCPBbQAVAOgoBNQggBIhCBlQg/Bgg7BMQg+BKgSALQgMAKgPBwQgKBRgVDDIgEAkQgPB/gYBwQgZCIggBxQglDkhECTQgOAxgPAvQiVIkjCEQQijEXjCAFIgHAAQg7ABhageg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AjwdOQh4gmh6hFQk5isipkQQgTgigTgjQhRiYg8iqQg5irgmjPQgdieACijIAAgDQABiTAhiXQAYh/A2iLQBDjfB5j0QB2jrCDj6QAUARgEgsQADgZgKhIIgCgcQgLjfBdhxQBdhyDHgHQBjgDB8AWQGvBLKJFfQCOBOCWBdQAVAPgrBPQgjBLhIBpQhDBjg+BPQhDBNgTAKQgNAIgQB2QgKBTgWDLIgEAmQgQCEgWB1QgZCOgeB5QglDxg/CeIgcBmQiTJIjAEjQinErjJAHIgJAAQg9AAhdgeg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AjweqQh8gnh/hJQk/iyizkeQgVgigTglQhWidg9ixQg7iygljWQgbijADirIAAgDQACiZAfidQAYiIA0iTQBDjtB4kBQB1j5CGkHQAWARgFgvQACgZgMhOIgCgdQgQjsBdh3QBfh5DPgHQBngECBAXQG5BOKnFtQCUBRCcBfQAWAPguBTQgmBNhNBtQhIBnhCBQQhHBRgUAIQgOAIgRB7QgLBVgWDUIgEAnQgQCJgVB6QgZCVgbB/QgmD/g6CoQgNA4gPA1QiQJsi/E3QiqE9jPAJIgKABQg/AAhhggg");
	var mask_5_graphics_165 = new cjs.Graphics().p("EgDwAgHQiAgpiEhMQlGi5i9krQgVgkgVglQhZijg/i3Qg9i7gjjcQgaipADiyIAAgEQADidAeikQAZiRAyibQBDj7B2kPQB0kFCKkWQAWASgFgxQAAgbgMhSIgEgeQgVj6Bfh9QBhiADXgIQBqgECGAZQHDBQLFF8QCZBTCjBiQAXAOgxBXQgpBPhSBxQhNBqhGBTQhLBTgVAIQgPAHgSCBQgLBWgXDdIgFAoQgQCOgUB/QgXCcgaCFQgmEOg1CyQgNA7gOA4QiNKQi/FLQiuFQjVALIgLAAQhAAAhlggg");
	var mask_5_graphics_166 = new cjs.Graphics().p("EgDwAhjQiFgqiIhPQlNjAjGk4QgXglgVgnQheiog/i9QhBjDggjjQgZivAEi5IAAgEQADijAdiqQAZiaAwijQBDkIB1kdQBzkTCOkkQAWATgGg0QAAgcgOhWIgEggQgbkGBhiEQBiiHDggIQBtgECLAZQHNBULjGJQCfBWCqBkQAXAOg0BbQgsBShXB0QhSBuhKBUQhPBXgWAHQgQAFgSCHQgMBZgYDlIgFApQgQCUgTCDQgXCjgYCLQgmEcgwC9IgaB5QiLK0i9FfQiyFjjcAMIgNABQhCAAhngig");
	var mask_5_graphics_167 = new cjs.Graphics().p("EgDwAjAQiJgriNhTQlTjGjQlGQgYgmgXgoQhiithAjEQhDjLgejqQgYi0AFjBIAAgEQAEipAcivQAYijAuisQBDkVB0krQBxkgCSkzQAYAUgHg2QgCgegPhZIgFgiQggkTBiiLQBkiNDogJQBxgFCQAbQHXBWMBGZQClBXCwBnQAYAOg3BeQgvBUhcB4QhXByhOBWQhSBagZAGQgQAEgTCMQgNBbgYDuIgFArQgQCYgSCJQgWCpgXCSQgmEpgrDIIgZB/QiILZi9FyQi1F2jjAOIgQAAQhDAAhpgig");
	var mask_5_graphics_168 = new cjs.Graphics().p("EgDwAkdQiNgtiRhWQlbjNjalTQgZgogXgpQhniyhBjKQhFjUgdjwQgWi6AGjIIAAgEQAEiuAbi2QAYisAsi0QBDkjB0k4QBvktCWlCQAYAVgHg4QgEgfgQhfIgGgjQgkkgBjiRQBliUDxgKQB0gECVAbQHhBaMgGmQCpBaC3BpQAZAOg6BiQgzBXhgB7QhbB1hSBZQhXBcgaAFQgRAEgUCSQgNBcgZD3IgFAsQgRCdgRCOQgVCygUCWQgnE4gmDSIgYCFQiGL9i8GGQi4GJjqAPIgRABQhFAAhsgjg");
	var mask_5_graphics_169 = new cjs.Graphics().p("EgDwAl5QiRguiWhaQmKjsjumaQkzoTAVrbQAbt4IExqQAYAWgIg7QgFgmgXiCQgqktBliXQCYjmHZBYQJUBwRCJpQAZAOg9BmQg2BZhlB/QhgB5hWBaQhbBggbAEQgSADgVCXQgOBngeEkQhRMOg/GeQkKbQn4AkIgSAAQhHAAhvgkg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_5_graphics_139,x:85.8,y:-1376.6}).wait(1).to({graphics:mask_5_graphics_140,x:76.3,y:-1377.9}).wait(1).to({graphics:mask_5_graphics_141,x:67.3,y:-1379.1}).wait(1).to({graphics:mask_5_graphics_142,x:58.5,y:-1380.1}).wait(1).to({graphics:mask_5_graphics_143,x:49.6,y:-1381.3}).wait(1).to({graphics:mask_5_graphics_144,x:40.9,y:-1381.9}).wait(1).to({graphics:mask_5_graphics_145,x:32.2,y:-1380.8}).wait(1).to({graphics:mask_5_graphics_146,x:23.5,y:-1379.9}).wait(1).to({graphics:mask_5_graphics_147,x:20.9,y:-1378}).wait(1).to({graphics:mask_5_graphics_148,x:18.7,y:-1373.1}).wait(1).to({graphics:mask_5_graphics_149,x:16.7,y:-1366.7}).wait(1).to({graphics:mask_5_graphics_150,x:15,y:-1360.2}).wait(1).to({graphics:mask_5_graphics_151,x:13.4,y:-1353.7}).wait(1).to({graphics:mask_5_graphics_152,x:12,y:-1347.1}).wait(1).to({graphics:mask_5_graphics_153,x:10.6,y:-1340.5}).wait(1).to({graphics:mask_5_graphics_154,x:9.2,y:-1334}).wait(1).to({graphics:mask_5_graphics_155,x:7.8,y:-1327.4}).wait(1).to({graphics:mask_5_graphics_156,x:6.4,y:-1320.8}).wait(1).to({graphics:mask_5_graphics_157,x:5,y:-1314.2}).wait(1).to({graphics:mask_5_graphics_158,x:3.6,y:-1307.6}).wait(1).to({graphics:mask_5_graphics_159,x:2.2,y:-1301}).wait(1).to({graphics:mask_5_graphics_160,x:0.8,y:-1294.4}).wait(1).to({graphics:mask_5_graphics_161,x:-0.6,y:-1287.8}).wait(1).to({graphics:mask_5_graphics_162,x:-2,y:-1281.2}).wait(1).to({graphics:mask_5_graphics_163,x:-3.4,y:-1274.6}).wait(1).to({graphics:mask_5_graphics_164,x:-4.8,y:-1268}).wait(1).to({graphics:mask_5_graphics_165,x:-6.2,y:-1261.4}).wait(1).to({graphics:mask_5_graphics_166,x:-7.6,y:-1254.8}).wait(1).to({graphics:mask_5_graphics_167,x:-9,y:-1248.3}).wait(1).to({graphics:mask_5_graphics_168,x:-10.4,y:-1241.7}).wait(1).to({graphics:mask_5_graphics_169,x:-11.8,y:-1235.1}).wait(258));

	// x8
	this.instance_12 = new lib.yld_7();
	this.instance_12.setTransform(-72.5,-1382.6);
	this.instance_12._off = true;

	this.instance_12.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(139).to({_off:false},0).wait(288));

	// z7 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_114 = new cjs.Graphics().p("AlDAGQgUgcAggiQBHhMBcgaQFehjBzEIQA1B7iGAfQhrAZhbAAQjxAAh4i0g");
	var mask_6_graphics_115 = new cjs.Graphics().p("ADcDJIgegBQh4ANhggyQjChdhjiXQgLgdAlgdQBThBBcAEQBKgGA7AOQCGAMBRBjIA6BSIAVAsQAIASADAPIABAHQAKBGglAbIgIAHQgSAOgcAAQgJAAgLgCg");
	var mask_6_graphics_116 = new cjs.Graphics().p("ADIDxQgPgDgOgFQhzAAhehaQi7ikheiUQgCgdAqgYQBfg2BdAjQBIAJA5AhQB/AiBKCAQAbA9AaAlQAJAfAKAVQAKAVgBARIAAAGQgHBHgrAQIgHAEQgJAHgNAAQgRAAgYgOg");
	var mask_6_graphics_117 = new cjs.Graphics().p("ACzEfQgOgHgOgJQhugNhaiBQi2juhZiPIABAAQAHgcAvgTQBrgrBdBCQBFAXA3A0QB6A4BBCcQAYBQAYAkQAIAmAKAVQAMAZgFARIgCAHQgYBIgwAEIgGABQgGAFgHAAQgSAAgdgeg");
	var mask_6_graphics_118 = new cjs.Graphics().p("ACeFQQgNgKgNgNQhqgahXipQiwk4hTiJIAAAAQAQgcA1gPQB3gfBdBgQBEAmA0BIQB0BNA5C5QAUBiAXAiQAHAuAKAVQANAdgJASIgEAHQgoBJg1gHQgHgBABgBQgEADgFAAQgRAAgfgvg");
	var mask_6_graphics_119 = new cjs.Graphics().p("ADDHCQgHgCACgDQgRAOglhMQgMgOgNgRQhlgmhUjSQiqmBhNiEQAZgbA6gKQCDgUBeB+QBDA1AwBbQBtBjAyDXQAQBzAWAhQAFA1AKAVQAPAggNAUIgFAHQguA7gvAAQgLAAgMgEg");
	var mask_6_graphics_120 = new cjs.Graphics().p("ACqIHQgIgEAEgEQgPAMgkhdQgMgRgMgVQheg0hUj5QijnLhIh+QAigbA/gFQCPgKBcCeQBEBEAtBtQBnB5AqD0QANCFAUAgQAEA7AKAXQARAjgRAVQgDAEgEADQg1A1gwAAQgTAAgSgIg");
	var mask_6_graphics_121 = new cjs.Graphics().p("ACQJMQgIgFAFgGQgOALgihvQgLgUgLgZQhahAhRkiQidoUhDh5IAAAAQAsgaBEAAQCbABBcC8QBDBTAqCAQBhCPAiESQAICWAUAfQACBCALAXQASAngVAVIgIAIQg7AwgyAAQgbAAgZgOg");
	var mask_6_graphics_122 = new cjs.Graphics().p("AB3KRQgJgGAHgIQgMAJghh/QgLgYgLgdQhUhNhOlJQiYpeg9h0IABAAQA0gZBJAEQCoAMBcDbQBCBiAnCTQBaClAbEvQAECoASAdQABBJALAXQATArgYAXIgKAHQg/Atg1AAQgkAAgfgVg");
	var mask_6_graphics_123 = new cjs.Graphics().p("ABeLWQgKgHAJgKQgLAIgfiQIgVg9QhQhahKlxQiSqng4hvIABAAQA+gYBNAJQC0AXBdD6QBABwAkCmQBVC7ASFNQAAC5ASAcQgBBQALAYQAVAugdAXQgEAFgHADQhEArg3AAQgtAAglgeg");
	var mask_6_graphics_124 = new cjs.Graphics().p("ABFMcQgKgJAJgLQgJAHgdijIgUhDQhLhnhImZQiMrxgyhpIABAAQBHgYBTAOQC9AiBfEYQBAB/AhC5QBODPAKFsQgDDLAQAbQgCBXALAYQAWAyggAYQgFAFgHADQhJAog5AAQg4AAgqglg");
	var mask_6_graphics_125 = new cjs.Graphics().p("AAsNiQgMgLAMgMQgIAFgcizQgIgigIgqQhJhzhFnBQiGs7gshjIAAgBQBRgXBYATQDJAtBgE3QA+COAeDMQBHDlADGKQgHDcAPAZQgDBeALAYQAXA2gkAZIgOAJQhLAlg8AAQhDAAgvgtg");
	var mask_6_graphics_126 = new cjs.Graphics().p("AATOnQgMgMAMgOQgGAEgYjEQgJgmgIgtQhEiAhCnqQiAuEgnheIAAAAQBagWBdAXQDWA4BfFWQA9CcAbDfQBCD7gFGnQgMDuAOAYQgEBlALAYQAZA6goAaQgHAFgJAEQhPAkg+AAQhOAAg0g3g");
	var mask_6_graphics_127 = new cjs.Graphics().p("AgFPtQgNgNAPgQQgFADgZjWIgQhaQg/iNg/oRQh6vOghhZIAAAAQBjgWBiAcQDhBDBgF0QA9CsAXDyQA7ERgNHEQgPEAANAWQgGBsALAZQAbA9gsAbQgHAFgKAEQhSAjhBAAQhZAAg4hAg");
	var mask_6_graphics_128 = new cjs.Graphics().p("AgfQzQgNgPAQgRQgDABgYjnIgPhhQg6iag8o3Qh0wZgchUIABAAQBsgVBnAgQDtBPBgGSQA8C7AUEFQA1EmgVHiQgTERAMAVQgIB0AMAZQAcBBgwAcQgIAFgKADQhVAihEAAQhkAAg+hJg");
	var mask_6_graphics_129 = new cjs.Graphics().p("Ag9R5QgOgQASgTQgCAAgWj4IgOhqQg1img5pfQhuxjgXhOIABgBQB1gUBsAmQD6BZBgGxQA6DJAREYQAvE9gcIAQgXEiAKAUQgJB6AMAZQAeBFg0AdQgJAFgLAEQhXAghGAAQhxAAhDhSg");
	var mask_6_graphics_130 = new cjs.Graphics().p("AhcS/QgOgSASgUIgUkLIgNhxQgxizg2qHQhoysgRhJIABgBQB+gTByAqQEFBkBhHQQA5DYAOErQAoFSgkIeQgbE0AKASQgLCBAMAaQAfBIg3AeQgKAFgMAEQhaAfhIAAQh7AAhKhbg");
	var mask_6_graphics_131 = new cjs.Graphics().p("Ah8UEQgPgSAUgWQABgDgTkbIgLh4QgtjAgzqwQhiz1gLhEIAAAAQCIgTB2AvQESBvBhHvQA4DmALE+QAiFogsI7QgfFGAJARQgMCIALAaQAhBMg7AfQgKAFgNAEQhcAehLAAQiHAAhPhlg");
	var mask_6_graphics_132 = new cjs.Graphics().p("AidVKQgQgUAWgXQADgFgRksIgLh/QgnjNgwrXQhd1AgGg+IABAAQCRgTB7A0QEeB6BhIOQA3D1AIFRQAcF+g0JYQgjFYAHAPQgNCPAMAbQAiBQg/AfQgLAGgOAEQheAdhMAAQiUAAhVhvg");
	var mask_6_graphics_133 = new cjs.Graphics().p("Ai+WQQgQgWAXgZQAEgFgQk+IgJiHQgjjZgtr/QhW2JgBg5IABgBQCagRCBA4QEpCGBiIsQA1EEAFFkQAWGUg8J2QgnFoAHAOQgPCXAMAaQAkBUhDAgQgMAGgOAEQhhAdhOAAQiiAAhZh5g");
	var mask_6_graphics_134 = new cjs.Graphics().p("AjgXWQgRgXAYgbQAGgHgOlOIgIiPQgejmgqsnQhR3TAFgzIABgBQCjgRCGA+QE1CQBiJLQA1ETACF2QAPGqhEKUQgqF6AFANQgQCdAMAbQAlBXhHAiQgMAFgPAFQhiAbhRAAQiuAAhfiCg");
	var mask_6_graphics_135 = new cjs.Graphics().p("AkCYcQgRgZAagcQAHgIgMlgIgIiWQgZjzgntPQhK4cAKguIABgBQCsgQCLBCQFBCbBjJpQAzEigCGKQAKHAhMKxQguGMAEALQgSCkANAcQAnBahLAjQgNAGgQAEQhlAbhTAAQi7AAhkiMg");
	var mask_6_graphics_136 = new cjs.Graphics().p("AkkZiQgSgaAbgeQAJgJgLlyIgGidQgUkAglt3QhE5lAQgpIABgBQC1gQCQBHQFOCmBiKIQAzExgFGdQADHVhTLPQgzGdADAKQgTCrANAcQAoBfhPAjQgNAGgRAEQhnAbhVAAQjIAAhpiWg");
	var mask_6_graphics_137 = new cjs.Graphics().p("AlGanQgTgbAdgfQAKgLgJmCIgGilQgPkNghufQg/6vAWgkIABAAQC+gPCVBMQFaCxBiKmQAyFAgIGvQgDHshbLsQg3GvACAJQgUCyAMAcQAqBihTAkQgOAGgSAFQhoAahVAAQjXAAhuihg");
	var mask_6_graphics_138 = new cjs.Graphics().p("AlobtQgUgcAeghQAMgMgImUIgEisQgKkagfvHQg474AbgfIABAAQDHgPCaBRQFmC8BjLFQAwFOgLHDQgJIChjMJQg6HBAAAHQgVC5AMAdQAsBlhXAmQgPAGgSAEQhqAahXAAQjlAAhzirg");
	var mask_6_graphics_139 = new cjs.Graphics().p("AmKczQgVgeAggiQAQgRgMpWQgGkmgbvvQgz9aAigCQOdg9g3diQgQIYhrMnIg+HYQgXDAAMAdQA1B7iFAfQhsAahZAAQjyAAh4i1g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_6_graphics_114,x:104.9,y:-1020}).wait(1).to({graphics:mask_6_graphics_115,x:104.4,y:-1026.6}).wait(1).to({graphics:mask_6_graphics_116,x:104.3,y:-1033.2}).wait(1).to({graphics:mask_6_graphics_117,x:104.2,y:-1040.4}).wait(1).to({graphics:mask_6_graphics_118,x:104.1,y:-1047.9}).wait(1).to({graphics:mask_6_graphics_119,x:104.1,y:-1055.2}).wait(1).to({graphics:mask_6_graphics_120,x:104,y:-1062.5}).wait(1).to({graphics:mask_6_graphics_121,x:104,y:-1069.9}).wait(1).to({graphics:mask_6_graphics_122,x:104,y:-1077.3}).wait(1).to({graphics:mask_6_graphics_123,x:103.9,y:-1084.7}).wait(1).to({graphics:mask_6_graphics_124,x:103.9,y:-1092.1}).wait(1).to({graphics:mask_6_graphics_125,x:103.9,y:-1099.5}).wait(1).to({graphics:mask_6_graphics_126,x:103.8,y:-1106.9}).wait(1).to({graphics:mask_6_graphics_127,x:103.8,y:-1114.4}).wait(1).to({graphics:mask_6_graphics_128,x:103.8,y:-1121.8}).wait(1).to({graphics:mask_6_graphics_129,x:104.3,y:-1129.3}).wait(1).to({graphics:mask_6_graphics_130,x:104.8,y:-1136.7}).wait(1).to({graphics:mask_6_graphics_131,x:105.5,y:-1144.1}).wait(1).to({graphics:mask_6_graphics_132,x:106.2,y:-1151.6}).wait(1).to({graphics:mask_6_graphics_133,x:107,y:-1159}).wait(1).to({graphics:mask_6_graphics_134,x:107.8,y:-1166.5}).wait(1).to({graphics:mask_6_graphics_135,x:108.6,y:-1173.9}).wait(1).to({graphics:mask_6_graphics_136,x:109.5,y:-1181.4}).wait(1).to({graphics:mask_6_graphics_137,x:110.4,y:-1188.8}).wait(1).to({graphics:mask_6_graphics_138,x:111.2,y:-1196.3}).wait(1).to({graphics:mask_6_graphics_139,x:112.1,y:-1203.7}).wait(288));

	// x7
	this.instance_13 = new lib.yld_6();
	this.instance_13.setTransform(69,-1377.6);
	this.instance_13._off = true;

	this.instance_13.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114).to({_off:false},0).wait(313));

	// z6 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_89 = new cjs.Graphics().p("AldDRQihgNh+hgQiKhnB/iUQAxg5BFgJQKQguIkEAQAdALAEAuQALCEh3ANQkTAekUAAQjGAAjIgQg");
	var mask_7_graphics_90 = new cjs.Graphics().p("Ag8EFQiGgOiFgmIgfgHQiGgmhshSIgZgVQg6g7gKgyQgVhIBKhWIABgBQAcghAjgRQAegNAhgEQFZgWE4BBQAUAEASAHQBBAOA9AiQB7AyB0BEQA+AkA9AkQAaARADAvQAECQhwAPIgLABIiDAOIh8AMQiEAMh/ABQhAAAg+gUg");
	var mask_7_graphics_91 = new cjs.Graphics().p("AAcFRQg8AAg8gmQh8gah7hCIgdgMQh8hChjhUIgXgYQg3hFgLgxQgfhKBOhcIABgBQAegjAmgQQAggMAjgEQFugVFHBOQAVAFARAKQA8AQA0AzQBtBBBmBUIBsBYQAXAVABAwQgCCdhqAQIgKABQhEAHhIAJIiCARQiGAQh8AAIgPAAg");
	var mask_7_graphics_92 = new cjs.Graphics().p("AgHGJQg8gBg4g4QhygmhxheIgbgQQhyhdhahXIgWgZQgyhTgNguQgphNBThhIABgBQAfglApgPQAigMAlgDQGDgWFXBdQAVAGAQANQA3ASArBDQBgBRBXBlQAvA0AvAzQASAZAAAwQgICqhkARIgKACQhHAHhMAMQg9AIhMAMQiLAUh9AAIgVAAg");
	var mask_7_graphics_93 = new cjs.Graphics().p("AgsHBQg6gBg1hKQhngzhoh5IgYgUQhnh5hThYIgTgeQgvhegOgsQgzhQBYhmIAAAAQAignArgPQAlgLAmgDQGYgVFmBrQAWAGAPARQAxATAjBUQBSBhBJB1QAnA8AoA6QAPAdgBAxQgPC3hdASIgKACQhKAIhRANQg+AJhTAPQiPAYh7AAIggAAg");
	var mask_7_graphics_94 = new cjs.Graphics().p("AhSH5Qg3gBgxhcQheg/hdiWIgWgYQhdiVhKhaIgSghQgshqgPgpQg8hSBchrIAAgBQAjgpAvgOQAmgKApgDQGsgVF2B5QAXAHANAUQAtAVAaBlQBEBwA7CFQAfBGAgBAQAMAhgCAyQgWDEhXATIgJACQhNAIhWAQQg/AKhYASQiWAch/AAIgkgBg");
	var mask_7_graphics_95 = new cjs.Graphics().p("Ah4IyQg0gCguhvQhUhLhSixIgUgdQhTiuhChfIgQgkQgoh1gQgmQhGhWBghwIABAAQAlgrAxgOQApgJAqgDQG/gUGHCHQAYAIAMAXQAoAWASB2QA2B/AsCUQAYBRAYBGQAJAlgEAyQgcDRhRAVIgJACQhQAJhaARQhAAMheAUQieAgiDAAIgnAAg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AidJqQgzgBgqiCQhJhXhJjNIgRghQhJjKg5hhIgPgnQgkiBgRgkQhQhYBkh1IABgBQAmgtA1gMQAqgJAtgDQHTgUGXCVQAZAJALAaQAiAYAJCGQApCQAeCkQAQBaARBMQAFApgFAzQgjDehKAWIgIADQhUAJhfATQhBAMhkAYQikAkiFAAIgsgBg");
	var mask_7_graphics_97 = new cjs.Graphics().p("AjEKjQgwgCgmiUQhAhjg+jpIgPglQg/jlgxhlIgMgqQghiMgSghQhahbBph6IAAgBQApgvA3gMQAtgIAugCQHogUGnCjQAZAKAKAdQAdAaABCXQAaCfAQC1QAIBiAKBTQACAtgHAzQgpDrhEAYIgIACQhXAKhjAVQhCANhqAbQiqAoiLAAIgvgBg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AjrLbQgugCgiimQg2hwg0kEIgMgqQg1kBgphnIgLgsQgdiZgTgeQhkhdBtiAIABAAQAqgxA6gMQAvgHAwgCQH8gUG3CxQAaALAJAhQAYAbgICnQANCvABDFQABBsACBZQgBAxgIA0QgwD4g+AZIgHACQhaAKhoAYQhDAOhwAeQiyAriPAAIgxgBg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AkjMTQgrgCgfi5Qgsh7gqkgIgKgvQgqkcghhqIgJgvQgZikgVgbQhthhByiFQAsgzA8gLQAygGAxgCQISgTHGC/QAbALAHAkQATAdgQC4QgBC+gNDWQgIB0gEBgQgFA1gJA1Qg2EFg4AaQgEACgDABQhdAKhtAZQhEAQh2AgQi4AwiSAAQgcAAgagCg");
	var mask_7_graphics_100 = new cjs.Graphics().p("AlkNMQgogDgcjLQgiiIggk8IgHgyQghk4gXhsIgIgzQgViwgXgYQh3hjB3iKQAtg1BAgKQAzgGA0gCQImgTHWDNQAbAMAHAoQANAegYDJQgPDOgcDmIgaDjQgJA5gLA2Qg8ERgxAcQgEACgDABQhgAKhxAcQhFAQh8AkQjBAziXAAQgcAAgbgBg");
	var mask_7_graphics_101 = new cjs.Graphics().p("AmmOEQgmgDgYjdQgYiUgWlYIgFg3QgWlTgQhvIgFg2QgSi7gYgWQiAhmB6iPQAwg3BCgJQA2gFA1gCQI7gTHlDcQAdANAFAqQAIAgghDaQgdDdgpD3IgqDyQgMA9gMA2QhDEfgrAdQgEADgDAAQhjALh2AeQhGARh/AmQjKA4iaAAQgeAAgdgCg");
	var mask_7_graphics_102 = new cjs.Graphics().p("AnpO9QgkgDgUjwQgOiggMl0QgOmhgHh7QgQj9gbgVQiLhpB/iUQAxg5BFgJQKQguIkEAQAdANAEAuQADAigpDqQgrDtg4EHQiVLBg1AGQhmALh6AgQhHASiGApQjSA8ieAAQggAAgdgCg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AmdPcQgUAAgPgxQgEgQgJgUQgKgbgIglQgIghgIgpQgMg7gMhaQgUiYgQjyQgWmbgOibQgQj5gcgnQhchTAhhoQAHgXANgYIAXgmIgBAAQAbgmAngUQAXgMAbgFIApgEQG7gZGGBzQAWAGAVAKQBBAWBAApQBTAtBRAwQAaARAEAuQABAKgCAUQgHBLgcCsQgPBugPBbQgFCIgOCQQgJD+gcClQgxD8g5AYIgBAAQhoASh+AlIjWBCQg0ARgzANQiKAihyAHQggACgdAAIgcgBg");
	var mask_7_graphics_104 = new cjs.Graphics().p("AlRP7QgXAAgQgsQgFgOgNgTQgOgXgMgiQgNgegMgoQgTg5gShbQggiagaj8QgemVgTi7QgSj2gbg5QhWhaAdhvQAGgXAKgaIATgoQAVgpAogXQAYgOAcgGQAVgDAVgCQHPgcGUCBQAXAHATANQA8AVA5A5ICUBwQAXAVADAuQABALgCAUQgGBXgaCoQgNB9gLBSQATB7AHCEQAnDpgNCgQgdDyhTAsIAAAAQhrAZiCAqIjdBKQg3ASg2AOQiOAnh1AKQguAFgnAAIgIAAg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AlpPzQgFgNgSgQQgSgUgPgfQgRgcgRgmQgbg3gYhcQgsicgikGQgmmPgZjbQgUjygbhLQhPhhAZh2QAFgZAIgbIAOgqIAAAAQARgrApgcQAZgPAbgHQAWgEAWgCQHjgeGiCNQAXAIASAQQA2AWAyBJQBDBFBBA9QAVAZADAuQABAMgCAUQgGBigXClIgTDWQAsBsAaB5QBXDTAECcQgLDnhsBBIAAAAQhtAgiGAvQhWAgiOAxQg5ATg4ARQiTArh6AOQg0AHgsAAIgCAAQgZAAgRgmg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AldQXQgFgMgWgNQgXgRgSgcQgWgagUgkQgig2gfhcQg4ifgrkQIhNqEQgVjugbhdQhIhoAVh8IAJg3IAKgsQAMguAqgfQAZgRAdgIQAWgFAXgCQH2ggGwCaQAYAIAQAUQAxAWArBZQA7BQA5BEQATAdACAuIgBAgQgGBvgVCiQgKCagCBCQBEBeAtBsQCJC+ATCZQAIDciFBVIgBAAQhuAniLA0QhbAliPAzQg7AVg7ASQiYAvh+ASQg2AJgtABIgFABQgbAAgSghg");
	var mask_7_graphics_107 = new cjs.Graphics().p("AlSQ6QgFgKgbgKQgbgOgWgZQgagXgYgjQgqg0glhdQhEihg0kaQg2mCglkcQgWjqgbhvQhBhwAQiCIAGg5IAGgvIgBAAQAJgxArgiQAZgTAdgJQAXgGAYgDQIJghG/CmQAYAKAPAWQArAXAlBoQAyBdAyBKQAPAhACAuIgBAhQgGB6gSCfQgJCpACA5QBcBSBCBfQC5CoAjCVQAcDSifBpIgBABIj/BnQhhAoiRA2Qg8AXg+AUQidAziBAWQg6AKguADIgHAAQgdAAgSgcg");
	var mask_7_graphics_108 = new cjs.Graphics().p("AlIReQgFgJgfgIQgggLgZgWQgfgUgcghQgxgzgshdQhPijg9klQg/l9gqk6QgXjngbiBQg6h3ALiJQADgcgBggIACgwIAAAAQAEg0AsglQAZgVAegKQAXgIAZgCQIdgjHNCzQAZAJANAbQAlAWAeB4QAqBpAqBRQAOAkABAuIgBAiQgHCGgPCcQgHC3AHAvQB0BHBVBSQDqCTAyCRQAvDHi4B+IgBAAQhyA1iTA+QhmAuiTA4Qg+AYhAAWQiiA3iGAaQg8AMguAEIgMABQgeAAgSgXg");
	var mask_7_graphics_109 = new cjs.Graphics().p("Ak8SBQgFgHgkgFQgkgIgdgTQgjgSghgfQg4gxgyheQhbimhGkuQhHl3gwlbQgZjjgaiTQg0h+AHiPQACgegDghQAAgUgCgeIgBgBQAAg1AtgqQAZgWAfgMQAYgIAagDQIwglHbDAQAaAKAMAeQAeAXAYCIQAiB0AiBYQALAoABAuIgBAjQgHCRgMCZQgGDEALApQCNA5BpBGQEaB9BCCNQBCC8jRCTIgBAAQh1A8iWBDQhrAyiVA7QhBAZhCAYQinA8iKAdQg+AOgwAFIgRACQgdAAgSgTg");
	var mask_7_graphics_110 = new cjs.Graphics().p("AkuSlQgFgGgpgCQgogFghgQQgngPgkgeQhAgwg4heQhoiohPk4QhPlxg1l7QgajggailQgtiFACiVQABgfgFgiIgHg1IgBgBQgEg4AugtQAZgYAfgNQAZgJAbgDQJEgnHpDNQAbALAKAhQAZAXARCXQAaCBAaBeQAIAsAAAuIgBAkQgGCdgKCVQgEDTAPAgQClAsB9A6QFLBnBRCJQBWCyjrCnIgBABQh3BCiaBJQhwA2iXA9QhCAbhFAZQivBBiLAgQhBAQgxAHQgMACgLAAQgcAAgSgOg");
	var mask_7_graphics_111 = new cjs.Graphics().p("AkgTIQgFgFgtAAQgtgBgkgNQgrgNgpgcQhHgug/hfQhziqhYlCQhXlrg7mbQgcjcgai3QgmiMgCicQAAgggIgkIgLg3IAAgBQgKg7AvgwQAbgaAfgOQAZgKAcgDQJYgpH3DZQAbAMAJAkQATAXALCoQARCMATBlQAFAwAAAuIgBAkQgGCpgHCSQgDDiATAYQC9AfCRAtQF8BSBhCEQBpCokEC7IgCABQh5BJieBOQh1A6iZBAQhEAdhHAbQi0BFiPAkQhEASgyAHQgRADgOAAQgaAAgRgJg");
	var mask_7_graphics_112 = new cjs.Graphics().p("AkSTrQgFgEgyAEQgxACgogLQgvgKgtgbQhOgshGhfQh/ithglMQhglkhBm8Ig2mhQggiUgGiiQgBghgKgmIgPg4IgBgBQgOg+Awg0QAbgbAggPQAagMAcgDQJrgqIGDlQAcANAHAnQANAYAEC3QAJCYALBrQADA0AAAuIgCAlIgKFEQgBDwAXAQQDWASCkAgQGtA8BwCBQB8CdkdDQIgCAAQh7BRiiBSQh7A/iaBDQhGAehJAdQi5BJiUAoQhGATgzAJQgYAFgTAAQgVAAgPgGg");
	var mask_7_graphics_113 = new cjs.Graphics().p("AmfUOQg0gIgxgZQhWgrhMhgQiLivhplWQholehGncQgfjUgZjbQgZibgKipQgCgigNgnIgUg7IAAgBQgThAAxg3QAbgeAhgQQAagMAegEQJ/gsITDzQAdANAFAqQAIAYgCDHQAACkAEByIgBBmIgCAmQgGDAgBCMQAAD/AcAHQDtAFC5ATQHdAnCAB9QCQCSk3DkIgCABQh9BXinBYQh/BEidBFQhHAfhMAfQi+BNiXAsQhJAVg0AKQg3ALgdgHQgGgCg2AGQgWACgVAAQgcAAgZgEg");
	var mask_7_graphics_114 = new cjs.Graphics().p("AmdU1QicgOiBiYQmQnUiP6gQgDgkgPgoIgZg+QgWhDAyg7QAxg5BFgJQKSguIiEAQAdANAEAuQACAYgJDXQgNEwgFCJQgSJjAwgCQOogfDHCnQCjCIlQD5QkRDJnWDEQjDBRibAwQieAwg7gFQgGAAg7AIQgmAGghAAQgRAAgQgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_7_graphics_89,x:-60.9,y:-1202.1}).wait(1).to({graphics:mask_7_graphics_90,x:-61.7,y:-1196.4}).wait(1).to({graphics:mask_7_graphics_91,x:-62.5,y:-1190.8}).wait(1).to({graphics:mask_7_graphics_92,x:-63.3,y:-1185.1}).wait(1).to({graphics:mask_7_graphics_93,x:-64.2,y:-1179.4}).wait(1).to({graphics:mask_7_graphics_94,x:-65,y:-1173.8}).wait(1).to({graphics:mask_7_graphics_95,x:-65.8,y:-1168.1}).wait(1).to({graphics:mask_7_graphics_96,x:-66.6,y:-1162.5}).wait(1).to({graphics:mask_7_graphics_97,x:-67.4,y:-1156.9}).wait(1).to({graphics:mask_7_graphics_98,x:-68,y:-1151.2}).wait(1).to({graphics:mask_7_graphics_99,x:-67,y:-1145.6}).wait(1).to({graphics:mask_7_graphics_100,x:-65.1,y:-1139.9}).wait(1).to({graphics:mask_7_graphics_101,x:-63.1,y:-1134.3}).wait(1).to({graphics:mask_7_graphics_102,x:-61,y:-1128.7}).wait(1).to({graphics:mask_7_graphics_103,x:-60.7,y:-1125.7}).wait(1).to({graphics:mask_7_graphics_104,x:-60.5,y:-1122.7}).wait(1).to({graphics:mask_7_graphics_105,x:-54.6,y:-1119.6}).wait(1).to({graphics:mask_7_graphics_106,x:-48.5,y:-1116.6}).wait(1).to({graphics:mask_7_graphics_107,x:-42.2,y:-1113.5}).wait(1).to({graphics:mask_7_graphics_108,x:-35.9,y:-1110.4}).wait(1).to({graphics:mask_7_graphics_109,x:-29.7,y:-1107.4}).wait(1).to({graphics:mask_7_graphics_110,x:-23.7,y:-1104.3}).wait(1).to({graphics:mask_7_graphics_111,x:-17.8,y:-1101.2}).wait(1).to({graphics:mask_7_graphics_112,x:-11.8,y:-1098.1}).wait(1).to({graphics:mask_7_graphics_113,x:-5.9,y:-1094.8}).wait(1).to({graphics:mask_7_graphics_114,x:0,y:-1091.1}).wait(313));

	// x6
	this.instance_14 = new lib.yld_5();
	this.instance_14.setTransform(-63,-1180.4);
	this.instance_14._off = true;

	this.instance_14.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(89).to({_off:false},0).wait(338));

	// z5 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_64 = new cjs.Graphics().p("Aj7AyQg+icCXgcQB0gWBsgdQFaAejkD/QgkAog2ATQhTAbg+AAQiPAAg1iIg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AhLDbQiYgIguiVQgVg+AJg1QAJg0AigYQARgSAegLQAigPAqgIQBEgPBAgQIAmgGQAmAEAhAIQBIAQArAdQAzAkABA1QACAmgbApQgYAng0A4QgdAfgnAXQgOAIgPAHQhiAwg9AAIgHAAg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AhUD8QiqgKgpinQgSg/AKhDQAKg9AbgaQALgYAbgQQAegWAygKQBLgPBIgSQATgDAXgBQAoAGAlAKQBOAUAwAiQA6AoAEA4QAHArgfArQgYAng+BAQggAhgqAdQgPAJgQAIQhxBFg5AAIgFAAg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AhdEdQi8gNgki5IAAAAQgPg/ALhRQALhHAUgbQAFgeAYgUQAbgeA5gLQBSgQBOgUQAWgCAZABQArAHAqANQBTAYA2AmQA/AtAJA5QALAxgjAwQgZAkhHBIQgjAkguAhQgPALgRAKQiABZg1AAIgDAAg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AhlE+QjPgPgejLIAAgBQgOg+ANhfQALhRAOgdQgBgkAVgYQAYglBAgNQBZgRBUgWQAagBAaACQAuAJAvAPQBYAcA8AsQBFAxANA7QAPA3gmAyQgaAjhRBQQglAmgyAmQgQANgRAMQiRBtguAAIgCAAg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AhuFgQjhgRgZjeIAAAAQgLg/AOhtQAMhaAHgfQgHgrARgcQAWgsBHgOQBggTBbgYQAcABAcAEQAxAJAzASQBdAhBDAwQBKA2ASA9QAUA8grA1QgbAhhaBaQgoAng1AsIgjAbQigCDgpAAIgBgBg");
	var mask_8_graphics_70 = new cjs.Graphics().p("Ah2GCQj0gUgUjvIAAgBQgIg/APh7QANhkAAggQgNgxAOggQATg0BOgPQBngUBhgaQAeACAhAFQAyALA4AVQBiAkBJA1QBQA7AVA/QAZBBguA4QgcAghkBiQgrApg4AxIgkAfQivCXgjAAIgBgBg");
	var mask_8_graphics_71 = new cjs.Graphics().p("Ah/GkQkGgWgPkCIAAgBQgFg/ARiJQANhtgHgiQgSg3AKglQAQg7BWgRQBtgUBogcQAgACAkAIQA1AMA8AXQBnApBPA5QBWA/AaBCQAdBGgzA6QgcAghuBqQgtAsg8A1IgmAiQi9CsgeAAIgBgBg");
	var mask_8_graphics_72 = new cjs.Graphics().p("AiGHGQkZgYgJkVQgDhAASiWQAOh3gOgkQg+ieCXgdQB0gWBugdQBXAIBrAsQBtAsBUA+QBcBEAeBEQAhBMg2A8QgpAsjaDOQjyDlgaAAIgBgBg");
	var mask_8_graphics_73 = new cjs.Graphics().p("AiMHfQiFgIhIhBQhXhPAAijIAAgBQAAhEAXiZQAHguADglQAEg1gFgZQgRhLAIgoQAHhDBRgWQAggJAlgIQBVgRBRgWIAXABQBIAKBZAiIARAHQBRAhBDAsQAbARAZATQAnAgAbAeQAkAtAJAoIADASQARA3g4BFQgkAriBCFQgqAsgwAxQiCCKg6AwQhDAygUAAIAAgBg");
	var mask_8_graphics_74 = new cjs.Graphics().p("AlnGtQhWhRAHitQAChLAcicIAOhVQAGg1gCgcQgIhTAFglQgDhJBLgcQAfgNAogHQBYgTBVgVIAXgBQBLAJBdAkIASAIQBTAjBFAtQAdATAYAUQApAiAZAiQAjAvAAAsIgBASQAOAsg/BVQgpA0h7CKQgqAwguAzQiICggxAnQhFAqgcABQiMgFhJhHg");
	var mask_8_graphics_75 = new cjs.Graphics().p("Al2HGQhVhWAMi2IAAgBQAFhOAhifIARhZQAJg1ABgfIACh7QgMhSBFggQAegQArgIQBcgTBXgXIAZgBQBNAIBhAmIASAIQBXAkBHAxQAdAUAZAWQAqAjAXAlQAhAzgIAvQgBAIgDAKQAKAhhHBkQgtA+h1CNQgqA1grA0QiNC3grAfQhFAjgkABQiUgDhJhKg");
	var mask_8_graphics_76 = new cjs.Graphics().p("AmIHeQhThZARi/IAAgBQAIhTAliiIAWhdQALg0AEgiQAKhhgDggQgVhYA+glQAdgUAugJQBggSBbgYIAZgDQBQAIBkAoIATAIQBbAmBIAzQAfAWAZAWQAqAnAWAmQAgA4gSAxQgCAJgFAJQAHAWhPB0QgyBIhtCQQgrA7gpA1QiTDNgjAWQhGAcgsABIgEAAQiYAAhJhOg");
	var mask_8_graphics_77 = new cjs.Graphics().p("AmaH2QhShcAXjJIAAgBQAKhYArilIAZhgQANg0AHglQAUhpgHgcQgehfA4grQAbgXAygJQBjgTBegYIAagFQBSAIBoAqIAUAIQBeAoBKA1QAgAYAZAXQArApAVApQAeA8gaAzQgEAJgHAJQADAMhWCEQg3BRhnCUIhRB2QiaDjgaANQhHAVg0ACIgOAAQiYAAhHhQg");
	var mask_8_graphics_78 = new cjs.Graphics().p("AmtIOQhQhfAdjUQAPh2BJjyQA6jDgNgiQg+ieCXgcQB0gWBugdQBVAHBsAsQBtAtBVA+QBbBEAeBDQAiBMg2A9Ij6GGQjsF1gWAFQhXARhGAAQiXAAhFhSg");
	var mask_8_graphics_79 = new cjs.Graphics().p("Am8IIQhmhZAOjGQgMhiBMixQAPgpAUgtQBBi3AIgnQgZhdAzgwQAfgeA6gMICCgeQA3gPAqgNIAFgEQA2gHBWAWQAZAHAaAIQAyAQAtATQA6AbA2AkIADACQBFAxAmAzQANARAKASQAUAogEAlQgCAjgaAeIgSAcIivEQIhEBrQhBBmgqA+QiVDFgiADQhXAPhGAAQiiAAhQhOg");
	var mask_8_graphics_80 = new cjs.Graphics().p("AnFIGQh7hTgCi5QgjhiBlizQATgnAZgtQBIirAdgsQgLhZA7gwQAjgdA6gOICHgiQA+gUAjgNIAEgFQAugVBcARIA1AMQA0ANAwAPQA+AZA6AlIAEACQBJAxAqAzQAPASALASQAXApgBAmQAAAkgaAhIgSAcIi2EcIhHBwQhJBygoA3QigCygyABQhWANhIAAQisAAhbhJg");
	var mask_8_graphics_81 = new cjs.Graphics().p("AnNIGQiRhOgQirQg8hjB+i0QAXgnAegrQBQigAzgxQAChUBDgwQAngeA6gOICMgnQBDgXAggPIADgGQAjgjBiANIA4AJQA3AJAzALQBAAYA/AlIAEACQBOAwAuA1QARASALATQAbApABAnQADAngZAiIgTAcIi9EpIhKBzQhRB/gmAxQiqCehCABQhVAKhIAAQi5AAhmhEg");
	var mask_8_graphics_82 = new cjs.Graphics().p("AnWIHQilhJggicQhThkCXi4QAagjAkgrQBXiUBIg3QAQhOBLgxQAsgdA5gPICRgsQBLgbAagQIACgHQAZgxBnAIQAeACAdAEIBvANQBCAWBFAmIAEACQBSAvAzA2QASATANATQAeAqADAnQAGAqgZAkQgDAGgQAWIjFE1IhMB3QhaCMgjArQizCJhUAAQhSAJhHAAQjGAAh0hAg");
	var mask_8_graphics_83 = new cjs.Graphics().p("AneIJQi7hDgviPQhqhlCvi4QAegjAqgqQBeiIBeg8QAdhKBTgxQAwgdA5gQICXgwQBRggAWgQIABgIQAOg/BtADIA9ADIB1AGQBFAUBKAmIAEACQBVAwA5A3QATATAOATQAhAqAGApQAIAsgZAlQgEAIgPAVIjNFBIhOB7QhjCYggAlQi8B2hogBQhKAGhEAAQjXAAiCg7g");
	var mask_8_graphics_84 = new cjs.Graphics().p("AnlILQjRg9g+iBQiChmDIi6QAhgjAwgoQBmh9ByhAQArhFBbgyQA0gcA6gSICZg0QBagkARgRIAAgJQADhMB0gDIBAAAIB5AAQBIARBPAnIAFACQBZAvA9A4QAVATAPATQAkAsAIAqQALAtgYAoQgFAJgPAVIjUFMIhSCAQhqCkgeAfQjFBih5gCQhEAEhAAAQjpAAiQg3g");
	var mask_8_graphics_85 = new cjs.Graphics().p("AnuISQjmg4hNhzQiahmDhi8QAlgiA1gmQBthyCIhFQA5hBBjgxQA4gdA5gSICfg5QBhgoAMgSIgBgLQgHhZB5gIIBCgDIB/gHQBLAPBUAoIAFACQBdAuBCA5QAWAUARATQAmAtALArQAOAvgYApQgGALgPAUIjbFYIhUCEQhzCxgbAZQjPBOiKgDQg3ACg1AAQkDAAilgzg");
	var mask_8_graphics_86 = new cjs.Graphics().p("An2IZQj7gyhdhlQixhoD6i8QAoghA7goQB1hkCdhLQBGg7BrgyQA8gcA6gUQBsgoA3gVQBpgsAHgTIgDgMQgShnB/gNIBGgGICEgOQBNANBZAoIAFACQBhAuBHA7QAYAUASATQApAtAOAsQAQAygYArQgGAMgPATIjjFkQguBKgoA+Qh7C+gZASQjYA6ibgEIhNABQkiAAi8gvg");
	var mask_8_graphics_87 = new cjs.Graphics().p("ABDJMQlfAAjigsQkRgthshXQjJhpETi9QAsghBBgnQB7hYCzhQQBTg2B0gyQBAgdA6gUQBxgrA3gXQBwgwABgUIgDgNQgch1CEgRIBIgKQBHgJBDgMQBPAMBfAoIAFACQBmAuBLA8QAZAUATAUQAtAtAQAtQATA1gYAsQgGAOgPARIjqFxIhaCLQiDDLgXAMQjJAiifAAIglAAg");
	var mask_8_graphics_88 = new cjs.Graphics().p("ABRJPQlngFjwgkQkmgoh7hJQjhhpEsjAQAvgfBHgmQCDhNDIhUQBhgyB7gzQBEgcA6gVQB4gvA1gXQB3g1gDgVIgFgNQgniDCLgWIBLgNQBIgNBHgPQBSAJBjAqIAGACQBpAtBQA8QAbAVAUAUQAwAvASAuQAWA2gXAuQgIAPgOARIjyF9IhcCPQiLDXgVAGQixAOiXAAQgxAAgvgBg");
	var mask_8_graphics_89 = new cjs.Graphics().p("AvUHLQj5hqFFjAQC8hwIcjPQDohaBNgjQB+g4gIgWQg+ieCXgcQB0gXBugdQBXAIBsAsQBtAtBVA+QBbBEAeBDQAiBMg2A9Ij6GJQjtF2gXAAQy+gGk4iGg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_8_graphics_64,x:100.8,y:-1251.2}).wait(1).to({graphics:mask_8_graphics_65,x:102.7,y:-1247.8}).wait(1).to({graphics:mask_8_graphics_66,x:104.7,y:-1244.4}).wait(1).to({graphics:mask_8_graphics_67,x:106.7,y:-1241}).wait(1).to({graphics:mask_8_graphics_68,x:108.7,y:-1237.6}).wait(1).to({graphics:mask_8_graphics_69,x:110.7,y:-1234.3}).wait(1).to({graphics:mask_8_graphics_70,x:112.7,y:-1231}).wait(1).to({graphics:mask_8_graphics_71,x:114.7,y:-1227.7}).wait(1).to({graphics:mask_8_graphics_72,x:116.5,y:-1224.4}).wait(1).to({graphics:mask_8_graphics_73,x:115.3,y:-1221.8}).wait(1).to({graphics:mask_8_graphics_74,x:114,y:-1219.2}).wait(1).to({graphics:mask_8_graphics_75,x:112.9,y:-1216.6}).wait(1).to({graphics:mask_8_graphics_76,x:112,y:-1214.1}).wait(1).to({graphics:mask_8_graphics_77,x:111.2,y:-1211.6}).wait(1).to({graphics:mask_8_graphics_78,x:110.4,y:-1209}).wait(1).to({graphics:mask_8_graphics_79,x:105.6,y:-1208.3}).wait(1).to({graphics:mask_8_graphics_80,x:100.1,y:-1207.9}).wait(1).to({graphics:mask_8_graphics_81,x:94.6,y:-1207.7}).wait(1).to({graphics:mask_8_graphics_82,x:89.1,y:-1207.7}).wait(1).to({graphics:mask_8_graphics_83,x:83.5,y:-1207.7}).wait(1).to({graphics:mask_8_graphics_84,x:78,y:-1207.8}).wait(1).to({graphics:mask_8_graphics_85,x:72.5,y:-1208.3}).wait(1).to({graphics:mask_8_graphics_86,x:66.9,y:-1208.9}).wait(1).to({graphics:mask_8_graphics_87,x:61.4,y:-1209.4}).wait(1).to({graphics:mask_8_graphics_88,x:55.9,y:-1209.8}).wait(1).to({graphics:mask_8_graphics_89,x:50.4,y:-1209.9}).wait(338));

	// x5
	this.instance_15 = new lib.yld_4();
	this.instance_15.setTransform(-58.5,-1238.4);
	this.instance_15._off = true;

	this.instance_15.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(64).to({_off:false},0).wait(363));

	// z4 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_43 = new cjs.Graphics().p("AgVD6QiVg6gMi+QgOjHCmg7QF7DEkiEoQgVAVgcAAQgNAAgSgHg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AgPDsQgtgOgqgWQiPhDgIh7IAAAAQgIh1CChOQAwgkBDgWQBKATBCAUQDiCcikDUQgSAYgZAMQgVAQgpAPQgVAMgcAAQgXABgYgIg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AgJDdQgzgNg1gSQjMhAgHhsIAAAAQgIhpDChXQA7ggBOgYICoAGQEVCpjODwQgXAbghABQgWAIg4AFQgTAFgWAAQghAAgngKg");
	var mask_9_graphics_46 = new cjs.Graphics().p("ADdDsQgWgBhIgGQg0ABhNgPIh7gbQkIg+gGhcIAAAAQgHheECheQBFgdBWgZIDGgcQFJC2j4EMQgWAXgeAAQgIAAgJgBg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AEED6QgxgTlbg0QlFg8gFhNQgGhRFBhmQClg2Dug9QF8DEkiEoQgVAVgbAAQgQAAgSgHg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AgzDwQgmACgqAAQihANhJgcQglgPgTgLQgpgagEgfQgLhcEdiPIBAgiQBtgsC0g8IA3gRQCYAxA9BFQBCBYgwBqQgeBDhNBRQgcAdgogCIgPgBQgcAGhOAAQhNAAh9gGg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AlmEZQgsgQgQgKQgpgagHgkQgQhlD6i5IA4guQBeg0DNhOIA5gTQChAYBKAwQBTBZgwBwQgdBDhUBYQgcAfgoAFIgPACQhHAojnASQgmAJgoAHQh0AlhCAAQgeAAgUgIg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AlgFMQgxgTgOgIQgpgagJgpQgWhtDWjkIAxg7QBPg6DmhgIA7gXQCpgBBXAdQBlBZgwB1QgcBFhbBeQgdAggnAMIgPAFQhVBFjSAwQgmARgnANQiQBOg/AAQgOAAgKgEg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AlaGHQg2gVgMgHQgqgagLguQgch1CzkQIAqhGQA/hBD/hzIA9gZQCygbBkAKQB3BYgwB7QgcBFhhBpQgeAegnATIgPAIQhiBhi+BOQgmAZglAVQijB4g2AAQgHAAgGgCg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AlTHNQg8gXgKgGQgqgagOgzQghh+CPk6IAjhTQAwhHEXiFIBAgdQC7gzBxgKQCIBYgwB/QgbBGhnBxQgfAhgnAaIgPAKQhwB9iqBsQgmAggjAcQiyClgsAAIgGgCg");
	var mask_9_graphics_53 = new cjs.Graphics().p("AlLIVQhDgZgHgFQgrgagQg4QgmiGBsllIAbhfQAghOEziYIBAgfQDEhNB+gdQCZBYgwCEQgbBGhtB5QgfAignAiIgPAOQh+CYiWCKIhHBKQi/DQggAAIgDAAg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AlDJcQhIgcgFgDQgrgagSg9QgyihBinoQARhVFMiqQD4iAChg5QCsBYgxCIQghBbi0C5QiTC+iICwQkMFVgaAAIgBAAg");
	var mask_9_graphics_55 = new cjs.Graphics().p("AmAJSIgQgFQhAgVgNgDQgjgPgVgbQgTgTgHgaQgPgzAGhtQAGiAAci0QAYiQAgiaQAShMBbg+QAqgVA/gKQBOgNBbgbIADAAQBlgTBagTQBvgWBfgWQAogIAmgGQAsAVAkAYQB2BSgMBsQABAfgOAmQACBNhKBaQgcAjgxAjQhFBEhUBAQh+BqhxBjQlTE1g6AAIgCAAg");
	var mask_9_graphics_56 = new cjs.Graphics().p("AnNJIIgRgEQhGgTgVgDQgsgPgagZQgbgTgHgdIAAgBQgNgyAMiHQAMiYAjjJQAgiyAlilQAahrBWg5QAugOBJALQBbAOBegKIAEAAQBzAJBjgBQB+ABBwgMQAugEAugBQAyAYAsAaQCNBXAPBtQALAhgDAoQArBdhGBeQgcAphBAkQhTBBhyA6QihBfiOBZQmcEWhZAAIgEgBg");
	var mask_9_graphics_57 = new cjs.Graphics().p("AonKLIgTgEQhMgRgdgDQg1gOgegYQgjgTgHgfIAAgBQgMgzATihQATivApjhQAojRApixQAjiJBQg0QAygHBUAfQBoAoBhAIIAEABQCAAlBuAQQCOAYB/gCQA1ABA1AEQA5AZA0AdQCjBdApBuQAXAjAHApQBVBthDBhQgcAuhRAmQhgBAiQA0QjGBVipBPQnlD0h4AAIgGAAg");
	var mask_9_graphics_58 = new cjs.Graphics().p("AqELRIgUgEQhSgOglgEQg+gNgjgXQgrgTgHghIAAgCQgLgzAai6QAZjHAxj5QAwjxAsi7QAsipBLgvQA2AABeA0QB1BDBlAZIAEACQCMBAB6AjQCcAvCQAHQA7AFA9AKQA/AbA8AfQC5BjBEBuQAiAmASAqQB/B7hABnQgcA0hhAnQhuA+itAtQjqBLjFBFQotDUiZAAIgIAAg");
	var mask_9_graphics_59 = new cjs.Graphics().p("ArjMXIgVgDQhYgNgtgEQhHgMgngVQgzgUgHgkIAAgCQgJgyAgjUQAgjfA3kRQA4kQAxjHQA0jHBGgqQA5AHBpBIQCCBeBoAqIAEADQCZBcCHA0QCpBGChARQBAAKBFAPQBFAdBFAiQDPBnBfBwQAsAmAdArQCpCNg9BsQgcA6hxAoQh7A7jLAnQkPBAjgA7QpyC0i6AAIgNAAg");
	var mask_9_graphics_60 = new cjs.Graphics().p("AtCNdIgXgDQhdgLg1gEQhQgLgrgUQg7gUgHgmIgBgCQgIgzAnjuQAnj2A9kpQBAkwA1jSQA9jlBBglQA9ANBzBdQCPB5BrA7IAFADQClB5CSBGQC5BcCxAbQBGAPBNAUQBLAfBOAkQDlBtB5BvQA3AqAoArQDSCdg5ByQgcA/iBApQiJA4jpAiQkzA1j8AxQq3CUjbAAIgRAAg");
	var mask_9_graphics_61 = new cjs.Graphics().p("AuhOjIgYgCIihgOQhZgKgwgTQhDgUgGgoIgBgDQgHgyAukIQAtkOBElAQBIlQA5jdQBGkEA7ggQBBAUB+ByQCcCTBuBNIAFAEQCyCUCdBYQDIBzDBAlQBNATBUAZQBRAiBXAmQD7BwCUByQBCAsAyAtQD8Ctg2B2QgcBEiRArQiXA1kGAcQlXArkYAmQr4B0j9AAIgYAAg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AwAPpIgagCIivgMQhigJg0gRQhLgVgHgqIAAgDQgGgzA0khQA0kmBLlYQBQlvA9joQBPkkA2gaQBFAaCICHQCpCuBxBeIAFAFQC/CvCoBqQDXCLDSAuQBTAYBbAeQBYAjBeAnQESB4CuByQBNAvA9AuQEmC9gzB7QgbBJiiAsQikAzkkAVQl7Ahk0AdQs2BTkgAAIghAAg");
	var mask_9_graphics_63 = new cjs.Graphics().p("AxgQvIgbgBQhvgFhOgGQhrgIg4gQQhTgUgHgtIAAgEQgFgyA7k8QA6k8BSlwQBYmPBBj0QBXlCAxgVQBJAhCSCcQC2DIB1BwIAFAFQDLDMCzB7QDnCiDiA3QBZAbBjAkQBeAlBnAqQEoB+DJB0QBYAwBHAvQFPDNgvCAQgbBPiyAtQixAwlDAQIruAoQtgAzlHAAIg7AAg");
	var mask_9_graphics_64 = new cjs.Graphics().p("AzdR0QkSgGhpgZQhfgWgDgyQgEgyBClVQBBlVBYmHQDmwEBLgaQBMAnCdCxQDIDnB5CCQDXDoC+CNQD2C5DzA/QC4BBDlBeQHHC6EPCgQF5DdgrCFQg3CmrGATQ3eAnoWAAQhiAAhBgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_9_graphics_43,x:-25.9,y:-1289.2}).wait(1).to({graphics:mask_9_graphics_44,x:-32.9,y:-1288.9}).wait(1).to({graphics:mask_9_graphics_45,x:-40,y:-1288.7}).wait(1).to({graphics:mask_9_graphics_46,x:-47.1,y:-1289.3}).wait(1).to({graphics:mask_9_graphics_47,x:-54.2,y:-1289.2}).wait(1).to({graphics:mask_9_graphics_48,x:-55.5,y:-1288}).wait(1).to({graphics:mask_9_graphics_49,x:-56.8,y:-1281.6}).wait(1).to({graphics:mask_9_graphics_50,x:-58.1,y:-1274.8}).wait(1).to({graphics:mask_9_graphics_51,x:-59.4,y:-1268.8}).wait(1).to({graphics:mask_9_graphics_52,x:-60.7,y:-1263.9}).wait(1).to({graphics:mask_9_graphics_53,x:-62.1,y:-1259.2}).wait(1).to({graphics:mask_9_graphics_54,x:-63.6,y:-1254.4}).wait(1).to({graphics:mask_9_graphics_55,x:-54.3,y:-1252.2}).wait(1).to({graphics:mask_9_graphics_56,x:-43.4,y:-1250}).wait(1).to({graphics:mask_9_graphics_57,x:-31.2,y:-1255.4}).wait(1).to({graphics:mask_9_graphics_58,x:-18.8,y:-1261.2}).wait(1).to({graphics:mask_9_graphics_59,x:-6.2,y:-1266.9}).wait(1).to({graphics:mask_9_graphics_60,x:6.5,y:-1272.7}).wait(1).to({graphics:mask_9_graphics_61,x:19.2,y:-1278.5}).wait(1).to({graphics:mask_9_graphics_62,x:31.9,y:-1284.2}).wait(1).to({graphics:mask_9_graphics_63,x:44.6,y:-1290}).wait(1).to({graphics:mask_9_graphics_64,x:57.4,y:-1295.7}).wait(363));

	// x4
	this.instance_16 = new lib.yld_3();
	this.instance_16.setTransform(-64,-1283.9);
	this.instance_16._off = true;

	this.instance_16.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(43).to({_off:false},0).wait(384));

	// z3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_27 = new cjs.Graphics().p("Aj0gOQgHhrBfg/QAqgcAvgCQGtADigFbQgYA0g4AMQhHAPg3AAQjgAAgQjlg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AhlDTQhYgpgoheQgbg/gEhFQgEg5AcgrQAFgJAJgIIAQgRQAbgaAjgUQAygbA1ACIATACQBRAJA5AiQBUAkAjBCQAiA/gKBJQgKA6gbBDIgSAoQgYAxggAPQgPAGgSACQgaADgYAAQhdAAhJgzg");
	var mask_10_graphics_29 = new cjs.Graphics().p("Ah0DVQhVg7gqhrQgdhNgFhIIAAAAQgEhAAlguQAHgJAMgIQAMgJAIgIQAhgaAogTQA7gbA5AGIAUAEQBZARA6A2QBPA0AdBTQAdBOgPBMQgPBBggBJIgVAtQgeA7geAOQgRAGgUgBIgPABQh0AAhdhlg");
	var mask_10_graphics_30 = new cjs.Graphics().p("ABjFvQh8gEhqiVQhThOgrh4QgghcgFhJIAAgBQgFhHAvgwQAIgKAOgIQARgJAIgHQAogbArgSQBFgaA8AKIAYAFQBfAZA6BKQBLBEAYBkQAXBcgTBQQgWBJgjBPIgYAxQgkBGgcAMQgOAFgPAAIgOgBg");
	var mask_10_graphics_31 = new cjs.Graphics().p("ABaGkQh8gOhyi/QhPhhgtiDQgjhtgFhLIAAAAQgGhOA5g0QAKgKARgHQAUgJAJgGQAugdAwgRQBNgZBCAOIAZAHQBmAgA7BeQBGBUASB1QASBqgZBUQgbBRgoBVIgaA1QgqBSgbAKQgMADgMAAQgLAAgMgCg");
	var mask_10_graphics_32 = new cjs.Graphics().p("ABRHZQh8gZh5jpQhNhygviSQglh8gGhLIAAgBQgGhVBDg3QALgJAUgIQAXgIAJgGQA2geA0gQQBVgZBHASQAPAEANAFQBsAnA7BzQBCBkAMCGQANB6gdBWQgiBZgrBbIgdA5QgxBdgYAIQgMADgMAAQgOAAgOgEg");
	var mask_10_graphics_33 = new cjs.Graphics().p("ABHIOQh8gjiBkTQhJiFgxifQgoiLgGhMIAAgBQgGhdBMg5QANgKAWgHQAbgJAKgFQA8gfA4gPQBdgYBOAWQAPAEAPAGQBxAvA8CHQA9B0AHCYQAHCIgiBaQgoBggvBgIgfA/Qg3BngXAHQgLADgLAAQgQAAgSgHg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AA8JEQh8guiIk+QhHiXgyisQgriagGhOIAAgBQgHhkBWg8QAOgKAZgHQAfgIAKgFQBDgfA8gPQBmgYBTAbQAQAFAQAHQB4A2A9CcQA4CDABCpQACCXgnBdQguBogzBmIgiBDQg+BygUAFQgLADgKAAQgUAAgUgIg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AjbDZQhEipgzi5QgvirgFhPQgIhrBfg/QAQgKAcgHQAjgIAKgFQDdhhCWBJQB+A+A9CvQA0CTgEC6QgECngsBfQg0Bxg3BrQhjDDgYAFQgKACgKAAQiOAAirmqg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AjLEUQgcgogbgrQg8hagvhnQgNgbgMgbQgZg7gPg0QgbhgABg/QgChoBYhHIAQgMQASgNAdgJQAigKAOgHQDkhqC0A0QBJAXA7AzIARAPQAMAQAHANQAIANAJAVIAGAOIAHANIAMATQAIAKAEALQAxBKAVBtQAGAYAEAcQAHA+gBA7QgEBegYBJIgJAXQgcBRgiBGQgPAdgRAtIggBLQg8CJgVAOIgGACQgaAIgaAAQisAAi6lag");
	var mask_10_graphics_37 = new cjs.Graphics().p("Ai/FPQglgigkgmQhUhQg/hmQgSgbgQgbQgig6gTg5QgihkAGhKQAEhuBghQIASgNQATgPAegLQAigNARgJQDohzDWAeQBQARBIAoQAMAHAEgBQAJAKADABQADABAGAOIAFAHIAIAHIARANQALAIAFAIQBKAxAoBoQALAZAIAcQAQA+AFBEQADBkgUBUIgIAaQgYBdgkBKQgNAagRA6QgQAqgPArQg5CbgVANIgHADQgxASgyAAQjCAAjCkOg");
	var mask_10_graphics_38 = new cjs.Graphics().p("Ai1GJQgugcgtggQhrhGhQhjQgXgbgTgcQgrg8gYg8QgnhoAKhVQAKh0BnhZIATgPQAWgRAegOQAjgPAUgLQDth7D2AJQBZAIBTAeQAOAFACgIQAHAEgDgLQgCgLAEAGIAEABQACgDAHADIAVAJQAPAEAGAHQBjAZA6BiQAQAYANAeQAZA/ALBLQAKBqgRBiIgGAcQgVBoglBNQgLAXgSBHIgdBfQg2CtgUANIgJAEQhTAhhSAAQjLAAjFjIg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AirHeQg4gWg2gbQiCg8hghhQgcgagYgcQgzg+gdhCQgthqAQhgQAOh7BwhhIAUgRQAYgTAfgQQAigRAYgOQDxiDEYgNQBgABBfATQAQADAAgPQAEgCgHgXQgIgXADgBQAAgEABgCQACgHAJABIAZADQATACAHAEQB8ABBMBeQAWAXASAeQAhBAARBTQAQBvgMBvIgFAfQgSB0gmBRQgKAUgSBUQgNAwgOA4QgyC/gVAMIgLAFQiBA3h+AAQjGAAi8iHg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AiiI9QhCgPg+gXQiagyhwhdQghgagcgdQg8g+gihHQgyhxAUhoQAUiBB4hrIAWgSQAZgVAggSQAigTAbgRQD2iME5giQBogHBqAIQASACgCgWQACgIgNgjQgMgjAAgIQgBgIABgFQACgLAKgCQALgCATABQAXgBAHACQCVgYBeBZQAcAWAWAgQAqBAAXBcQAYBzgKB7IgDAiQgPCBgnBVQgIAQgSBhQgNAzgNA/QgvDSgUALIgNAGQjABVi3AAQixAAimhQg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AiaKfQhLgJhIgSQiwgniBhbQgmgagggdQhFg/gmhMQg4h0AZh2QAZiFCAh0IAXgTQAbgXAhgVIBBgoQD5iVFbg3QBvgOB3gDQAUAAgFgeQgBgNgRgvQgRgvgCgQQgCgLABgIQABgPALgEQANgFAWgCIAjgEQCtgwBxBTQAhAXAbAgQAyBBAdBjQAfB5gGCIIgCAkQgLCOgpBYQgGANgTBuIgYB8QgrDjgVALIgNAHQkVB/kAAAQiFAAiCgkg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AiTL8QhUgDhRgNQjIgdiQhYQgsgagkgdQhOhAgqhQQg+h5AeiBQAfiMCIh7IAYgWQAdgZAhgXQAigXAigWQD/icF7hNQB4gWCCgOQAWgCgHgkQgDgUgXg6QgWg7gEgYQgDgPAAgKQABgUAMgGQAPgIAZgEIAogIQDGhJCDBOQAmAWAgAiQA7BBAiBrQAnB+gCCUIgBAnQgICcgqBaQgFAJgTB8IgWCGQgoD1gUALIgQAHQmFC4lZAAQhGAAhFgHg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AlDNLQjfgTihhVQiahRhEh8QhEh9AiiMQAliTCQiEQFQk5L/iBQAXgEgJgrQgGgagbhGQgbhHgHgfQgLgzAVgOQAQgKAcgHQAjgIAKgFQDfhhCWBJQB+A+A9CvQA0CTgEC6QgECpgsBdQgEAJgnEWQglEHgUAKQoqEQnRAAQhDAAhAgFg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_10_graphics_27,x:78.9,y:-1380.3}).wait(1).to({graphics:mask_10_graphics_28,x:80.5,y:-1376.1}).wait(1).to({graphics:mask_10_graphics_29,x:82.2,y:-1371.5}).wait(1).to({graphics:mask_10_graphics_30,x:83.9,y:-1366.8}).wait(1).to({graphics:mask_10_graphics_31,x:85.7,y:-1362}).wait(1).to({graphics:mask_10_graphics_32,x:87.6,y:-1357.3}).wait(1).to({graphics:mask_10_graphics_33,x:89.5,y:-1352.5}).wait(1).to({graphics:mask_10_graphics_34,x:91.5,y:-1347.8}).wait(1).to({graphics:mask_10_graphics_35,x:93.5,y:-1343.1}).wait(1).to({graphics:mask_10_graphics_36,x:85.7,y:-1338.5}).wait(1).to({graphics:mask_10_graphics_37,x:78.2,y:-1334}).wait(1).to({graphics:mask_10_graphics_38,x:70.8,y:-1329.4}).wait(1).to({graphics:mask_10_graphics_39,x:63.6,y:-1327.4}).wait(1).to({graphics:mask_10_graphics_40,x:56.4,y:-1326.5}).wait(1).to({graphics:mask_10_graphics_41,x:49.3,y:-1325.8}).wait(1).to({graphics:mask_10_graphics_42,x:42.2,y:-1324.7}).wait(1).to({graphics:mask_10_graphics_43,x:35.2,y:-1322.6}).wait(384));

	// x3
	this.instance_17 = new lib.yld_2();
	this.instance_17.setTransform(-56,-1339.4);
	this.instance_17._off = true;

	this.instance_17.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(27).to({_off:false},0).wait(400));

	// z2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_12 = new cjs.Graphics().p("AiMBqQh+hjA9iKQAcg+BBgEQFrhagbEzQgRDGh1AAQhYAAiOhwg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AiTCHIgPgJIglgSQgRgHgLgLQgKgHgJgLQgQgWgLgeQgVg3AehDQAZg5BagPQBHgTBCgKQDaggAlB0QAVAeALAxQAFAQABARQAEAUgEAWQgMBLgyAvQgwA2hRAAQheAAiPhMg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AioCbIgQgGQgagHgTgDQgVAAgLgHQgNgCgMgLQgTgUgUgiQghg+AhhKQAYg1BxgZQBOgXBQgQQEFg1AmBmQAfAXAXAwQAKAQAEASQAJAYgFAXQgNBOhIA2QhCA+hxAAQhmAAiPg0g");
	var mask_11_graphics_15 = new cjs.Graphics().p("Ai+CwIgRgEQgegEgWACQgYAIgNgEQgPADgPgKQgVgSgdglQgvhDAmhUQAVgwCKglQBUgZBegXQExhJAnBXQAoAQAkAwQAOAQAHASQAOAagGAcQgNBPhfA9QhaBIigAAQhlAAiEgeg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AltDSQgZgQglgpQg8hJAqhcQATgsCjgvQBagdBrgdQFdheAnBIQAyAKAwAvQATAQAKASQATAcgGAgQgPBSh1BDQipB4lzgtIgUgCQghgBgaAIQgbAOgOAAQgIAEgIAAQgJAAgKgFg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AmUDvQgcgOgtguQhKhNAuhmQARgmC7g7QBhggB5gjQGIhyAoA4QA8AEA8AtQAXAQANAUQAYAdgGAkQgQBUiLBKQi/B5mYgNIgVgBQgmAEgcAMQgfAVgOAFQgMAHgNAAQgIAAgIgDg");
	var mask_11_graphics_18 = new cjs.Graphics().p("Am8EMQgfgMg2gxQhWhTAxhxQAPggDUhFQBogjCGgqQGziHApAqQBGgDBIAtQAcAQAQAUQAdAfgHAoQgRBYihBPQjVB6m8ASIgXACQgqAGgfASQgjAcgPAIQgPANgRAAQgHAAgHgDg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AnjErQgigJg+g2QhkhYA1h6QANgbDshRQBugmCUgwQHfibAqAbQBPgKBVAsQAhAQATAUQAiAigJArQgRBbi3BWQjrB7nhAyIgYADQgvAKghAXQgnAjgQAMQgSARgUAAIgNgCg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AoKFOQgmgIhGg5QhxheA5iDQALgYEEhaQB1gpCig2QIKiwAqAMQBagRBhArQAlARAWAUQAnAjgJAvQgSBejOBcQkAB8oGBSIgZAFQgzANglAdIg6A6QgWAWgZAAIgKgBg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AoxFxQgpgFhPg9Qh+hjA9iMQANgcJDjGQI2jEArgCQBjgZBuArQB0AvgPBOQgTBgjkBmQkXB6oqByQhIAPgxAqIg/BFQgZAbgcAAIgJgBg");
	var mask_11_graphics_22 = new cjs.Graphics().p("Ap/FQQgYgLgegVQgUgPgRgRQhahbA2h6QAMgaHuiqIBqglQElhmCCgoQCqgqAmAIQBngKBpA0IAWALQBYAzgJBJIgBAKQgLA7hIA5Qg1AthYAnIgJAEQhaAoh6AhQkGBHmGAlQhBAHgzAYIgLAGQgsAigWAVIgEAEQgcAdghAFIgMABQgZAAgggRg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AqIFRQgZgIgggVQgVgOgTgTQhhhcA3h9QAMgbH/ixIBsglQFHhxBugfQClgcA1ATQBrAEBkA8IAWANQBTA5gDBLIgBALQgGBBhBA7Qg0A0haApIgIAEQhdAqiAAcQkQA7mSgFQhDABg2ANIgMAEQgwAXgZAWIgFAEQgaAbgiAOIAAAAQgPAHgQAAQgSAAgTgHg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AqRFTQgagEgjgVQgVgOgVgTQhpheA5iBQAMgcIRi2IBugnQFoh8BagWQChgMBDAcQBvATBgBEIAUAPQBPA/ACBNIAAALQAABGg8BAQgxA7hcArIgIAEQhgAriFAWQkbAvmfgtQhDgGg7ACIgMACQgzAMgdAXIgFAEQgaAZghAXIgBABQgWARgZAAQgKAAgKgDg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AqbFYQgbAAglgVQgWgOgXgTQhwhgA6iFQANgcIhi8IBygoQGIiIBHgMQCbACBSAmQBzAhBbBNIAUARQBKBFAHBPIABALQAGBNg2BEQgvBBhdAsIgJAEQhiAtiLARQkmAjmrhXQhDgMhAgIIgNgBQg2ABghAYIgGAFIg6A2IAAABQgdAdgeAAIgIAAg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AkvD9IiIgmIgPgDQg5gKglAaIgFAEQgXAUgiAqIgBABQgiAqggABQgcAEgngVQgXgNgagVQh3hhA8iIQANgdIyjDIB0goQGqiUAzgCQCWARBhAvQB3AwBWBVIATATQBGBLANBPIABAMQALBVgvBHQgtBIhgAuIgIAEQhlAuiQALQgvAEgyAAQkUAAlzhsg");
	var mask_11_graphics_27 = new cjs.Graphics().p("Am8C2QhGgdguAeQgXAPgoA8QgjAzgeAHQguAMhMg7Qh+hjA9iNQANgdJEjIQI+jKAiAIQFCBHCeDDQBFBWAQBYQARBbgpBLQgrBPhiAvQhpAzidAGIgpABQliAAoBjWg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_11_graphics_12,x:-38.6,y:-1348.1}).wait(1).to({graphics:mask_11_graphics_13,x:-32.7,y:-1351}).wait(1).to({graphics:mask_11_graphics_14,x:-26.6,y:-1354.1}).wait(1).to({graphics:mask_11_graphics_15,x:-20.6,y:-1357.3}).wait(1).to({graphics:mask_11_graphics_16,x:-14.6,y:-1359.9}).wait(1).to({graphics:mask_11_graphics_17,x:-8.6,y:-1361.2}).wait(1).to({graphics:mask_11_graphics_18,x:-2.5,y:-1362.5}).wait(1).to({graphics:mask_11_graphics_19,x:3.5,y:-1364}).wait(1).to({graphics:mask_11_graphics_20,x:9.5,y:-1365.8}).wait(1).to({graphics:mask_11_graphics_21,x:15.5,y:-1367.7}).wait(1).to({graphics:mask_11_graphics_22,x:17.5,y:-1367.3}).wait(1).to({graphics:mask_11_graphics_23,x:19.6,y:-1367.1}).wait(1).to({graphics:mask_11_graphics_24,x:21.7,y:-1367.1}).wait(1).to({graphics:mask_11_graphics_25,x:23.9,y:-1367.5}).wait(1).to({graphics:mask_11_graphics_26,x:26.1,y:-1366.7}).wait(1).to({graphics:mask_11_graphics_27,x:28.4,y:-1364.3}).wait(400));

	// x2
	this.instance_18 = new lib.yld_1();
	this.instance_18.setTransform(-31,-1376.9);
	this.instance_18._off = true;

	this.instance_18.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12).to({_off:false},0).wait(415));

	// z1 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("AhZC3QiJkZDSidQEQChi+EdQgrBBgkAAQgpAAgjhJg");
	var mask_12_graphics_1 = new cjs.Graphics().p("AhdD1Qg5gNgdg6QgTggALgeQgIhBAgg6QAQhOBMhCQA4gwA0gnIAIgEQCgBVgOB7QAHAmgfAnQgeA9hKBDIgkAfQg0AxgwAAQgKAAgKgCg");
	var mask_12_graphics_2 = new cjs.Graphics().p("AiZDrQhOgSgdg1QgYgjAgghQAKg8BEg3QAkhFBtg/QBSguA4gnIAIgCQDHBhg6CUQAAAng6AgQg1AzhmAzIgtAXQg+Akg3AAQgSAAgSgEg");
	var mask_12_graphics_3 = new cjs.Graphics().p("AjVDhQhkgWgdgwQgdgnA1gjQAdg4Bng0QA4g8CMg7QBvguA6glIAJgBQDtBuhmCvQgGAlhVAZQhMAoiCAkIg4AQQhBAWg6AAQgfAAgdgGg");
	var mask_12_graphics_4 = new cjs.Graphics().p("AkSDWQh6gZgegtQghgqBKgmQAvgzCKgxQBNgzCtg4QCKgsA8gkIAKABQETB6iSDJQgNAkhvASQhkAeicAVIhEAJQg6AJg0AAQg3AAgwgKg");
	var mask_12_graphics_5 = new cjs.Graphics().p("AlQDJQiRgdgdgoQgmgtBfgpQBBgtCugvQBhgqDOg1QClgqA+gjIALACQE5CHi+DkQgTAiiKALQh7AUi2AEIhSACIgzABQhoAAhXgSg");
	var mask_12_graphics_6 = new cjs.Graphics().p("AghDaIhdgGQiXgHh6gZQimgigdgjQgrgwB0gsQBUgnDRgtQB1ghDwgyQC/gpBAgiIAMAEQFfCTjqD+QgZAhikAFQhDAEhPAAQhhAAhygGg");
	var mask_12_graphics_7 = new cjs.Graphics().p("AFhDuQiqgCjtgaQjngaiwgjQi9gmgcgeQgwg0CIgtQBngjD0grIGahGQDbgoBCghQGWChkaEdQgdAdimAAIgcAAg");
	var mask_12_graphics_8 = new cjs.Graphics().p("AEeDsQiRgEi4gTIhAgIQjGgXiZgeIgfgGQimgjgWgfQgrg7BugyQA7gxCHgkQA5gQBIgNQBPgNB4gOQBXgJBugKIAWgBQBagMBLgIQBVgNAqgNQBQAZAwAWQEACUjZDpQgUAXhEAOQgtAIhWAAIgUAAIhBgBg");
	var mask_12_graphics_9 = new cjs.Graphics().p("AEuDtQiUgDi7gTIhBgHQjMgXiageIgfgHQiqgkgUghQgkhDBSg3QAuhIB7grQA3gVBLgNQBRgOB6gGQBXgFByAAIAXAAQBUgFBVAAQBUgGAugIICFAiQEXCRjJDnQgWAbg+AWQgoALhcADIgqAAIgtAAg");
	var mask_12_graphics_10 = new cjs.Graphics().p("AE9D2QiWgBi+gTIhDgGQjRgWiagfIghgHQivgmgQgjQgfhLA4g8QAghfBwgyQA2gbBNgMQBUgOB7ABQBXAAB1AIIAYACQBPACBeAIQBTACAzgEQBeATArACQEuCOi6DmQgXAfg3AcQgiAQhkAEIhBABIgYAAg");
	var mask_12_graphics_11 = new cjs.Graphics().p("AgOD7IhEgGQjWgWicgfIghgHQizgngNglQgZhTAchBQASh3Blg5QA0gfBQgNQBWgOB9AIQBXAFB7ARIAXAEQBJAIBnAQQBTAJA3ACQBlAQApgJQFECMipDkQgZAjgxAkQgdAThqAGIhbACQiZAAjBgSg");
	var mask_12_graphics_12 = new cjs.Graphics().p("AhIEPQj0gYimgkQi5gogJgoQg6kOCGhgQBqhNDyAcQBXAKB/AaIDMAsQDkAwA8gfQGXChkbEdQgfAgjHABIgWAAQivAAjfgVg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:87.7,y:-1334.3}).wait(1).to({graphics:mask_12_graphics_1,x:78.9,y:-1335.1}).wait(1).to({graphics:mask_12_graphics_2,x:69.2,y:-1335.8}).wait(1).to({graphics:mask_12_graphics_3,x:59.6,y:-1336.6}).wait(1).to({graphics:mask_12_graphics_4,x:50.1,y:-1337.2}).wait(1).to({graphics:mask_12_graphics_5,x:40.7,y:-1337.8}).wait(1).to({graphics:mask_12_graphics_6,x:31.3,y:-1337.4}).wait(1).to({graphics:mask_12_graphics_7,x:22,y:-1336}).wait(1).to({graphics:mask_12_graphics_8,x:21.9,y:-1336}).wait(1).to({graphics:mask_12_graphics_9,x:21.8,y:-1335.9}).wait(1).to({graphics:mask_12_graphics_10,x:21.8,y:-1336.7}).wait(1).to({graphics:mask_12_graphics_11,x:21.9,y:-1338.8}).wait(1).to({graphics:mask_12_graphics_12,x:21.7,y:-1341.1}).wait(415));

	// x1
	this.instance_19 = new lib.yld_0();
	this.instance_19.setTransform(-46,-1369.9);

	this.instance_19.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(427));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,-1515.3,259,71);


(lib.飞船抖动 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.飞船();
	this.instance.setTransform(-125,-167.5,1,1,0,0,0,56.6,-335.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-178.5},9).to({y:-167.5},11).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.1,-239,212.2,143);


(lib._4_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_264 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(264).call(this.frame_264).wait(1));

	// 图层 20
	this.instance = new lib.飞船抖动();
	this.instance.setTransform(-12.5,-179.6,1,1,0,0,0,-125,-167.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).to({alpha:1},6).wait(88));

	// 图层 19
	this.instance_1 = new lib.补间146("synched",0);
	this.instance_1.setTransform(259.5,-172);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.补间147("synched",0);
	this.instance_2.setTransform(228.5,-172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},161).to({state:[{t:this.instance_2}]},8).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({_off:true,x:228.5,alpha:1},8).wait(96));

	// 图层 18
	this.instance_3 = new lib.补间144("synched",0);
	this.instance_3.setTransform(200.5,-306.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间145("synched",0);
	this.instance_4.setTransform(174.5,-306.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},150).to({state:[{t:this.instance_4}]},8).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({_off:true,x:174.5,alpha:1},8).wait(107));

	// 图层 17
	this.instance_5 = new lib.pao4_1_1();
	this.instance_5.setTransform(246.5,-536.6,1,1,0,0,0,9,-559);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(136).to({_off:false},0).wait(129));

	// 图层 16
	this.instance_6 = new lib.补间139("synched",0);
	this.instance_6.setTransform(64,-611.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.补间140("synched",0);
	this.instance_7.setTransform(64,-623.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},127).to({state:[{t:this.instance_7}]},7).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(127).to({_off:false},0).to({_off:true,y:-623.2,alpha:1},7).wait(131));

	// 图层 15
	this.instance_8 = new lib.补间137("synched",0);
	this.instance_8.setTransform(-151,-573.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.补间138("synched",0);
	this.instance_9.setTransform(-151,-586.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},99).to({state:[{t:this.instance_9}]},7).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({_off:true,y:-586.9,alpha:1},7).wait(159));

	// 图层 13
	this.instance_10 = new lib.补间135("synched",0);
	this.instance_10.setTransform(-87,-422.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.补间136("synched",0);
	this.instance_11.setTransform(-87,-439.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},93).to({state:[{t:this.instance_11}]},8).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(93).to({_off:false},0).to({_off:true,y:-439.7,alpha:1},8).wait(164));

	// 图层 12
	this.instance_12 = new lib.补间133("synched",0);
	this.instance_12.setTransform(-100,-903.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.补间134("synched",0);
	this.instance_13.setTransform(-100,-912.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},73).to({state:[{t:this.instance_13}]},6).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73).to({_off:false},0).to({_off:true,y:-912.9,alpha:1},6).wait(186));

	// 图层 14
	this.instance_14 = new lib.补间131("synched",0);
	this.instance_14.setTransform(37,-796.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.补间132("synched",0);
	this.instance_15.setTransform(37,-813.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},69).to({state:[{t:this.instance_15}]},6).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(69).to({_off:false},0).to({_off:true,y:-813.9,alpha:1},6).wait(190));

	// 图层 11
	this.instance_16 = new lib.波浪();
	this.instance_16.setTransform(287.5,-894,1,1,0,0,0,34,-789);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54).to({_off:false},0).to({alpha:1},6).wait(205));

	// 图层 10
	this.instance_17 = new lib.补间154("synched",0);
	this.instance_17.setTransform(106,-934.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_18 = new lib.补间155("synched",0);
	this.instance_18.setTransform(106,-939.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},55).to({state:[{t:this.instance_18}]},6).wait(204));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).to({_off:true,y:-939.9,alpha:1},6).wait(204));

	// 图层 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("ACxEQQjQgDidijQjXjeD3iaQHIgOgLHBQgDBrhrAAIgCAAg");
	var mask_graphics_150 = new cjs.Graphics().p("AhNEyQhpgrhDhgIgBgBQhXhwAFhxQgCiBCBhxQAQgOASgOQAcgHAZgFQAYgIATABQBPADBDARQBAARAxAcQAtAaAfAjQAeAiARArQAHASAFARQADAOABAOQAAASACARQACAZABAaIACAtQADAcAAApIgDBHQgEA+gbAkQggAshBAKQgeAGgeACIgTAAQhkAAhkgrg");
	var mask_graphics_151 = new cjs.Graphics().p("AhyGLQiGguhEh8IAAgBQhXiFAWiVQAKibCQiNIAmgkQAegNAdgLQAcgQAUAAQBhABBSATQBOASA8AhQA3AeAlArQAjArAPA1QAHAXACAVQACAPgDARQgGAWABASIgHA/IAAA0QACAdgCA2QgCAsgEAqQgHBLgdAtQglA6hGAUQgjAMgkAGQgjAFgkAAQhcAAhogkg");
	var mask_graphics_152 = new cjs.Graphics().p("AibHiQijgyhFiYIgBAAQhViZAli6QAXi0CeiqQAVgWAWgVQAhgVAggQQAhgXAVgCQByAABgAUQBeATBGAmQBBAjAqAzQApAyAOBAQAGAdAAAXQAAARgHATQgLAbgBATQgIAggIAoQgCAYgCAmQACAegFBEQgCAzgFAyQgKBYggA1QgpBIhNAeQgmASgqALQg3ANg7AAQheAAhrghg");
	var mask_graphics_153 = new cjs.Graphics().p("AjEI4QjAg1hGizIgBgBQhViuA1jeQAjjMCujHQAWgbAYgYQAlgcAigVQAnggAVgCQCEgDBvAWQBsAVBQAqQBNApAuA6QAuA7ANBKQAGAigDAaQgBATgLAWQgRAegDAUQgNAlgLAtQgEAbgDAsQABAggHBQQgEA9gGA4QgNBkgjA+QgtBWhSAoQgrAZgvAPQhJAWhSAAQhhAAhvgfg");
	var mask_graphics_154 = new cjs.Graphics().p("AjsKOQjeg5hHjOIAAgBQhVjCBGkCQAvjmC8jkQAZgeAagdQAoghAlgcQArgnAWgEQCVgEB+AXQB7AXBbAvQBXAtA0BCQAzBDALBVQAFAngEAcQgEAWgOAYQgWAjgFAVQgSAogPAzQgGAdgFAzQABAigJBdQgFBFgIA/QgPBxgmBHQgxBjhZAzQgvAfg0AUQhaAfhnAAQhmAAh0geg");
	var mask_graphics_155 = new cjs.Graphics().p("AkULkQj7g8hIjqIgBgBQhTjXBVklQA8kADLkAQAbgjAbggQAsgoAoghQAwgwAWgEQCngGCNAZQCJAXBmA0QBiAyA4BKQA5BLAKBfQAEAsgHAgQgFAYgSAbQgcAmgGAWQgXAsgUA5QgHAfgGA8QgBAhgKBrQgHBMgJBHQgSB9goBQQg1ByhfA8QgzAmg6AYQhqAqh9AAQhrAAh5geg");
	var mask_graphics_156 = new cjs.Graphics().p("Ak8M5QkYg/hJkGIgBAAQhTjsBllKQBJkYDZkeQAdgmAegkQAvgvArgmQA0g4AYgFQC4gICbAaQCZAZBvA5QBtA3A+BRQA+BTAIBqQAEAxgJAjQgHAagWAdQgiArgIAXQgbAwgYA+QgJAhgIBEQgBAigMB4QgIBVgLBNQgVCKgqBZQg6B/hlBGQg3Asg/AdQh6A1iSAAQhwAAh/geg");
	var mask_graphics_157 = new cjs.Graphics().p("AlkOPQk1hDhKkhIgBAAQhSkBB1luQBVkxDok7QAggqAfgoQAyg1AugsQA5hAAYgGQDKgKCqAcQCnAaB6A+QB4A7BDBaQBDBbAHB0QADA3gLAlQgJAcgZAgQgoAvgKAYQggA0gbBDQgMAkgJBKQgBAkgPCGQgJBdgNBTQgXCXgtBiQg+CNhrBQQg7AzhFAhQiIBAiqAAQh0AAiFgeg");
	var mask_graphics_158 = new cjs.Graphics().p("AmMPlQlShHhLk8IgBgBQhRkVCFmSQBhlLD3lXQAiguAigrQA1g9AwgxQA/hIAZgHQDbgMC5AdQC1AdCFBCQCCBABIBiQBIBjAGB/QADA7gOAoQgKAegdAjQgtAzgMAZQgmA3gfBKQgNAmgKBRQgCAmgRCSQgKBmgOBaQgbCjgvBrQhDCbhwBaQhBA5hJAmQiYBKjAAAQh5AAiLgdg");
	var mask_graphics_159 = new cjs.Graphics().p("AmzQ6QlwhKhMlXIAAgBQhRkqCWm2QBtlkEGl0QAjgyAkgvQA4hDA0g3QBDhQAZgIQDugODHAfQDEAeCPBHQCNBFBNBpQBOBrAECKQACBAgQAsQgLAgghAlQgzA3gOAaQgqA7gjBPQgQAogLBZQgDApgSCeQgMBtgQBhQgdCwgyB0QhGCph3BkQhEA/hQArQimBVjVAAQh/AAiRgeg");
	var mask_graphics_160 = new cjs.Graphics().p("AnaSQQmNhNhNl0IgBAAQhQk/CmnaQB6l9EUmRQAmg2AlgzQA8hJA3g9QBHhYAbgJQD+gPDWAgQDUAfCZBMQCYBKBSBxQBTBzADCUQAABGgRAuQgOAigkAoQg5A7gPAbQgvA/goBVQgRAqgNBgQgDAqgUCrQgOB2gRBoQgfC8g1B9QhLC2h9BvQhIBGhVAuQi0BhjtAAQiEAAiWgeg");
	var mask_graphics_161 = new cjs.Graphics().p("AoBTmQmqhRhOmPIgBAAQhPlUC1n+QCGmWEkmtQAog8Ang1QA/hRA5hCQBNhfAbgLQEQgRDlAiQDiAgCjBQQCjBQBXB4QBZB8ABCeQAABLgUAxQgPAkgoArQg+A+gSAcQgzBEgsBaQgTAtgPBmQgDAsgXC4QgOB/gTBuQgiDKg3CFQhPDEiDB5QhNBMhaAzQjDBskCAAQiKAAicgeg");
	var mask_graphics_162 = new cjs.Graphics().p("AooU7QnHhUhPmrIgBAAQhPloDGoiQCTmwEynKQAqg/Apg6QBChWA9hIQBRhoAcgLQEhgTD0AjQDxAiCtBVQCuBUBcCAQBeCEAACpQgBBQgWA0QgRAmgsAtQhDBDgUAdQg4BHgwBgQgUAvgRBuQgEAtgYDFQgQCHgUB1QglDWg6CPQhTDRiJCEQhRBShgA3QjRB4kaAAQiPAAihgfg");
	var mask_graphics_163 = new cjs.Graphics().p("ApPWRQnlhYhQnGIAAAAQhOl9DWpGQCenJFCnnQAshDArg9QBFheA/hNQBXhwAcgMQEzgVEDAlQD/AjC4BaQC5BZBgCIQBkCMgCCzQgBBVgZA3QgSAogwAwQhJBHgVAeQg9BLg0BmQgWAwgSB1IgfECQgSCOgVB8QgoDjg8CYQhYDfiOCOQhVBYhmA8QjfCDkwAAQiUAAiogfg");
	var mask_graphics_164 = new cjs.Graphics().p("Ap2XmQoChbhRnhIAAgBQhOmRDmpqQCrniFQoEQAuhHAthBQBJhkBChTQBbh4AdgNQFFgXERAmQEOAmDDBeQDDBeBmCQQBoCUgDC+QgBBagbA5QgUArgzAyQhPBLgXAfQhDBPg3BrQgZAzgTB8IghEQQgTCXgXCDQgqDvg/ChQhcDtiVCYQhZBehrBBQjuCOlFAAQiaAAiuggg");
	var mask_graphics_165 = new cjs.Graphics().p("AqdY8QofhfhSn8IAAgBQhNmmD2qOQC3n7FfohQAxhLAuhFQBMhqBFhZQBgiAAegOQFWgZEgAoQEdAnDNBjQDOBiBrCYQBuCcgFDJQgCBfgdA9QgWAsg3A1QhUBPgZAgQhHBTg8BxQgaA1gVCDIgkEfQgUCfgYCJQgtD8hCCqQhgD7ibCiQhdBlhxBFQj8CZlcAAQifAAi0ggg");
	var mask_graphics_166 = new cjs.Graphics().p("ArEaRQo8hihToYIAAAAQhMm7EGqzQDEoUFto9QAzhQAxhIQBOhxBJheQBkiIAfgPQFogbEuApQEsApDXBnQDZBoBwCfQBzCkgGDUQgDBkgfA/QgXAvg7A3QhaBTgbAhQhMBXg/B3QgdA3gWCKIgnEuQgVCngaCQQgvEJhFCzQhkEIihCsQhiBrh1BKQkKCllyAAQimAAi6ghg");
	var mask_graphics_167 = new cjs.Graphics().p("ArqbnQpahmhUozIAAgBQhLnPEWrWQDQouF8paQA1hUAzhLQBSh5BLhjQBpiQAfgQQF6gdE9ArQE6AqDiBsQDkBtB1CnQB4CsgHDeQgEBpghBDQgZAwg/A6QhgBXgcAiQhRBbhDB8QgeA6gYCRIgpE8QgXCwgbCXQgzEVhGC8QhpEWinC2QhmByh7BOQkYCwmIAAQirAAjAghg");
	var mask_graphics_168 = new cjs.Graphics().p("AsRc8Qp3hphVpPQhLnlEnr6QDcpHGLp3QA3hXA1hQQBVh+BOhqQBuiXAggSQGLgeFMAsQFJAsDsBxQDvBxB6CvQB+C0gJDpQgFBugjBFQgbAzhCA9QhmBbgeAjQhVBehICCQggA8gZCYIgsFLQgYC4gdCeQg1EihJDEQhtEkitDAQhqB5iBBSQkmC8mfAAQiwAAjGgig");
	var mask_graphics_169 = new cjs.Graphics().p("As4eSQqUhthWpqIAAgBQhKn5E3seQDopgGaqTQA5hcA3hTQBYiGBRhvQB0ifAggTQGdggFaAuQFYAtD2B1QD6B3B+C2QCEC9gKDzQgFB0gmBIQgcA0hHBAQhrBeggAlQhaBihMCHQghA/gbCfQgIA4gmEhQgaDBgeCkQg4EvhMDNQhxEyizDKQhuB/iGBXQk0DHm2AAQi2AAjMgig");
	var mask_graphics_170 = new cjs.Graphics().p("AtffnQqxhwhXqGIAAAAQhJoOFGtCQD1p5GpqxQA7hgA5hWQBbiNBUh0QB4inAhgUQGvgiFpAvQFmAvEBB6QEEB7CEC/QCJDEgMD+QgGB5goBKQgdA3hKBCQhxBjgiAlQhfBnhQCMQgkBBgbCmQgJA6gpEuQgaDJggCrQg6E8hPDWQh1FAi5DUQhzCFiLBbQlADTnNAAQi8AAjTgjg");
	var mask_graphics_171 = new cjs.Graphics().p("EgOFAg9QrOh0hYqhIAAgBQhJoiFWtmQECqTG3rNQA+hkA6haQBfiTBXh6QB9ivAhgVQHAgkF4AxQF1AwEMB/QEOCACJDGQCODNgNEIQgGB+gqBOQggA4hNBFQh3BngjAmQhlBqhTCTQgmBDgdCtQgKA7gqE8QgbDRgiCyQg9FIhRDfQh6FNi/DfQh3CLiRBgQlODenkAAQjBAAjYgjg");
	var mask_graphics_172 = new cjs.Graphics().p("EgOsAiSQrrh3hZq9QhIo3FmuKQEOqsHGrqQCnkRCRjOQCCi3AigWQHSglGGAyQGEAxEWCEQEZCFCODOQCUDVgPESQgHCDgsBRQghA7hSBHQh8BrglAnQhpBuhYCYQgnBFgfC0QgKA9gsFJQhTJpiBFmQjMI0mIEGQlcDpn6AAQjHAAjfgkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:22.8,y:-324.8}).wait(1).to({graphics:mask_graphics_150,x:18.1,y:-319.9}).wait(1).to({graphics:mask_graphics_151,x:13.8,y:-314.9}).wait(1).to({graphics:mask_graphics_152,x:10,y:-309.6}).wait(1).to({graphics:mask_graphics_153,x:6.2,y:-304.3}).wait(1).to({graphics:mask_graphics_154,x:2.3,y:-299}).wait(1).to({graphics:mask_graphics_155,x:-1.6,y:-293.7}).wait(1).to({graphics:mask_graphics_156,x:-5.5,y:-288.3}).wait(1).to({graphics:mask_graphics_157,x:-9.5,y:-283}).wait(1).to({graphics:mask_graphics_158,x:-13.5,y:-277.6}).wait(1).to({graphics:mask_graphics_159,x:-17.4,y:-272.3}).wait(1).to({graphics:mask_graphics_160,x:-21.4,y:-266.9}).wait(1).to({graphics:mask_graphics_161,x:-25.4,y:-261.6}).wait(1).to({graphics:mask_graphics_162,x:-29.5,y:-256.2}).wait(1).to({graphics:mask_graphics_163,x:-33.5,y:-250.8}).wait(1).to({graphics:mask_graphics_164,x:-37.5,y:-245.5}).wait(1).to({graphics:mask_graphics_165,x:-41.5,y:-240.1}).wait(1).to({graphics:mask_graphics_166,x:-45.6,y:-234.7}).wait(1).to({graphics:mask_graphics_167,x:-49.6,y:-229.4}).wait(1).to({graphics:mask_graphics_168,x:-53.7,y:-224}).wait(1).to({graphics:mask_graphics_169,x:-57.7,y:-218.6}).wait(1).to({graphics:mask_graphics_170,x:-61.7,y:-213.2}).wait(1).to({graphics:mask_graphics_171,x:-65.8,y:-207.9}).wait(1).to({graphics:mask_graphics_172,x:-69.9,y:-202.5}).wait(93));

	// 图层 8
	this.instance_19 = new lib.yld_4_4();
	this.instance_19.setTransform(-156,-312.9);
	this.instance_19._off = true;

	this.instance_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(149).to({_off:false},0).wait(116));

	// 图层 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_120 = new cjs.Graphics().p("Aj9ECQgngbATg6QBwlQEeisQD3CIiSEuQhxDpihAAQheAAhvhOg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AiMFCQhHgXhPhNIgXgWQgQgQgGgTQgHgWAAgUQgBgLAFgPIAAAAQAfhgA1hKQA8hCBKg1QCFhZCag5IAIgCQCOBZAWBzQAZCCiEChIgcAjQhWBnhVAeQgoASgrAAQgtAAgtgTg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AjLEwQhGgkhOhoIgXgbQgPgXgHgVQgIgbgCgUQgEgNAGgSIAAAAQAlhvBFhTQBOgzBegjQCrg4CrgdIAJgBQCoByAPCBQARCRi7CkIgmAjQh0BmhjAKQgXAEgXAAQhIAAhGgwg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AhBFwQhrAEhehaQhHgzhMiCIgWghQgQgcgHgXIgOg0QgGgNAHgVIAAgBQAriCBWhaQBggjBwgSQDSgXC7gCIAKABQDDCLAICQQAICijxCkQgXASgZARQiGBchrAAIgTgBg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AhzGSQh2gNhhhzQhGhBhLidIgVgnQgQgggHgZQgLgngHgUQgJgPAHgYIABgBQAxiTBmhhQBzgTCDgBQD4AKDMAZIALADQDdCkAACeQAACzknClQgcASgfAQQiHBNhsAAQggAAgdgGg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AilHFQiBgdhkiOQhGhPhJi3IgVgrQgQgngHgbQgMgtgKgVQgLgQAIgaIAAgCQA3ilB3hnQCFgECXARQEeAqDcA2IAMAEQD3C9gHCqQgJDGlcCmQgiASgjAQQiJBChtAAQg3AAgwgQg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AjYIAQiMgthmioQhFhdhJjQIgUgyQgQgtgIgeQgMgygNgWQgOgQAJgeIABgBQA8i2CIhvQCYAMCpAiQFFBMDsBQIAOAGQERDXgPC4QgRDXmTCnQgmARgpAQQiJA5huAAQhQAAhDgcg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AkLI7QiXg+hojCQhFhrhHjqQgKgegKgaIgYhSQgOg5gPgVQgQgSAKggIAAgCQBCjICZh1QCqAcC9AzQFrBsD8BsIAPAIQErDwgWDGQgZDonJCoQgsARguAQQiJAxhwAAQhoAAhWgpg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Ak+J0QiihNhrjdQhEh5hHkEIgSg+IgYhaQgQg+gRgWQgTgTALgjIAAgCQBIjZCqh8QC8ArDPBFQGSCNENCIIAQAIQFFEKgdDVQgiD4oACpQgvARg0AQQiIArhxAAQiDAAhog5g");
	var mask_1_graphics_129 = new cjs.Graphics().p("AlwKuQithehuj3QhEiHhFkeQgJglgJgfIgYhiQgRhEgUgWQgVgUALgmIABgDQBNjqC7iDQDOA7DjBWQG4CuEdCjIARALQFgEhglDkQgrEKo1CpQg1ARg5AQQiHAnhyAAQieAAh5hJg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AmjLnQi4huhwkRQhEiVhEk5IgRhJQgPhFgKglQgRhKgXgXQgYgVANgpIAAgCQBTj7DMiKQDhBKD1BnQHeDQEuC+IASAMQF6E6gsDzQgzEapsCrQg5ARg+APQiHAihyAAQi7AAiKhZg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AnWMgQjDh+hyksQhEijhDlTQgIgsgJgjQgPhKgJgoQgThQgZgXQgbgVAOgsIAAgDQBZkNDdiQQDyBZEJB5QIFDwE+DaIATAOQGUFTgzECQg8EqqiCsQg+AQhDAQQiFAehyAAQjYAAichqg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AoJNYQjOiOh0lGQhEixhBluIgRhVQgOhPgKgqQgVhWgbgXQgdgXAOgvIABgDQBekdDuiYQEFBpEcCKQIqESFPD1IAUAPQGuFtg6EPQhEE8rYCsQhEARhIAPQiEAchxAAQj1AAiuh9g");
	var mask_1_graphics_133 = new cjs.Graphics().p("Ao8ORQjZifh3lfQhDjAhAmIIgQhbQgPhVgKgrQgWhcgdgYQgggYAPgxIABgEQBkkvD+ieQEYB5EuCbQJSEyFfERIAVARQHIGGhBEeQhNFMsOCtQhIARhOAOQiDAZhxAAQkSAAi/iOg");
	var mask_1_graphics_134 = new cjs.Graphics().p("ApvPIQjkiuh5l6QhDjOg/miIgPhgQgPhcgLgtQgWhigggXQgjgZAQg1IABgEQBqlAEPilQEpCIFCCtQJ4FTFwEsIAWASQHiGghJEsQhVFdtECuQhNAQhUAPQiAAXhwAAQkxAAjQiig");
	var mask_1_graphics_135 = new cjs.Graphics().p("AqiQBQjvi/h7mUQhDjcg+m9QgYixgQhFQgYhogigYQgngbATg6QBwlSEgisQE8CYFVC+QKeF0GAFIQIWHFhTFCQhmGPwcCsQh9AVhyAAQlOAAjii0g");
	var mask_1_graphics_136 = new cjs.Graphics().p("ApfQ4IgFgDQkKieirlsQgQgfgPglQhOicg2ksQgNhHgMhRQgai2gQhXQgXhrgggiQgkggASg9IAAgBQA1i5BiiYQBXh3B9hxIANgKQBdAUBdAmQAuAIAsAWQBgAxBxARICSAzIBUAeQA1AXBAAaQBkAxBnAxQBnA3BrA1QBNAlA8AjQDqCFC1CHQA3ApAyApQDqDDBvC1QBsC6gYClQgHAsgRAqQhFC1jzCSQivBykOBdQiWA2i1AuQh1AehuANQhBAHhBAAQkWAAjXh9g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AodRtIgGgDQkph9jblHQgVgdgVghQhuiMhDlDQgPhOgOhWIgskiQgWhvgegtQghglAQhBIAAgBQAyjEBdiuQBRh4B1iSIAMgNQBYgGBXAYQAqgIAlATQBYAsB4gYICQAVIBUAMQAyAQBMAUQBoArB5AsQBrAyB8AvQBaAhA8AdQEDB6DLCFQA9ApA4ApQECDCCBDGQB6C/gKCyQgEAvgNAuQg0DKjlCsQilCRkNB6QiYBIi5A+Qh4Aqh0AZQiAAXh6AAQjfAAjAhOg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AncS+IgHgCQlIhckLkjQgagZgbgdQiOh8hPlbQgThSgOhfQgei9gQh6QgVhygcg3QgfgrAPhEIAAgBQAujQBXjDQBLh7BviyIALgOQBTgiBPALQAngYAfAPQBPAoB+hBICPgJIBTgGICIAXQBtAkCJAnQBzAtCKApQBnAdA8AYQEbBuDiCEQBEAoA9AqQEZDCCVDSQCIDIADC/QAAAzgKAxQgjDejWDHQicCvkNCXQiZBbi9BPQh7A0h6AlQjHAxi2AAQipAAidgqg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AmdU0IgHgBQlmg7k8j/QgggVgggbQivhqhbl0QgVhXgQhlQgfjEgRiJQgUh2gahBQgbgwANhJIAAAAQApjcBSjYQBFh9BojTIALgQQBNg8BIgDQAjgoAaALQBGAkCEhqICNgoIBTgYQAuABBkAJQBxAfCaAhQB4AoCbAkQB0AYA8ATQE0BjD4CCQBKAoBDApQEwDCCpDgQCVDPARDPQADA0gGA0QgRD0jIDiQiTDLkNC1QiaBujBBfQh+BAiAAvQkSBYj/AAQhwAAhtgRg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AlfWmIgIAAQmFgblsjZQglgTglgWQjQhbhnmLQgXhcgThsQggjIgSidQgTh3gXhLQgZg2AMhMIAAgBQAmjnBMjuQA+h/BijzIAKgSQBHhXBBgRQAhg4ATAIQA+AfCJiTICMhGIBSgqQAtgHBvAEQB2AZCqAcQB+AiCtAfQCAATA8AOQFNBXEOCCQBPAnBKApQFGDBC9DuQCiDWAfDeQAHA4gDA5QAAEFi5D9QiKDqkMDSQibCAjFBwQiCBLiGA7QliCIlXAAQgvAAgwgDg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AkrYWQmkAHmdi2QgqgPgqgSQjwhLh0miQgahhgUhzQgijNgSiuQgSh8gVhWQgWg5AKhRIAAAAQAijyBGkDQA5iCBbkUIAJgUQBChyA6geQAdhHANAEQA2AaCPi8ICLhkIBRg8QAqgOB7gCQB7ASC7AXQCCAeC/AZQCNAPA8AIQFlBMEkCAQBWAnBPApQFeDADRD8QCvDdAtDsQAKA7ABA9QAREairEXQiBEIkLDvQicCTjKCBQiEBWiNBGQmeC5mkAMIgIgBg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AyBYZQgvgMgwgPQkRg6iAm7QgchlgWh6QgkjRgSjAQgRiAgThgQgUhBAKhTIAAgBQAdj7BBkZQAziEBUk0IAIgWQA9iNAzgsQAZhXAIAAQAsAWCWjlICJiCIBRhOQAogWCHgGQB/AMDLARQCIAYDPAUQCcAKA7ADQF+BBE6B+QBcAmBVArQF1C/DkEJQC9DkA6D7QAOA+AFBAQAhEvicEyQh4ElkKEMQieCmjNCRQiIBiiTBRQmoDXnDAsIgJABQhiAIhiAAQljAAlphxg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AyZbDQg0gIg1gMQkxgpiMnTQgghqgXiAQgljWgTjSQgQiDgQhqQgShHAJhWIAAgBQAZkHA7kvQAtiFBNlVIAIgYQA3ioAsg5IAXhrQAkARCckOICIigIBQhfQAmgfCTgLIFfASQCOATDfAOQCpAGA9gDQGUA2FRB9QBiAlBbArQGMC/D4EXQDKDqBIEKQARBBAJBDQAyFGiNFLQhvFDkKEpQifC4jRCiQiLBtiZBdQmzD0njBOIgJABQjBAejGAAQknAAkyhCg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AyxdoQg5gFg7gIQlRgZiZnrQgihvgYiGQgojbgSjjQgPiHgPh1QgPhLAHhbIAAAAQAWkTA1lEQAniIBHl1IAGgZQAzjDAkhHQATh4gFgHQAcANChk3ICHi/IBPhwQAkgnCegQQCJAADsAGQCTAPDwAIQC3ACA8gJQGtAqFnB8QBoAlBhArQGjC+EMEkQDXDyBWEYQAVBEAMBHQBDFah/FmQhlFhkKFGQifDLjWCzQiOB4ifBoQm+ESoCBvIgKABQkxA/lAAAQjbAAjjgdg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EgTLAgLQg+gChAgEQlygJiloDQgkhzgbiNQgpjggTj0IgakKQgMhRAGheIAAAAQARkgAwlYQAhiKBAmWIAFgbQAtjeAehUQAPiIgLgKQATAHColgICFjcIBPiDQAhguCrgVQCNgHD8ABQCZAKEBACQDDgCA9gPQHGAfF8B7QBuAkBoAsQG6C9EfEyQDkD5BlEmQAYBHAPBLQBVFuhxGBQhcF/kJFjQihDejZDDQiSCDilB0QnIEwoiCPIgLADQmxBunYAAQh5AAh8gHg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgVvAixQmTAIiwobQgnh4gdiUQgqjkgUkGQgNiNgJiKQgKhWAEhiQAOksAqltQAbiMA5m3IAFgdQAnj4AXhiQAMiYgRgOQAKADCumJICDj7IBPiUQAgg2C2gbQCRgMENgEQCeAEESgDQDQgHA9gUQHfAUGSB5QB0AkBuArQHRC9EzFAQDxD/BzE1QAbBKATBOQBmGEhiGbQhTGdkJGBQiiDwjdDTQiVCPirB/QnTFOpCCwIgLADQo+CsqPABIhSAAIg3AAg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EggGAc8Qgqh9geiaQgsjpgUkYQgMiRgHiTQgHhcADhmQAJk3AlmDQAUiOAznXIAEgfQAikUAPhvQAJiogXgRQACgCCzmyICDkZIBNimQAeg9DCggQCWgTEdgKQCkgBEigIQDegMA9gZQH3AJGpB4QB6AjB0AsQHnC8FHFNQD/EGCAFDQAfBOAXBRQB3GZhUG4QhKG4kIGeQijEDjiDkQiYCaixCKQneFspiDRIgMAEQpbDNq/AlQhJAFhLACIgjACQmYAAi1ocg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EghbAfaQgsiCggihQgujugUkoQgLiVgFieQgEhhABhqQAGlCAfmZQAPiQAsn3IADghQAckvAJh9QAFi4gdgUQgHgHC6nbICAk3IBOi4QAbhFDOglQCbgZEtgPQCpgGEzgOQDrgQA9gfQIQgDG/B3QCAAjB6AsQH/C8FaFaQEMEOCOFRQAiBRAbBVQCIGshFHTQhBHXkIG7QikEVjmD1QibCli3CWQnpGJqCDzIgMAEQp6DtrwBKQhOAIhQAHQgeADgdAAQmmAAi8olg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EgixAh4QinneAFuQQABlOAamwQAIiRAmoYQAZllABiRQACjIgjgZQgPgLC/oEQBhkEBrkbQAahMDZgrQCggfE9gUIHzgfQD4gUA9glQLHgSI8DIQIWC7FuFoQFdFXCcHKQCZHBg2HuQg4H0kHHYQkUHwnXGPQn4GrqqEVQreEruDBnQgqAEgpAAQmzAAjEoug");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_1_graphics_120,x:102.5,y:-740.3}).wait(1).to({graphics:mask_1_graphics_121,x:109,y:-732.7}).wait(1).to({graphics:mask_1_graphics_122,x:115.6,y:-724.5}).wait(1).to({graphics:mask_1_graphics_123,x:122.3,y:-715.9}).wait(1).to({graphics:mask_1_graphics_124,x:129,y:-708.6}).wait(1).to({graphics:mask_1_graphics_125,x:135.8,y:-703}).wait(1).to({graphics:mask_1_graphics_126,x:142.5,y:-698.2}).wait(1).to({graphics:mask_1_graphics_127,x:149.3,y:-693.4}).wait(1).to({graphics:mask_1_graphics_128,x:156.1,y:-688.5}).wait(1).to({graphics:mask_1_graphics_129,x:162.8,y:-683.6}).wait(1).to({graphics:mask_1_graphics_130,x:169.6,y:-678.6}).wait(1).to({graphics:mask_1_graphics_131,x:176.4,y:-673.6}).wait(1).to({graphics:mask_1_graphics_132,x:183.1,y:-668.6}).wait(1).to({graphics:mask_1_graphics_133,x:189.9,y:-663.6}).wait(1).to({graphics:mask_1_graphics_134,x:196.7,y:-658.5}).wait(1).to({graphics:mask_1_graphics_135,x:203.5,y:-653.4}).wait(1).to({graphics:mask_1_graphics_136,x:200.8,y:-642.1}).wait(1).to({graphics:mask_1_graphics_137,x:198.3,y:-630.5}).wait(1).to({graphics:mask_1_graphics_138,x:195.9,y:-621.8}).wait(1).to({graphics:mask_1_graphics_139,x:193.6,y:-616.7}).wait(1).to({graphics:mask_1_graphics_140,x:191.5,y:-611.2}).wait(1).to({graphics:mask_1_graphics_141,x:189.5,y:-605.5}).wait(1).to({graphics:mask_1_graphics_142,x:187.8,y:-599.4}).wait(1).to({graphics:mask_1_graphics_143,x:186.2,y:-592.6}).wait(1).to({graphics:mask_1_graphics_144,x:184.7,y:-585.2}).wait(1).to({graphics:mask_1_graphics_145,x:183.3,y:-577.6}).wait(1).to({graphics:mask_1_graphics_146,x:182.1,y:-570.3}).wait(1).to({graphics:mask_1_graphics_147,x:181.1,y:-562.2}).wait(1).to({graphics:mask_1_graphics_148,x:180.1,y:-554.2}).wait(1).to({graphics:mask_1_graphics_149,x:179.2,y:-546.2}).wait(116));

	// 图层 6
	this.instance_20 = new lib.yld_4_3();
	this.instance_20.setTransform(-15,-740);
	this.instance_20._off = true;

	this.instance_20.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(120).to({_off:false},0).wait(145));

	// 图层 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_93 = new cjs.Graphics().p("AkiDMQiQhHBnh+QCzjbEOg4QGcAnj5E/QiLCzi6AAQhyAAiEhBg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AgeFKQgOgBgUgDQgjgFglgKQhSgXhTguQgQgJgOgJQh2hTBViCQBciOCOhmQBshNCBgTIAMgCQBmAMBHAlQA9AbAcA3QAuBUg9CEQgTAsgeAwQggA2gjAqQgsA6gzAbQhGArhSAAQgPAAgSgCg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AgKGGQgOgBgYgFQgpgIgogMQhegfhag1QgSgLgPgLQiBhhBOiSIAAAAQBUikCbiDQB2hkCSgNIANgBQBvAQBUAyQA9AdAeBJQAwBgg4CWQgRA0gbA2QgdBAgiAyQgpBLg0AeQhGAyhVAAQgaAAgagFg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AAIHCQgMgBgdgIQgtgKgtgPQhpglhgg+QgTgMgRgOQiMhvBGihIAAgBQBMi4CpihQCAh7CjgGIAOgBQB4ATBfA/QA+AgAhBZQAwBvgxCmQgOA8gaA9QgaBJggA7QgnBcg0AhQhIA5haAAQghAAglgIg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AAdH+QgOgCgggJQgxgNgxgSQh1gshnhFQgVgPgSgPQiXh9A/iyIAAAAQBEjOC2i+QCKiSC0AAIAPAAQCBAWBrBNQA/AiAjBqQAyB8grC3QgNBEgXBDQgYBTgdBDQglBtg0AkQhNBBhfAAQgoAAgrgLg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AAxI6QgOgCgkgMQg3gPg0gUQiBg0hthNQgXgQgTgRQiiiMA4jCIAAAAQA8jiDCjcQCVipDEAGIARABQCKAZB3BaQBAAkAlB8QAzCJgmDIQgKBMgUBKQgWBdgbBLQgjB+g0AnQhRBJhlAAQguAAgygPg");
	var mask_2_graphics_99 = new cjs.Graphics().p("ABGJ2QgOgCgrgOQg5gRg5gXQiMg7h0hVQgYgSgVgTQitiaAxjSIAAAAQA0j4DPj5QCfjADVANIASABQCTAdCDBnQBAAnApCMQAzCXgfDZQgIBTgSBRQgTBmgaBUQggCPg1AqQhVBRhrAAQgzAAg5gTg");
	var mask_2_graphics_100 = new cjs.Graphics().p("ABaKyQgNgCgwgQQg+gUg9gaQiXhBh7hdQgZgUgXgVQi4ioAqjiIAAAAQArkNDdkWQCqjYDlAUIAUACQCcAgCOB0QBBApArCdQA1ClgaDpQgGBcgQBXQgQBwgXBcQgeCgg2AtQhYBZhxAAQg6AAhAgXg");
	var mask_2_graphics_101 = new cjs.Graphics().p("ABvLvQgOgDgzgSQhDgWhBgdQijhIiChlQgbgWgYgXQjCi2AijyIAAgBQAjkhDqk0QC0juD2AZIAVADQClAjCbCCQBBArAtCvQA2CygTD6QgEBjgOBeQgNB6gWBkQgbCyg2AvQhdBhh4AAQg/AAhGgag");
	var mask_2_graphics_102 = new cjs.Graphics().p("ACEMrQgOgDg4gUQhIgZhFgfQiuhPiIhtQgdgYgagZQjNjEAbkCIAAgBQAbk2D3lRQC+kGEHAgIAWADQCuAnCnCPQBCAuAwC/QA3DAgOELQgBBrgMBkQgKCEgUBsQgZDDg3AyQhhBph/AAQhEAAhMgeg");
	var mask_2_graphics_103 = new cjs.Graphics().p("ACYNnQgNgDg9gWQhOgchHghQi6hXiPh1QgfgagbgbQjYjSAUkRIAAgBQATlMEElvQDIkcEYAnIAYADQC3AqCyCcQBCAxAzDPQA4DOgHEcQAABygJBrQgICOgSB1QgWDTg4A2QhmByiFAAQhJAAhTgjg");
	var mask_2_graphics_104 = new cjs.Graphics().p("ACsOkIhPgcQhTgehLgkQjFheiWh9QgggbgdgdQjijgAMkiIAAgBQALlgERmNQDSkzEpAtIAZAEQDAAtC+CqQBDAyA1DhQA5DbgBEtQADB6gHBxQgFCYgQB9QgVDlg3A4QhqB6iNAAQhOAAhZgmg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AC/PgIhTgeQhXgghQgnQjQhliciFQgigdgfgfQjtjuAFkyIAAgBQADl1EemqQDdlLE5A0IAaAEQDJAxDKC2QBEA2A3DxQA7DpAFE+QAECCgEB3QgDCigOCGQgSD1g4A7QhvCCiTAAQhTAAhggqg");
	var mask_2_graphics_106 = new cjs.Graphics().p("ADTQdIhYghQhcgjhUgpQjbhsikiNQgjgfggghQj4j8gClCIAAgBQgGmLEsnHQDmlhFLA5IAbAGQDSAzDWDEQBEA4A6EDQA8D2ALFOQAGCKgCB+QAACrgMCPQgPEGg5A+Qh0CLiZAAQhZAAhlgug");
	var mask_2_graphics_107 = new cjs.Graphics().p("ADlRZIhcgjQhiglhXgsQjnhziqiVQglghgigjQkCkKgJlSIAAgCQgOmfE4nlQDxl4FbBAIAdAGQDbA3DiDRQBEA6A9EUQA9EEAQFfQAJCSABCEQACC1gKCXQgNEYg5BBQh5CSigAAQheAAhrgyg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AD2SWIhgglQhmgohbgvQjzh6ixidQgngjgigkQkOkZgQliIAAgBQgWm0FFoDQD8mPFrBGIAeAHQDkA6DuDfQBFA8A/ElQA+ERAXFwQALCaADCLQAFC/gICeQgLEpg6BEQh9CaioAAQhiAAhyg1g");
	var mask_2_graphics_109 = new cjs.Graphics().p("AEITSIhlgnQhrgrhfgxQj+iBi3ilQgpglgkgmQkZkngXlyIAAgBQgfnJFTogQEGmnF8BNIAgAHQDsA+D6DrQBGBABCE1QA+EfAdGBQAOChAECSQAIDIgGCoQgIE5g6BHQiCCjivAAQhnAAh4g6g");
	var mask_2_graphics_110 = new cjs.Graphics().p("AEZUPIhpgqQhwgthjg0QkKiIi+itQgqgngmgoQkjk1gfmCIAAgCQgmneFgo9QEQm9GNBTIAgAHQD2BBEGD5QBGBCBEFGQBAEsAjGTQAQCpAHCYQAKDSgECwQgGFLg7BJQiGCri1AAQhtAAh+g9g");
	var mask_2_graphics_111 = new cjs.Graphics().p("AEqVLQgMgGhigmQh0gwhng2QlTivjajoQkvlDglmUQgvnzFtpbQEanUGeBaQEOA6EkEYQBHBEBHFXQBBE6ApGjQAqGngEE9QgEFcg7BMQiLCzi8AAQhyAAiEhBg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AFRWYQgwgPg4gmQgOgLhcgrIg+giQhMgqhIguQjLh+igiWQhehWhOhdQiQishTi2QhcjQgMjAIAAgBQgFiGAdiOQAgidBFilQBpjyCxj4QA5hOA9g+QEXkdFXBRIAOAEQEUBJEQElQAeAhAeBQQAqBzAhDGQA1FDACGsQABB4gDByQgBEWgeDoQgFA4gIAxQgiD9g0BCIgYAdQiDCZiuAAQhIAAhQgag");
	var mask_2_graphics_113 = new cjs.Graphics().p("AD0W5QgtgPg6gvQgPgRhVgvQgfgTgcgVQhJgyhGg1QjAiOibinQhbhfhLhiQiMi6hQi7QhfjmgGi2IAAgBQACiHAqiQQAsidBUiiQCAjwDEjpQBAhLBEg6QExkLFaBbIAOAEQEgBUEEE3QAeAnAdBQQArB7AbDIQApFNgmG0QgIB5gQB0QgXESg4DuQgLA3gMAyQg6D6g2BEIgZAeQiECcivAAQhOAAhWgfg");
	var mask_2_graphics_114 = new cjs.Graphics().p("ACNXbQgqgOg7g6QgSgWhMgzQgdgXgdgZQhGg4hDg8Qi1ieiWi4QhXhnhIhoQiIjIhPi/Qhij8ABitIAAgBQAKiJA3iSQA3icBiifQCYjvDWjaQBHhGBLg3QFLj4FeBiIAPAFQEsBfD3FLQAeArAcBQQAtCEATDJQAdFXhMG9QgTB6gbB2QgtEOhUD0QgQA2gRAzQhQD3g5BGIgZAeQiFCgiwAAQhUAAhdgkg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AAiX9QglgNg7hEQgUgbhIg4Ig4g2QhCg/hAhEQiriuiRjJQhThwhFhtQiEjWhNjEQhmkSAIijIAAAAQASiLBDiUQBEicBwicQCwjtDojMQBOhBBSgzQFljnFhBsIAQAEQE4BrDrFeQAeAvAaBQQAvCNAMDLQARFghzHGQgdB7gnB5QhDEJhvD6QgVA2gXAzQhnD1g7BHIgaAfQiFCiizAAQhYAAhkgog");
	var mask_2_graphics_116 = new cjs.Graphics().p("AhJYgQgjgNg9hOQgVghhCg7QgagdgbggQg/hHg8hKQihi+iMjaQhPh4hChzQiAjkhLjJQhpkoAOiZIAAgBQAZiMBQiVQBQicB/iaQDHjrD6i8QBVg+BZgvQGBjUFjBzIAQAGQFFB1DeFxQAdA1AbBPQAvCWAFDMQAFFqiaHOQgnB8gyB8QhZEFiLD/QgaA2gbAzQh/Dyg+BKIgaAfQiGCmi0AAQheAAhpgtg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Ai2ZDQgggNg+hYQgXgmg7hAIgzhDQg7hOg6hSQiWjNiIjsQhKiAhAh5Qh7jxhJjOQhtk/AViOIAAgBQAgiNBdiYQBdibCNiXQDejqENitQBcg6BggrQGbjCFmB8IAQAGQFRCADTGEQAdA6AZBPQAwCegBDPQgHFzjCHXQgxB9g9B+QhwEBilEEQgfA2ghA0QiWDvhABMIgbAgQiHCoi2AAQhhAAhxgxg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AkjZmQgdgMg/hiQgagrg0hEIgwhLQg4hUg3hZQiLjeiDj9QhHiIg8h/Qh3j/hIjQQhwlYAciEQAoiPBqiaQBoibCbiUQD2joEfifQBjg1BmgoQG3ivFpCEIARAGQFdCMDGGXQAcA+AZBPQAyCngJDQQgTF9joHgQg8B+hJCAQiFD9jBEKQgkA1gmA1QisDthDBNIgbAhQiICsi2AAQhpAAh3g3g");
	var mask_2_graphics_119 = new cjs.Graphics().p("AmRaKQgagMhAhsQgbgxguhIIguhRQg0hbg0hhQiBjth+kOQhDiRg5iEQhzkNhFjVQh0lvAih5IAAgBQAviQB3ibQB1ibCpiSQEOjmExiQQBqgxBtgkQHSidFsCNIAQAHQFqCWC6GqQAcBDAXBPQA0CwgQDSQgfGGkQHpQhFB+hVCDQibD5jcEQIhUBpQjEDqhFBQIgcAhQiKCwi4AAQhtAAh9g8g");
	var mask_2_graphics_120 = new cjs.Graphics().p("AoAauQglgSiilKQinlSiqmUQjDnShllFQh3mGAphvQA3iSCDidQCBibC4iPQGLk0HCh+QH5iOF0CfQGxC7CkI7QCyJsqlOmQjTEjk0FQQkVElgqA2QiICzi9AAQhyAAiEhBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_2_graphics_93,x:-3.9,y:-496}).wait(1).to({graphics:mask_2_graphics_94,x:-7.2,y:-502.4}).wait(1).to({graphics:mask_2_graphics_95,x:-10.5,y:-508.8}).wait(1).to({graphics:mask_2_graphics_96,x:-13.8,y:-515.2}).wait(1).to({graphics:mask_2_graphics_97,x:-17.2,y:-521.5}).wait(1).to({graphics:mask_2_graphics_98,x:-20.6,y:-527.9}).wait(1).to({graphics:mask_2_graphics_99,x:-24,y:-534.3}).wait(1).to({graphics:mask_2_graphics_100,x:-27.4,y:-540.7}).wait(1).to({graphics:mask_2_graphics_101,x:-30.8,y:-547.1}).wait(1).to({graphics:mask_2_graphics_102,x:-34.2,y:-553.5}).wait(1).to({graphics:mask_2_graphics_103,x:-37.6,y:-559.8}).wait(1).to({graphics:mask_2_graphics_104,x:-40.9,y:-566.3}).wait(1).to({graphics:mask_2_graphics_105,x:-44.2,y:-572.7}).wait(1).to({graphics:mask_2_graphics_106,x:-47.4,y:-579.1}).wait(1).to({graphics:mask_2_graphics_107,x:-50.6,y:-585.5}).wait(1).to({graphics:mask_2_graphics_108,x:-53.7,y:-591.9}).wait(1).to({graphics:mask_2_graphics_109,x:-56.8,y:-598.3}).wait(1).to({graphics:mask_2_graphics_110,x:-59.8,y:-604.7}).wait(1).to({graphics:mask_2_graphics_111,x:-62.9,y:-611.1}).wait(1).to({graphics:mask_2_graphics_112,x:-57.3,y:-615}).wait(1).to({graphics:mask_2_graphics_113,x:-49.1,y:-618.8}).wait(1).to({graphics:mask_2_graphics_114,x:-40,y:-622.6}).wait(1).to({graphics:mask_2_graphics_115,x:-30.5,y:-626.5}).wait(1).to({graphics:mask_2_graphics_116,x:-20.8,y:-630.5}).wait(1).to({graphics:mask_2_graphics_117,x:-11.1,y:-634.4}).wait(1).to({graphics:mask_2_graphics_118,x:-1.3,y:-638.4}).wait(1).to({graphics:mask_2_graphics_119,x:8.5,y:-642.5}).wait(1).to({graphics:mask_2_graphics_120,x:18.3,y:-646.6}).wait(145));

	// 图层 4
	this.instance_21 = new lib.yld_4_2();
	this.instance_21.setTransform(-89,-752.7);
	this.instance_21._off = true;

	this.instance_21.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(93).to({_off:false},0).wait(172));

	// 图层 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ABqNIQj2gahRkDQhUkPgtkaQg1lMA+lLQAfikCtgRQErALBWFHQCJIFgKIkQgFEajfAAQgUAAgVgDg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ABqNIQj2gahRkDQhUkPgtkaQg1lMA+lLQAfikCtgRQErALBWFHQCJIFgKIkQgFEajfAAQgUAAgVgDg");
	var mask_3_graphics_55 = new cjs.Graphics().p("ABLNdQgugKgngTQifhEhAjMIgIgbQgOgygNgzIgQhAQgZhegWhvQgZh8gRhmQgDgUgBgUQgCgjAAgjQgChiAJhgQAMhyAYhrQAQhGAVhDQAThCAuglQA3gwBfADQAmAGAjALQBBATA1AqQAsAmAkAtQA5BNAgB0IAJAjQAqC4AZC3QAaDPADDIQgBClgUCVIgEAiQgSDsiuAAQgoAAgxgNg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AAtNxQgtgPglgYQibhTg9jdIgIgdQgNg1gMg4QgIgngIgdQgZhegYh/QgbiOgQhkQgDgUABgXQgBgkADglQAGhnAUhhQAYhzAkhmQAXhCAcg8QAZg9AygdQA7gpBcAQQAjAJAhAQQBBAYAyA0QAqAtAjAuQA2BWAfB8IAJAnQAnDHAUDDQAUDigGDPQgNCyglCOIgJAfQgbDFiMAAQg2AAhHgeg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AAPOEQgqgUgmgeQiXhhg6jtIgHgfQgNg4gLg9QgHgsgIgdQgahfgZiOQgeihgPhhQgDgVACgZQACgmAGgnQAOhrAehiQAkh1AwhfQAgg/Aig1QAfg3A2gWQA+giBYAdQAkANAgAVQA+AdAvA8QAoA2AhAvQA1BeAdCFIAIApQAkDXARDOQAOD2gQDXQgZC+g3CGIgMAdQgjCkhyAAQhBAAhag1g");
	var mask_3_graphics_58 = new cjs.Graphics().p("AgPOWQgsgZglgjQiRhvg4j/IgHggQgMg8gKhBQgHgwgIgeQgahfgbieIgukSQgEgWAFgaQADgoAJgoQAWhwAohjQAyh3A7haQAng7AqguQAkgxA7gPQBBgbBVAqQAjARAfAaQA8AiAsBFQAlA+AfAxQA0BmAbCNIAHAsQAiDmANDYQAIEMgaDeQglDKhIB+IgRAbQgnCIhfAAQhKAAhohRg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AgxOoQgqgegkgpQiNh+g0kPIgHgiQgLg/gKhGQgGg1gIgdQgbhggdisIgvkjQgEgXAGgdQAFgpANgqQAeh0AyhkQA+h4BHhVQAvg3AxgoQAqgqA/gIQBCgVBVA3QAiAWAdAeQA5AnAqBNQAiBHAfAyQAxBuAaCWIAHAuQAfD3AIDjQACEfgjDmQgxDWhaB3IgVAZQgrBvhRAAQhRAAh3hwg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AhTO4QgpgjgkguQiIiMgxkgIgHgkQgKhCgJhLQgGg6gIgdQgbhggei8IgykzQgDgXAIgfQAGgrARgsQAlh5A9hlQBKh5BThPQA3g0A3ghQAwgkBBgBQBIgNBSBEQAhAZAcAiQA3AtAmBWQAgBPAdAzQAwB3AYCeIAGAxQAdEGAEDvQgEEzgtDtQg9DihrBwQgNAMgMAKQgtBbhGAAQhaAAiCiUg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Ah2PJQgogpgigzQiEibgukwIgGgmQgKhFgJhQQgFg+gIgdQgbhhggjMIgzlCQgEgYAKghQAJgtATguQAuh9BGhmQBXh7BfhJQA+gwA/gaQA1gfBGAHQBLgHBPBRQAgAdAbAnQA0AyAkBfQAdBXAcA1QAuB+AWCnIAGA0QAaEWAAD6QgKFGg3D1QhIDuh9BoQgPAMgPAJQgtBJg+AAQhjAAiMi6g");
	var mask_3_graphics_62 = new cjs.Graphics().p("AiZPaQgngughg4Qh/ipgrlCIgGgoQgJhIgIhVQgFhCgIgdQgbhigijbIg0lSQgEgZALgjQALguAWgxQA2iABQhoQBkh8BrhEQBGgtBFgTQA5gYBMAOQBOAABOBeQAeAhAaAsQAxA3AhBnQAbBgAbA2QAsCGAUCvIAGA3QAXEmgFEFQgPFahBD9QhUD6iPBhQgRALgQAGQgtA7g3AAQhsAAiWjjg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Ai8PsQgmgzggg9Qh6i4gplTIgFgpQgJhMgHhZQgEhIgIgcQgchggkjtIg1liQgEgaANglQAMgvAagzQA+iFBahpQBxh+B2g+QBOgpBKgMQBBgSBQAVQBSAHBKBrQAeAlAYAwQAvA9AeBvQAYBoAaA4QAqCOATC3IAFA6QAVE2gJEQQgWFuhKEEQhgEHihBZQgTAKgSAFQgsAugxAAQh3AAidkOg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AjgP9Qglg4gfhCQh2jHglljIgFgrQgIhPgHheQgEhMgIgdQgchgglj9Ig3lyQgEgaAPgnQAOgxAdg1QBGiJBkhqQB9iACCg4QBWglBRgGQBHgMBUAcQBVAPBIB3QAdApAWA1QAtBCAbB4QAWBwAYA5QAoCXASC/IAEA9QASFFgNEcQgcGChUELQhrETiyBRQgWAKgUAEQgpAjgsAAQiEAAijk8g");
	var mask_3_graphics_65 = new cjs.Graphics().p("AkEQOQgkg8gehIQhxjVgjl0IgEgtQgIhSgFhjQgEhRgIgbQgchignkNIg5mBQgEgcAQgpQARgyAgg3QBNiOBvhqQCKiBCOgzQBdgiBYACQBMgGBZAjQBYAVBGCEQAcAuAVA5QAqBHAYCBQATB4AXA6QAnCfAPDIIAEBAQAQFSgSEqQghGVheETQh4EfjDBKQgYAIgWADQgmAagoAAQiSAAinlrg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AkpQhQgjhCgchNQhtjkggmFIgEguQgHhVgFhoQgDhUgIgcQgchkgpkcQgwlPgKhCQgFgcATgrQASg0Ajg5QBWiSB5hsQCWiCCZguQBkgdBhAIQBSAABcAqQBcAcBDCSQAbAxATA9QAoBNAVCJQARCCAWA7QAkCnAODQIAEBDQANFigWE1QgoGphnEaQiDErjWBDQgZAHgYACQgjATgjAAQiiAAirmcg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AlNQ0QgihGgchTQhojygdmWIgDgwQgHhYgEhtQgDhYgIgdQgdhkgqksQgyligKg+QgEgdAUgtQAUg2Ang7QBdiWCDhtQCjiEClgoQBsgaBnAPQBYAGBhAyQBeAjBBCeQAaA1ASBCQAlBSATCSQAOCKAUA8QAjCvANDZIADBFQAKFygaFBQguG9hxEhQiPE3jnA7QgcAHgZAAQgfANgfAAQizAAitnOg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AlzRIQgghMgbhYQhkkAgZmnIgEgyQgFhbgEhwQgChegIgdQgdhkgsk8Qg0l1gKg7QgEgeAWgvQAVg4Arg8QBlibCNhuQCwiFCwgjQB0gWBuAWQBeAMBlA5QBiAqA+CrQAZA5ARBHQAiBWAQCbQAMCSATA+QAhC3AKDiIADBIQAHGBgeFMQgzHRh7EpQibFDj5A0QgeAFgbgBQgaAIgaAAQjGAAiwoBg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AmYRcQgghRgZheQhgkPgWm3IgDg0QgFhegDh1QgChjgIgcQgdhlgulMIg/nAQgFgeAYgxQAYg6Atg+QBtifCYhvQC8iHC8gdQB7gSB2AcQBjASBpBBQBlAwA9C4QAXA9AQBMQAgBcAMCjQAKCaARA/QAgDAAJDqIACBKQAFGSgjFXQg5HkiFExQinFPkKAsQggAFgegDQgUAFgTAAQjcAAixo1g");
	var mask_3_graphics_70 = new cjs.Graphics().p("Am9RvQgfhWgZhjQhbkdgTnIIgCg2QgFhhgCh6QgBhogJgcQgdhlgwlcIhAnQQgFgfAagzQAZg7AxhAQB1ijCihwQDIiJDHgXQCEgPB9AkQBoAYBuBHQBoA4A6DFQAXBBAOBPQAdBiAKCsQAHCiAQBBQAeDHAHDzIACBNQACGhgmFjQhAH4iOE4QizFbkcAlQgiAEgggEQgNACgPAAQjyAAixprg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AgWciQkWAYi3q5QgehbgXhoQhXksgQnZIgCg3QgEhlgBh+QgBhsgJgdQgdhlgxlsIhCnfQgGggAcg1QAbg9A0hCQB9inCshyQDViKDSgRQCNgLCEAqQBuAeByBPQBrA+A4DSQAVBFANBUQAbBnAHC0QAECrAPBCQAcDPAFD8IABBQQAAGwgrFvQhFILiYFAQi/FnktAeIgZABQgVAAgWgEg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AgxdsQkmAIiyrgQgdhggWhuQhSk6gNnqIgCg5QgDhogBiDQgBhxgIgcQgehmgzl8IhDnvQgGggAeg4QAdg+A3hEQCFisC2hyQDiiMDegLQCUgICLAxQBzAkB3BWQBuBGA1DeQAVBJALBZQAYBsAFC9QABCzAOBDQAaDYAEEEIABBSQgDHBgvF6QhMIfiiFHQjKFzk/AWIgRAAQgbAAgcgFg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AhLe3Qk2gKiusHQgbhlgWhzQhNlJgKn6IgCg7QgChpgBiKQAAh2gIgcQgehng1mKQg+nVgHgqQgFgiAfg5QAfhAA7hGQCNiwDAhzQDuiODpgGQCdgDCRA3QB6AqB6BeQByBMAzDsQATBMAKBeQAWBxABDGQgBC8ANBEQAYDfACENIAABVQgFHQgzGGQhSIzirFOQjXGAlQAOIgKAAQgiAAgggHg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EgBmAgBQlGgaipsuQgbhqgUh5QhJlXgHoLIgBg9QgChsABiPQAAh6gIgcQgfhog2maQhAnogGgnQgGgiAhg7QAhhCA9hIQCVi0DLh1QD7iOD1gBQCkAACYA/QB/AwB/BkQB1BTAwD5QATBRAIBiQAUB2gCDPQgDDEALBFQAWDoABEVIgBBYQgIHgg3GRQhYJGi1FWQjiGMlgAHQgrAAgngKg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EgArAhYQgtgBgpgLQlWgqiktXQgahvgTh9QhElmgEocIgBg/QgBhvABiTQABh/gJgdQgfhng3mrQhDn6gFgkQgGgjAjg9QAihDBBhKQCdi5DVh1QEHiREBAFQCsAECfBFQCFA3CDBrQB4BaAuEGQARBVAIBmQAQB7gEDYQgGDMAKBHQAVDwgBEdIgBBbQgLHvg8GdQhdJai/FdQjuGYlxAAIgBAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EgBBAilQgvgCgsgMQllg7igt+QgYh0gSiDQhAl0gBotIgBhAQAAhzABiYQACiEgJgcQgfhog5m6QhFoOgFggQgGgkAlg/QAkhFBFhMQCli9Deh2QEUiSENALQCzAHCnBMQCKA8CIBzQB7BhArETQARBYAFBrQAPCBgHDgQgJDVAJBIQASD4gCEmIgCBdQgNH/hAGpQhkJtjIFlQj2Gcl4AAIgPAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EgBZAjyQgxgCgtgOQl2hMibulQgXh5gRiIQg7mDACo+IAAhAQAAh3ACidQACiJgIgcQgghog7nKQhHohgEgdQgGglAmhBQAmhGBIhOQCtjBDoh4QEhiTEZAQQC7ALCtBTQCQBCCMB6QB/BoApEfQAPBdAEBwQAMCGgKDoQgLDdAIBKQAQEAgEEuIgCBhQgQIOhEG0QhqKBjSFtQj8GhmDAAIgcgBg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EgByAk/QgzgDgvgPQmGhdiWvMQgXh+gPiNQg3mSAFpOIAAhCQABh7ADiiQACiNgIgcQgghpg9naIhMpNQgHglAohEQAphHBKhRQC1jFDzh5QEtiVEkAWQDEAPC0BaQCWBICPCBQCDBvAmEsQAOBhADB0QAJCLgNDxQgNDmAGBLQAPEIgGE2IgCBkQgTIehIG/QhwKVjcF0QkEGmmKAAIgqgBg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EgCOAmNQg1gEgxgRQmWhtiRvzQgWiEgOiSQgzmgAIpgIABhDIAFklQADiSgJgbQgghqg+npIhOpdQgHgnAqhFQAqhJBOhTQC9jJD9h6QE6iXEwAcQDLASC7BhQCbBOCUCJQCGB2AkE5QANBkABB5QAHCQgQD6QgQDuAFBMQANEQgHE/IgDBnQgWIuhMHKQh2KpjlF7QkMGsmTAAQgbAAgcgCg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EgCqAnaQg3gFg0gSQmmh9iMwbQgUiJgOiYQgumuALpuIABhIQACiBAFirQADiXgJgbQgghqhAn6IhQpsQgGgnArhIQAshLBShUQDEjOEHh7QFHiYE8AhQDSAWDCBoQChBUCZCQQCIB9AiFFQAMBpAAB9QAECWgSECQgTD2AEBOQALEYgJFIIgDBpQgYI+hRHWQh8K8jvGDQkTGxmcAAQghAAgjgDg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EgDHAonQg5gGg2gTQm1iOiIxDQgTiNgNidQgpm9AOp/IABhJIAIk1QADibgIgcQghhqhCoJIhRp8QgGgoAthKQAuhMBVhWQDMjTERh8QFUiZFHAmQDaAaDJBuQCnBbCdCXQCMCDAfFTQALBtgBCCQABCagVEMQgVD+ACBPQAKEggLFQIgEBsQgbJNhVHiQiBLQj5GKQkbG3mlAAQgoAAgpgEg");
	var mask_3_graphics_82 = new cjs.Graphics().p("EgDkAp1Qg8gHg3gVQnGieiDxqQgSiSgMijQgknMARqPIAChLIAIk9QAFifgJgcQghhrhEoZIhSqMQgHgpAvhLQAwhOBYhYQDVjXEbh9QFgibFTAsQDiAeDQB1QCsBgChCeQCPCLAdFgQAKBwgCCHQgBCggZETQgXEHABBQQAIEpgNFYIgFBvQgdJdhZHtQiHLkkDGRQkiG9muAAQguAAgwgFg");
	var mask_3_graphics_83 = new cjs.Graphics().p("EgEBArCQg+gIg5gWQnWivh/yRQgRiYgKioQggnaAUqgIAChNIAKlEQAFilgJgbQghhshFooIhUqcQgHgpAxhOQAxhQBbhaQDdjbElh+QFticFeAxQDrAiDWB7QCzBnClClQCSCSAaFsQAJB1gECLQgDClgbEdQgaEPAABRQAFExgOFhIgFBvQggJvhdH4QiOL4kMGZQkqHDm2AAQg1AAg2gHg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EgEfAsQQqXhXhd6MQgcnoAXqxIAOmbQAFipgIgcQgihshHo4IhVqrQgHgrAyhPQA0hSBehcQDljfEvh/QF5ieFrA3QG7BEF2F9QDFDJgVJRQgGCqgeElQgdEYgBBSQAEE5gQFqQgfLChrIyQiTMLkWGhQkxHIm/AAQg7AAg+gHg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AscfMQhcjehHlGQg/kGgwllQgVjHgNj1IgEiAQgGixgBkAQAAgugCglQgBhjgIgeQgoiXhGo3QhRqagDhIIAAgBQgGgxAshSQAuhdBUhlQDMkEESimQDSiCDQg2QCEgkCCgDQB0gHBxAUQCgAQCdBTQCQBKCZBxQBcBHBACDQBnC/AsFBQAQBSALByQAOBmAJB+QAID+AfBRIANBDQA1CiABCnQAEBxAJCXIAAAPQACEPgFEMQgJEugaENQgKB2gPBrQgIBKgMA/QiaLKkEGxQlSIjn7AWIgGAAQgrAGgpAAQnaAAjTs6g");
	var mask_3_graphics_86 = new cjs.Graphics().p("EgKdAjzQiMiih6krQhtjyhhlrQgrjFggkJIgMiHQgSi+gLkPIgEhYQgEhhgKgnQgvjDhDo1QhPqNgEiMIAAgBQgGg4AnhVQAnhoBKhvQCzknD1jNQC8ikC+hbQB6g+B6gcQBuggBsgCQCdgcCiA+QCZA2CwBhQBpA8BVBzQCMCpBmEgQAjBLAfBoQAlBcAgBzQAsDlBABPIAaA9QBoCcAICWQAKBoAXCuIABAQQAREWAMEnQAJFAgMEbQgECBgKBuQgEBSgLBAQiiLokJHiQlNJGntBsIgGABQiBA0hxAAQl7AAjfo1g");
	var mask_3_graphics_87 = new cjs.Graphics().p("EgIrAoZQi7hlitkRQicjfiSlyQhBjCgzkeQgKhEgKhJQgdjLgVkaIgIheQgGhkgLgwQg2juhCoyQhLp/gGjRIAAgCQgGg+AhhXQAih0A/h4QCalMDZjzQCmjGCsh/QBvhZBxg0QBng6BngZQCehHCoAqQCfAiDJBQQB0AyBqBjQCyCSCfEBQA1BDA1BcQA7BUA3BnQBRDMBhBNIAmA4QCcCVAPCGIA2EkIACARQAeEcAeFBQAaFVABEoQAECLgFByQgBBagJBAQiqMFkPIWQlIJnndDCIgFACQjfCQi9AAQknAAjXldg");
	var mask_3_graphics_88 = new cjs.Graphics().p("EgHAAsuQjqgpjhj2QjKjLjEl5QhWjAhGkyQgOhIgOhMQgojXgfknIgLhkQgJhjgNg6Qg8kZhBowQhIpygIkVIAAgDQgFhFAchZQAbiAA1iCQCBlvC8kaQCRjnCailQBjhzBohMQBghUBjgvQCdhyCuAVQCoAODfA/QCBAnB/BUQDXB7DZDhQBIA8BJBRQBSBLBOBcQB2CzCBBKIAzAzQDPCOAWB2QAXBVAzDdIADASQAtEiAvFaQArFqAQE1QALCXgBB1QADBhgIBBQiyMjkUJIQlDKJnNEYIgFADQlGEekPAAQjaAAi4i3g");
	var mask_3_graphics_89 = new cjs.Graphics().p("EgFYAwuQkaATkTjcQj5i2j1mAQhsi9hZlHQgShLgShQQgzjkgpkzIgPhpQgLhkgOhCQhElFg+ouQhFpmgKlYIAAgEQgEhMAVhbQAWiLAqiMQBomTCglBQB7kJCIjKQBZiMBehlQBZhuBehFQCdieCzABQCwgFD6AtQCMAdCSBEQD9BlESDAQBbA0BdBHQBpBCBlBQQCbCaCiBIIA/AvQEDCGAcBmQAeBLBCD0IAEATQA6EpBAF0QA9F+AeFFQARChAEB2QAHBqgGBBQi6NBkaJ6Qk+Krm8FuIgFAEQm2HglwAAQiMAAiDhFg");
	var mask_3_graphics_90 = new cjs.Graphics().p("EgOAAygQkoiikmmGQiBi8hslbQgXhNgVhUQg/jxgzk/IgShvQgOhkgPhMQhLlwg8ouQhCpXgMmcIAAgEQgEhTAQheQAPiXAhiVQBPm3CClnQBmkrB2jvQBOimBVh+QBSiHBZhcQCcjJC5gUQC4gZESAcQCZATCpA0QEgBOFLChQBuAsByA8QCAA5B8BFQC/CBDCBGIBMApQE2B/AjBWQAlBCBQEMIAFAUQBIEvBSGNQBOGSAsFTQAYCsAJB8QALBxgGBCQjCNckfKtQk4LMmsHEIgFAFQprMooXhZQhgAXhfAAQjpAAjoiJg");
	var mask_3_graphics_91 = new cjs.Graphics().p("EgN7A23QlWiPlYmNQiXi4h/lxQgahQgZhXQhLj+g8lKIgWh1QgQhlgRhUQhRmcg7otQg/pJgNnhIAAgFQgEhZAKhgQAJiiAXifQA2nbBlmOQBQlNBlkTQBCjBBMiWQBLihBVhzQCbj0C+goQDAgtErALQClAJC9AkQFIA4GDCAQCAAlCHAxQCXAwCTA5QDjBoDjBEIBZAkQFqB4ApBGQAsA4BeEjIAGAVQBWE2BjGnQBfGlA6FiQAgC2ANCAQAPB5gEBCQjKN5klLhQk0LtmbIaIgFAGQp7O6pUBJQitBAisAAQjNAAjNhbg");
	var mask_3_graphics_92 = new cjs.Graphics().p("EgN2A7NQmFh7mJmUQisi2iSmFQgfhTgdhbQhWkKhGlXIgZh7IgljCQhYnHg5orQg8o+gPojIAAgGQgDhgAEhjQADitAMioQAdn/BJm1QA6lvBTk4QA4jbBCiuQBEi6BQiKQCakfDEg+QDIhAFDgGQCxgCDTAVQFtAhG8BgQCTAeCcAmQCtAmCqAuQEIBPEEBDIBlAeQGdBxAxA1QAyAwBsE6IAHAWQBkE8B1HAQBwG6BIFwQAmDAASCDQATCCgDBCQjSOXkqMTQkuMPmMJwIgEAHQqLRMqSDrQj6B1j7AAQiwAAiwg5g");
	var mask_3_graphics_93 = new cjs.Graphics().p("EgbdA3hQjCi0ilmZQibmBh2ouQjlw8gk1KQgk1YC0vKQBdn7CRk1QCalLDJhSQFCiCKOAQQIXAOLHBtQIyBWIWB6QHRBqA3AlQA7AoCAFnQBzFCCFHaQCCHNBWF/QBcGagDCDQmvdUr/WdQqcTkrUGPQlHC1lMAAQpCAApPokg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:242.8,y:-975.6}).wait(54).to({graphics:mask_3_graphics_54,x:242.8,y:-975.6}).wait(1).to({graphics:mask_3_graphics_55,x:241.9,y:-971.2}).wait(1).to({graphics:mask_3_graphics_56,x:240.8,y:-966.8}).wait(1).to({graphics:mask_3_graphics_57,x:239.8,y:-962.2}).wait(1).to({graphics:mask_3_graphics_58,x:239.1,y:-957.6}).wait(1).to({graphics:mask_3_graphics_59,x:238.4,y:-952.9}).wait(1).to({graphics:mask_3_graphics_60,x:237.8,y:-948.1}).wait(1).to({graphics:mask_3_graphics_61,x:237.3,y:-943.3}).wait(1).to({graphics:mask_3_graphics_62,x:236.7,y:-938.6}).wait(1).to({graphics:mask_3_graphics_63,x:236.2,y:-933.9}).wait(1).to({graphics:mask_3_graphics_64,x:235.8,y:-929.2}).wait(1).to({graphics:mask_3_graphics_65,x:235.4,y:-924.5}).wait(1).to({graphics:mask_3_graphics_66,x:235.1,y:-919.9}).wait(1).to({graphics:mask_3_graphics_67,x:234.7,y:-915.4}).wait(1).to({graphics:mask_3_graphics_68,x:234.4,y:-911}).wait(1).to({graphics:mask_3_graphics_69,x:234.2,y:-906.5}).wait(1).to({graphics:mask_3_graphics_70,x:233.9,y:-902}).wait(1).to({graphics:mask_3_graphics_71,x:233.6,y:-897.4}).wait(1).to({graphics:mask_3_graphics_72,x:233.4,y:-892.8}).wait(1).to({graphics:mask_3_graphics_73,x:233.2,y:-888.2}).wait(1).to({graphics:mask_3_graphics_74,x:233,y:-883.6}).wait(1).to({graphics:mask_3_graphics_75,x:232.8,y:-879}).wait(1).to({graphics:mask_3_graphics_76,x:232.5,y:-874.5}).wait(1).to({graphics:mask_3_graphics_77,x:232.4,y:-869.9}).wait(1).to({graphics:mask_3_graphics_78,x:232.4,y:-865.4}).wait(1).to({graphics:mask_3_graphics_79,x:232.7,y:-860.9}).wait(1).to({graphics:mask_3_graphics_80,x:233.1,y:-856.3}).wait(1).to({graphics:mask_3_graphics_81,x:233.5,y:-851.8}).wait(1).to({graphics:mask_3_graphics_82,x:233.9,y:-847.3}).wait(1).to({graphics:mask_3_graphics_83,x:234.4,y:-842.7}).wait(1).to({graphics:mask_3_graphics_84,x:234.9,y:-838.2}).wait(1).to({graphics:mask_3_graphics_85,x:225.4,y:-842.1}).wait(1).to({graphics:mask_3_graphics_86,x:221.5,y:-846.2}).wait(1).to({graphics:mask_3_graphics_87,x:218.8,y:-850.2}).wait(1).to({graphics:mask_3_graphics_88,x:216.9,y:-852.5}).wait(1).to({graphics:mask_3_graphics_89,x:215.3,y:-852.7}).wait(1).to({graphics:mask_3_graphics_90,x:213.7,y:-850.2}).wait(1).to({graphics:mask_3_graphics_91,x:212.1,y:-844}).wait(1).to({graphics:mask_3_graphics_92,x:210.6,y:-837.7}).wait(1).to({graphics:mask_3_graphics_93,x:208.8,y:-831.4}).wait(172));

	// 图层 2
	this.instance_22 = new lib.yld_4_1();
	this.instance_22.setTransform(32,-1039.9);

	this.instance_22.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.2,-1039.9,54.8,148.7);


// stage content:
(lib.index2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mcplay.visible=false;
		this.mcstop.addEventListener("click",mcstopf.bind(this));
		
		function mcstopf(){
			this.stop();
			this.s_1.stop();
			if(this.s_2)this.s_2.stop();
			if(this.s_3)this.s_3.stop();
			if(this.s_4)this.s_4.stop();
			if(this.s_5)this.s_5.stop();
			this.mcstop.visible=false;
			this.mcplay.visible=true;
		}
		this.mcplay.addEventListener("click",mcplayf.bind(this));
		
		function mcplayf(){
			this.play();
			this.s_1.play();
			if(this.s_2)this.s_2.play();
			if(this.s_3)this.s_3.play();
			if(this.s_4)this.s_4.play();
			if(this.s_5)this.s_5.play();
			
			this.mcstop.visible=true;
			this.mcplay.visible=false;
		}
	}
	this.frame_2052 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2052).call(this.frame_2052).wait(1));

	// 图层 2
	this.mcplay = new lib.play_1();
	this.mcplay.setTransform(609.4,91,1,1,0,0,0,14.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.mcplay).wait(2053));

	// 图层 1
	this.mcstop = new lib.stop_1();
	this.mcstop.setTransform(605.9,91,1,1,0,0,0,10.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.mcstop).wait(2053));

	// 图层 6
	this.s_5 = new lib._5_5();
	this.s_5.setTransform(313.9,1493.3,1,1,0,0,0,-5,14.2);
	this.s_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s_5).wait(1583).to({_off:false},0).to({y:483.5},30).wait(440));

	// 云4 复制
	this.instance = new lib.补间4("synched",0);
	this.instance.setTransform(-7,1867.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1608).to({_off:false},0).to({y:866.9},20).wait(425));

	// 云3 复制
	this.instance_1 = new lib.补间5("synched",0);
	this.instance_1.setTransform(602.2,1725.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间6("synched",0);
	this.instance_2.setTransform(602.2,700.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1608).to({state:[{t:this.instance_2}]},20).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1608).to({_off:false},0).to({_off:true,y:700.7},20).wait(425));

	// 云2 复制
	this.instance_3 = new lib.补间7("synched",0);
	this.instance_3.setTransform(40,1349.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间8("synched",0);
	this.instance_4.setTransform(40,325.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1608).to({state:[{t:this.instance_4}]},20).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1608).to({_off:false},0).to({_off:true,y:325.3},20).wait(425));

	// 云 复制
	this.instance_5 = new lib.补间9("synched",0);
	this.instance_5.setTransform(600.2,1257.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间10("synched",0);
	this.instance_6.setTransform(600.2,233.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},1608).to({state:[{t:this.instance_6}]},20).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1608).to({_off:false},0).to({_off:true,y:233.2},20).wait(425));

	// 图层 6
	this.s_4 = new lib._4_4_1();
	this.s_4.setTransform(287,1505.5,1,1,0,0,0,68,-545);
	this.s_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s_4).wait(1187).to({_off:false},0).to({y:495.1},30).wait(366).to({y:-515.3},30).to({_off:true},1).wait(439));

	// 云4 复制
	this.instance_7 = new lib.补间4("synched",0);
	this.instance_7.setTransform(-7,1867.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1212).to({_off:false},0).to({y:866.9},29).wait(343).to({startPosition:0},0).to({y:-133.9},23).to({_off:true},1).wait(445));

	// 云3 复制
	this.instance_8 = new lib.补间5("synched",0);
	this.instance_8.setTransform(602.2,1725.3);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间6("synched",0);
	this.instance_9.setTransform(602.2,700.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1212).to({_off:false},0).to({_off:true,y:700.7},29).wait(812));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1212).to({_off:false},29).wait(343).to({startPosition:0},0).to({y:-300.1},23).to({_off:true},1).wait(445));

	// 云2 复制
	this.instance_10 = new lib.补间7("synched",0);
	this.instance_10.setTransform(40,1349.8);
	this.instance_10._off = true;

	this.instance_11 = new lib.补间8("synched",0);
	this.instance_11.setTransform(40,325.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1212).to({_off:false},0).to({_off:true,y:325.3},29).wait(812));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1212).to({_off:false},29).wait(343).to({startPosition:0},0).to({y:-675.5},23).to({_off:true},1).wait(445));

	// 云 复制
	this.instance_12 = new lib.补间9("synched",0);
	this.instance_12.setTransform(600.2,1257.8);
	this.instance_12._off = true;

	this.instance_13 = new lib.补间10("synched",0);
	this.instance_13.setTransform(600.2,233.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1212).to({_off:false},0).to({_off:true,y:233.2},29).wait(812));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1212).to({_off:false},29).wait(343).to({startPosition:0},0).to({y:-767.6},23).to({_off:true},1).wait(445));

	// 图层 6
	this.s_3 = new lib._3_3_1();
	this.s_3.setTransform(319.9,1495.9,1,1,0,0,0,60,40.8);
	this.s_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s_3).wait(762).to({_off:false},0).to({x:320.9,y:485.5},28).wait(397).to({x:319.9},0).to({y:-524.3},30).to({_off:true},1).wait(835));

	// 云4 复制
	this.instance_14 = new lib.补间4("synched",0);
	this.instance_14.setTransform(-7,1867.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(785).to({_off:false},0).to({y:866.9},20).wait(384).to({startPosition:0},0).to({y:-141.1},23).to({_off:true},1).wait(840));

	// 云3 复制
	this.instance_15 = new lib.补间5("synched",0);
	this.instance_15.setTransform(602.2,1725.3);
	this.instance_15._off = true;

	this.instance_16 = new lib.补间6("synched",0);
	this.instance_16.setTransform(602.2,700.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(785).to({_off:false},0).to({_off:true,y:700.7},20).wait(1248));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(785).to({_off:false},20).wait(384).to({startPosition:0},0).to({y:-307.3},23).to({_off:true},1).wait(840));

	// 云2 复制
	this.instance_17 = new lib.补间7("synched",0);
	this.instance_17.setTransform(40,1349.8);
	this.instance_17._off = true;

	this.instance_18 = new lib.补间8("synched",0);
	this.instance_18.setTransform(40,325.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(785).to({_off:false},0).to({_off:true,y:325.3},20).wait(1248));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(785).to({_off:false},20).wait(384).to({startPosition:0},0).to({y:-682.7},23).to({_off:true},1).wait(840));

	// 云 复制
	this.instance_19 = new lib.补间9("synched",0);
	this.instance_19.setTransform(600.2,1257.8);
	this.instance_19._off = true;

	this.instance_20 = new lib.补间10("synched",0);
	this.instance_20.setTransform(600.2,233.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(785).to({_off:false},0).to({_off:true,y:233.2},20).wait(1248));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(785).to({_off:false},20).wait(384).to({startPosition:0},0).to({y:-774.8},23).to({_off:true},1).wait(840));

	// 2屏
	this.s_2 = new lib._2_2_1();
	this.s_2.setTransform(261,1490.4,1,1,0,0,0,210.8,-30.2);
	this.s_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s_2).wait(395).to({_off:false},0).to({x:268.9,y:480.9},33).wait(334).to({y:-529.5},28).to({_off:true},1).wait(1262));

	// 云4 复制
	this.instance_21 = new lib.补间4("synched",0);
	this.instance_21.setTransform(-7,876.3);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(443).to({_off:false},0).wait(321).to({startPosition:0},0).to({y:-132.8},18).to({_off:true},1).wait(1270));

	// 云3 复制
	this.instance_22 = new lib.补间5("synched",0);
	this.instance_22.setTransform(602.2,1725.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.补间6("synched",0);
	this.instance_23.setTransform(602.2,700.7);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(423).to({_off:false},0).to({_off:true,y:700.7},20).wait(1610));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(423).to({_off:false},20).wait(321).to({startPosition:0},0).to({y:-308.3},18).to({_off:true},1).wait(1270));

	// 云2 复制
	this.instance_24 = new lib.补间7("synched",0);
	this.instance_24.setTransform(40,1349.8);
	this.instance_24._off = true;

	this.instance_25 = new lib.补间8("synched",0);
	this.instance_25.setTransform(40,325.3);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(423).to({_off:false},0).to({_off:true,y:325.3},20).wait(1610));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(423).to({_off:false},20).wait(321).to({startPosition:0},0).to({y:-683.8},18).to({_off:true},1).wait(1270));

	// 云 复制
	this.instance_26 = new lib.补间9("synched",0);
	this.instance_26.setTransform(600.2,1257.8);
	this.instance_26._off = true;

	this.instance_27 = new lib.补间10("synched",0);
	this.instance_27.setTransform(600.2,233.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(423).to({_off:false},0).to({_off:true,y:233.2},20).wait(1610));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(423).to({_off:false},20).wait(321).to({startPosition:0},0).to({y:-775.8},18).to({_off:true},1).wait(1270));

	// 一屏
	this.s_1 = new lib._1_1_1();
	this.s_1.setTransform(254.9,2529.6,1,1,0,0,0,-17,915.9);

	this.timeline.addTween(cjs.Tween.get(this.s_1).wait(395).to({y:1518.6},33).to({_off:true},1).wait(1624));

	// 云4
	this.instance_28 = new lib.云4();
	this.instance_28.setTransform(-147,793.1);

	this.instance_29 = new lib.补间3("synched",0);
	this.instance_29.setTransform(-7,887.1);
	this.instance_29._off = true;

	this.instance_30 = new lib.补间4("synched",0);
	this.instance_30.setTransform(-7,-88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28}]}).to({state:[{t:this.instance_29}]},398).to({state:[{t:this.instance_30}]},20).to({state:[]},1).wait(1634));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(398).to({_off:false},0).to({_off:true,y:-88.4},20).wait(1635));

	// 云3
	this.instance_31 = new lib.云3();
	this.instance_31.setTransform(457.2,618.1);

	this.instance_32 = new lib.补间5("synched",0);
	this.instance_32.setTransform(602.2,711.6);
	this.instance_32._off = true;

	this.instance_33 = new lib.补间6("synched",0);
	this.instance_33.setTransform(602.2,-263.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31}]}).to({state:[{t:this.instance_32}]},398).to({state:[{t:this.instance_33}]},20).to({state:[]},1).wait(1634));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(398).to({_off:false},0).to({_off:true,y:-263.9},20).wait(1635));

	// 云2
	this.instance_34 = new lib.云2();
	this.instance_34.setTransform(-113,218.6);

	this.instance_35 = new lib.补间7("synched",0);
	this.instance_35.setTransform(40,336.1);
	this.instance_35._off = true;

	this.instance_36 = new lib.补间8("synched",0);
	this.instance_36.setTransform(40,-639.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34}]}).to({state:[{t:this.instance_35}]},398).to({state:[{t:this.instance_36}]},20).to({state:[]},1).wait(1634));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(398).to({_off:false},0).to({_off:true,y:-639.4},20).wait(1635));

	// 云
	this.instance_37 = new lib.云();
	this.instance_37.setTransform(457.2,151.1);

	this.instance_38 = new lib.补间9("synched",0);
	this.instance_38.setTransform(600.2,244.1);
	this.instance_38._off = true;

	this.instance_39 = new lib.补间10("synched",0);
	this.instance_39.setTransform(600.2,-731.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37}]}).to({state:[{t:this.instance_38}]},398).to({state:[{t:this.instance_39}]},20).to({state:[]},1).wait(1634));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(398).to({_off:false},0).to({_off:true,y:-731.4},20).wait(1635));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173,566,894.2,920.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;