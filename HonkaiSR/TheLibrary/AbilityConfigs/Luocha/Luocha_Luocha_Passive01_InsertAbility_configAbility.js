const configAbility = {
  "fileName": "Luocha_Luocha_Passive01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_insertCheck_",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "priorState": "Active",
      "bar#": 1
    },
    {
      "name": "UI Display Event",
      "popUpText": "Cycle of Life"
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Luocha_Passive01_HealHPArea",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.18) || RETURN",
          "displayLines": "0.18",
          "constants": [],
          "variables": [
            0.18
          ]
        },
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_PropertyHealValue": {
          "operator": "Variables[0] (240) || RETURN",
          "displayLines": "240",
          "constants": [],
          "variables": [
            240
          ]
        },
        "MDF_PropertyValueTraceB2": {
          "operator": "Variables[0] (0.07) || RETURN",
          "displayLines": "0.07",
          "constants": [],
          "variables": [
            0.07
          ]
        },
        "MDF_PropertyHealValueTraceB2": {
          "operator": "Variables[0] (93) || RETURN",
          "displayLines": "93",
          "constants": [],
          "variables": [
            93
          ]
        },
        "MDF_PropertyRatio_Eidolon1": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Luocha_Passive01_InsertMark"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Luocha_Eidolon4_Fatigue[<span class=\"descriptionNumberColor\">Weaken</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_Fatigue"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> less DMG.",
      "type": "Debuff",
      "effectName": "Weaken",
      "statusName": "Weaken"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_HealHPSelf[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": "Owner of this Modifier",
              "healPercent": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                "displayLines": "MDF_PropertyHealValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyHealValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sanctified"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": "[ALL TEAMMATES OF] Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                    "displayLines": "MDF_PropertyValueSkillTreeB2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueSkillTreeB2"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                    "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyHealValueSkillTreeB2"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "After using an attack on an enemy, restores HP to self.",
      "type": "Other",
      "statusName": "Cycle of Life"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_HealHP[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": "Owner of this Modifier",
              "healPercent": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                "displayLines": "MDF_PropertyHealValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyHealValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sanctified"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": "[ALL TEAMMATES OF] Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                    "displayLines": "MDF_PropertyValueSkillTreeB2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueSkillTreeB2"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                    "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyHealValueSkillTreeB2"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "After using an attack on an enemy, restores HP to self.",
      "type": "Other",
      "statusName": "Cycle of Life"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_HealHPArea",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": 2,
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": 2,
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyRatio",
        "MDF_PropertyHealValue",
        "MDF_PropertyValueSkillTreeB2",
        "MDF_PropertyHealValueSkillTreeB2",
        "MDF_PropertyRatio_Rank01",
        "MDF_LifeTime"
      ],
      "latentQueue": [
        "_insertCheck_"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster",
          "modifier": "Luocha_Passive01_HealHPSelf[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "duration": {
            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
            "displayLines": "MDF_LifeTime",
            "constants": [],
            "variables": [
              "MDF_LifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            },
            "MDF_PropertyHealValue": {
              "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
              "displayLines": "MDF_PropertyHealValue",
              "constants": [],
              "variables": [
                "MDF_PropertyHealValue"
              ]
            },
            "MDF_PropertyValueTraceB2": {
              "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
              "displayLines": "MDF_PropertyValueSkillTreeB2",
              "constants": [],
              "variables": [
                "MDF_PropertyValueSkillTreeB2"
              ]
            },
            "MDF_PropertyHealValueTraceB2": {
              "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
              "displayLines": "MDF_PropertyHealValueSkillTreeB2",
              "constants": [],
              "variables": [
                "MDF_PropertyHealValueSkillTreeB2"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Teammates + Unselectable (Excluding Owner)",
          "modifier": "Luocha_Passive01_HealHP[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            },
            "MDF_PropertyHealValue": {
              "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
              "displayLines": "MDF_PropertyHealValue",
              "constants": [],
              "variables": [
                "MDF_PropertyHealValue"
              ]
            },
            "MDF_PropertyValueTraceB2": {
              "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
              "displayLines": "MDF_PropertyValueSkillTreeB2",
              "constants": [],
              "variables": [
                "MDF_PropertyValueSkillTreeB2"
              ]
            },
            "MDF_PropertyHealValueTraceB2": {
              "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
              "displayLines": "MDF_PropertyHealValueSkillTreeB2",
              "constants": [],
              "variables": [
                "MDF_PropertyHealValueSkillTreeB2"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Luocha_Eidolon1_ATKUp[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (MDF_PropertyRatio_Rank01) || RETURN",
              "displayLines": "MDF_PropertyRatio_Rank01",
              "constants": [],
              "variables": [
                "MDF_PropertyRatio_Rank01"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Luocha_Eidolon4_Fatigue[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
              "displayLines": "MDF_PropertyRatio",
              "constants": [],
              "variables": [
                "MDF_PropertyRatio"
              ]
            }
          }
        }
      ]
    }
  ]
}