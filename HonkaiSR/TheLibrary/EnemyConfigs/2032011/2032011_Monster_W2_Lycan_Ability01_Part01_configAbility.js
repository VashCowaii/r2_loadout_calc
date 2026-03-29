const configAbility = {
  "fileName": "2032011_Monster_W2_Lycan_Ability01_Part01",
  "childAbilityList": [
    "2032011_Monster_W2_Lycan_Ability01_Camera",
    "2032011_Monster_W2_Lycan_Ability01_Part01",
    "2032011_Monster_W2_Lycan_Ability01_Part02"
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
      "ability": "Monster_W2_Lycan_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  },
  "references": []
}