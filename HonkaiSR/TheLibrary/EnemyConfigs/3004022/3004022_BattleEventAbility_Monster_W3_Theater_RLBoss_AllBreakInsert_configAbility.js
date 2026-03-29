const configAbility = {
  "fileName": "3004022_BattleEventAbility_Monster_W3_Theater_RLBoss_AllBreakInsert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Dinosaur_00"
          }
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                "displayLines": "{[SkillEX03[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX03[0]]}"
                ]
              },
              "adjustmentType": "Advance"
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[SkillEX03[0]]}"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
            "displayLines": "{[SkillEX03[1]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[1]]}"
            ]
          },
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "AllType"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}