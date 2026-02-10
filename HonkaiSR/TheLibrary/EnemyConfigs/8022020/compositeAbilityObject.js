const compositeAbilityObject = {
  "fullCharacterName": 8022020,
  "trimCharacterName": 8022020,
  "abilityList": [
    "8022020_Monster_SW_Minion01_01_PassiveAbility_Insert_Part01",
    "8022020_Monster_SW_Minion01_01_Ability03_Part02",
    "8022020_Monster_SW_Minion01_01_Ability03_Part01",
    "8022020_Monster_SW_Minion01_01_Ability02_Part02",
    "8022020_Monster_SW_Minion01_01_Ability02_Part01",
    "8022020_Monster_SW_Minion01_01_Ability01_Part02",
    "8022020_Monster_SW_Minion01_01_Ability01_Part01",
    "8022020_Monster_SW_Minion01_01_Passive01",
    "8022020_Modifiers"
  ],
  "abilityObject": {
    "8022020_Monster_SW_Minion01_01_PassiveAbility_Insert_Part01": {
      "fileName": "8022020_Monster_SW_Minion01_01_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Entomon Eulogy"
        },
        "Deleted bullshit",
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Wind"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"664236628\">StageAbility_RogueDLC_Floor03_02_Modifier</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[3]]}"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[4]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio_PerLayer": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Variables[1] ({[Skill03[5]]}) || ADD || RETURN",
                          "displayLines": "({[PassiveSkill01[2]]} + {[Skill03[5]]})",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[2]]}",
                            "{[Skill03[5]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[1]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[1]]}"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[3]]}"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[4]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio_PerLayer": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[2]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[1]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[1]]}"
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
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability03_Part02": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability03_Part02",
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
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
            }
          ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                "displayLines": "{[Skill03[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[3]]}"
                ]
              },
              "baseChance": 1,
              "stackLimit": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                  "displayLines": "{[Skill03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability03_Part01": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability03_Part01",
      "childAbilityList": [
        "8022020_Monster_SW_Minion01_01_Ability03_Camera",
        "8022020_Monster_SW_Minion01_01_Ability03_Part01",
        "8022020_Monster_SW_Minion01_01_Ability03_Part02"
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
          "ability": "Monster_SW_Minion01_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
          }
        }
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability02_Part02": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"585935533\">Monster_SW_Minion01_01_Deathrattle</a>"
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability02_Part01": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability02_Part01",
      "childAbilityList": [
        "8022020_Monster_SW_Minion01_01_Ability02_Camera",
        "8022020_Monster_SW_Minion01_01_Ability02_Part01",
        "8022020_Monster_SW_Minion01_01_Ability02_Part02"
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
          "ability": "Monster_SW_Minion01_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability01_Part02": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1702234274\">Monster_SW_Minion01_01_Burning_Modifier</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Ability01_Part01": {
      "fileName": "8022020_Monster_SW_Minion01_01_Ability01_Part01",
      "childAbilityList": [
        "8022020_Monster_SW_Minion01_01_Ability01_Camera",
        "8022020_Monster_SW_Minion01_01_Ability01_Part01",
        "8022020_Monster_SW_Minion01_01_Ability01_Part02"
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
          "ability": "Monster_SW_Minion01_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8022020_Monster_SW_Minion01_01_Passive01": {
      "fileName": "8022020_Monster_SW_Minion01_01_Passive01",
      "skillTrigger": "Monster_SW_Minion01_01_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"603233661\">Monster_SW_Minion01_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1206413856\">Monster_SW_Minion01_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"585935533\">Monster_SW_Minion01_01_Deathrattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__585935533\">Monster_SW_Minion01_01_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_SW_Minion01_01_PassiveAbility_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__603233661\">Monster_SW_Minion01_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1702234274\">Monster_SW_Minion01_01_Burning_Modifier</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1206413856\">Monster_SW_Minion01_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8022020_Modifiers": {
      "fileName": "8022020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__297791120\">Monster_SW_Minion01_01_CTRL_Crazy</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_Crazy",
            "Crazy",
            "AvatarBreak",
            "STAT_CTRL"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-603230674\">Crazy_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                      "popUpText": "Outraging",
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
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill",
                    "Ultimate"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1702234274\">Monster_SW_Minion01_01_Burning_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}