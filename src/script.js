var proTab = [];

function addProduct() {
  var id = document.getElementById("idInput").value;
  var name = document.getElementById("nameInput").value;
  var price = document.getElementById("priceInput").value;

  var productObject = {};

  productObject.Id = id;
  productObject.Name = name;
  productObject.Price = price;

  // var returnOut = "<table> <tr> <th> ID</th> <th> Name </th> <th> Age</th> </th>";
  // returnOut += "</table>"
  // document.getElementById("result").innerHTML = returnOut;

  // console.log(productObject.Id);

  proTab.push(productObject);

  // console.log("table " + proTab)

  outputTable();
}

function outputTable() {
  var returnOut =
    '<table> <tr> <th class="tabH"> ID</th> <th class="tabH"> Name </th> <th class="tabH" > Age</th> <th class="tabH" > Action </th>  </tr>';

  for (var i = 0; i < proTab.length; i++) {
    returnOut +=
      "<tr> <td> " +
      proTab[i].Id +
      "</td><td> " +
      proTab[i].Name +
      "</td><td> " +
      proTab[i].Price +
      "</td><td> " +
      '<a href = "#"> Edit </a></td></tr> ';
  }

  returnOut += "</table>";

  document.getElementById("result").innerHTML = returnOut;
}
