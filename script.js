function Item (name, weight, price, place) {
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.place = place;
}

var Milk = new Item ('Milk', 1, 20, '1st room');

var Cofee = new Item ('Cofee', 0.4, 55, '2nd room');

var Cigarettes = new Item ('Cigarettes', 0.08, 17, '3rd room');

var Bread = new Item ('Bread', 0.5, 8.5, '1st room');

var Sugar = new Item ('Sugar', 1, 21.5, '2nd room');

var Sausage = new Item ('Sausage', 0.7, 32.8, '3rd room');

var Sweets = new Item ('Sweets', 0.2, 15, '1st room');

var Beer = new Item ('Beer', 0.5, 18, '3rd room');

var Tea = new Item ('Tea', 0.25, 37.6, '2nd room');

var Water = new Item ('Water', 2, 16.9, '1st room');

var Tomatoes = new Item ('Tomatoes', 0.25, 21.8, '2nd room');

var Butter = new Item ('Butter', 0.33, 19.99, '1st room');

Item.prototype.find = function () {
  alert("You can find this in " + this.place);
}

Item.prototype.getWeight = function () {
  alert(this.name + " weight is " + this.weight + " kg");
}

Item.prototype.getPrice = function () {
  alert(this.name +  " price is " + this.price + " grn");
}

Item.prototype.buyItem = function () {
  var name = this.name;
  var price = this.price;
  var remainder = 0;
  alert("You want to buy " + this.name + ". Give me " + this.price + " grn, please.");
  var userMoney = prompt("Give me money please:", this.price);

  if (!isNaN(userMoney)) {
    if (userMoney == this.price) {
      alert("You bought a " + this.name);
      showBill(name, price, remainder);
    } else if (userMoney < this.price) {
        alert("You don't have enough money!");
    } else {
      remainder = userMoney - this.price;
      remainder = remainder.toFixed(2);
      alert("Take your remainder: " + remainder + " grn");
      showBill(name, price, remainder);
    }
  } else {
    alert("You can't buy wihout money. Give me money next time!");
  }

  function showBill (name, price, remainder) {
    function clearAll () {
      var clear = document.getElementById("myList");
      clear.innerHTML = "";
    }

    clearAll();
  
    var tr = document.createElement("TR");        
    var textnode = document.createTextNode("ITEM");
    tr.appendChild(textnode);                   
    document.getElementById("myList").appendChild(tr);

    var tr = document.createElement("TR");        
    textnode = document.createTextNode("PRICE");
    tr.appendChild(textnode);                   
    document.getElementById("myList").appendChild(tr);

    var tr = document.createElement("TR");        
    var textnode = document.createTextNode("REMAINDER");
    tr.appendChild(textnode);                   
    document.getElementById("myList").appendChild(tr);

    var td = document.createElement("TD");        
    var textnode = document.createTextNode(name);
    td.appendChild(textnode);                   
    document.getElementById("myList").appendChild(td);

    var td = document.createElement("TD");        
    textnode = document.createTextNode(price + " grn");
    td.appendChild(textnode);                   
    document.getElementById("myList").appendChild(td);

    var td = document.createElement("TD");        
    textnode = document.createTextNode(remainder + " grn");
    td.appendChild(textnode);                   
    document.getElementById("myList").appendChild(td);

    alert("You can see bill on the screen!");
  }
}