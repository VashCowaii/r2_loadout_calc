const configAbility = {
  "fileName": "70001_BattleEventAbility_Elation_Ability04_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Unbind Unique Name",
      "identifier": "Target_Elation"
    },
    {
      "name": "Assign Unique Name",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "identifier": "Target_Elation"
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