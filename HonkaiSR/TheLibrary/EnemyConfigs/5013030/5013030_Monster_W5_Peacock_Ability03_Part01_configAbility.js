const configAbility = {
  "fileName": "5013030_Monster_W5_Peacock_Ability03_Part01",
  "childAbilityList": [
    "5013030_Monster_W5_Peacock_Ability03_Camera",
    "5013030_Monster_W5_Peacock_Ability03_Part01",
    "5013030_Monster_W5_Peacock_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W5_Peacock_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
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