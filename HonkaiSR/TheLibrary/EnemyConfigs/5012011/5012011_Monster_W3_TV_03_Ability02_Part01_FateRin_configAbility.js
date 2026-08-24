const configAbility = {
  "fileName": "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin",
  "childAbilityList": [
    "5012011_Monster_W3_TV_03_Ability02_Part01_FateRin",
    "5012011_Monster_W3_TV_03_Ability02_Part02_FateRin",
    "5012011_Monster_W3_TV_03_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_TV_03_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}