const configAbility = {
  "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Edict: Evil Cleanse"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Target Has Lowest/Highest Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "partOf": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
        "minOrMax": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxStance"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (_MaxStance) || RETURN",
              "displayLines": "_MaxStance",
              "constants": [],
              "variables": [
                "_MaxStance"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "AllType"
            },
            "Tags": null,
            "attackType": "Level"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxAttack) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
              "displayLines": "(_MaxAttack * #BattleEvent_P2_ADF)",
              "constants": [],
              "variables": [
                "_MaxAttack",
                "#BattleEvent_P2_ADF"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (_MaxStance) || RETURN",
              "displayLines": "_MaxStance",
              "constants": [],
              "variables": [
                "_MaxStance"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "AllType"
            },
            "Tags": null,
            "attackType": "Level"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>",
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "TargetStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": 1,
              "baseChance": 1.5,
              "valuePerStack": {
                "MDF_ActionDelayRatio": 0,
                "MDF_DamagePercentage": {
                  "operator": "Constants[0] (0.6) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                  "displayLines": "((0.6 * (2 + (TargetStance / 30))) / 4)",
                  "constants": [
                    0.6,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "TargetStance"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageBreak": {
                  "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                  "displayLines": "((0.5 * (2 + (TargetStance / 30))) / 4)",
                  "constants": [
                    0.5,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "TargetStance"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}