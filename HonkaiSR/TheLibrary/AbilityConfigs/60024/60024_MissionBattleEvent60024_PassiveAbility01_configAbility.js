const configAbility = {
  "fileName": "60024_MissionBattleEvent60024_PassiveAbility01",
  "childAbilityList": [
    "60024_MissionBattleEvent60024_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Show BattleEvent Button",
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1097239658\">MissionBattleEvent60024_PassiveAbility</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 5
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-117751249\">MissionBattleEvent60024_Charge</a>",
          "valuePerStack": {
            "MDF_MaxHPRatio": {
              "operator": "Variables[0] (#BattleEvent_P8_ADF) || RETURN",
              "displayLines": "#BattleEvent_P8_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P8_ADF"
              ]
            },
            "MDF_ExtraSP": {
              "operator": "Variables[0] (#BattleEvent_P9_ADF) || RETURN",
              "displayLines": "#BattleEvent_P9_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P9_ADF"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1001363316\">MissionBattleEvent60024_AutoUseUltraAbility</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BattleEventHeal_HPDeltaLayer",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEventHeal_HPDeltaLayer"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1001363316\">MissionBattleEvent60024_AutoUseUltraAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Automatically use Ultimate",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1097239658\">MissionBattleEvent60024_PassiveAbility</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-117751249\">MissionBattleEvent60024_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W4_DawnsEye_01_HPRatio",
              "value": 1
            },
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W4_DawnsEye_01_HPRatio"
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (W4_DawnsEye_01_HPRatio) || RETURN",
                  "displayLines": "W4_DawnsEye_01_HPRatio",
                  "constants": [],
                  "variables": [
                    "W4_DawnsEye_01_HPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatioCurrent"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPChangeRatioDelta",
                  "value": {
                    "operator": "Variables[0] (W4_DawnsEye_01_HPRatio) || Variables[1] (MDF_HPRatioCurrent) || SUB || RETURN",
                    "displayLines": "(W4_DawnsEye_01_HPRatio - MDF_HPRatioCurrent)",
                    "constants": [],
                    "variables": [
                      "W4_DawnsEye_01_HPRatio",
                      "MDF_HPRatioCurrent"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "W4_DawnsEye_01_HPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_HPRatioCurrent) || RETURN",
                    "displayLines": "MDF_HPRatioCurrent",
                    "constants": [],
                    "variables": [
                      "MDF_HPRatioCurrent"
                    ]
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_HPChangeRatioDelta) || Variables[1] (MDF_MaxHPRatio) || DIV || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "((MDF_HPChangeRatioDelta / MDF_MaxHPRatio) * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "MDF_HPChangeRatioDelta",
                      "MDF_MaxHPRatio"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__232_BOOLEAN"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraSP) || RETURN",
                    "displayLines": "MDF_ExtraSP",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraSP"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxHPRatio",
        "MDF_ExtraSP"
      ],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}