const configAbility = {
  "fileName": "3024023_Monster_W3_Sam_RLBoss_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": ">=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 2
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
    },
    {
      "name": "Define Custom Variable with Skill Point Max",
      "variableName": "MaxBP"
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (MaxBP) || RETURN",
        "displayLines": "MaxBP",
        "constants": [],
        "variables": [
          "MaxBP"
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "Set SkillPoint Mechanic",
      "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
      "isRemove": true
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "assignState": "False"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1431346612\">Monster_W3_Sam_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "valuePerStack": {
        "MDF_DamageTakenUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
          "displayLines": "{[Skill04[4]]}",
          "constants": [],
          "variables": [
            "{[Skill04[4]]}"
          ]
        }
      }
    },
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
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Trigger 0-Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertSpecial",
      "value": 0
    }
  ],
  "references": []
}