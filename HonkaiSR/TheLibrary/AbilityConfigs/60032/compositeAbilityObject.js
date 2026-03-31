const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60032,
  "trimCharacterName": 60032,
  "abilityList": [
    "60032_MissionBattleEvent60032_PassiveAbility01",
    "60032_MissionBattleEvent60032_Ability03_Camera",
    "60032_MissionBattleEvent60032_Ability03_Part02",
    "60032_MissionBattleEvent60032_Ability03_Part01",
    "60032_MissionBattleEvent60032_Ability03_EnterReady",
    "60032_Modifiers"
  ],
  "abilityObject": {
    "60032_MissionBattleEvent60032_PassiveAbility01": {
      "fileName": "60032_MissionBattleEvent60032_PassiveAbility01",
      "childAbilityList": [
        "60032_MissionBattleEvent60032_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"381505499\">MissionBattleEvent60032_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-494969377\">MissionBattleEvent60032_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1535282078\">MissionBattleEvent60032_AimTarget_Main</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098783216\">MissionBattleEvent60032_AimTarget_Main2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1678722142\">MissionBattleEvent60032_AimTarget</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4035011,
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1307561457\">BattleEvent60032_1415</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__381505499\">MissionBattleEvent60032_Status</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill03",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "afterInjection": []
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-494969377\">MissionBattleEvent60032_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60032_MissionBattleEvent60032_Ability03_Camera": {
      "fileName": "60032_MissionBattleEvent60032_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60032_MissionBattleEvent60032_Ability03_Part02": {
      "fileName": "60032_MissionBattleEvent60032_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"845647266\">Enemy_W4_IronTombCore_Beta</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "_ChangePhaseEnd",
                "compareType": "=",
                "value2": 0
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
                  "target": "{{Ability Target(ST)}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Trailblazer}}"
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1413,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Evernight"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1414,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Dan Heng • Permansor Terrae"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1402,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Aglaea"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1403,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Tribbie"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1404,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Mydei"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1407,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Castorice"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1405,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Anaxa"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1409,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Hyacine"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1406,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Cipher"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1412,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Cerydra"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1410,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Hysilens"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Cyrene"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1408,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Phainon"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                "displayLines": "(_MaxSP - _CurrentSP)",
                "constants": [],
                "variables": [
                  "_MaxSP",
                  "_CurrentSP"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                "displayLines": "(_MaxSP - _CurrentSP)",
                "constants": [],
                "variables": [
                  "_MaxSP",
                  "_CurrentSP"
                ]
              },
              "isFixed": "(Fixed)"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "60032_MissionBattleEvent60032_Ability03_Part01": {
      "fileName": "60032_MissionBattleEvent60032_Ability03_Part01",
      "childAbilityList": [
        "60032_MissionBattleEvent60032_Ability03_Camera",
        "60032_MissionBattleEvent60032_Ability03_EnterReady",
        "60032_MissionBattleEvent60032_Ability03_Part01",
        "60032_MissionBattleEvent60032_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60032_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Player-Team Target",
        "filter": {
          "name": "Target Name",
          "target": "{{Player Team(Exclude Memosprites)}} - BattleEvent60032_Avatar_1415"
        }
      }
    },
    "60032_MissionBattleEvent60032_Ability03_EnterReady": {
      "fileName": "60032_MissionBattleEvent60032_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "#CL_First",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "#CL_First",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4035011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "characterName": "Anti-Creator, Hatred Inundate"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
                  }
                ]
              }
            ]
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}} - BattleEvent60032_Avatar_1415"
          },
          "variableName": "#CL_CharacterCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#CL_CharacterCount",
            "compareType": "=",
            "value2": 4
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#CL_CharacterCount",
                "compareType": "=",
                "value2": 3
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#CL_CharacterCount",
                    "compareType": "=",
                    "value2": 2
                  }
                }
              ]
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "#CL_First",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4035011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "characterName": "Anti-Creator, Hatred Inundate"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_First",
              "value": 0
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "60032_Modifiers": {
      "fileName": "60032_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1307561457\">BattleEvent60032_1415</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1901947511\">MissionBattleEvent60032_AimTarget_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
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
                      "target": "{{Player's Aim Target List}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098783216\">MissionBattleEvent60032_AimTarget_Main2</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1535282078\">MissionBattleEvent60032_AimTarget_Main</a>",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1678722142\">MissionBattleEvent60032_AimTarget</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1901947511\">MissionBattleEvent60032_AimTarget_Sub</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1901947511\">MissionBattleEvent60032_AimTarget_Sub</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6003201,
      "trigger": "Skill03",
      "name": "Cyrene's Support ♪",
      "type": "Support",
      "slot": "Ultimate",
      "desc": "When \"Cyrene's Support ♪\" takes action, select an ally character to activate their Ultimate and dispel the \"Action Lock\" state.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60032_Skill03_Camera",
        "Avatar_MissionBattleEvent60032_Skill03_EnterReady",
        "Avatar_MissionBattleEvent60032_Skill03_Phase01",
        "Avatar_MissionBattleEvent60032_Skill03_Phase02"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}