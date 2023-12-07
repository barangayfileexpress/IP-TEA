document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkoutForm");

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect user input values
        const lastName = document.getElementById("lastName").value;
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const address = document.getElementById("address").value;
        const purchasedItem = document.getElementById("purchasedItem").value;

        // Do something with the collected data
        console.log("Last Name:", lastName);
        console.log("First Name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Address:", address);
        console.log("Purchased Item:", purchasedItem);
    });
});
