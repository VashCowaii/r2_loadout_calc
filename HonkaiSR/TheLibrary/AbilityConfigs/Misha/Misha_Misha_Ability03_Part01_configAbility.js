const configAbility = {
  "fileName": "Misha_Misha_Ability03_Part01",
  "childAbilityList": [
    "Misha_Misha_Ability03_Camera",
    "Misha_Misha_Ability03_EnterReady",
    "Misha_Misha_Ability03_Part01",
    "Misha_Misha_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    10,
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
      "ability": "Misha_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}