const input = document.querySelector(".input")
const form = document.querySelector(".form")
const imageContainer = document.querySelector(".imageContainer")
const showMore = document.querySelector(".showmore")

let keyword = "";
let page = 0;
const accessKey = "QdQmzuG2SbNaei6azYIGmq9aZ-hq3pzmvbMkkoLI_hQ"

async function searchImage(){
  keyword = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  const results = data.results;

  results.forEach(result => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    // const imageLink = document.createElement("a");
    // imageLink.href = result.links.html;
    // imageLink.target = "_blank";

    // imageLink.appendChild(image);
    imageContainer.appendChild(image);
  });
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(page > 0){
    imageContainer.innerHTML = "";
    page = 1;
    searchImage();
  } else{
    searchImage();
  }
})

showMore.addEventListener('click', (e)=>{
  e.preventDefault();
  page++;
  searchImage();
})