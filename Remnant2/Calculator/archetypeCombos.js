// //class title combos that display above the prime perk
let archetypeCombos = {
    getTitleCombo(arch1,arch2) {
        let first,second;
        const arch1Path = classInfo[arch1];
        const arch2Path = classInfo[arch2];
        const arch1ID = arch1Path.placementID;
        const arch2ID = arch2Path.placementID;

        if (arch1 === "" || arch2 === "") {return arch1Path.primePerk}

        if (+arch1ID < +arch2ID) {first = arch1ID; second = arch2ID;}
        else {first = arch2ID; second = arch1ID;}

        const compositeID = `${first}${second}`;
        if (archetypeCombos.titleCombos[compositeID]) {return `${arch1Path.primePerk} ${archetypeCombos.titleCombos[compositeID]}`}
        else {
            alert(`There was an undefined archetype combo ID, join the discord and let Vash know if you ever see this.\n\narchetypeCombos.getTitleCombo(${arch1},${arch2})`);
            return "ERROR";
        }
    },
    "titleCombos": {
        "0102": "THAUMATURGE", //Alchemist Archon
        "0103": "CONSERVATOR", //Alchemist Challenger
        "0104": "ARTIFICER", //Alchemist Engineer
        "0105": "APOTHECARY", //Alchemist Explorer
        "0106": "LEADBRINGER", //Alchemist Gunslinger
        "0107": "GREY WOLF", //Alchemist Handler
        "0108": "ISOLATOR", //Alchemist Hunter
        "0109": "TRICKSTER", //Alchemist Invader
        "0110": "SPIRIT OF ALCHEMY", //Alchemist Invoker
        "0111": "SHAMAN", //Alchemist Medic
        "0112": "DIABOLIST", //Alchemist Ritualist
        "0113": "CONJURER", //Alchemist Summoner

        "0203": "ARBITER", //Challenger Archon
        "0204": "LUMINARY", //Engineer Archon
        "0205": "TRAILBLAZER", //Explorer Archon
        "0206": "FIREBRAND", //Gunslinger Archon
        "0207": "HARRIER", //Handler Archon
        "0208": "VANQUISHER", //Hunter Archon
        "0209": "RUINER", //Invader Archon
        "0210": "SPIRIT OF POWER", //Archon Invoker
        "0211": "VIRTUOSO", //Medic Archon
        "0212": "HARBINGER", //Archon Ritualist
        "0213": "AUGUR", //Summoner Archon

        "0304": "SENTINEL", //Challenger Engineer
        "0305": "CRUSADER", //Challenger Explorer
        "0306": "MERCENARY", //Challenger Gunslinger
        "0307": "BULLDOG", //Challenger Handler
        "0308": "SOLDIER", //Challenger Hunter
        "0309": "DESTROYER", //Challenger Invader
        "0310": "SPIRIT OF COMBAT", //Challenger Invoker
        "0311": "GUARDIAN", //Challenger Medic
        "0312": "WARLORD", //Challenger Ritualist
        "0313": "OVERSEER", //Challenger Summoner

        "0405": "PIONEER", //Explorer Engineer
        "0406": "BARRELSMITH", //Gunslinger Engineer
        "0407": "ROUGHNECK", //Handler Engineer
        "0408": "TACTICIAN", //Hunter Engineer
        "0409": "OPERATOR", //Engineer Invader
        "0410": "SPIRIT OF CREATION", //Engineer Invoker
        "0411": "SPECIALIST", //Medic Engineer
        "0412": "WRECKER", //Engineer Ritualist
        "0413": "MASTERMIND", //Summoner Engineer
        
        "0506": "RAIDER", //Explorer Gunslinger
        "0507": "BLOODHOUND", //Explorer Handler
        "0508": "OUTRIDER", //Explorer Hunter
        "0509": "MARAUDER", //Explorer Invader
        "0510": "SPIRIT OF WONDER", //Explorer Invoker
        "0511": "SURVIVALIST", //Explorer Medic
        "0512": "OUTCAST", //Explorer Ritualist
        "0513": "HERALD", //Explorer Summoner

        "0607": "RIDGEBACK", //Gunslinger Handler
        "0608": "SHARPSHOOTER", //Gunslinger Hunter
        "0609": "PROFESSIONAL", //Gunslinger Invader
        "0610": "SPIRIT OF FRENZY", //Gunslinger Invoker
        "0611": "PEACEMAKER", //Gunslinger Medic
        "0612": "PUNISHER", //Gunslinger Ritualist
        "0613": "TORMENTOR", //Gunslinger Summoner

        "0708": "PREDATOR", //Handler Hunter
        "0709": "PROWLER", //Handler Invader
        "0710": "SPIRIT OF FRIENDSHIP", //Handler Invoker
        "0711": "SHEPHERD", //Handler Medic
        "0712": "HELLHOUND", //Handler Ritualist
        "0713": "BEASTMASTER", //Handler Summoner
        
        "0809": "ASSASSIN", //Hunter Invader
        "0810": "SPIRIT OF STALKING", //Hunter Invoker
        "0811": "RANGER", //Hunter Medic
        "0812": "HEADHUNTER", //Hunter Ritualist
        "0813": "PAINBRINGER", //Hunter Summoner

        "0910": "SPIRIT OF VIOLENCE", //Invader Invoker
        "0911": "BLOODLETTER", //Medic Invader
        "0912": "REAPER", //Invader Ritualist
        "0913": "TYRANT", //Summoner Invader

        "1011": "SPIRIT OF HEALING", //Medic Invoker
        "1012": "SPIRIT OF PAIN", //Ritualist Invoker
        "1013": "SPIRIT OF DARKNESS", //Summoner Invoker

        "1112": "PLAGUE DOCTOR", //Medic Ritualist
        "1113": "DEFILER", //Medic Summoner
        
        "1213": "GRAVELORD", //Summoner Ritualist
    }
}