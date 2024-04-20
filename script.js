// ==================js se category Event start==================
let subjectCategory =  document.querySelector(".subject");
let hoverCategory   =  document.querySelector(".categoryhover");
let aboutUsElement  =  document.querySelector(".about");
let ditelisElement  =  document.querySelector(".ditelis");
let serviceElement  =  document.querySelector(".vice");
let serviceBox      =  document.querySelector(".ser");


// =========category hover event ==============
subjectCategory.addEventListener("mouseenter",function(){
hoverCategory.style.transform = "scale(1)";
  setTimeout(function(){
hoverCategory.style.transform = "scale(0)";
  },6000);
  
});
// ---------end category---------

// [[[[[[[[[[[[[[[[[about us]]]]]]]]]]]]]]]]]
aboutUsElement.addEventListener("click",function(){
  ditelisElement.style.transform = "scale(1)";
    setTimeout(function(){
ditelisElement.style.transform = "scale(0)";
  },6000);
});
// {{{{{{{{{{{{{{{{{{{{end about us}}}}}}}}}}}}}}}}}}}}

// ==========service =========
serviceElement.addEventListener("click",function(){
  serviceBox.style.transform = "scale(1)";
  setTimeout(function(){
    serviceBox.style.transform = "scale(0)";
  },5000)
  
});
// ----------end serviceBox---------
  // \\\\\\\\\\\\\\\\\\\\ end \\\\\\\\\\\\\\\\\\\\\\\\\\\
// -----------------------------------------------------------
//___________________----service box js-----------------------

let tredingBtn  = document.querySelector(".treding-btn");
let tredingPage1 = document.querySelector(".treding-page1");
let cutPage     = document.querySelector(".cut");
let serviceTreding = document.querySelector(".treding");

serviceTreding.addEventListener("click",function(){
  tredingPage1.style.transform = "scale(1)";
});

tredingBtn.addEventListener("click",function(){
  tredingPage1.style.transform = "scale(1)";
  
});
cutPage.addEventListener("click",function(){
  tredingPage1.style.transform = "scale(0)";
  console.log("name");
});
// -------------------------------------
// ===========btn click and new page=====================

