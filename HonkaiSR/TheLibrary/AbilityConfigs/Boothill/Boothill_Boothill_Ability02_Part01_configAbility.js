const configAbility = {
  "fileName": "Boothill_Boothill_Ability02_Part01",
  "childAbilityList": [
    "Boothill_Boothill_Ability02_Camera",
    "Boothill_Boothill_Ability02_Part01",
    "Boothill_Boothill_Ability02_Part02",
    "Boothill_Boothill_Bonus",
    "Boothill_Boothill_Bonus_Camera",
    "Boothill_Boothill_Bonus_Camera_Cut"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
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
      "ability": "Boothill_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}