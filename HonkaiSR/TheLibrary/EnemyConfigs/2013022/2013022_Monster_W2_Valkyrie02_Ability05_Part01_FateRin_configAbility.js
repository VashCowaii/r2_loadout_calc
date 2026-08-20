const configAbility = {
  "fileName": "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin",
  "childAbilityList": [
    "2013022_Monster_W2_Valkyrie02_Ability05_Part01_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
    "2013022_Monster_W2_Valkyrie02_Ability04_Insert_Camera"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_W2_Valkyrie02_Ability05_Part02_FateRin",
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