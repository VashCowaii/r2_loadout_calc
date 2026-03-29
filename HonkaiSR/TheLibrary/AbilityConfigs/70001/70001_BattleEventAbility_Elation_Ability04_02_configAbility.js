const configAbility = {
  "fileName": "70001_BattleEventAbility_Elation_Ability04_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Unbind Unique Name",
      "uniqueName": "Target_Elation"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "Target_Elation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_SkillCount",
        "compareType": ">",
        "value2": 4
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_SkillCount",
        "compareType": ">",
        "value2": 4
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}