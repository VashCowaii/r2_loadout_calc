const configAbility = {
  "fileName": "Luka_Luka_Ability02_Part01",
  "childAbilityList": [
    "Luka_Luka_Ability02_Part01",
    "Luka_Luka_Ability02_Part02",
    "Luka_Luka_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Luka_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}