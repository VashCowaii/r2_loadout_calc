//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

function bunnyStonkiesCalc() {
    const basePowerModifier = (readSelection("USEHighVoltage").checked ? 250.5 : 148.7)/100;
    const baseDotModifier = (readSelection("USEHighVoltage").checked ? 89.5 : 53.1)/100;
    const sumModifierBonus = +readSelection("skillPowerModifier").value + +readSelection("electricPowerModifier").value + +readSelection("singularPowerModifier").value;
    const skillPowerModifier = basePowerModifier + sumModifierBonus;
    const skillPowerModifierDot = baseDotModifier + sumModifierBonus;

    const reactorOptimizationBonus = readSelection("USEReactorOptimization").checked ? 1.6 : 1;
    const basePowerRatio = 1 + +readSelection("basePowerRatio").value;
    const electricPowerRatio = 1 + +readSelection("electricPowerRatio").value;
    const singularPowerRatio = 1 + +readSelection("singularPowerRatio").value;

    const elecBarBonus = 2.35;//Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
    // const barFilledAmount = 1 + ((+readSelection("barFilledSlider").value/10)*0.15) //TODO: this line might be used later to dynamically state the fill % if we know exactly how the scaling thresholds are set
    readSelection("barBonus").innerHTML = elecBarBonus + "x";

    //We're assuming you're using a fully enhanced reactor.
    const baseSkillPower = 11724.62 * reactorOptimizationBonus * electricPowerRatio * singularPowerRatio * basePowerRatio;

    const critRate = +readSelection("skillCritRate").value/100;
    const critDamage = +readSelection("skillCritDamage").value;
    const critComposite = 1 + (critRate * (critDamage-1));

    const dmgPerHit = baseSkillPower * skillPowerModifier * elecBarBonus;
    const dmgPerTick = baseSkillPower * skillPowerModifierDot;
    const dmgPerHitCrit = dmgPerHit * critDamage;
    const dmgPerTickCrit = dmgPerTick * critDamage;
    const dmgPerHitAvg = dmgPerHit * critComposite;
    const dmgPerTickAvg = dmgPerTick * critComposite;

    //bunny hits every 0.9 seconds when sprinting normally, and 0.6 seconds when using speed of light.
    //this is with an 800 sprint speed weapon though TODO: possibly look into how weapon speed modifies sprint speed, if it isn't negligible
    //when SOL is active, supposedly you're maxed at 800 MS regardless, so the only dps loss could be for normal sprints
    const hitsPerSecondSpeed = 0.6;
    const hitsPerSecond = 0.9;

    const costModifier = 1 + +readSelection("skillCostModifier").value;
    const drainRate = 25 * costModifier;
    const startCost = 12 * costModifier;
    const maxMP = +readSelection("maxMP").value;

    const speedDuration = (maxMP - startCost)/drainRate;
    const thirdHits = Math.floor(speedDuration/hitsPerSecondSpeed);

    const dpsNormalHits = dmgPerHitAvg * hitsPerSecond;
    const dpsNormalTicks = dmgPerTickAvg; 
    const dpsNormalSum = dpsNormalHits + dpsNormalTicks;//sum total avg dps when doing NORMAL SPRINT

    const dpsSpeedHits = (dmgPerHitAvg * thirdHits)/speedDuration;
    const dpsSpeedSum = dpsSpeedHits + dpsNormalTicks;//sum total avg dps when doing SPEED OF LIGHT

    const speedTotalDmgAvg = (dpsNormalTicks * speedDuration) + (dmgPerHitAvg * thirdHits);

    readSelection("initialCost").innerHTML = startCost.toFixed(2) + "MP";
    readSelection("drainRate").innerHTML = drainRate.toFixed(2) + "MP/s";
    readSelection("speedDuration").innerHTML = speedDuration.toFixed(2) + "s";

    readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;
    readSelection("powerModifier").innerHTML = `${(sumModifierBonus*100).toLocaleString()}%`;

    readSelection("dmgPerShot").innerHTML = `${dmgPerHit.toLocaleString()}`;
    readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
    readSelection("averageSum").innerHTML = `${dpsNormalHits.toLocaleString()}`;

    readSelection("dmgPerTick").innerHTML = `${dmgPerTick.toLocaleString()}`;
    readSelection("critPerTick").innerHTML = `${dmgPerTickCrit.toLocaleString()}`;
    readSelection("averageSumTicks").innerHTML = `${dpsNormalTicks.toLocaleString()}`;

    readSelection("normalSprintAvgSum").innerHTML = `${dpsNormalSum.toLocaleString()}`;
    readSelection("speedSprintAvgSum").innerHTML = `${dpsSpeedSum.toLocaleString()}`;

    readSelection("speedSprintAvgDamage").innerHTML = `${speedTotalDmgAvg.toLocaleString()}`;

    readSelection("speedHitRate").innerHTML = (1/hitsPerSecondSpeed).toFixed(2) + "/s";
    readSelection("sprintHitRate").innerHTML = (1/hitsPerSecond).toFixed(2) + "/s";
}


function updateTFDFormulas() {

    bunnyStonkiesCalc();
}

updateTFDFormulas();