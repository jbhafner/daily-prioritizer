$("document").ready(function() {
  console.log("scripts.js connected!");
  const inputs = document.querySelectorAll("textarea");

  inputs.forEach(function(listItem) {
    let itemName = $(listItem).attr("id");
    let chkItemName = `<input type='checkbox' name='chk-${itemName}>`;
    console.log(chkItemName);
    $(listItem).append(chkItemName);
    let updateItem = localStorage.getItem("DP/" + itemName);
    $(listItem).text(updateItem);
  });

  inputs.forEach(function(listItem) {
    listItem.addEventListener("keyup", function(event) {
      if (event.which === 13) {
        $(listItem).blur();
        console.log("exited field", "listItem", listItem, "event", event);
        let inputItem = $(listItem).val();
        let itemName = $(listItem).attr("id");
        console.log("typeof listItem", typeof listItem);
        console.log("currentItem", currentInput, "inputItem", inputItem);
        console.log("id attr", itemName);
        localStorage.setItem("DP/" + itemName, inputItem);
      }
    });
  });
  console.log("inputs", inputs);
});
