$(function(){
    $(".ui-loader").hide(); //jQuery Mobile 引用 隱藏頁面底部出現的loading字樣
    
    var mainImgDiv_ar = [];    //主頁輪播圖形Div陣列
    var mainImgTotle = 8;      //主頁輪播圖形數量
    var picWord = [];
    
    init();     //初始化

    // 初始化
    function init() {
        setPicWord();
        $("pageHome").show();
        $("pageAbout").hide();    
        $("pageBrief").hide();  
        var nowImgNum = Math.floor(Math.random() * (mainImgTotle));          //亂數選出一張主頁輪播圖形
        
        // 預載圖案，以陣列存放DIV，再在DIV中放入圖形圖形
        for (var i = 0; i < mainImgTotle; i++){
            $("mainImg").append('<div id="mm_' + i + '"></div>' );  //先建立個別DIV
            mainImgDiv_ar[i] = $("#mm_" + i);                       //將DIV放入陣列
            mainImgDiv_ar[i].append('<img class="fullimg shadow777" src="img/mainImg_' + i + '.jpg">');   //在DIV中放入圖片
            // mainImgDiv_ar[i].append('<p class="picword">' + picWord[i] + '</p>');   //在DIV中
            
            // 除了選中的圖形以外，其他的先隱藏
            if(i != nowImgNum) {
                mainImgDiv_ar[i].hide();
            }
        }        

        picRotation(mainImgDiv_ar, mainImgTotle, 9000, nowImgNum);  //執行圖片輪播
    }

    function setPicWord()   {
        picWord[0] = "一杯咖啡，配上鹽之花貝果的早晨，開始精彩的一天！"
        picWord[1] = "好吃貝果的秘訣，就是把頂級的天然食材，以恰如其份的比例，手作烘烤！"
        picWord[2] = "來自日本Gaban頂級肉桂粉，絕對是吉拿貝果的最大亮點！"
        picWord[3] = "德式香腸貝果的內涵，就是通過日本重重檢測的台灣信功豬肉！"
        picWord[4] = "有時手感貝果，各式各樣的口味，特別推薦給所有麵包﹑貝果的愛好者！"
        picWord[5] = "健康少油，軟Q又飽滿的口感，是貝果大受歡迎的原因！"
    }

    //定時執行圖片輪播的函式（圖片陣列,圖片數量,輪播間隔毫秒時間,第一張圖片順序）
    function picRotation(_ar, _max, _time, _now)    {
        var _timer = setInterval(function() {            
            var _next = _now + 1;                       //下一張圖片編號
            if (_next >= _max ) {_next = 0};            
            _ar[_now].fadeOut(1000, function()  {       //圖片淡出，並且執行匿名函式
                _ar[_now].replaceWith(_ar[_next]);      //取代
                _ar[_next].fadeIn(1000);                //新圖片淡入
            });
        
            _now = _next;            
            // console.log("目前 " + _now);
        }, _time);
    }
   

    $("#mAbout").click(function(){
        $("pageHome").hide();
        $("pageAbout").show();
        $("pageBrief").hide();
        
    });

    $("#mHome").click(function(){
        $("pageHome").show();
        $("pageAbout").hide();
        $("pageBrief").hide();
    });

    $("#mBrief").click(function(){
        $("pageHome").hide();
        $("pageAbout").hide();
        $("pageBrief").show();
    });
  

    
});