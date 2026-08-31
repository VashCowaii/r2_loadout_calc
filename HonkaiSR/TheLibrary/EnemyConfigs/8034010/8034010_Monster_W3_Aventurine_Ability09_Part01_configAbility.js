const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability09_Part01",
  "childAbilityList": [
    "8034010_Monster_W3_Aventurine_Ability09_Camera",
    "8034010_Monster_W3_Aventurine_Ability09_Part01",
    "8034010_Monster_W3_Aventurine_Ability09_Part02"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_W3_Aventurine_Ability09_Part02",
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