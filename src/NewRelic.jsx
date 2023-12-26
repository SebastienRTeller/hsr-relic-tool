import { React, useState, useEffect } from "react";
import { ReactDOM } from "react";

function NewRelic() {
  const [equippedBy, setEquippedBy] = useState("");
  const [relicRarity, setRelicRarity] = useState("");
  const [ascenscion, setAscenscion] = useState("");
  const [relicSlot, setRelicSlot] = useState("");
  const [relicSet, setRelicSet] = useState("");
  const [mainStat, setMainStat] = useState([0]);
  const [mainStatValue, setMainStatValue] = useState("");
  const [subStat1, setSubStat1] = useState("");
  const [subStat1Value, setSubStat1Value] = useState("");
  const [subStat2, setSubStat2] = useState("");
  const [subStat2Value, setSubStat2Value] = useState("");
  const [subStat3, setSubStat3] = useState("");
  const [subStat3Value, setSubStat3Value] = useState("");
  const [subStat4, setSubStat4] = useState("");
  const [subStat4Value, setSubStat4Value] = useState("");

  const handleEquippedByChange = (e) => {
    setEquippedBy(e.target.value);
  };

  const handleRelicRarityChange = (e) => {
    setRelicRarity(e.target.value);
    setAscenscion("");
    setMainStat("");
    setMainStatValue("");
    setSubStat1("");
    setSubStat1Value("");
    setSubStat2("");
    setSubStat2Value("");
    setSubStat3("");
    setSubStat3Value("");
    setSubStat4("");
    setSubStat4Value("");
  };

  const handleSetAscenscionChange = (e) => {
    setAscenscion(e.target.value);
  };

  function handleRelicSlotChange(e) {
    setRelicSlot(e.target.value);
    setRelicSet("");
    setMainStatValue("");
  }

  const handleMainStatChange = (e) => {
    setMainStat(e.target.value);
    setMainStatValue("");
  };
  const handleMainStatValueChange = (e) => {
    setMainStatValue(e.target.value);
  };

  const handleSubStat1Change = (e) => {
    setSubStat1(e.target.value);
    setSubStat1Value("");
  };
  const handleSubStat1ValueChange = (e) => {
    setSubStat1Value(e.target.value);
  };

  const handleSubStat2Change = (e) => {
    setSubStat2(e.target.value);
    setSubStat2Value("");
  };
  const handleSubStat2ValueChange = (e) => {
    setSubStat2Value(e.target.value);
  };

  const handleSubStat3Change = (e) => {
    setSubStat3(e.target.value);
    setSubStat3Value("");
  };
  const handleSubStat3ValueChange = (e) => {
    setSubStat3Value(e.target.value);
  };

  const handleSubStat4Change = (e) => {
    setSubStat4(e.target.value);
    setSubStat4Value("");
  };
  const handleSubStat4ValueChange = (e) => {
    setSubStat4Value(e.target.value);
  };

  useEffect(() => {
    setMainStatValue(
      relicRarity === "4★"
        ? mainStat === "HP"
          ? ascenscion === "+0"
            ? "90"
            : ascenscion === "+1"
            ? "121"
            : ascenscion === "+2"
            ? "153"
            : ascenscion === "+3"
            ? "185"
            : ascenscion === "+4"
            ? "216"
            : ascenscion === "+5"
            ? "248"
            : ascenscion === "+6"
            ? "279"
            : ascenscion === "+7"
            ? "311"
            : ascenscion === "+8"
            ? "343"
            : ascenscion === "+9"
            ? "374"
            : ascenscion === "+10"
            ? "406"
            : ascenscion === "+11"
            ? "438"
            : ascenscion === "+12"
            ? "469"
            : "--"
          : mainStat === "ATK"
          ? ascenscion === "+0"
            ? "45"
            : ascenscion === "+1"
            ? "60"
            : ascenscion === "+2"
            ? "76"
            : ascenscion === "+3"
            ? "92"
            : ascenscion === "+4"
            ? "108"
            : ascenscion === "+5"
            ? "124"
            : ascenscion === "+6"
            ? "139"
            : ascenscion === "+7"
            ? "155"
            : ascenscion === "+8"
            ? "171"
            : ascenscion === "+9"
            ? "187"
            : ascenscion === "+10"
            ? "203"
            : ascenscion === "+11"
            ? "219"
            : ascenscion === "+12"
            ? "234"
            : "--"
          : mainStat === "HP%" || mainStat === "ATK%" || mainStat === "Effect Hit Rate"
          ? ascenscion === "+0"
            ? "5.5%"
            : ascenscion === "+1"
            ? "7.5%"
            : ascenscion === "+2"
            ? "9.4%"
            : ascenscion === "+3"
            ? "11.3%"
            : ascenscion === "+4"
            ? "13.3%"
            : ascenscion === "+5"
            ? "15.2%"
            : ascenscion === "+6"
            ? "17.1%"
            : ascenscion === "+7"
            ? "19.1%"
            : ascenscion === "+8"
            ? "21.0%"
            : ascenscion === "+9"
            ? "22.9%"
            : ascenscion === "+10"
            ? "24.9%"
            : ascenscion === "+11"
            ? "26.8%"
            : ascenscion === "+12"
            ? "28.8%"
            : "--"
          : mainStat === "DEF%"
          ? ascenscion === "+0"
            ? "6.9%"
            : ascenscion === "+1"
            ? "9.3%"
            : ascenscion === "+2"
            ? "11.7%"
            : ascenscion === "+3"
            ? "14.2%"
            : ascenscion === "+4"
            ? "16.6%"
            : ascenscion === "+5"
            ? "19.0%"
            : ascenscion === "+6"
            ? "21.4%"
            : ascenscion === "+7"
            ? "23.8%"
            : ascenscion === "+8"
            ? "26.3%"
            : ascenscion === "+9"
            ? "28.7%"
            : ascenscion === "+10"
            ? "31.1%"
            : ascenscion === "+11"
            ? "33.5%"
            : ascenscion === "+12"
            ? "35.9%"
            : "--"
          : mainStat === "CRIT Rate"
          ? ascenscion === "+0"
            ? "4.1%"
            : ascenscion === "+1"
            ? "5.6%"
            : ascenscion === "+2"
            ? "7.1%"
            : ascenscion === "+3"
            ? "8.5%"
            : ascenscion === "+4"
            ? "10.0%"
            : ascenscion === "+5"
            ? "11.4%"
            : ascenscion === "+6"
            ? "12.9%"
            : ascenscion === "+7"
            ? "14.3%"
            : ascenscion === "+8"
            ? "15.8%"
            : ascenscion === "+9"
            ? "17.2%"
            : ascenscion === "+10"
            ? "18.7%"
            : ascenscion === "+11"
            ? "20.1%"
            : ascenscion === "+12"
            ? "21.6%"
            : "--"
          : mainStat === "CRIT DMG" || mainStat === "Break Effect"
          ? ascenscion === "+0"
            ? "8.3%"
            : ascenscion === "+1"
            ? "11.2%"
            : ascenscion === "+2"
            ? "14.1%"
            : ascenscion === "+3"
            ? "17.0%"
            : ascenscion === "+4"
            ? "19.9%"
            : ascenscion === "+5"
            ? "22.8%"
            : ascenscion === "+6"
            ? "25.7%"
            : ascenscion === "+7"
            ? "28.6%"
            : ascenscion === "+8"
            ? "31.5%"
            : ascenscion === "+9"
            ? "34.4%"
            : ascenscion === "+10"
            ? "37.3%"
            : ascenscion === "+11"
            ? "40.2%"
            : ascenscion === "+12"
            ? "43.1%"
            : "--"
          : mainStat === "Outgoing Healing"
          ? ascenscion === "+0"
            ? "4.4%"
            : ascenscion === "+1"
            ? "6.0%"
            : ascenscion === "+2"
            ? "7.5%"
            : ascenscion === "+3"
            ? "9.1%"
            : ascenscion === "+4"
            ? "10.6%"
            : ascenscion === "+5"
            ? "12.2%"
            : ascenscion === "+6"
            ? "13.7%"
            : ascenscion === "+7"
            ? "15.3%"
            : ascenscion === "+8"
            ? "16.8%"
            : ascenscion === "+9"
            ? "18.4%"
            : ascenscion === "+10"
            ? "19.9%"
            : ascenscion === "+11"
            ? "21.5%"
            : ascenscion === "+12"
            ? "23.0%"
            : "--"
          : mainStat === "SPD"
          ? ascenscion === "+0"
            ? "3"
            : ascenscion === "+1"
            ? "4"
            : ascenscion === "+2"
            ? "5"
            : ascenscion === "+3"
            ? "7"
            : ascenscion === "+4"
            ? "8"
            : ascenscion === "+5"
            ? "9"
            : ascenscion === "+6"
            ? "10"
            : ascenscion === "+7"
            ? "11"
            : ascenscion === "+8"
            ? "12"
            : ascenscion === "+9"
            ? "13"
            : ascenscion === "+10"
            ? "14"
            : ascenscion === "+11"
            ? "15"
            : ascenscion === "+12"
            ? "16"
            : "--"
          : mainStat === "Physical DMG" || mainStat === "Fire DMG" || mainStat === "Ice DMG" || mainStat === "Lightning DMG" || mainStat === "Wind DMG" || mainStat === "Quantum DMG" || mainStat === "Imaginary DMG"
          ? ascenscion === "+0"
            ? "5.0%"
            : ascenscion === "+1"
            ? "6.7%"
            : ascenscion === "+2"
            ? "8.5%"
            : ascenscion === "+3"
            ? "10.2%"
            : ascenscion === "+4"
            ? "11.9%"
            : ascenscion === "+5"
            ? "13.7%"
            : ascenscion === "+6"
            ? "15.4%"
            : ascenscion === "+7"
            ? "17.2%"
            : ascenscion === "+8"
            ? "18.9%"
            : ascenscion === "+9"
            ? "20.7%"
            : ascenscion === "+10"
            ? "22.4%"
            : ascenscion === "+11"
            ? "24.1%"
            : ascenscion === "+12"
            ? "25.9%"
            : "--"
          : mainStat === "Energy Regeneration"
          ? ascenscion === "+0"
            ? "2.5%"
            : ascenscion === "+1"
            ? "3.4%"
            : ascenscion === "+2"
            ? "4.2%"
            : ascenscion === "+3"
            ? "5.1%"
            : ascenscion === "+4"
            ? "6.0%"
            : ascenscion === "+5"
            ? "6.8%"
            : ascenscion === "+6"
            ? "7.7%"
            : ascenscion === "+7"
            ? "8.6%"
            : ascenscion === "+8"
            ? "9.5%"
            : ascenscion === "+9"
            ? "10.3%"
            : ascenscion === "+10"
            ? "11.2%"
            : ascenscion === "+11"
            ? "12.1%"
            : ascenscion === "+12"
            ? "12.9%"
            : "--"
          : "--"
        : relicRarity === "5★"
        ? mainStat === "HP"
          ? ascenscion === "+0"
            ? "112"
            : ascenscion === "+1"
            ? "152"
            : ascenscion === "+2"
            ? "191"
            : ascenscion === "+3"
            ? "231"
            : ascenscion === "+4"
            ? "270"
            : ascenscion === "+5"
            ? "310"
            : ascenscion === "+6"
            ? "349"
            : ascenscion === "+7"
            ? "389"
            : ascenscion === "+8"
            ? "429"
            : ascenscion === "+9"
            ? "468"
            : ascenscion === "+10"
            ? "508"
            : ascenscion === "+11"
            ? "547"
            : ascenscion === "+12"
            ? "587"
            : ascenscion === "+13"
            ? "626"
            : ascenscion === "+14"
            ? "666"
            : ascenscion === "+15"
            ? "705"
            : "--"
          : mainStat === "ATK"
          ? ascenscion === "+0"
            ? "56"
            : ascenscion === "+1"
            ? "76"
            : ascenscion === "+2"
            ? "95"
            : ascenscion === "+3"
            ? "115"
            : ascenscion === "+4"
            ? "135"
            : ascenscion === "+5"
            ? "155"
            : ascenscion === "+6"
            ? "174"
            : ascenscion === "+7"
            ? "194"
            : ascenscion === "+8"
            ? "214"
            : ascenscion === "+9"
            ? "234"
            : ascenscion === "+10"
            ? "254"
            : ascenscion === "+11"
            ? "273"
            : ascenscion === "+12"
            ? "293"
            : ascenscion === "+13"
            ? "313"
            : ascenscion === "+14"
            ? "333"
            : ascenscion === "+15"
            ? "352"
            : "--"
          : mainStat === "HP%" || mainStat === "ATK%" || mainStat === "Effect Hit Rate"
          ? ascenscion === "+0"
            ? "6.9%"
            : ascenscion === "+1"
            ? "9.3%"
            : ascenscion === "+2"
            ? "11.8%"
            : ascenscion === "+3"
            ? "14.2%"
            : ascenscion === "+4"
            ? "16.6%"
            : ascenscion === "+5"
            ? "19.0%"
            : ascenscion === "+6"
            ? "21.4%"
            : ascenscion === "+7"
            ? "23.8%"
            : ascenscion === "+8"
            ? "26.3%"
            : ascenscion === "+9"
            ? "28.7%"
            : ascenscion === "+10"
            ? "31.1%"
            : ascenscion === "+11"
            ? "33.5%"
            : ascenscion === "+12"
            ? "35.9%"
            : ascenscion === "+13"
            ? "38.4%"
            : ascenscion === "+14"
            ? "40.8%"
            : ascenscion === "+15"
            ? "43.2%"
            : "--"
          : mainStat === "DEF%"
          ? ascenscion === "+0"
            ? "8.6%"
            : ascenscion === "+1"
            ? "11.7%"
            : ascenscion === "+2"
            ? "14.7%"
            : ascenscion === "+3"
            ? "17.7%"
            : ascenscion === "+4"
            ? "20.7%"
            : ascenscion === "+5"
            ? "23.8%"
            : ascenscion === "+6"
            ? "26.8%"
            : ascenscion === "+7"
            ? "29.8%"
            : ascenscion === "+8"
            ? "32.8%"
            : ascenscion === "+9"
            ? "35.9%"
            : ascenscion === "+10"
            ? "38.9%"
            : ascenscion === "+11"
            ? "41.9%"
            : ascenscion === "+12"
            ? "44.9%"
            : ascenscion === "+13"
            ? "48.0%"
            : ascenscion === "+14"
            ? "51.0%"
            : ascenscion === "+15"
            ? "54.0%"
            : "--"
          : mainStat === "CRIT Rate"
          ? ascenscion === "+0"
            ? "5.2%"
            : ascenscion === "+1"
            ? "7.0%"
            : ascenscion === "+2"
            ? "8.8%"
            : ascenscion === "+3"
            ? "10.6%"
            : ascenscion === "+4"
            ? "12.4%"
            : ascenscion === "+5"
            ? "14.3%"
            : ascenscion === "+6"
            ? "16.1%"
            : ascenscion === "+7"
            ? "17.9%"
            : ascenscion === "+8"
            ? "19.7%"
            : ascenscion === "+9"
            ? "21.5%"
            : ascenscion === "+10"
            ? "23.3%"
            : ascenscion === "+11"
            ? "25.1%"
            : ascenscion === "+12"
            ? "27.0%"
            : ascenscion === "+13"
            ? "28.8%"
            : ascenscion === "+14"
            ? "30.6%"
            : ascenscion === "+15"
            ? "32.4%"
            : "--"
          : mainStat === "CRIT DMG" || mainStat === "Break Effect"
          ? ascenscion === "+0"
            ? "10.4%"
            : ascenscion === "+1"
            ? "14.0%"
            : ascenscion === "+2"
            ? "17.6%"
            : ascenscion === "+3"
            ? "21.3%"
            : ascenscion === "+4"
            ? "24.9%"
            : ascenscion === "+5"
            ? "28.5%"
            : ascenscion === "+6"
            ? "32.1%"
            : ascenscion === "+7"
            ? "35.8%"
            : ascenscion === "+8"
            ? "39.4%"
            : ascenscion === "+9"
            ? "43.0%"
            : ascenscion === "+10"
            ? "46.7%"
            : ascenscion === "+11"
            ? "50.3%"
            : ascenscion === "+12"
            ? "53.9%"
            : ascenscion === "+13"
            ? "57.5%"
            : ascenscion === "+14"
            ? "61.2%"
            : ascenscion === "+15"
            ? "64.8%"
            : "--"
          : mainStat === "Outgoing Healing"
          ? ascenscion === "+0"
            ? "5.5%"
            : ascenscion === "+1"
            ? "7.5%"
            : ascenscion === "+2"
            ? "9.4%"
            : ascenscion === "+3"
            ? "11.3%"
            : ascenscion === "+4"
            ? "13.3%"
            : ascenscion === "+5"
            ? "15.2%"
            : ascenscion === "+6"
            ? "17.1%"
            : ascenscion === "+7"
            ? "19.1%"
            : ascenscion === "+8"
            ? "21.0%"
            : ascenscion === "+9"
            ? "22.9%"
            : ascenscion === "+10"
            ? "24.9%"
            : ascenscion === "+11"
            ? "26.8%"
            : ascenscion === "+12"
            ? "28.8%"
            : ascenscion === "+13"
            ? "30.7%"
            : ascenscion === "+14"
            ? "32.6%"
            : ascenscion === "+15"
            ? "34.6%"
            : "--"
          : mainStat === "SPD"
          ? ascenscion === "+0"
            ? "4"
            : ascenscion === "+1"
            ? "5"
            : ascenscion === "+2"
            ? "7"
            : ascenscion === "+3"
            ? "8"
            : ascenscion === "+4"
            ? "10"
            : ascenscion === "+5"
            ? "11"
            : ascenscion === "+6"
            ? "12"
            : ascenscion === "+7"
            ? "14"
            : ascenscion === "+8"
            ? "15"
            : ascenscion === "+9"
            ? "17"
            : ascenscion === "+10"
            ? "18"
            : ascenscion === "+11"
            ? "19"
            : ascenscion === "+12"
            ? "21"
            : ascenscion === "+13"
            ? "22"
            : ascenscion === "+14"
            ? "24"
            : ascenscion === "+15"
            ? "25"
            : "--"
          : mainStat === "Physical DMG" || mainStat === "Fire DMG" || mainStat === "Ice DMG" || mainStat === "Lightning DMG" || mainStat === "Wind DMG" || mainStat === "Quantum DMG" || mainStat === "Imaginary DMG"
          ? ascenscion === "+0"
            ? "6.2%"
            : ascenscion === "+1"
            ? "8.4%"
            : ascenscion === "+2"
            ? "10.6%"
            : ascenscion === "+3"
            ? "12.8%"
            : ascenscion === "+4"
            ? "14.9%"
            : ascenscion === "+5"
            ? "17.1%"
            : ascenscion === "+6"
            ? "19.3%"
            : ascenscion === "+7"
            ? "21.5%"
            : ascenscion === "+8"
            ? "23.6%"
            : ascenscion === "+9"
            ? "25.8%"
            : ascenscion === "+10"
            ? "28.0%"
            : ascenscion === "+11"
            ? "30.2%"
            : ascenscion === "+12"
            ? "32.3%"
            : ascenscion === "+13"
            ? "34.5%"
            : ascenscion === "+14"
            ? "36.7%"
            : ascenscion === "+15"
            ? "38.9%"
            : "--"
          : mainStat === "Energy Regeneration"
          ? ascenscion === "+0"
            ? "3.1%"
            : ascenscion === "+1"
            ? "4.2%"
            : ascenscion === "+2"
            ? "5.3%"
            : ascenscion === "+3"
            ? "6.4%"
            : ascenscion === "+4"
            ? "7.5%"
            : ascenscion === "+5"
            ? "8.6%"
            : ascenscion === "+6"
            ? "9.6%"
            : ascenscion === "+7"
            ? "10.7%"
            : ascenscion === "+8"
            ? "11.8%"
            : ascenscion === "+9"
            ? "12.9%"
            : ascenscion === "+10"
            ? "14.0%"
            : ascenscion === "+11"
            ? "15.1%"
            : ascenscion === "+12"
            ? "16.2%"
            : ascenscion === "+13"
            ? "17.3%"
            : ascenscion === "+14"
            ? "18.4%"
            : ascenscion === "+15"
            ? "19.4%"
            : "--"
          : "--" // Default if mainStat is neither HP nor ATK
        : "--" // Default if relicRarity is not '4★'
    );

    // Add more conditions as needed
  }, [relicRarity, mainStat, ascenscion]);

  return (
    <div>
      <form name="form1" id="form1" action="/action_page.php">
        <div id="equippedByContainer">
          <select onChange={handleEquippedByChange} value={equippedBy}>
            <option value="equippedBy">Equipped By</option>
            <option key="Argenti">Argenti</option>
            <option key="Arlan">Arlan</option>
            <option key="Asta">Asta</option>
            <option key="Bailu">Bailu</option>
            <option key="Blade">Blade</option>
            <option key="Bronya">Bronya</option>
            <option key="Clara">Clara</option>
            <option key="Dan Heng • Imbibitor Lunae">Dan Heng • Imbibitor Lunae</option>
            <option key="Dan Heng">Dan Heng</option>
            <option key="Fu Xuan">Fu Xuan</option>
            <option key="Gepard">Gepard</option>
            <option key="Guinaifen">Guinaifen</option>
            <option key="Hanya">Hanya</option>
            <option key="Herta">Herta</option>
            <option key="Himeko">Himeko</option>
            <option key="Hook">Hook</option>
            <option key="Huohuo">Huohuo</option>
            <option key="Jing Yuan">Jing Yuan</option>
            <option key="Jingliu">Jingliu</option>
            <option key="Kafka">Kafka</option>
            <option key="Luka">Luka</option>
            <option key="Luocha">Luocha</option>
            <option key="Lynx">Lynx</option>
            <option key="March 7th">March 7th</option>
            <option key="Natasha">Natasha</option>
            <option key="Pela">Pela</option>
            <option key="Qingque">Qingque</option>
            <option key="Sampo">Sampo</option>
            <option key="Seele">Seele</option>
            <option key="Serval">Serval</option>
            <option key="Silver Wolf">Silver Wolf</option>
            <option key="Sushang">Sushang</option>
            <option key="Tingyun">Tingyun</option>
            <option key="Topaz &amp; Numby">Topaz &amp; Numby</option>
            <option key="Trailblazer (Fire)">Trailblazer (Fire)</option>
            <option key="Trailblazer (Physical)">Trailblazer (Physical)</option>
            <option key="Welt">Welt</option>
            <option key="Yanqing">Yanqing</option>
            <option key="Yukong">Yukong</option>
          </select>
        </div>
        <br />
        <div id="relicSlotContainer">
          <div>
            <label for="slotRadio">
              <input type="radio" class="radio_relicSlotBtn" value="Head" name="relicSlotBtn" id="Head" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Head">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/head.png" />{" "}
              </label>

              <input type="radio" class="radio_relicSlotBtn" value="Hands" name="relicSlotBtn" id="Hands" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Hands">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/hands.png" />{" "}
              </label>

              <input type="radio" class="radio_relicSlotBtn" value="Body" name="relicSlotBtn" id="Body" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Body">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/body.png" />{" "}
              </label>

              <input type="radio" class="radio_relicSlotBtn" value="Feet" name="relicSlotBtn" id="Feet" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Feet">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/feet.png" />{" "}
              </label>

              <input type="radio" class="radio_relicSlotBtn" value="Planar Sphere" name="relicSlotBtn" id="Planar Sphere" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Planar Sphere">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/planarSphere.png" />{" "}
              </label>

              <input type="radio" class="radio_relicSlotBtn" value="Link Rope" name="relicSlotBtn" id="Link Rope" onChange={handleRelicSlotChange} hidden={true} />
              <label class="label_relicSlotBtn" for="Link Rope">
                {" "}
                <img src="https://d28ecrnsw8u0fj.cloudfront.net/assets/misc/linkRope.png" />{" "}
              </label>
            </label>
          </div>
        </div>
        <br />
        <div id="relicRarityAscenscionSetContainer">
          <select value={relicSet} disabled={relicSlot === ""} onChange={(e) => setRelicSet(e.target.value)}>
            <option value="">Relic Set</option>
            {(relicSlot === "Head" || relicSlot === "Hands" || relicSlot === "Body" || relicSlot === "Feet") && (
              <>
                <option key="Passerby of Wandering Cloud">Passerby of Wandering Cloud</option>
                <option key="Musketeer of Wild Wheat">Musketeer of Wild Wheat</option>
                <option key="Knight of Purity Palace">Knight of Purity Palace</option>
                <option key="Hunter of Glacial Forest">Hunter of Glacial Forest</option>
                <option key="Champion of Streetwise Boxing">Champion of Streetwise Boxing</option>
                <option key="Guard of Wuthering Snow">Guard of Wuthering Snow</option>
                <option key="Firesmith of Lava-Forging">Firesmith of Lava-Forging</option>
                <option key="Genius of Brilliant Stars">Genius of Brilliant Stars</option>
                <option key="Band of Sizzling Thunder">Band of Sizzling Thunder</option>
                <option key="Eagle of Twilight Line">Eagle of Twilight Line</option>
                <option key="Thief of Shooting Meteor">Thief of Shooting Meteor</option>
                <option key="Wastelander of Banditry Desert">Wastelander of Banditry Desert</option>
                <option key="Longevous Disciple">Longevous Disciple</option>
                <option key="Messenger Traversing Hackerspace">Messenger Traversing Hackerspace</option>
                <option key="The Ashblazing Grand Duke">The Ashblazing Grand Duke</option>
                <option key="Prisoner in Deep Confinement">Prisoner in Deep Confinement</option>
              </>
            )}
            {(relicSlot === "Planar Sphere" || relicSlot === "Link Rope") && (
              <>
                <option key="Space Sealing Station">Space Sealing Station</option>
                <option key="Fleet of the Ageless">Fleet of the Ageless</option>
                <option key="Pan-Cosmic Commercial Enterprise">Pan-Cosmic Commercial Enterprise</option>
                <option key="Belobog of the Architects">Belobog of the Architects</option>
                <option key="Celestial Differentiator">Celestial Differentiator</option>
                <option key="Inert Salsotto">Inert Salsotto</option>
                <option key="Talia: Kingdom of Banditry">Talia: Kingdom of Banditry</option>
                <option key="Sprightly Vonwacq">Sprightly Vonwacq</option>
                <option key="Rutilant Arena">Rutilant Arena</option>
                <option key="Broken Keel">Broken Keel</option>
                <option key="Firmament Frontline: Glamoth">Firmament Frontline: Glamoth</option>
                <option key="Penacony, Land of the Dreams">Penacony, Land of the Dreams</option>
              </>
            )}
          </select>
          <br />
          <br />
          <select onChange={handleRelicRarityChange} value={relicRarity}>
            <option value="">Select Rarity</option>
            <option value="4★">4★</option>
            <option value="5★">5★</option>
          </select>
          <br />
          <select value={ascenscion} disabled={relicRarity === ""} onChange={handleSetAscenscionChange}>
            <option value="">Ascenscion</option>
            {relicRarity === "5★" && (
              <>
                <option key="+15">+15</option>
                <option key="+14">+14</option>
                <option key="+13">+13</option>
                <option key="+12">+12</option>
                <option key="+11">+11</option>
                <option key="+10">+10</option>
                <option key="+9">+9</option>
                <option key="+8">+8</option>
                <option key="+7">+7</option>
                <option key="+6">+6</option>
                <option key="+5">+5</option>
                <option key="+4">+4</option>
                <option key="+3">+3</option>
                <option key="+2">+2</option>
                <option key="+1">+1</option>
                <option key="+0">+0</option>
              </>
            )}
            {relicRarity === "4★" && (
              <>
                <option key="+12">+12</option>
                <option key="+11">+11</option>
                <option key="+10">+10</option>
                <option key="+9">+9</option>
                <option key="+8">+8</option>
                <option key="+7">+7</option>
                <option key="+6">+6</option>
                <option key="+5">+5</option>
                <option key="+4">+4</option>
                <option key="+3">+3</option>
                <option key="+2">+2</option>
                <option key="+1">+1</option>
                <option key="+0">+0</option>
              </>
            )}
          </select>

          <button value="saveRelic">Save</button>
        </div>
        <br />
        <div id="relicMainStatContainer">
          <select value={mainStat} disabled={relicRarity === ""} onChange={handleMainStatChange}>
            <option value="">Select Main Stat</option>
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Head" && (
              <>
                <option key="HP">HP</option>
              </>
            )}
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Hands" && (
              <>
                <option key="ATK">ATK</option>
              </>
            )}
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Body" && (
              <>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Outgoing Healing">Outgoing Healing</option>
              </>
            )}
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Feet" && (
              <>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
              </>
            )}
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Planar Sphere" && (
              <>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="Physical DMG">Physical DMG</option>
                <option key="Fire DMG">Fire DMG</option>
                <option key="Ice DMG">Ice DMG</option>
                <option key="Lightning DMG">Lightning DMG</option>
                <option key="Wind DMG">Wind DMG</option>
                <option key="Quantum DMG">Quantum DMG</option>
                <option key="Imaginary DMG">Imaginary DMG</option>
              </>
            )}
            {(relicRarity === "4★" || relicRarity === "5★") && relicSlot === "Link Rope" && (
              <>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="Break Effect">Break Effect</option>
                <option key="Energy Regeneration">Energy Regeneration</option>
              </>
            )}
          </select>
          <p1 name="mainStatValue" id="mainStatValue">
            {mainStatValue}
          </p1>
        </div>
        <br />
        <div id="relicSubStatContainer">
          <select value={subStat1} onChange={handleSubStat1Change}>
            <option value="">Sub Stat #1</option>
            {relicRarity === "4★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
            {relicRarity === "5★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
          </select>
          <p1 name="relicSubStat1RollsValue1" id="relicSubStat1RollsValue1">
            --
          </p1>
          <select value={subStat1Value} disabled={subStat1 === ""} onChange={handleSubStat1ValueChange}>
            <option value="">--</option>
            {relicRarity === "4★" && subStat1 === "HP" && (
              <>
                <option key="27">27</option>
                <option key="30">30</option>
                <option key="33">33</option>
                <option key="54">54</option>
                <option key="57">57</option>
                <option key="60">60</option>
                <option key="64">64</option>
                <option key="67">67</option>
                <option key="81">81</option>
                <option key="84">84</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="94">94</option>
                <option key="98">98</option>
                <option key="101">101</option>
                <option key="108">108</option>
                <option key="111">111</option>
                <option key="115">115</option>
                <option key="118">118</option>
                <option key="121">121</option>
                <option key="125">125</option>
                <option key="128">128</option>
                <option key="132">132</option>
                <option key="135">135</option>
                <option key="138">138</option>
                <option key="142">142</option>
                <option key="145">145</option>
                <option key="149">149</option>
                <option key="152">152</option>
                <option key="155">155</option>
                <option key="159">159</option>
                <option key="162">162</option>
                <option key="165">165</option>
                <option key="169">169</option>
              </>
            )}
            {relicRarity === "4★" && (subStat1 === "ATK" || subStat1 === "DEF") && (
              <>
                <option key="13">13</option>
                <option key="15">15</option>
                <option key="16">16</option>
                <option key="27">27</option>
                <option key="28">28</option>
                <option key="30">30</option>
                <option key="32">32</option>
                <option key="33">33</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="44">44</option>
                <option key="45">45</option>
                <option key="47">47</option>
                <option key="49">49</option>
                <option key="50">50</option>
                <option key="54">54</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="60">60</option>
                <option key="62">62</option>
                <option key="64">64</option>
                <option key="66">66</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="72">72</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="77">77</option>
                <option key="79">79</option>
                <option key="81">81</option>
                <option key="83">83</option>
                <option key="84">84</option>
              </>
            )}
            {relicRarity === "4★" && (subStat1 === "HP%" || subStat1 === "ATK%" || subStat1 === "Effect Hit Rate" || subStat1 === "Effect Res") && (
              <>
                <option key="2.7%">2.7%</option>
                <option key="3.1%">3.1%</option>
                <option key="3.4%">3.4%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.5%">6.5%</option>
                <option key="6.9%">6.9%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="8.9%">8.9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.6%">9.6%</option>
                <option key="10%">10%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.7%">11.7%</option>
                <option key="12%">12%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.7%">12.7%</option>
                <option key="13.1%">13.1%</option>
                <option key="13.4%">13.4%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.1%">14.1%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.8%">14.8%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.2%">16.2%</option>
                <option key="16.6%">16.6%</option>
                <option key="16.9%">16.9%</option>
                <option key="17.2%">17.2%</option>
              </>
            )}
            {relicRarity === "4★" && subStat1 === "DEF%" && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
              </>
            )}
            {relicRarity === "4★" && subStat1 === "SPD" && (
              <>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
              </>
            )}
            {relicRarity === "4★" && subStat1 === "CRIT Rate" && (
              <>
                <option key="2%">2%</option>
                <option key="2.3%">2.3%</option>
                <option key="2.5%">2.5%</option>
                <option key="4.1%">4.1%</option>
                <option key="4.4%">4.4%</option>
                <option key="4.6%">4.6%</option>
                <option key="4.9%">4.9%</option>
                <option key="5.1%">5.1%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.4%">6.4%</option>
                <option key="6.7%">6.7%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.2%">7.2%</option>
                <option key="7.5%">7.5%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.5%">8.5%</option>
                <option key="8.8%">8.8%</option>
                <option key="9%">9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.5%">9.5%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.1%">10.1%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.1%">11.1%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
              </>
            )}
            {relicRarity === "4★" && (subStat1 === "CRIT DMG" || subStat1 === "Break Effect") && (
              <>
                <option key="4.1%">4.1%</option>
                <option key="4.6%">4.6%</option>
                <option key="5.1%">5.1%</option>
                <option key="8.3%">8.3%</option>
                <option key="8.8%">8.8%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.3%">10.3%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.4%">13.4%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15%">15%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.6%">16.6%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.6%">17.6%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.6%">18.6%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.6%">19.6%</option>
                <option key="20.2%">20.2%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.2%">21.2%</option>
                <option key="21.7%">21.7%</option>
                <option key="22.3%">22.3%</option>
                <option key="22.8%">22.8%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.8%">23.8%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat1 === "HP" && (
              <>
                <option key="33">33</option>
                <option key="38">38</option>
                <option key="42">42</option>
                <option key="67">67</option>
                <option key="71">71</option>
                <option key="76">76</option>
                <option key="80">80</option>
                <option key="84">84</option>
                <option key="101">101</option>
                <option key="105">105</option>
                <option key="110">110</option>
                <option key="114">114</option>
                <option key="118">118</option>
                <option key="122">122</option>
                <option key="127">127</option>
                <option key="135">135</option>
                <option key="139">139</option>
                <option key="143">143</option>
                <option key="148">148</option>
                <option key="152">152</option>
                <option key="156">156</option>
                <option key="160">160</option>
                <option key="165">165</option>
                <option key="169">169</option>
                <option key="173">173</option>
                <option key="177">177</option>
                <option key="182">182</option>
                <option key="186">186</option>
                <option key="190">190</option>
                <option key="194">194</option>
                <option key="198">198</option>
                <option key="203">203</option>
                <option key="207">207</option>
                <option key="211">211</option>
                <option key="215">215</option>
                <option key="220">220</option>
                <option key="224">224</option>
                <option key="228">228</option>
                <option key="232">232</option>
                <option key="237">237</option>
                <option key="241">241</option>
                <option key="245">245</option>
                <option key="249">249</option>
                <option key="254">254</option>
              </>
            )}
            {relicRarity === "5★" && (subStat1 === "ATK" || subStat1 === "DEF") && (
              <>
                <option key="16">16</option>
                <option key="19">19</option>
                <option key="21">21</option>
                <option key="33">33</option>
                <option key="35">35</option>
                <option key="38">38</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="50">50</option>
                <option key="52">52</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="61">61</option>
                <option key="63">63</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="78">78</option>
                <option key="80">80</option>
                <option key="82">82</option>
                <option key="84">84</option>
                <option key="86">86</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="93">93</option>
                <option key="95">95</option>
                <option key="97">97</option>
                <option key="99">99</option>
                <option key="101">101</option>
                <option key="103">103</option>
                <option key="105">105</option>
                <option key="107">107</option>
                <option key="110">110</option>
                <option key="112">112</option>
                <option key="114">114</option>
                <option key="116">116</option>
                <option key="118">118</option>
                <option key="120">120</option>
                <option key="122">122</option>
                <option key="124">124</option>
                <option key="127">127</option>
              </>
            )}
            {relicRarity === "5★" && (subStat1 === "HP%" || subStat1 === "ATK%" || subStat1 === "Effect Hit Rate" || subStat1 === "Effect Res") && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
                <option key="22%">22%</option>
                <option key="22.4%">22.4%</option>
                <option key="22.9%">22.9%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.2%">24.2%</option>
                <option key="24.6%">24.6%</option>
                <option key="25%">25%</option>
                <option key="25.5%">25.5%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat1 === "DEF%" && (
              <>
                <option key="4.3%">4.3%</option>
                <option key="4.8%">4.8%</option>
                <option key="5.4%">5.4%</option>
                <option key="8.6%">8.6%</option>
                <option key="9.1%">9.1%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.2%">10.2%</option>
                <option key="10.8%">10.8%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.5%">13.5%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.6%">15.6%</option>
                <option key="16.2%">16.2%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.3%">18.3%</option>
                <option key="18.9%">18.9%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.9%">19.9%</option>
                <option key="20.5%">20.5%</option>
                <option key="21%">21%</option>
                <option key="21.6%">21.6%</option>
                <option key="22.1%">22.1%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.2%">23.2%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.4%">26.4%</option>
                <option key="27%">27%</option>
                <option key="27.5%">27.5%</option>
                <option key="28%">28%</option>
                <option key="28.6%">28.6%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.7%">29.7%</option>
                <option key="30.2%">30.2%</option>
                <option key="30.7%">30.7%</option>
                <option key="31.3%">31.3%</option>
                <option key="31.8%">31.8%</option>
                <option key="32.4%">32.4%</option>
              </>
            )}
            {relicRarity === "5★" && subStat1 === "SPD" && (
              <>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
                <option key="11">11</option>
                <option key="12">12</option>
                <option key="13">13</option>
                <option key="14">14</option>
                <option key="15">15</option>
              </>
            )}
            {relicRarity === "5★" && subStat1 === "CRIT Rate" && (
              <>
                <option key="2.5%">2.5%</option>
                <option key="2.9%">2.9%</option>
                <option key="3.2%">3.2%</option>
                <option key="5.1%">5.1%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.1%">6.1%</option>
                <option key="6.4%">6.4%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.1%">8.1%</option>
                <option key="8.4%">8.4%</option>
                <option key="8.7%">8.7%</option>
                <option key="9%">9%</option>
                <option key="9.4%">9.4%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.2%">13.2%</option>
                <option key="13.6%">13.6%</option>
                <option key="13.9%">13.9%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.9%">14.9%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.8%">15.8%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.5%">16.5%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.4%">17.4%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.4%">18.4%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.4%">19.4%</option>
              </>
            )}
            {relicRarity === "5★" && (subStat1 === "CRIT DMG" || subStat1 === "Break Effect") && (
              <>
                <option key="5.1%">5.1%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.4%">6.4%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.9%">12.9%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.4%">17.4%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.4%">19.4%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.3%">21.3%</option>
                <option key="22%">22%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.9%">23.9%</option>
                <option key="24.6%">24.6%</option>
                <option key="25.2%">25.2%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.5%">26.5%</option>
                <option key="27.2%">27.2%</option>
                <option key="27.8%">27.8%</option>
                <option key="28.5%">28.5%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.8%">29.8%</option>
                <option key="30.4%">30.4%</option>
                <option key="31.1%">31.1%</option>
                <option key="31.7%">31.7%</option>
                <option key="32.3%">32.3%</option>
                <option key="33%">33%</option>
                <option key="33.6%">33.6%</option>
                <option key="34.3%">34.3%</option>
                <option key="34.9%">34.9%</option>
                <option key="35.6%">35.6%</option>
                <option key="36.2%">36.2%</option>
                <option key="36.9%">36.9%</option>
                <option key="37.5%">37.5%</option>
                <option key="38.2%">38.2%</option>
                <option key="38.8%">38.8%</option>
              </>
            )}
          </select>
          <br />
          <select value={subStat2} onChange={handleSubStat2Change}>
            <option value="">Sub Stat #2</option>
            {relicRarity === "4★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
            {relicRarity === "5★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
          </select>
          <p1 name="relicSubStat1RollsValue2" id="relicSubStat1RollsValue2">
            --
          </p1>
          <select value={subStat2Value} disabled={subStat2 === ""} onChange={handleSubStat2ValueChange}>
            <option value="">--</option>
            {relicRarity === "4★" && subStat2 === "HP" && (
              <>
                <option key="27">27</option>
                <option key="30">30</option>
                <option key="33">33</option>
                <option key="54">54</option>
                <option key="57">57</option>
                <option key="60">60</option>
                <option key="64">64</option>
                <option key="67">67</option>
                <option key="81">81</option>
                <option key="84">84</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="94">94</option>
                <option key="98">98</option>
                <option key="101">101</option>
                <option key="108">108</option>
                <option key="111">111</option>
                <option key="115">115</option>
                <option key="118">118</option>
                <option key="121">121</option>
                <option key="125">125</option>
                <option key="128">128</option>
                <option key="132">132</option>
                <option key="135">135</option>
                <option key="138">138</option>
                <option key="142">142</option>
                <option key="145">145</option>
                <option key="149">149</option>
                <option key="152">152</option>
                <option key="155">155</option>
                <option key="159">159</option>
                <option key="162">162</option>
                <option key="165">165</option>
                <option key="169">169</option>
              </>
            )}
            {relicRarity === "4★" && (subStat2 === "ATK" || subStat2 === "DEF") && (
              <>
                <option key="13">13</option>
                <option key="15">15</option>
                <option key="16">16</option>
                <option key="27">27</option>
                <option key="28">28</option>
                <option key="30">30</option>
                <option key="32">32</option>
                <option key="33">33</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="44">44</option>
                <option key="45">45</option>
                <option key="47">47</option>
                <option key="49">49</option>
                <option key="50">50</option>
                <option key="54">54</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="60">60</option>
                <option key="62">62</option>
                <option key="64">64</option>
                <option key="66">66</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="72">72</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="77">77</option>
                <option key="79">79</option>
                <option key="81">81</option>
                <option key="83">83</option>
                <option key="84">84</option>
              </>
            )}
            {relicRarity === "4★" && (subStat2 === "HP%" || subStat2 === "ATK%" || subStat2 === "Effect Hit Rate" || subStat2 === "Effect Res") && (
              <>
                <option key="2.7%">2.7%</option>
                <option key="3.1%">3.1%</option>
                <option key="3.4%">3.4%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.5%">6.5%</option>
                <option key="6.9%">6.9%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="8.9%">8.9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.6%">9.6%</option>
                <option key="10%">10%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.7%">11.7%</option>
                <option key="12%">12%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.7%">12.7%</option>
                <option key="13.1%">13.1%</option>
                <option key="13.4%">13.4%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.1%">14.1%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.8%">14.8%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.2%">16.2%</option>
                <option key="16.6%">16.6%</option>
                <option key="16.9%">16.9%</option>
                <option key="17.2%">17.2%</option>
              </>
            )}
            {relicRarity === "4★" && subStat2 === "DEF%" && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
              </>
            )}
            {relicRarity === "4★" && subStat2 === "SPD" && (
              <>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
              </>
            )}
            {relicRarity === "4★" && subStat2 === "CRIT Rate" && (
              <>
                <option key="2%">2%</option>
                <option key="2.3%">2.3%</option>
                <option key="2.5%">2.5%</option>
                <option key="4.1%">4.1%</option>
                <option key="4.4%">4.4%</option>
                <option key="4.6%">4.6%</option>
                <option key="4.9%">4.9%</option>
                <option key="5.1%">5.1%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.4%">6.4%</option>
                <option key="6.7%">6.7%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.2%">7.2%</option>
                <option key="7.5%">7.5%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.5%">8.5%</option>
                <option key="8.8%">8.8%</option>
                <option key="9%">9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.5%">9.5%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.1%">10.1%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.1%">11.1%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
              </>
            )}
            {relicRarity === "4★" && (subStat2 === "CRIT DMG" || subStat2 === "Break Effect") && (
              <>
                <option key="4.1%">4.1%</option>
                <option key="4.6%">4.6%</option>
                <option key="5.1%">5.1%</option>
                <option key="8.3%">8.3%</option>
                <option key="8.8%">8.8%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.3%">10.3%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.4%">13.4%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15%">15%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.6%">16.6%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.6%">17.6%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.6%">18.6%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.6%">19.6%</option>
                <option key="20.2%">20.2%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.2%">21.2%</option>
                <option key="21.7%">21.7%</option>
                <option key="22.3%">22.3%</option>
                <option key="22.8%">22.8%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.8%">23.8%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat2 === "HP" && (
              <>
                <option key="33">33</option>
                <option key="38">38</option>
                <option key="42">42</option>
                <option key="67">67</option>
                <option key="71">71</option>
                <option key="76">76</option>
                <option key="80">80</option>
                <option key="84">84</option>
                <option key="101">101</option>
                <option key="105">105</option>
                <option key="110">110</option>
                <option key="114">114</option>
                <option key="118">118</option>
                <option key="122">122</option>
                <option key="127">127</option>
                <option key="135">135</option>
                <option key="139">139</option>
                <option key="143">143</option>
                <option key="148">148</option>
                <option key="152">152</option>
                <option key="156">156</option>
                <option key="160">160</option>
                <option key="165">165</option>
                <option key="169">169</option>
                <option key="173">173</option>
                <option key="177">177</option>
                <option key="182">182</option>
                <option key="186">186</option>
                <option key="190">190</option>
                <option key="194">194</option>
                <option key="198">198</option>
                <option key="203">203</option>
                <option key="207">207</option>
                <option key="211">211</option>
                <option key="215">215</option>
                <option key="220">220</option>
                <option key="224">224</option>
                <option key="228">228</option>
                <option key="232">232</option>
                <option key="237">237</option>
                <option key="241">241</option>
                <option key="245">245</option>
                <option key="249">249</option>
                <option key="254">254</option>
              </>
            )}
            {relicRarity === "5★" && (subStat2 === "ATK" || subStat2 === "DEF") && (
              <>
                <option key="16">16</option>
                <option key="19">19</option>
                <option key="21">21</option>
                <option key="33">33</option>
                <option key="35">35</option>
                <option key="38">38</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="50">50</option>
                <option key="52">52</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="61">61</option>
                <option key="63">63</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="78">78</option>
                <option key="80">80</option>
                <option key="82">82</option>
                <option key="84">84</option>
                <option key="86">86</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="93">93</option>
                <option key="95">95</option>
                <option key="97">97</option>
                <option key="99">99</option>
                <option key="101">101</option>
                <option key="103">103</option>
                <option key="105">105</option>
                <option key="107">107</option>
                <option key="110">110</option>
                <option key="112">112</option>
                <option key="114">114</option>
                <option key="116">116</option>
                <option key="118">118</option>
                <option key="120">120</option>
                <option key="122">122</option>
                <option key="124">124</option>
                <option key="127">127</option>
              </>
            )}
            {relicRarity === "5★" && (subStat2 === "HP%" || subStat2 === "ATK%" || subStat2 === "Effect Hit Rate" || subStat2 === "Effect Res") && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
                <option key="22%">22%</option>
                <option key="22.4%">22.4%</option>
                <option key="22.9%">22.9%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.2%">24.2%</option>
                <option key="24.6%">24.6%</option>
                <option key="25%">25%</option>
                <option key="25.5%">25.5%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat2 === "DEF%" && (
              <>
                <option key="4.3%">4.3%</option>
                <option key="4.8%">4.8%</option>
                <option key="5.4%">5.4%</option>
                <option key="8.6%">8.6%</option>
                <option key="9.1%">9.1%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.2%">10.2%</option>
                <option key="10.8%">10.8%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.5%">13.5%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.6%">15.6%</option>
                <option key="16.2%">16.2%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.3%">18.3%</option>
                <option key="18.9%">18.9%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.9%">19.9%</option>
                <option key="20.5%">20.5%</option>
                <option key="21%">21%</option>
                <option key="21.6%">21.6%</option>
                <option key="22.1%">22.1%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.2%">23.2%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.4%">26.4%</option>
                <option key="27%">27%</option>
                <option key="27.5%">27.5%</option>
                <option key="28%">28%</option>
                <option key="28.6%">28.6%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.7%">29.7%</option>
                <option key="30.2%">30.2%</option>
                <option key="30.7%">30.7%</option>
                <option key="31.3%">31.3%</option>
                <option key="31.8%">31.8%</option>
                <option key="32.4%">32.4%</option>
              </>
            )}
            {relicRarity === "5★" && subStat2 === "SPD" && (
              <>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
                <option key="11">11</option>
                <option key="12">12</option>
                <option key="13">13</option>
                <option key="14">14</option>
                <option key="15">15</option>
              </>
            )}
            {relicRarity === "5★" && subStat2 === "CRIT Rate" && (
              <>
                <option key="2.5%">2.5%</option>
                <option key="2.9%">2.9%</option>
                <option key="3.2%">3.2%</option>
                <option key="5.1%">5.1%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.1%">6.1%</option>
                <option key="6.4%">6.4%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.1%">8.1%</option>
                <option key="8.4%">8.4%</option>
                <option key="8.7%">8.7%</option>
                <option key="9%">9%</option>
                <option key="9.4%">9.4%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.2%">13.2%</option>
                <option key="13.6%">13.6%</option>
                <option key="13.9%">13.9%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.9%">14.9%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.8%">15.8%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.5%">16.5%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.4%">17.4%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.4%">18.4%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.4%">19.4%</option>
              </>
            )}
            {relicRarity === "5★" && (subStat2 === "CRIT DMG" || subStat2 === "Break Effect") && (
              <>
                <option key="5.1%">5.1%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.4%">6.4%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.9%">12.9%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.4%">17.4%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.4%">19.4%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.3%">21.3%</option>
                <option key="22%">22%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.9%">23.9%</option>
                <option key="24.6%">24.6%</option>
                <option key="25.2%">25.2%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.5%">26.5%</option>
                <option key="27.2%">27.2%</option>
                <option key="27.8%">27.8%</option>
                <option key="28.5%">28.5%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.8%">29.8%</option>
                <option key="30.4%">30.4%</option>
                <option key="31.1%">31.1%</option>
                <option key="31.7%">31.7%</option>
                <option key="32.3%">32.3%</option>
                <option key="33%">33%</option>
                <option key="33.6%">33.6%</option>
                <option key="34.3%">34.3%</option>
                <option key="34.9%">34.9%</option>
                <option key="35.6%">35.6%</option>
                <option key="36.2%">36.2%</option>
                <option key="36.9%">36.9%</option>
                <option key="37.5%">37.5%</option>
                <option key="38.2%">38.2%</option>
                <option key="38.8%">38.8%</option>
              </>
            )}
          </select>
          <br />
          <select value={subStat3} onChange={handleSubStat3Change}>
            <option value="">Sub Stat #3</option>
            {relicRarity === "4★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
            {relicRarity === "5★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
          </select>
          <p1 name="relicSubStat1RollsValue3" id="relicSubStat1RollsValue3">
            --
          </p1>
          <select value={subStat3Value} disabled={subStat3 === ""} onChange={handleSubStat3ValueChange}>
            <option value="">--</option>
            {relicRarity === "4★" && subStat3 === "HP" && (
              <>
                <option key="27">27</option>
                <option key="30">30</option>
                <option key="33">33</option>
                <option key="54">54</option>
                <option key="57">57</option>
                <option key="60">60</option>
                <option key="64">64</option>
                <option key="67">67</option>
                <option key="81">81</option>
                <option key="84">84</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="94">94</option>
                <option key="98">98</option>
                <option key="101">101</option>
                <option key="108">108</option>
                <option key="111">111</option>
                <option key="115">115</option>
                <option key="118">118</option>
                <option key="121">121</option>
                <option key="125">125</option>
                <option key="128">128</option>
                <option key="132">132</option>
                <option key="135">135</option>
                <option key="138">138</option>
                <option key="142">142</option>
                <option key="145">145</option>
                <option key="149">149</option>
                <option key="152">152</option>
                <option key="155">155</option>
                <option key="159">159</option>
                <option key="162">162</option>
                <option key="165">165</option>
                <option key="169">169</option>
              </>
            )}
            {relicRarity === "4★" && (subStat3 === "ATK" || subStat3 === "DEF") && (
              <>
                <option key="13">13</option>
                <option key="15">15</option>
                <option key="16">16</option>
                <option key="27">27</option>
                <option key="28">28</option>
                <option key="30">30</option>
                <option key="32">32</option>
                <option key="33">33</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="44">44</option>
                <option key="45">45</option>
                <option key="47">47</option>
                <option key="49">49</option>
                <option key="50">50</option>
                <option key="54">54</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="60">60</option>
                <option key="62">62</option>
                <option key="64">64</option>
                <option key="66">66</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="72">72</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="77">77</option>
                <option key="79">79</option>
                <option key="81">81</option>
                <option key="83">83</option>
                <option key="84">84</option>
              </>
            )}
            {relicRarity === "4★" && (subStat3 === "HP%" || subStat3 === "ATK%" || subStat3 === "Effect Hit Rate" || subStat3 === "Effect Res") && (
              <>
                <option key="2.7%">2.7%</option>
                <option key="3.1%">3.1%</option>
                <option key="3.4%">3.4%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.5%">6.5%</option>
                <option key="6.9%">6.9%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="8.9%">8.9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.6%">9.6%</option>
                <option key="10%">10%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.7%">11.7%</option>
                <option key="12%">12%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.7%">12.7%</option>
                <option key="13.1%">13.1%</option>
                <option key="13.4%">13.4%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.1%">14.1%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.8%">14.8%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.2%">16.2%</option>
                <option key="16.6%">16.6%</option>
                <option key="16.9%">16.9%</option>
                <option key="17.2%">17.2%</option>
              </>
            )}
            {relicRarity === "4★" && subStat3 === "DEF%" && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
              </>
            )}
            {relicRarity === "4★" && subStat3 === "SPD" && (
              <>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
              </>
            )}
            {relicRarity === "4★" && subStat3 === "CRIT Rate" && (
              <>
                <option key="2%">2%</option>
                <option key="2.3%">2.3%</option>
                <option key="2.5%">2.5%</option>
                <option key="4.1%">4.1%</option>
                <option key="4.4%">4.4%</option>
                <option key="4.6%">4.6%</option>
                <option key="4.9%">4.9%</option>
                <option key="5.1%">5.1%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.4%">6.4%</option>
                <option key="6.7%">6.7%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.2%">7.2%</option>
                <option key="7.5%">7.5%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.5%">8.5%</option>
                <option key="8.8%">8.8%</option>
                <option key="9%">9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.5%">9.5%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.1%">10.1%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.1%">11.1%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
              </>
            )}
            {relicRarity === "4★" && (subStat3 === "CRIT DMG" || subStat3 === "Break Effect") && (
              <>
                <option key="4.1%">4.1%</option>
                <option key="4.6%">4.6%</option>
                <option key="5.1%">5.1%</option>
                <option key="8.3%">8.3%</option>
                <option key="8.8%">8.8%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.3%">10.3%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.4%">13.4%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15%">15%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.6%">16.6%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.6%">17.6%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.6%">18.6%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.6%">19.6%</option>
                <option key="20.2%">20.2%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.2%">21.2%</option>
                <option key="21.7%">21.7%</option>
                <option key="22.3%">22.3%</option>
                <option key="22.8%">22.8%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.8%">23.8%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat3 === "HP" && (
              <>
                <option key="33">33</option>
                <option key="38">38</option>
                <option key="42">42</option>
                <option key="67">67</option>
                <option key="71">71</option>
                <option key="76">76</option>
                <option key="80">80</option>
                <option key="84">84</option>
                <option key="101">101</option>
                <option key="105">105</option>
                <option key="110">110</option>
                <option key="114">114</option>
                <option key="118">118</option>
                <option key="122">122</option>
                <option key="127">127</option>
                <option key="135">135</option>
                <option key="139">139</option>
                <option key="143">143</option>
                <option key="148">148</option>
                <option key="152">152</option>
                <option key="156">156</option>
                <option key="160">160</option>
                <option key="165">165</option>
                <option key="169">169</option>
                <option key="173">173</option>
                <option key="177">177</option>
                <option key="182">182</option>
                <option key="186">186</option>
                <option key="190">190</option>
                <option key="194">194</option>
                <option key="198">198</option>
                <option key="203">203</option>
                <option key="207">207</option>
                <option key="211">211</option>
                <option key="215">215</option>
                <option key="220">220</option>
                <option key="224">224</option>
                <option key="228">228</option>
                <option key="232">232</option>
                <option key="237">237</option>
                <option key="241">241</option>
                <option key="245">245</option>
                <option key="249">249</option>
                <option key="254">254</option>
              </>
            )}
            {relicRarity === "5★" && (subStat3 === "ATK" || subStat3 === "DEF") && (
              <>
                <option key="16">16</option>
                <option key="19">19</option>
                <option key="21">21</option>
                <option key="33">33</option>
                <option key="35">35</option>
                <option key="38">38</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="50">50</option>
                <option key="52">52</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="61">61</option>
                <option key="63">63</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="78">78</option>
                <option key="80">80</option>
                <option key="82">82</option>
                <option key="84">84</option>
                <option key="86">86</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="93">93</option>
                <option key="95">95</option>
                <option key="97">97</option>
                <option key="99">99</option>
                <option key="101">101</option>
                <option key="103">103</option>
                <option key="105">105</option>
                <option key="107">107</option>
                <option key="110">110</option>
                <option key="112">112</option>
                <option key="114">114</option>
                <option key="116">116</option>
                <option key="118">118</option>
                <option key="120">120</option>
                <option key="122">122</option>
                <option key="124">124</option>
                <option key="127">127</option>
              </>
            )}
            {relicRarity === "5★" && (subStat3 === "HP%" || subStat3 === "ATK%" || subStat3 === "Effect Hit Rate" || subStat3 === "Effect Res") && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
                <option key="22%">22%</option>
                <option key="22.4%">22.4%</option>
                <option key="22.9%">22.9%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.2%">24.2%</option>
                <option key="24.6%">24.6%</option>
                <option key="25%">25%</option>
                <option key="25.5%">25.5%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat3 === "DEF%" && (
              <>
                <option key="4.3%">4.3%</option>
                <option key="4.8%">4.8%</option>
                <option key="5.4%">5.4%</option>
                <option key="8.6%">8.6%</option>
                <option key="9.1%">9.1%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.2%">10.2%</option>
                <option key="10.8%">10.8%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.5%">13.5%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.6%">15.6%</option>
                <option key="16.2%">16.2%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.3%">18.3%</option>
                <option key="18.9%">18.9%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.9%">19.9%</option>
                <option key="20.5%">20.5%</option>
                <option key="21%">21%</option>
                <option key="21.6%">21.6%</option>
                <option key="22.1%">22.1%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.2%">23.2%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.4%">26.4%</option>
                <option key="27%">27%</option>
                <option key="27.5%">27.5%</option>
                <option key="28%">28%</option>
                <option key="28.6%">28.6%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.7%">29.7%</option>
                <option key="30.2%">30.2%</option>
                <option key="30.7%">30.7%</option>
                <option key="31.3%">31.3%</option>
                <option key="31.8%">31.8%</option>
                <option key="32.4%">32.4%</option>
              </>
            )}
            {relicRarity === "5★" && subStat3 === "SPD" && (
              <>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
                <option key="11">11</option>
                <option key="12">12</option>
                <option key="13">13</option>
                <option key="14">14</option>
                <option key="15">15</option>
              </>
            )}
            {relicRarity === "5★" && subStat3 === "CRIT Rate" && (
              <>
                <option key="2.5%">2.5%</option>
                <option key="2.9%">2.9%</option>
                <option key="3.2%">3.2%</option>
                <option key="5.1%">5.1%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.1%">6.1%</option>
                <option key="6.4%">6.4%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.1%">8.1%</option>
                <option key="8.4%">8.4%</option>
                <option key="8.7%">8.7%</option>
                <option key="9%">9%</option>
                <option key="9.4%">9.4%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.2%">13.2%</option>
                <option key="13.6%">13.6%</option>
                <option key="13.9%">13.9%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.9%">14.9%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.8%">15.8%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.5%">16.5%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.4%">17.4%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.4%">18.4%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.4%">19.4%</option>
              </>
            )}
            {relicRarity === "5★" && (subStat3 === "CRIT DMG" || subStat3 === "Break Effect") && (
              <>
                <option key="5.1%">5.1%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.4%">6.4%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.9%">12.9%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.4%">17.4%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.4%">19.4%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.3%">21.3%</option>
                <option key="22%">22%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.9%">23.9%</option>
                <option key="24.6%">24.6%</option>
                <option key="25.2%">25.2%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.5%">26.5%</option>
                <option key="27.2%">27.2%</option>
                <option key="27.8%">27.8%</option>
                <option key="28.5%">28.5%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.8%">29.8%</option>
                <option key="30.4%">30.4%</option>
                <option key="31.1%">31.1%</option>
                <option key="31.7%">31.7%</option>
                <option key="32.3%">32.3%</option>
                <option key="33%">33%</option>
                <option key="33.6%">33.6%</option>
                <option key="34.3%">34.3%</option>
                <option key="34.9%">34.9%</option>
                <option key="35.6%">35.6%</option>
                <option key="36.2%">36.2%</option>
                <option key="36.9%">36.9%</option>
                <option key="37.5%">37.5%</option>
                <option key="38.2%">38.2%</option>
                <option key="38.8%">38.8%</option>
              </>
            )}
          </select>
          <br />
          <select value={subStat4} onChange={handleSubStat4Change}>
            <option value="">Sub Stat #4</option>
            {relicRarity === "4★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
            {relicRarity === "5★" && (
              <>
                <option key="HP">HP</option>
                <option key="ATK">ATK</option>
                <option key="DEF">DEF</option>
                <option key="HP%">HP%</option>
                <option key="ATK%">ATK%</option>
                <option key="DEF%">DEF%</option>
                <option key="SPD">SPD</option>
                <option key="CRIT Rate">CRIT Rate</option>
                <option key="CRIT DMG">CRIT DMG</option>
                <option key="Effect Hit Rate">Effect Hit Rate</option>
                <option key="Effect Res">Effect Res</option>
                <option key="Break Effect">Break Effect</option>
              </>
            )}
          </select>
          <p1 name="relicSubStat1RollsValue4" id="relicSubStat1RollsValue4">
            --
          </p1>
          <select value={subStat4Value} disabled={subStat4 === ""} onChange={handleSubStat4ValueChange}>
            <option value="">--</option>
            {relicRarity === "4★" && subStat4 === "HP" && (
              <>
                <option key="27">27</option>
                <option key="30">30</option>
                <option key="33">33</option>
                <option key="54">54</option>
                <option key="57">57</option>
                <option key="60">60</option>
                <option key="64">64</option>
                <option key="67">67</option>
                <option key="81">81</option>
                <option key="84">84</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="94">94</option>
                <option key="98">98</option>
                <option key="101">101</option>
                <option key="108">108</option>
                <option key="111">111</option>
                <option key="115">115</option>
                <option key="118">118</option>
                <option key="121">121</option>
                <option key="125">125</option>
                <option key="128">128</option>
                <option key="132">132</option>
                <option key="135">135</option>
                <option key="138">138</option>
                <option key="142">142</option>
                <option key="145">145</option>
                <option key="149">149</option>
                <option key="152">152</option>
                <option key="155">155</option>
                <option key="159">159</option>
                <option key="162">162</option>
                <option key="165">165</option>
                <option key="169">169</option>
              </>
            )}
            {relicRarity === "4★" && (subStat4 === "ATK" || subStat4 === "DEF") && (
              <>
                <option key="13">13</option>
                <option key="15">15</option>
                <option key="16">16</option>
                <option key="27">27</option>
                <option key="28">28</option>
                <option key="30">30</option>
                <option key="32">32</option>
                <option key="33">33</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="44">44</option>
                <option key="45">45</option>
                <option key="47">47</option>
                <option key="49">49</option>
                <option key="50">50</option>
                <option key="54">54</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="60">60</option>
                <option key="62">62</option>
                <option key="64">64</option>
                <option key="66">66</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="72">72</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="77">77</option>
                <option key="79">79</option>
                <option key="81">81</option>
                <option key="83">83</option>
                <option key="84">84</option>
              </>
            )}
            {relicRarity === "4★" && (subStat4 === "HP%" || subStat4 === "ATK%" || subStat4 === "Effect Hit Rate" || subStat4 === "Effect Res") && (
              <>
                <option key="2.7%">2.7%</option>
                <option key="3.1%">3.1%</option>
                <option key="3.4%">3.4%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.5%">6.5%</option>
                <option key="6.9%">6.9%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="8.9%">8.9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.6%">9.6%</option>
                <option key="10%">10%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.7%">11.7%</option>
                <option key="12%">12%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.7%">12.7%</option>
                <option key="13.1%">13.1%</option>
                <option key="13.4%">13.4%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.1%">14.1%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.8%">14.8%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.2%">16.2%</option>
                <option key="16.6%">16.6%</option>
                <option key="16.9%">16.9%</option>
                <option key="17.2%">17.2%</option>
              </>
            )}
            {relicRarity === "4★" && subStat4 === "DEF%" && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
              </>
            )}
            {relicRarity === "4★" && subStat4 === "SPD" && (
              <>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
              </>
            )}
            {relicRarity === "4★" && subStat4 === "CRIT Rate" && (
              <>
                <option key="2%">2%</option>
                <option key="2.3%">2.3%</option>
                <option key="2.5%">2.5%</option>
                <option key="4.1%">4.1%</option>
                <option key="4.4%">4.4%</option>
                <option key="4.6%">4.6%</option>
                <option key="4.9%">4.9%</option>
                <option key="5.1%">5.1%</option>
                <option key="6.2%">6.2%</option>
                <option key="6.4%">6.4%</option>
                <option key="6.7%">6.7%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.2%">7.2%</option>
                <option key="7.5%">7.5%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.5%">8.5%</option>
                <option key="8.8%">8.8%</option>
                <option key="9%">9%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.5%">9.5%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.1%">10.1%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.1%">11.1%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
              </>
            )}
            {relicRarity === "4★" && (subStat4 === "CRIT DMG" || subStat4 === "Break Effect") && (
              <>
                <option key="4.1%">4.1%</option>
                <option key="4.6%">4.6%</option>
                <option key="5.1%">5.1%</option>
                <option key="8.3%">8.3%</option>
                <option key="8.8%">8.8%</option>
                <option key="9.3%">9.3%</option>
                <option key="9.8%">9.8%</option>
                <option key="10.3%">10.3%</option>
                <option key="12.4%">12.4%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.4%">13.4%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15%">15%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.6%">16.6%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.6%">17.6%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.6%">18.6%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.6%">19.6%</option>
                <option key="20.2%">20.2%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.2%">21.2%</option>
                <option key="21.7%">21.7%</option>
                <option key="22.3%">22.3%</option>
                <option key="22.8%">22.8%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.8%">23.8%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat4 === "HP" && (
              <>
                <option key="33">33</option>
                <option key="38">38</option>
                <option key="42">42</option>
                <option key="67">67</option>
                <option key="71">71</option>
                <option key="76">76</option>
                <option key="80">80</option>
                <option key="84">84</option>
                <option key="101">101</option>
                <option key="105">105</option>
                <option key="110">110</option>
                <option key="114">114</option>
                <option key="118">118</option>
                <option key="122">122</option>
                <option key="127">127</option>
                <option key="135">135</option>
                <option key="139">139</option>
                <option key="143">143</option>
                <option key="148">148</option>
                <option key="152">152</option>
                <option key="156">156</option>
                <option key="160">160</option>
                <option key="165">165</option>
                <option key="169">169</option>
                <option key="173">173</option>
                <option key="177">177</option>
                <option key="182">182</option>
                <option key="186">186</option>
                <option key="190">190</option>
                <option key="194">194</option>
                <option key="198">198</option>
                <option key="203">203</option>
                <option key="207">207</option>
                <option key="211">211</option>
                <option key="215">215</option>
                <option key="220">220</option>
                <option key="224">224</option>
                <option key="228">228</option>
                <option key="232">232</option>
                <option key="237">237</option>
                <option key="241">241</option>
                <option key="245">245</option>
                <option key="249">249</option>
                <option key="254">254</option>
              </>
            )}
            {relicRarity === "5★" && (subStat4 === "ATK" || subStat4 === "DEF") && (
              <>
                <option key="16">16</option>
                <option key="19">19</option>
                <option key="21">21</option>
                <option key="33">33</option>
                <option key="35">35</option>
                <option key="38">38</option>
                <option key="40">40</option>
                <option key="42">42</option>
                <option key="50">50</option>
                <option key="52">52</option>
                <option key="55">55</option>
                <option key="57">57</option>
                <option key="59">59</option>
                <option key="61">61</option>
                <option key="63">63</option>
                <option key="67">67</option>
                <option key="69">69</option>
                <option key="71">71</option>
                <option key="74">74</option>
                <option key="76">76</option>
                <option key="78">78</option>
                <option key="80">80</option>
                <option key="82">82</option>
                <option key="84">84</option>
                <option key="86">86</option>
                <option key="88">88</option>
                <option key="91">91</option>
                <option key="93">93</option>
                <option key="95">95</option>
                <option key="97">97</option>
                <option key="99">99</option>
                <option key="101">101</option>
                <option key="103">103</option>
                <option key="105">105</option>
                <option key="107">107</option>
                <option key="110">110</option>
                <option key="112">112</option>
                <option key="114">114</option>
                <option key="116">116</option>
                <option key="118">118</option>
                <option key="120">120</option>
                <option key="122">122</option>
                <option key="124">124</option>
                <option key="127">127</option>
              </>
            )}
            {relicRarity === "5★" && (subStat4 === "HP%" || subStat4 === "ATK%" || subStat4 === "Effect Hit Rate" || subStat4 === "Effect Res") && (
              <>
                <option key="3.4%">3.4%</option>
                <option key="3.8%">3.8%</option>
                <option key="4.3%">4.3%</option>
                <option key="6.9%">6.9%</option>
                <option key="7.3%">7.3%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.2%">8.2%</option>
                <option key="8.6%">8.6%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.8%">10.8%</option>
                <option key="11.2%">11.2%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.1%">12.1%</option>
                <option key="12.5%">12.5%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.8%">13.8%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.7%">14.7%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.9%">15.9%</option>
                <option key="16.4%">16.4%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.7%">17.7%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.5%">18.5%</option>
                <option key="19%">19%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.8%">19.8%</option>
                <option key="20.3%">20.3%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.1%">21.1%</option>
                <option key="21.6%">21.6%</option>
                <option key="22%">22%</option>
                <option key="22.4%">22.4%</option>
                <option key="22.9%">22.9%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.2%">24.2%</option>
                <option key="24.6%">24.6%</option>
                <option key="25%">25%</option>
                <option key="25.5%">25.5%</option>
                <option key="25.9%">25.9%</option>
              </>
            )}
            {relicRarity === "5★" && subStat4 === "DEF%" && (
              <>
                <option key="4.3%">4.3%</option>
                <option key="4.8%">4.8%</option>
                <option key="5.4%">5.4%</option>
                <option key="8.6%">8.6%</option>
                <option key="9.1%">9.1%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.2%">10.2%</option>
                <option key="10.8%">10.8%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.5%">13.5%</option>
                <option key="14%">14%</option>
                <option key="14.5%">14.5%</option>
                <option key="15.1%">15.1%</option>
                <option key="15.6%">15.6%</option>
                <option key="16.2%">16.2%</option>
                <option key="17.2%">17.2%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.3%">18.3%</option>
                <option key="18.9%">18.9%</option>
                <option key="19.4%">19.4%</option>
                <option key="19.9%">19.9%</option>
                <option key="20.5%">20.5%</option>
                <option key="21%">21%</option>
                <option key="21.6%">21.6%</option>
                <option key="22.1%">22.1%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.2%">23.2%</option>
                <option key="23.7%">23.7%</option>
                <option key="24.3%">24.3%</option>
                <option key="24.8%">24.8%</option>
                <option key="25.3%">25.3%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.4%">26.4%</option>
                <option key="27%">27%</option>
                <option key="27.5%">27.5%</option>
                <option key="28%">28%</option>
                <option key="28.6%">28.6%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.7%">29.7%</option>
                <option key="30.2%">30.2%</option>
                <option key="30.7%">30.7%</option>
                <option key="31.3%">31.3%</option>
                <option key="31.8%">31.8%</option>
                <option key="32.4%">32.4%</option>
              </>
            )}
            {relicRarity === "5★" && subStat4 === "SPD" && (
              <>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
                <option key="6">6</option>
                <option key="7">7</option>
                <option key="8">8</option>
                <option key="9">9</option>
                <option key="10">10</option>
                <option key="11">11</option>
                <option key="12">12</option>
                <option key="13">13</option>
                <option key="14">14</option>
                <option key="15">15</option>
              </>
            )}
            {relicRarity === "5★" && subStat4 === "CRIT Rate" && (
              <>
                <option key="2.5%">2.5%</option>
                <option key="2.9%">2.9%</option>
                <option key="3.2%">3.2%</option>
                <option key="5.1%">5.1%</option>
                <option key="5.5%">5.5%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.1%">6.1%</option>
                <option key="6.4%">6.4%</option>
                <option key="7.7%">7.7%</option>
                <option key="8.1%">8.1%</option>
                <option key="8.4%">8.4%</option>
                <option key="8.7%">8.7%</option>
                <option key="9%">9%</option>
                <option key="9.4%">9.4%</option>
                <option key="9.7%">9.7%</option>
                <option key="10.3%">10.3%</option>
                <option key="10.6%">10.6%</option>
                <option key="11%">11%</option>
                <option key="11.3%">11.3%</option>
                <option key="11.6%">11.6%</option>
                <option key="11.9%">11.9%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.6%">12.6%</option>
                <option key="12.9%">12.9%</option>
                <option key="13.2%">13.2%</option>
                <option key="13.6%">13.6%</option>
                <option key="13.9%">13.9%</option>
                <option key="14.2%">14.2%</option>
                <option key="14.5%">14.5%</option>
                <option key="14.9%">14.9%</option>
                <option key="15.2%">15.2%</option>
                <option key="15.5%">15.5%</option>
                <option key="15.8%">15.8%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.5%">16.5%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.1%">17.1%</option>
                <option key="17.4%">17.4%</option>
                <option key="17.8%">17.8%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.4%">18.4%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.1%">19.1%</option>
                <option key="19.4%">19.4%</option>
              </>
            )}
            {relicRarity === "5★" && (subStat4 === "CRIT DMG" || subStat4 === "Break Effect") && (
              <>
                <option key="5.1%">5.1%</option>
                <option key="5.8%">5.8%</option>
                <option key="6.4%">6.4%</option>
                <option key="10.3%">10.3%</option>
                <option key="11%">11%</option>
                <option key="11.6%">11.6%</option>
                <option key="12.3%">12.3%</option>
                <option key="12.9%">12.9%</option>
                <option key="15.5%">15.5%</option>
                <option key="16.1%">16.1%</option>
                <option key="16.8%">16.8%</option>
                <option key="17.4%">17.4%</option>
                <option key="18.1%">18.1%</option>
                <option key="18.7%">18.7%</option>
                <option key="19.4%">19.4%</option>
                <option key="20.7%">20.7%</option>
                <option key="21.3%">21.3%</option>
                <option key="22%">22%</option>
                <option key="22.6%">22.6%</option>
                <option key="23.3%">23.3%</option>
                <option key="23.9%">23.9%</option>
                <option key="24.6%">24.6%</option>
                <option key="25.2%">25.2%</option>
                <option key="25.9%">25.9%</option>
                <option key="26.5%">26.5%</option>
                <option key="27.2%">27.2%</option>
                <option key="27.8%">27.8%</option>
                <option key="28.5%">28.5%</option>
                <option key="29.1%">29.1%</option>
                <option key="29.8%">29.8%</option>
                <option key="30.4%">30.4%</option>
                <option key="31.1%">31.1%</option>
                <option key="31.7%">31.7%</option>
                <option key="32.3%">32.3%</option>
                <option key="33%">33%</option>
                <option key="33.6%">33.6%</option>
                <option key="34.3%">34.3%</option>
                <option key="34.9%">34.9%</option>
                <option key="35.6%">35.6%</option>
                <option key="36.2%">36.2%</option>
                <option key="36.9%">36.9%</option>
                <option key="37.5%">37.5%</option>
                <option key="38.2%">38.2%</option>
                <option key="38.8%">38.8%</option>
              </>
            )}
          </select>
        </div>
      </form>
    </div>
  );
}

export default NewRelic;
