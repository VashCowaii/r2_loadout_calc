const configAbility = {
  "fileName": "4014014_Monster_W4_Nikadory_Ability10_Part01",
  "childAbilityList": [
    "4014014_Monster_W4_Nikadory_Ability10_Camera",
    "4014014_Monster_W4_Nikadory_Ability10_Part01",
    "4014014_Monster_W4_Nikadory_Ability10_Part02"
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
      "ability": "Monster_W4_Nikadory_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}