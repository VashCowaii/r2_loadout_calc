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
            "displayLines": "800206100"
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
            "variableName": "ENEMIES_OBJECT_UNUSED_8"
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
              "displayLines": "PropertyValue"
            },
            "MDF_LifeTime": {
              "displayLines": "LifeTime"
            },
            "MDF_MaxLayer": {
              "displayLines": "MaxLayer"
            }
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}