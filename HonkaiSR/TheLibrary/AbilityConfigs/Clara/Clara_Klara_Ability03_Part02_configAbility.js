const configAbility = {
  "fileName": "Clara_Klara_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ATKCount",
      "value": {
        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
        "displayLines": "(2 + 1)",
        "constants": [],
        "variables": [
          2,
          1
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
        "displayLines": "EnergyBar_ATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_ATKCount"
        ]
      },
      "assignState": "True",
      "priorState": "Active"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-632500359\">Klara_Eidolon2_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_AttackUP": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_AggroAddedRatio": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "counter": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_ShowAmmo": {
              "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
              "displayLines": "(2 + 1)",
              "constants": [],
              "variables": [
                2,
                1
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_AggroAddedRatio": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "counter": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_ShowAmmo": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-632500359\">Klara_Eidolon2_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackUP) || RETURN",
                "displayLines": "MDF_AttackUP",
                "constants": [],
                "variables": [
                  "MDF_AttackUP"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackUP"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackUP</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1513804400\">Klara_PassiveATK_TeamMember</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1426674462\">Klara_PassiveATK_Mark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "value": {
                "operator": "Variables[0] (MDF_ShowAmmo) || RETURN",
                "displayLines": "MDF_ShowAmmo",
                "constants": [],
                "variables": [
                  "MDF_ShowAmmo"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowAmmo"
      ],
      "latentQueue": [],
      "description": "Teammates being attacked will also trigger Counter, for which the DMG multiplier is also increased.",
      "type": "Buff",
      "statusName": "Enhanced Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
      "stackType": "Refresh",
      "modifierFlags": [
        "STAT_Burst"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AggroAddedRatio) || RETURN",
                "displayLines": "MDF_AggroAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AggroAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AggroAddedRatio",
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Receives less DMG with a higher chance to be attacked.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "Promise, Not Command"
    }
  ]
}