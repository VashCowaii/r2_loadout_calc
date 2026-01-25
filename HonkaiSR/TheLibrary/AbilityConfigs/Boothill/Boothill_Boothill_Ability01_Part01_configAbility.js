const configAbility = {
  "fileName": "Boothill_Boothill_Ability01_Part01",
  "childAbilityList": [
    "Boothill_Boothill_Ability01_Camera",
    "Boothill_Boothill_Ability01_Part01",
    "Boothill_Boothill_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
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
      "ability": "Boothill_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}