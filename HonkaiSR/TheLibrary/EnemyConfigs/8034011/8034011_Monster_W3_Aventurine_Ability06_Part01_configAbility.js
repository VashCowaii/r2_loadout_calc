const configAbility = {
  "fileName": "8034011_Monster_W3_Aventurine_Ability06_Part01",
  "childAbilityList": [
    "8034011_Monster_W3_Aventurine_Ability06_Camera",
    "8034011_Monster_W3_Aventurine_Ability06_Part01",
    "8034011_Monster_W3_Aventurine_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_Aventurine_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}