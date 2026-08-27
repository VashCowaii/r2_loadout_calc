const configAbility = {
  "fileName": "8033020_Monster_W4_Claymore_04_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W4_Claymore_04_Skill04Mark",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2082088888\">Modifier_Monster_W4_Claymore_04_Ability03_Charge_ForShow</a>[<span class=\"descriptionNumberColor\">Smite Evil</span>]"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "MDF_Layer",
      "modifierName": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]",
      "multiplier": 1
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (1) || Variables[1] ({[Skill04[1]]}) || Variables[2] (MDF_Layer) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * (1 + ({[Skill04[1]]} * MDF_Layer)))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[1]]}",
            "MDF_Layer"
          ]
        },
        "HitSplit": 0.2,
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (1) || Variables[1] ({[Skill04[1]]}) || Variables[2] (MDF_Layer) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * (1 + ({[Skill04[1]]} * MDF_Layer)))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[1]]}",
            "MDF_Layer"
          ]
        },
        "HitSplit": 0.2,
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (1) || Variables[1] ({[Skill04[1]]}) || Variables[2] (MDF_Layer) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * (1 + ({[Skill04[1]]} * MDF_Layer)))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[1]]}",
            "MDF_Layer"
          ]
        },
        "HitSplit": 0.2,
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (1) || Variables[1] ({[Skill04[1]]}) || Variables[2] (MDF_Layer) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * (1 + ({[Skill04[1]]} * MDF_Layer)))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[1]]}",
            "MDF_Layer"
          ]
        },
        "HitSplit": 0.2,
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (1) || Variables[1] ({[Skill04[1]]}) || Variables[2] (MDF_Layer) || MUL || ADD || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * (1 + ({[Skill04[1]]} * MDF_Layer)))",
          "constants": [
            1
          ],
          "variables": [
            "{[Skill04[0]]}",
            "{[Skill04[1]]}",
            "MDF_Layer"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill04[2]]}"
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-374062983\">Modifier_Monster_W4_Claymore_04_Ability03_Charge</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W4_Claymore_04_Skill04Mark",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}