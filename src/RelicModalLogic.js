const charNames = characterOption.charName;
const relicSlots = relicSetsData.relicSlot;
const relicRarities = relicMainData;
const relicAscenscions = relicAscenscionData;
const relicSets = relicSetsData;

window.onload = function () {
  var relicRaritySel = document.getElementById("relicRarity");
  var relicAscenscionSel = document.getElementById("relicAscenscion");
  var relicSubStatSel1 = document.getElementById("relicSubStat1");
  var relicSubStatValueSel1 = document.getElementById("relicSubStatValue1");
  var relicSlotSel = document.getElementById("relicSlot");
  var relicSetSel = document.getElementById("relicSet");

  for (var x in relicAscenscionData) {
    relicRaritySel.appendChild(new Option(x, x));
  }
  relicRaritySel.onchange = function () {
    //empty Chapters- and Topics- dropdowns

    //subjectSel.length = 1;
    relicAscenscionSel.length = 1;
    relicSubStatSel1.length = 1;
    //display correct values
    for (var y in relicAscenscionData[this.value]) {
      relicAscenscionSel.appendChild(new Option(relicAscenscionData[this.value][y], y));
    }
    for (var y in relicSubData1[this.value]) {
      relicSubStatSel1.options[relicSubStatSel1.options.length] = new Option(y, y);
    }
  };
  relicSubStatSel1.onchange = function () {
    relicSubStatValueSel1.length = 1;

    for (var y in relicSubData1[this.value]) {
      relicSubStatValueSel1.options[relicSubStatValueSel1.options.length] = new Option(y, y);
    }
  };
};
function handleRelicSlotChange(event) {
  // Handle the change event
  console.log("Selected Slot:", event.target.value);
  // Implement your logic here
}
document.querySelectorAll(".radio_relicSlotBtn").forEach((radio) => {
  radio.addEventListener("change", function () {
    const selectedSlot = this.value;
    updateRelicSet(selectedSlot);
    updateRelicMainStat(selectedSlot, document.getElementById("relicRarity").value);
  });
});

document.getElementById("relicRarity").addEventListener("change", function () {
  const selectedRarity = this.value;
  updateRelicAscension(selectedRarity);
  updateRelicMainStat(document.querySelector('input[name="relicSlotBtn"]:checked').value, selectedRarity);
});

function updateRelicSet(selectedSlot) {
  const relicSetSelect = document.getElementById("relicSet");
  relicSetSelect.innerHTML = ""; // Clear existing options

  RelicSetsData[selectedSlot].forEach((set) => {
    const option = document.createElement("option");
    option.value = set;
    option.textContent = set;
    relicSetSelect.appendChild(option);
  });
}
function updateRelicMainStat(slot, rarity) {
  const mainStatSelect = document.getElementById("relicMainStat");
  mainStatSelect.innerHTML = ""; // Clear existing options

  RelicMainData[`${rarity}-${slot}`].forEach((stat) => {
    const option = document.createElement("option");
    option.value = stat;
    option.textContent = stat;
    mainStatSelect.appendChild(option);
  });
}
function updateRelicAscension(rarity) {
  const ascensionSelect = document.getElementById("relicAscenscion");
  ascensionSelect.innerHTML = ""; // Clear existing options

  let relicRarity = "5★" ? (relicAscenscions = ["+15", "+14", "+13", "+12", "+11", "+10", "+9", "+8", "+7", "+6", "+5", "+4", "+3", "+2", "+1", "+0"]) : "--";
  // Example: Add logic based on your data structure
  const ascensions = [0]; // Modify as needed
  ascensions.forEach((ascension) => {
    const option = document.createElement("option");
    option.value = ascension;
    option.textContent = ascension;
    ascensionSelect.appendChild(option);
  });
}
