const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "S01_T_PTN",
      "value": {
        "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
        "displayLines": "_Partner_Count_Show",
        "constants": [],
        "variables": [
          "_Partner_Count_Show"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "S01_HitCount",
      "value": 0
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "S01_T_PTN",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (_Partner_CountThresHold) || RETURN",
          "displayLines": "_Partner_CountThresHold",
          "constants": [],
          "variables": [
            "_Partner_CountThresHold"
          ]
        }
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "S01_T_PTN",
          "value": {
            "operator": "Variables[0] (S01_T_PTN) || Variables[1] (_Partner_CountThresHold) || SUB || RETURN",
            "displayLines": "(S01_T_PTN - _Partner_CountThresHold)",
            "constants": [],
            "variables": [
              "S01_T_PTN",
              "_Partner_CountThresHold"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S01_HitCount",
          "value": {
            "operator": "Variables[0] (S01_HitCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(S01_HitCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "S01_HitCount"
            ]
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
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
          "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
          "displayLines": "(0.5 + (S01_HitCount * 0.1))",
          "constants": [],
          "variables": [
            0.5,
            "S01_HitCount",
            0.1
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_Count",
      "value": {
        "operator": "Variables[0] (_Partner_Count_Show) || Variables[1] (1) || ADD || Variables[2] (_Evernight_00_Extra_Energy) || ADD || RETURN",
        "displayLines": "((_Partner_Count_Show + 1) + _Evernight_00_Extra_Energy)",
        "constants": [],
        "variables": [
          "_Partner_Count_Show",
          1,
          "_Evernight_00_Extra_Energy"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
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
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}