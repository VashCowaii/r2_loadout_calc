const configAbility = {
  "fileName": "Luka_Luka_Ability03_Part01",
  "childAbilityList": [
    "Luka_Luka_Ability03_Part01",
    "Luka_Luka_Ability03_Part02",
    "Luka_Luka_Ability03_Camera",
    "Luka_Luka_Ability03_EnterReady"
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
      "ability": "Luka_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}