const configAbility = {
  "fileName": "60030_MissionBattleEvent60030_Ability03_EnterReady",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_ViewMode",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_StoryMode",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "#CL_First",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Animation Logic",
            "logicName": "SkillReady"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_First",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Animation Logic",
        "logicName": "SkillReady"
      },
      "passed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}