const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003021,
  "trimCharacterName": 3003021,
  "abilityList": [
    "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part02",
    "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part01",
    "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part02",
    "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part01",
    "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part02",
    "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part01",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Passive",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part02",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part01",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02",
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part01",
    "3003021_Monster_W2_Beast02_01_Ability04_Part02",
    "3003021_Monster_W2_Beast02_01_Ability04_Part01",
    "3003021_Monster_W2_Beast02_01_Ability03_Part02",
    "3003021_Monster_W2_Beast02_01_Ability03_Part01",
    "3003021_Monster_W2_Beast02_01_Ability02_Part02",
    "3003021_Monster_W2_Beast02_01_Ability02_Part01",
    "3003021_Monster_W2_Beast02_01_Ability01_Part02",
    "3003021_Monster_W2_Beast02_01_Ability01_Part01",
    "3003021_Monster_W2_Beast02_01_AbilityP01_Part01",
    "3003021_Monster_W2_Beast02_01_PassiveAbilityInitiate",
    "3003021_Modifiers"
  ],
  "abilityObject": {
    "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag",
          "value": 1
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
          "duration": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Power_Flag",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Beast02_01_RLElite_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire1_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_271) || RETURN",
                        "displayLines": "UnusedUnderThisBase_271",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_271"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_270) || RETURN",
                        "displayLines": "UnusedUnderThisBase_270",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_270"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_272) || RETURN",
                          "displayLines": "UnusedUnderThisBase_272",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_272"
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
                "name": "Compare: Variable",
                "value1": "Fire1_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire2_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_271) || RETURN",
                        "displayLines": "UnusedUnderThisBase_271",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_271"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_270) || RETURN",
                        "displayLines": "UnusedUnderThisBase_270",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_270"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_272) || RETURN",
                          "displayLines": "UnusedUnderThisBase_272",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_272"
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
                "name": "Compare: Variable",
                "value1": "Fire2_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire3_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_271) || RETURN",
                        "displayLines": "UnusedUnderThisBase_271",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_271"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_270) || RETURN",
                        "displayLines": "UnusedUnderThisBase_270",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_270"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_272) || RETURN",
                          "displayLines": "UnusedUnderThisBase_272",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_272"
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
                "name": "Compare: Variable",
                "value1": "Fire3_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire4_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_271) || RETURN",
                        "displayLines": "UnusedUnderThisBase_271",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_271"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_270) || RETURN",
                        "displayLines": "UnusedUnderThisBase_270",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_270"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_272) || RETURN",
                          "displayLines": "UnusedUnderThisBase_272",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_272"
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
                "name": "Compare: Variable",
                "value1": "Fire4_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 4,
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire1_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire2_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire3_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire4_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CountFlag",
                  "context": "TargetEntity",
                  "value": 1
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CountFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire2_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire3_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire4_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability02_Part01",
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
          "ability": "Monster_W2_Beast02_01_RLElite_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire1_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Fire1_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleScore_FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 10
                    },
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_268) || RETURN",
                        "displayLines": "UnusedUnderThisBase_268",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_268"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_267) || RETURN",
                        "displayLines": "UnusedUnderThisBase_267",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_267"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_269) || RETURN",
                          "displayLines": "UnusedUnderThisBase_269",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_269"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (FireBallCount) || RETURN",
                "displayLines": "FireBallCount",
                "constants": [],
                "variables": [
                  "FireBallCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_RLElite_Ability01_Part01",
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
          "ability": "Monster_W2_Beast02_01_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Passive": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Passive",
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag",
          "value": 1
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
          "duration": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Power_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1633769221\">MModifier_Monster_W2_Beast02_01_BPListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-917579162\">W2_Beast02_01_ActivityTelevision_ModifyDelay</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part01",
      "childAbilityList": [
        "3003021_Monster_W2_Beast02_01_Ability04_Camera",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part01",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Beast02_01_ActivityTelevision_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Fire1_Flag",
                  "value": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
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
            "value1": "Fire1_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 5
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BattleScore_FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 10
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BattleScore_FireBallCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                  "valuePerStack": {
                    "isCaster": 1
                  }
                },
                {
                  "name": "Shot Fired"
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                      "valuePerStack": {
                        "isCaster": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Fire2_Flag",
                  "value": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
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
            "value1": "Fire2_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 5
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BattleScore_FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 10
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BattleScore_FireBallCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                  "valuePerStack": {
                    "isCaster": 1
                  }
                },
                {
                  "name": "Shot Fired"
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                      "valuePerStack": {
                        "isCaster": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Fire3_Flag",
                  "value": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
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
            "value1": "Fire3_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 5
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BattleScore_FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 10
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BattleScore_FireBallCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                  "valuePerStack": {
                    "isCaster": 1
                  }
                },
                {
                  "name": "Shot Fired"
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                      "valuePerStack": {
                        "isCaster": 0
                      }
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
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Shield"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Fire4_Flag",
                  "value": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "25%"
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
            "value1": "Fire4_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 5
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BattleScore_FireBallCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 10
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BattleScore_FireBallCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                  "valuePerStack": {
                    "isCaster": 1
                  }
                },
                {
                  "name": "Shot Fired"
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
                      "valuePerStack": {
                        "isCaster": 0
                      }
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
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2061561939\">MModifier_Monster_W2_Beast02_01_InsertMark</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1190635952\">MModifier_Monster_W2_Beast02_01_AttackSign</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
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
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
                          "displayLines": "{[Skill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[5]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
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
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
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
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
                          "displayLines": "{[Skill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[5]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
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
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
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
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
                          "displayLines": "{[Skill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[5]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
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
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
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
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
                          "displayLines": "{[Skill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[5]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
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
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                }
              }
            ]
          },
          "set": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CountFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire2_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire3_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire4_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01",
      "childAbilityList": [
        "3003021_Monster_W2_Beast02_01_Ability02_Camera",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part01",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W2_Beast02_01_ActivityTelevision_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire1_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Fire1_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleScore_FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 10
                    },
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
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
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2061561939\">MModifier_Monster_W2_Beast02_01_InsertMark</a>"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (FireBallCount) || RETURN",
                "displayLines": "FireBallCount",
                "constants": [],
                "variables": [
                  "FireBallCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
                  "valuePerStack": {
                    "isCaster": 1
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part01",
      "childAbilityList": [
        "3003021_Monster_W2_Beast02_01_Ability01_Camera",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part01",
        "3003021_Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02"
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
          "ability": "Monster_W2_Beast02_01_ActivityTelevision_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability04_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag",
          "value": 1
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
          "duration": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Power_Flag",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability04_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Beast02_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability03_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                    "displayLines": "{[Skill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[0]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "BeforeCaster"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                    "displayLines": "{[Skill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[0]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "AfterCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "BeforeCaster"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "AfterCaster"
                    }
                  ]
                }
              ]
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
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability03_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability03_Part01",
      "childAbilityList": [
        "3003021_Monster_W2_Beast02_01_Ability03_Camera",
        "3003021_Monster_W2_Beast02_01_Ability03_Part01",
        "3003021_Monster_W2_Beast02_01_Ability03_Part02"
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
          "ability": "Monster_W2_Beast02_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability02_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire1_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Fire1_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire2_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Fire2_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire3_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Fire3_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire4_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Fire4_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 5
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleScore_FireBallCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 10
                },
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 4,
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire1_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire2_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire3_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
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
                        "value1": "CountFlag",
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Fire4_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CountFlag",
                  "context": "TargetEntity",
                  "value": 1
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CountFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire2_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire3_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire4_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability02_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability02_Part01",
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
          "ability": "Monster_W2_Beast02_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability01_Part02": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FireBallCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Fire1_Flag",
                      "value": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Fire1_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleScore_FireBallCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 10
                    },
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Projectile's Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Projectile's Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
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
                        "EnergyGainPercent": "100%"
                      }
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
            "value1": "FireBallCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (FireBallCount) || RETURN",
                "displayLines": "FireBallCount",
                "constants": [],
                "variables": [
                  "FireBallCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_Ability01_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_Ability01_Part01",
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
          "ability": "Monster_W2_Beast02_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003021_Monster_W2_Beast02_01_AbilityP01_Part01": {
      "fileName": "3003021_Monster_W2_Beast02_01_AbilityP01_Part01",
      "childAbilityList": [
        "3003021_Monster_W2_Beast02_01_AbilityP01_Part01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"431932285\">W2_Beast02_01_ListenBreak</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__431932285\">W2_Beast02_01_ListenBreak</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003021_Monster_W2_Beast02_01_PassiveAbilityInitiate": {
      "fileName": "3003021_Monster_W2_Beast02_01_PassiveAbilityInitiate",
      "skillTrigger": "SkillP02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1525214094\">W2_Beast02_01_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleScore_FireBallCount"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Storage_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire1_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire2_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire3_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Fire4_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"562497945\">Enemy_Beast02_01_Ability03Listener</a>"
        },
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003021_Modifiers": {
      "fileName": "3003021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1525214094\">W2_Beast02_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleScore_FireBallCount",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Withdrawal from Sweets",
                          "desc": "Rebound #1 Soda Bottle(s) thrown by Dreamjolt Troupe's Sweet Gorilla with a Shield in a single battle",
                          "rarity": "Low",
                          "params": [
                            10
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1633769221\">MModifier_Monster_W2_Beast02_01_BPListener</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "MuteHitFly",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                  "onlyRemoveOwnersInstance": true,
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"130206318\">Monster_W2_Beast02_Edict</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"130206318\">Monster_W2_Beast02_Edict</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Storage_Flag",
            "Power_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-358519479\">Enemy_Monster_W2_Beast02_01_ActivityTelevision_AttackDownRatio</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "STAT_AttackDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2061561939\">MModifier_Monster_W2_Beast02_01_InsertMark</a>",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [
            "Fire1_Flag",
            "BattleScore_FireBallCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__660808743\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark4</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                    "invertCondition": true
                  }
                },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "isCaster"
          ],
          "latentQueue": [
            "Storage_Flag",
            "Fire1_Flag",
            "BattleScore_FireBallCount",
            "Fire2_Flag",
            "Fire3_Flag",
            "Fire4_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__610475886\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark3</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                    "invertCondition": true
                  }
                },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "isCaster"
          ],
          "latentQueue": [
            "Storage_Flag",
            "Fire1_Flag",
            "BattleScore_FireBallCount",
            "Fire2_Flag",
            "Fire3_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__627253505\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                    "invertCondition": true
                  }
                },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Shot Fired"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "isCaster"
          ],
          "latentQueue": [
            "Storage_Flag",
            "Fire1_Flag",
            "BattleScore_FireBallCount",
            "Fire2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__576920648\">Enemy_W2_Beast02_01_ActivityTelevision_HitMark1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"230893383\">Modifier_BattleEventAbility_ActivityTelevision_EliteWaveMark</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "isCaster",
                    "compareType": "=",
                    "value2": 0
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
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Shot Fired"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "isCaster"
          ],
          "latentQueue": [
            "Fire1_Flag",
            "BattleScore_FireBallCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-917579162\">W2_Beast02_01_ActivityTelevision_ModifyDelay</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - MDF_PropertyValue)"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Storage_Flag",
            "Power_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-775084150\">Enemy_W2_Beast02_01_Ability02_Target04</a>",
          "stackData": [],
          "latentQueue": [
            "Storage_Flag",
            "Fire1_Flag",
            "BattleScore_FireBallCount",
            "Fire2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-858972245\">Enemy_W2_Beast02_01_Ability02_Target03</a>",
          "stackData": [],
          "latentQueue": [
            "Storage_Flag",
            "Fire1_Flag",
            "BattleScore_FireBallCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-875749864\">Enemy_W2_Beast02_01_Ability02_Target02</a>",
          "stackData": [],
          "latentQueue": [
            "Storage_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-825417007\">Enemy_W2_Beast02_01_Ability02_Target01</a>",
          "stackData": [],
          "latentQueue": [
            "Storage_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__562497945\">Enemy_Beast02_01_Ability03Listener</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1058302594\">Enemy_Beast02_01_BodyEffect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Storage_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Storage_Flag"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 6
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BattleScore_FireBallCount",
            "AIFlag",
            "Phase_Flag",
            "Storage_Flag",
            "Fire1_Flag",
            "Fire2_Flag",
            "Fire3_Flag",
            "Fire4_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-111806612\">Enemy_Beast02_01_BodyEffect_Ability04Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Storage_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1058302594\">Enemy_Beast02_01_BodyEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Fire4_Flag",
            "Fire3_Flag",
            "Fire2_Flag",
            "Fire1_Flag",
            "Storage_Flag",
            "Phase_Flag",
            "AIFlag",
            "BattleScore_FireBallCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1357609545\">Enemy_Beast02_01_AllDamageReduce</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__117) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__117",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__117"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1255288524\">Monster_Standard_AllWeakControl</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}