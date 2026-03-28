const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4023012,
  "trimCharacterName": 4023012,
  "abilityList": [
    "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
    "4023012_Monster_W4_Griffin_Ability04_Part02",
    "4023012_Monster_W4_Griffin_Ability04_Part01",
    "4023012_Monster_W4_Griffin_Ability03_Part02",
    "4023012_Monster_W4_Griffin_Ability03_Part01",
    "4023012_Monster_W4_Griffin_Ability02_Part02",
    "4023012_Monster_W4_Griffin_Ability02_Part01",
    "4023012_Monster_W4_Griffin_Ability01_Part02",
    "4023012_Monster_W4_Griffin_Ability01_Part01",
    "4023012_Monster_W4_Griffin_PassiveAbilityInitiate",
    "4023012_Modifiers",
    "4023012_Functions"
  ],
  "abilityObject": {
    "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
      "childAbilityList": [
        "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Camera",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "UI Display Event",
          "popUpText": "Heralding the Dawn"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": "NOT=",
            "value2": 1,
            "livingTargets": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 2
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "compareType": ">=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1715953719\">Monster_W4_Griffin_Ability02_Target03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699176100\">Monster_W4_Griffin_Ability02_Target02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1749508957\">Monster_W4_Griffin_Ability02_Target01</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "UI Display Event",
          "popUpText": "Triple Waning Moon"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 4,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 3,
                "livingTargets": true
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#Skill02_P1_DamagePercentage",
          "target2": null,
          "variable2": "Unicorn_Skill02_DamagePercentage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P1_Debuff_Chance",
          "target2": null,
          "variable2": "Unicorn_Debuff_Chance"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P2_Debuff_LifeTime",
          "target2": null,
          "variable2": "Unicorn_Debuff_LifeTime"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P3_Debuff_ActionDelayRatio",
          "target2": null,
          "variable2": "Unicorn_Debuff_ActionDelayRatio"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P4_Debuff_DamagePercentage",
          "target2": null,
          "variable2": "Unicorn_Debuff_DamagePercentage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 4,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 3,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Skill02_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Skill02_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                    "displayLines": "Unicorn_Debuff_LifeTime",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                    "displayLines": "Unicorn_Debuff_Chance",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_ActionDelayRatio"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                      "displayLines": "Unicorn_Debuff_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_DamagePercentage"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Skill02_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Skill02_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                    "displayLines": "Unicorn_Debuff_LifeTime",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                    "displayLines": "Unicorn_Debuff_Chance",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_ActionDelayRatio"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                      "displayLines": "Unicorn_Debuff_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_DamagePercentage"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Unicorn_Skill02_DamagePercentage) || RETURN",
                  "displayLines": "Unicorn_Skill02_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Unicorn_Skill02_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] (Unicorn_Debuff_LifeTime) || RETURN",
                    "displayLines": "Unicorn_Debuff_LifeTime",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (Unicorn_Debuff_Chance) || RETURN",
                    "displayLines": "Unicorn_Debuff_Chance",
                    "constants": [],
                    "variables": [
                      "Unicorn_Debuff_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (Unicorn_Debuff_ActionDelayRatio) || RETURN",
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_ActionDelayRatio"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] (Unicorn_Debuff_DamagePercentage) || RETURN",
                      "displayLines": "Unicorn_Debuff_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Unicorn_Debuff_DamagePercentage"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Camera",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Camera02",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
        "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "compareType": "=",
                "value2": 1,
                "livingTargets": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "compareType": "=",
                "value2": 1,
                "livingTargets": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (FREEVAR) || RETURN",
            "displayLines": "FREEVAR",
            "constants": [],
            "variables": [
              "FREEVAR"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DieSumsCheck",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_DieSums) || RETURN",
              "displayLines": "_DieSums",
              "constants": [],
              "variables": [
                "_DieSums"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DieSumsCheck",
          "value": {
            "operator": "Variables[0] (_DieSums) || RETURN",
            "displayLines": "_DieSums",
            "constants": [],
            "variables": [
              "_DieSums"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck02",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SummonCounts",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "Assign Target Battle-Location",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "row": 0
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-766200550\">Monster_W4_Griffin_LocalLegend_Partner</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "removeShields": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Mascot}}"
          },
          "variableName": "_MascotCounts",
          "livingTargets": true
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Constants[0] (3) || Variables[0] (_MascotCounts) || SUB || RETURN",
            "displayLines": "(3 - _MascotCounts)",
            "constants": [
              3
            ],
            "variables": [
              "_MascotCounts"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>",
            "invertCondition": true
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "removeShields": true
        },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck02",
          "value": 0
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-757280196\">W4_Griffin_LocalLegend_BattleScore1</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4023011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Earthshaker Leo: Solblaze Winged Beast"
              },
              {
                "name": "Enemy ID",
                "ID": 402301100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_MaxDamageReduce",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill02[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill02[5]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426007,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_FactorK",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[7]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[7]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[7]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Phase1Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Phase2Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusInit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusSums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Init",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[8]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[8]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[8]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[9]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[9]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[9]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusLimit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[10]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[10]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[10]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Limit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[11]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[11]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[11]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_FactorK",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[6]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Phase1Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Phase2Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusInit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusSums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Init",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Sums",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[5]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BonusLimit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[6]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Bonus2Limit",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[7]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[7]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"364693111\">Enemy_W4_Griffin_LocalLegend_Status</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__203272356\">Enemy_W4_Griffin_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Mascot}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "_ListenCorrectInteract",
                    "compareType": "=",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Monster_W4_Mascot_Ability04_LocalLegend_Part03"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>"
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 426007,
                        "compareType": "=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_AddedDamageRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023012_Monster_W4_Griffin_Ability04_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
              "displayLines": "UnusedUnderThisBase_387",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_387"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
              "displayLines": "UnusedUnderThisBase_387",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_387"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
              "displayLines": "UnusedUnderThisBase_387",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_387"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
                      "displayLines": "UnusedUnderThisBase_387",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_387"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
                      "displayLines": "UnusedUnderThisBase_387",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_387"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_378) || RETURN",
                      "displayLines": "UnusedUnderThisBase_378",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_378"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability04_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Noontide Gryphon: Skill04 Target}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "target2": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Return Target",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability03_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Noontide Gryphon: Skill03 Target}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability03_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Noontide Gryphon: Skill03 Target}}"
          },
          "variableName": "_TargetCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_TargetCount",
            "compareType": "<",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability02_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273402705\">Monster_W4_Griffin_NoSummon</a>",
            "invertCondition": true
          },
          "passed": [
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
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                "displayLines": "{[Skill02[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                "displayLines": "{[Skill02[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID03) || RETURN",
                    "displayLines": "SummonID03",
                    "constants": [],
                    "variables": [
                      "SummonID03"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                "displayLines": "{[Skill02[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[4]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": "NOT=",
            "value2": 1,
            "livingTargets": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 2
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "compareType": ">=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Location",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "spot": "KeepOnFirst"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Location",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "spot": "KeepOnLast"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Location",
                  "value": 0
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1715953719\">Monster_W4_Griffin_Ability02_Target03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699176100\">Monster_W4_Griffin_Ability02_Target02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1749508957\">Monster_W4_Griffin_Ability02_Target01</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023012_Monster_W4_Griffin_Ability02_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability01_Part02": {
      "fileName": "4023012_Monster_W4_Griffin_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                "displayLines": "UnusedUnderThisBase_376",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_376"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                "displayLines": "UnusedUnderThisBase_375",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_375"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                  "displayLines": "UnusedUnderThisBase_377",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_377"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_Ability01_Part01": {
      "fileName": "4023012_Monster_W4_Griffin_Ability01_Part01",
      "childAbilityList": [
        "4023012_Monster_W4_Griffin_Ability01_Camera",
        "4023012_Monster_W4_Griffin_Ability01_Part01",
        "4023012_Monster_W4_Griffin_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4023012_Monster_W4_Griffin_PassiveAbilityInitiate": {
      "fileName": "4023012_Monster_W4_Griffin_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__203272356\">Enemy_W4_Griffin_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023012_Modifiers": {
      "fileName": "4023012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-757280196\">W4_Griffin_LocalLegend_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BattleScoreCount"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Enemy Team",
                        "invertCondition": true
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
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 402201,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 401205,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null,
                                    "isCompareUniqueID": true
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "DieWithBonus",
                                    "compareType": "=",
                                    "value2": 1
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "BattleScoreCount",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "BattleScoreCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 15,
                  "maxValue": 9999,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Transcendent Shot",
                          "desc": "In any difficulty against Earthshaker Leo, ally targets defeat \"Back Row Target\" #1 times",
                          "rarity": "Low",
                          "params": [
                            15
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (MDF_Value) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || Constants[0] (100) || DIV || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_Value * 100)) / 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "CEIL",
                      "MDF_Value"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Value) || RETURN",
                    "displayLines": "MDF_Value",
                    "constants": [],
                    "variables": [
                      "MDF_Value"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_AddedDamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_AddedDamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_AddedDamageRatio"
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
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddedDamageRatio"
          ],
          "latentQueue": [
            "_ListenCorrectInteract",
            "AIFlag"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Other",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__364693111\">Enemy_W4_Griffin_LocalLegend_Status</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living/Death State",
                        "state": "Mask_AliveOnly"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 402201,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 401205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_SummonCounts",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_SummonCounts",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "InsertCheck02",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertCheck02",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
                      "priorityTag": "LevelPerformMonster",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living/Death State",
                        "state": "Mask_AliveOnly"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 402201,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 401205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "DieWithBonus",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_MonsterChangeCnt02",
                      "context": "TargetEntity",
                      "value": 1
                    },
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
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_DieSums",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (_Phase1Sums) || RETURN",
                            "displayLines": "_Phase1Sums",
                            "constants": [],
                            "variables": [
                              "_Phase1Sums"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Phase1Sums",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_DieSums) || RETURN",
                              "displayLines": "_DieSums",
                              "constants": [],
                              "variables": [
                                "_DieSums"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                              "valuePerStack": {
                                "MDF_Value": {
                                  "operator": "Variables[0] (_SummonCounts) || Variables[1] (EXP^) || Variables[2] (_DieSums) || Variables[3] (_Phase1Sums) || DIV || Variables[4] (_FactorK) || PARAM_2 || FUNCTION || MUL || RETURN",
                                  "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase1Sums), _FactorK))",
                                  "constants": [],
                                  "variables": [
                                    "_SummonCounts",
                                    "EXP^",
                                    "_DieSums",
                                    "_Phase1Sums",
                                    "_FactorK"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_DieSums",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (_Phase2Sums) || RETURN",
                            "displayLines": "_Phase2Sums",
                            "constants": [],
                            "variables": [
                              "_Phase2Sums"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Phase2Sums",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_DieSums) || RETURN",
                              "displayLines": "_DieSums",
                              "constants": [],
                              "variables": [
                                "_DieSums"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}} + {{EVENT[RoT] Noontide Gryphon: Partner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                              "valuePerStack": {
                                "MDF_Value": {
                                  "operator": "Variables[0] (_SummonCounts) || Variables[1] (EXP^) || Variables[2] (_DieSums) || Variables[3] (_Phase2Sums) || DIV || Variables[4] (_FactorK) || PARAM_2 || FUNCTION || MUL || RETURN",
                                  "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase2Sums), _FactorK))",
                                  "constants": [],
                                  "variables": [
                                    "_SummonCounts",
                                    "EXP^",
                                    "_DieSums",
                                    "_Phase2Sums",
                                    "_FactorK"
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
          ],
          "stackData": [],
          "latentQueue": [
            "_MaxDamageReduce"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 4260020,
                            "compareType": ">=",
                            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260026,
                            "compareType": "<=",
                            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S2_1_Check",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Harpy}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Mascot}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BonusCheck",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SummonCheck",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieSums",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieSumsCheck",
                      "value": 0
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-766200550\">Monster_W4_Griffin_LocalLegend_Partner</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1673158785\">Monster_W4_Griffin_LocalLegend_UnicornMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1065862437\">W4_Griffin_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_Griffin_00_Debuff_Resolve"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "W4_Griffin_00_Debuff_Resolve",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Fading Light",
                          "desc": "Remove #1 \"Aquila's Mark(s)\" through defeating enemy targets in a single battle",
                          "rarity": "Low",
                          "params": [
                            3
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1273402705\">Monster_W4_Griffin_NoSummon</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1209574560\">Enemy_W4_Griffin_UltraReady</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
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
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
                          }
                        }
                      ]
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true,
                              "casterFilter": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            }
                          }
                        ]
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Locked on by %CasterName as their attack target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1452860689\">Enemy_W4_Griffin_RemoveSignAvatar</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
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
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1065862437\">W4_Griffin_BattleScore1</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": "<",
                        "value2": 2
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
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
                        "value1": "MDF_Layer",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                            "displayLines": "(-1 * _GriffinMark_SPCost)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_GriffinMark_SPCost"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (_GriffinMark_DamagePercentage) || RETURN",
                              "displayLines": "_GriffinMark_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "_GriffinMark_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                          "removeAllInstances": true
                        },
                        "Modifier Deletes Itself"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "DamageFlat": {
                              "operator": "Variables[0] (_MaxHP) || Variables[1] (_MixedMark_LoseHpRatio) || MUL || RETURN",
                              "displayLines": "(_MaxHP * _MixedMark_LoseHpRatio)",
                              "constants": [],
                              "variables": [
                                "_MaxHP",
                                "_MixedMark_LoseHpRatio"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                            "displayLines": "(-1 * _GriffinMark_SPCost)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_GriffinMark_SPCost"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                          "duration": {
                            "operator": "Variables[0] (_UnicornMark_LifeTime) || RETURN",
                            "displayLines": "_UnicornMark_LifeTime",
                            "constants": [],
                            "variables": [
                              "_UnicornMark_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (_UnicornMark_Chance) || RETURN",
                            "displayLines": "_UnicornMark_Chance",
                            "constants": [],
                            "variables": [
                              "_UnicornMark_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_ActionDelayRatio": {
                              "operator": "Variables[0] (_UnicornMark_ActionDelayRatio) || RETURN",
                              "displayLines": "_UnicornMark_ActionDelayRatio",
                              "constants": [],
                              "variables": [
                                "_UnicornMark_ActionDelayRatio"
                              ]
                            },
                            "Modifier_Entangle_DamagePercentage": {
                              "operator": "Variables[0] (_UnicornMark_DebuffDamagePercentage) || RETURN",
                              "displayLines": "_UnicornMark_DebuffDamagePercentage",
                              "constants": [],
                              "variables": [
                                "_UnicornMark_DebuffDamagePercentage"
                              ]
                            },
                            "Modifier_Entangle_DamageValue": 0
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                          "removeAllInstances": true
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_GriffinMark_SPCost",
            "_GriffinMark_DamagePercentage",
            "_MixedMark_LoseHpRatio",
            "_UnicornMark_Chance",
            "_UnicornMark_LifeTime",
            "_UnicornMark_ActionDelayRatio",
            "_UnicornMark_DebuffDamagePercentage",
            "_UnicornMark_DamagePercentage"
          ],
          "latentQueue": [
            "_Location"
          ],
          "description": "When a target gains \"Aquila's Mark\" again, dispel all marks, and they take Fire DMG and lose Energy. When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take True DMG based on <span class=\"descriptionNumberColor\">_MixedMark_LoseHpRatio</span> of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. After any ally target defeats an enemy target, this mark can be dispelled, prioritizing dispelling the mark from the target that dealt the fatal damage.",
          "type": "Other",
          "effectName": "Aquila's Mark",
          "statusName": "Aquila's Mark",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "W4_Griffin_00_Debuff_Resolve",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "W4_Griffin_00_Debuff_Resolve",
                          "value": 1,
                          "max": 3
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
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
            "_Location"
          ]
        }
      ],
      "references": []
    },
    "4023012_Functions": {
      "fileName": "4023012_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1587865992\">W4_Griffin_LocalLegend_Summon</a>",
          "parse": [
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SummonCheck",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4023012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BonusCheck",
                      "value": {
                        "operator": "Variables[0] (_SummonCheck) || Variables[1] (_Bonus2Init) || SUB || Variables[2] (_Bonus2Sums) || DIV || RETURN",
                        "displayLines": "((_SummonCheck - _Bonus2Init) / _Bonus2Sums)",
                        "constants": [],
                        "variables": [
                          "_SummonCheck",
                          "_Bonus2Init",
                          "_Bonus2Sums"
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SummonCheck",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BonusCheck",
                  "value": {
                    "operator": "Variables[0] (_SummonCheck) || Variables[1] (_BonusInit) || SUB || Variables[2] (_BonusSums) || DIV || RETURN",
                    "displayLines": "((_SummonCheck - _BonusInit) / _BonusSums)",
                    "constants": [],
                    "variables": [
                      "_SummonCheck",
                      "_BonusInit",
                      "_BonusSums"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Mascot}}"
              },
              "variableName": "_MascotCounts",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_BonusCheck",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (WHOLE) || Variables[1] (_BonusCheck) || PARAM_1 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(_BonusCheck)",
                  "constants": [],
                  "variables": [
                    "WHOLE",
                    "_BonusCheck"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MascotReadyToSum",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_MascotReadyToSum",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MascotCounts",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4023012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_BonusCheck02",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (_Bonus2Limit) || RETURN",
                              "displayLines": "_Bonus2Limit",
                              "constants": [],
                              "variables": [
                                "_Bonus2Limit"
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_BonusCheck02",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (_BonusLimit) || Variables[1] (_Bonus2Limit) || ADD || RETURN",
                              "displayLines": "(_BonusLimit + _Bonus2Limit)",
                              "constants": [],
                              "variables": [
                                "_BonusLimit",
                                "_Bonus2Limit"
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MascotReadyToSum",
                  "value": -1
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID03) || RETURN",
                        "displayLines": "SummonID03",
                        "constants": [],
                        "variables": [
                          "SummonID03"
                        ]
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_DelayCase) || RETURN",
                    "displayLines": "_DelayCase",
                    "constants": [],
                    "variables": [
                      "_DelayCase"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DelayRatio",
                          "value": {
                            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                            "displayLines": "{[Skill02[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill02[1]]}"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DelayRatio",
                          "value": {
                            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                            "displayLines": "{[Skill02[2]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill02[2]]}"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DelayRatio",
                          "value": {
                            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                            "displayLines": "{[Skill02[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill02[3]]}"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DelayRatio",
                          "value": {
                            "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                            "displayLines": "{[Skill02[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill02[4]]}"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DelayCase",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayCase",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_DelayCase",
                      "value": 1,
                      "max": 3
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (_DelayRatio) || RETURN",
                    "displayLines": "_DelayRatio",
                    "constants": [],
                    "variables": [
                      "_DelayRatio"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        }
      ],
      "references": []
    }
  }
}