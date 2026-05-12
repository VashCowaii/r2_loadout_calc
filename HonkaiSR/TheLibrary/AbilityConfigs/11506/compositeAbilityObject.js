const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 11506,
  "trimCharacterName": 11506,
  "abilityList": [
    "11506_Modifiers",
    "11506_GlobalAbility_SilverWolf999_Insert_Camera",
    "11506_GlobalAbility_SilverWolf999_Insert_Part02",
    "11506_GlobalAbility_SilverWolf999_Insert_Part01",
    "11506_GlobalAbility_SilverWolf999_BattleEvent"
  ],
  "abilityObject": {
    "11506_Modifiers": {
      "fileName": "11506_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__221078581\">GlobalAbility_SilverWolf999_ImmuneCTRL</a>[<span class=\"descriptionNumberColor\">Firewall</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "EnduranceEnemyLogicOnly",
            501
          ],
          "description": "Immune to Crowd Control debuffs inflicted by enemy targets.",
          "type": "Buff",
          "effectName": "Firewall",
          "statusName": "Firewall",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "11506_GlobalAbility_SilverWolf999_Insert_Camera": {
      "fileName": "11506_GlobalAbility_SilverWolf999_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11506_GlobalAbility_SilverWolf999_Insert_Part02": {
      "fileName": "11506_GlobalAbility_SilverWolf999_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"294189746\">GlobalAbility_SilverWolf999_BattleEvent_Listener</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_ForceControl",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"221078581\">GlobalAbility_SilverWolf999_ImmuneCTRL</a>[<span class=\"descriptionNumberColor\">Firewall</span>]",
          "duration": 1
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      }
    },
    "11506_GlobalAbility_SilverWolf999_Insert_Part01": {
      "fileName": "11506_GlobalAbility_SilverWolf999_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Assign Global Buff State",
          "buffID": 150602,
          "state": "False",
          "amount": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count1"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count2"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count3"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count4"
          }
        },
        {
          "name": "UI Display Event",
          "popUpText": "McAwolfee 999"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "GlobalAbility_SilverWolf999_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11506_GlobalAbility_SilverWolf999_BattleEvent": {
      "fileName": "11506_GlobalAbility_SilverWolf999_BattleEvent",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-4563035\">GlobalAbility_SilverWolf999_BattleEvent</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__294189746\">GlobalAbility_SilverWolf999_BattleEvent_Listener</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "flagName": "STAT_ForceControl",
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Enemy Team"
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
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_ForceControl",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      "abilityName": "GlobalAbility_SilverWolf999_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "CharacterBuffOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-4563035\">GlobalAbility_SilverWolf999_BattleEvent</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Assign Global Buff State",
                  "buffID": 150602,
                  "state": "True",
                  "amount": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"294189746\">GlobalAbility_SilverWolf999_BattleEvent_Listener</a>"
                },
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "SilverWolf999_GlobalBonus",
                  "state": false
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Assign Global Buff State",
                  "buffID": 150602,
                  "state": "True",
                  "amount": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"294189746\">GlobalAbility_SilverWolf999_BattleEvent_Listener</a>"
                }
              ],
              "priorityLevel": -93
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
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}