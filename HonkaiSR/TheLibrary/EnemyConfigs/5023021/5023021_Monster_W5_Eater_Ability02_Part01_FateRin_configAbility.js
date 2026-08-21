const configAbility = {
  "fileName": "5023021_Monster_W5_Eater_Ability02_Part01_FateRin",
  "childAbilityList": [
    "5023021_Monster_W5_Eater_Ability02_Camera",
    "5023021_Monster_W5_Eater_Ability02_Part01_FateRin",
    "5023021_Monster_W5_Eater_Ability02_Part02_FateRin"
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
      "ability": "Monster_W5_Eater_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "allowMemoHostileTarget": "Forbidden"
  },
  "references": []
}