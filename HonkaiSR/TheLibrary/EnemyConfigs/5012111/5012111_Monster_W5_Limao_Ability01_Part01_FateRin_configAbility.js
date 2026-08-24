const configAbility = {
  "fileName": "5012111_Monster_W5_Limao_Ability01_Part01_FateRin",
  "childAbilityList": [
    "5012111_Monster_W5_Limao_Ability01_Part01_FateRin",
    "5012111_Monster_W5_Limao_Ability01_Part02_FateRin",
    "5012111_Monster_W5_Limao_Ability01_Camera_FateRin"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W5_Limao_Ability01_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit",
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