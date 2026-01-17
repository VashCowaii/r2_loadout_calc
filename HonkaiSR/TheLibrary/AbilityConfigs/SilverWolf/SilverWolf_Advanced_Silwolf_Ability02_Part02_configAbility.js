const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.13) || RETURN",
          "displayLines": "0.13",
          "constants": [],
          "variables": [
            0.13
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1.2) || RETURN",
        "displayLines": "1.2",
        "constants": [],
        "variables": [
          1.2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "_WeakType": 0,
        "_TheFirstAvatarWeakType": {
          "operator": "Variables[0] (_TheFirstAvatarWeakType) || RETURN",
          "displayLines": "_TheFirstAvatarWeakType",
          "constants": [],
          "variables": [
            "_TheFirstAvatarWeakType"
          ]
        }
      },
      "success": [
        {
          "name": "Define Custom Variable",
          "variableName": "_BPFlag",
          "value": 0
        }
      ],
      "failed": []
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_BPFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Advanced_Silwolf_Ability02_Success"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Advanced_Silwolf_Ability02_Failed"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Advanced_Silwolf_Ability02_Success",
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 8
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 16
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 32
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 64
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.96) || RETURN",
              "displayLines": "1.96",
              "constants": [],
              "variables": [
                1.96
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Physical"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Fire"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Ice"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 8
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Lightning"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 16
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Wind"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 32
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Quantum"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
            "compareType": "=",
            "value2": 64
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Implant Weakness: Imaginary"
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "popUpText": "Weakness Repeated",
                  "living": true
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Advanced_Silwolf_Ability02_Failed",
      "parse": [
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.96) || RETURN",
              "displayLines": "1.96",
              "constants": [],
              "variables": [
                1.96
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ]
    }
  ],
  "references": []
}