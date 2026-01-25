function readSelection(elemID) {return document.getElementById(elemID);}

console.log("reached")
let currentCharFilePrefix = null;
let currentLCSuperimposition = 1;


const skillLevelStore = {

}


let globalUI = {
    "currentMainMenuDisplayed": 1,
    // "defaultTeam": ["Saber","Sunday","Dan Heng • Permansor Terrae","Robin"],

    "currentBattleViewDisplayType": "ActionExpand",
    "currentGraphViewDisplayType": "Summary",
    "defaultActionIndex": 0,
    "currentActionIndex": 0,

    "volumeIsOcclusion": false,
    "volumeIsLock": false,

    "buffGraphs": {
        graphBy: "AV",
        buffEntity: "Character",
        entityName: "Hysilens",
        buffName: "",

        graphByStat: "AV",
        buffEntityStat: "Character",
        entityNameStat: "Hysilens",
        statName: null,
    },
    
    "currentCharacterDisplayed": 1,
    "currentCharacterMenuDisplayed": 1,

    "currentSearchOpen": null,
    "currentSearchVolume": null,

}















const customHTML = {
    establishZoomableTraces() {
        //TODO: clean this up later
        const wrapper = readSelection('characterMainCenterDisplayTraces');
        const board = readSelection('traceMainBoxHolder');
        let scale = 1;
        let posX = 0, posY = 0;
        let startX, startY, isDragging = false;

        // Base maximum offset values
        const baseMaxOffsetX = 500; 
        const baseMaxOffsetY = 500; 

        // Function to calculate max drag based on scale
        function getScaledMaxOffset(base) {
            return base * scale; // Increase max movement as scale increases
        }

        // Zoom In/Out using Scroll Wheel (Desktop)
        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            let scaleAmount = 0.1;
            if (e.deltaY < 0) {
                scale = Math.min(scale + scaleAmount, 3); // Max zoom in: 3x
            } else {
                scale = Math.max(scale - scaleAmount, 0.7); // Min zoom out: 0.5x
            }

            // Adjust position constraints after scaling
            posX = Math.min(Math.max(posX, -getScaledMaxOffset(baseMaxOffsetX)), getScaledMaxOffset(baseMaxOffsetX));
            posY = Math.min(Math.max(posY, -getScaledMaxOffset(baseMaxOffsetY)), getScaledMaxOffset(baseMaxOffsetY));

            board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
        }, { passive: false });

        // Drag Start (Mouse & Touch)
        function startDrag(e) {
            isDragging = true;

            // Handle touch events
            if (e.touches) {
                startX = e.touches[0].clientX - posX;
                startY = e.touches[0].clientY - posY;
            } else {
                startX = e.clientX - posX;
                startY = e.clientY - posY;
            }

            wrapper.style.cursor = 'grabbing';
        }

        // Drag Move (Mouse & Touch)
        function dragMove(e) {
            if (!isDragging) return;
            
            let clientX, clientY;

            // Handle touch events
            if (e.touches) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            // Calculate new position
            let newX = clientX - startX;
            let newY = clientY - startY;

            // Get scaled movement limits
            const maxOffsetX = getScaledMaxOffset(baseMaxOffsetX);
            const maxOffsetY = getScaledMaxOffset(baseMaxOffsetY);

            // Apply limits using Math.min/max
            posX = Math.min(Math.max(newX, -maxOffsetX), maxOffsetX);
            posY = Math.min(Math.max(newY, -maxOffsetY), maxOffsetY);

            board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;

            // Prevent scrolling the page when dragging
            e.preventDefault();
        }

        // Drag End (Mouse & Touch)
        function endDrag() {
            isDragging = false;
            wrapper.style.cursor = 'grab';
        }

        // Event Listeners for Mouse
        wrapper.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', endDrag);

        // Event Listeners for Touch
        wrapper.addEventListener('touchstart', startDrag, { passive: false });
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', endDrag);
    },
    establishMobileSideScrollerMenu() {
        function enableHorizontalDrag(container) {
            const content = container.querySelector('.scrollHolderHorizontalBody');
            let startX, currentTranslate = 0, isDown = false;
          
            const containerWidth = container.offsetWidth;
            let contentWidth;
          
            function updateContentWidth() {
              contentWidth = content.scrollWidth;
            }
          
            updateContentWidth();
            window.addEventListener('resize', updateContentWidth);
          
            function dragStart(clientX) {
              isDown = true;
              startX = clientX;
              container.style.cursor = 'grabbing';
            }
          
            function dragMove(clientX) {
              if (!isDown) return;
              let dx = clientX - startX;
              let newTranslate = currentTranslate + dx;
          
              // enforce boundaries
              const maxTranslate = 0;
              const minTranslate = Math.min(containerWidth - contentWidth, 0); // negative number
          
              if (newTranslate > maxTranslate) newTranslate = maxTranslate;
              if (newTranslate < minTranslate) newTranslate = minTranslate;
          
              content.style.transform = `translateX(${newTranslate}px)`;
            }
          
            function dragEnd(clientX) {
              if (!isDown) return;
              let dx = clientX - startX;
              currentTranslate += dx;
          
              // enforce boundaries
              const maxTranslate = 0;
              const minTranslate = Math.min(containerWidth - contentWidth, 0);
              if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
              if (currentTranslate < minTranslate) currentTranslate = minTranslate;
          
              content.style.transform = `translateX(${currentTranslate}px)`;
              isDown = false;
              container.style.cursor = 'grab';
            }
          
            // Mouse events
            container.addEventListener('mousedown', e => {
              dragStart(e.clientX);
          
              function mouseMoveHandler(e) { dragMove(e.clientX); }
              function mouseUpHandler(e) { 
                dragEnd(e.clientX); 
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
              }
          
              document.addEventListener('mousemove', mouseMoveHandler);
              document.addEventListener('mouseup', mouseUpHandler);
            });
          
            // Touch events
            container.addEventListener('touchstart', e => {
              dragStart(e.touches[0].clientX);
            }, { passive: true });
          
            container.addEventListener('touchmove', e => {
              dragMove(e.touches[0].clientX);
            }, { passive: true });
          
            container.addEventListener('touchend', e => {
              dragEnd(e.changedTouches[0].clientX);
            });
          }
        
          // usage
        const container = document.querySelector('.scrollHolderHorizontal');
        enableHorizontalDrag(container);
    },
    "trees": {
        //yes I made the tree SVG's, no they're not from the game files.
        "The Hunt"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 800;
            let Major1and2Offset = 240;

            let SkillRadius = 55;
            let Skill1and2Height = 440;
            let Skill1and2Offset = 255;

            let skillCenterHeight = 560;
            let skillUpperHeight = 310;
            let lowerSkillHeight = 780;
            
            let traceRadius = 40;
            let bottomTraceHeight = 1040
            let middleTraceHeight = 240;
            let middleTraceOffset = 65;

            let lowerTraceLowerHeight = 630;
            let lowerTraceLowerOffset = 60;

            let lowerTraceUpperHeight = 460;
            let lowerTraceUpperOffset = -120;

            let upperMajorHeight = 130;

            let finalTraceHeight = -40;
            let topTraceHeight = 5;
            let topTraceOffset = 215;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["The Hunt"].big
            //<image href="/HonkaiSR/Hunt.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceHunt"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>

                <line x1="${Major1and2Offset}" y1="${Major1and2Height}" x2="${lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height}" x2="${1000-lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height} Q 500 700, ${1000-Skill1and2Offset} ${Skill1and2Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${Major1and2Offset} ${Major1and2Height} Q 500 740, ${1000-Major1and2Offset} ${Major1and2Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${Skill1and2Offset}" y1="${Skill1and2Height}" x2="${middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                <line x1="${1000-Skill1and2Offset}" y1="${Skill1and2Height}" x2="${1000-middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,lowerSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}

                ${makeSkillCircle(middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(1000-lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}

                ${makeSkillCircle(1000-middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(500,finalTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
                
                
            </svg>
            `
        },
        "Remembrance"(charRef) {
            let makeSkillCircle = customHTML.makeSkillCircle;
            let SkillRadius = 55;
            let MajorRadius = 60;
            let traceRadius = 40;

            // LINE // <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>
            // CURVE // <path d="M${Skill1and2Offset} ${Skill1and2Height} Q 500 700, ${1000-Skill1and2Offset} ${Skill1and2Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
            // SKILL // ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
            // MAJOR // ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}
            // TRACE // ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

            // 1 - basic
            // 2 - skill 
            // 3 - ulty 
            // 4 - talent
            // 5 - technique
            // 6-8 - major traces 
            // 9-18 - minor traces
            // 19 - memo skill
            // 20 - memo talent

            let center = 500;

            let middleRowHeight = 490;
            let middleRowInnerOffset = 120;
            let middleRowOuterOffset = -120;
            let middleRowOuterOffsetLeftTrace = -150;

            let lowerMiddleRowHeight = 730;
            let lowerMiddleRowOffset = 255;

            let bottomSkillHeight = 800;

            let Major3Height = 235;
            let Major3Offset = 235;

            let Major2Height = 1030;

            let traceLeftRowOffset = -85;
            let traceLeftRowHeight1 = 250;
            let traceLeftRowHeight2 = 725;

            let traceBottomRowHeight = 1000;
            let traceBottomRowOffset = 265;

            let upperRow1Height = 25;
            let upperRow1Offset = 135;

            let upperRow2Height = -77;
            let upperRow2Offset = 362;

            let upperRow3Height = -77;
            let upperRow3Offset = 620;

            let memoSkillHeight = 445;
            let memoTalentHeight = 145;

            let src = pathImagePaths["Remembrance"].big
            //<image href="/HonkaiSR/Remembrance.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceRemembrance"/> //purely for overlaying an image

            // Point21
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace" style="transform:translateX(-55px)"/>

                <line x1="${1000-middleRowInnerOffset}" y1="${middleRowHeight}" x2="${1000-middleRowOuterOffset}" y2="${middleRowHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${1000-lowerMiddleRowOffset} ${lowerMiddleRowHeight} Q 850 650, ${1000-middleRowInnerOffset} ${middleRowHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${center} ${bottomSkillHeight} Q 640 800, ${1000-lowerMiddleRowOffset} ${lowerMiddleRowHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${lowerMiddleRowOffset} ${lowerMiddleRowHeight} Q 360 800, ${center} ${bottomSkillHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${lowerMiddleRowOffset} ${lowerMiddleRowHeight} Q 150 650, ${middleRowInnerOffset} ${middleRowHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${middleRowInnerOffset} ${middleRowHeight} Q 125 300, ${Major3Offset} ${Major3Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <line x1="${center}" y1="${bottomSkillHeight}" x2="${center}" y2="${Major2Height}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${middleRowOuterOffsetLeftTrace}" y1="${middleRowHeight}" x2="${middleRowInnerOffset}" y2="${middleRowHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${traceLeftRowOffset} ${traceLeftRowHeight1} Q -225 490, ${traceLeftRowOffset} ${traceLeftRowHeight2}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${1000-traceLeftRowOffset-20} ${traceLeftRowHeight1} Q 1150 490, ${1000-traceLeftRowOffset} ${traceLeftRowHeight2}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${traceBottomRowOffset} ${traceBottomRowHeight} Q 500 1080, ${1000-traceBottomRowOffset} ${traceBottomRowHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <line x1="${Major3Offset}" y1="${Major3Height}" x2="${upperRow1Offset}" y2="${upperRow1Height}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${upperRow1Offset} ${upperRow1Height} Q 342 -127, ${upperRow3Offset} ${upperRow3Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <line x1="${center}" y1="${memoSkillHeight}" x2="${center}" y2="${memoTalentHeight}" stroke="#ffffff" stroke-width="2"/>
                

                ${makeSkillCircle(lowerMiddleRowOffset,lowerMiddleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                ${makeSkillCircle(1000-lowerMiddleRowOffset,lowerMiddleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}
                ${makeSkillCircle(center,bottomSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                
                ${makeSkillCircle(1000-middleRowInnerOffset,middleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(middleRowInnerOffset,middleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}
                
                ${makeSkillCircle(1000-middleRowOuterOffset,middleRowHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(center,Major2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(Major3Offset,Major3Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}
                ${charRef.traces.Point21 ? makeSkillCircle(990-Major3Offset,Major3Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point21.icon}`,21,"major") : ""}

                ${makeSkillCircle(middleRowOuterOffsetLeftTrace,middleRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                
                ${makeSkillCircle(traceLeftRowOffset,traceLeftRowHeight1,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(traceLeftRowOffset,traceLeftRowHeight2,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}

                ${makeSkillCircle(1000-traceLeftRowOffset-20,traceLeftRowHeight1,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}
                ${makeSkillCircle(1000-traceLeftRowOffset,traceLeftRowHeight2,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}

                ${makeSkillCircle(traceBottomRowOffset,traceBottomRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}
                ${makeSkillCircle(1000-traceBottomRowOffset,traceBottomRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                ${makeSkillCircle(upperRow1Offset,upperRow1Height,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}
                ${makeSkillCircle(upperRow2Offset,upperRow2Height,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}
                ${makeSkillCircle(upperRow3Offset,upperRow3Height,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}

                ${makeSkillCircle(center,memoSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point19.icon}`,19,"memoSkill")}
                ${makeSkillCircle(center,memoTalentHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point20.icon}`,20,"memoSkill")}
                
                
            </svg>
            `;
        },
        "Nihility"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 327;
            let Major1and2Offset = 32;

            let SkillRadius = 55;
            let Skill1and2Height = 410;
            let Skill1and2Offset = 237;

            let skillCenterHeight = 390;
            let skillUpperHeight = 175;
            let skillLowerHeight = 635;
            
            let traceRadius = 40;
            let lowerTraceHeight = 825;
            let bottomTraceHeight = 1015;

            let outerTraceOffset = -172;
            let outerTraceHeight = 540;

            let outerMiddleOffset = -0
            let outerMiddleHeight = 740;

            let outerLowerOffset = 172
            let outerLowerHeight = 940;

            let upperMajorHeight = -30;

            let finalTraceHeight = -40;
            let topTraceHeight = 10;
            let topTraceOffset = 210;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Nihility"].big
            //<image href="/HonkaiSR/Hunt.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceNihility"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height+20} Q 500 350, ${1000-Skill1and2Offset} ${Skill1and2Height+20}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${Skill1and2Offset}" y1="${Skill1and2Height}" x2="${Major1and2Offset}" y2="${Major1and2Height}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Skill1and2Offset}" y1="${Skill1and2Height}" x2="${1000-Major1and2Offset}" y2="${Major1and2Height}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${Major1and2Offset}" y1="${Major1and2Height}" x2="${outerTraceOffset}" y2="${outerTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height}" x2="${1000-outerTraceOffset}" y2="${outerTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${outerTraceOffset}" y1="${outerTraceHeight}" x2="${outerLowerOffset}" y2="${outerLowerHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-outerTraceOffset}" y1="${outerTraceHeight}" x2="${1000-outerLowerOffset}" y2="${outerLowerHeight}" stroke="#ffffff" stroke-width="2"/>

                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,skillLowerHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(500,lowerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(outerTraceOffset,outerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(outerMiddleOffset,outerMiddleHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}
                ${makeSkillCircle(outerLowerOffset,outerLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(1000-outerTraceOffset,outerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-outerMiddleOffset,outerMiddleHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}
                ${makeSkillCircle(1000-outerLowerOffset,outerLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}

                ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
            </svg>
            `
        },
        "Harmony"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 590;
            let Major1and2Offset = -42;

            let SkillRadius = 55;
            let Skill1and2Height = 480;
            let Skill1and2Offset = 267;

            let skillCenterHeight = 650;
            let skillUpperHeight = 432;
            let skillLowerOffset = 877;
            
            let traceRadius = 40;
            let bottomTraceHeight = 1050;
            let bottomTraceOffset = 242;
            let bottomTraceHeight2 = 1002;

            let outerTraceOffset = -162;
            let outerTraceHeight = 425;
            let outerTraceUpperOffset = 37;
            let outerTraceUpperHeight = 307;

            let rightTraceLowerHeight = 790;
            let rightTraceLowerOffset = 940;
            let rightTraceUpperHeight = 722;
            let rightTraceUpperOffset = 747;

            let upperMajorHeight = 180;

            let finalTraceHeight = -30;
            let topTraceHeight = 20;
            let topTraceOffset = 225;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Harmony"].big
            //<image href="/HonkaiSR/Harmony.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceHarmony"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${Major1and2Offset} ${Major1and2Height+30} Q 500 260, ${1000-Major1and2Offset} ${Major1and2Height+30}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <line x1="${Major1and2Offset}" y1="${Major1and2Height}" x2="${outerTraceOffset}" y2="${outerTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${outerTraceOffset}" y1="${outerTraceHeight}" x2="${outerTraceUpperOffset}" y2="${outerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height}" x2="${rightTraceLowerOffset}" y2="${rightTraceLowerHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${rightTraceLowerOffset}" y1="${rightTraceLowerHeight}" x2="${rightTraceUpperOffset}" y2="${rightTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>

                <path d="M${bottomTraceOffset} ${bottomTraceHeight2} Q 500 1100, ${1000-bottomTraceOffset} ${bottomTraceHeight2}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,skillLowerOffset,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(outerTraceOffset,outerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(outerTraceUpperOffset,outerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}

                ${makeSkillCircle(bottomTraceOffset,bottomTraceHeight2,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(rightTraceLowerOffset,rightTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(rightTraceUpperOffset,rightTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}

                ${makeSkillCircle(1000-bottomTraceOffset,bottomTraceHeight2,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}
                
                ${makeSkillCircle(500,finalTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
            </svg>
            `
        },
        "Preservation"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 1005;
            let Major1and2Offset = 230;

            let SkillRadius = 55;
            let Skill1and2Height = 570;
            let Skill1and2Offset = 260;

            let skillCenterHeight = 540;
            let skillUpperHeight = 310;
            let lowerSkillHeight = 810;
            
            let traceRadius = 40;
            let bottomTraceHeight = 995
            let middleTraceHeight = 357;
            let middleTraceOffset = 55;

            let lowerTraceLowerHeight = 747;
            let lowerTraceLowerOffset = 5;

            let lowerTraceUpperHeight = 550;
            let lowerTraceUpperOffset = -162;

            let upperMajorHeight = 137;

            let finalTraceHeight = -32;
            let topTraceHeight = 10;
            let topTraceOffset = 212;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Preservation"].big
            //<image href="/HonkaiSR/Preservation.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferencePreservation"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>

                <line x1="${Major1and2Offset}" y1="${Major1and2Height}" x2="${lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height}" x2="${1000-lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height+20} Q 500 500, ${1000-Skill1and2Offset} ${Skill1and2Height+20}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${Major1and2Offset} ${Major1and2Height+20} Q 500 960, ${1000-Major1and2Offset} ${Major1and2Height+20}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${Skill1and2Offset}" y1="${Skill1and2Height}" x2="${middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                <line x1="${1000-Skill1and2Offset}" y1="${Skill1and2Height}" x2="${1000-middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,lowerSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}

                ${makeSkillCircle(middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(1000-lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}

                ${makeSkillCircle(1000-middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(500,finalTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
                
                
            </svg>
            `
        },
        "Destruction"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 830;
            let Major1and2Offset = 205;

            let SkillRadius = 55;
            let Skill1and2Height = 502;
            let Skill1and2Offset = 222;

            let skillCenterHeight = 540;
            let skillUpperHeight = 310;
            let lowerSkillHeight = 800;
            
            let traceRadius = 40;
            let bottomTraceHeight = 1020
            let middleTraceHeight = 310;
            let middleTraceOffset = 7;

            let lowerTraceLowerHeight = 700;
            let lowerTraceLowerOffset = 17;

            let lowerTraceUpperHeight = 540;
            let lowerTraceUpperOffset = -155;

            let upperMajorHeight = 135;

            let finalTraceHeight = -30;
            let topTraceHeight = 12;
            let topTraceOffset = 212;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Destruction"].big
            //<image href="/HonkaiSR/Destruction.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceDestruction"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>

                <line x1="${Major1and2Offset}" y1="${Major1and2Height+20}" x2="${lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height+20}" x2="${1000-lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height} Q 500 600, ${1000-Skill1and2Offset} ${Skill1and2Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${Major1and2Offset} ${Major1and2Height+20} Q 500 740, ${1000-Major1and2Offset} ${Major1and2Height+20}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${lowerTraceUpperOffset}" y1="${lowerTraceUpperHeight}" x2="${middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                <line x1="${1000-lowerTraceUpperOffset}" y1="${lowerTraceUpperHeight}" x2="${1000-middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,lowerSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(500,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}

                ${makeSkillCircle(middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(1000-lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}

                ${makeSkillCircle(1000-middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(500,finalTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
                
                
            </svg>
            `
        },
        "Abundance"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 865;
            let Major1and2Offset = 145;

            let SkillRadius = 55;
            let Skill1and2Height = 502;
            let Skill1and2Offset = 267;

            let skillCenterHeight = 547;
            let skillUpperHeight = 312;
            let lowerSkillHeight = 785;
            
            let traceRadius = 40;
            let bottomTraceHeight = 1007
            let bottomTraceOffset = 370;

            let middleTraceHeight = 342;
            let middleTraceOffset = 80;

            let lowerTraceLowerHeight = 670;
            let lowerTraceLowerOffset = -7;

            let lowerTraceUpperHeight = 510;
            let lowerTraceUpperOffset = -102;

            let upperMajorHeight = -40;

            let finalTraceHeight = -30;
            let topTraceHeight = 22;
            let topTraceOffset = 220;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Abundance"].big
            //<image href="/HonkaiSR/Abundance.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceAbundance"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight-20}" stroke="#ffffff" stroke-width="2"/>

                <line x1="${Major1and2Offset}" y1="${Major1and2Height+20}" x2="${lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>
                <line x1="${1000-Major1and2Offset}" y1="${Major1and2Height+20}" x2="${1000-lowerTraceUpperOffset}" y2="${lowerTraceUpperHeight}" stroke="#ffffff" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height} Q 500 600, ${1000-Skill1and2Offset} ${Skill1and2Height}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${Major1and2Offset} ${Major1and2Height+20} Q 500 690, ${1000-Major1and2Offset} ${Major1and2Height+20}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${lowerTraceUpperOffset}" y1="${lowerTraceUpperHeight}" x2="${middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                <line x1="${1000-lowerTraceUpperOffset}" y1="${lowerTraceUpperHeight}" x2="${1000-middleTraceOffset}" y2="${middleTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,lowerSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                <path d="M${bottomTraceOffset} ${bottomTraceHeight} Q 500 968, ${1000-bottomTraceOffset} ${bottomTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(1000-bottomTraceOffset,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                ${makeSkillCircle(1000-lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(1000-lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}
                ${makeSkillCircle(1000-middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(lowerTraceLowerOffset,lowerTraceLowerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(lowerTraceUpperOffset,lowerTraceUpperHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}
                ${makeSkillCircle(middleTraceOffset,middleTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}
                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}

                ${makeSkillCircle(bottomTraceOffset,bottomTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
            </svg>
            `
        },
        "Erudition"(charRef) {
            let middleRowHeight = 540;
            let MajorRadius = 60;
            let Major1and2Offset = 77;

            let SkillRadius = 55;
            let Skill1and2Offset = 267;

            let skillUpperHeight = 270;
            let skillLowerHeight = 930;
            
            let traceRadius = 40;
            let lowerTraceHeight = 907;
            let bottomTraceHeight = 930;
            let bottomTraceOffset = 270;

            let leftOuterMiddle = -102;
            let leftOuterOffset = -52;
            let leftOuterAboveMiddle = 200;

            let upperMajorHeight = -42;

            let finalTraceHeight = -40;
            let topTraceHeight = 7;
            let topTraceOffset = 210;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Erudition"].big
            //<image href="/HonkaiSR/Erudition.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceErudition"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${finalTraceHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${topTraceOffset} ${topTraceHeight} Q 500 -80, ${1000-topTraceOffset} ${topTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <line x1="${leftOuterMiddle}" y1="${middleRowHeight}" x2="${1000-leftOuterMiddle}" y2="${middleRowHeight}" stroke="#ffffff" stroke-width="2"/>
                <path d="M${bottomTraceOffset} ${lowerTraceHeight} Q 500 970, ${1000-bottomTraceOffset} ${lowerTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>


                ${makeSkillCircle(Skill1and2Offset,middleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                ${makeSkillCircle(1000-Skill1and2Offset,middleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,middleRowHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,skillLowerHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                ${makeSkillCircle(Major1and2Offset,middleRowHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}
                ${makeSkillCircle(1000-Major1and2Offset,middleRowHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(500,upperMajorHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${makeSkillCircle(bottomTraceOffset,lowerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}

                <path d="M${leftOuterOffset} ${middleRowHeight+leftOuterAboveMiddle} Q -150 ${middleRowHeight}, ${leftOuterOffset} ${middleRowHeight-leftOuterAboveMiddle}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${1000-leftOuterOffset} ${middleRowHeight+leftOuterAboveMiddle} Q 1150 ${middleRowHeight}, ${1000-leftOuterOffset} ${middleRowHeight-leftOuterAboveMiddle}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(leftOuterMiddle,middleRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}
                ${makeSkillCircle(leftOuterOffset,middleRowHeight+leftOuterAboveMiddle,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}
                ${makeSkillCircle(leftOuterOffset,middleRowHeight-leftOuterAboveMiddle,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}

                ${makeSkillCircle(1000-leftOuterMiddle,middleRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-leftOuterOffset,middleRowHeight+leftOuterAboveMiddle,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}
                ${makeSkillCircle(1000-leftOuterOffset,middleRowHeight-leftOuterAboveMiddle,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}

                ${makeSkillCircle(topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}
                ${makeSkillCircle(1000-topTraceOffset,topTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}

                ${makeSkillCircle(1000-bottomTraceOffset,lowerTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}
            </svg>
            `
        },
    },
    makeSkillCircle(x,y,r,imgHref,id,type) {
        let fillValue = type === "skill" ? "#1e2137" : "#ffffff";
        let borderColor = type === "skill" ? "#928d85" : "#b2c8ff"
        if (type === "memoSkill") {
            fillValue = "#241b5a";
            borderColor = "#646390"
        }
        let borderWidth = type === "trace" ? 0 : 3;

        return `<g>
            <circle cx="${x}" cy="${y}" r="${r}" fill="${fillValue}" stroke="${borderColor}" stroke-width="${borderWidth}" class=""/>
    
            <clipPath id="circleClip${id}">
                <circle cx="${x}" cy="${y}" r="${r}"/>
            </clipPath>
    
            <image href="${imgHref}" x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" clip-path="url(#circleClip-${id})" class="clickable hoveredTraceIcon" 
            style="${type != "skill" && type != "memoSkill" ? "filter: brightness(0)" : ""}" onclick="userTriggers.updateSelectedTraceDisplay(${id})"/>
        </g>`;
    },
    rowUniqueStatExceptions: {
        "Multiplier": {statName: "Final Multiplier", statUnit: "x"},
    },
    createAlternatingStatRowsFullNames(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation,rollArray) {
        let rowAlternating = 2
        let returnString = "";

        // console.log(displayOrder,statLocation)

        let compositeRollCount = 0;
        let loopCounter = 0;
        for (let entry of displayOrder) {
            const isUnique = customHTML.rowUniqueStatExceptions[entry];

            if (isUnique) {
                returnString += `
                <div class="imageRowStatisticBox${rowAlternating}">
                    <div class="imageRowStatisticNameBox">${isUnique.statName}</div>
                    <div class="imageRowStatisticStatBox">${statLocation[entry]}${isUnique.statUnit}</div>
                </div>`;
                continue;
            }

            let currentKey = basicShorthand.findStatObject(entry);
            const statInternal = greatTableKeys[entry] ?? entry;
            
            let unit = currentKey.sets[entry].unit;
            let isPercent = unit === "%";
            let valuePre = statLocation[entry];
            console.log(valuePre,entry)
            let valueRef = (valuePre * (isPercent ? 100 : 1))?.toFixed(3) || 0;

            // greatTableIndex
            // greatTableKeys
            if (isStatMenuCreation && valuePre === 0) {continue;}
            if (rowAlternating==2) {rowAlternating--;}
            else {rowAlternating++;}

            if (isMainStat) {
                returnString += `
                <div class="imageRowStatisticBoxMain">
                    <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="imageRowStatisticImageMain"/></div>
                    <div class="imageRowStatisticNameBoxMain">${currentKey.sets[entry].display}</div>
                    <div class="imageRowStatisticStatBoxMain">${(+valueRef ?? 0)}${unit}</div>
                </div>
                `
            }
            else {
                let subRolls = substatRef != null;
                let estRolls = subRolls ? rollArray[loopCounter] : 0;

                compositeRollCount += estRolls;
                const potentiallyInvalid = compositeRollCount > 5;
                
                returnString += `
                <div class="imageRowStatisticBox${rowAlternating}">
                    <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                    <div class="imageRowStatisticNameBox">${isStatMenuCreation ? currentKey.sets[entry].specific : currentKey.sets[entry].display}</div>
                    <div class="imageRowStatisticStatBox2">${(+valueRef ?? 0)}${unit}</div>
                    ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}
                </div>
                `;
                loopCounter++;
            }
        }

        return returnString;
    },
    createAlternatingStatRows(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation,rollArray) {
        let rowAlternating = 2
        let returnString = "";

        // console.log(displayOrder,statLocation)

        let compositeRollCount = 0;
        let loopCounter = 0;
        for (let entry of displayOrder) {
            const isUnique = customHTML.rowUniqueStatExceptions[entry];

            // if (isUnique) {
            //     returnString += `
            //     <div class="imageRowStatisticBox${rowAlternating}">
            //         <div class="imageRowStatisticNameBox">${isUnique.statName}</div>
            //         <div class="imageRowStatisticStatBox">${statLocation[entry]}${isUnique.statUnit}</div>
            //     </div>`;
            //     continue;
            // }

            
            let valuePre = statLocation[entry];
            console.log(valuePre)
            let valueRef = typeof valuePre === "string" ? valuePre : (valuePre ?? 0)?.toFixed(3) || 0;

            // greatTableIndex
            // greatTableKeys
            // if (isStatMenuCreation && valuePre === 0) {continue;}
            if (rowAlternating==2) {rowAlternating--;}
            else {rowAlternating++;}
            
            returnString += `
            <div class="imageRowStatisticBox${rowAlternating}">
                <div class="imageRowStatisticNameBox">${entry}</div>
                <div class="imageRowStatisticStatBox">${(typeof valuePre === "string" ? valueRef : +valueRef ?? 0)}</div>
            </div>
            `;
            loopCounter++;
        }

        return returnString;
    },
}

let globalIsLightcone = false;
let globalIsRelic = false;
let globalIsNoImage = false;

const megaParsingFuckery = {
    pageLoad(loadFile) {
        const bodyBox = readSelection("eventBodyMainBox");
        const isLightcone = compositeAbilityObject.isLightcone;
        const isRelic = compositeAbilityObject.isRelic;

        globalIsLightcone = isLightcone;
        globalIsRelic = isRelic;

        loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];
        let configAbility = compositeAbilityObject.abilityObject[loadFile];

        if (!configAbility) {
            loadFile = loadFile.replace(compositeAbilityObject.trimCharacterName,compositeAbilityObject.trimSummonName);
            // console.log(loadFile)
            configAbility = compositeAbilityObject.abilityObject[loadFile];
            // compositeAbilityObject.trimSummonName

        }

        let initialCounter = 1;
        let eventBodyString = megaParsingFuckery.fillEventBodyBox(configAbility.parse,initialCounter);
        let eventBodyStringOnAdd = megaParsingFuckery.fillEventBodyBox(configAbility.whenAdded,initialCounter);
        let eventBodyStringOnAbort = megaParsingFuckery.fillEventBodyBox(configAbility.onAbort,initialCounter);
        let eventBodyStringFunctions = megaParsingFuckery.fillEventBodyBox(configAbility.functions,initialCounter);
        

        let referenceBodyString = configAbility.references.length ? megaParsingFuckery.fillEventBodyBox(configAbility.references,initialCounter) : null;
        currentCharFilePrefix = compositeAbilityObject.trimCharacterName;

        

        let referenceGlobalString = configAbility.referencesGlobal?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobal,initialCounter) : null;
        let referenceGlobalFunctionString = configAbility.referencesGlobalFunctions?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobalFunctions,initialCounter) : null;
        
        

        // "fileName": "Saber_Skill02",
        // "abilityType": "Skill",
        // "energy": 30,
        // "toughnessList": [
        //     20,
        //     0,
        //     10
        // ],
        // parse: []
        // references: []
        // desc: currentLCEntry.desc,
        // params: currentLCEntry.params,
        const isGlobalNoImage = compositeAbilityObject.fullCharacterName.toLowerCase().includes("global")
        || compositeAbilityObject.fullCharacterName.toLowerCase().includes("enemyabilities");

        globalIsNoImage = isGlobalNoImage;

        // console.log(compositeAbilityObject.fullCharacterName,characterRef.preview)
        const characterRef = characters[compositeAbilityObject.fullCharacterName];
        const lightconeRef = lightcones[compositeAbilityObject.fullCharacterName];
        const relicSetRef = relicSets[compositeAbilityObject.fullCharacterName];
        // console.log(compositeAbilityObject.fullCharacterName,characterRef,characters)

        const startingKeys = [
            // {leftHand: "File", keyValue: "fileName"},
            {leftHand: "Ability", keyValue: "abilityType"},
            {leftHand: "Skill Trigger", keyValue: "skillTrigger"},
            {leftHand: "Energy", keyValue: "energy"},
            
            
            // {leftHand: "Toughness", keyValue: "toughnessList"},
        ];

        if (!isGlobalNoImage) {
            // console.log(readSelection("libraryCharacterHeaderPreview"))
            readSelection("libraryCharacterHeaderPreview").src = `/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}`;
        }


        // ${!isGlobalNoImage ? `<div class="customMenuResultRowIcon">
        //     <img src="/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}" class="${isRelic ? "eventCharacterFileIconRelic" : "eventCharacterFileIcon"}" style="border: 2px solid #d2ae73;">
        // </div>` : ""}
        let startingString = `
            
            
            <div class="eventCharacterFileInfoBox">

            <div class="abilitySelectorFloaterBox">
                <div class="abilitySelectorFloaterBoxName">Ability Selection</div>
                <select class="selectorWidthRestriction" id="fileSelectionSelector" onchange="megaParsingFuckery.renewFileSelected()">
            </div>
            `;
            

        let optionsString = "";

        for (let fileEntry of compositeAbilityObject.abilityList) {
            optionsString += `<option value="${fileEntry}" ${fileEntry === loadFile ? "selected" : ""}>${fileEntry}</option>`
        }
        optionsString += "</select></div>"
        startingString += optionsString;



        let rowAlternating = 1;
        startingString += `<div class="${globalIsLightcone || globalIsRelic ? "energyAndToughnessRowHolderItems" : "energyAndToughnessRowHolder"}">`;
        if (!isLightcone) {


            const propertyDisplayTemplates = {
                energy(keyValue,configAbility) {
                    return `<div class="imageRowStatisticBoxWithIcon">
                        <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
                        <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
                    </div>`;
                },
                skillTrigger(keyValue,configAbility) {
                    return `<div class="imageRowStatisticBoxWithIcon">
                        <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}${configAbility.abilityType ? `[${configAbility.abilityType}]` : ""}</div>
                    </div>`;
                },
                // abilityType(keyValue) {
                //     return `<div class="imageRowStatisticBoxWithIcon">
                //         <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
                //     </div>`;
                // },
            }
            
            for (let entry of startingKeys) {
                if (configAbility[entry.keyValue] == null) {

                    // loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];

                    for (let findAbilityEntry of compositeAbilityObject.abilityList) {
                        const testCurrentEntry = compositeAbilityObject.abilityObject[findAbilityEntry];
                        if (!testCurrentEntry.childAbilityList) {continue;}

                        const newSet = new Set(testCurrentEntry.childAbilityList)
                        if (newSet.has(loadFile)) {
                            configAbility["energy"] = testCurrentEntry["energy"];
                            configAbility["abilityType"] = testCurrentEntry["abilityType"];
                            configAbility["skillTrigger"] = testCurrentEntry["skillTrigger"];
                            configAbility.toughnessList = testCurrentEntry.toughnessList;
                            break;
                        }
                    }

                    // childAbilityList


                    continue;
                }
                if (entry.keyValue === "abilityType") {continue;}
                // startingString += `<div class="">${configAbility[entry]}</div>`;

                // <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                // ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}


                if (propertyDisplayTemplates[entry.keyValue]) {startingString += propertyDisplayTemplates[entry.keyValue](configAbility[entry.keyValue],configAbility);}
                else {
                    startingString +=  `<div class="imageRowStatisticBox${(globalIsLightcone || globalIsRelic) ? rowAlternating : 0}DETAILS">
                        <div class="imageRowStatisticNameBoxDETAILS">${entry.leftHand}</div>
                        <div class="imageRowStatisticStatBoxDETAILS">${configAbility[entry.keyValue]}</div>
                    </div>`;
                }

                if (rowAlternating === 2) {rowAlternating = 1;}
                else {rowAlternating++;}
            }
        }


        let toughnessRowString = "";
        if (configAbility.toughnessList) {
            const toughnessIndexConversion = {
                0: "ST",
                1: "AOE",
                2: "Blast"
            }

            const check1 = configAbility.toughnessList[0] != 0;
            const check2 = configAbility.toughnessList[1] != 0;
            const check3 = configAbility.toughnessList[2] != 0;
            const hasActualValues = check1 || check2 || check3;

            

            if (hasActualValues) {
                toughnessRowString += `<img src="/HonkaiSR/icon/property/IconBreakUp.png" class="characterDisplayLogStatIconCenter"></img>`;

                for (let i=0;i<3;i++) {
                    if (configAbility.toughnessList[i] === 0) {continue;}
                    toughnessRowString += `<div class="toughnessTableRowItemBox">
                        <div class="toughnessTableRowItemHeader">${toughnessIndexConversion[i]}</div>
                        <div class="toughnessTableRowItemValue">${+(configAbility.toughnessList[i]).toFixed(5)}</div>
                    </div>`;
                }
            }
        }

        // <div class="toughnessTableRowHeader">Toughness</div>
        let toughnessString = !isLightcone && toughnessRowString != "" ? `<div class="toughnessTableRowBox">
            

            <div class="toughnessTableRowTableRow">
                ${toughnessRowString}
            </div>
        
        </div>` : "";

        let statRowString1 = "";
        let statRowString2 = "";

        let lightconeStatRow = "";

        console.log(compositeAbilityObject.fixedStats)
        if (isRelic) {
            if (compositeAbilityObject.fixedStats[2]) {
                const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[2]);
                statRowString1 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[2]);
            }
            if (compositeAbilityObject.fixedStats[4]) {
                const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[4]);
                statRowString2 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[4]);
            }
        }
        if (isLightcone && !isRelic && compositeAbilityObject.fixedStats && compositeAbilityObject.fixedStats[currentLCSuperimposition]) {
            const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[currentLCSuperimposition]);
            lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[currentLCSuperimposition]);
        }

        

        if (isLightcone) {
            toughnessString += `
            ${!isRelic ? `<div class="customMenuSearchNote" id="customMenuSearchNote">Changing superimposition won't change the events, only the description</div>
            <div class="superimpositionHolderbox">
                <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="megaParsingFuckery.updateSuperimposition(1)" style="${currentLCSuperimposition === 1 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">1</div>
                <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="megaParsingFuckery.updateSuperimposition(2)" style="${currentLCSuperimposition === 2 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">2</div>
                <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="megaParsingFuckery.updateSuperimposition(3)" style="${currentLCSuperimposition === 3 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">3</div>
                <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="megaParsingFuckery.updateSuperimposition(4)" style="${currentLCSuperimposition === 4 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">4</div>
                <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="megaParsingFuckery.updateSuperimposition(5)" style="${currentLCSuperimposition === 5 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">5</div>
            </div>` : ""}
            
            
            
            ${lightconeStatRow ? `<div class="characterDisplayPathAndNameBox">
                <div class="characterDisplayPathNameBox">Lightcone Menu Bonuses:</div>
            </div>` + lightconeStatRow : ""}
            ${isRelic ? `
                ${statRowString1 ? `<div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathNameBox">2-Piece Menu Bonuses:</div>
                </div>` + statRowString1 : ""}
                

                ${statRowString2 ? `<div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathNameBox">4-Piece Menu Bonuses:</div>
                </div>` + statRowString2 : ""}

                
                <div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">2pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[0],relicSetRef.desc[0])}</div>
                ${relicSetRef.params[1] != undefined && relicSetRef.desc[1] != undefined ? `<div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">4pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[1],relicSetRef.desc[1])}</div>` : ""}
                ` 
                : `<div class="rightDescriptionBox" id="lightconeSkillDescription">${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}</div>`}
            `
        }
        startingString += toughnessString + ``;
        startingString += `</div>`



        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </summary>

        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // </details>


        //TODO: add back in later
        // ${startingString}

        readSelection("eventReaderControlsBox").innerHTML = startingString;

        const mainAbilityString = `
        <div class="eventBodyScrollerMain">
            <details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ABILITY LOG</div>
                </summary>
                ${eventBodyString}
            </details>
            ${eventBodyStringOnAdd ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ADDED LOG</div>
                </summary>
                ${eventBodyStringOnAdd}
            </details>` : ""}
            ${eventBodyStringOnAbort ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ON ABILITY ABORT</div>
                </summary>
                ${eventBodyStringOnAbort}
            </details>` : ""}

            
            ${referenceBodyString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">MODIFIER LOG</div>
                </summary>
                ${referenceBodyString}
            </details>` : ""}
            ${eventBodyStringFunctions ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ABILITY FUNCTIONS</div>
                </summary>
                ${eventBodyStringFunctions}
            </details>` : ""}
            ${referenceGlobalString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">GLOBAL MODIFERS</div>
                </summary>
                ${referenceGlobalString}
            </details>` : ""}
            ${referenceGlobalFunctionString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">GLOBAL FUNCTIONS</div>
                </summary>
                ${referenceGlobalFunctionString}
            </details>` : ""}
        </div>
        `;

        

        bodyBox.innerHTML = mainAbilityString;

        // if (isLightcone) {readSelection("lightconeSkillDescription").innerHTML = pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition],lightconeRef.desc);}
    },
    ...megaParsingFuckeryPain
}

megaParsingFuckery.pageLoad();







userTriggers.updateCharacterUI();
customHTML.establishZoomableTraces();
customHTML.establishMobileSideScrollerMenu();
userTriggers.updateMainMenuDisplayed(1);

if (location.hash) {
    const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    // const elemIDAfter = location.hash.slice(1);

    // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    if (elemIDAfter) {readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});};
}





