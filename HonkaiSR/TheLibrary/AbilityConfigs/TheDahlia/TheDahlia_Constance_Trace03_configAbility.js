const configAbility = {
  "fileName": "TheDahlia_Constance_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Constance_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_Tree03_SpdPreShow",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Weakness Preview",
              "target": "Use Prior Target(s) Defined",
              "DamageType": "AllType",
              "weaknessFilter": "All",
              "anyMatchingTarget": true
            },
            {
              "name": "Has Modifier",
              "target": "Owner of this Modifier",
              "modifier": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.3(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_Tree03_StancePreShow",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "isPercentofMaxToughness": true,
        "addedValue": {
          "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
          "displayLines": "(20 * 3)",
          "constants": [
            3
          ],
          "variables": [
            20
          ]
        },
        "maxToughness": 999,
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Weakness Preview",
              "target": "Use Prior Target(s) Defined",
              "DamageType": "AllType",
              "weaknessFilter": "All",
              "anyMatchingTarget": true
            },
            {
              "name": "Has Element",
              "target": "Owner of this Modifier",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Fire"
              }
            },
            {
              "name": "Is Entity Type",
              "target": "Owner of this Modifier",
              "type": "Character"
            }
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Outgrow the Old, Espouse the New"
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -100
        },
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_AttachWeakness"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Owner of this Modifier",
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_PointB3_AddWeaknessMark",
                      "referenceModifier": "MReference_Empty",
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Constance_PointB3_SPAddMark",
                      "referenceModifier": "MReference_Empty"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_Tree03_AddWeaknessListener",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": "Owner of this Modifier",
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_PointB3_SPAddMark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_PointB3_AddWeaknessMark"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": "Ability Target List",
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Constance_PointB3_AddWeaknessMark",
                    "casterFilter": "Owner of this Modifier"
                  },
                  {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
                    "displayLines": "(20 * 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      20
                    ]
                  },
                  "attacker": "Owner of this Modifier",
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "livingState": "Mask_AliveOrLimbo",
                  "ToughnessDMGType": "Fire"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_PointB3_AddWeaknessMark"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Constance_PointB3_SPAddMark"
                  },
                  {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "_maxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "_curSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": "Owner of this Modifier",
                  "variableName": "_maxAddSP",
                  "value": {
                    "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (_maxSP) || Variables[2] (0.5) || MUL || Variables[3] (_curSP) || SUB || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, ((_maxSP * 0.5) - _curSP))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MAX",
                      "_maxSP",
                      0.5,
                      "_curSP"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_maxAddSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_maxSP) || Variables[1] (0.1) || MUL || RETURN",
                      "displayLines": "(_maxSP * 0.1)",
                      "constants": [],
                      "variables": [
                        "_maxSP",
                        0.1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Owner of this Modifier",
                      "valuePercent": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": "Owner of this Modifier",
                      "value": {
                        "operator": "Variables[0] (_maxAddSP) || RETURN",
                        "displayLines": "_maxAddSP",
                        "constants": [],
                        "variables": [
                          "_maxAddSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_PointB3_AddWeaknessMark",
              "removeToBeAdded": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_PointB3_SPAddMark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable + Battle Events)",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": "Owner of this Modifier",
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_PointB3_SPAddMark"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": "Owner of this Modifier",
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "[CREATOR OF] Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_PointB3_AddWeaknessMark"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
            }
          ],
          "priorityLevel": -85
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_PointB3_AddWeaknessMark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_PointB3_SPAddMark"
            }
          ]
        },
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_AttachWeakness"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Trace03",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable + Battle Events)",
          "modifier": "_M_Constance_Tree03_AddWeaknessListener",
          "haloStatus": true,
          "includeBattleEvent": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable + Battle Events)",
          "modifier": "_M_Constance_Tree03_StancePreShow",
          "haloStatus": true,
          "includeBattleEvent": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "_M_Constance_Tree03_SpdPreShow",
          "haloStatus": true,
          "includeBattleEvent": true
        }
      ]
    }
  ]
}