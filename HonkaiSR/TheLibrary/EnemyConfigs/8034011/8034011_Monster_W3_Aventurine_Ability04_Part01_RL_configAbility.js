const configAbility = {
  "fileName": "8034011_Monster_W3_Aventurine_Ability04_Part01_RL",
  "childAbilityList": [
    "8034011_Monster_W3_Aventurine_Ability04_Camera_RL",
    "8034011_Monster_W3_Aventurine_Ability04_Part01_RL",
    "8034011_Monster_W3_Aventurine_Ability04_Part02_RL"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W3_Aventurine_Ability04_Part02_RL",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "filter": {
      "name": "Target Name",
      "target": "{{Player Team All}}.[[removeMemosprite]]"
    }
  },
  "references": []
}