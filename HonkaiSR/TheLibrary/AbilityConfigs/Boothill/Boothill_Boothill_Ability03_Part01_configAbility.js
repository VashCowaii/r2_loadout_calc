const configAbility = {
  "fileName": "Boothill_Boothill_Ability03_Part01",
  "childAbilityList": [
    "Boothill_Boothill_Ability03_Camera",
    "Boothill_Boothill_Ability03_Part01",
    "Boothill_Boothill_Ability03_Part02",
    "Boothill_Boothill_Ability03_EnterReady"
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
      "ability": "Boothill_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Entity a Part/Body Extension",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    }
  ],
  "references": []
}