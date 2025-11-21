const customHTML = {
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
    createAlternatingStatRows(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation) {
        let rowAlternating = 2
        let returnString = "";

        // console.log(displayOrder,statLocation)
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
                let estRolls = subRolls ? basicShorthand.estimateSubRolls(substatRef[statInternal],valuePre) : 0;
                returnString += `
                <div class="imageRowStatisticBox${rowAlternating}">
                    <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                    <div class="imageRowStatisticNameBox">${isStatMenuCreation ? currentKey.sets[entry].specific : currentKey.sets[entry].display}</div>
                    <div class="imageRowStatisticStatBox">${(+valueRef ?? 0)}${unit}</div>
                    ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}
                </div>
                `
            }
        }

        return returnString;
    },
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
    megaRotationFuckery(characterName) {
        // const conditionsRef = defaultConditions[characterName];
        let conditionsRef = null;
        const warningRef = conditionsCharacterDisplayWarning[characterName];

        // console.log(characterName)

        const characterObject = globalRecords.character;
        for (let charSlot in characterObject) {
            const currentCharObject = characterObject[charSlot];

            if (currentCharObject.name === characterName) {
                //I initially structured conditions to be stored in the default conditions object, but decided against it
                //bc later if people want to "revert" to default conditions, it wouldn't let them do it since they'd already modified the default storage area
                //so while it's jank to do it this way now, we reference the character object(and in turn, user imports) to assign and modify conditions
                //this way later we can add a button that will let people restore to defaults
                conditionsRef = currentCharObject.conditions;
                break;
            }
        }


        const mainBox = readSelection("mainConditionsBoxHolderOverview");
        const missingBox = readSelection("mainConditionsBoxHolderOverviewMissingWarning");

        if (!conditionsRef) {
            mainBox.style.display = "none";
            missingBox.style.display = "block";
        }
        else {
            mainBox.style.display = "flex";
            missingBox.style.display = "none";


            const ultyCheck = conditionsRef ? conditionsRef.Ultimate ??= {type: "AND",array: []} : null;
            let indexCounter = -1;
            let layerCount = 0;

            const ultimateRotations = readSelection("rotationsConditionsBodyBoxUltimate");
            const skillRotations = readSelection("rotationsConditionsBodyBoxSkill");
            ultimateRotations.innerHTML = "";
            skillRotations.innerHTML = "";

            readSelection("rotationsConditionsWarningBoxUltimate").innerHTML = warningRef ? warningRef.Ultimate : "";
            readSelection("rotationsConditionsWarningBoxSkill").innerHTML = warningRef ? warningRef.Skill : "";

            const permaConditionsBoxUlt = readSelection("rotationsConditionsBoxUltimatePerma");
            permaConditionsBoxUlt.innerHTML = "";

            const permaConditionsBoxSkill = readSelection("rotationsConditionsBoxSkillPerma");
            permaConditionsBoxSkill.innerHTML = "";

            const arrayToPass = [];
            if (ultyCheck) {
                ultimateRotations.innerHTML = rotationsUISuffering.displayLoop(characterName,ultyCheck,indexCounter,layerCount,arrayToPass,"Ultimate");

                
                if (warningRef?.UltimatePermaConditions.length) {
                    let addedString = ""
                    addedString = `<details class="rotationsPermaConditionsExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (${warningRef.UltimatePermaConditions.length})</summary>`;
        
                    for (let conditionText of warningRef.UltimatePermaConditions) {
                        addedString += `<div class="actionDetailBody">- ${conditionText}</div>`
                    }      
                    
                    permaConditionsBoxUlt.innerHTML = addedString + `</details>`
                }
                else {permaConditionsBoxUlt.innerHTML = "";}
            }


            // "Saber": {
            //     hasEnhancedState: true,
            //     "Skill": "Skill conditions are ignored when Basic ATK is enhanced.",
            //     "Ultimate": "",

            //     "SkillPermaConditions": [],
            //     "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]

            // }

            const skillCheck = conditionsRef ? conditionsRef.Skill ??= {type: "AND",array: []} : null;
            let indexCounterSkill = -1;
            let layerCountSkill = 0;

            const arrayToPassSkill = [];
            if (skillCheck) {
                skillRotations.innerHTML = rotationsUISuffering.displayLoop(characterName,skillCheck,indexCounterSkill,layerCountSkill,arrayToPassSkill,"Skill");

                // rotationsConditionsWarningBoxSkill

                
                if (warningRef?.SkillPermaConditions.length) {
                    

                    let addedString = ""
                    addedString = `<details class="rotationsPermaConditionsExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (${warningRef.SkillPermaConditions.length})</summary>`;
        
                    for (let conditionText of warningRef.SkillPermaConditions) {
                        addedString += `<div class="actionDetailBody">- ${conditionText}</div>`
                    }      
                    
                    permaConditionsBoxSkill.innerHTML = addedString + `</details>`
                }
                else {permaConditionsBoxSkill.innerHTML = "";}
            }
        }

        // const conditionsCharacterDisplayWarning = {
        //     "Saber": {
        //         hasEnhancedState: true,
        //         "Skill": "Skill is automatically locked out when the Basic ATK is enhanced, any conditions specified when enhanced will be ignored.4",
        //         "Ultimate": ""
        //     }
        // }

        // {
        //     type: "AND",
        //     array: [
        //         {type: "Turn", target: "Self", phase: "Any Part", state: true},
        //     ]
        // }
        
    },
    populateGear(elemID,collection,isStatName) {
        const select = readSelection(elemID);
        // if (collection != traits) {


        // nameAdjustment = propertyImagePaths[mappedFamilies[filterName]].sets[filterName].specific;

        const mappedFamilies = basicShorthand.mappedFamilies;

        // greatTableIndex
        // greatTableKeys

        for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
                const option = document.createElement("option");
                let finalText = gear;

                if (isStatName) {
                    const statIndex = greatTableIndex[gear];
                    finalText = propertyImagePaths[mappedFamilies[statIndex]].sets[statIndex].specific;
                }

                option.text = finalText;
                select.appendChild(option);
            }
        }
        // }
        // else {
        //   for (const gear in collection) {
        //     if (collection.hasOwnProperty(gear)) {
        //       let matchFound = false;
        //       for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        //         if (gear === globalRecords.greatTraitRecords[i-1].name && gear && `trait${i}` != elemID) {
        //           matchFound = true;
        //           break;
        //         }
        //       }
        //       if (matchFound===false) {
        //         const option = document.createElement("option");
        //         option.text = gear;
        //         select.appendChild(option);
        //       }
        //     }
        //   }
        // }
    },
    populateFilters(filterBox,filterTable) {
        let pathHTML = readSelection(filterBox);
        let table = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
        let filterHTML = customHTML.displayFilterHTML;
        table.sort();
        pathHTML.innerHTML = "";
        for (let filterName in table) {
            pathHTML.innerHTML += filterHTML(table[filterName],filterBox,filterTable);
        }
    },
    addFilter(filterID,filterBox,filterTable,compareTable) {//limit
        let filterName = readSelection(filterID);
        let table = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
        //If we are submitting more than the allowed locks, don't do anything, don't add, etc
        // if (table.length>=limit) {filterName.value = "";return;}
        const isStat = filterTable.toLowerCase().includes("stat");

        // console.log(isStat ? basicShorthand.reverseKeyMappings[filterName.value] : filterName.value,filterName.value,basicShorthand.reverseKeyMappings);
        // customHTML.addFilter(`mainstatBodyLocksInput`,`mainstatBodyLocksContainer`,`mainstatBodyLocks`,relics.Body.mainAffix)

        const oldValue = filterName.value;
        console.log(greatTableKeys[basicShorthand.reverseKeyMappings[oldValue]])

        // if ((!compareTable[isStat ? basicShorthand.reverseKeyMappings[oldValue] : oldValue] && oldValue && oldValue != "--")) {filterName.value = "";return;}
        if ((!compareTable[isStat ? greatTableKeys?.[basicShorthand.reverseKeyMappings[oldValue]] : oldValue] && oldValue && oldValue != "--")) {filterName.value = "";return;}
        
        let found = false;
        for (let entry in table) {
            if (table[entry]===oldValue) {found=true;break;}
        }
        if (oldValue === "--") {filterName.value = "";}//if the user WANTS an empty filter
        
        if (!found) {table.push(
            isStat ? greatTableKeys[basicShorthand.reverseKeyMappings[filterName.value]] : filterName.value
        )}
        filterName.value = "";
        customHTML.populateFilters(filterBox,filterTable);
        // filters.updateLockedBreakdownOptions();
    },
    updateOcclusion(filterTable,toggleID) {
        let isChecked = readSelection(toggleID).checked;
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable] = isChecked;
    },
    updateOcclusionDisplay(filterTable,toggleID) {
        readSelection(toggleID).checked = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
    },
    deleteFilter(filterName,filterBox,filterTable,filterIndex) {
        filterName = decodeURIComponent(filterName);
        // console.log(filterName)
        let index = 0;
        let table = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
        for (let entry in table) {
            if (table[entry] === filterName) {
                globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable].splice(index,1);
                break;
            }
            index += 1;
        }
        customHTML.populateFilters(filterBox,filterTable);
        // customHTML.updateLockedBreakdownOptions();
    },
    displayFilterHTML(filterName,filterBox,filterTable) {
        //Stop any ' or " from messing everything up, like Brewmaster's Cork
        const encodedFilterName = encodeURIComponent(filterName).replace(/'/g, "\\'");
        let useImage = false;
        let imagePath = null;
        let nameAdjustment = filterName;

        // relicSets
        const relicCheck = filterTable.toLowerCase().includes("armor") || filterTable.toLowerCase().includes("planar");
        if (relicCheck) {
            useImage = true;
            imagePath = "/HonkaiSR/" + relicSets[nameAdjustment].icon;
        }
        // armorSetLocks2pc
        //planarSetLocks

        const lcCheck = filterTable.toLowerCase().includes("lightcone");
        if (lcCheck) {
            useImage = true;
            imagePath = "/HonkaiSR/" + lightcones[nameAdjustment].icon;
        }

        const statCheck = filterTable.toLowerCase().includes("stat");
        if (statCheck) {
            useImage = true;
            const mappedFamilies = basicShorthand.mappedFamilies;
            // console.log(greatTableIndex[filterName],mappedFamilies[greatTableIndex[filterName]])
            const convertedIndex = greatTableIndex[filterName];
            nameAdjustment = propertyImagePaths[mappedFamilies[convertedIndex]].sets[convertedIndex].specific;
            imagePath = propertyImagePaths[mappedFamilies[convertedIndex]].icon;
        }

        return  `<div class="filtersTagsRowContainer">
                    ${useImage ? `<img src="${imagePath}" class="queryFiltersFilterRowIcon"/>` : ""}
                    <div class="filtersTagName">${nameAdjustment}</div>
                    <input type="button" class="filtersTagDelete clickable" onclick="customHTML.deleteFilter('${encodedFilterName}','${filterBox}','${filterTable}')" value="X">
                </div>`;
    },
    clearTagsFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        customHTML.populateFilters(`tagsBox`,`tagFilters`,0);//can't remember what the 0 was for, but I obv used it on the remnant 2 optimizer, so I'll leave it there for NOW
    },
    clearOcclusionsFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];
        const updateFilter = customHTML.populateFilters;
        const filterSet = [
            {tableName: "lightconeOcclusions",tableElem: "lightconeOcclusionsContainer"},
            {tableName: "armorSetOcclusions",tableElem: "armorSetOcclusionsContainer"},
            {tableName: "planarSetOcclusions",tableElem: "planarSetOcclusionsContainer"},
            {tableName: "mainstatBodyOcclusions",tableElem: "mainstatBodyOcclusionsContainer"},
            {tableName: "mainstatFeetOcclusions",tableElem: "mainstatFeetOcclusionsContainer"},
            {tableName: "mainstatOrbOcclusions",tableElem: "mainstatOrbOcclusionsContainer"},
            {tableName: "mainstatRopeOcclusions",tableElem: "mainstatRopeOcclusionsContainer"},
            {tableName: "substatOcclusions",tableElem: "substatOcclusionsContainer"},
        ]

        for (let filterName of filterSet) {
            charRef[filterName.tableName] = []
            customHTML.populateFilters(filterName.tableElem,filterName.tableName,0);
        }
    },
    clearLocksFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];

        const filterSet = [
            {tableName: "lightconeLocks",tableElem: "lightconeLocksContainer"},
            {tableName: "armorSetLocks2pc",tableElem: "armorSetLocks2pcContainer"},
            {tableName: "armorSetLocks4pc",tableElem: "armorSetLocks4pcContainer"},
            {tableName: "planarSetLocks",tableElem: "planarSetLocksContainer"},
            {tableName: "mainstatBodyLocks",tableElem: "mainstatBodyLocksContainer"},
            {tableName: "mainstatFeetLocks",tableElem: "mainstatFeetLocksContainer"},
            {tableName: "mainstatOrbLocks",tableElem: "mainstatOrbLocksContainer"},
            {tableName: "mainstatRopeLocks",tableElem: "mainstatRopeLocksContainer"},
        ]

        const updateFilter = customHTML.populateFilters;
        for (let filterName of filterSet) {
            charRef[filterName.tableName] = []
            customHTML.populateFilters(filterName.tableElem,filterName.tableName,0);
        }
    },
    updateSelectedFilterDisplay(elemID) {
        const elementsToHide = [
            "statsFiltersHolder","occlusionsFiltersHolder","locksFiltersHolder","searchSettingsHolder","exportSettingsHolder",//"traitsSettingsHolder","prismSettingsHolder"
        ]
        for (let element of elementsToHide) {
            if (element != "exportSettingsHolder") {
                readSelection(element).style.display = "none";
            }
            readSelection(`${element}Button`).style.color = "white";
            readSelection(`${element}Button`).style.opacity = 0.5;
            readSelection(`${element}Button`).style.backgroundColor = "transparent";
        }
        if (elemID === "exportSettingsHolder") {return;}//the filters export menu has its own popup, it doesn't ever need to be highlighted

        readSelection(elemID).style.display = "flex";   //statsFiltersHolderButton
        readSelection(`${elemID}Button`).style.color = "rgb(255, 219, 145)"; //statsFiltersHolderButton
        readSelection(`${elemID}Button`).style.opacity = 1;
        readSelection(`${elemID}Button`).style.backgroundColor = "#ffffff2f";
        // readSelection(elemID).style.color = "rgb(255, 219, 145);"

        // style="color: rgb(255, 219, 145); opacity: 1; background-color: rgba(255, 255, 255, 0.1);"
    },

    queryResultsStandardRow(charSlot,charSPD,charSubs,charMaslow) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        return `<div class="queryResultsQuarterBox">
            <div class="queryResultsQuarterCharacterImageBox">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImage"/>
                
                <div class="queryResultsQuarterCharacterImageRelicsBox">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultRowRelicsIconHALVESLEFTLightcone"/>
                    <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultRowRelicsIconHALVESRIGHT"/>
                </div>
                <div class="queryResultsQuarterBoxMainstats">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultRowRelicsIconMainstatEnd"/>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow1]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow2]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow3]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow4]}</div>
                </div>
            </div>
        </div>`;
    },
    queryResultEquivalentRow(charSlot,charSPD,charSubs,charMaslow,uniqueRowHeaderSubs) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        const [headerCheck1,headerCheck2,headerCheck3,headerCheck4] = uniqueRowHeaderSubs;
        // const [char1Sub1,char1Sub2,char1Sub3,char1Sub4] = charSubs;

        // const char1Sub1,
        // const char1Sub2,
        // const char1Sub3,
        // const char1Sub4

        const sub1Value = charSubs[charMaslow1];
        const sub2Value = charSubs[charMaslow2];
        const sub3Value = charSubs[charMaslow3];
        const sub4Value = charSubs[charMaslow4];

        return `<div class="queryResultsQuarterBoxEquivalent">
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub1Value != headerCheck1 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub1Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub2Value != headerCheck2 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub2Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub3Value != headerCheck3 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub3Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    <div class="${sub4Value != headerCheck4 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub4Value}</div>
                </div>
            </div>
        </div>`;

        // <div class="queryResultsQuarterBoxEquivalent">
        //     <div class="queryResultsQuarterCharacterImageBoxEquivalent">
        //         <img src="/HonkaiSR/${characters[char1Name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
        //         <div class="queryResultsQuarterBoxMainstatsEquivalent">
        //             <img src="/HonkaiSR/${relicSets[char1.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="/HonkaiSR/${relicSets[char1["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="/HonkaiSR/${relicSets[char1["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
        //         </div>
        //         <div class="queryResultsCharSPDValue">
        //             <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
        //             ${Math.floor(char1SPD)}
        //         </div>
        //     </div>
        //     <div class="queryResultsQuarterCharacterImageBoxEquivalent">
        //         <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub1 != uniqueRowHeaderSubs.char1[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub1}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub2 != uniqueRowHeaderSubs.char1[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub2}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub3 != uniqueRowHeaderSubs.char1[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub3}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
        //             <div class="${char1Sub4 != uniqueRowHeaderSubs.char1[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub4}</div>
        //         </div>
        //     </div>
        // </div>
    },
    queryResultsBestRow(charSlot,charSPD,charSubs,charMaslow) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        
        return `<div class="queryResultsBestBox">
            <div class="queryResultsQuarterCharacterImageBox">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImageBest"/>
                <div class="queryResultsCharacterImageItemsBox">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultRowLightconeIcon"/>
                    <div class="queryResultsQuarterCharacterImageRelicsBox">
                        <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                        <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                        <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultRowRelicsIconHALVESRIGHT"/>
                    </div>
                    <div class="queryResultsQuarterBoxMainstats">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultRowRelicsIconMainstatEnd"/>
                    </div>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>

            <div class="queryResultsQuarterCharacterImageBoxEquivalentBest">
                <div class="queryResultsBestSubstatVerticalRow">
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow1]}</div>
                    </div>
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow2]}</div>
                    </div>
                </div>
                <div class="queryResultsBestSubstatVerticalRow">
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow3]}</div>
                    </div>
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow4]}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

const conditionListArray = [
    "AND",
    "OR",
    "COMPARE",
    "Turn",
    "Next Turn Is:",
    "Buff",
    "Character: State",
    "Sustain Checks",
    // "Value",
    // "SP",


    "Delete",
    // "AND",
    // "AND",
];
const conditionListValueArray = [
    "MATH",
    "User Value: Number",
    "User Value: Boolean",
    "Stat",
    "Character: Value",
    "Character: Special Value",
    "Team: Value",
]
const conditionListCharacterValueArray = [
    "currentEnergy",
    "maxEnergy",

    "specialEnergyCurrent",
    "specialEnergyMax",

    "currentHP",
    "maxHP",

    "shieldValueCurrent",
    "shieldValueMax",

    "debuffCounter",
    "shieldCounter",

    "activeSummons",
    "activeMemosprites",

    "AV",
    "AVBase",
    // "actionCounter"
]
const conditionListTeamValueArray = [
    "Skill Points: Current",
    "Skill Points: Max",
]
const conditionListSustainValueArray = [
    "Any Ally: Has no Shield",
    "Any Ally: HP < 100%",
    "Any Ally: HP <= 75%",
    "Any Ally: HP <= 50%",
    "Any Ally: HP <= 25%",

]
const conditionListCharacterStateArray = [
    "ultyQueued",
]
const conditionListChars = [
    "Self",
    "char1",
    "char2",
    "char3",
    "char4",
];
const conditionListCharsType = [
    "Character",
    "Memosprite",
    "Summon",
]
const conditionListCharsTypeBuffTarget = [
    "Character",
    "Memosprite",
    // "Summon",
]
const conditionListTurnPhase = [
    "Pre-Action",
    "Post-Action",
    "Any Part"
]
const conditionListBoolean = [
    "true",
    "false"
]

const conditionComparatorList = [
    ">",
    ">=",
    "=",
    "<=",
    "<"
]
const conditionMathList = [
    "+",
    "-",
    "*",
    "/",
    // "^"
]

const conditionComparatorCharValueConversions = {
    "currentEnergy": "Energy: Current",
    "maxEnergy": "Energy: Max",

    "currentHP": "HP: Current",
    "maxHP": "HP: Max",

    "specialEnergyCurrent": "Special Energy: Current",
    "specialEnergyMax": "Special Energy: Max",


    "shieldValueCurrent": "Shield Value: Current",
    "shieldValueMax": "Shield Value: Max",

    "debuffCounter": "Debuffs Counter",
    "shieldCounter": "Shields Counter",

    "activeSummons": "Active Summons",
    "activeMemosprites": "Active Memosprites",

    "AV": "Remaining AV to Turn",
    "AVBase": "Base AV/Turn",
}

let conditionCharacterStatList = Object.keys(greatTableKnowerOfAll);

for (let i=conditionCharacterStatList.length-1;i>=0;i--) {
    const currentValue = conditionCharacterStatList[i];

    if (!currentValue) {
        conditionCharacterStatList.splice(i,1);
        continue;
    }//we don't care about the blank entry we have on great table but we still need the blank entry itself there for index position used everywhere else

    const convertedIndex = greatTableIndex[currentValue];

    const group = basicShorthand.findStatObject(convertedIndex);
    const set = group.sets[convertedIndex];
    const detailedName = set.specific;

    conditionCharacterStatList[i] = detailedName;
}




const rotationsUISuffering = {
    getConditionList(selected,conditionArray) {
        let returnString = "";

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        for (let condition of conditionArray) {
            returnString += `<option value="${condition}" ${condition === selected ? "selected" : ""}>${condition}</option>`
        }
        return returnString;
    },
    getConditionListStats(selected,conditionArray) {
        // console.log(selected,conditionArray)

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        let returnString = "";
        for (let condition of conditionArray) {
            // const displayValue = basicShorthand.indexToSpecific[greatTableIndex[condition]];
            // basicShorthand.reverseKeyMappings        //specific to index value  greatTableKeys
            // const currentStatIndex = 
            const statIndex = basicShorthand.reverseKeyMappings[condition];
            const internalValue = greatTableKeys[statIndex];

            // if (internalValue === selected) {
            //     console.log(selected,internalValue,condition)
            // }

            returnString += `<option value="${internalValue}" ${internalValue === selected ? "selected" : ""}>${condition}</option>`;
        }
        return returnString;
    },
    getConditionListCharValues(selected,conditionArray) {
        // console.log(selected,conditionArray)

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        let returnString = "";
        for (let condition of Object.keys(conditionArray)) {
            const convertedName = conditionComparatorCharValueConversions[condition]

            returnString += `<option value="${condition}" ${condition === selected ? "selected" : ""}>${convertedName}</option>`;
        }
        return returnString;
    },
    getConditionListCharStates(selected,conditionArray,charName,targetSlot,onlyReturnFirstValid) {
        // console.log(charName)
        // Self
        let targetName = "";
        if (targetSlot === "Self") {targetName = charName;}
        else {
            const charObject = globalRecords.character;
            targetName = charObject[targetSlot].name;
        }
        const currentRef = customDisplayValuesLog[targetName];

        // "Saber": [
        //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
        //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
        //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
        // ], 


        let returnString = "";
        for (let condition of currentRef) {
            if (!condition.isCharacterState) {continue;}
            if (onlyReturnFirstValid) {return condition.refName;}//used to extract the first valid character state if one exists
            returnString += `<option value="${condition.refName}" ${condition.refName === selected ? "selected" : ""}>${condition.valueName}</option>`;
        }


        return onlyReturnFirstValid ? null : returnString;
    },
    getConditionListCharSpecialValues(selected,conditionArray,charName,targetSlot,onlyReturnFirstValid) {
        // console.log(charName)
        // Self
        let targetName = "";
        if (targetSlot === "Self") {targetName = charName;}
        else {
            const charObject = globalRecords.character;
            targetName = charObject[targetSlot].name;
        }
        const currentRef = customDisplayValuesLog[targetName];

        // "Saber": [
        //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
        //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
        //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
        // ], 


        let returnString = "";
        for (let condition of currentRef) {
            if (condition.isCharacterState || condition.isCharacterSlot) {continue;}
            if (onlyReturnFirstValid) {return condition.refName;}//used to extract the first valid character state if one exists
            returnString += `<option value="${condition.refName}" ${condition.refName === selected ? "selected" : ""}>${condition.valueName}</option>`;
        }


        return onlyReturnFirstValid ? null : returnString;
    },
    displayLoop(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const typeCheck = destination.type;
        // console.log(typeCheck)

        let returnString = rotationsUISuffering[typeCheck](characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot);
        return returnString;
    },
    getReturnStruct(type) {
        // console.log(type)
        switch (type) {
            //LOGIC OPERATORS
            case "AND":
                return {
                    type: "AND",
                    array: [
                        {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},
                    ]
                }
            case "OR":
                return {
                    type: "OR",
                    array: [
                        {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},
                    ]
                }
            case "COMPARE":
                return {
                    type: "COMPARE",
                    comparison: "=",
                    array: [
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
                    ],
                }
            
            
            //STANDARD CONDITIONS
            case "Buff": return {type: "Buff", target: "Self", targetType: "Character", buffName: null, state: true}
            case "Turn": return {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true}
            case "Next Turn Is:": return {type: "Next Turn Is:", target: "Self", targetType: "Character", state: true}

            //STANDARD VALUE CONDITOINS
            case "User Value: Number": return {type: "User Value: Number", inputValue: 0}
            case "User Value: Boolean": return {type: "User Value: Boolean", inputValue: true}

            //ADVANCED STAT OPERATORS
            case "MATH":
                return {
                    type: "MATH",
                    operator: "+",
                    array: [
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
                    ],
                }
            case "Stat": return {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
            
            //CHARACTER VALUES
            case "Character: Value": return {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "currentEnergy"}

            //SPECIAL CHARACTER VALUES
            case "Character: Special Value": return {type: "Character: Special Value", target: "Self", specialValue: null, isBattleValue: false}

            //CHARACTER SPECIFIC STATES
            case "Character: State": return {type: "Character: State", target: "Self", stateName: null, state: true, isBattleValue: false}
            //battleValue will be assigned to true if applicable, within the UI function, cause it has to be determined as we go

            //TEAM VALUES
            case "Team: Value": return {type: "Team: Value", teamValue: "Skill Points: Current"}
            // case "Skill Points: Current":
            //     return {type: "Skill Points: Current"}
            // case "Skill Points: Max":
            //     return {type: "Skill Points: Max"}

            //SUSTAIN CONDITIONS
            case "Sustain Checks": return {type: "Sustain Checks", sustainValue: "Any Ally: HP <= 50%"}

            // case "":
            //     return {}
            // case "":
            //     return {}
            // case "":
            //     return {}
        }
    },
    updateRotationObject(arrayToPass,skillSlot,characterName,isAddedToOperator,parameterKey,eventObject) {
        // const characterConditions = defaultConditions[characterName];
        let characterConditions = null;

        const characterObject = globalRecords.character;
        for (let charSlot in characterObject) {
            const currentCharObject = characterObject[charSlot];

            if (currentCharObject.name === characterName) {
                //I initially structured conditions to be stored in the default conditions object, but decided against it
                //bc later if people want to "revert" to default conditions, it wouldn't let them do it since they'd already modified the default storage area
                //so while it's jank to do it this way now, we reference the character object(and in turn, user imports) to assign and modify conditions
                //this way later we can add a button that will let people restore to defaults
                characterConditions = currentCharObject.conditions;
                break;
            }
        }
        const currentConditions = characterConditions[skillSlot];

        // console.log(isAddedToOperator)

        const operatorType = currentConditions.type;
        const isOperator = operatorType && (operatorType === "AND" || operatorType === "OR" || operatorType === "COMPARE" || operatorType === "MATH");

        // const currentKeys = Object.keys(currentConditions);
        const parentTotalLength = arrayToPass.length;

        let currentIndex = 0;
        // console.log(arrayToPass)

        
        if (parentTotalLength > 1) {
            rotationsUISuffering.updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,(isOperator ? currentConditions.array : currentConditions),currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator);
        }
        else {
            const operatorJoinSet = new Set (["AND","OR"]);
            const potentialOperatorElement = readSelection(`rotationConditionType${skillSlot}${arrayToPass.join("|")}`);
            if (operatorType && operatorType != potentialOperatorElement.value) {
                //so if the prior operator was and/or and if the operator we switched is still and/or, then just change the internal to match and that works
                if (operatorJoinSet.has(operatorType) && operatorJoinSet.has(potentialOperatorElement.value)) {
                    currentConditions.type = potentialOperatorElement.value;
                }
                //otherwise if we switched from say and to compare, then the and array is removed in its entirety and a new compare object needs to be constructed
                else {
                    if (potentialOperatorElement.value === "Delete") {
                        // delete characterConditions[skillSlot];
                        currentConditions.splice(arrayToPass[currentIndex],1)
                    }
                    else {
                        characterConditions[skillSlot] = rotationsUISuffering.getReturnStruct(potentialOperatorElement.value);
                    }
                }
            }
            else if (!isAddedToOperator) {
                // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)
                const conditionKeys = Object.keys(currentConditions);
                const keyToModify = conditionKeys[parameterKey];

                const newID = eventObject.target.id;
                const newPotentialElem = readSelection(newID);
                let valueToPass = newPotentialElem.value;

                //seems stupid to do this but the value to read isn't always going to be a boolean, we only want to change it to a true boolean value when it IS one lmao
                if (valueToPass === "true") {valueToPass = true;}
                else if (valueToPass === "false") {valueToPass = false;}

                const valueIsNumber = newID.toLowerCase().includes("number");
                currentConditions[keyToModify] = valueIsNumber ? +newPotentialElem.value : valueToPass;
            }
            
            if (operatorType && isAddedToOperator) {
                currentConditions.array.push(rotationsUISuffering.getReturnStruct("Turn"));
            }
        }

        customHTML.megaRotationFuckery(characterName);

        userTriggers.getUpdatedBattleLog();


    },
    updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,currentConditions,currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator) {
        currentIndex++;
        const newConditions = currentConditions[arrayToPass[currentIndex]];
        // console.log(newConditions)
        const operatorType = newConditions.type;
        // console.log(newConditions)


        // console.log(parentTotalLength,arrayToPass,skillSlot,characterName,isAddedToOperator)

        if (currentIndex < parentTotalLength - 1) {
            
            const isOperator = operatorType && (operatorType === "AND" || operatorType === "OR" || operatorType === "COMPARE" || operatorType === "MATH");
            
            // const newIndex = isOperator ? -1 : currentIndex;

            // console.log(operatorType, newConditions)
            rotationsUISuffering.updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,isOperator ? newConditions.array : newConditions,currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator);
        }
        else {

            const potentialID = `rotationConditionType${skillSlot}${arrayToPass.join("|")}`;
            // console.log("reached deposit else",currentIndex,operatorType,potentialID,newConditions)
            const operatorJoinSet = new Set (["AND","OR"]);

            
            const potentialOperatorElement = readSelection(potentialID);

            // console.log("reached deposit else",operatorType && isAddedToOperator)

            // rotationConditionTypeUltimate0|2|1
            // rotationConditionTypeUltimate0|2|1

            // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)

            // console.log(operatorType)

            if (operatorType) {
                if (operatorType != potentialOperatorElement.value) {
                    //so if the prior operator was and/or and if the operator we switched is still and/or, then just change the internal to match and that works
                    if (operatorJoinSet.has(operatorType) && operatorJoinSet.has(potentialOperatorElement.value)) {
                        newConditions.type = potentialOperatorElement.value;
                    }
                    //otherwise if we switched from say and to compare, then the and array is removed in its entirety and a new compare object needs to be constructed
                    else {
                        if (potentialOperatorElement.value === "Delete") {
                            // delete currentConditions[skillSlot];
                            // console.log(currentConditions)
                            currentConditions.splice(arrayToPass[currentIndex],1)
                        }
                        else {
                            currentConditions[arrayToPass[currentIndex]] = rotationsUISuffering.getReturnStruct(potentialOperatorElement.value);
                        }
                        
                    }
                }
                else if (!isAddedToOperator) {
                    // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)
                    const conditionKeys = Object.keys(newConditions);
                    const keyToModify = conditionKeys[parameterKey];
    
                    const newID = eventObject.target.id;
                    const newPotentialElem = readSelection(newID);
                    let valueToPass = newPotentialElem.value;
    
                    //seems stupid to do this but the value to read isn't always going to be a boolean, we only want to change it to a true boolean value when it IS one lmao
                    if (valueToPass === "true") {valueToPass = true;}
                    else if (valueToPass === "false") {valueToPass = false;}
                    // else if (newID.toLowerCase().includes("number")) {valueToPass = +valueToPass;}
    
                    console.log(valueToPass)
                    const valueIsNumber = newID.toLowerCase().includes("number");
                    newConditions[keyToModify] = valueIsNumber ? +newPotentialElem.value : valueToPass;
                }

                // console.log("reached deposit else",operatorType,isAddedToOperator)
                if (isAddedToOperator) {
                    // console.log("reached deposit end")
                    // console.log(parentTotalLength,arrayToPass,skillSlot,characterName,isAddedToOperator,newConditions)
                    newConditions.array.push(rotationsUISuffering.getReturnStruct("Turn"));
                    // console.log(newConditions)
                }
            }
        }
    },

    AND(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const array = destination.array;

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`

        // ${adjustmentString}
        let returnString = `
        <div class="rotationsSectionANDBoxHolder">
        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
            ${rotationsUISuffering.getConditionList("AND",conditionListArray)}
        </select>
        </div>`;

        layerCounter += 1;
        let indexCounterNew = -1;

        // inheritedAdjustmentString += indexCounter < parentLength-1 ? "│&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";


        // rotationConditionOperatorBox
        returnString += `<div class="rotationConditionOperatorBox">`;
        const displayLoop = rotationsUISuffering.displayLoop;

        // console.log(array)
        for (let entry of array) {

            returnString += displayLoop(characterName,entry,indexCounterNew,layerCounter,newArray,skillSlot);
            
            indexCounterNew++;
        }
        returnString += `
            <div class="rotationsOperatorAddButtonHolder">
                <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true)">
                    Add Condition
                </div>
            </div>
        
        </div>`;


        // returnString += `</div>`
        // <div class="relicStatSelectionRowBuffUptime">
        //     <div class="BuffUptimeHeaderRow">Graph by:</div>
        //     <select class="BuffUptimeSelectionSelector" name="" id="buffUptimeGraphBy" onchange="graphs.createGraphsByBuffUptime()"></select>
        // </div>
        // console.log(returnString)
        return returnString;
    },
    OR(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const array = destination.array;

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        // ${adjustmentString}
        let returnString = `
        <div class="rotationsSectionANDBoxHolder">
        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
            ${rotationsUISuffering.getConditionList("OR",conditionListArray)}
        </select>
        </div>`;

        layerCounter += 1;
        let indexCounterNew = -1;

        // inheritedAdjustmentString += indexCounter < parentLength-1 ? "│&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";


        // rotationConditionOperatorBox
        returnString += `<div class="rotationConditionOperatorBox">`;
        const displayLoop = rotationsUISuffering.displayLoop;
        for (let entry of array) {

            returnString += displayLoop(characterName,entry,indexCounterNew,layerCounter,newArray,skillSlot);
            
            indexCounterNew++;
        }
        returnString += `
            <div class="rotationsOperatorAddButtonHolder">
                <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true)">
                    Add Condition
                </div>
            </div>
            
        </div>`


        // returnString += `</div>`
        // <div class="relicStatSelectionRowBuffUptime">
        //     <div class="BuffUptimeHeaderRow">Graph by:</div>
        //     <select class="BuffUptimeSelectionSelector" name="" id="buffUptimeGraphBy" onchange="graphs.createGraphsByBuffUptime()"></select>
        // </div>
        // console.log(returnString)
        return returnString;
    },
    Buff(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Buff", target: "Self", targetType: "Character", buffName: "Benison of Paper and Rites", state: true},

        // const buffNames = [];
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        
        const arrayIDString = newArray.join("|");

        const newBuffRef = {};
        // const reverseBuffNames = {};

        const characterObject = globalRecords.character;
        const char1Name = characterObject.char1.name;
        const char2Name = characterObject.char2.name;
        const char3Name = characterObject.char3.name;
        const char4Name = characterObject.char4.name;


        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const stateElem = readSelection(`${baseIDString}State`);
        const buffNameElem = readSelection(`${baseIDString}BuffName`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (stateElem) {destination.state = stateElem.value === "true" ? true : false;}
        if (buffNameElem) {
            destination.buffName = buffNameElem.value;
            // console.log(destination.buffName,buffNameElem.value)
        }


        for (let charSlot in characterObject) {
            const currentSlot = characterObject[charSlot];

            const charName = currentSlot.name;
            const lcName = currentSlot.lcName;
            const pc2 = currentSlot["2pc"];
            const pc4 = currentSlot["4pc"];

            const charLogic = turnLogic[charName];
            const pc2Logic = turnLogicRelics[pc2]["2pc"];
            const pc4Logic = turnLogicRelics[pc4][pc4 === pc2 ? "4pc" : "2pc"];
            const lcLogic = turnLogicLightcones[lcName];

            // const customName = `${buffNames.allyDMG} (${sourceTurn.properName})`;
            // if (!buffNames[customName]) {buffNames[customName] = customName;}

            if (charLogic?.buffNames) {
                for (let buffName in charLogic.buffNames) {
                    const fullBuffName = charLogic.buffNames[buffName];

                    if (charLogic?.buffNamesPerCharacter?.[buffName]) {
                        Object.assign(newBuffRef,{
                            [fullBuffName + " " + char1Name]: fullBuffName + " " + char1Name,
                            [fullBuffName + " " + char2Name]: fullBuffName + " " + char2Name,
                            [fullBuffName + " " + char3Name]: fullBuffName + " " + char3Name,
                            [fullBuffName + " " + char4Name]: fullBuffName + " " + char4Name
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName + char1Name]: fullBuffName + char1Name,
                        //     [fullBuffName + char2Name]: fullBuffName + char2Name,
                        //     [fullBuffName + char3Name]: fullBuffName + char3Name,
                        //     [fullBuffName + char4Name]: fullBuffName + char4Name
                        // });
                    }
                    else {
                        Object.assign(newBuffRef,{
                            [buffName]: fullBuffName,
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName]: buffName,
                        // });
                    }
                }
            }

            if (pc2Logic?.buffNames) {
                for (let buffName in pc2Logic.buffNames) {
                    const fullBuffName = pc2Logic.buffNames[buffName];

                    if (pc2Logic?.buffNamesPerCharacter?.[buffName]) {
                        Object.assign(newBuffRef,{
                            [fullBuffName + " " + char1Name]: fullBuffName + " " + char1Name,
                            [fullBuffName + " " + char2Name]: fullBuffName + " " + char2Name,
                            [fullBuffName + " " + char3Name]: fullBuffName + " " + char3Name,
                            [fullBuffName + " " + char4Name]: fullBuffName + " " + char4Name
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName + char1Name]: fullBuffName + char1Name,
                        //     [fullBuffName + char2Name]: fullBuffName + char2Name,
                        //     [fullBuffName + char3Name]: fullBuffName + char3Name,
                        //     [fullBuffName + char4Name]: fullBuffName + char4Name
                        // });
                    }
                    else {
                        Object.assign(newBuffRef,{
                            [buffName]: fullBuffName,
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName]: buffName,
                        // });
                    }
                }
            }

            if (pc4Logic?.buffNames) {
                for (let buffName in pc4Logic.buffNames) {
                    const fullBuffName = pc4Logic.buffNames[buffName];

                    if (pc4Logic?.buffNamesPerCharacter?.[buffName]) {
                        Object.assign(newBuffRef,{
                            [fullBuffName + " " + char1Name]: fullBuffName + " " + char1Name,
                            [fullBuffName + " " + char2Name]: fullBuffName + " " + char2Name,
                            [fullBuffName + " " + char3Name]: fullBuffName + " " + char3Name,
                            [fullBuffName + " " + char4Name]: fullBuffName + " " + char4Name
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName + char1Name]: fullBuffName + char1Name,
                        //     [fullBuffName + char2Name]: fullBuffName + char2Name,
                        //     [fullBuffName + char3Name]: fullBuffName + char3Name,
                        //     [fullBuffName + char4Name]: fullBuffName + char4Name
                        // });
                    }
                    else {
                        Object.assign(newBuffRef,{
                            [buffName]: fullBuffName,
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName]: buffName,
                        // });
                    }
                }
            }

            if (lcLogic?.buffNames) {
                for (let buffName in lcLogic.buffNames) {
                    const fullBuffName = lcLogic.buffNames[buffName];

                    if (lcLogic?.buffNamesPerCharacter?.[buffName]) {
                        Object.assign(newBuffRef,{
                            [fullBuffName + " " + char1Name]: fullBuffName + " " + char1Name,
                            [fullBuffName + " " + char2Name]: fullBuffName + " " + char2Name,
                            [fullBuffName + " " + char3Name]: fullBuffName + " " + char3Name,
                            [fullBuffName + " " + char4Name]: fullBuffName + " " + char4Name
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName + char1Name]: fullBuffName + char1Name,
                        //     [fullBuffName + char2Name]: fullBuffName + char2Name,
                        //     [fullBuffName + char3Name]: fullBuffName + char3Name,
                        //     [fullBuffName + char4Name]: fullBuffName + char4Name
                        // });
                    }
                    else {
                        Object.assign(newBuffRef,{
                            [buffName]: fullBuffName,
                        });
                        // Object.assign(reverseBuffNames,{
                        //     [fullBuffName]: buffName,
                        // });
                    }
                }
            }
            
        }

        if (destination.buffName) {
            let buffIsPossible = false;

            for (let buffEntry in newBuffRef) {
                const fullBuffName = newBuffRef[buffEntry];
                if (destination.buffName === fullBuffName) {
                    buffIsPossible = true;
                    break;
                    //we may have cases where people target specific buff names but remove the character that could have provided it
                    //when this happens we need to default the buff to something else, otherwise continue as normal
                }
            }

            // if (buffNameElem && !buffIsPossible) {destination.buffName = buffNameElem.value;}
            if (!buffIsPossible) {
                destination.buffName = newBuffRef[Object.keys(newBuffRef)[0]];//default to first buff possible in the current selections
            }
        }
        else {destination.buffName = newBuffRef[Object.keys(newBuffRef)[0]];}

        let buffNameOptions = "";
        for (let buffEntry in newBuffRef) {
            const fullBuffName = newBuffRef[buffEntry];

            buffNameOptions += `<option value="${fullBuffName}" ${destination.buffName === fullBuffName ? "selected" : ""}>${fullBuffName}</option>`;
        }


        

        // "buffNames": {
        //     "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
        //     "shieldBuff4pc": "Self-Enshrouded Recluse (4pc)",
        // },
        // "buffNamesPerCharacter": {
        //     "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
        // },

        const target = destination.target;
        // console.log(target)
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;
        
        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;

        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div style="display:flex;flex-direction:column">
                <div class="rotationsConditionsRowHolderInner">
                    <div class="rotationsCharacterTargetPreviewBox">
                        <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                    </div>

                    <div class="rotationsConditionsImageAdjacentHolderBox">

                        <div class="rotationsConditionsRowHeader">
                            <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                                ${getConditionList("Buff",conditionListArray)}
                            </select>
                            <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                                ${getConditionList(destination.targetType ?? "Character",conditionListCharsTypeBuffTarget)}
                            </select>
                        </div>

                        <div class="rotationsSectionConditionHolderBox">
                            <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                                ${getConditionList(destination.target ?? "Self",conditionListChars)}
                            </select>
                            <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,4,event)">
                                ${getConditionList(destination.state ?? "true",conditionListBoolean)}
                            </select>
                        </div>

                    </div>
                </div>

                <div class="rotationsSectionConditionHolderBox">
                    <select class="rotationActionSelectorSub" id="${baseIDString}BuffName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                        ${buffNameOptions}
                    </select>
                </div>

            </div>

        </div>`;
        

        return returnString
    },
    Turn(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        // const valueNameElem = readSelection(`${baseIDString}StatValue`);
        const phaseElem = readSelection(`${baseIDString}Phase`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetTypeElem && destination.targetType != targetTypeElem.value) {destination.targetType = targetTypeElem.value;}
        if (targetElem && destination.target != targetElem.value) {destination.target = targetElem.value;}
        // if (valueNameElem && destination.characterValue != valueNameElem.value) {destination.characterValue = valueNameElem.value;}
        if (phaseElem && destination.phase != phaseElem.value) {destination.phase = phaseElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;
        
        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;

        // console.log(destination.target,targetElem?.value ?? "")

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Turn",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(destination.targetType ?? "Character",conditionListCharsType)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Phase" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(destination.phase ?? "Any Part",conditionListTurnPhase)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,4,event)">
                            ${getConditionList(destination.state ?? "true",conditionListBoolean)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    "Next Turn Is:"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Next Turn", target: "Self", targetType: "Character", state: true}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        // const valueNameElem = readSelection(`${baseIDString}StatValue`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetTypeElem && destination.targetType != targetTypeElem.value) {destination.targetType = targetTypeElem.value;}
        if (targetElem && destination.target != targetElem.value) {destination.target = targetElem.value;}
        // if (valueNameElem && destination.characterValue != valueNameElem.value) {destination.characterValue = valueNameElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;
        
        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;

        // console.log(destination.target,targetElem?.value ?? "")

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Next Turn Is:",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(destination.targetType ?? "Character",conditionListCharsType)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(destination.state ?? "true",conditionListBoolean)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    Stat(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}StatValue`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {
            destination.statName = valueNameElem.value;
        }

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;
        const statName = destination.statName;

        // indexToSpecific

        const statIndex = greatTableIndex[statName];
        const familyName = basicShorthand.mappedFamilies[statIndex];
        const resultingPath = propertyImagePaths[familyName];
        const setGrouping = resultingPath.sets[statIndex].specific;
        // console.log(setGrouping)

        // mappedFamilies: {},
        // mappedCacheTags: {},
        // mappedUpdateStatKeys: {},
        // reverseKeyMappings: {},

        // basicShorthand.reverseKeyMappings        //specific to index value  greatTableKeys
        
        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;
        // console.log(statIndex)

        
        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Stat",conditionListValueArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(destination.targetType ?? "Character",conditionListCharsTypeBuffTarget)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}StatValue" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${rotationsUISuffering.getConditionListStats(statName ?? "SPDFlat",conditionCharacterStatList)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    "User Value: Number"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValueNumber`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${getConditionList("User Value: Number",conditionListValueArray)}
                </select>
                <div class="presetsSelectorBox">
                    <input type="number" class="tagInput" id="${baseIDString}InputValueNumber" value="${destination.inputValue ?? 0}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                </div>

            </div>
            
        </div>`;

        return returnString
    },
    "User Value: Boolean"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "User Value: Boolean", inputValue: true}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const booleanElem = readSelection(`${baseIDString}InputValueNumber`);
        if (booleanElem) {destination.inputValue = booleanElem.value === "true" ? true : false;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${getConditionList("User Value: Boolean",conditionListValueArray)}
                </select>

                <select class="rotationActionSelectorSub" id="${baseIDString}InputValueBoolean" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList(destination.inputValue ?? "true",conditionListBoolean)}
                </select>

            </div>
            
        </div>`;

        return returnString
    },
    "Character: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.characterValue = valueNameElem.value;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;

        // console.log(setGrouping)

        // mappedFamilies: {},
        // mappedCacheTags: {},
        // mappedUpdateStatKeys: {},
        // reverseKeyMappings: {},

        // basicShorthand.reverseKeyMappings        //specific to index value
        
        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;
        // console.log(statIndex)

        
        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: Value",conditionListValueArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(destination.targetType ?? "Character",conditionListCharsTypeBuffTarget)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${rotationsUISuffering.getConditionListCharValues(destination.characterValue ?? "energyCurrent",conditionComparatorCharValueConversions)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    "Team: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Team: Value",conditionListValueArray)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(destination.teamValue ?? "Skill Points: Current",conditionListTeamValueArray)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    "Skill Points: Current"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValue`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList("Skill Points: Current",conditionListValueArray)}
                </select>

            </div>
            
        </div>`;

        return returnString
    },
    "Skill Points: Max"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValue`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList("Skill Points: Max",conditionListValueArray)}
                </select>

            </div>
            
        </div>`;

        return returnString
    },

    "Sustain Checks"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Sustain Checks",conditionListArray)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(destination.sustainValue ?? "Any Ally: HP <= 50%",conditionListSustainValueArray)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return returnString
    },
    "Character: State"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.stateName = valueNameElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;

        // state: true,

        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;

        const firstValidState = rotationsUISuffering.getConditionListCharStates(destination.stateName,null,characterName,destination.target ?? "Self",true);
        // console.log(firstValidState)

        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: State",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${rotationsUISuffering.getConditionListCharStates(destination.stateName ?? firstValidState,null,characterName,destination.target ?? "Self",false)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(destination.state ?? "true",conditionListBoolean)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        // const newValueNameElem = readSelection(`${baseIDString}ValueName`);

        destination.stateName ??= firstValidState;//if the stateName doesn't exist yet(prob bc this was a new selection and we didn't read char states yet) then assign it the first valid state we can find
        //otherwise we leave it as is with whatever value the element provided from user selections, if this was a preexisting condition
        if (firstValidState != null) {

            const currentRef = customDisplayValuesLog[characterName];
            for (let battleEntry of currentRef) {
                // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},
                // destination.stateName

                // "Saber": [
                //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
                //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
                //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
                //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
                //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
                // ], 

                if (destination.stateName === battleEntry.refName) {
                    destination.isBattleValue = battleEntry.isBattleValue;
                    break;
                }
            }
        }

        // destination.stateName

        return returnString
    },
    // "Skill Points: Current",
    // "Skill Points: Max",

    // "Character Specific Value"(characterName,destination,indexCounter,layerCounter,parentLength,inheritedAdjustmentString) {
    //     // {type: "Character Specific Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

    //     const characterObject = globalRecords.character;
    //     const target = destination.target;
    //     const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;

    //     // console.log(setGrouping)

    //     // mappedFamilies: {},
    //     // mappedCacheTags: {},
    //     // mappedUpdateStatKeys: {},
    //     // reverseKeyMappings: {},

    //     // basicShorthand.reverseKeyMappings        //specific to index value
        
    //     const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;
    //     // console.log(statIndex)

        
    //     const getConditionList = rotationsUISuffering.getConditionList;

    //     let returnString = `<div class="rotationsConditionsRowHolder">
    //         <div class="rotationsConditionsRowHolderInner">
    //             <div class="rotationsCharacterTargetPreviewBox">
    //                 <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
    //             </div>

    //             <div class="rotationsConditionsImageAdjacentHolderBox">

    //                 <div class="rotationsConditionsRowHeader">
    //                     <select class="rotationActionSelectorSub" id="" onchange="">
    //                         ${getConditionList("Character: Value",conditionListValueArray)}
    //                     </select>
    //                     <select class="rotationActionSelectorSub" id="" onchange="">
    //                         ${getConditionList(destination.targetType ?? "Character",conditionListCharsTypeBuffTarget)}
    //                     </select>
    //                 </div>

    //                 <div class="rotationsSectionConditionHolderBox">
    //                     <select class="rotationActionSelectorSub" id="" onchange="">
    //                         ${getConditionList(destination.target ?? "Self",conditionListChars)}
    //                     </select>
    //                     <select class="rotationActionSelectorSub" id="" onchange="">
    //                         ${getConditionList(destination.characterValue ?? "energyCurrent",conditionListCharacterValueArray)}
    //                     </select>
    //                 </div>

    //             </div>
    //         </div>
            
    //     </div>`;

    //     return returnString
    // },
    // "Energy: Current",
    // "Energy: Max",
    COMPARE(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */


        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "COMPARE",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        //     stat2: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"}
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const compareElem = readSelection(`${baseIDString}Comparison`);
        if (compareElem) {destination.comparison = compareElem.value;}

        // console.log(destination)

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsSectionANDBoxHolder">
        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
            ${rotationsUISuffering.getConditionList("COMPARE",conditionListArray)}
        </select>
        </div>

        <div class="rotationConditionOperatorBox">
            ${rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot)}
            <div class="rotationsConditionsRowHeader">
                <select class="rotationActionSelectorSub" id="${baseIDString}Comparison" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList(destination.comparison ?? "=",conditionComparatorList)}
                </select>
            </div>
            ${rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot)}
            
        </div>`;

        return returnString
    },
    "Character: Special Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // case "Character: Special Value":
        //         return {type: "Character: Special Value", target: "Self", specialValue: "currentEnergy", isBattleValue: false}

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        // const stateElem = readSelection(`${baseIDString}State`);

        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.specialValue = valueNameElem.value;}
        // if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name;

        // state: true,

        const characterIconPath = "/HonkaiSR/" + characters[targetSlot].preview;

        const firstValidValue = rotationsUISuffering.getConditionListCharSpecialValues(destination.specialValue,null,characterName,destination.target ?? "Self",true);
        // console.log(firstValidState)

        const getConditionList = rotationsUISuffering.getConditionList;

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
                <div class="rotationsCharacterTargetPreviewBox">
                    <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                </div>

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: State",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(destination.target ?? "Self",conditionListChars)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${rotationsUISuffering.getConditionListCharSpecialValues(destination.specialValue ?? firstValidValue,null,characterName,destination.target ?? "Self",false)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        // const newValueNameElem = readSelection(`${baseIDString}ValueName`);

        // console.log(firstValidValue)
        destination.specialValue ??= firstValidValue;//if the stateName doesn't exist yet(prob bc this was a new selection and we didn't read char states yet) then assign it the first valid state we can find
        //otherwise we leave it as is with whatever value the element provided from user selections, if this was a preexisting condition
        if (firstValidValue != null) {

            const currentRef = customDisplayValuesLog[characterName];
            for (let battleEntry of currentRef) {
                // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},
                // destination.stateName

                // "Saber": [
                //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
                //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
                //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
                //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
                //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
                // ], 

                if (destination.specialValue === battleEntry.refName) {
                    destination.isBattleValue = battleEntry.isBattleValue;
                    break;
                }
            }
        }

        // destination.stateName

        return returnString
    },
    MATH(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */


        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1


        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        // case "MATH":
        //     return {
        //         type: "MATH",
        //         array: [
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        //         ],
        //         operator: "*",
        //     }

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const mathElem = readSelection(`${baseIDString}MathOperator`);
        if (mathElem) {destination.operator = mathElem.value;}

        // console.log(destination)

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsSectionANDBoxHolder">
        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
            ${rotationsUISuffering.getConditionList("MATH",conditionListValueArray)}
        </select>
        </div>

        <div class="rotationConditionOperatorBox">
            ${rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot)}
            <div class="rotationsConditionsRowHeader">
                <select class="rotationActionSelectorSub" id="${baseIDString}MathOperator" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList(destination.operator ?? "+",conditionMathList)}
                </select>
            </div>
            ${rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot)}
        </div>`;

        return returnString
    },
    actionHeader() {

    }
}