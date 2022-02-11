var proTab = [];

// var gId, gName , gPrice ;

function addProduct() {
  //  var id , name, price = inputBlockFetch(gId, gName, gPrice);

  var id = document.getElementById("idInput").value;
  var name = document.getElementById("nameInput").value;
  var price = document.getElementById("priceInput").value;

  var productObject = {};

  productObject.Id = id;
  productObject.Name = name;
  productObject.Price = price;

  if (ifIdExists(id)) alert("Id already exists.");
  else proTab.push(productObject);

  outputTable();
}

// function inputBlockFetch(id , name  , price){

//   var id = document.getElementById("idInput").value;
//   var name = document.getElementById("nameInput").value;
//   var price = document.getElementById("priceInput").value;
//   return id, name, price;

// }

function ifIdExists(id) {
  for (var i = 0; i < proTab.length; i++) {
    if (proTab[i].Id == id) return true;
  }
  return false;
}

function outputTable() {
  var returnOut =
    '<table id = "oPTable"> <tr>\
    <th > ID</th>\
    <th > Name </th>\
    <th > Age</th>\
    <th> Action </th> \
    </tr>';

  for (var i = 0; i < proTab.length; i++) {
    returnOut +=
      "<tr> \
        <td> " +
      proTab[i].Id +
      "</td>\
        <td> " +
      proTab[i].Name +
      "</td>\
        <td> " +
      proTab[i].Price +
      "</td>\
        <td> " +
      "<a id='edit' href = '#' \
        onclick ='editList(\"" +
      proTab[i].Id +
      '", "' +
      proTab[i].Name +
      '","' +
      proTab[i].Price +
      "\")'\
        >Edit</a>\
        <a id='edit' href = '#' \
        onclick ='deleteList(\"" +
      proTab[i].Id +
      '", "' +
      proTab[i].Name +
      '","' +
      proTab[i].Price +
      "\")'\
        >Delete</a>\
        </td>\
      </tr>";

    // onclick ='editList(\""+proTab[i].Id +"\")'\

    // <a id=\"del\" href = "#" \
    // onclick ="deleteList('+proTab[i].Id +','+ proTab[i].Name+ ','+ proTab[i].Price+')"\
    // >Delete</a>\
  }

  returnOut += "</table>";

  document.getElementById("result").innerHTML = returnOut;
}

function editList(eId, eName, ePrice) {
  // console.log(eId, eName, ePrice);
  var Id = eId;
  var Name = eName;
  var Price = ePrice;

  document.getElementById("idInput").value = Id;
  document.getElementById("nameInput").value = Name;
  document.getElementById("priceInput").value = Price;

  document.getElementById("addProduct").value = "UPDATE PRODUCT";

console.log(document.getElementById("addProduct").value)

  Id = document.getElementById("idInput").value ;
  Name = document.getElementById("nameInput").value;
  Price = document.getElementById("priceInput").value;

  // return 
  // console.log(eId, eName,ePrice);
}

function deleteList(dId, dName, dPrice) {
  console.log(dId, dName, dPrice);
}
