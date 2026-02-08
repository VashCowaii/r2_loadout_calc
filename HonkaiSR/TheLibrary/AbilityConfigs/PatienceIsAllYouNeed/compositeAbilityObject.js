const compositeAbilityObject = {
  "fullCharacterName": "Patience Is All You Need",
  "trimCharacterName": "PatienceIsAllYouNeed",
  "abilityList": [
    "PatienceIsAllYouNeed_Ability23006"
  ],
  "fixedStats": {
    "1": {
      "DamageAll": 0.24
    },
    "2": {
      "DamageAll": 0.28
    },
    "3": {
      "DamageAll": 0.32
    },
    "4": {
      "DamageAll": 0.36
    },
    "5": {
      "DamageAll": 0.4
    }
  },
  "abilityObject": {
    "PatienceIsAllYouNeed_Ability23006": {
      "fileName": "PatienceIsAllYouNeed_Ability23006",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1382073968\">LC_23006_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1485539064\">LC_23006_DOT</a>[<span class=\"descriptionNumberColor\">Erode</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_Electric_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || RETURN",
                      "displayLines": "Modifier_Electric_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamagePercentage)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the beginning of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Erode",
          "statusName": "Erode",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1036917801\">LC_23006_SpeedAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P4_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1382073968\">LC_23006_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1485539064\">LC_23006_DOT</a>[<span class=\"descriptionNumberColor\">Erode</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1485539064\">LC_23006_DOT</a>[<span class=\"descriptionNumberColor\">Erode</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "baseChance": 1,
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1036917801\">LC_23006_SpeedAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.048) || RETURN",
                      "displayLines": "0.048",
                      "constants": [],
                      "variables": [
                        0.048
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases DMG dealt by the wearer by #2[i]%. After every attack launched by wearer, their SPD increases by #3[f1]%, stacking up to #4[i] times.\\nIf the wearer hits an enemy target that is not afflicted by Erode, there is a 100% base chance to inflict Erode to the target. Enemies afflicted with Erode are also considered to be Shocked and will receive Lightning DoT at the start of each turn equal to #1[i]% of the wearer's ATK, lasting for #5[i] turn(s).",
      "params": [
        [
          0.6,
          0.24,
          0.048,
          3,
          1
        ],
        [
          0.7,
          0.28,
          0.055999998,
          3,
          1
        ],
        [
          0.8,
          0.32,
          0.064,
          3,
          1
        ],
        [
          0.9,
          0.36,
          0.072,
          3,
          1
        ],
        [
          1,
          0.4,
          0.08,
          3,
          1
        ]
      ]
    }
  },
  "isLightcone": true
}