fetch ("footer.html")
.then(response =>response.text())
.then(data =>{
  console.log(data);

  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(data, "text/html");
  const content = htmlDoc.querySelector("body").innerHTML;

  const elementPaste = document.querySelector(".footer");
  elementPaste.innerHTML = content;
})

.catch(err =>console.log(err));


