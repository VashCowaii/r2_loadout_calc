const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability02_Part01",
  "childAbilityList": [
    "Feixiao_Feixiao_Ability02_Camera",
    "Feixiao_Feixiao_Ability02_Part01",
    "Feixiao_Feixiao_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    20,
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
      "ability": "Feixiao_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "MuteHitFly"
      }
    }
  ],
  "references": []
}