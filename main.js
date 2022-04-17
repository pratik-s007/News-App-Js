//API KEY: 012fee9eb7074112b4ba64bf7f46def9

let source = "bbc-news";
let apikey = "012fee9eb7074112b4ba64bf7f46def9";

//Get news Container
let newsAcordion = document.getElementById("newsaccordion");

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,
  true
);

//What to do when when responce is ready
xhr.onload = function () {
  if (this.status === 200) {
    // console.log(this.responseText);
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHTML = "";
    console.log(articles);
    articles.forEach(function (element, index) {
        console.log(element,index);
      let news = `<div class="card"> 
                        <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn " type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1}:</b>${element["title"]}
                            </button>
                        </h2>
                        </div>
                    
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                            <div class="card-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read More Here</a> </div>
                        </div>
                     </div>`;
      newsHTML += news;
    });

    newsAcordion.innerHTML = newsHTML;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
