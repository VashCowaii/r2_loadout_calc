const configAbility = {
  "fileName": "8032040_Monster_W5_Guardian_Ability11_Part01",
  "childAbilityList": [
    "8032040_Monster_W5_Guardian_Ability11_Camera",
    "8032040_Monster_W5_Guardian_Ability11_Part01",
    "8032040_Monster_W5_Guardian_Ability11_Part02"
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
      "ability": "Monster_W5_Guardian_Ability11_Part02",
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