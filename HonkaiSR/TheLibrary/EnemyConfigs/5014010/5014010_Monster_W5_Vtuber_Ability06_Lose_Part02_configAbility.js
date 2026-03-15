const configAbility = {
  "fileName": "5014010_Monster_W5_Vtuber_Ability06_Lose_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>",
      "variableName": "MDF_Phase1",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1092944424\">W5_Vtuber_BattleScore2</a>"
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
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
      "name": "Shot Fired",
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Projectile's Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Projectile's Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
              "displayLines": "{[Skill06[2]]}",
              "constants": [],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Projectile's Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill06[6]]}) || RETURN",
              "displayLines": "{[Skill06[6]]}",
              "constants": [],
              "variables": [
                "{[Skill06[6]]}"
              ]
            },
            "Modifier_Entangle_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[7]]}) || RETURN",
              "displayLines": "{[Skill06[7]]}",
              "constants": [],
              "variables": [
                "{[Skill06[7]]}"
              ]
            },
            "Modifier_Entangle_DamageValue": 0
          }
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": -1
    }
  ],
  "references": []
}