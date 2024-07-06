let globalRecords = {};
let manipulateURL = {
    //Used to modify and actively update the browser URL display without a page reload.
    //Also used to compile the query string when exporting to R2TK.
    updateURLparameters() {
        globalRecords.urlObject = {
        "m": "",
        "b": "",
        "wl":"",
        "d": "",
        "res": [],
        "mSet": [],
        "lSet": [],
        }
        let urlObject = globalRecords.urlObject;

        let selectedMode = readSelection("listAllAttacks").checked ? "list" : "boss";
        urlObject.m = selectedMode;

        let selectedBoss = readSelection("bossList").value;
        if (selectedBoss && selectedMode != "list") {urlObject.b = selectedBoss;}

        let worldLevel = readSelection("worldLevelSlider").value;
        if (worldLevel != 21) {urlObject.wl = worldLevel;}

        let difficulty = readSelection("difficultySlider").value;
        if (difficulty != 4) {urlObject.d = difficulty;}

        let resistanceArray = [];
        resistanceArray.push(userSettings.vars.maxHealth != 100 ? userSettings.vars.maxHealth : "");
        resistanceArray.push(userSettings.vars.bossHP != 100 ? userSettings.vars.bossHP : "")
        resistanceArray.push(userSettings.vars.effectiveDR || "");
        resistanceArray.push(userSettings.vars.playerCount != 1 ? userSettings.vars.playerCount : "");
        resistanceArray.push(+userSettings.vars.playerBleedRes || "");
        resistanceArray.push(+userSettings.vars.playerBurnRes || "");
        resistanceArray.push(+userSettings.vars.playerShockRes || "");
        resistanceArray.push(+userSettings.vars.playerAcidRes || "");
        resistanceArray.push(+userSettings.vars.playerBlightRes || "");
        urlObject.res = resistanceArray;

        //binary toggles
        let togglesString = "";
        togglesString += readSelection("isVicious").checked ? 1 : 0;
        togglesString += readSelection("isSpiteful").checked ? 1 : 0;
        togglesString += readSelection("useBuffs").checked ? 1 : 0;
        togglesString = togglesString.replace(/\.?0+$/, '');
        urlObject.mSet = togglesString;
        let listToggles = "";
        listToggles += readSelection("includeWorldBoss").checked ? 0 : 1;
        listToggles += readSelection("includeMiniBoss").checked ? 0 : 1;
        listToggles += readSelection("includeStandard").checked ? 0 : 1;
        listToggles += readSelection("includePercentHP").checked ? 0 : 1;
        listToggles += readSelection("includeDOT").checked ? 0 : 1;
        listToggles += readSelection("includeDRBypass").checked ? 0 : 1;
        listToggles += readSelection("includeLethal").checked ? 0 : 1;
        listToggles += readSelection("includeElemental").checked ? 0 : 1;
        listToggles = listToggles.replace(/\.?0+$/, '');
        urlObject.lSet = listToggles;

        manipulateURL.urlParamIsEmpty("m");
        manipulateURL.urlParamIsEmpty("b");
        manipulateURL.urlParamIsEmpty("wl");
        manipulateURL.urlParamIsEmpty("d");
        manipulateURL.urlParamIsEmpty("res");
        manipulateURL.urlParamIsEmpty("mSet");
        manipulateURL.urlParamIsEmpty("lSet");
  
        const params = new URLSearchParams(urlObject);
        decoded = params.toString();
        decoded = decoded.replace(/%2C/g, ',');
        const newUrl = `${window.location.origin}/Remnant2/BossDamage/?${decoded}`;
        history.replaceState({}, '', newUrl);

    },
    //Used in updateURLparameters() to delete a given parameter if it is empty, to reduce URL length
    urlParamIsEmpty(objElement) {
      if (!globalRecords.urlObject[objElement]) {
        delete globalRecords.urlObject[objElement];
      }
      else{
        let foundValue = false;
        for (i=0;i<globalRecords.urlObject[objElement].length;i++) {
          if (globalRecords.urlObject[objElement][i]) {foundValue=true;break;}
        }
        if (foundValue===false) {
          delete globalRecords.urlObject[objElement];
        }
      }
    },
    //Reads the query string if one exists, and populates all fields/updates formulas accordingly -- push text test
    importURLparameters() {
        let feed = (new URL(document.location)).searchParams;

        globalRecords.urlObject = {
            "M": "",
            "B": "",
            "WL":"",
            "D": "",
            "res": [],
            "mSet": [],
            "lSet": [],
        }

        let urlMode = feed.get("m");
        let urlBoss = feed.get("b");
        let urlWorldLevel = feed.get("wl");
        let urlDifficulty = feed.get("d");
        let urlResistanceArray = feed.get("res");
        let urlMainSettings = feed.get("mSet");
        let urlListSettings = feed.get("lSet");
        let invalidEntries = [];
        //Mode
        if (urlMode) {
            if (urlMode != "boss" && urlMode != "list") {invalidEntries.push(urlMode);}
            else {if (urlMode === "list") {readSelection("listAllAttacks").checked = true;}}
        }
        if (urlBoss && urlMode === "boss") {
            if (bosses[urlBoss] === undefined) {invalidEntries.push(urlBoss);}
            else {readSelection("bossList").value = urlBoss;}
        }
        if (urlWorldLevel) {
            if (+urlWorldLevel > 21 || +urlWorldLevel < 1) {invalidEntries.push(urlWorldLevel);}
            else {readSelection("worldLevelSlider").value = urlWorldLevel;}
        }
        if (urlDifficulty) {
            if (+urlDifficulty > 4 || +urlDifficulty < 1) {invalidEntries.push(urlDifficulty);}
            else {readSelection("difficultySlider").value = urlDifficulty;}
        }

        //SETTINGS
        if (urlResistanceArray) {
            urlResistanceArray = urlResistanceArray.split(",");
            readSelection("playerHealthValue").value = +urlResistanceArray[0] || 100;
            readSelection("bossHPSlider").value = +urlResistanceArray[1] || 100;
            readSelection("playerDRValue").value = +urlResistanceArray[2];
            readSelection("playerCountSlider").value = +urlResistanceArray[3];
            readSelection("playerBleedRes").value = +urlResistanceArray[4];
            readSelection("playerBurnRes").value = +urlResistanceArray[5];
            readSelection("playerShockRes").value = +urlResistanceArray[6];
            readSelection("playerAcidRes").value = +urlResistanceArray[7];
            readSelection("playerBlightRes").value = +urlResistanceArray[8];
        }
        if (urlMainSettings) {
            // urlListSettings = urlListSettings.split(",");
            readSelection("isVicious").checked = +urlMainSettings[0] ? true : false;
            readSelection("isSpiteful").checked = +urlMainSettings[1] ? true : false;
            readSelection("useBuffs").checked = +urlMainSettings[2] ? true : false;
        }
        if (urlListSettings) {
            // urlListSettings = urlListSettings.split(",");
            readSelection("includeWorldBoss").checked = +urlListSettings[0] ? false : true;
            readSelection("includeMiniBoss").checked = +urlListSettings[1] ? false : true;
            readSelection("includeStandard").checked = +urlListSettings[2] ? false : true;
            readSelection("includePercentHP").checked = +urlListSettings[3] ? false : true;
            readSelection("includeDOT").checked = +urlListSettings[4] ? false : true;
            readSelection("includeDRBypass").checked = +urlListSettings[5] ? false : true;
            readSelection("includeLethal").checked = +urlListSettings[6] ? false : true;
            readSelection("includeElemental").checked = +urlListSettings[7] ? false : true;
        }

        if (invalidEntries.length) {
            manipulateURL.excludeAlert(invalidEntries);
        }
    },
    //Used in importURLparameters for shorthand checks
    importURLsetting(checkBoxID,arrayIDvalue) {
      if (arrayIDvalue && arrayIDvalue === "1") {
        readSelection(checkBoxID).checked = true;
      }
    },
    //Used in importURLparameters if an invalid import entry was detected, to notify the user
    excludeAlert(entry) {
      alert(`Item Import(s): "${entry}" read as invalid and excluded from the import.\n\nThis happens because of one or more of following options:\n- Vash or R2TK has the item's name wrong\n- Vash hasn't added the item yet\n- Or you, the user, have manually modified the URL. Don't.\nIf you believe this to be a spelling error, join the discord linked at the bottom of any page, and let Vash know.`)    
    }
  }