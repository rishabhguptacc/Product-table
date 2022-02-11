var proTab = [];

function addProduct() {
  var id = document.getElementById("idInput").value;
  var name = document.getElementById("nameInput").value;
  var price = document.getElementById("priceInput").value;

  var productObject = {};

  productObject.Id = id;
  productObject.Name = name;
  productObject.Price = price;

  

  if (ifIdExists(id))
   alert("Id already exists.");
  else
    proTab.push(productObject);

  outputTable();
}



function ifIdExists(id){

  for(var i= 0; i<proTab.length; i++)
    {
      if ( proTab[i].Id == id )
        return true;
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
      "<tr> <td> " +
      proTab[i].Id +
      "</td><td> " +
      proTab[i].Name +
      "</td><td> " +
      proTab[i].Price +
      "</td><td> " +
      '<a href = "#" onclick = editList()> Edit </a>\
      <a href = "#" onclick = deleteList()> Delete </a>\
      </td></tr> ';
  }

  returnOut += "</table>";

  document.getElementById("result").innerHTML = returnOut;
}
