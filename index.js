$("h2").css("color", "#3e5141");
$("h4").css("color", "#6d8e72");

if (document.images) {
  var image1 = new Image();
  image1.src = "img/slide1.jpg";
  var image2 = new Image();
  image2.src = "img/slide2.jpg";
  var image3 = new Image();
  image3.src = "img/slide3.jpg";
  var image4 = new Image();
  image4.src = "img/slide4.jpg";
  var image5 = new Image();
  image5.src = "img/slide5.jpg";
  var image6 = new Image();
  image6.src = "img/slide6.jpg";

}

var audio = new Audio('video/notify.mp3');
var audio2 = new Audio('video/notify2.mp3');
function notify() {
  audio.play();
  let mail =
    prompt("Хотите подписаться на нашу рассылку и узнавать новые обновления?", "Введите свой email");
  if (mail != null) {
    audio2.play();
    alert("Спасибо! Мы прислали вам письмо на " + mail)
  }
}
document.getElementById('incentive').addEventListener('click', notify);
