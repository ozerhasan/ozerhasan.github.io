// Yukarı çıkma butonu kodları

// Aşağıdaki siteden yardım alındı. 
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// slider kısmı js kodu

// aşağıdaki siteden yardım aldım 
// https://www.w3schools.com/w3css/w3css_slideshow.asp
// https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



//iletişim formu js kodu


// BU KISMI YAZARKEN ASAGIDAKI SITELERI GEZIP FIKIR ALDIM


// https://stackoverflow.com/questions/12626940/mailto-on-submit-button
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail
// https://www.w3docs.com/snippets/html/how-to-create-mailto-forms.html
// https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html
// https://css-tricks.com/snippets/html/mailto-links/
// https://stackoverflow.com/questions/21028939/mailto-using-javascript
// https://stackoverflow.com/questions/4782068/can-i-set-subject-content-of-email-using-mailto
function mail(form) {
    
    var subject = "İletişim Formu";
    var ad = form.ad.value;
    var soyad = form.soyad.value;
    
    var dogumtarihi = form.dogumtarihi.value;
    var email = form.email.value;
    var telefon = form.telefon.value;
    var konu = form.konu.value;

    var str = " ";
    if (ad.length > 0) {
        str += "Ad: " + ad + ", ";
    } else {
        warning += "Name is required"
    }
    if (soyad.length > 0) {
        str += "Soyad:" + soyad + ", ";
    }

    if (dogumtarihi.length > 0) {
        str += "Doğum Tarihi:" + dogumtarihi + ", ";
    }

    if (email.length > 0) {
        str += "Email:" + email + ", ";
    }

    if (telefon.length > 0) {
        str += "Telefon:" + telefon + ", ";
    }

    if (konu.length > 0) {
        str += "Konu:" + konu + "";
    }
    
       
        // str += "%0D%0ARegards,%0D%0A" + ad;
        // document.getElementById('submit').href = str;

        // var mail="mailto:hasanzahid18@hotmail.com?subject="+subject+"&body="+str;
        // window = window.open(mail, 'emailWindow')

        document.location.href = "mailto:hasanzahid18@hotmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(str);
        

        //<a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, 
        //another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>
    
}


//     Hakkında sayfasındaki CV (özgeçmiş) içeriğini pdf dosyasına kaydetmek için aşağıdaki siteden yardım aldım

//     https://www.npmjs.com/package/jspdf
//     https://stackoverflow.com/questions/16858954/how-to-properly-use-jspdf-library
//     http://raw.githack.com/MrRio/jsPDF/master/docs/

//     Aşağıdaki fonksiyonu yine bu sayfada kullanmış olduğum mail fonksiyonundan esinlenerek yazdım. O fonksiyon için de,
//     kullandığım sitelerin linkleri mevcuttur.

// bu fonksiyon asıl fonksiyonun içinde çalışmaktadır. 
// amacı form1 içindeki verileri bir değişkene kaydedip pdf fonksiyonuna göndermektir.


function getir(form1){

var cvad = form1.cvad.value;
var cvsoyad = form1.cvsoyad.value;
var cvadres = form1.cvadres.value;
var cvemail = form1.cvemail.value;
var cvtelefon = form1.cvtelefon.value;
var cvokul = form1.cvokul.value;
var cvokul2 = form1.cvokul2.value;
var cvdeneyim = form1.cvdeneyim.value;
var cvdeneyim2 = form1.cvdeneyim2.value;
var cvydil = form1.cvydil.value;
var cvpdil = form1.cvpdil.value;
var cvpdil2 = form1.cvpdil2.value;
var cvbeceri1 = form1.cvbeceri1.value;
var cvbeceri2 = form1.cvbeceri2.value;
var cvprogram1 = form1.cvprogram1.value;
var cvprogram2 = form1.cvprogram2.value;
var cvprogram3 = form1.cvprogram3.value;
var cvprogram4 = form1.cvprogram4.value;
var cvkurssertifika = form1.cvkurssertifika.value;
var cvkurssertifika2 = form1.cvkurssertifika2.value;
var str ="";

if (cvad.length > 0) {
  str += "Ad: " + cvad +"\n\n";
}

    
if (cvsoyad.length > 0) {
  str += "Soyad: " + cvsoyad + "\n\n";
}

if (cvadres.length > 0) {
  str += "Adres: " + cvadres + "\n\n";
}

if (cvemail.length > 0) {
  str += "Email: " + cvemail + "\n\n";
}

if (cvtelefon.length > 0) {
  str += "Telefon: " + cvtelefon + "\n\n";
}

if (cvokul.length > 0) {
  str += "Lisans: " + cvokul + "\n\n";
}

if (cvokul2.length > 0) {
  str += "Lise: " + cvokul2 + "\n\n";
}

if (cvdeneyim.length > 0) {
  str += "Deneyim: " + cvdeneyim + "\n\n";
}

if (cvdeneyim2.length > 0) {
  str += "Deneyim: " + cvdeneyim2 + "\n\n";
}

if (cvydil.length > 0) {
  str += "Yabanci Dil: " + cvydil + "\n\n";
} 

if (cvpdil.length > 0) {
  str += "Programlama Dili: " + cvpdil + "\n\n";
} 

if (cvpdil2.length > 0) {
  str += "Programlama Dili: " + cvpdil2 + "\n\n";
} 

if (cvbeceri1.length > 0) {
  str += "Beceri: " + cvbeceri1 + "\n\n";
}

if (cvbeceri2.length > 0) {
  str += "Beceri: " + cvbeceri2 + "\n\n";
}

if (cvprogram1.length > 0) {
  str += "Program: " + cvprogram1 + "\n\n";
}
if (cvprogram2.length > 0) {
  str += "Program: " + cvprogram2 + "\n\n";
}
if (cvprogram3.length > 0) {
  str += "Program: " + cvprogram3 + "\n\n";
}

if (cvprogram4.length > 0) {
  str += "Program: " + cvprogram4 + "\n\n";
}

if (cvkurssertifika.length > 0) {
  str += "Kurs Sertifika: " + cvkurssertifika + "\n\n";
}

if (cvkurssertifika2.length > 0) {
  str += "Kurs Sertifika: " + cvkurssertifika2 + "\n\n";
}




return str;
  

}

