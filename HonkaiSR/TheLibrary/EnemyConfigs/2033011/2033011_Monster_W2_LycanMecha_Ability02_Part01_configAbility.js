const configAbility = {
  "fileName": "2033011_Monster_W2_LycanMecha_Ability02_Part01",
  "childAbilityList": [
    "2033011_Monster_W2_LycanMecha_Ability02_Camera",
    "2033011_Monster_W2_LycanMecha_Ability02_Part01",
    "2033011_Monster_W2_LycanMecha_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W2_LycanMecha_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}