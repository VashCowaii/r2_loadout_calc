const configAbility = {
  "fileName": "8003030_Monster_XP_Elite02_Passive01",
  "childAbilityList": [
    "8003030_Monster_XP_Elite02_Passive01"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"144051728\">Monster_XP_Elite02_AIChange</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-619107649\">Monster_XP_Elite02_AIChange_02</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"293273578\">Monster_XP_Elite02_AchievementControl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"624895081\">Monster_XP_Elite02_DestroyClear</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1713212376\">Monster_XP_Elite02_EffectControl</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                "displayLines": "(0 - (MDF_DefenceAddedRatio_PerLayer * ModifierLayers))",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_DefenceAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Debuff",
      "stackLimit": 10,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-621665594\">Monster_XP_Elite02_DebuffEnhance</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DebuffLastCount",
              "value": {
                "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                "displayLines": "DebuffCurrentCount",
                "constants": [],
                "variables": [
                  "DebuffCurrentCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DebuffCurrentCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DebuffCurrentCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (DebuffLastCount) || RETURN",
                  "displayLines": "DebuffLastCount",
                  "constants": [],
                  "variables": [
                    "DebuffLastCount"
                  ]
                }
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffCurrentCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[1]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[1]]}"
                            ]
                          },
                          "valuePerStack": {
                            "ModifierStackLayer": {
                              "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                              "displayLines": "DebuffCurrentCount",
                              "constants": [],
                              "variables": [
                                "DebuffCurrentCount"
                              ]
                            },
                            "MDF_DefenceAddedRatio_PerLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[1]]}"
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
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[1]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[1]]}"
                            ]
                          },
                          "valuePerStack": {
                            "ModifierStackLayer": {
                              "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                              "displayLines": "DebuffCurrentCount",
                              "constants": [],
                              "variables": [
                                "DebuffCurrentCount"
                              ]
                            },
                            "MDF_DefenceAddedRatio_PerLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[1]]}"
                              ]
                            }
                          }
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
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DebuffLastCount",
              "value": {
                "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                "displayLines": "DebuffCurrentCount",
                "constants": [],
                "variables": [
                  "DebuffCurrentCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DebuffCurrentCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DebuffCurrentCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (DebuffLastCount) || RETURN",
                  "displayLines": "DebuffLastCount",
                  "constants": [],
                  "variables": [
                    "DebuffLastCount"
                  ]
                }
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffCurrentCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[1]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[1]]}"
                            ]
                          },
                          "valuePerStack": {
                            "ModifierStackLayer": {
                              "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                              "displayLines": "DebuffCurrentCount",
                              "constants": [],
                              "variables": [
                                "DebuffCurrentCount"
                              ]
                            },
                            "MDF_DefenceAddedRatio_PerLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[1]]}"
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
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                            "displayLines": "{[PassiveSkill01[1]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[1]]}"
                            ]
                          },
                          "valuePerStack": {
                            "ModifierStackLayer": {
                              "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                              "displayLines": "DebuffCurrentCount",
                              "constants": [],
                              "variables": [
                                "DebuffCurrentCount"
                              ]
                            },
                            "MDF_DefenceAddedRatio_PerLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[1]]}"
                              ]
                            }
                          }
                        }
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-619107649\">Monster_XP_Elite02_AIChange_02</a>",
      "execute": [
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
                "value2": 0.35
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_00_AIFlag_02",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__144051728\">Monster_XP_Elite02_AIChange</a>",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Monster_XP_Elite02_00_AIFlag",
                "compareType": "<=",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_00_AIFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_00_AIFlag",
                  "value": 3
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__624895081\">Monster_XP_Elite02_DestroyClear</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1713212376\">Monster_XP_Elite02_EffectControl</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}