let treding = [
  {
    id:1,
    name:"All 35 Powerful Candlestick Patterns PDF Download in Hindi (FREE)",
    img:"https://i0.wp.com/learningisliving.dk/wp-content/uploads/2021/08/candlestick-pattern-header.jpg?fit=854%2C582&ssl=1",
    p:"35 शक्तिशाली कैंडलस्टिक पेटर्न की पीडीएफ हिंदी में डाउनलोड करें उदाहरण के साथ: अगर आप अपनी trading skills को सुधारना चाहते हैं तो यह All 35 Powerful Candlestick Patterns PDF आपके लिए एक उपयोगी गाइड है. …",
    btn:"Read More"
  },
   {
  id:2,
    name:"शेयर मार्केट में चार्ट पैटर्न क्या है, चार्ट पेटर्न के प्रकार – Chart Patterns in Hindi",
    img:"https://stockmarkethindi.in/wp-content/uploads/2022/12/20221208_113715.webp",
    p:"शेयर मार्केट में चार्ट पैटर्न क्या होते हैं | चार्ट पेटर्न के प्रकार | ट्रेडिंग चार्ट पेटर्न | chart patterns in hindi | Trading chart patterns in stock market | Types of chart patterns in hindi …",
    btn:"Read More"
  },
   {
   id:3,
    name:"(Top 10) बुलिश कैंडलस्टिक पेटर्न | Bullish Candlestick Pattern in Hindi",
    img:"https://i.ytimg.com/vi/_wixJAkKqqc/maxresdefault.jpg",
    p:"इस पोस्ट में हम आपको टॉप 10 ऐसे कैंडलस्टिक पेटर्न के बारे में बताने वाले हैं जो चार्ट पर बनते ही शेयर प्राइस को ऊपर ले जाते हैं, जिन्हें बुलिश कैंडलस्टिक पैटर्न (Bullish Candlestick Pattern) कहा …",
    btn:"Read More"
  },
   {
     id:4,
       name:"ट्रेडिंग कैसे सीखें (2023 में) | How to Learn Trading in Hindi",
    img:"https://stockmarkethindi.in/wp-content/uploads/2023/02/20230201_144949_6909.webp",
    p:"Trading kaise sikhe in hindi– ट्रेडिंग सीखने के लिए आपको डीमैट और ट्रेडिंग अकाउंट ओपन करना होगा. फिर बैंक खाते से ट्रेडिंग अकाउंट में पैसा ट्रांसफर करना है. अब आप शेयर मार्केट में स्टॉक को खरीदने …",
    btn:"Read More"
  },
   {
    id:5,
    name:"कैंडलस्टिक पेटर्न समझने के यह 7 बेसिक स्टेप्स जरूर फॉलो करें 👍",
    img:"https://media.licdn.com/dms/image/D4D12AQHMXodZM5XDOA/article-cover_image-shrink_600_2000/0/1684231993121?e=2147483647&v=beta&t=6cSlrO1uZNxgrqFmxSacujDQuijvVDXXGATm1h66iHI",
    p:"कैंडलस्टिक पेटर्न को कैसे समझें और सीखें, How to understand candlestick pattern in hindi, कैंडल चार्ट कैसे पढ़ें, How to read cabdlestick chart in hindi कैंडलस्टिक पेटर्न शेयर मार्केट में प्राइस मूवमेंट को एनालाइज करने के …",
    btn:"Read More"
  },
   {
     id:6,
    name:"Technical Analysis in Hindi | टेक्निकल एनालिसिस क्या है और कैसे करें?",
    img:"https://www.investopaper.com/wp-content/uploads/2021/07/technical-analysis.jpg",
    p:"3Technical Analysis in Hindi: जो लोग शेयर बाजार में ट्रेडिंग करते हैं उनके लिए तकनीकी विश्लेषण या टेक्निकल एनालिसिस सीखना बहुत जरूरी है। टेक्निकल एनालिसिस के द्वारा आप किसी भी स्टॉक के प्राइस मूवमेंट की भविष्यवाणी …",
    btn:"Read More"
  },
]


let tredingPage = document.querySelector(".treding-page");

tredingPage.innerHTML = tredingCall(treding);

function tredingCall(tredingOn)
{
  let html = "";
  for(let i=0;i<tredingOn.length;i++)
    {
      html += `
      <div class="treding-show-page"> 
      <h2>${tredingOn[i].name}</h2>
      <img src="${tredingOn[i].img}"
      <p>${tredingOn[i].p}</P>
      <div class="btn-right-side">
      <button>${tredingOn[i].btn}</button>
      </div>
      </div>`

    }
  return html;
}

// ---------------------stock market course js ---------------------------------


