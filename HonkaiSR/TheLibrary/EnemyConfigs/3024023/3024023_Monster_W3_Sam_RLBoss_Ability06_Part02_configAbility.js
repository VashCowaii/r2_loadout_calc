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
          "value": 2,
          "variableName": "AIFlag"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "value": 1,
          "variableName": "AIFlag"
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
        "displayLines": "MaxBP"
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
          "displayLines": "{[Skill04[4]]}"
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
          },
          "bypassBreakMute": true
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "InsertCheck"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "InsertSpecial"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}