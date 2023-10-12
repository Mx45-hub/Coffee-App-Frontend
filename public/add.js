document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".coffeform"); 

    form.addEventListener("submit", function (event) {
        
        event.preventDefault();

        setTimeout(function () {
            location.reload();
            window.alert('Coffee was added');
        }, 1000); 
    });
});