// input kutularindan birinde bi degisiklik yapildiktan sonra 
// kullaniciya asagidaki mesaj verilir bu olay onchange ozelligiyle saglanir 
function guncelleuyari(){
  alert("Özgeçmişinizde değişiklik yaptınız. 'Indir' butonuna bastiginizda Ozgecmisinizin guncel hali inecektir. ")

}

// guncelleme islemi icin bu fonksiyonu kullaniyordum
// ama zaten form yapısi kullandigim icin guncelleme butonuna gerek kalmadi
// o yuzden fonksiyona da gerek kalmadi

function guncelle(fs1){

  // butonu disabled yapmıştım. tekrardan düzenlenebilir hale getirmek için aşağıdaki siteyi inceledim.
  // https://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery
  document.getElementById('fs1').disabled = false;
  alert("Özgeçmişinizi günceleyebilirsiniz. 'İndir' butonuna bastığınızda güncel hali inecektir.")
  // var cvad = form1.cvad.value;
  // var cvsoyad = form1.cvsoyad.value;
  // var cvadres = form1.cvadres.value;
  // var cvemail = form1.cvemail.value;
  // var cvtelefon = form1.cvtelefon.value;
  // var cvokul = form1.cvokul.value;
  // var cvokul2 = form1.cvokul2.value;
  // var cvdeneyim = form1.cvdeneyim.value;
  // var cvdeneyim2 = form1.cvdeneyim2.value;
  // var cvydil = form1.cvydil.value;
  // var cvpdil = form1.cvpdil.value;
  // var cvpdil2 = form1.cvpdil2.value;
  // var cvbeceri1 = form1.cvbeceri1.value;
  // var cvbeceri2 = form1.cvbeceri2.value;
  // var cvprogram1 = form1.cvprogram1.value;
  // var cvprogram2 = form1.cvprogram2.value;
  // var cvprogram3 = form1.cvprogram3.value;
  // var cvprogram4 = form1.cvprogram4.value;
  // var cvkurssertifika = form1.cvkurssertifika.value;
  // var cvkurssertifika2 = form1.cvkurssertifika2.value;

  // cvad.value=cvad;
  // cvsoyad.value=cvsoyad;
  // cvadres .value=cvadres;
  // cvemail.value=cvemail;
  // cvtelefon.value=cvtelefon
  // cvokul.value=cvokul
  // cvokul2.value = cvokul2
  // cvdeneyim.value = cvdeneyim
  // cvdeneyim2.value = cvdeneyim2
  // cvydil.value = cvydil
  // cvpdil.value = cvpdil
  // cvpdil2.value = cvpdil2
  // cvbeceri1.value = cvbeceri1
  // cvbeceri2.value = cvbeceri2
  // cvprogram1.value = cvprogram1
  // cvprogram2.value = cvprogram2
  // cvprogram3.value = cvprogram3
  // cvprogram4.value = cvprogram4
  // cvkurssertifika.value = cvkurssertifika
  // cvkurssertifika2.value = cvkurssertifika2



}

// ileri geri sarma icin asagidaki siteden faydalandim
// https://stackoverflow.com/questions/36731230/how-to-fast-forward-or-rewind-an-html5-video-to-a-certain-time-point
function geri(value) {
  var video = document.getElementById("Video1");
  video.currentTime -= value;
}

function ileri(value) {
  var video2 = document.getElementById("Video1");
  video2.currentTime += value;
}


//https://codesource.io/javascript-snippet-download-picture-video/


//durdur oynat
var vid = document.getElementById("Video1");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}














