const traceTreeVisualData = {
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
        "Elation"(charRef) {
            let MajorRadius = 60;
            let Major1and2Height = 270;
            let Major1and2Offset = 28;

            let SkillRadius = 55;
            let Skill1and2Height = 120;
            let Skill1and2Offset = 260;

            let skillCenterHeight = 560;
            let skillUpperHeight = 310;
            let lowerSkillHeight = 800;

            let lowerTraceHight = 1080;
            let lowerTraceRowHeight = 1080;
            let lowerTraceRowOffset = 300;


            let middleRowHeight = 751;
            let middleRowOffset = 268;

            let lowestInnerHeight = 590;
            let lowestInnerOffset = 130;

            let lowestMiddleHeight = 500;
            let lowestMiddleOffset = -71;


            let lowestSideTraceHeight = 721;
            let lowestSideTraceOffset = -31;
            
            let traceRadius = 40;
            let bottomTraceHeight = 1040
            // let middleTraceHeight = 240;
            // let middleTraceOffset = 65;

            // let lowerTraceLowerHeight = 630;
            // let lowerTraceLowerOffset = 60;

            // let lowerTraceUpperHeight = 460;
            // let lowerTraceUpperOffset = -120;

            // let upperMajorHeight = 130;

            let finalTraceHeight = 20;
            // let topTraceHeight = 5;
            // let topTraceOffset = 215;

            let makeSkillCircle = customHTML.makeSkillCircle;
            let src = pathImagePaths["Elation"].big
            // <image href="/HonkaiSR/Elation.png" width="512" height="1000" id="" class="characterMainCenterImageTraceReferenceHunt"/> //purely for overlaying an image
            return `
            <svg viewBox="0 0 1000 1100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
                <image href="${src}" width="512" height="1000" id="characterMainCenterImageTraces" class="characterMainCenterImageTrace"/>

                <line x1="${500}" y1="${skillUpperHeight}" x2="${500}" y2="${bottomTraceHeight}" stroke="#ffffff" stroke-width="2"/>



                <path d="M${Skill1and2Offset} ${Skill1and2Height-20} Q 480 270, ${450} ${skillUpperHeight+10}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${1000-Skill1and2Offset} ${Skill1and2Height-20} Q 520 270, ${550} ${skillUpperHeight+10}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <path d="M${Skill1and2Offset} ${Skill1and2Height-30} Q -200 300, ${lowestSideTraceOffset} ${lowestSideTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${1000-Skill1and2Offset} ${Skill1and2Height-30} Q 1200 300, ${1000-lowestSideTraceOffset} ${lowestSideTraceHeight}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                <path d="M${lowestSideTraceOffset} ${lowestSideTraceHeight+20} Q 40 650, ${lowestInnerOffset} ${lowestInnerHeight+10}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                <path d="M${1000-lowestSideTraceOffset} ${lowestSideTraceHeight+20} Q 960 650, ${1000-lowestInnerOffset} ${lowestInnerHeight+10}" stroke="#ffffff" fill="transparent" stroke-width="2"/>

                ${makeSkillCircle(lowestSideTraceOffset,lowestSideTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point14.icon}`,14,"trace")}
                ${makeSkillCircle(1000-lowestSideTraceOffset,lowestSideTraceHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point17.icon}`,17,"trace")}

                ${makeSkillCircle(lowestInnerOffset,lowestInnerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point15.icon}`,15,"trace")}
                ${makeSkillCircle(1000-lowestInnerOffset,lowestInnerHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point18.icon}`,18,"trace")}

                ${makeSkillCircle(lowestMiddleOffset,lowestMiddleHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point13.icon}`,13,"trace")}
                ${makeSkillCircle(1000-lowestMiddleOffset,lowestMiddleHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point16.icon}`,16,"trace")}

                <path d="M${middleRowOffset} ${middleRowHeight-10} Q 500 860, ${1000-middleRowOffset} ${middleRowHeight-10}" stroke="#ffffff" fill="transparent" stroke-width="2"/>
                ${makeSkillCircle(middleRowOffset,middleRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point11.icon}`,11,"trace")}
                ${makeSkillCircle(1000-middleRowOffset,middleRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point10.icon}`,10,"trace")}


                ${makeSkillCircle(Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point01.icon}`,1,"skill")}
                ${makeSkillCircle(1000-Skill1and2Offset,Skill1and2Height,SkillRadius,`/HonkaiSR/${charRef.traces.Point02.icon}`,2,"skill")}

                ${makeSkillCircle(500,skillCenterHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point04.icon}`,4,"skill")}
                ${makeSkillCircle(500,skillUpperHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point03.icon}`,3,"skill")}
                ${makeSkillCircle(500,lowerSkillHeight,SkillRadius,`/HonkaiSR/${charRef.traces.Point05.icon}`,5,"skill")}

                
                <line x1="${1000-lowerTraceRowOffset}" y1="${lowerTraceRowHeight}" x2="${lowerTraceRowOffset}" y2="${lowerTraceRowHeight}" stroke="#ffffff" stroke-width="2"/>
                ${makeSkillCircle(500,lowerTraceHight,MajorRadius,`/HonkaiSR/${charRef.traces.Point06.icon}`,6,"major")}

                ${makeSkillCircle(lowerTraceRowOffset,lowerTraceRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point09.icon}`,9,"trace")}
                ${makeSkillCircle(1000-lowerTraceRowOffset,lowerTraceRowHeight,traceRadius,`/HonkaiSR/${charRef.traces.Point12.icon}`,12,"trace")}


                ${makeSkillCircle(Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point07.icon}`,7,"major")}

                ${makeSkillCircle(1000-Major1and2Offset,Major1and2Height,MajorRadius,`/HonkaiSR/${charRef.traces.Point08.icon}`,8,"major")}

                ${charRef.traces.Point22 ? makeSkillCircle(500,finalTraceHeight,MajorRadius,`/HonkaiSR/${charRef.traces.Point22.icon}`,22,"skill",true) : ""}
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
    makeSkillCircle(x,y,r,imgHref,id,type,isElation) {
        let fillValue = type === "skill" ? "#1e2137" : "#ffffff";
        let borderColor = type === "skill" ? "#928d85" : "#b2c8ff";

        if (isElation) {
            fillValue = "#121212";
            borderColor = "#8A615A";
        }

        if (type === "memoSkill") {
            fillValue = "#241b5a";
            borderColor = "#646390";
        }
        let borderWidth = type === "trace" ? 0 : 3;

        const notASkill = type != "skill" && type != "memoSkill";
        const elationIconAdjustment = imgHref.toLowerCase().includes("joy") ? 0.7 : 1;

        const size = r * 2 * elationIconAdjustment;
        const offset = size / 2;

        return `<g>
            <circle cx="${x}" cy="${y}" r="${r}" fill="${fillValue}" stroke="${borderColor}" stroke-width="${borderWidth}" class=""/>
    
            <clipPath id="circleClip-${id}">
                <circle cx="${x}" cy="${y}" r="${r}"/>
            </clipPath>
    
            <image href="${imgHref}" x="${x - offset}" y="${y - offset}" width="${size}" height="${size}" clip-path="url(#circleClip-${id})" class="clickable hoveredTraceIcon${isElation ? " hoveredTraceIconElation" : ""}" 
            style="${notASkill ? ("filter: brightness(0)") : (isElation ? "filter:sepia(0.55)saturate(1.1)hue-rotate(-12deg)contrast(1.05);" : "filter:sepia(0.25)saturate(0.8)hue-rotate(-5deg)contrast(0.95);")}" onclick="userTriggers.updateSelectedTraceDisplay(${id})"/>
        </g>`;
    },
}