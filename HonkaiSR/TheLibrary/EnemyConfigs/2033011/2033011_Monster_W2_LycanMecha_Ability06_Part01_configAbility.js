const configAbility = {
  "fileName": "2033011_Monster_W2_LycanMecha_Ability06_Part01",
  "childAbilityList": [
    "2033011_Monster_W2_LycanMecha_Ability06_Camera",
    "2033011_Monster_W2_LycanMecha_Ability06_Part01",
    "2033011_Monster_W2_LycanMecha_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W2_LycanMecha_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}