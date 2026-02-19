const compositeAbilityObject = {
  "fullCharacterName": 3003051,
  "trimCharacterName": 3003051,
  "abilityList": [
    "3003051_Monster_W3_Figure_01_AssistAbility01_Effect",
    "3003051_Monster_W3_Figure_01_AssistAbility01_Perform",
    "3003051_Monster_W3_Figure_01_AssistAbility01_Logic",
    "3003051_Monster_W3_Figure_01_PassiveAbility_Initiate",
    "3003051_Monster_W3_Figure_01_Ability07_Part02",
    "3003051_Monster_W3_Figure_01_Ability07_Part01",
    "3003051_Monster_W3_Figure_01_Ability05_Part02",
    "3003051_Monster_W3_Figure_01_Ability05_Part01",
    "3003051_Monster_W3_Figure_01_Ability04_Part02",
    "3003051_Monster_W3_Figure_01_Ability04_Part01",
    "3003051_Monster_W3_Figure_01_Ability02_Part02",
    "3003051_Monster_W3_Figure_01_Ability02_Part01",
    "3003051_Monster_W3_Figure_01_Ability01_Part02",
    "3003051_Monster_W3_Figure_01_Ability01_Part01",
    "3003051_Modifiers"
  ],
  "abilityObject": {
    "3003051_Monster_W3_Figure_01_AssistAbility01_Effect": {
      "fileName": "3003051_Monster_W3_Figure_01_AssistAbility01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_AssistAbility01_Perform": {
      "fileName": "3003051_Monster_W3_Figure_01_AssistAbility01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_AssistAbility01_Logic": {
      "fileName": "3003051_Monster_W3_Figure_01_AssistAbility01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "tag": "DOT_Burn",
      "references": []
    },
    "3003051_Monster_W3_Figure_01_PassiveAbility_Initiate": {
      "fileName": "3003051_Monster_W3_Figure_01_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
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
          "modifier": "<a class=\"gModGreen\" id=\"1035479687\">Monster_W3_Figure_01_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"455167654\">Enemy_W3_Figure_01_AudioControllerForChosenOne</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__455167654\">Enemy_W3_Figure_01_AudioControllerForChosenOne</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1035479687\">Monster_W3_Figure_01_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003051_Monster_W3_Figure_01_Ability07_Part02": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability07_Part02",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_01_Ability07_Part01",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill05Flag",
          "context": "TargetEntity",
          "value": 1,
          "min": 1,
          "max": 3
        },
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                "displayLines": "{[Skill07[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                "displayLines": "{[Skill07[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                "displayLines": "{[Skill07[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                "displayLines": "{[Skill07[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                "displayLines": "{[Skill01[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[4]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                  "displayLines": "{[Skill07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "tag": "DOT",
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability07_Part01": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability07_Part01",
      "childAbilityList": [
        "3003051_Monster_W3_Figure_01_Ability07_Part01",
        "3003051_Monster_W3_Figure_01_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability05_Part02": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1874544817\">Monster_W3_Figure_01_ChargeEffect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_DOT"
          },
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            },
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability05_Part01": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability05_Part01",
      "childAbilityList": [
        "3003051_Monster_W3_Figure_01_Ability05_Camera",
        "3003051_Monster_W3_Figure_01_Ability05_Part01",
        "3003051_Monster_W3_Figure_01_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability04_Part02": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                  "displayLines": "{[Skill04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[2]]}"
                  ]
                }
              },
              "success": []
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                "displayLines": "{[Skill01[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[4]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                  "displayLines": "{[Skill04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[2]]}"
                  ]
                }
              },
              "success": []
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability04_Part01": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability04_Part01",
      "childAbilityList": [
        "3003051_Monster_W3_Figure_01_Ability04_Camera",
        "3003051_Monster_W3_Figure_01_Ability04_Part01",
        "3003051_Monster_W3_Figure_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability02_Part02": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Random Event",
              "odds": [
                0.5,
                0.5
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                    "displayLines": "{[Skill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[1]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                    "displayLines": "{[Skill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[0]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                    "displayLines": "{[Skill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[3]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    }
                  },
                  "success": []
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                    "displayLines": "{[Skill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[1]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                    "displayLines": "{[Skill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[0]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                      "displayLines": "{[Skill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[2]]}"
                      ]
                    }
                  },
                  "success": []
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability02_Part01": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability02_Part01",
      "childAbilityList": [
        "3003051_Monster_W3_Figure_01_Ability02_Camera",
        "3003051_Monster_W3_Figure_01_Ability02_Part01",
        "3003051_Monster_W3_Figure_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability01_Part02": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                "displayLines": "{[Skill01[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                }
              },
              "success": []
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                "displayLines": "{[Skill01[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                "displayLines": "{[Skill01[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[4]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                }
              },
              "success": []
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3003051_Monster_W3_Figure_01_Ability01_Part01": {
      "fileName": "3003051_Monster_W3_Figure_01_Ability01_Part01",
      "childAbilityList": [
        "3003051_Monster_W3_Figure_01_Ability01_Camera",
        "3003051_Monster_W3_Figure_01_Ability01_Part01",
        "3003051_Monster_W3_Figure_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Figure_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3003051_Modifiers": {
      "fileName": "3003051_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-854770788\">W3_Figure_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Literary Fragment",
                      "desc": "After \"Present Inebriated in Revelry\" enters the Charging state, interrupt its Charging",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (Modifier_Electric_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * Modifier_Electric_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_PoisonLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || RETURN",
                      "displayLines": "Modifier_Electric_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (Modifier_Electric_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * Modifier_Electric_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_PoisonLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Modifier_Electric_DamagePercentage"
          ],
          "latentQueue": [],
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
          "type": "Debuff",
          "effectName": "Carousal of Revelry",
          "statusName": "Carousal of Revelry",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Modifier_Poison_DamagePercentage"
          ],
          "latentQueue": [],
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
          "type": "Debuff",
          "effectName": "Carousal of Wantonness",
          "statusName": "Carousal of Wantonness",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-854770788\">W3_Figure_01_BattleScore1</a>"
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_DOT"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                      },
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-854770788\">W3_Figure_01_BattleScore1</a>"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "About to use \"Wash Away All Sins For You\"",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "My Cup Runneth Over"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Target Locked On"
        }
      ],
      "references": []
    }
  }
}