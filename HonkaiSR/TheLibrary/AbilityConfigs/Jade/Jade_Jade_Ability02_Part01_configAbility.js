const configAbility = {
  "fileName": "Jade_Jade_Ability02_Part01",
  "childAbilityList": [
    "Jade_Jade_Ability02_Camera",
    "Jade_Jade_Ability02_Camera_Self",
    "Jade_Jade_Ability02_Part01",
    "Jade_Jade_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
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
      "ability": "Jade_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}