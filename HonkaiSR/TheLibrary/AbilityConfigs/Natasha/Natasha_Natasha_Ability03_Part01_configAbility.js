const configAbility = {
  "fileName": "Natasha_Natasha_Ability03_Part01",
  "childAbilityList": [
    "Natasha_Natasha_Ability03_Camera",
    "Natasha_Natasha_Ability03_EnterReady",
    "Natasha_Natasha_Ability03_Part01",
    "Natasha_Natasha_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "Natasha_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}