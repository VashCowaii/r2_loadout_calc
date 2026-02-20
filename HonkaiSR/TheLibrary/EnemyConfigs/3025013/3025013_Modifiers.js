const configAbility = {
  "fileName": "3025013_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1070579903\">Enemy_W3_Sunday_WeaknessPlay</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 1
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 2
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Fire",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 3
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Ice",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 4
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Thunder"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Thunder",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 5
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Wind",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 6
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 6
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Quantum",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessNum",
                "compareType": "=",
                "value2": 7
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WeaknessPlayCheck",
                  "value": 7
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Imaginary",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] ({[SkillEX03[0]]}) || MUL || RETURN",
                        "displayLines": "(-1 * {[SkillEX03[0]]})",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "{[SkillEX03[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_WeaknessNum"
      ],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1625767180\">Enemy_W3_Sunday_WeaknessClear</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1070579903\">Enemy_W3_Sunday_WeaknessPlay</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1443485628\">Enemy_W3_SundayPart_IF_AlreadyBreak</a>"
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1936839498\">Enemy_W3_Sunday_WeaknessResistance</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Fire",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Thunder",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Quantum",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Imaginary",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                    "displayLines": "{[SkillEX03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[0]]}"
                    ]
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1898432741\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_TearOutline</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1891747721\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03_FX</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-30640886\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1891747721\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1891747721\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03_FX</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1891747721\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1891747721\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03_FX</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-13863267\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-30640886\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-89212632\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02_FX</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-64196124\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-13863267\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1476585465\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01_FX</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-121792370\">Enemy_W3_Sunday_IF_Ability08_TheWorld_V4</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "True"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W3_Sunday_00_TimePause_ActionCounter",
              "value": 7
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "False",
              "state": "Normal"
            },
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill10_TurnCount",
              "value": {
                "operator": "Variables[0] (MDF_Skill10_TurnCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Skill10_TurnCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__888828104\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_3</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose3"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__922383342\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888828104\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_3</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose1"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1911662631\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-424634148\">Enemy_W3_Sunday_IF_LightTeam_Shield_Stack</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "valueType": "CurrentShield",
              "variableName": "CurShield",
              "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterBaseAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "OriginShield",
              "value": {
                "operator": "Variables[0] (MDF_ShieldPercentage_Add) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                "displayLines": "(MDF_ShieldPercentage_Add * CasterBaseAttack)",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage_Add",
                  "CasterBaseAttack"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AddShield",
              "value": {
                "operator": "Variables[0] (MDF_ShieldPercentage_Add_Value2) || Variables[0] (MDF_ShieldPercentage_Add_Value2) || MUL || Variables[0] (MDF_ShieldPercentage_Add_Value2) || Variables[1] (OriginShield) || Variables[2] (CurShield) || MUL || ADD || DIV || RETURN",
                "displayLines": "((MDF_ShieldPercentage_Add_Value2 * MDF_ShieldPercentage_Add_Value2) / (MDF_ShieldPercentage_Add_Value2 + (OriginShield * CurShield)))",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage_Add_Value2",
                  "OriginShield",
                  "CurShield"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MaxShield",
              "value": {
                "operator": "Variables[0] (CurShield) || Variables[1] (AddShield) || ADD || RETURN",
                "displayLines": "(CurShield + AddShield)",
                "constants": [],
                "variables": [
                  "CurShield",
                  "AddShield"
                ]
              }
            },
            {
              "name": "Adjust Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifierNameArray": [
                "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
              ],
              "value": {
                "operator": "Variables[0] (MaxShield) || RETURN",
                "displayLines": "MaxShield",
                "constants": [],
                "variables": [
                  "MaxShield"
                ]
              },
              "operation": "Set"
            },
            {
              "name": "Adjust Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifierNameArray": [
                "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
              ],
              "value": {
                "operator": "Variables[0] (AddShield) || RETURN",
                "displayLines": "AddShield",
                "constants": [],
                "variables": [
                  "AddShield"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage_Add",
        "MDF_ShieldPercentage_Add_Value2"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1765479801\">MissionBattleEvent60019_Charge_permission</a>",
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1946571710\">Enemy_W3_Sunday_IF_BreakBonus_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Counter",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Toughness Bar Reset [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Counter",
              "value": 1,
              "max": 11
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "W3_Sunday_00_StanceCountDown_Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W3_Sunday_00_StanceCountDown_Flag",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": "<=",
                    "value2": 0,
                    "invertCondition": true
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W3_Sunday_IF_PassiveAbilityInitiate_Insert_Part03",
                  "priorityTag": "MonsterBuffSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1243262352\">Enemy_W3_Sunday_IF_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">One With the Light</span>]"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_SummonerBreak",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (_MaxStance) || RETURN",
                    "displayLines": "_MaxStance",
                    "constants": [],
                    "variables": [
                      "_MaxStance"
                    ]
                  },
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"812845275\">Enemy_W3_Sunday_IF_Insert_Revive</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "variableName": "_SummonerBreak",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1243262352\">Enemy_W3_Sunday_IF_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">One With the Light</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                "displayLines": "MDF_CurrentShieldValue",
                "constants": [],
                "variables": [
                  "MDF_CurrentShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Take Damage End [Anyone]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
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
                "operator": "Variables[0] (MDF_Skill07_P2_DamageRatio) || RETURN",
                "displayLines": "MDF_Skill07_P2_DamageRatio",
                "constants": [],
                "variables": [
                  "MDF_Skill07_P2_DamageRatio"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "True"
            }
          ]
        },
        {
          "eventTrigger": "Shield Value Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentShieldValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                "displayLines": "MDF_CurrentShieldValue",
                "constants": [],
                "variables": [
                  "MDF_CurrentShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "True"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Skill07_P2_DamageRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_Skill07_P2_DamageRatio</span>. This effect is dispelled when the Shield is depleted.",
      "type": "Buff",
      "effectName": "If We Live In the Light",
      "statusName": "One With the Light"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-591522409\">Enemy_W3_Sunday_IF_SummonMinions_BreakExtraDelay</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[SkillP02[2]]}"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__273558186\">Enemy_W3_Sunday_IF_PassiveAbilityInitiate_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Enemies",
              "delayPercent": 1.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 1.75,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2.25,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition1",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition5",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition4",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "removeShields": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-591522409\">Enemy_W3_Sunday_IF_SummonMinions_BreakExtraDelay</a>",
              "valuePerStack": {
                "MDF_EnergyCharge": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1121563146\">Enemy_W3_SundayPart_AssistAbilityAttach</a>",
              "valuePerStack": {
                "MDF_Assist_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                  "displayLines": "{[Skill06[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "scope": "TargetEntity",
              "variableName": "_WeakResistance",
              "value": {
                "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                "displayLines": "{[SkillEX03[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX03[0]]}"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1373244307\">Enemy_W3_Sunday_IF_PassiveAbilityInitiate_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1933281729\">Enemy_W3_Sunday_IF_ChangePhase</a>"
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1933281729\">Enemy_W3_Sunday_IF_ChangePhase</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-121792370\">Enemy_W3_Sunday_IF_Ability08_TheWorld_V4</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                  "value": 1
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Sunday_IF_PassiveAbilityInitiate_Insert_Part01to02",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1933281729\">Enemy_W3_Sunday_IF_ChangePhase</a>",
      "modifierFlags": [
        "STAT_MonsterChangePhase"
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__712971424\">Enemy_W3_Sunday_IF_BreakState</a>",
      "modifierFlags": [
        "STAT_MonsterChangePhase"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-103641323\">Enemy_W3_Sunday_IF_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"712971424\">Enemy_W3_Sunday_IF_BreakState</a>"
            },
            {
              "name": "UI Display Event",
              "popUpText": "Attack the boss with all you have"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": ">=",
                        "value2": 9,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "<=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 7
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"712971424\">Enemy_W3_Sunday_IF_BreakState</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1496118097\">Monster_W3_Sunday_IF_Status</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      }
                    }
                  ]
                },
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Sunday_IF_AbilityP04",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Preview Shows Break[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
              },
              "passed": [
                {
                  "name": "Modifier: UI Preview",
                  "show": "Hide",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "baseToughnessDMG": {
                    "operator": "Variables[0] (PartBreak_StanceValue) || RETURN",
                    "displayLines": "PartBreak_StanceValue",
                    "constants": [],
                    "variables": [
                      "PartBreak_StanceValue"
                    ]
                  },
                  "toughnessForcedReductionPreview": 1,
                  "isForcedReduction": true,
                  "ignoreBreakBlock": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__1704895932\">Enemy_W3_Sunday_IF_EX03_Insert</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Sunday_IF_AbilityP03",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__691542435\">W3_Sunday_BattleScore3</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1313,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Sunday"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Farewell, Seven Rest Days",
                      "desc": "Use ally character Sunday to deal the final blow in a victory against The Great Septimus",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__881920025\">W3_Sunday_BattleScore2_Listener</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W3_Sunday_00_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Sunday_00_BattleScore2_Flag",
                  "value": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__674764816\">W3_Sunday_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill10"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W3_Sunday_00_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "And Then It Is Monday...",
                      "desc": "Accumulate enough Shield to completely block \"Embryo of Philosophy\" Sunday's ability, Im Anfang war die Tat",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__725097673\">W3_Sunday_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill052"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Workday Without God",
                      "desc": "Break all Echoes of Faded Dreams before The \"Harmonious Choir\" The Great Septimus uses \"Volteggiando\" or \"Tempestoso\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill06"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "STAT_CTRL"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "DisableAction"
                        }
                      ],
                      "invertCondition": true
                    }
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Workday Without God",
                          "desc": "Break all Echoes of Faded Dreams before The \"Harmonious Choir\" The Great Septimus uses \"Volteggiando\" or \"Tempestoso\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1543685529\">Enemy_W3_Sunday_PartDestroyController</a>",
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
                "value2": 0
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1283356455\">Enemy_W3_Sunday_FinalPhase</a>",
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield",
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "valueType": "CurrentShield",
              "variableName": "MDF_CurShield_Display",
              "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Shield Value Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "valueType": "CurrentShield",
              "variableName": "MDF_CurShield_Display",
              "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "A Shield that absorbs DMG taken by all allies. Before the Shield is depleted or its effect expires, enemy targets' attacks won't reduce the Shielded allies' HP. Currently, the Shield has <span class=\"descriptionNumberColor\">MDF_CurShield_Display</span> point(s) remaining.",
      "type": "Buff",
      "effectName": "Walk in the Light",
      "statusName": "Walk in the Light"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "valueType": "CurrentShield",
              "variableName": "CurShield",
              "modifierName": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterBaseAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AddShield",
              "value": {
                "operator": "Variables[0] (MDF_ShieldPercentage_Add) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                "displayLines": "(MDF_ShieldPercentage_Add * CasterBaseAttack)",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage_Add",
                  "CasterBaseAttack"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MaxShield",
              "value": {
                "operator": "Variables[0] (CurShield) || Variables[1] (AddShield) || ADD || RETURN",
                "displayLines": "(CurShield + AddShield)",
                "constants": [],
                "variables": [
                  "CurShield",
                  "AddShield"
                ]
              }
            },
            {
              "name": "Adjust Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifierNameArray": [
                "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
              ],
              "value": {
                "operator": "Variables[0] (MaxShield) || RETURN",
                "displayLines": "MaxShield",
                "constants": [],
                "variables": [
                  "MaxShield"
                ]
              },
              "operation": "Set"
            },
            {
              "name": "Adjust Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifierNameArray": [
                "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
              ],
              "value": {
                "operator": "Variables[0] (AddShield) || RETURN",
                "displayLines": "AddShield",
                "constants": [],
                "variables": [
                  "AddShield"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage_Add"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterBaseAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AddShield",
              "value": {
                "operator": "Variables[0] (MDF_ShieldPercentage) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                "displayLines": "(MDF_ShieldPercentage * CasterBaseAttack)",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage",
                  "CasterBaseAttack"
                ]
              }
            },
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "value": {
                "operator": "Variables[0] (AddShield) || RETURN",
                "displayLines": "AddShield",
                "constants": [],
                "variables": [
                  "AddShield"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-552386510\">Enemy_W3_Sunday_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Walk in the Light</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1718357040\">Enemy_W3_Sunday_DuringBE</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-396148290\">Enemy_W3_Sunday_P3Ability10Bonus</a>[<span class=\"descriptionNumberColor\">Im Anfang war der Sinn</span>]",
      "modifierFlags": [
        "BlockDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "TutorialFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TutorialFlag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TutorialFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage_Add": 1
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ],
      "description": "Immune to all DMG.",
      "type": "Other",
      "statusName": "Im Anfang war der Sinn"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1419566195\">Enemy_W3_Sunday_01_Tutorial</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "TutorialFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TutorialFlag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TutorialFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage_Add": 1
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1411318356\">Enemy_W3_Sunday_LeaveBattleSound</a>",
      "execute": [
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__896746501\">Enemy_W3_Sunday_AudioReset</a>",
      "execute": [
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-538347270\">Enemy_W3_Sunday_SaveModel</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-812390261\">Enemy_W3_Sunday_01_CharacterChangePhase</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP0.5"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__252376560\">Enemy_W3_Sunday_P2SongState</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__118438066\">Enemy_W3_Sunday_P2BEBanUltra</a>",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Skill06PerformFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag",
        "Skill05ErrorNumber"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.5
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1598244363\">Enemy_W3_Sunday_03_P1LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LockHPTriggerFlag"
            },
            {
              "name": "Lock HP",
              "threshold": 0.5
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1905134690\">Enemy_W3_Sunday_03_P1LockHP_SummonMinions</a>"
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "LockHPTriggerFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag",
                  "value": 1
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                    "displayLines": "_ReadyToCharge",
                    "constants": [],
                    "variables": [
                      "_ReadyToCharge"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LockHPTriggerFlag"
            },
            {
              "name": "Lock HP",
              "threshold": 0.3
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"307400804\">Enemy_W3_Sunday_P2BELockHP_SummonMinions_2</a>"
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "LockHPTriggerFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.5
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LockHPTriggerFlag"
            },
            {
              "name": "Lock HP",
              "threshold": 0.5
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1904246613\">Enemy_W3_Sunday_P2BELockHP_SummonMinions</a>"
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "LockHPTriggerFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LockHPTriggerFlag",
                  "value": 1
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                    "displayLines": "_ReadyToCharge",
                    "constants": [],
                    "variables": [
                      "_ReadyToCharge"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 8,
                      "execute": [
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 5
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 9,
                      "execute": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 6
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 6
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag",
        "Skill05ErrorNumber"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__868485684\">Enemy_W3_Sunday_HitReact</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1798831542\">Enemy_W3_Sunday_Ability10_AttackIgnoreDEF</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_Defence",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
                  "value": "(0 - MDF_Defence)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1182496789\">Enemy_W3_Sunday_01_Perform01_FormationFlag</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Skill06PerformFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2090970120\">Enemy_W3_Sunday_Player20LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1,
                "conditions": {
                  "name": "Living State",
                  "state": "Mask_AliveOnly",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseSkill042"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseNormal"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__83954247\">Enemy_W3_Sunday_Part1FloatingMessage</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "mapTo": "HighSelectRoot"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>",
      "modifierFlags": [
        "MuteHitH"
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose3"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose1"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose3Break"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose2"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose1"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose2Break"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseP3Pose1"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseNormal"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1049255631\">Enemy_W3_Sunday_CharacterChangePhase_P3_Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1021580477\">Enemy_W3_Sunday_CharacterChangePhase_P3_2</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1038358096\">Enemy_W3_Sunday_CharacterChangePhase_P3_3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1004802858\">Enemy_W3_Sunday_CharacterChangePhase_P3_1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"954417116\">Enemy_W3_Sunday_P3_MuteHitH</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[SkillP02[2]]}"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1360561079\">Standard_CTRL_Sleep_Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-973072292\">Standard_CTRL_Sleep_Attacked_CharacterChangePhase</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseChangeRecover"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseNormal"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-512141464\">Standard_CTRL_Sleep_AllDamageTakenUp</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": "MDF_AllDamageAddedRatio"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"410552905\">Enemy_W3_Figure_RLElite_BreakController</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "MuteHitH"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                      "removeAllInstances": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                      "removeAllInstances": true
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_CTRL",
        "STAT_CTRL_Sleep",
        "DisableAction",
        "DispelPriorityHigh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1360561079\">Standard_CTRL_Sleep_Effect</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "living": true
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Alien Dream dispelled"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                "displayLines": "MDF_HealPercentage",
                "constants": [],
                "variables": [
                  "MDF_HealPercentage"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
                "compareType": "<=",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Alien Dream",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1360561079\">Standard_CTRL_Sleep_Effect</a>"
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-512141464\">Standard_CTRL_Sleep_AllDamageTakenUp</a>",
              "valuePerStack": {
                "MDF_AllDamageAddedRatio": {
                  "operator": "Variables[0] (MDF_AllDamageAddedRatio) || RETURN",
                  "displayLines": "MDF_AllDamageAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"410552905\">Enemy_W3_Figure_RLElite_BreakController</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "MuteHitH",
                    "invertCondition": true
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_AllDamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "Cannot take action within a certain number of turns and regenerates minor amounts of HP at the start of every turn. When this unit is attacked, greatly increase the DMG it takes. Getting attacked dispels the Alien Dream state.",
      "type": "Debuff",
      "effectName": "Alien Dream",
      "statusName": "Alien Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1235637066\">Enemy_W3_Sunday_Ability04_Charge</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1660671565\">Enemy_W3_Sunday_Ability09_ChargeEffect_TearOutline</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__33853682\">Enemy_W3_Sunday_Ability09_ChargeEffect_03</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__50631301\">Enemy_W3_Sunday_Ability09_ChargeEffect_02</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__298444\">Enemy_W3_Sunday_Ability09_ChargeEffect_01</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance",
              "whitelistTagType": "Bit_Decrease"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Next Player Character Turn}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Advance/Delay up to Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetRef": {
                        "name": "Target Name",
                        "target": "{{Next Player Character Turn}}"
                      },
                      "refPoint": "After",
                      "isStartingAV": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -100,
                      "isStartingDelay": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: Start [Owner]",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "SpecialActionState"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Next Player Character Turn}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Advance/Delay up to Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetRef": {
                        "name": "Target Name",
                        "target": "{{Next Player Character Turn}}"
                      },
                      "refPoint": "After",
                      "isStartingAV": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -100,
                      "isStartingDelay": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Next Player Character Turn}}"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Advance/Delay up to Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "targetRef": {
                            "name": "Target Name",
                            "target": "{{Next Player Character Turn}}"
                          },
                          "refPoint": "After",
                          "isStartingAV": true
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": -100,
                          "isStartingDelay": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter",
        "W3_Sunday_00_Skill09_Round"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__620609066\">Enemy_W3_Sunday_Ability09_Bonus_1</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill10"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                      "value": "MDF_AllDamageTypeAddedRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_AllDamageTypeAddedRatio",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (ENEMIES_OBJECT_UNUSED__130) || MUL || RETURN",
                "displayLines": "(MDF_Layer * ENEMIES_OBJECT_UNUSED__130)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "ENEMIES_OBJECT_UNUSED__130"
                ]
              }
            }
          ]
        }
      ],
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1121563146\">Enemy_W3_SundayPart_AssistAbilityAttach</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_AssistAbility01_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_AssistAbility01_Part02"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AssistSkill01_DamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                "displayLines": "MDF_Assist_DamagePercentage",
                "constants": [],
                "variables": [
                  "MDF_Assist_DamagePercentage"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Assist_DamagePercentage"
      ],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2045350392\">Enemy_W3_Sunday_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">If We Live In the Light</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                "displayLines": "MDF_CurrentShieldValue",
                "constants": [],
                "variables": [
                  "MDF_CurrentShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Take Damage End [Anyone]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
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
                "operator": "Variables[0] (MDF_Skill07_P2_DamageRatio) || RETURN",
                "displayLines": "MDF_Skill07_P2_DamageRatio",
                "constants": [],
                "variables": [
                  "MDF_Skill07_P2_DamageRatio"
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
                "operator": "Variables[0] (UnusedUnderThisBase_290) || RETURN",
                "displayLines": "UnusedUnderThisBase_290",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_290"
                ]
              }
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "True"
            }
          ]
        },
        {
          "eventTrigger": "Shield Value Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentShieldValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShieldValue) || RETURN",
                "displayLines": "MDF_CurrentShieldValue",
                "constants": [],
                "variables": [
                  "MDF_CurrentShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] ({[Skill07[0]]}) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                "displayLines": "({[Skill07[0]]} * MDF_MaxHP)",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}",
                  "MDF_MaxHP"
                ]
              },
              "assignState": "True"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Skill07_P2_DamageRatio"
      ],
      "latentQueue": [],
      "description": "Increases the DMG dealt by <span class=\"descriptionNumberColor\">MDF_Skill07_P2_DamageRatio</span>, and decreases the DMG taken. Toughness cannot be reduced. This lasts until the Shield is depleted.",
      "type": "Buff",
      "effectName": "If We Live In the Light",
      "statusName": "If We Live In the Light"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2124259254\">MissionBattleEvent60012_Charge_permission</a>",
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "True"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W3_Sunday_00_TimePause_ActionCounter",
              "value": 7
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 7,
              "assignState": "False",
              "state": "Normal"
            },
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1785948983\">Enemy_W3_Sunday_Ability10_DuringSkill</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill10_TurnCount",
              "value": {
                "operator": "Variables[0] (MDF_Skill10_TurnCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Skill10_TurnCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Skill10_TurnCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After <span class=\"descriptionNumberColor\">MDF_Skill10_TurnCount</span> turn(s), unleashes \"Im Anfang war die Tat.\"",
      "type": "Other",
      "effectName": "Im Anfang war die Kraft",
      "statusName": "Im Anfang war die Kraft"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__54417858\">Enemy_W3_Sunday_Ability042_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__512429102\">Enemy_W3_Sunday_03_PassiveAbilityInitiate_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sunday_03_PassiveAbilityInitiate_Insert_Part01to02",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1973291237\">Enemy_W3_Sunday_PassiveAbilityInitiate_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part01to02",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part02to03",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1919757203\">Enemy_W3_Sunday_01_PassiveAbilityInitiate_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Create Enemies",
              "delayPercent": 1.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 1.75,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2.25,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition1",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition5",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition4",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "removeShields": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-538347270\">Enemy_W3_Sunday_SaveModel</a>"
            }
          ],
          "priorityLevel": -91
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1981356350\">Enemy_W3_Sunday_PassiveAbilityInitiate_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Create Enemies",
              "delayPercent": 1.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 1.75,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 2.25,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "ENEMIES_OBJECT_UNUSED__137",
                  "summonLocation": "AroundCaster"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition1",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition5",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Medium"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W3_Sunday_00_SundayPartPosition4",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "removeShields": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1121563146\">Enemy_W3_SundayPart_AssistAbilityAttach</a>",
              "valuePerStack": {
                "MDF_Assist_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                  "displayLines": "{[Skill06[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>"
            }
          ],
          "priorityLevel": -91
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__280716362\">Enemy_W3_Sunday_SummonMinions</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0000010000076
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1006822227\">Enemy_W3_Sunday_SummonMinions_Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"280716362\">Enemy_W3_Sunday_SummonMinions</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"280716362\">Enemy_W3_Sunday_SummonMinions</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1393344138\">Enemy_W3_Sunday_BreakBonus_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Counter",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Toughness Bar Reset [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W3_Sunday_00_StanceCountDown_Counter",
              "value": 1,
              "max": 11
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "W3_Sunday_00_StanceCountDown_Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W3_Sunday_00_StanceCountDown_Flag",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ],
                    "invertCondition": true
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03",
                  "priorityTag": "MonsterBuffSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-98549587\">Enemy_W3_Sunday_Part03_PowerUp</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_351) || RETURN",
                "displayLines": "UnusedUnderThisBase_351",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_351"
                ]
              }
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Fire",
                "Ice",
                "Imaginary",
                "Physical",
                "Quantum",
                "Thunder",
                "Wind"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1907199262\">Enemy_W3_Sunday_01_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 20
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
      "for": "<a class=\"gModGreen\" id=\"mod__941255357\">Enemy_W3_Sunday_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 20
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3025010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "\"Harmonious Choir\" The Great Septimus"
                  },
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1073209984\">Enemy_W3_Sunday_Doll_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_PassiveSkillInitiate_InsertFlag"
      ]
    }
  ],
  "references": []
}