$("document").ready(function() {
  console.log("scripts.js connected!");

  // Update all items from local storage on loading
  const inputs = document.querySelectorAll("textarea");
  inputs.forEach(updateAll);

  // Add event listener to all items
  inputs.forEach(function(listItem) {
    listItem.addEventListener("keyup", function(event) {
      // if (event.which === 13) {
        event.preventDefault();
        // $(listItem).blur();
        console.log("exited field", "listItem", listItem, "event", event);
        let inputItem = $(listItem).val();
        let itemName = $(listItem).attr("id");
        console.log("typeof listItem", typeof listItem);
        console.log("inputItem", inputItem);
        console.log("id attr", itemName);
        localStorage.setItem("DP/" + itemName, inputItem);
      // }
    });
  });

  // Add event listener to Clear All Button
  let clearAllBtn = document.querySelector("#clearAllBtn");
  clearAllBtn.addEventListener("click", function(event) {
    event.preventDefault();
    clearAll();
    updateAll();
  });

  // Add event listener to Print Button
  let printBtn = document.querySelector("#printBtn");
  printBtn.addEventListener("click", function(event) {
    event.preventDefault();
    printPage();
  });
  console.log('clearAllBtn', clearAllBtn);
  console.log("inputs", inputs);
});

// ===== FUNCTIONS =====
function updateAll(listItem) {
  const inputs = document.querySelectorAll("textarea");
  let itemName = $(listItem).attr("id");
  let chkItemName = `<input type='checkbox' name='chk-${itemName}>`;
  console.log(chkItemName);
  $(listItem).append(chkItemName);
  let updateItem = localStorage.getItem("DP/" + itemName);
  console.log('listItem.text')
  $(listItem).text(updateItem);
};

function clearItem(listItem) {
  let itemName = $(listItem).attr("id");
  console.log('itemName',itemName);
  localStorage.removeItem("DP/"+itemName);
  $(listItem).empty();
}

function clearAll(item) {
  console.log("function selected");
  let confirmButton = confirm("Are you sure you want to clear everything?");
  console.log('confirmButton', confirmButton);
  if (confirmButton===true) {
  const inputs = document.querySelectorAll("textarea");
  inputs.forEach(clearItem);    
  }
};

function printPage() {
  printJS('printArea', 'html');
};
