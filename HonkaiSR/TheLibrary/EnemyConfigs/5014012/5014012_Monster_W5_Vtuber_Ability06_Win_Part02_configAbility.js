const configAbility = {
  "fileName": "5014012_Monster_W5_Vtuber_Ability06_Win_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>",
          "variableName": "MDF_Phase1",
          "value": 1
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
          "variableName": "MDF_Suc",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>",
          "variableName": "MDF_Phase2",
          "value": 1
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
          "variableName": "MDF_Suc",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1143277281\">W5_Vtuber_BattleScore1</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1797863602\">Monster_W5_Vtuber_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Tilted</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
        "displayLines": "{[Skill06[1]]}",
        "constants": [],
        "variables": [
          "{[Skill06[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
          ]
        }
      }
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill06[8]]}"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                "displayLines": "{[Skill06[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[5]]}"
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "In Aha-Instant"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBuffOthers",
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterForceKill",
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill06[8]]}"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": -1
    }
  ],
  "references": []
}