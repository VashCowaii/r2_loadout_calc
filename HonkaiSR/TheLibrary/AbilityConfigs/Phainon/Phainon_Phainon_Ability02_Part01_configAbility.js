const configAbility = {
  "fileName": "Phainon_Phainon_Ability02_Part01",
  "childAbilityList": [
    "Phainon_Phainon_Ability02_Part01",
    "Phainon_Phainon_Ability02_Part02",
    "Phainon_Phainon_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    20,
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
      "ability": "Phainon_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}