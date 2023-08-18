$.scrollify({
  section : ".box",//1ページスクロールさせたいエリアクラス名
  scrollbars:"false",//スクロールバー表示・非表示設定
  interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
  easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
  scrollSpeed: 300, // スクロール時の速度
  
  //以下、ページネーション設定
  before:function(i,panels) {
  var ref = panels[i].attr("data-section-name");
  $(".pagination .active").removeClass("active");
  $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
  },
  afterRender:function() {
  var pagination = "<ul class=\"pagination\">";
  var activeClass = "";
  $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
  activeClass = "";
  if(i===$.scrollify.currentIndex()) {
  activeClass = "active";
  }
  pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
  });
  pagination += "</ul>";
  
  $("#box1").append(pagination);//はじめのエリアにページネーションを表示
  $(".pagination a").on("click",$.scrollify.move);
  }
  
  });
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
  $(".serif-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    var hash = location.hash;
    var disc = hash.slice( -1 );
    var dispNav = 'g-nav' + disc;
    $('#' + dispNav).toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm");
    const scroll = window.pageYOffset;
    if (scroll > 500) {
      $(".serif").removeClass('active');//ボタンの activeクラスを除去し
      $(".serif-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
      // console.log(scroll);
    }
  });

  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });
$(".openbtn2").click(function () {//ボタンがクリックされたら
  var hash = location.hash;
  var disc = hash.slice( -1 );
  var dispNav = '#g-nav' + disc;
  console.log(dispNav);
  $('nav').find(dispNav).css('background', '#000');
});