let stock = [
  {
    id:7,
    name:"शेयर मार्केट के बारे में 10 झूठी बातें जो आपको पता होनी चाहिए?",
    img:"https://www.stockmarkethindi.in/wp-content/uploads/2023/11/20231120_103556_6255.webp",
    p:"पूरे इंडिया में अगर शेयर मार्केट के बारे में सबसे बड़ा कोई झूठ है तो वो यह है कि शेयर बाजार जुआ है या फिर किस्मत का खेल है. मतलब यहां पर सिर्फ वही लोग पैसा कमा पाते हैं जिनकी किस्मत अच्छी होती है. …",
    btn:"Read More"
  },
   {
  id:8,
    name:"सेंसेक्स में पैसा निवेश कैसे करें? BSE Sensex kaise kharide",
    img:"https://www.jagranimages.com/images/newimg/23112022/23_11_2022-main-image_5_23223386.webp",
    p:"लेकिन बहुत सारे नए लोगों के मन में अक्सर सवाल होते हैं कि आखिर हम सेंसेक्स में अपना पैसा कैसे निवेश कर सकते हैं, सेंसेक्स में ट्रेडिंग कैसे कर सकते हैं या फिर सेंसेक्स के शेयर कैसे खरीद सकते हैं ताकि इसकी ग्रोथ से हमें भी फायदा मिल सके…",
    btn:"Read More"
  },
   {
   id:9,
    name:"ट्रेडिंग करने से पहले क्या देखना चाहिए?",
    img:"https://i.ytimg.com/vi/RKt3VovongA/maxresdefault.jpg",
    p:" ट्रेडिंग करने से पहले क्या करना चाहिए? मतलब जब आप शेयर मार्केट में ट्रेडिंग करते हैं तो कौन-कौन सी बातों का ध्यान रखना चाहिए, ट्रेडिंग करते समय क्या सोचना चाहिए, क्या-क्या देखना चाहिए, इसके बारे में आज हम विस्तार से चर्चा करने वाले हैं।…",
    btn:"Read More"
  },
   {
     id:10,
       name:"ट्रेडिंग कैसे सीखें (2024 में) | How to Learn Trading in Hindi",
    img:"https://stockmarkethindi.in/wp-content/uploads/2023/02/20230201_144949_6909.webp",
    p:"Trading kaise sikhe in hindi– ट्रेडिंग सीखने के लिए आपको डीमैट और ट्रेडिंग अकाउंट ओपन करना होगा. फिर बैंक खाते से ट्रेडिंग अकाउंट में पैसा ट्रांसफर करना है. अब आप शेयर मार्केट में स्टॉक को खरीदने …",
    btn:"Read More"
  },
   {
    id:11,
    name:"शेयर की कीमत कैसे बढ़ती या घटती है? | शेयर का प्राइस कम या ज्यादा क्यों होता है?",
    img:"https://stockmarkethindi.in/wp-content/uploads/2022/04/20220416_142756.jpg",
    p:"अगर आप भी केवल स्टॉक के ऊपर या नीचे जाने से, तेजी और मंदी से या फिर सेंसेक्स और निफ्टी में उछाल और गिरावट से प्रभावित होकर तुरंत निर्णय लेते हैं तो आप गलत रास्ते पर हैं…",
    btn:"Read More"
  },
   {
     id:12,
    name:"Technical Analysis in Hindi | टेक्निकल एनालिसिस क्या है और कैसे करें?",
    img:"https://www.investopaper.com/wp-content/uploads/2021/07/technical-analysis.jpg",
    p:"3Technical Analysis in Hindi: जो लोग शेयर बाजार में ट्रेडिंग करते हैं उनके लिए तकनीकी विश्लेषण या टेक्निकल एनालिसिस सीखना बहुत जरूरी है। टेक्निकल एनालिसिस के द्वारा आप किसी भी स्टॉक के प्राइस मूवमेंट की भविष्यवाणी …",
    btn:"Read More"
  },
]


let stockCourse = document.querySelector(".stock-course-page");

stockCourse.innerHTML = stockCall(stock);

function stockCall(tredingOn)
{
  let html = "";
  for(let i=0;i<tredingOn.length;i++)
    {
      html += `
      <div class="stock-show-page"> 
      <h2>${tredingOn[i].name}</h2>
      <img src="${tredingOn[i].img}"
      <p>${tredingOn[i].p}</P>
      <div class="btn-right-side">
      <button>${tredingOn[i].btn}</button>
      </div>
      </div>`

    }
  return html;
}

// ---------------------
let stockBtn  = document.querySelector(".stock-btn");
let stockCoursejs = document.querySelector(".stock-course-js");
let serviceCourse = document.querySelector(".course");
let cuts = document.querySelector(".cuts");


serviceCourse.addEventListener("click",function(){
  stockCoursejs.style.transform = "scale(1)";
});

stockBtn.addEventListener("click",function(){
  stockCoursejs.style.transform = "scale(1)";
  
});
cuts.addEventListener("click",function(){
  stockCoursejs.style.transform = "scale(0)";
  console.log("name")
});
// ---------------------stock js end -------