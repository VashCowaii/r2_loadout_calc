const configAbility = {
  "fileName": "4033012_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetNegativeHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
          "context": "ContextAbility"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
              "constants": [],
              "variables": [
                "CEIL",
                "_TargetNegativeHp"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetNegativeHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
          "context": "ContextAbility"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
              "constants": [],
              "variables": [
                "CEIL",
                "_TargetNegativeHp"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variableName": "_MonsterChangeCnt02",
      "context": "TargetEntity",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260030,
                "compareType": ">=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260036,
                "compareType": "<=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "_BattleTarget_LocalLegend_S3_1_Check",
              "value": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Set Enemy Phase",
          "mode": "Inc"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
          "priorityTag": "MonsterChangePhase",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        "compareType": "<=",
        "value2": 1,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "add": {
            "operator": "Variables[0] (_BattleTarget_LocalLegend_S3_1_Check) || RETURN",
            "displayLines": "_BattleTarget_LocalLegend_S3_1_Check",
            "constants": [],
            "variables": [
              "_BattleTarget_LocalLegend_S3_1_Check"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}