const buttons = {
    updateChangelog(logType) {
        let typeString = "";

        if (logType === "R2") {typeString = "remnant";document.getElementById("currentLogs").innerHTML = "Remnant 2"}
        if (logType === "TFD") {typeString = "tfd";document.getElementById("currentLogs").innerHTML = "TFD"}

        injectHTMLTemplate(`${typeString}Log.html`,'remnantLogBody');
        injectHTMLTemplate(`${typeString}ToDo.html`,'remnantToDoList');
    }
}

// injectHTMLTemplate('tfdLog.html','remnantLogBody');
// injectHTMLTemplate('tfdToDo.html','remnantToDoList');