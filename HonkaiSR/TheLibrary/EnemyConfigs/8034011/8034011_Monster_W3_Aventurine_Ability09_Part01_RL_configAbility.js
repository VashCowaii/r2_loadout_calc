const configAbility = {
  "fileName": "8034011_Monster_W3_Aventurine_Ability09_Part01_RL",
  "childAbilityList": [
    "8034011_Monster_W3_Aventurine_Ability09_Camera_RL",
    "8034011_Monster_W3_Aventurine_Ability09_Part01_RL",
    "8034011_Monster_W3_Aventurine_Ability09_Part02_RL"
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
      "ability": "Monster_W3_Aventurine_Ability09_Part02_RL",
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