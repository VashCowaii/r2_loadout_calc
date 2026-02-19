const configAbility = {
  "fileName": "2034014_BattleEventAbility_Monster_W2_LycanKing_IF_StanceDamage",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] ({[SkillP03[4]]}) || Variables[1] (LycanDieCount) || MUL || RETURN",
        "displayLines": "({[SkillP03[4]]} * LycanDieCount)",
        "constants": [],
        "variables": [
          "{[SkillP03[4]]}",
          "LycanDieCount"
        ]
      },
      "attackType": "Pursued",
      "DamageType": {
        "name": "Damage Type Source",
        "sourceType": "AllType"
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[SkillP03[3]]}) || Variables[1] (LycanDieCount) || MUL || RETURN",
        "displayLines": "({[SkillP03[3]]} * LycanDieCount)",
        "constants": [],
        "variables": [
          "{[SkillP03[3]]}",
          "LycanDieCount"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "forceReduction": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (LycanDieCount) || RETURN",
        "displayLines": "LycanDieCount",
        "constants": [],
        "variables": [
          "LycanDieCount"
        ]
      },
      "Event": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"729115226\">Enemy_W2_LycanKing_IF_LycanTriggerDeath</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "LycanDieCount",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Target__Toughness",
            "compareType": "<=",
            "value2": 0
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1775147687\">RedStanceState</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1796036529\">StanceBreak_Thunder</a>",
              "variables": {}
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player & Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Wolf_AttackCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__167"
          },
          "ifTargetFound": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                "displayLines": "Wolf_AttackCount",
                "constants": [],
                "variables": [
                  "Wolf_AttackCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "maximum": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              },
              "assignState": "True",
              "state": "Normal"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-149187790\">Lycanking_SummonLycan</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>"
        }
      ]
    }
  ],
  "references": []
}