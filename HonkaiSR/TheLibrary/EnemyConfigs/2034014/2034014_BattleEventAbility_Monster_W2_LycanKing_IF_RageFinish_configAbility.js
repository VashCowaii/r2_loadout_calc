const configAbility = {
  "fileName": "2034014_BattleEventAbility_Monster_W2_LycanKing_IF_RageFinish",
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
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 4
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__167"
          }
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
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
        }
      ]
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
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1180885897\">Enemy_W2_LycanKing_IF_ProtectWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Turn Is",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "adjustmentType": "="
        }
      ],
      "failed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player & Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}