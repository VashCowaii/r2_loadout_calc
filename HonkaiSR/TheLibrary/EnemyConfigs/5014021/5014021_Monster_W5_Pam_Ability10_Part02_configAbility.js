const configAbility = {
  "fileName": "5014021_Monster_W5_Pam_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "compareType": "<=",
            "value2": 3,
            "livingTargets": true
          }
        ]
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__206) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__206",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__206"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonList_ADF_1",
              "summonLocation": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__207) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__207",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__207"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonList_ADF_1",
              "summonLocation": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "compareType": "=",
            "value2": 4,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__207) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__207",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__207"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_BEAlive",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 20032,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "Pamu_Robot",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_BEAlive",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}