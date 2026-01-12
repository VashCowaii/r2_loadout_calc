const configAbility = {
  "fileName": "EarthlyEscapade_Ability23021",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23021_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23021_Sub3[<span class=\"descriptionNumberColor\">Mask</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases teammates' CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue4</span>.",
      "type": "Buff",
      "effectName": "Mask",
      "statusName": "Mask",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Teammates + Unselectable (Excluding Owner) [Exclude battle events]",
          "modifier": "LC_23021_Sub[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
              "displayLines": "MDF_PropertyValue3",
              "constants": [],
              "variables": [
                "MDF_PropertyValue3"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (MDF_PropertyValue4) || RETURN",
              "displayLines": "MDF_PropertyValue4",
              "constants": [],
              "variables": [
                "MDF_PropertyValue4"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23021_Sub2[<span class=\"descriptionNumberColor\">Radiant Flame</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": null,
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23021_Sub3[<span class=\"descriptionNumberColor\">Mask</span>]",
                  "duration": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue3": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_PropertyValue4": {
                      "operator": "Variables[0] (0.28) || RETURN",
                      "displayLines": "0.28",
                      "constants": [],
                      "variables": [
                        0.28
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Upon reaching <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> stacks, removes all the Radiant Flame stacks and gains Mask.",
      "type": "Other",
      "statusName": "Radiant Flame"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23021_Sub[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                "displayLines": "MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2"
      ],
      "latentQueue": [],
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate and CRIT DMG Boost",
      "statusName": "CRIT Rate and CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23021_Main",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with SkillPoint Changes",
              "variableName": "MDF_BPValue",
              "type": "UnclampedDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "Use Prior Target(s) Defined",
                    "target": "Owner of this Modifier",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23021_Sub2[<span class=\"descriptionNumberColor\">Radiant Flame</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_BPValue) || RETURN",
                    "displayLines": "MDF_BPValue",
                    "constants": [],
                    "variables": [
                      "MDF_BPValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23021_Sub3[<span class=\"descriptionNumberColor\">Mask</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue3": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_PropertyValue4": {
                      "operator": "Variables[0] (0.28) || RETURN",
                      "displayLines": "0.28",
                      "constants": [],
                      "variables": [
                        0.28
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. At the start of the battle, the wearer gains Mask, lasting for #6[i] turn(s). While the wearer has Mask, the wearer's teammates have their CRIT Rate increased by #5[i]% and their CRIT DMG increased by #2[i]%. For every 1 Skill Point the wearer recovers (including Skill Points that exceed the limit), they gain 1 stack of Radiant Flame. And when the wearer has #4[i] stacks of Radiant Flame, all the stacks are removed, and they gain Mask, lasting for #3[i] turn(s).",
  "params": [
    [
      0.32,
      0.28,
      4,
      4,
      0.1,
      3
    ],
    [
      0.39,
      0.35,
      4,
      4,
      0.11,
      3
    ],
    [
      0.46,
      0.42,
      4,
      4,
      0.12,
      3
    ],
    [
      0.53,
      0.49,
      4,
      4,
      0.13,
      3
    ],
    [
      0.6,
      0.56,
      4,
      4,
      0.14,
      3
    ]
  ]
}