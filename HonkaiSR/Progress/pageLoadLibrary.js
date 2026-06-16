

let currentActiveCycle = null;
let currentFloor = null;
let currentFilter = "char";


const endgameModeDisplay = {
    pageloadEntry() {

        // if (stageTypers === "anom") {

        //     mocSchedule.reverse();
        //     const newActiveRange = mocSchedule[mocSchedule.length-1];
        //     currentActiveCycle = newActiveRange.id;
        //     currentFloor = 4;
        //     endgameModeDisplay.setEndgameDisplay(newActiveRange.id,newActiveRange);

        //     return 
        // }

        // mocSchedule.sort((a, b) => {
        //     const aDate = parseLocalDate(a.start);
        //     const bDate = parseLocalDate(b.start);
        //     return aDate - bDate;
        // });
        
        // // for (let entry of mocSchedule) {
        // //     console.log(entry.realName);
        // // }
        
        
        // const today = todayLocal();
        // const activeRange = mocSchedule.find(r => {
        //     const start = parseLocalDate(r.start);
        //     const end   = parseLocalDate(r.end);
        //     return today >= start && today <= end;
        // });
        
        // // console.log(activeRange)

        // currentActiveCycle = activeRange.id;

        

        endgameModeDisplay.setEndgameDisplay();
        
    },
    linkToEnemy() {
        alert("Enemy linking will be set up in a day or two.\n\nForgive me for setting up the onclick early.")
    },
    setActivityBuffDisplay(display) {
        // activityBuffDisplay2Button${selectorCounter2}
        // activityBuffDisplay2Box${selectorCounter2}

        const entriesArray = ["char","lc","relic","enemy"]

        for (let i=1;i<=4;i++) {
            readSelection(`activityBuffDisplayButton${i}`).style.backgroundColor = i === display ? "rgb(225, 225, 228)" : "rgba(0, 0, 0, 0.562)";
            readSelection(`activityBuffDisplayButton${i}`).style.color = i === display ? "black" : "#e1e1e4";
        }

        currentFilter = entriesArray[display-1];
        endgameModeDisplay.setEndgameDisplay();

        // style="background-color: rgb(225, 225, 228); color: black;"

        // background-color: rgba(0, 0, 0, 0.562);
        // color: #e1e1e4;
    },
    setEndgameDisplay() {

        const bgImagePath = `activityBG/ChallengeRogueTournBanner4.png`;
        // const bgImagePath = `activityBG/RogueTournBanner.png`;

        // RogueTournBanner
        // RogueBanner
        // MainStorySecondWorldBanner
        // MainStoryFirstWorldBanner
        // RoguePanelFormalBanner
        
        readSelection("mainGridRow").style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/HonkaiSR/${bgImagePath}') center top / cover`;
        readSelection("pureFictionBannerImage").src = `/HonkaiSR/${bgImagePath}`;


        let currentUserInput = readSelection("statFilterBoxInput").value;

        // erosionModsData
        function fuzzyMatch(input, itemParam1, itemParam2,desc,aim) {
            if (typeof itemParam1 != "string") {itemParam1 = itemParam1.toString()}

            const search = input.toLowerCase();
            return itemParam1.toLowerCase().includes(search) 
            // || itemParam2.toLowerCase().includes(search) 
            // || desc.toLowerCase().includes(search)
            // || aim.toLowerCase().includes(search)
            
            
            ;
        }




        // sizeLeaderboardArray.sort((a, b) => b.sizeCount - a.sizeCount);
        // const sizeLength = sizeLeaderboardArray.length;

        // const biggestSize = sizeLeaderboardArray[0].sizeCount;
        // const smallestSize = sizeLeaderboardArray[sizeLength-1].sizeCount;
        // const fullSizeRange = biggestSize-smallestSize;

        // <div class="mocEachSide" id="mocEachSide1">asdf</div>

        // vashCharProgressList
        //characters 

        let notClassifiedString = "";
        let notOwnedString = "";
        let readyToCodeString = "";
        let missingTracesString = "";
        let finishedButLocalString = "";
        let finishedString = "";

        let characterCounter = 0;

        let unclassifiedCounter = 0;
        let notOwnedCounter = 0;
        let notReadyCounter = 0;
        let localCounter = 0;
        let finishedCounter = 0;
        let readyCounter = 0;
        let ownedCounter = 0;
        for (let charEntry in characters) {
            if (charEntry.includes("_v")) {continue;}
            characterCounter++;

            let dataToUse = null;
            for (let dataEntry of vashCharProgressList) {
                if (dataEntry.name === charEntry) {
                    dataToUse = dataEntry;
                    break;
                }
            }

            if (!dataToUse) {unclassifiedCounter++;}
            else if (!dataToUse.owned) {notOwnedCounter++}
            else if (dataToUse.needs80OrTraces) {notReadyCounter++;}
            else if (!dataToUse.live && dataToUse.completed) {localCounter++}
            else if (dataToUse.live && dataToUse.completed) {finishedCounter++;}
            else if (!dataToUse.live && !dataToUse.completed && !dataToUse.needs80OrTraces) {readyCounter++}
            if (!fuzzyMatch(currentUserInput,charEntry ?? "")) {continue;}

            const charIcon = characters[charEntry].icon

            let entryString = `<img src="/HonkaiSR/${charIcon}" class="turnOrderDisplayPreview">`;

            if (!dataToUse) {notClassifiedString += entryString;}
            else if (!dataToUse.owned) {notOwnedString += entryString;}
            else if (dataToUse.needs80OrTraces) {missingTracesString += entryString;}
            else if (!dataToUse.live && dataToUse.completed) {finishedButLocalString += entryString;}
            else if (dataToUse.live && dataToUse.completed) {finishedString += entryString;}
            else if (!dataToUse.live && !dataToUse.completed && !dataToUse.needs80OrTraces) {readyToCodeString += entryString;}

            // completed: false, live: false, needs80OrTraces: false, owned: true

        }

        let fullString = "";

        if (notClassifiedString) {notClassifiedString = `<div class="mocEachSide"><div class="eidolonRowName">Not Classified (${(100 * unclassifiedCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>
            <div class="superimpositionHolderbox">
                <div class="actionDetailBody3Description superimpositionHolderbox">These are characters that are likely too new and Vash hasn't categorized them yet.</div>
            </div>
            ${notClassifiedString}</div>`}
        if (notOwnedString) {notOwnedString = `<div class="mocEachSide"><div class="eidolonRowName">Not Owned (${(100 * notOwnedCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>
            <div class="superimpositionHolderbox">
                <div class="actionDetailBody3Description superimpositionHolderbox">Will get these on reruns if I can, but I'm not made of money. Without being owned first they won't be coded.</div>
            </div>
            <details class="actionDetailBodyDetailExpand">
                <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Why Not?</summary>
                    

                <div class="superimpositionHolderbox">
                    <div class="actionDetailBody3Description superimpositionHolderbox">
                        Even utilizing the eventreaders there are things that you would overlook or misunderstand without having the character on-hand in order to test with.<br>If you don't believe that, just look at any spreadsheet maker because god knows they just theorycraft even based on leaks alone and you guys eat that shit up.
                        <br><br>I don't do leaks and I try REALLY FUCKIN HARD not to guess, and even still I might miss things here and there which is why I make changes daily in the pursuit of making this whole project more accurate. Why on earth would I try to code out a character I don't even own, that I'm guessing with?
                    </div>
                </div>
            </details>
            <details class="actionDetailBodyDetailExpand">
                <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">What about Support Characters/DU Trials/PS?</summary>
                    

                <div class="superimpositionHolderbox">
                    <div class="actionDetailBody3Description superimpositionHolderbox">
                        First off, testing in Divergent Universe is like handing someone a rocket launcher and asking why it won't work to test it like a pistol.
                        <br>DU presents you with about a billion extra factors you would have to account for in order to line things up, and it's just not happening. Anyone who claims to test in DU is either lying or so delusional they don't even understand why that's not gonna work.

                        <br><br>Second, character trials when the banner is up are pretty much impossible to test with since they enforce a team and enemy scenario that you can't modify. What if a character needs to test interactions with a charater that isn't on the trial team? Or gear/lightcones the trial team doesn't use? You're shit out of luck, it's not happening.

                        <br><br>Third, support characters are ass for similar reasons as character trials. Say I don't have Cyrene and Anaxa, you can only grab one support character, so how would I test Cyrene with Anaxa in this scenario? Not only that, but you can only use support characters in specific activities which admittedly are significantly more lenient than character trials, but still restrictive if you need to test a specific interaction.
                        <br>I have tested one(1) character using support characters and that was Hyacine before I owned her, and after having done that I can safely say I never want to do it again, it was absolutely fucking miserable doing it that way.
                    
                        <br><br>Lastly, PS or private servers are against hoyo's TOS so why do you guys keep suggesting them. But even if we COMPLETELY IGNORE THAT you are subject to the mercy of the PS dev to have ensured shit will even work. I've heard numerous instances of people using PS that couldn't even get techniques to work let alone get it localized in their own language or test a simple calyx.
                        <br>Why everyone is so eager to act as if a clusterfuck like that is a legitimate testing ground, is beyond me.
                    </div>
                </div>
            </details>
            ${notOwnedString}</div>`}
        if (readyToCodeString) {readyToCodeString = `<div class="mocEachSide"><div class="eidolonRowName">Ready to Code (${(100 * readyCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>
            <div class="superimpositionHolderbox">
                <div class="actionDetailBody3Description superimpositionHolderbox">Characters that have base traces finished and are LvL80.</div>
            </div>
            ${readyToCodeString}</div>`}
        if (missingTracesString) {missingTracesString = `<div class="mocEachSide"><div class="eidolonRowName">Not Ready (${(100 * notReadyCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>
            <div class="superimpositionHolderbox">
                <div class="actionDetailBody3Description superimpositionHolderbox">Before I can code/test characters, I need them to be LvL80 and have at least 1 rank in every trace.</div>
            </div>
            ${missingTracesString}</div>`}
        if (finishedButLocalString) {finishedButLocalString = `<div class="mocEachSide"><div class="eidolonRowName">Coded but not Live (${(100 * localCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>
            <div class="superimpositionHolderbox">
                <div class="actionDetailBody3Description superimpositionHolderbox">Coded locally, but waiting for a bigger change/update to work properly and go to live.</div>
            </div>
            ${finishedButLocalString}</div>`}
        if (finishedString) {finishedString = `<div class="mocEachSide"><div class="eidolonRowName">Coded and Live (${(100 * finishedCounter/characterCounter).toLocaleString(undefined,{maximumFractionDigits:0})}%)</div>${finishedString}</div>`}

        fullString += notClassifiedString + notOwnedString + readyToCodeString + missingTracesString + finishedButLocalString + finishedString;

        

        // let sizeString = `<div class="eidolonRowName">Bytes</div>`;
        
        readSelection("mainDisplayBox").innerHTML = fullString;
    },
}



endgameModeDisplay.pageloadEntry();