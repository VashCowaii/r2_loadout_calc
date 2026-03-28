const configAbility = {
  "fileName": "4014014_Monster_W4_Nikadory_Ability02_Part01",
  "childAbilityList": [
    "4014014_Monster_W4_Nikadory_Ability02_Camera",
    "4014014_Monster_W4_Nikadory_Ability02_Part01",
    "4014014_Monster_W4_Nikadory_Ability02_Part02"
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
      "ability": "Monster_W4_Nikadory_Ability02_Part02",
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