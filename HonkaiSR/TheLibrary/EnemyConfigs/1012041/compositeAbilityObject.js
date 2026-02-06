const compositeAbilityObject = {
  "fullCharacterName": 1012041,
  "trimCharacterName": 1012041,
  "abilityList": [
    "1012041_Monster_W1_SvarogPart_RL_PassiveAbility03",
    "1012041_Monster_Svarog_RL_Insert",
    "1012041_Monster_W1_SvarogPart_RL_Ability06_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability06_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability05_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability05_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01",
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part02",
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01",
    "1012041_Monster_W1_SvarogPart_RL_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "1012041_Monster_W1_SvarogPart_RL_PassiveAbility03": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_PassiveAbility03",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_PassiveAbility03"
      ],
      "skillTrigger": "PassiveSkill03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1012041_Monster_Svarog_RL_Insert": {
      "fileName": "1012041_Monster_Svarog_RL_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "variableName": "Owner_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Owner_MaxHP) || Variables[1] ({[PassiveSkill03[0]]}) || MUL || RETURN",
                  "displayLines": "(Owner_MaxHP * {[PassiveSkill03[0]]})",
                  "constants": [],
                  "variables": [
                    "Owner_MaxHP",
                    "{[PassiveSkill03[0]]}"
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
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "popUpText": "Restrained"
            }
          ]
        }
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability06_Part02": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "SelfDestroy_Controller",
              "value": 1
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_SvarogPart_Overload[<span class=\"descriptionNumberColor\">Overload</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (LowHPRatio) || RETURN",
              "displayLines": "LowHPRatio",
              "constants": [],
              "variables": [
                "LowHPRatio"
              ]
            }
          },
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "advanceType": "Advance",
              "multiAdd": -1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability06_Part01": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability06_Part01",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_Ability06_Part01",
        "1012041_Monster_W1_SvarogPart_RL_Ability06_Part02",
        "1012041_Monster_W1_SvarogPart_RL_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W1_SvarogPart_RL_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "StanceBreakState"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "StanceBreakState"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability05_Part02": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability05_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "Svarog_00_BattleScore2_Flag",
          "value": 1
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
    "1012041_Monster_W1_SvarogPart_RL_Ability05_Part01": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability05_Part01",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_Ability05_Part01",
        "1012041_Monster_W1_SvarogPart_RL_Ability05_Part02",
        "1012041_Monster_W1_SvarogPart_RL_Ability05_Camera"
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
          "ability": "Monster_W1_SvarogPart_RL_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "variableName": "Owner_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "modifier": "Standard_AbilityTarget"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Owner_MaxHP) || Variables[1] ({[PassiveSkill03[0]]}) || MUL || RETURN",
                  "displayLines": "(Owner_MaxHP * {[PassiveSkill03[0]]})",
                  "constants": [],
                  "variables": [
                    "Owner_MaxHP",
                    "{[PassiveSkill03[0]]}"
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
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "popUpText": "Restrained"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "modifier": "Standard_AbilityTarget"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_Ability04_Part01",
        "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02",
        "1012041_Monster_W1_SvarogPart_RL_Ability04_Camera"
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
          "ability": "Monster_W1_SvarogPart_RL_Ability04_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part02": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability03_Part02",
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
          "modifier": "Boss_Cocolia_Endurance"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1310,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Firefly"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
          "valuePerStack": {
            "PassiveAbility02_P2_HPRatio": {
              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
              "displayLines": "{[Skill03[1]]}",
              "constants": [],
              "variables": [
                "{[Skill03[1]]}"
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
          "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier",
          "valuePerStack": {
            "Modifier_DamagePercentage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "flagNames": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Svarog_ListenPlayerAllDie_Modifier"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "variableName": "Owner_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Owner_MaxHP) || Variables[1] ({[PassiveSkill03[0]]}) || MUL || RETURN",
                  "displayLines": "(Owner_MaxHP * {[PassiveSkill03[0]]})",
                  "constants": [],
                  "variables": [
                    "Owner_MaxHP",
                    "{[PassiveSkill03[0]]}"
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
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "popUpText": "Restrained"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Svarog_ListenPlayerAllDie_Modifier",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
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
          "for": "Svarog_ListenBreak_RemoveControl_Modifier",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target v2}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Monster_W1_Svarog_00_RL_Achievement",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_Ability03_Part01",
        "1012041_Monster_W1_SvarogPart_RL_Ability03_Part02",
        "1012041_Monster_W1_SvarogPart_RL_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W1_SvarogPart_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part02": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01",
      "childAbilityList": [
        "1012041_Monster_W1_SvarogPart_RL_Ability02_Part01",
        "1012041_Monster_W1_SvarogPart_RL_Ability02_Part02",
        "1012041_Monster_W1_SvarogPart_RL_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_SvarogPart_RL_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012041_Monster_W1_SvarogPart_RL_PassiveAbilityInitiate": {
      "fileName": "1012041_Monster_W1_SvarogPart_RL_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "valueType": "Layer",
              "variableName": "AttackUpLayer",
              "modifierName": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (AttackUpLayer) || RETURN",
                "displayLines": "AttackUpLayer",
                "constants": [],
                "variables": [
                  "AttackUpLayer"
                ]
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
              "target": "{{Caster's Summoner}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (LowHPRatio) || RETURN",
              "displayLines": "LowHPRatio",
              "constants": [],
              "variables": [
                "LowHPRatio"
              ]
            }
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_SvarogPart_RL_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "({[Skill06[0]]} + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "{[Skill06[0]]}"
                ]
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
          "modifier": "Monster_W1_SvarogPart_RL_LowHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_SvarogPart_BattleScore1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_RL_LowHP",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                      "displayLines": "{[Skill06[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[1]]}"
                      ]
                    }
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
                        "value1": "PartDecisionFlag",
                        "compareType": "=",
                        "value2": 1,
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
                          "variableName": "PartDecisionFlag",
                          "value": 2
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
        }
      ]
    }
  }
}