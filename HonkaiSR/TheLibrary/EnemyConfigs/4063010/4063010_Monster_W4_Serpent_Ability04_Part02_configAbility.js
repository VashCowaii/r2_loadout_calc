const configAbility = {
  "fileName": "4063010_Monster_W4_Serpent_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill04_AttackCount"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "Skill04_AttackCount",
      "modifierName": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
      "multiplier": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
          "displayLines": "{[Skill04[1]]}",
          "constants": [],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
          "displayLines": "{[Skill04[3]]}",
          "constants": [],
          "variables": [
            "{[Skill04[3]]}"
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "display": 0,
      "trigger": "SpEff_Trigger"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
          "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[4]]}",
            "Skill04_AttackCount"
          ]
        },
        "HitSplit": 0.4,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}