let loadouts = {
    loadoutSettingsVisibilityToggle(loadoutID) {
      readSelection("loadoutOptionsBackgroundShutter").style.display = "block";
      readSelection("loadoutOptionsBox").style.display = "flex";
  
      let storageExplainerText = "Loadouts are stored locally on your machine. They will not persist between different devices, or cache clears. Yet.<br>Either export the build or save the URL to store builds otherwise."
  
      let loadout = localStorage.getItem(`userLoadout${loadoutID}`);
      loadout = loadout ? JSON.parse(loadout) : null;
  
      if (!loadout || !loadout.loadoutURL) {
        readSelection("storedLoadoutNotifBox").innerHTML = "No stored loadout detected for this slot";
  
        readSelection("loadoutNameInput").value = `Loadout${loadoutID}`;
  
        readSelection("loadoutControlsBox").innerHTML = `
          <button type="button" class="loadoutSettingsButton" onclick="loadouts.hideLoadoutSettingsBox()">Close</button>
          <button type="button" class="loadoutSettingsButton" onclick="loadouts.saveLoadoutToStorage(${loadoutID})">SAVE TO this Loadout</button>
          <br>
          <button type="button" class="loadoutSettingsButton" onclick="loadouts.deleteLoadoutSlot(${loadoutID})" style="color: #e06666;">Clear Slot (Debug)</button>
          <div class="loadoutStorageExplainer">${storageExplainerText}</div>
        `
      }
      else {
        readSelection("storedLoadoutNotifBox").innerHTML = "Stored loadout detected";
  
        readSelection("loadoutNameInput").value = loadout.name;
  
        readSelection("loadoutControlsBox").innerHTML = `
        <button type="button" class="loadoutSettingsButton" onclick="loadouts.hideLoadoutSettingsBox()">Close</button>
        <button type="button" class="loadoutSettingsButton" onclick="loadouts.saveLoadoutToStorage(${loadoutID})">OVERWRITE this Loadout</button>
        <a href="${loadout.loadoutURL}" class="loadoutSettingsButton" onclick="loadouts.loadLoadoutFromStorage(${loadoutID})">LOAD FROM this Loadout</a>
        <div class="loadoutStorageExplainer">Loading will refresh the page with the specified loadout selected</div>
        <br>
        <button type="button" class="loadoutSettingsButton" onclick="loadouts.deleteLoadoutSlot(${loadoutID})" style="color: #e06666;">Delete Stored Loadout</button>
        <div class="loadoutStorageExplainer">${storageExplainerText}</div>
      `
      }
  
  
    },
    hideLoadoutSettingsBox() {
      readSelection("loadoutOptionsBackgroundShutter").style.display = "none";
      readSelection("loadoutOptionsBox").style.display = "none";
    },
    saveLoadoutToStorage(loadoutID) {
      const loadoutToSave = {
        "name": `${readSelection("loadoutNameInput").value || `Loadout${loadoutID}`}`,
        "loadoutURL": window.location.href,
      }
  
      localStorage.setItem(`userLoadout${loadoutID}`, JSON.stringify(loadoutToSave));
  
      loadouts.hideLoadoutSettingsBox();
    },
    loadLoadoutFromStorage(loadoutID) {
      let loadout = localStorage.getItem(`userLoadout${loadoutID}`);
      loadout = loadout ? JSON.parse(loadout) : null;
      // window.location.href = 
      const newUrl = loadout.loadoutURL;
      window.location.href = newUrl;//For now just bc it's way simpler, I've opted to just refresh the page with the stored build's URL instead of repopulate the current page with it.
      // history.replaceState({}, '', newUrl);
  
      // manipulateURL.importURLparameters();
      // loadouts.hideLoadoutSettingsBox();
    },
    deleteLoadoutSlot(loadoutID) {
      localStorage.removeItem(`userLoadout${loadoutID}`);
      loadouts.hideLoadoutSettingsBox();
    },
  }