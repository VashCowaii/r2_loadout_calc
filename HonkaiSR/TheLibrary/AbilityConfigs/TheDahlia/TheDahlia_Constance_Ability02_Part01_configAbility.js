const configAbility = {
  "fileName": "TheDahlia_Constance_Ability02_Part01",
  "childAbilityList": [
    "TheDahlia_Constance_Ability02_Camera",
    "TheDahlia_Constance_Ability02_Part01",
    "TheDahlia_Constance_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    10,
    0,
    10
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Constance_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}