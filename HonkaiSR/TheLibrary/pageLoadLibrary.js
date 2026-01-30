// readyCharacterCounts
// readyLightconeCounts
// readyRelicCounts
// lastVerionHSR

const totalCharacters = readyCharacterCounts.totalCharacterCount;
const readyCharacters = readyCharacterCounts.readyCharacterCount;

const totalLightcones = readyLightconeCounts.totalLightconeCount;
const readyLightcones = readyLightconeCounts.readyLightconeCount;

const totalRelics = readyRelicCounts.totalRelicCount;
const readyRelics = readyRelicCounts.readyRelicCount;


// readSelection("charactersCompletedPercent").innerHTML = `${(100 * readyCharacters / totalCharacters).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyCharacters}/${totalCharacters})`;
// readSelection("lightconesCompletedPercent").innerHTML = `${(100 * readyLightcones / totalLightcones).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyLightcones}/${totalLightcones})`;
// readSelection("relicsCompletedPercent").innerHTML = `${(100 * readyRelics / totalRelics).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyRelics}/${totalRelics})`;

readSelection("versionUpdateValue").innerHTML = `${lastVerionHSR.version}-${lastVerionHSR.date}`;
