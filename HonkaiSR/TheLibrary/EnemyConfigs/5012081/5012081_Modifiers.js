const configAbility = {
  "fileName": "5012081_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_MaxLayer) || DIV || Variables[2] (MDF_PropertyValue) || MUL || RETURN",
                "displayLines": "((MDF_Layer / MDF_MaxLayer) * MDF_PropertyValue)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "MDF_MaxLayer",
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Layer",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Enemy Gratuity",
      "stackLimit": 999,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "mapTo": "SelectRoot2",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "CameraRoot2",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Eff_RuanMei",
              "mapTo": "Eff_RuanMei2",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "revertDefault": true
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2041132439\">Monster_W5_Vtuber_Death</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Set Mapping Point",
                  "point": "SelectRoot",
                  "reset": true,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRoot",
                  "reset": true,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Mapping Point",
                  "point": "Eff_RuanMei",
                  "reset": true,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase02"
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "assignState": "True",
              "state": "Normal",
              "enableState": "True"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Layer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "trigger": "SpEff_Trigger"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Unique Effect Name",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "uniqueName": "Eff_Monster_W5_VtuberPart02_00_Hit_Loop",
                    "allowUnReady": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "trigger": "SpEff_Normal"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Unique Effect Name",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "uniqueName": "Eff_Monster_W5_VtuberPart02_00_Hit_Loop",
                    "allowUnReady": true
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
                "compareType": ">",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "trigger": "SpEff_Trigger_01"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertTrigger",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Action Advance"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-495125483\">Enemy_W5_VtuberPart02_Charge_Insert</a>"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "trigger": "SpEff_Trigger_01"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
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
                        "MDF_Layer": {
                          "operator": "Variables[0] (MDF_Layer) || RETURN",
                          "displayLines": "MDF_Layer",
                          "constants": [],
                          "variables": [
                            "MDF_Layer"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertTrigger",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertTrigger",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                }
              ]
            }
          ]
        }
      ],
      "description": "After being attacked, \"Enemy Popularity\" decreases and action advances. During the next action, removes \"Enemy Gratuity\" from sub-field enemy targets based on the amount of reduced \"Enemy Popularity.\"",
      "type": "Other",
      "effectName": "Diss",
      "statusName": "Enemy Popularity",
      "stackLimit": 999,
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-495125483\">Enemy_W5_VtuberPart02_Charge_Insert</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__41880618\">Enemy_W5_VtuberPart02_Eff</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1182558090\">Enemy_W5_VtuberPart02_00</a>",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}