{/*

<script src="compositeAbilityObject.js"></script>

<script src="/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalFunctionMap.js"></script>
<script src="/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalModifierMap.js"></script>
<script src="/HonkaiSR/TheLibrary/EnemyConfigs/dMegaMappingPathing.js"></script>
<script src="/HonkaiSR/TheLibrary/painAndSuffering.js"></script>
<script src="/HonkaiSR/TheLibrary/newTester.js"></script>

<script src="/MainJS/buildTime.js"></script> */}

const scriptsToLoad = [
    "/htmlTemplates/injectMainHTML.js",//<!-- sidenav and footer -->
    "/htmlTemplates/injectHSRHTML.js",//<!-- TFD Header -->
    "/htmlTemplates/adjustMobileNav.js",

    "/HonkaiSR/TheLibrary/dCharacters.js",
    "/HonkaiSR/TheLibrary/dLightcones.js",
    "/HonkaiSR/TheLibrary/dRelicSets.js",
    "/HonkaiSR/TheLibrary/dBattleEvents.js",
    "/HonkaiSR/TheLibrary/tester.js",

    "/HonkaiSR/Calculator/statListData.js",

    "/HonkaiSR/Calculator/tooltipStorage.js",
    "/HonkaiSR/Calculator/tooltipMath.js",
    "/MainJS/Tooltips/tooltips.js",//<!-- generalized tooltip handling -->

    "compositeAbilityObject.js",

    
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalFunctionMap.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalModifierMap.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaMappingPathing.js",

    "/HonkaiSR/TheLibrary/painAndSuffering.js",
    "/HonkaiSR/Calculator/customHTMLTrees.js",
    "/HonkaiSR/Calculator/suffering6Priority.js",
    "/HonkaiSR/TheLibrary/newTester.js",

    "/MainJS/buildTime.js",
    // "/HonkaiSR/TheLibrary/vashWarning.js",
];
function loadScriptsInOrder(scripts) {
    return scripts.reduce((promise, src) => {
        return promise.then(() => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
        
                script.onload = () => {
                    console.log("load:", src);
                    resolve();
                };
        
                script.onerror = () => {reject(new Error("Couldn't load or shit broke on: " + src));};
        
                document.body.appendChild(script);
            });
        });
    },
    Promise.resolve());
}
function injectHTMLTemplateLoad(filePath,placeholderElemID) {
    return fetch(filePath)
        .then(response => response.text())
        .then(html => {document.getElementById(placeholderElemID).innerHTML = html;});
}

document.addEventListener("DOMContentLoaded", () => {
    injectHTMLTemplateLoad('/htmlTemplates/hsrDefaultEntityTemplate.html','enemyTemplateInjectable')
        .then(() => {loadScriptsInOrder(scriptsToLoad)})
        .then(() => {console.log("done loading\n\n\nIf you ever reach this point and can see errors in the console, let Vash know in discord.");})
        .catch(err => {
            console.error(err);
            alert("If you ever see this then something broke on the page load.\n\nPress F12 to open the console, screenshot any errors you see after closing this message, then make a post in #website-forum in the discord to let Vash know.")
        });
})
//I HAD FORGOTTEN TO MAKE IT WAIT FOR THE HTML TEMPLATE TO FINISH LMAOOOOOO god I'm dumb sometimes.
//The irony here is that I remembered to make each script wait for the prior, just not the html at the start
//comment will remain as a badge of shame