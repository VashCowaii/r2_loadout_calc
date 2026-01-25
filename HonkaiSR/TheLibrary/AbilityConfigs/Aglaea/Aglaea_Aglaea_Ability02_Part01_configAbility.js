const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability02_Part01",
  "childAbilityList": [
    "Aglaea_Aglaea_Ability02_Camera",
    "Aglaea_Aglaea_Ability02_Part01",
    "Aglaea_Aglaea_Ability02_Part02",
    "Aglaea_Aglaea_Ability02_Camera_Self"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 20,
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
      "ability": "Aglaea_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}