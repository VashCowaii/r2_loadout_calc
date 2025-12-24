const configAbility = {
  "fileName": "TimeWovenIntoGold_Ability23036",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23036_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23036_Effect_Servant[<span class=\"descriptionNumberColor\">Brocade</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxLayerSwitch2",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_NormalDamageRatioTotal) || RETURN",
                    "displayLines": "_NormalDamageRatioTotal",
                    "constants": [],
                    "variables": [
                      "_NormalDamageRatioTotal"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "LC_23036_CriticalDamage",
              "valuePerStack": {
                "_CritDamageRatio": {
                  "operator": "Variables[0] (_CritDamageRatioTotal) || RETURN",
                  "displayLines": "_CritDamageRatioTotal",
                  "constants": [],
                  "variables": [
                    "_CritDamageRatioTotal"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_MaxLayerSwitch2",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Increases CRIT DMG by #1[f1]% and Basic ATK DMG by #2[f1]%."
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span>.",
      "type": "Buff",
      "statusName": "Brocade"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23036_Effect[<span class=\"descriptionNumberColor\">Brocade</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_MaxLayerSwitch",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxLayerSwitch",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_NormalDamageRatioTotal) || RETURN",
                    "displayLines": "_NormalDamageRatioTotal",
                    "constants": [],
                    "variables": [
                      "_NormalDamageRatioTotal"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CritDamageRatioTotal",
              "value": {
                "operator": "Variables[0] (_CritDamageRatio) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(_CritDamageRatio * _Layer)",
                "constants": [],
                "variables": [
                  "_CritDamageRatio",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "LC_23036_CriticalDamage",
              "valuePerStack": {
                "_CritDamageRatio": {
                  "operator": "Variables[0] (_CritDamageRatioTotal) || RETURN",
                  "displayLines": "_CritDamageRatioTotal",
                  "constants": [],
                  "variables": [
                    "_CritDamageRatioTotal"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_Layer",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (_MaxLayer) || RETURN",
                  "displayLines": "_MaxLayer",
                  "constants": [],
                  "variables": [
                    "_MaxLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_MaxLayerSwitch",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_NormalDamageRatioTotal",
                  "value": {
                    "operator": "Variables[0] (_MaxLayerSwitch) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(_MaxLayerSwitch * _Layer)",
                    "constants": [],
                    "variables": [
                      "_MaxLayerSwitch",
                      "_Layer"
                    ]
                  }
                },
                {
                  "name": "UI Display Event",
                  "popUpText": "Increases CRIT DMG by #1[f1]% and Basic ATK DMG by #2[f1]%."
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": "[MEMOSPRITE OF] Owner of this Modifier",
              "modifier": "LC_23036_Effect_Servant[<span class=\"descriptionNumberColor\">Brocade</span>]",
              "valuePerStack": {
                "_CritDamageRatioTotal": {
                  "operator": "Variables[0] (_CritDamageRatioTotal) || RETURN",
                  "displayLines": "_CritDamageRatioTotal",
                  "constants": [],
                  "variables": [
                    "_CritDamageRatioTotal"
                  ]
                },
                "_NormalDamageRatioTotal": {
                  "operator": "Variables[0] (_NormalDamageRatioTotal) || RETURN",
                  "displayLines": "_NormalDamageRatioTotal",
                  "constants": [],
                  "variables": [
                    "_NormalDamageRatioTotal"
                  ]
                },
                "_MaxLayerSwitch2": {
                  "operator": "Variables[0] (_MaxLayerSwitch2) || RETURN",
                  "displayLines": "_MaxLayerSwitch2",
                  "constants": [],
                  "variables": [
                    "_MaxLayerSwitch2"
                  ]
                }
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span>.",
      "type": "Buff",
      "effectName": "Brocade",
      "statusName": "Brocade",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster's Memosprite",
          "modifier": "LC_23036_Effect_Servant[<span class=\"descriptionNumberColor\">Brocade</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "_CritDamageRatioTotal": {
              "operator": "Variables[0] (_CritDamageRatioTotal) || RETURN",
              "displayLines": "_CritDamageRatioTotal",
              "constants": [],
              "variables": [
                "_CritDamageRatioTotal"
              ]
            },
            "_NormalDamageRatioTotal": {
              "operator": "Variables[0] (_NormalDamageRatioTotal) || RETURN",
              "displayLines": "_NormalDamageRatioTotal",
              "constants": [],
              "variables": [
                "_NormalDamageRatioTotal"
              ]
            },
            "_MaxLayerSwitch2": {
              "operator": "Variables[0] (_MaxLayerSwitch2) || RETURN",
              "displayLines": "_MaxLayerSwitch2",
              "constants": [],
              "variables": [
                "_MaxLayerSwitch2"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23036_CriticalDamage",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_CritDamageRatio) || RETURN",
                "displayLines": "_CritDamageRatio",
                "constants": [],
                "variables": [
                  "_CritDamageRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "_CritDamageRatio"
      ],
      "latentQueue": [
        "_MaxLayerSwitch"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23036_Listen",
      "execute": [
        {
          "eventTrigger": "Attack End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": "Caster + Memosprite",
                "target": "Use Prior Target(s) Defined",
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "LC_23036_Effect[<span class=\"descriptionNumberColor\">Brocade</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster + Memosprite",
                      "modifier": "LC_23036_CriticalDamage",
                      "valuePerStack": {
                        "_CritDamageRatio": {
                          "operator": "Variables[0] (AbilityEquip_P4_CritDamage) || RETURN",
                          "displayLines": "AbilityEquip_P4_CritDamage",
                          "constants": [],
                          "variables": [
                            "AbilityEquip_P4_CritDamage"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23036_Effect[<span class=\"descriptionNumberColor\">Brocade</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (AbilityEquip_P2_MaxLayer) || RETURN",
                    "displayLines": "AbilityEquip_P2_MaxLayer",
                    "constants": [],
                    "variables": [
                      "AbilityEquip_P2_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "_CritDamageRatio": {
                      "operator": "Variables[0] (AbilityEquip_P4_CritDamage) || RETURN",
                      "displayLines": "AbilityEquip_P4_CritDamage",
                      "constants": [],
                      "variables": [
                        "AbilityEquip_P4_CritDamage"
                      ]
                    },
                    "__NormalDamageRatio": {
                      "operator": "Variables[0] (AbilityEquip_P3_NormalDamage) || RETURN",
                      "displayLines": "AbilityEquip_P3_NormalDamage",
                      "constants": [],
                      "variables": [
                        "AbilityEquip_P3_NormalDamage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster + Memosprite",
          "modifier": "LC_23036_CriticalDamage",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23036_Main",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "LC_23036_Listen",
              "valuePerStack": {
                "AbilityEquip_P2_MaxLayer": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                },
                "AbilityEquip_P3_NormalDamage": {
                  "operator": "Variables[0] (0.09) || RETURN",
                  "displayLines": "0.09",
                  "constants": [],
                  "variables": [
                    0.09
                  ]
                },
                "AbilityEquip_P4_CritDamage": {
                  "operator": "Variables[0] (0.09) || RETURN",
                  "displayLines": "0.09",
                  "constants": [],
                  "variables": [
                    0.09
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's base SPD by #1[i]. After the wearer and the wearer's memosprite attacks, the wearer gains 1 stack of \"Brocade.\" Each stack of \"Brocade\" increases the wearer's and their memosprite's CRIT DMG by #4[f1]%, stacking up to #2[i] time(s). When reaching maximum stacks, each \"Brocade\" stack additionally increases Basic ATK DMG dealt by #3[f1]%.",
  "params": [
    [
      12,
      6,
      0.09,
      0.09
    ],
    [
      14,
      6,
      0.105,
      0.105
    ],
    [
      16,
      6,
      0.12,
      0.12
    ],
    [
      18,
      6,
      0.135,
      0.135
    ],
    [
      20,
      6,
      0.15,
      0.15
    ]
  ]
}