const configAbility = {
  "fileName": "2004022_Monster_W2_Yanqing_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "({[Skill04[1]]} * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "({[Skill04[1]]} * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.4) || MUL || RETURN",
          "displayLines": "({[Skill04[0]]} * 0.4)",
          "constants": [
            0.4
          ],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "40%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.4) || MUL || RETURN",
          "displayLines": "({[Skill04[1]]} * 0.4)",
          "constants": [
            0.4
          ],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "40%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}