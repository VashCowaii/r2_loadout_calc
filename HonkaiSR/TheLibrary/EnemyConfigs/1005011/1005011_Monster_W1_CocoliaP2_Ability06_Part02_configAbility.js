const configAbility = {
  "fileName": "1005011_Monster_W1_CocoliaP2_Ability06_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>"
    },
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1444596959\">Enemy_W1_CocoliaP2_Weekly</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_7828) || RETURN",
            "displayLines": "UnusedUnderThisBase_7828",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_7828"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_7824) || RETURN",
            "displayLines": "UnusedUnderThisBase_7824",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_7824"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_7834) || RETURN",
              "displayLines": "UnusedUnderThisBase_7834",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_7834"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseNormal"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1592345722\">Enemy_W1_CocoliaP2_FirstSummonSpecial</a>"
      },
      "passed": [
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
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}