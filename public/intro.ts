

const url = 'http://localhost:3000/coffee/list';
const options: RequestInit = {
  method: 'GET',

};


const main = document.createElement("div");
main.className = "main";

const button = document.createElement("button");
button.textContent = "ADD MORE COFFEE"; 
button.addEventListener("click", function () {
  window.location.href = "http://localhost:5000/add.html"; 
});


main.appendChild(button);

const coffeeClassElements = document.getElementsByClassName("coffee");


if (coffeeClassElements.length > 0) {
  const firstCoffeeElement = coffeeClassElements[0];


  if (firstCoffeeElement.parentElement) {
    firstCoffeeElement.parentElement.insertBefore(main, firstCoffeeElement.nextElementSibling);
  }
}



try {
  fetch(url, options)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const app = document.getElementById("app");

  for (let i = 0; i < result.length; i++) {
    
    const cardContainer = document.createElement("div");
    cardContainer.className = "col-md-4"; 



    const card = document.createElement("div");
    card.className = "card";


    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = result[i].imageurl;
    img.alt = result[i].name;


    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = result[i].name

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = `Size: ${result[i].size}`;

    const cardText2 = document.createElement("p");
    cardText2.className = "card-text";
    cardText2.textContent = `Flavour: ${result[i].flavour}`;




    const button2 = document.createElement("a");
    button2.className = "btn btn-danger";
    button2.href = "#";
    button2.textContent = "item";




    const button = document.createElement("a");
    button.className = "btn btn-danger";
    button.href = "#";
    button.textContent = "Delete item";
    button.addEventListener('click', () => {
      const deleteUrl = `http://localhost:3000/coffee/${result[i].id}`;

      fetch(deleteUrl, {
        method: 'DELETE',
      }).then(response => {
        if (response.ok) {

          window.alert('Entity deleted successfully!');
          window.location.reload()
        } else {
 
          window.alert('Entity was not deleted');
          window.location.reload()
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });

 

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText2);
    

    cardBody.appendChild(button);


    card.appendChild(img);
    card.appendChild(cardBody);


    cardContainer.appendChild(card);
  
    app.appendChild(cardContainer);
 




    if ((i + 1) % 3 === 0) {
      app.appendChild(document.createElement("div")); 
    }
  }
    })
    .catch(error => console.error(error));
} catch (error) {
  console.error(error);
}