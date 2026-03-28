const configAbility = {
  "fileName": "2035010_Monster_W2_Feixiao_Ability10_Part01",
  "childAbilityList": [
    "2035010_Monster_W2_Feixiao_Ability10_Camera",
    "2035010_Monster_W2_Feixiao_Ability10_Part01",
    "2035010_Monster_W2_Feixiao_Ability10_Part02"
  ],
  "skillTrigger": "Skill10",
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
      "ability": "Monster_W2_Feixiao_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}