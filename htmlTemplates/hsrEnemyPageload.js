function injectHTMLTemplateLoad(filePath,placeholderElemID) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {document.getElementById(placeholderElemID).innerHTML = html;});
}
injectHTMLTemplateLoad('/htmlTemplates/hsrEnemyTemplate.html','enemyTemplateInjectable')


const scriptsToLoad = [
    "/htmlTemplates/injectMainHTML.js",//<!-- sidenav and footer -->
    "/htmlTemplates/injectHSRHTML.js",//<!-- TFD Header -->
    "/htmlTemplates/adjustMobileNav.js",

    "/HonkaiSR/TheLibrary/dLightcones.js",
    "/HonkaiSR/TheLibrary/dRelicSets.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/tester.js",

    "/HonkaiSR/Calculator/statListData.js",

    "/HonkaiSR/Calculator/tooltipStorage.js",
    "/HonkaiSR/Calculator/tooltipMath.js",
    "/MainJS/Tooltips/tooltips.js",//<!-- generalized tooltip handling -->

    "/HonkaiSR/TheLibrary/dEnemyAbilities.js",
    "/HonkaiSR/TheLibrary/dExtraEffects.js",
    "/HonkaiSR/TheLibrary/dEnemyImages.js",
    "/HonkaiSR/TheLibrary/dScaleElite.js",
    "/HonkaiSR/TheLibrary/dScaleHard.js",
    "/HonkaiSR/TheLibrary/dScaleInfinite.js",

    "dEnemyData.js",
    "compositeAbilityObject.js",

    "/HonkaiSR/TheLibrary/painAndSuffering.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalFunctionMap.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaGlobalModifierMap.js",
    "/HonkaiSR/TheLibrary/EnemyConfigs/dMegaMappingPathing.js",

    "/HonkaiSR/TheLibrary/EnemyConfigs/newTester.js",
    

    "/MainJS/buildTime.js",
    "/HonkaiSR/TheLibrary/vashWarning.js",
];
function loadScriptsInOrder(scripts) {
    return scripts.reduce((promise, src) => {
        return promise.then(() => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = false;
        
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
loadScriptsInOrder(scriptsToLoad)
    .then(() => {console.log("done loading\n\n\nIf you ever reach this point and can see errors in the console, let Vash know in discord.");})
    .catch(err => {
        console.error(err);
        alert("asdf")
    });