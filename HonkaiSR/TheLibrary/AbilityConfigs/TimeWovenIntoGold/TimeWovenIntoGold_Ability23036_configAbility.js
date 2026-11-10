const configAbility = {
  "fileName": "TimeWovenIntoGold_Ability23036",
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
      "modifier": "<a class=\"gModGreen\" id=\"249618925\">LC_23036_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1248014501\">LC_23036_Effect_Servant</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
      "stackType": "Replace",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span>.",
      "type": "Buff",
      "statusName": "Brocade",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "_NormalDamageRatioTotal"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"214727884\">LC_23036_CriticalDamage</a>",
              "valuePerStack": {
                "_CritDamageRatio": {
                  "displayLines": "_CritDamageRatioTotal"
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
                  "name": "Update Modifier Description",
                  "popUpText": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span> and Basic ATK DMG by <span class=\"descriptionNumberColor\">_NormalDamageRatioTotal</span>."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2056335473\">LC_23036_Effect</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
      "stackType": "Replace",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span>.",
      "type": "Buff",
      "effectName": "Brocade",
      "statusName": "Brocade",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1248014501\">LC_23036_Effect_Servant</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "_CritDamageRatioTotal": {
              "displayLines": "_CritDamageRatioTotal"
            },
            "_NormalDamageRatioTotal": {
              "displayLines": "_NormalDamageRatioTotal"
            },
            "_MaxLayerSwitch2": {
              "displayLines": "_MaxLayerSwitch2"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_MaxLayerSwitch"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "_NormalDamageRatioTotal"
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
              "value": {
                "displayLines": "(_CritDamageRatio * _Layer)"
              },
              "variableName": "_CritDamageRatioTotal"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"214727884\">LC_23036_CriticalDamage</a>",
              "valuePerStack": {
                "_CritDamageRatio": {
                  "displayLines": "_CritDamageRatioTotal"
                }
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
                "value1": "_Layer",
                "compareType": "=",
                "value2": {
                  "displayLines": "_MaxLayer"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_MaxLayerSwitch"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(__NormalDamageRatio * _Layer)"
                  },
                  "variableName": "_NormalDamageRatioTotal"
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">_CritDamageRatioTotal</span> and Basic ATK DMG by <span class=\"descriptionNumberColor\">_NormalDamageRatioTotal</span>."
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1248014501\">LC_23036_Effect_Servant</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
              "valuePerStack": {
                "_CritDamageRatioTotal": {
                  "displayLines": "_CritDamageRatioTotal"
                },
                "_NormalDamageRatioTotal": {
                  "displayLines": "_NormalDamageRatioTotal"
                },
                "_MaxLayerSwitch2": {
                  "displayLines": "_MaxLayerSwitch2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__214727884\">LC_23036_CriticalDamage</a>",
      "stackType": "Replace",
      "stackData": [
        "_CritDamageRatio"
      ],
      "latentQueue": [
        "_MaxLayerSwitch"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "displayLines": "_CritDamageRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-768418277\">LC_23036_Listen</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"214727884\">LC_23036_CriticalDamage</a>",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Caster}} + {{Caster's Memosprite}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2056335473\">LC_23036_Effect</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"214727884\">LC_23036_CriticalDamage</a>",
                      "valuePerStack": {
                        "_CritDamageRatio": {
                          "displayLines": "AbilityEquip_P4_CritDamage"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2056335473\">LC_23036_Effect</a>[<span class=\"descriptionNumberColor\">Brocade</span>]",
                  "stackLimit": {
                    "displayLines": "AbilityEquip_P2_MaxLayer"
                  },
                  "valuePerStack": {
                    "_CritDamageRatio": {
                      "displayLines": "AbilityEquip_P4_CritDamage"
                    },
                    "__NormalDamageRatio": {
                      "displayLines": "AbilityEquip_P3_NormalDamage"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__249618925\">LC_23036_Main</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-768418277\">LC_23036_Listen</a>",
              "valuePerStack": {
                "AbilityEquip_P2_MaxLayer": {
                  "displayLines": "6"
                },
                "AbilityEquip_P3_NormalDamage": {
                  "displayLines": "0.09"
                },
                "AbilityEquip_P4_CritDamage": {
                  "displayLines": "0.09"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]"
        }
      ]
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