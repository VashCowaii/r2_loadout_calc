const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability01_Part01",
  "childAbilityList": [
    "8034010_Monster_W3_Aventurine_Ability01_Camera",
    "8034010_Monster_W3_Aventurine_Ability01_Part01",
    "8034010_Monster_W3_Aventurine_Ability01_Part02"
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
      "ability": "Monster_W3_Aventurine_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}