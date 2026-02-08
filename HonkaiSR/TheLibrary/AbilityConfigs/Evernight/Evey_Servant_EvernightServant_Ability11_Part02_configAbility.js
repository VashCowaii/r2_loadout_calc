const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1418513049\">Memosprite_EvernightServant_TriggerDeathrattle</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"339150756\">Evernight_UltraMode_Energy</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1643770860\">Evernight_UltraMode_Energy_Cost</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1586544037\">Evernight_TryKillServant_Flag</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-967456061\">Evernight_UltraMode_Energy_0</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-960144998\">Evernight_TryRemoveUltra_Flag</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6,
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06_Refund_Count",
          "value": {
            "operator": "Variables[0] (FLOOR) || Variables[1] (_Partner_Count_Show) || Variables[2] (AbilityRank_Eidolon6_P1_Ratio) || MUL || PARAM_1 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_Partner_Count_Show * AbilityRank_Eidolon6_P1_Ratio))",
            "constants": [],
            "variables": [
              "FLOOR",
              "_Partner_Count_Show",
              "AbilityRank_Eidolon6_P1_Ratio"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "S11_PointB1_Rat",
      "value": 1
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}} - {{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (0.06) || Variables[1] (_Partner_Count_Show) || MUL || RETURN",
          "displayLines": "(0.06 * _Partner_Count_Show)",
          "constants": [],
          "variables": [
            0.06,
            "_Partner_Count_Show"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite"
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
          "operator": "Variables[0] (0.12) || Variables[1] (_Partner_Count_Show) || MUL || RETURN",
          "displayLines": "(0.12 * _Partner_Count_Show)",
          "constants": [],
          "variables": [
            0.12,
            "_Partner_Count_Show"
          ]
        },
        "dmgFormula": "Max HP Scaling",
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1418513049\">Memosprite_EvernightServant_TriggerDeathrattle</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Partner_Count",
        "compareType": ">",
        "value2": {
          "operator": "Variables[0] (40) || RETURN",
          "displayLines": "40",
          "constants": [],
          "variables": [
            40
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_Evernight_00_DeathRattle_Layer",
          "value": {
            "operator": "Variables[0] (40) || RETURN",
            "displayLines": "40",
            "constants": [],
            "variables": [
              40
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_Evernight_00_DeathRattle_Layer",
          "value": {
            "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
            "displayLines": "_Partner_Count_Show",
            "constants": [],
            "variables": [
              "_Partner_Count_Show"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_Count",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6,
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (_Rank06_Refund_Count) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(_Rank06_Refund_Count + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              "_Rank06_Refund_Count",
              "_Evernight_00_Extra_Energy"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointB1",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        }
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 1,
          "adjustmentType": "+"
        }
      ]
    },
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": 1,
      "attackType": "Unknown"
    },
    "Trigger: Ability End"
  ],
  "references": []
}