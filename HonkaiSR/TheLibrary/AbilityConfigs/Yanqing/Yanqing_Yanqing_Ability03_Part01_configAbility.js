const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability03_Part01",
  "childAbilityList": [
    "Yanqing_Yanqing_Ability03_Camera",
    "Yanqing_Yanqing_Ability03_EnterReady",
    "Yanqing_Yanqing_Ability03_Part01",
    "Yanqing_Yanqing_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Yanqing_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}