var table = document.getElementById("myTable");
function submitForm() {
    
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("genderState").value;
    var pizzaCheckbox = document.getElementById("pizzaCheckbox");
    var burgerCheckbox = document.getElementById("burgerCheckbox");
    var sandwitchCheckbox= document.getElementById("sandwitchCheckbox");
    var friesCheckbox = document.getElementById("friesCheckbox");
    var noodlesCheckbox = document.getElementById("noodlesCheckbox");

   
    var foodChoices = [];
    if (pizzaCheckbox && pizzaCheckbox.checked) foodChoices.push("Pizza");
    if (burgerCheckbox && burgerCheckbox.checked) foodChoices.push("Burger");
    if (sandwitchCheckbox && sandwitchCheckbox.checked) foodChoices.push("Sandwitch");
    if (friesCheckbox && friesCheckbox.checked) foodChoices.push("French fries");
    if (noodlesCheckbox && noodlesCheckbox.checked) foodChoices.push("Noodles");
    var food = foodChoices.join(", ");
    var state = document.getElementById("stateSelect").value;
    var country = document.getElementById("countryState").value;
   
    
   
   var row = table.insertRow(-1);

    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

   
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;
    document.getElementById("myForm").reset();
}
