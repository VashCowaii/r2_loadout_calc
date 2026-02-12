const compositeAbilityObject = {
  "fullCharacterName": 4014036,
  "trimCharacterName": 4014036,
  "abilityList": [
    "4014036_Monster_W4_Pollux_EndInsert_Part02",
    "4014036_Monster_W4_Pollux_EndInsert_Part01",
    "4014036_Monster_W4_Pollux_SpecailAbility05",
    "4014036_Monster_W4_Pollux_Stun_Insert_Camera",
    "4014036_Monster_W4_Pollux_Stun_Insert",
    "4014036_Monster_W4_Pollux_StunRecover_Insert_Camera",
    "4014036_Monster_W4_Pollux_StunRecover_Insert",
    "4014036_Monster_W4_Pollux_PassiveAbility_Insert",
    "4014036_Monster_W4_Pollux_PassiveAbility_Initiate",
    "4014036_Monster_W4_Pollux_Ability06_Part02",
    "4014036_Monster_W4_Pollux_Ability06_Part01",
    "4014036_Monster_W4_Pollux_Ability05_Part02",
    "4014036_Monster_W4_Pollux_Ability05_Part01",
    "4014036_Monster_W4_Pollux_Ability04_Part02",
    "4014036_Monster_W4_Pollux_Ability04_Part01",
    "4014036_Monster_W4_Pollux_Ability03_Part02",
    "4014036_Monster_W4_Pollux_Ability03_Part01",
    "4014036_Monster_W4_Pollux_Ability02_Part02",
    "4014036_Monster_W4_Pollux_Ability02_Part01",
    "4014036_Monster_W4_Pollux_Ability01_Part02",
    "4014036_Monster_W4_Pollux_Ability01_Part01",
    "4014036_Monster_W4_Pollux_PassiveAbility_BGM",
    "4014036_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate",
    "4014036_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01",
    "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
    "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part01",
    "4014036_Monster_W4_PolluxPart_IF_Ability02_Part02",
    "4014036_Monster_W4_PolluxPart_IF_Ability02_Part01",
    "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part02",
    "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part01",
    "4014036_Monster_W4_PolluxPart_IF_Ability01_Part02",
    "4014036_Monster_W4_PolluxPart_IF_Ability01_Part01",
    "4014036_Monster_W4_Pollux_IF_AbilityEX05",
    "4014036_Monster_W4_Pollux_IF_AbilityEX04",
    "4014036_Monster_W4_Pollux_IF_AbilityEX03",
    "4014036_Monster_W4_Pollux_IF_AbilityEX02",
    "4014036_Monster_W4_PolluxPart_IF_AbilityEX01",
    "4014036_Monster_W4_Pollux_IF_AbilityEX01",
    "4014036_Monster_W4_Pollux_IF_Stun_Insert",
    "4014036_Monster_W4_Pollux_IF_TeamFormation",
    "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
    "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
    "4014036_Monster_W4_Pollux_IF_PassiveAbility_Insert",
    "4014036_Monster_W4_Pollux_IF_AbilityP05",
    "4014036_Monster_W4_Pollux_IF_AbilityP04",
    "4014036_Monster_W4_Pollux_IF_AbilityP03",
    "4014036_Monster_W4_Pollux_IF_AbilityP02",
    "4014036_Monster_W4_Pollux_IF_AbilityP01",
    "4014036_Monster_W4_Pollux_IF_Ability06_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability06_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability05_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability05_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability04_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability04_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability03_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability03_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability02_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability02_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability01_Part02",
    "4014036_Monster_W4_Pollux_IF_Ability01_Part01",
    "4014036_Modifiers",
    "4014036_Functions"
  ],
  "abilityObject": {
    "4014036_Monster_W4_Pollux_EndInsert_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_EndInsert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276281376\">Monster_W4_Pollux_Main_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StunCheck02",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_EndInsert_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_EndInsert_Part01",
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
          "ability": "Monster_W4_Pollux_EndInsert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_SpecailAbility05": {
      "fileName": "4014036_Monster_W4_Pollux_SpecailAbility05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 1
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Stun_Insert_Camera": {
      "fileName": "4014036_Monster_W4_Pollux_Stun_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Stun_Insert": {
      "fileName": "4014036_Monster_W4_Pollux_Stun_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_66) || RETURN",
                "displayLines": "UnusedUnderThisBase_66",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_66"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_83) || RETURN",
                "displayLines": "UnusedUnderThisBase_83",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_83"
                ]
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_85) || RETURN",
                "displayLines": "UnusedUnderThisBase_85",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_85"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ],
          "failed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_84) || RETURN",
                "displayLines": "UnusedUnderThisBase_84",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_84"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] (_WorldLevel) || RETURN",
                    "displayLines": "_WorldLevel",
                    "constants": [],
                    "variables": [
                      "_WorldLevel"
                    ]
                  },
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_WorldLevel"
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "_WorldLevel"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888665654\">Monster_W4_Pollux_Strengthen_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Owner has Pending",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AI_HeiShengBei_SpecialAI",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "AI_HeiShengBei_Need",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_StunRecover_Insert_Camera": {
      "fileName": "4014036_Monster_W4_Pollux_StunRecover_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_StunRecover_Insert": {
      "fileName": "4014036_Monster_W4_Pollux_StunRecover_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_PassiveAbility_Insert": {
      "fileName": "4014036_Monster_W4_Pollux_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_StorySimulationSpeed",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            }
          ]
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720682465\">Monster_W4_Pollux_PartController_LockHP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888665654\">Monster_W4_Pollux_Strengthen_Break</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnergyValue",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_EnergyValue) || RETURN",
            "displayLines": "_EnergyValue",
            "constants": [],
            "variables": [
              "_EnergyValue"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True",
          "state": "Normal",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
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
              "modifier": "<a class=\"gModGreen\" id=\"-289587260\">Monster_W4_Pollux_StoryMode_LockHP</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
                  "displayLines": "UnusedUnderThisBase_76",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_76"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_77) || RETURN",
                  "displayLines": "UnusedUnderThisBase_77",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_77"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_PassiveAbility_Initiate": {
      "fileName": "4014036_Monster_W4_Pollux_PassiveAbility_Initiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1132979046\">W4_Pollux_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1116201427\">W4_Pollux_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1099423808\">W4_Pollux_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927341406\">Monster_W4_Pollux_Status</a>"
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID0) || RETURN",
                "displayLines": "SummonID0",
                "constants": [],
                "variables": [
                  "SummonID0"
                ]
              },
              "locationType": "BeforeCaster",
              "locationOffset": -1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.3,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID1) || RETURN",
                "displayLines": "SummonID1",
                "constants": [],
                "variables": [
                  "SummonID1"
                ]
              },
              "locationType": "AfterCaster",
              "locationOffset": 1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "removeShields": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
                  "displayLines": "UnusedUnderThisBase_76",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_76"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_77) || RETURN",
                  "displayLines": "UnusedUnderThisBase_77",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_77"
                  ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014033,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Castorice, Hand of Shadow",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Set Enemy Phase"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-720682465\">Monster_W4_Pollux_PartController_LockHP</a>"
            }
          ],
          "failed": [
            {
              "name": "Set Enemy Phase",
              "phase": 2
            }
          ]
        },
        {
          "name": "Define Custom Variable with WorldLevel",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_WorldLevel"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_LoseHpRatio",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_78) || RETURN",
                "displayLines": "UnusedUnderThisBase_78",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_78"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_ActionDelay",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_79) || RETURN",
                "displayLines": "UnusedUnderThisBase_79",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_79"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_Part_ActionDelay",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_80) || RETURN",
                "displayLines": "UnusedUnderThisBase_80",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_80"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_LoseHpRatio",
              "value": {
                "operator": "Variables[0] (_WorldLevel) || RETURN",
                "displayLines": "_WorldLevel",
                "constants": [],
                "variables": [
                  "_WorldLevel"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_ActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_Part_ActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
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
              "modifier": "<a class=\"gModGreen\" id=\"1130988503\">Monster_W4_Pollux_WaveStart</a>"
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-226864099\">Monster_W4_PolluxPart_R</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-193308861\">Monster_W4_PolluxPart_L</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1927341406\">Monster_W4_Pollux_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TempAIFlag",
                      "value": {
                        "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                        "displayLines": "_ReadyToCharge",
                        "constants": [],
                        "variables": [
                          "_ReadyToCharge"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 100
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] (AIFlag) || INVERT || RETURN",
                            "displayLines": "-AIFlag",
                            "constants": [],
                            "variables": [
                              "AIFlag"
                            ]
                          },
                          "adjustmentType": "Advance"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "-AIFlag"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "-AIFlag"
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
                            "value1": "StoryMode",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_StorySkill05",
                            "compareType": "=",
                            "value2": 0
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
                          "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ReadyToCharge",
                  "value": 0
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
                  "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HPChangeRatio",
                      "value": {
                        "operator": "Variables[0] (_HPChangeValue) || INVERT || Variables[1] (_TargetMaxHP) || DIV || RETURN",
                        "displayLines": "(-_HPChangeValue / _TargetMaxHP)",
                        "constants": [],
                        "variables": [
                          "_HPChangeValue",
                          "_TargetMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_EnergyValue",
                      "value": {
                        "operator": "Variables[0] (_HPChangeRatio) || Variables[1] (_StorySkill05) || MUL || RETURN",
                        "displayLines": "(_HPChangeRatio * _StorySkill05)",
                        "constants": [],
                        "variables": [
                          "_HPChangeRatio",
                          "_StorySkill05"
                        ]
                      },
                      "max": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Current Turn Owner}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (_EnergyValue) || RETURN",
                            "displayLines": "_EnergyValue",
                            "constants": [],
                            "variables": [
                              "_EnergyValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "maximum": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  "passed": [
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
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                            "displayLines": "_Skill05_ActionDelay",
                            "constants": [],
                            "variables": [
                              "_Skill05_ActionDelay"
                            ]
                          },
                          "adjustmentType": "Advance"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "_Skill05_ActionDelay",
                          "changeVersion": true
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "advanceType": "Set",
                      "add": {
                        "operator": "Variables[0] (_Skill05_Part_ActionDelay) || RETURN",
                        "displayLines": "_Skill05_Part_ActionDelay",
                        "constants": [],
                        "variables": [
                          "_Skill05_Part_ActionDelay"
                        ]
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
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4014033,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Castorice, Hand of Shadow",
                            "isBaseCompare": true
                          }
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_ReadyToCharge",
                    "compareType": "=",
                    "value2": 0
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
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EnergyValue",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ReadyToCharge",
                          "value": 1
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ReadyToCharge",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1130988503\">Monster_W4_Pollux_WaveStart</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "StoryMode"
          ]
        }
      ]
    },
    "4014036_Monster_W4_Pollux_Ability06_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "_StorySetSpeed",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * IsNeedFade) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "IsNeedFade"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * IsNeedFade) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "IsNeedFade"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * IsNeedFade) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "IsNeedFade"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (_StorySimulationSpeed) || MUL || Variables[0] (_MaxHP) || Variables[2] (IsNeedFade) || MUL || Constants[0] (4) || DIV || ADD || RETURN",
                      "displayLines": "((_MaxHP * _StorySimulationSpeed) + ((_MaxHP * IsNeedFade) / 4))",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "_MaxHP",
                        "_StorySimulationSpeed",
                        "IsNeedFade"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_128) || RETURN",
                    "displayLines": "UnusedUnderThisBase_128",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_128"
                    ]
                  },
                  "baseChance": 1,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_129) || RETURN",
                      "displayLines": "UnusedUnderThisBase_129",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_129"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_130) || RETURN",
                      "displayLines": "UnusedUnderThisBase_130",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_130"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
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
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((_MaxHP * IsNeedFade) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "_MaxHP",
                        "IsNeedFade"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
                  "displayLines": "UnusedUnderThisBase_124",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_124"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
                  "displayLines": "UnusedUnderThisBase_123",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_123"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": {
            "operator": "Variables[0] (_TempAIFlag) || RETURN",
            "displayLines": "_TempAIFlag",
            "constants": [],
            "variables": [
              "_TempAIFlag"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySetSpeed",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability06_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability06_Part01",
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
          "ability": "Monster_W4_Pollux_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability05_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 7
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": {
                "operator": "Variables[0] (_TempAIFlag) || RETURN",
                "displayLines": "_TempAIFlag",
                "constants": [],
                "variables": [
                  "_TempAIFlag"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 3}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
                  "displayLines": "UnusedUnderThisBase_124",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_124"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
                  "displayLines": "UnusedUnderThisBase_123",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_123"
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
              "valuePerStack": {
                "_HpLimitRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_74) || RETURN",
                  "displayLines": "UnusedUnderThisBase_74",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_74"
                  ]
                },
                "_FatigueRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_75) || RETURN",
                  "displayLines": "UnusedUnderThisBase_75",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_75"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
              "valuePerStack": {
                "_HpLimitRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_73) || RETURN",
                  "displayLines": "UnusedUnderThisBase_73",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_73"
                  ]
                },
                "_FatigueRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_72) || RETURN",
                  "displayLines": "UnusedUnderThisBase_72",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_72"
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
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
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
                  "displayLines": "UnusedUnderThisBase_82",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_82"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
                  "displayLines": "UnusedUnderThisBase_82",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_82"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
              }
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
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
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "_StoryMsg",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StoryMsg",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability05_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability05_Part01",
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
          "ability": "Monster_W4_Pollux_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability04_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_131) || RETURN",
            "displayLines": "UnusedUnderThisBase_131",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_131"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability04_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability04_Part01",
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
          "ability": "Monster_W4_Pollux_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability03_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 3,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
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
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Pollox Mourning Departed Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_132) || MUL || Constants[0] (0.4) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_132) * 0.4)",
                  "constants": [
                    0.4
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_132"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
                  "displayLines": "UnusedUnderThisBase_124",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_124"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
                  "displayLines": "UnusedUnderThisBase_123",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_123"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability03_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability03_Part01",
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
          "ability": "Monster_W4_Pollux_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability02_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "_PlayerNum",
          "livingTargets": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_134) || RETURN",
                  "displayLines": "UnusedUnderThisBase_134",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_134"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ([object Object]) || Variables[1] (_PlayerNum) || DIV || Constants[0] (1) || Variables[2] (_DamageUpTemp) || ADD || MUL || RETURN",
                      "displayLines": "(([object Object] / _PlayerNum) * (1 + _DamageUpTemp))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        {},
                        "_PlayerNum",
                        "_DamageUpTemp"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_133) || MUL || RETURN",
                      "displayLines": "(_MaxHP * UnusedUnderThisBase_133)",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_133"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
                      "displayLines": "({[Skill02[0]]} / _PlayerNum)",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}",
                        "_PlayerNum"
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
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
                  "displayLines": "UnusedUnderThisBase_124",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_124"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
                  "displayLines": "UnusedUnderThisBase_123",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_123"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability02_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability02_Part01",
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
          "ability": "Monster_W4_Pollux_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability01_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
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
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_127) || RETURN",
                  "displayLines": "UnusedUnderThisBase_127",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_127"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_125) || Constants[0] (1) || Variables[1] (_DamageUpTemp) || ADD || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_125 * (1 + _DamageUpTemp))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "UnusedUnderThisBase_125",
                        "_DamageUpTemp"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_126) || MUL || RETURN",
                      "displayLines": "(_MaxHP * UnusedUnderThisBase_126)",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_126"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                  "AttackScaling": {
                    "DamageType": "Quantum",
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
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
                  "displayLines": "UnusedUnderThisBase_124",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_124"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
                  "displayLines": "UnusedUnderThisBase_123",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_123"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_Ability01_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_Ability01_Part01",
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
          "ability": "Monster_W4_Pollux_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_PassiveAbility_BGM": {
      "fileName": "4014036_Monster_W4_Pollux_PassiveAbility_BGM",
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"715173654\">Enemy_W4_Pollux_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__715173654\">Enemy_W4_Pollux_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4014036_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1636257193\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorController</a>",
          "valuePerStack": {
            "MDF_MinionsSuperArmor_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_120) || RETURN",
              "displayLines": "UnusedUnderThisBase_120",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_120"
              ]
            },
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_121) || RETURN",
              "displayLines": "UnusedUnderThisBase_121",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_121"
              ]
            },
            "MDF_SetActionDelayValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_122) || RETURN",
              "displayLines": "UnusedUnderThisBase_122",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_122"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceDamagePreshowValue",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
            "displayLines": "UnusedUnderThisBase_107",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_107"
            ]
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1636257193\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorController</a>",
          "valuePerStack": {
            "MDF_MinionsSuperArmor_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_120) || RETURN",
              "displayLines": "UnusedUnderThisBase_120",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_120"
              ]
            },
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_121) || RETURN",
              "displayLines": "UnusedUnderThisBase_121",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_121"
              ]
            },
            "MDF_SetActionDelayValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_122) || RETURN",
              "displayLines": "UnusedUnderThisBase_122",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_122"
              ]
            }
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceDamagePreshowValue",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
            "displayLines": "UnusedUnderThisBase_107",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_107"
            ]
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_117) || RETURN",
                    "displayLines": "UnusedUnderThisBase_117",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_117"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ],
              "failed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_118) || RETURN",
                    "displayLines": "UnusedUnderThisBase_118",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_118"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
                "displayLines": "UnusedUnderThisBase_107",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_107"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
                "displayLines": "UnusedUnderThisBase_107",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_107"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "sourceTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_116) || RETURN",
            "displayLines": "UnusedUnderThisBase_116",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_116"
            ]
          },
          "consumeFloor": 1
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag02",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag02",
          "value": 0
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
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
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
                "displayLines": "UnusedUnderThisBase_107",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_107"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
                "displayLines": "UnusedUnderThisBase_107",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_107"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "sourceTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_116) || RETURN",
            "displayLines": "UnusedUnderThisBase_116",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_116"
            ]
          },
          "consumeFloor": 1
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag01",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag01",
          "value": 0
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityP01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_113) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_113)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_113"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_114) || RETURN",
                  "displayLines": "UnusedUnderThisBase_114",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_114"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_115) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_115)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_115"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability02_L_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability02_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability02_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_113) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_113)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_113"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_114) || RETURN",
                  "displayLines": "UnusedUnderThisBase_114",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_114"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_115) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_115)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_115"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability02_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability02_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part02",
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
            "DamageType": "Quantum",
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability01_L_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability01_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability01_Part02": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability01_Part02",
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
            "DamageType": "Quantum",
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_Ability01_Part01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_Ability01_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityEX05": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityEX05",
      "skillTrigger": "SkillEX05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityEX04": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityEX04",
      "skillTrigger": "SkillEX04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1339116785\">Enemy_W4_Pollux_IF_AbilityEX04</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityEX03": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityEX03",
      "skillTrigger": "SkillEX03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1389449642\">Enemy_W4_Pollux_IF_AbilityEX03</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityEX02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityEX02",
      "skillTrigger": "SkillEX02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1372672023\">Enemy_W4_Pollux_IF_AbilityEX02</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_PolluxPart_IF_AbilityEX01": {
      "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityEX01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityEX01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityEX01",
      "skillTrigger": "SkillEX01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1423004880\">Enemy_W4_Pollux_IF_AbilityEX01</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Stun_Insert": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Stun_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[SkillP03[3]]}) || RETURN",
            "displayLines": "{[SkillP03[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[3]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>"
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_TeamFormation": {
      "fileName": "4014036_Monster_W4_Pollux_IF_TeamFormation",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2037214572\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller</a>",
          "valuePerStack": {
            "MDF_NegativeBlood_Target_DeathCountDown": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "MDF_NegativeBlood_Target_FatigueRatio": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "MDF_NegativeBlood_Target_StanceBreakDownRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
          "valuePerStack": {
            "MDF_ReflexDamageValue": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
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
          "ability": "Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_PassiveAbility_Insert": {
      "fileName": "4014036_Monster_W4_Pollux_IF_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1989762066\">Enemy_W4_PolluxPart_IF_Link</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
          "valuePerStack": {
            "MDF_ReflexDamageValue": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-1837027601\">Monster_W4_Pollux_IF_PartController_LockHP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnergyValue",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_EnergyValue) || RETURN",
            "displayLines": "_EnergyValue",
            "constants": [],
            "variables": [
              "_EnergyValue"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True",
          "state": "Normal",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
              "displayLines": "{[SkillP03[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP05": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP05",
      "skillTrigger": "SkillP05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP04": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP04",
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP03": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP03",
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP02",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_AbilityP01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1116201427\">W4_Pollux_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1099423808\">W4_Pollux_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-147958761\">Enemy_W4_Pollux_IF_Status</a>"
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID0) || RETURN",
                "displayLines": "SummonID0",
                "constants": [],
                "variables": [
                  "SummonID0"
                ]
              },
              "locationType": "BeforeCaster",
              "locationOffset": -1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.3,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID1) || RETURN",
                "displayLines": "SummonID1",
                "constants": [],
                "variables": [
                  "SummonID1"
                ]
              },
              "locationType": "AfterCaster",
              "locationOffset": 1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "removeShields": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
              "displayLines": "{[SkillP03[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-313862182\">Enemy_W4_Pollux_IF_RemoveOneMore</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1837027601\">Monster_W4_Pollux_IF_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-354779130\">Enemy_W4_Pollux_IF_AbilityP01_WeaknessControl</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_ActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_Part_ActionDelay",
          "value": {
            "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
            "displayLines": "{[Skill05[3]]}",
            "constants": [],
            "variables": [
              "{[Skill05[3]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1922809357\">Enemy_W4_Pollux_IF_HintToastController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1423004880\">Enemy_W4_Pollux_IF_AbilityEX01</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                  "displayLines": "{[SkillEX01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[2]]}"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                  "displayLines": "{[SkillEX01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[1]]}"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                  "displayLines": "{[SkillEX01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[0]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
              "valuePerStack": {
                "MDF_FrenzyStartDelay": {
                  "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
                  "displayLines": "{[SkillEX05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[0]]}"
                  ]
                },
                "MDF_FrenzyIntervalDelay": {
                  "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
                  "displayLines": "{[SkillEX05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[1]]}"
                  ]
                },
                "MDF_MaxFrenzyLayer": {
                  "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
                  "displayLines": "{[SkillEX05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[2]]}"
                  ]
                },
                "MDF_TokenDMGAddRatioPerLayer": {
                  "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
                  "displayLines": "{[SkillEX05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1339116785\">Enemy_W4_Pollux_IF_AbilityEX04</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
              "valuePerStack": {
                "MDF_TokenDamageReduceRatio": {
                  "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                  "displayLines": "{[SkillEX04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[0]]}"
                  ]
                },
                "MDF_TokenDamageAddRatioPerlayer": {
                  "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                  "displayLines": "{[SkillEX04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[1]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-261920057\">Enemy_W4_Pollux_IF_EnterBattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-226864099\">Monster_W4_PolluxPart_R</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-193308861\">Monster_W4_PolluxPart_L</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4014036_Monster_W4_Pollux_IF_Ability06_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetNegativeHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
                  "context": "ContextAbility"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TargetNegativeHp",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "_TargetNegativeHp"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_TargetNegativeHp) || RETURN",
                      "displayLines": "_TargetNegativeHp",
                      "constants": [],
                      "variables": [
                        "_TargetNegativeHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Additional DMG"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[0]]}) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[0]]}) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[0]]}) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[0]]}) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability06_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability06_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability06_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability06_Part02",
        "4014036_Monster_W4_Pollux_Ability06_Camera"
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
          "ability": "Monster_W4_Pollux_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability05_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-822435931\">Enemy_W4_Pollux_IF_UltraReadyMark</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 3
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill05[1]]}) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
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
          "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1989762066\">Enemy_W4_PolluxPart_IF_Link</a>"
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
              "adjustmentValue": {
                "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                "displayLines": "_Skill05_ActionDelay",
                "constants": [],
                "variables": [
                  "_Skill05_ActionDelay"
                ]
              },
              "adjustmentType": "="
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "(_Skill05_ActionDelay - 1)"
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                "displayLines": "_Skill05_ActionDelay",
                "constants": [],
                "variables": [
                  "_Skill05_ActionDelay"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability05_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability05_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability05_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability05_Part02",
        "4014036_Monster_W4_Pollux_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ReadyToCharge",
          "value": 0
        },
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
          "ability": "Monster_W4_Pollux_IF_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ReadyToCharge",
          "value": 0
        }
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability04_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "ifTargetFound": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "set": 0
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability04_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability04_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability04_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability04_Part02",
        "4014036_Monster_W4_Pollux_Ability04_Camera"
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
          "ability": "Monster_W4_Pollux_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability03_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 3,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
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
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Pollox Mourning Departed Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability03_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability03_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability03_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability03_Part02",
        "4014036_Monster_W4_Pollux_Ability03_Camera"
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
          "ability": "Monster_W4_Pollux_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability02_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "_PlayerNum",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
              "displayLines": "({[Skill02[0]]} / _PlayerNum)",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}",
                "_PlayerNum"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability02_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability02_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability02_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability02_Part02",
        "4014036_Monster_W4_Pollux_Ability02_Camera"
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
          "ability": "Monster_W4_Pollux_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability01_Part02": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability01_Part02",
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
            "DamageType": "Quantum",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill01[1]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill01[1]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill01[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014036_Monster_W4_Pollux_IF_Ability01_Part01": {
      "fileName": "4014036_Monster_W4_Pollux_IF_Ability01_Part01",
      "childAbilityList": [
        "4014036_Monster_W4_Pollux_IF_Ability01_Part01",
        "4014036_Monster_W4_Pollux_IF_Ability01_Part02",
        "4014036_Monster_W4_Pollux_Ability01_Camera"
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
          "ability": "Monster_W4_Pollux_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014036_Modifiers": {
      "fileName": "4014036_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1099423808\">W4_Pollux_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1407,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Castorice"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1407,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "characterName": "Castorice"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Resting in the Cocoon",
                          "desc": "Use ally character Castorice to deal the final blow against \"Pollux, Netherwing Husk, Ferry of Souls\"",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1116201427\">W4_Pollux_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": 0.5
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CheckAvatarHpRatio2",
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
                    "value1": "_CheckAvatarHpRatio2",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Half-Life",
                          "desc": "Defeat \"Pollux, Netherwing Husk, Ferry of Souls\" while all ally characters' Max HP percentage is below #1%",
                          "rarity": "Low",
                          "params": [
                            50
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
          "for": "<a class=\"gModGreen\" id=\"mod__1132979046\">W4_Pollux_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team(Exclude Memosprites)}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "After Death... There Will Be No Eternal Sleep",
                          "desc": "When \"Pollux, Netherwing Husk, Ferry of Souls\" uses \"Death Wishes For More Death,\" no ally characters enter the \"Indulging Slumber\" state",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_SpecailAbility05",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_StorySkill05",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.000010000076
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "StoryMode",
            "_StorySkill05"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "cantKill": true,
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
            "MDF_DamagePercentage",
            "MDF_DamageHpAddedRatio"
          ],
          "latentQueue": [],
          "description": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive. This DMG is \"Non-fatal.\"",
          "type": "Debuff",
          "effectName": "DoT",
          "statusName": "Hastened Death",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1688517080\">Enemy_W4_Pollux_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-289587260\">Monster_W4_Pollux_StoryMode_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EndCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "StunCheck02",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Minions}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Minions}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "EndCheck"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_EndInsert_Part01",
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
          "latentQueue": [
            "_StorySimulationSpeed",
            "AIFlag",
            "StoryMode"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-720682465\">Monster_W4_Pollux_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_PassiveAbility_Insert",
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
          "latentQueue": [
            "_WorldLevel"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1861751766\">Monster_W4_Pollux_PartStrong</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__931855053\">Monster_W4_Pollux_Fatigue</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "_FatigueRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
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
                  "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                    "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_TargetCurrentHp",
                      "_TargetMaxHP",
                      "_HpLimitRatio",
                      "_FatigueRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue2",
                  "value": {
                    "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                    "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                    "constants": [],
                    "variables": [
                      "_TargetMaxHP",
                      "_HpLimitRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
                  "valuePerStack": {
                    "_FatigueRatio": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + 0.01)",
                    "constants": [
                      0.01
                    ],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
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
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                      "displayLines": "_HpLimitRatio",
                      "constants": [],
                      "variables": [
                        "_HpLimitRatio"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                      "displayLines": "_HpLimitRatio",
                      "constants": [],
                      "variables": [
                        "_HpLimitRatio"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue1",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                        "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TargetCurrentHp",
                          "_TargetMaxHP",
                          "_HpLimitRatio",
                          "_FatigueRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue2",
                      "value": {
                        "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                        "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                        "constants": [],
                        "variables": [
                          "_TargetMaxHP",
                          "_HpLimitRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
                      "valuePerStack": {
                        "_FatigueRatio": {
                          "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                          "displayLines": "MDF_ShowValue1",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue1",
                      "value": {
                        "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                        "displayLines": "(MDF_ShowValue1 + 0.01)",
                        "constants": [
                          0.01
                        ],
                        "variables": [
                          "MDF_ShowValue1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_HpLimitRatio",
            "_FatigueRatio"
          ],
          "latentQueue": [
            "AIFlag",
            "_WorldLevel"
          ],
          "description": "When this target deals DMG to enemy targets, decreases DMG received by enemy targets by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Restore HP to an ally target until it reaches <span class=\"descriptionNumberColor\">MDF_ShowValue2</span> to dispel this effect.",
          "type": "Other",
          "effectName": "DMG Reduction",
          "statusName": "Indulging Slumber"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_LifeCountTime",
                    "compareType": "=",
                    "value2": 3
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_LifeCountTime",
                  "value": 1,
                  "max": 3
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "-_LifeCountTime"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                    }
                  ],
                  "failed": [
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
                                "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 2,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
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
          "description": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Overdue Obituary"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__276281376\">Monster_W4_Pollux_Main_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__891735658\">Monster_W4_Pollux_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-888665654\">Monster_W4_Pollux_Strengthen_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "StunCheck",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_StunRecover_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CurrentShieldValue",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_Stun_Insert",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
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
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageData",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentShieldValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || SUB || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue - MDF_AttackDamageData)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_AttackDamageData"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_CurrentShieldValue",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"23603986\">Modifier_StageSpecialAbility_10441065_OnPollux</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": 0
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                            "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentShieldValue",
                              "MDF_MaxShieldValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_IsAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                                "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_LastEnergyBarValue_RL",
                                  "MDF_EnergyBarValue",
                                  "MDF_ShieldAttack_HealRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": 1
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SummonerMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonerMaxHP) || Variables[1] (MDF_ShieldPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_SummonerMaxHP * MDF_ShieldPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_SummonerMaxHP",
                      "MDF_ShieldPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                    "displayLines": "MDF_MaxShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyBarValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RL",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                              "displayLines": "MDF_EnergyBarValue",
                              "constants": [],
                              "variables": [
                                "MDF_EnergyBarValue"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "MuteBreak",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance",
                  "whitelistTagType": "Bit_Decrease"
                },
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
          ],
          "description": "Before \"Pollux\" takes their next action, their Toughness cannot be reduced and is immune to action delay effects inflicted by targets.",
          "type": "Other",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4014032,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_WorldLevel",
                        "compareType": "<",
                        "value2": 6
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
                      "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_71) || RETURN",
                          "displayLines": "UnusedUnderThisBase_71",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_71"
                          ]
                        },
                        "MDF_ShieldAttack_HealRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_69) || RETURN",
                          "displayLines": "UnusedUnderThisBase_69",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_69"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_68) || RETURN",
                          "displayLines": "UnusedUnderThisBase_68",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_68"
                          ]
                        },
                        "MDF_ShieldAttack_HealRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_67) || RETURN",
                          "displayLines": "UnusedUnderThisBase_67",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_67"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 100,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_SpeedUpRatio) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + MDF_SpeedUpRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1",
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageUpTemp",
                  "value": {
                    "operator": "Variables[0] (_DamageUpTemp) || Variables[1] (MDF_DamageUpRatio) || ADD || RETURN",
                    "displayLines": "(_DamageUpTemp + MDF_DamageUpRatio)",
                    "constants": [],
                    "variables": [
                      "_DamageUpTemp",
                      "MDF_DamageUpRatio"
                    ]
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
                    "value1": "_DamageUpTemp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                          "displayLines": "MDF_DamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Castorice, Hand of Shadow",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> at the end of each turn. Attacks against \"Castorice, Hand of Shadow\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\""
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_SpeedUpRatio"
          ],
          "latentQueue": [
            "AIFlag",
            "_WorldLevel"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Attacks against \"Pollux\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fragrance of Death"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2086497725\">Monster_W4_Pollux_EnergyBar</a>",
          "stackData": [],
          "latentQueue": [
            "StoryMode",
            "_StorySkill05"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]",
          "stackData": [],
          "latentQueue": [
            "_WorldLevel",
            "AIFlag"
          ],
          "description": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit action advances and enters \"Fragrance of Death\" state in the next turn.",
          "type": "Other",
          "statusName": "Dream of Demise"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__599310144\">Monster_W4_Pollux_FX_Ground</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "IsNeedFade",
                    "compareType": "=",
                    "value2": 0
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
                    "name": "Compare: Variable",
                    "value1": "IsNeedFade",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "IsNeedFade"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT"
          ],
          "execute": [
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
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
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
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
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
            "MDF_DamagePercentage",
            "MDF_DamageHpAddedRatio"
          ],
          "latentQueue": [],
          "description": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive.",
          "type": "Debuff",
          "effectName": "DoT",
          "statusName": "Hastened Death",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1837027601\">Monster_W4_Pollux_IF_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
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
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_IF_PassiveAbility_Insert",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-600749923\">Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness</a>",
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
                  "action": "Attach",
                  "valueList": [
                    "Ice",
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-992661142\">Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness</a>",
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
                  "action": "Attach",
                  "valueList": [
                    "Wind",
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-354779130\">Enemy_W4_Pollux_IF_AbilityP01_WeaknessControl</a>",
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
                  "valueList": []
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Pollux Right Tentacle}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-992661142\">Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Pollux Left Tentacle}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-600749923\">Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-992661142\">Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-600749923\">Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1922809357\">Enemy_W4_Pollux_IF_HintToastController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Break the summons to weaken the boss"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Clear Desperate Bubbles to defeat the boss"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Break the summons to weaken the boss"
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Break summons to get healing rewards"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                        }
                      }
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2030876773\">Enemy_W4_PolluxPart_IF_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ],
          "description": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Overdue Obituary"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1339116785\">Enemy_W4_Pollux_IF_AbilityEX04</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1389449642\">Enemy_W4_Pollux_IF_AbilityEX03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1372672023\">Enemy_W4_Pollux_IF_AbilityEX02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1423004880\">Enemy_W4_Pollux_IF_AbilityEX01</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__385444056\">Enemy_W4_PolluxPart_IF_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (ThirstBlood_Dot_DamagePercentage) || RETURN",
                          "displayLines": "ThirstBlood_Dot_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_Dot_DamagePercentage"
                          ]
                        },
                        "MDF_DamageHpAddedRatio": {
                          "operator": "Variables[0] (ThirstBlood_DamageHpAddedRatio) || RETURN",
                          "displayLines": "ThirstBlood_DamageHpAddedRatio",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_DamageHpAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#SkillP02_P1_ThirstBlood_DamageHpAddedRatio",
                  "target2": null,
                  "variable2": "ThirstBlood_DamageHpAddedRatio"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#SkillP02_P2_ThirstBlood_Dot_DamagePercentage",
                  "target2": null,
                  "variable2": "ThirstBlood_Dot_DamagePercentage"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2030876773\">Enemy_W4_PolluxPart_IF_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit enters the \"Fragrance of Death\" state.",
          "type": "Other",
          "statusName": "Dream of Demise"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-261920057\">Enemy_W4_Pollux_IF_EnterBattle</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -45
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "StunCheck",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1989762066\">Enemy_W4_PolluxPart_IF_Link</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
                  "valuePerStack": {
                    "MDF_ReflexDamageValue": {
                      "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                      "displayLines": "{[SkillP04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Minions of Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                            "displayLines": "MDF_CurrentStance",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentStance"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Quantum"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                        "displayLines": "MDF_CurrentStance",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentStance"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Quantum"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1512844653\">Enemy_W4_Pollux_IF_Strengthen_Shield</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentShieldValue",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "justAddedOrLiving": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_IF_Stun_Insert",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
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
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageData",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentShieldValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || SUB || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue - MDF_AttackDamageData)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_AttackDamageData"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
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
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_CurrentShieldValue",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"23603986\">Modifier_StageSpecialAbility_10441065_OnPollux</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": 0
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                            "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentShieldValue",
                              "MDF_MaxShieldValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_IsAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                                "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_LastEnergyBarValue_RL",
                                  "MDF_EnergyBarValue",
                                  "MDF_ShieldAttack_HealRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": 1
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SummonerMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonerMaxHP) || Variables[1] (MDF_ShieldPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_SummonerMaxHP * MDF_ShieldPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_SummonerMaxHP",
                      "MDF_ShieldPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                    "displayLines": "MDF_MaxShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyBarValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RL",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                              "displayLines": "MDF_EnergyBarValue",
                              "constants": [],
                              "variables": [
                                "MDF_EnergyBarValue"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
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
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1512844653\">Enemy_W4_Pollux_IF_Strengthen_Shield</a>",
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                      "displayLines": "{[SkillP03[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP03[0]]}"
                      ]
                    },
                    "MDF_ShieldAttack_HealRatio": {
                      "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                      "displayLines": "{[SkillP03[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP03[1]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 100,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    ]
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1512844653\">Enemy_W4_Pollux_IF_Strengthen_Shield</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_SpeedUpRatio) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + MDF_SpeedUpRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1",
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_SpeedUpRatio"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Attacks against \"Guide of Withering and Decay\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fragrance of Death"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1989762066\">Enemy_W4_PolluxPart_IF_Link</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag02",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag02",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2030876773\">Enemy_W4_PolluxPart_IF_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-95813586\">Enemy_W4_PolluxPart_IF_Reflex_EffectLoop</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-95813586\">Enemy_W4_PolluxPart_IF_Reflex_EffectLoop</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-95813586\">Enemy_W4_PolluxPart_IF_Reflex_EffectLoop</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Custom Damage Type",
                      "initialTypePreRead": "Quantum",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_ReflexDamageValue) || RETURN",
                      "displayLines": "MDF_ReflexDamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_ReflexDamageValue"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-95813586\">Enemy_W4_PolluxPart_IF_Reflex_EffectLoop</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-95813586\">Enemy_W4_PolluxPart_IF_Reflex_EffectLoop</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag01",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag01",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ReflexDamageValue"
          ],
          "latentQueue": [
            "StunCheck"
          ],
          "description": "After attacking this target, the attacker will receive minor Quantum \"Atrophy DMG.\"",
          "type": "Other",
          "effectName": "Corrosive Retaliation",
          "statusName": "Corrosive Retaliation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak",
            "STAT_AITargetKeepActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                        "displayLines": "MDF_CurrentStance",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentStance"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Quantum"
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "add": 15
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "\"Guide of Withering and Decay\" is currently in \"Safeguard Breach\" state, this unit's DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
          "type": "Debuff",
          "statusName": "Physical Falter"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2031085573\">Enemy_W4_PolluxPart_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
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
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
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
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
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
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "\"Guide of Withering and Decay\" is currently in \"Steadfast Safeguard\" state, this unit's DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
          "type": "Buff",
          "statusName": "Physical Enhancement"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1636257193\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorController</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2031085573\">Enemy_W4_PolluxPart_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_MinionsSuperArmor_AllDamageReduce"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2037214572\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2031085573\">Enemy_W4_PolluxPart_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageTypeTakenRatio) || RETURN",
                          "displayLines": "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2037214572\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Physical Falter</span>]"
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2031085573\">Enemy_W4_PolluxPart_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageReduce": {
                              "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                              "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                              "constants": [],
                              "variables": [
                                "MDF_MinionsSuperArmor_AllDamageReduce"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": []
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MinionsSuperArmor_AllDamageReduce",
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
            "MDF_SetActionDelayValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-313862182\">Enemy_W4_Pollux_IF_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-147958761\">Enemy_W4_Pollux_IF_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                  "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"714067831\">Standard_SuperArmorBreak_IF</a>[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HPChangeRatio",
                      "value": {
                        "operator": "Variables[0] (_HPChangeValue) || INVERT || Variables[1] (_TargetMaxHP) || DIV || RETURN",
                        "displayLines": "(-_HPChangeValue / _TargetMaxHP)",
                        "constants": [],
                        "variables": [
                          "_HPChangeValue",
                          "_TargetMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_EnergyValue",
                      "value": {
                        "operator": "Variables[0] (_HPChangeRatio) || Variables[1] ({[SkillP02[2]]}) || MUL || RETURN",
                        "displayLines": "(_HPChangeRatio * {[SkillP02[2]]})",
                        "constants": [],
                        "variables": [
                          "_HPChangeRatio",
                          "{[SkillP02[2]]}"
                        ]
                      },
                      "max": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Current Turn Owner}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (_EnergyValue) || RETURN",
                            "displayLines": "_EnergyValue",
                            "constants": [],
                            "variables": [
                              "_EnergyValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "maximum": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "False"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1288968302\">Enemy_W4_Pollux_IF_Strengthen_BreakMark</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EnergyValue",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyValue) || RETURN",
                        "displayLines": "_EnergyValue",
                        "constants": [],
                        "variables": [
                          "_EnergyValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 1,
                      "assignState": "True",
                      "state": "Normal",
                      "trigger": "SpEff_Trigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Preview Shows Break[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
                  },
                  "passed": [
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "baseToughnessDMG": {
                        "operator": "Variables[0] (StanceDamagePreshowValue) || RETURN",
                        "displayLines": "StanceDamagePreshowValue",
                        "constants": [],
                        "variables": [
                          "StanceDamagePreshowValue"
                        ]
                      },
                      "toughnessForcedReductionPreview": 1,
                      "isForcedReduction": true,
                      "ignoreBreakBlock": true
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EnergyValue",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ReadyToCharge",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ReadyToCharge",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_LifetimeDisplay",
                  "value": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "The Reaper arrives in 2 turns"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "The Reaper arrives in 1 turn"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_TargetNegativeHp",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TargetNegativeHp",
                          "value": {
                            "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                            "constants": [],
                            "variables": [
                              "CEIL",
                              "_TargetNegativeHp"
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "DamageFlat": {
                              "operator": "Variables[0] (_TargetNegativeHp) || RETURN",
                              "displayLines": "_TargetNegativeHp",
                              "constants": [],
                              "variables": [
                                "_TargetNegativeHp"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "behaviorTag": "DirectlyLoseHpHit",
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_LifetimeDisplay",
                  "value": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DeathCountDown",
                  "value": -1,
                  "max": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
                }
              ],
              "priorityLevel": -10
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_FatigueRatio) || RETURN",
                    "displayLines": "MDF_FatigueRatio",
                    "constants": [],
                    "variables": [
                      "MDF_FatigueRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_StanceBreakDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_StanceBreakDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_StanceBreakDownRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_LifetimeDisplay",
                  "value": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damaging Effect",
                    "skillTypeControl": "ControlSkill03",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "checkSubSkill": true,
                    "checkSubSkillLogic": "And"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Damaging Effect",
                        "skillTypeControl": "ControlSkill03",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "checkSubSkill": true,
                        "checkSubSkillLogic": "And"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK",
                        "activeSkill": true
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damaging Effect",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damaging Effect",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
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
          "description": "Target has accumulated \"HP Overload.\" Heal <span class=\"descriptionNumberColor\">MDF_NegativeBlood</span> HP to remove this state. DMG dealt is reduced by <span class=\"descriptionNumberColor\">MDF_FatigueRatio</span>, and Weakness Break Efficiency is reduced by <span class=\"descriptionNumberColor\">MDF_StanceBreakDownRatio</span>. When its duration ends, the target will receive fatal damage. Remaining duration: <span class=\"descriptionNumberColor\">MDF_LifetimeDisplay</span> turn(s).",
          "type": "Other",
          "statusName": "Death Rattle"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Allow NEGATIVE HP"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_LifetimeDisplay"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__267358493\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-678977749\">TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
                }
              ]
            },
            {
              "eventTrigger": "Losing HP [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-678977749\">TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update</a>"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-678977749\">TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update</a>"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1205689073\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-678977749\">TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_NegativeHP",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "MDF_NegativeHP"
                    ]
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
                    "value1": "MDF_NegativeHP",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                          "variableName": "MDF_NegativeBlood",
                          "value": {
                            "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                            "displayLines": "MDF_NegativeHP",
                            "constants": [],
                            "variables": [
                              "MDF_NegativeHP"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                          "valuePerStack": {
                            "MDF_NegativeBlood": {
                              "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                              "displayLines": "MDF_NegativeHP",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeHP"
                              ]
                            },
                            "MDF_DeathCountDown": {
                              "operator": "Variables[0] (MDF_NegativeBlood_DeathCountDown) || RETURN",
                              "displayLines": "MDF_NegativeBlood_DeathCountDown",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_DeathCountDown"
                              ]
                            },
                            "MDF_FatigueRatio": {
                              "operator": "Variables[0] (MDF_NegativeBlood_FatigueRatio) || RETURN",
                              "displayLines": "MDF_NegativeBlood_FatigueRatio",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_FatigueRatio"
                              ]
                            },
                            "MDF_StanceBreakDownRatio": {
                              "operator": "Variables[0] (MDF_NegativeBlood_StanceBreakDownRatio) || RETURN",
                              "displayLines": "MDF_NegativeBlood_StanceBreakDownRatio",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_StanceBreakDownRatio"
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
          ],
          "description": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
          "type": "Other",
          "effectName": "Overloadable",
          "statusName": "Overloadable"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2037214572\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ToastFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_ToastFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ToastFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_NegativeBlood_Target_DeathCountDown",
            "MDF_NegativeBlood_Target_FatigueRatio",
            "MDF_NegativeBlood_Target_StanceBreakDownRatio"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"267358493\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_NegativeBlood_DeathCountDown": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_DeathCountDown) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_DeathCountDown",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_DeathCountDown"
                  ]
                },
                "MDF_NegativeBlood_FatigueRatio": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_FatigueRatio) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_FatigueRatio",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_FatigueRatio"
                  ]
                },
                "MDF_NegativeBlood_StanceBreakDownRatio": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_StanceBreakDownRatio) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_StanceBreakDownRatio",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_StanceBreakDownRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-822435931\">Enemy_W4_Pollux_IF_UltraReadyMark</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "4014036_Functions": {
      "fileName": "4014036_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyValue) || RETURN",
                        "displayLines": "_EnergyValue",
                        "constants": [],
                        "variables": [
                          "_EnergyValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Tutorial",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Tutorial",
                      "value": 1
                    }
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