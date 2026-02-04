const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with HP%",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CasterHPRatio"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Target Has Lowest/Highest Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "partOf": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
        "minOrMax": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetHPRatio"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_TargetHPRatio",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (_CasterHPRatio) || RETURN",
              "displayLines": "_CasterHPRatio",
              "constants": [],
              "variables": [
                "_CasterHPRatio"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}