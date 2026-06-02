const configAbility = {
  "fileName": "5014031_Monster_W5_Painter_Ability02_Part01",
  "childAbilityList": [
    "5014031_Monster_W5_Painter_Ability02_Camera",
    "5014031_Monster_W5_Painter_Ability02_Part01",
    "5014031_Monster_W5_Painter_Ability02_Part02"
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
      "ability": "Monster_W5_Painter_Ability02_Part02",
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