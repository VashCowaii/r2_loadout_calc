const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_007_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Constants[0] (800206100) || RETURN",
            "displayLines": "800206100",
            "constants": [
              800206100
            ],
            "variables": []
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 4,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED_8"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1349202594\">MStrongChallengeEX_Talent_StageAbility_BOSS_007_Trigger</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (PropertyValue) || RETURN",
              "displayLines": "PropertyValue",
              "constants": [],
              "variables": [
                "PropertyValue"
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (LifeTime) || RETURN",
              "displayLines": "LifeTime",
              "constants": [],
              "variables": [
                "LifeTime"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (MaxLayer) || RETURN",
              "displayLines": "MaxLayer",
              "constants": [],
              "variables": [
                "MaxLayer"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}