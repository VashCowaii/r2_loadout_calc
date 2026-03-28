const configAbility = {
  "fileName": "2035011_Monster_W2_Feixiao_Ability07_Part01",
  "childAbilityList": [
    "2035011_Monster_W2_Feixiao_Ability07_Camera",
    "2035011_Monster_W2_Feixiao_Ability07_Part01",
    "2035011_Monster_W2_Feixiao_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W2_Feixiao_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}