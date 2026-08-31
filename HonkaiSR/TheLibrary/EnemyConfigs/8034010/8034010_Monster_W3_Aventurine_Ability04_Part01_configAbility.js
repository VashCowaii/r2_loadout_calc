const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability04_Part01",
  "childAbilityList": [
    "8034010_Monster_W3_Aventurine_Ability04_Camera",
    "8034010_Monster_W3_Aventurine_Ability04_Part01",
    "8034010_Monster_W3_Aventurine_Ability04_Part02"
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
      "ability": "Monster_W3_Aventurine_Ability04_Part02",
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