const configAbility = {
  "fileName": "2033011_Monster_W2_LycanMecha_Ability05_Part01",
  "childAbilityList": [
    "2033011_Monster_W2_LycanMecha_Ability05_Camera",
    "2033011_Monster_W2_LycanMecha_Ability05_Part01",
    "2033011_Monster_W2_LycanMecha_Ability05_Part02"
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
      "ability": "Monster_W2_LycanMecha_Ability05_Part02",
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