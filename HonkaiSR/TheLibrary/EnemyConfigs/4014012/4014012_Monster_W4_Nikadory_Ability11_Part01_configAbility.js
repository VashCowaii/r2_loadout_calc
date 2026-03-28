const configAbility = {
  "fileName": "4014012_Monster_W4_Nikadory_Ability11_Part01",
  "childAbilityList": [
    "4014012_Monster_W4_Nikadory_Ability11_Camera",
    "4014012_Monster_W4_Nikadory_Ability11_Part01",
    "4014012_Monster_W4_Nikadory_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
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
      "ability": "Monster_W4_Nikadory_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}