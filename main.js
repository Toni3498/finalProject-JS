let fileA = "https://jsonplaceholder.typicode.com/posts";
fetch(fileA)
  .then((x) => x.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      document.getElementById(
        "content"
      ).innerHTML += `<div class="contents"data-aos="flip-right"><h1>${data[i].title}</h1><p>${data[i].body}</p><p> <a href="detail.html?id=${data[i].id}">Read more</a></p></div><br>`;
    }
  })
  .catch((err) => console.log("error", err));
