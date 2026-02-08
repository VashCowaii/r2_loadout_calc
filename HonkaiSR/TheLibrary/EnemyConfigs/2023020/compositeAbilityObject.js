const compositeAbilityObject = {
  "fullCharacterName": 2023020,
  "trimCharacterName": 2023020,
  "abilityList": [
    "2023020_Monster_W2_Beast02_Ability05_Part02",
    "2023020_Monster_W2_Beast02_Ability05_Part01",
    "2023020_Monster_W2_Beast02_Ability04_Part02",
    "2023020_Monster_W2_Beast02_Ability04_Part01",
    "2023020_Monster_W2_Beast02_Ability03_Part02",
    "2023020_Monster_W2_Beast02_Ability03_Part01",
    "2023020_Monster_W2_Beast02_Ability02_Part02",
    "2023020_Monster_W2_Beast02_Ability02_Part01",
    "2023020_Monster_W2_Beast02_Ability01_Part02",
    "2023020_Monster_W2_Beast02_Ability01_Part01",
    "2023020_Monster_W2_Beast02_AbilityP01_Initiate",
    "2023020_Modifiers"
  ],
  "abilityObject": {
    "2023020_Monster_W2_Beast02_Ability05_Part02": {
      "fileName": "2023020_Monster_W2_Beast02_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1532177993\">Monster_W2_Beast02_Weak</a>[<span class=\"descriptionNumberColor\">Exhaustion</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability05_Part01": {
      "fileName": "2023020_Monster_W2_Beast02_Ability05_Part01",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_Ability05_Camera",
        "2023020_Monster_W2_Beast02_Ability05_Part01",
        "2023020_Monster_W2_Beast02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W2_Beast02_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        }
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability04_Part02": {
      "fileName": "2023020_Monster_W2_Beast02_Ability04_Part02",
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
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]",
          "counter": 3
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Bullet_Count",
          "context": "TargetEntity",
          "value": 3,
          "max": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1917780561\">Enemy_W2_Beast02_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"130206318\">Monster_W2_Beast02_Edict</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability04_Part01": {
      "fileName": "2023020_Monster_W2_Beast02_Ability04_Part01",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_Ability04_Camera",
        "2023020_Monster_W2_Beast02_Ability04_Part01",
        "2023020_Monster_W2_Beast02_Ability04_Part02"
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
          "ability": "Monster_W2_Beast02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability03_Part02": {
      "fileName": "2023020_Monster_W2_Beast02_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1692594642\">Monster_Standard_Layer_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability03_Part01": {
      "fileName": "2023020_Monster_W2_Beast02_Ability03_Part01",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_Ability03_Part01",
        "2023020_Monster_W2_Beast02_Ability03_Part02",
        "2023020_Monster_W2_Beast02_Ability03_Camera"
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
          "ability": "Monster_W2_Beast02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability02_Part02": {
      "fileName": "2023020_Monster_W2_Beast02_Ability02_Part02",
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
        "Ability Start",
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]",
          "function": "Add"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Bullet_Count",
          "context": "TargetEntity",
          "value": -1,
          "max": 3
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1532177993\">Monster_W2_Beast02_Weak</a>[<span class=\"descriptionNumberColor\">Exhaustion</span>]",
          "duration": -1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability02_Part01": {
      "fileName": "2023020_Monster_W2_Beast02_Ability02_Part01",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_Ability02_Part01",
        "2023020_Monster_W2_Beast02_Ability02_Part02",
        "2023020_Monster_W2_Beast02_Ability02_Camera"
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
          "ability": "Monster_W2_Beast02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability01_Part02": {
      "fileName": "2023020_Monster_W2_Beast02_Ability01_Part02",
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
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]",
          "function": "Add"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Bullet_Count",
          "context": "TargetEntity",
          "value": -1,
          "max": 3
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_Ability01_Part01": {
      "fileName": "2023020_Monster_W2_Beast02_Ability01_Part01",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_Ability01_Part01",
        "2023020_Monster_W2_Beast02_Ability01_Part02",
        "2023020_Monster_W2_Beast02_Ability01_Camera"
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
          "ability": "Monster_W2_Beast02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023020_Monster_W2_Beast02_AbilityP01_Initiate": {
      "fileName": "2023020_Monster_W2_Beast02_AbilityP01_Initiate",
      "childAbilityList": [
        "2023020_Monster_W2_Beast02_AbilityP01_Initiate"
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
          "modifier": "<a class=\"gModGreen\" id=\"2027241011\">W2_Beast02_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Beast02_Num_Flag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Beast02_Num_Flag"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Beast02_Num_Flag",
          "context": "TargetEntity",
          "value": 1,
          "max": 10
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2027241011\">W2_Beast02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2023020_Modifiers": {
      "fileName": "2023020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__130206318\">Monster_W2_Beast02_Edict</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1532177993\">Monster_W2_Beast02_Weak</a>[<span class=\"descriptionNumberColor\">Exhaustion</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Malefic Ape's Gusto has been exhausted.",
          "type": "Other",
          "effectName": "Exhaustion",
          "statusName": "Exhaustion"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]",
          "stackType": "Replace",
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Malefic Ape's current Gusto amount.",
          "type": "Other",
          "effectName": "Regenerate Gusto",
          "statusName": "Gusto"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenOwnerUnselectable"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
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
                    "compareType": ">=",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
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
          "description": "Marked by %CasterName for Monitoring.",
          "type": "Other",
          "effectName": "Monitor",
          "statusName": "Monitor"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__162724046\">Enemy_W2_Beast02_BlockDamage</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
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
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Barrier"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1692594642\">Monster_Standard_Layer_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio",
            "MDF_MaxLayer"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span> for up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stacks.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1917780561\">Enemy_W2_Beast02_Passive</a>",
          "modifierFlags": [
            "MuteHitFly",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Beast02_Num_Flag",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Beast02_Num_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"130206318\">Monster_W2_Beast02_Edict</a>"
                    }
                  ]
                }
              ]
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "HaveBullet_Flag",
                            "invertCondition": true
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "HaveBullet_Flag"
                              },
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Currency Wars Full OffFieldList}}"
                                },
                                "mustBeAlive2": true,
                                "invertCondition": true
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Bullet_Count",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                      "onlyRemoveOwnersInstance": true
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
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>[<span class=\"descriptionNumberColor\">Gusto</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HaveBullet_Flag"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"130206318\">Monster_W2_Beast02_Edict</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HaveBullet_Flag",
                      "value": 1
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
                    "value1": "Bullet_Count",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                      "onlyRemoveOwnersInstance": true
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 8,
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
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase0"
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1532177993\">Monster_W2_Beast02_Weak</a>[<span class=\"descriptionNumberColor\">Exhaustion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1532177993\">Monster_W2_Beast02_Weak</a>[<span class=\"descriptionNumberColor\">Exhaustion</span>]"
                    }
                  ]
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
  }
}