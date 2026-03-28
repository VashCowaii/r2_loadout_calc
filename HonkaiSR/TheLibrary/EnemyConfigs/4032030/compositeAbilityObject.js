const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032030,
  "trimCharacterName": 4032030,
  "abilityList": [
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part02",
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01",
    "4032030_Monster_W2_Valkyrie01_02_Ability01_Part02",
    "4032030_Monster_W2_Valkyrie01_02_Ability01_Part01",
    "4032030_Monster_W2_Valkyrie01_02_AbilityP01",
    "4032030_Modifiers"
  ],
  "abilityObject": {
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part02": {
      "fileName": "4032030_Monster_W2_Valkyrie01_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "Flag_RevengeTrigger",
              "value": 0
            }
          ]
        },
        "Ability Start",
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TargetCount",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (TargetCount) || DIV || RETURN",
              "displayLines": "({[Skill02[0]]} / TargetCount)",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}",
                "TargetCount"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01": {
      "fileName": "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01",
      "childAbilityList": [
        "4032030_Monster_W2_Valkyrie01_02_Ability02_Part01",
        "4032030_Monster_W2_Valkyrie01_02_Ability02_Part02",
        "4032030_Monster_W2_Valkyrie01_02_Ability02_Camera"
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
          "ability": "Monster_W2_Valkyrie01_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032030_Monster_W2_Valkyrie01_02_Ability01_Part02": {
      "fileName": "4032030_Monster_W2_Valkyrie01_02_Ability01_Part02",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032030_Monster_W2_Valkyrie01_02_Ability01_Part01": {
      "fileName": "4032030_Monster_W2_Valkyrie01_02_Ability01_Part01",
      "childAbilityList": [
        "4032030_Monster_W2_Valkyrie01_02_Ability01_Part01",
        "4032030_Monster_W2_Valkyrie01_02_Ability01_Part02",
        "4032030_Monster_W2_Valkyrie01_02_Ability01_Camera"
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
          "ability": "Monster_W2_Valkyrie01_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032030_Monster_W2_Valkyrie01_02_AbilityP01": {
      "fileName": "4032030_Monster_W2_Valkyrie01_02_AbilityP01",
      "childAbilityList": [
        "4032030_Monster_W2_Valkyrie01_02_AbilityP01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-855496844\">Enemy_W2_Valkyrie01_02_EffectController</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032030_Modifiers": {
      "fileName": "4032030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-855496844\">Enemy_W2_Valkyrie01_02_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]",
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
                      "target": "{{All Team Members}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                        },
                        {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "Flag_RevengeTrigger",
                          "compareType": "=",
                          "value2": 1,
                          "contextScope": "TargetEntity"
                        }
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Flag_RevengeTrigger",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Flag_RevengeTrigger",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Flag_RevengeTrigger",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Flag_RevengeTrigger",
                          "value": 3
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Flag_RevengeTrigger",
                                "compareType": "NOT=",
                                "value2": 3,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Flag_RevengeTrigger",
                              "value": 0
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Flag_RevengeTrigger",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Flag_RevengeTrigger",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Flag_RevengeTrigger",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
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
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Flag_RevengeTrigger",
                            "compareType": "NOT=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Flag_RevengeTrigger",
                          "value": 2
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"300417906\">TaskList_Monster_W2_Valkyrie01_02_AbortRevenge</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Break"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"300417906\">TaskList_Monster_W2_Valkyrie01_02_AbortRevenge</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__300417906\">TaskList_Monster_W2_Valkyrie01_02_AbortRevenge</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Flag_RevengeTrigger",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Flag_RevengeTrigger",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
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
          "description": "When other friendly units are defeated, this unit immediately takes action and uses \"Fire of Vengeance\" once. When there are multiple \"Black Tide's Corroded Axe\" on the battlefield, only 1 \"Black Tide's Corroded Axe\"'s \"Bitter Fracture\" Talent can be triggered.",
          "type": "Other",
          "statusName": "Bitter Fracture"
        }
      ],
      "references": []
    }
  }
}