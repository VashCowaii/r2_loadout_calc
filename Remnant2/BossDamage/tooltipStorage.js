const tooltipStorage = {
    "tableHeaderName": "The name of the attack. If you're confused on any name I gave an attack, click the attack name to expand a description.",
    "tableHeaderDamage": "The total damage from a single instance of the attack. If the attack is a continuous damage over time attack, this value only represents one tick of damage within the combo.",
    "tableHeaderStagger": "The stagger level of the attack.<br>1 = Flinch<br>2 = Interrupt<br>3 = Knocked to the floor",
    "tableHeaderDR": "Whether the attack ignores player DR or not. More attacks do this than you'd think.",
    "tableHeaderLethal": "Can the attack kill you no matter what? Sometimes this can be conditional, like Bruin's impale attack needs you to be at or less than 30% max health in order to instakill you.",
    "tableHeaderATKType": "Is the attack a single hit, a continuous damage over time effect, %HP?",
    "tableHeaderDMGType": "The damage type of the attack: elemental, player damage, etc.",
    "tableHeaderFrequency": "If the attack is a continuous damage over time attack, how often does it deal its damage to the player assuming it can always hit.",
    "tableHeaderDPS": "If the attack is a continuous damage over time attack, how much damage does it deal per second, factoring in its frequency?",
    "tableHeaderDuration": "If the attack is a continuous damage over time attack, how long does it last? If you see an infinity symbol, that just means that the attack can potentially last forever or as long as the player wants it to.",
    "tableHeaderTotalDMG": "If the attack is a continuous damage over time attack, and if it has a fixed duration, how much total damage will it deal over the total duration?",


    "spitefulExplainer": "Spiteful increases boss damage for every 10%HP they are missing. It doesn't actually reach a 25% buff, but rather just beneath it. Use the boss HP slider after toggling spiteful on, to change the spiteful bonus.",
    "bossBuffExplainer": "Right now the only boss that actually buffs himself is Ravager with a multiplicative 10% bonus, granted it doesn't actually buff every single one of his attacks.",
    "selectedBossImage": "Boss images provided by ConRaven",
    "difficultyDisclaimer": "All values shown are gained from Apocalypse, WL21. We've mathed out how world level changes enemy damage, as well as how difficulty scales it as well, but not all attacks adhere to these alone. A good example would be Bruin's impale since it has distinct difficulty scalars separate from the general difficulty scalars and I don't account for those less than Apoc level, not yet at least.<br><br> TLDR: The values shown are only perfectly accurate on apoc WL21, if you lower the difficulty or WL, values may not always be 100% correct but will be in most cases.",
};