const configAbility = {
  "fileName": "Phainon_Phainon_Ability31_Part2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1508237621\">MStory_Main_Phainon_UltraNeverEnd</a>[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"7558249\">MStory_Stage10441070_Ability31</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-277317282\">Memosprite_CyreneServant_AmazingBonus_Phainon_Sub</a>[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
              },
              {
                "name": "Compare: Variable",
                "value1": "ADF_BECount",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextAbility"
              }
            ]
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1382374787\">M_Phainon_IsAbility31</a>",
              "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2124559598\">Phainon_Ultimate_LimboMark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}.[[living]]"
      },
      "variableName": "ADF_TargetCount",
      "livingTargets": true,
      "context": "ContextAbility"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Khaslana(Battle Event Cluster)}}"
      },
      "variableName": "ADF_BECount",
      "context": "ContextAbility"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (9.6) || Constants[0] (1) || Variables[1] (ADF_BECount) || Variables[2] (0.125) || MUL || SUB || MUL || RETURN",
          "displayLines": "(9.6 * (1 - (ADF_BECount * 0.125)))",
          "constants": [
            1
          ],
          "variables": [
            9.6,
            "ADF_BECount",
            0.125
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
          "displayLines": "(1 / ADF_TargetCount)",
          "constants": [
            1
          ],
          "variables": [
            "ADF_TargetCount"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Ultimate"
      },
      "attackType": "Ultimate"
    },
    "Trigger: Attack End",
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Khaslana(Battle Event Cluster)}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1508237621\">MStory_Main_Phainon_UltraNeverEnd</a>[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
          },
          {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-277317282\">Memosprite_CyreneServant_AmazingBonus_Phainon_Sub</a>[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
              },
              {
                "name": "Compare: Variable",
                "value1": "ADF_BECount",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextAbility"
              }
            ]
          }
        ]
      },
      "passed": [
        {
          "name": "Set Phainon Charge Points",
          "value": {
            "operator": "Variables[0] (Skill22_Energy) || RETURN",
            "displayLines": "Skill22_Energy",
            "constants": [],
            "variables": [
              "Skill22_Energy"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1508237621\">MStory_Main_Phainon_UltraNeverEnd</a>[<span class=\"descriptionNumberColor\">Futile Flames</span>]"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-277317282\">Memosprite_CyreneServant_AmazingBonus_Phainon_Sub</a>[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-484368069\">Memosprite_CyreneServant_AmazingBonus_Phainon</a>[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
                  "variable": "MDF_ChargeEnergy",
                  "target2": null,
                  "variable2": "ADF_ExtraEnergy"
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Skill22_Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (ADF_ExtraEnergy) || RETURN",
                    "displayLines": "ADF_ExtraEnergy",
                    "constants": [],
                    "variables": [
                      "ADF_ExtraEnergy"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_Index",
          "value": 0
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          },
          "Event": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 11408,
              "variables": {
                "BE_Index": {
                  "operator": "Variables[0] (ADF_Index) || RETURN",
                  "displayLines": "ADF_Index",
                  "constants": [],
                  "variables": [
                    "ADF_Index"
                  ]
                },
                "BE_Count": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                },
                "BE_Speed": {
                  "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                  "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                  "constants": [],
                  "variables": [
                    "CDF_SpeedConvertRatio",
                    "Phainon_BaseSpeed"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_Index",
              "value": {
                "operator": "Variables[0] (ADF_Index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(ADF_Index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "ADF_Index"
                ]
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1662843541\">Phainon_Ultimate_VisualManager</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545922215\">Phainon_ClearAvatarArea</a>",
          "variables": {
            "IsAsyncLoad": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Phainon enters the cycle once more..."
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1382374787\">M_Phainon_IsAbility31</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__7558249\">MStory_Stage10441070_Ability31</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}