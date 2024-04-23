function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Корректно";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 15 символов";
        return false;
    }
}

function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Корректно";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Требуется ввести от 2 до 20 символов";
        return false;
    }
}

function checkProduct() {
    let product = document.getElementById("product").value;
    let regex = /^[a-zA-Z\s]{2,40}$/;

    if (regex.test(product)) {
        document.getElementById("product_Check").style.color = "green";
        document.getElementById("product_Check").innerHTML = "Корректно";
        return true;
    }
    else {
        document.getElementById("product_Check").style.color = "red";
        document.getElementById("product_Check").innerHTML = "Требуется ввести продукт от 2 до 40 символов. Для нескольких продуктов заполните форму снова";
        return false;
    }
}

function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/; 

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Корректно";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите телефон по образцу";
        return false;
    }
}

function checkCity() {
    let city = document.getElementById("city").value;
    let regex = /^[a-zA-Z\s\-]{2,40}$/;

    if (regex.test(city)) {
        document.getElementById("city_Check").style.color = "green";
        document.getElementById("city_Check").innerHTML = "Корректно";
        return true;
    }
    else {
        document.getElementById("city_Check").style.color = "red";
        document.getElementById("city_Check").innerHTML = "Введите корректный населенный пункт";
        return false;
    }
}

function outputData() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let product = document.getElementById("product").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;

    if (first != "" && last != "" && product != "" && phone != "" && city != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Благодарим за доверие, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка принята к рассмотрению.</p>";
        document.getElementById("summary").innerHTML += "<p>Ваш телефон: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Место доставки: " + city + ".</br>";
        document.getElementById("summary").innerHTML += "Желаемый продукт: " + product + ".</br>";
        document.getElementById('sendOrder').style.color = "rgb(248, 146, 38)";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Заполните все поля";
        
    }
}
