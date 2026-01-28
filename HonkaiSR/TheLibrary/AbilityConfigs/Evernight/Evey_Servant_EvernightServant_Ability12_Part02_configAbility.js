const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability12_Part02",
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
      "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Evernight_UltraMode_Energy_Cost",
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
      "modifier": "Evernight_UltraMode_Effect_Normal"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_UltraMode_Effect_Normal"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Evernight_TryKillServant_Flag",
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
        "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Evernight_TryRemoveUltra_Flag",
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
      "modifier": "Memosprite_EvernightServant_TriggerNormal"
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
          "operator": "Variables[0] (_Partner_Count_Show) || Variables[1] (0.12) || MUL || RETURN",
          "displayLines": "(_Partner_Count_Show * 0.12)",
          "constants": [],
          "variables": [
            "_Partner_Count_Show",
            0.12
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
      "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}