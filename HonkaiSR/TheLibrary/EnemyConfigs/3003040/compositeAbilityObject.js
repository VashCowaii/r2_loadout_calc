const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003040,
  "trimCharacterName": 3003040,
  "abilityList": [
    "3003040_Monster_W3_Figure_AssistAbility01_Effect",
    "3003040_Monster_W3_Figure_AssistAbility01_Perform",
    "3003040_Monster_W3_Figure_AssistAbility01_Logic",
    "3003040_Monster_W3_Figure_Ability07_Part02",
    "3003040_Monster_W3_Figure_Ability07_Part01",
    "3003040_Monster_W3_Figure_Ability06_Part02",
    "3003040_Monster_W3_Figure_Ability06_Part01",
    "3003040_Monster_W3_Figure_Ability05_Part02",
    "3003040_Monster_W3_Figure_Ability05_Logic",
    "3003040_Monster_W3_Figure_Ability05_Part01",
    "3003040_Monster_W3_Figure_Ability04_Part02",
    "3003040_Monster_W3_Figure_Ability04_Part01",
    "3003040_Monster_W3_Figure_AssistAbility02_Part02",
    "3003040_Monster_W3_Figure_AssistAbility02_Part01",
    "3003040_Monster_W3_Figure_Ability03_Part02",
    "3003040_Monster_W3_Figure_Ability03_Part01",
    "3003040_Monster_W3_Figure_Ability02_Part02",
    "3003040_Monster_W3_Figure_Ability02_Part01",
    "3003040_Monster_W3_Figure_Ability01_Part02",
    "3003040_Monster_W3_Figure_Ability01_Part01",
    "3003040_Monster_W3_Figure_PassiveAbility_Initiate",
    "3003040_Modifiers"
  ],
  "abilityObject": {
    "3003040_Monster_W3_Figure_AssistAbility01_Effect": {
      "fileName": "3003040_Monster_W3_Figure_AssistAbility01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_AssistAbility01_Perform": {
      "fileName": "3003040_Monster_W3_Figure_AssistAbility01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_AssistAbility01_Logic": {
      "fileName": "3003040_Monster_W3_Figure_AssistAbility01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT_Burn",
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability07_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability07_Part02",
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
          "ability": "Monster_W3_Figure_Ability07_Part01",
          "isTrigger": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "MDF_AllDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability07_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability07_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability07_Part01",
        "3003040_Monster_W3_Figure_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability06_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability06_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability06_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability06_Camera",
        "3003040_Monster_W3_Figure_Ability06_Part01",
        "3003040_Monster_W3_Figure_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability05_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-25601954\">Monster_W3_Figure_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]"
        },
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
              "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_HealPercentage": {
                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                  "displayLines": "{[Skill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[3]]}"
                  ]
                },
                "MDF_AllDamageAddedRatio": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability05_Logic": {
      "fileName": "3003040_Monster_W3_Figure_Ability05_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "MDF_AllDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability05_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability05_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability05_Camera",
        "3003040_Monster_W3_Figure_Ability05_Part01",
        "3003040_Monster_W3_Figure_Ability05_Part02"
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
          "ability": "Monster_W3_Figure_Ability05_Part02",
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
    "3003040_Monster_W3_Figure_Ability04_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-25601954\">Monster_W3_Figure_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability04_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability04_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability04_Camera",
        "3003040_Monster_W3_Figure_Ability04_Part01",
        "3003040_Monster_W3_Figure_Ability04_Part02"
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
          "ability": "Monster_W3_Figure_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_AssistAbility02_Part02": {
      "fileName": "3003040_Monster_W3_Figure_AssistAbility02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_AssistAbility02_Part01": {
      "fileName": "3003040_Monster_W3_Figure_AssistAbility02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability03_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability03_Part02",
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
            "DamageType": "Imaginary",
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
            "attackType": "Basic ATK",
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
    "3003040_Monster_W3_Figure_Ability03_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability03_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability03_Camera",
        "3003040_Monster_W3_Figure_Ability03_Part01",
        "3003040_Monster_W3_Figure_Ability03_Part02"
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
          "ability": "Monster_W3_Figure_Ability03_Part02",
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
    "3003040_Monster_W3_Figure_Ability02_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
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
          "valuePerStack": {
            "MDF_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "MDF_AllDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability02_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability02_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability02_Camera",
        "3003040_Monster_W3_Figure_Ability02_Part01",
        "3003040_Monster_W3_Figure_Ability02_Part02"
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
          "ability": "Monster_W3_Figure_Ability02_Part02",
          "isTrigger": true
        },
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
    "3003040_Monster_W3_Figure_Ability01_Part02": {
      "fileName": "3003040_Monster_W3_Figure_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003040_Monster_W3_Figure_Ability01_Part01": {
      "fileName": "3003040_Monster_W3_Figure_Ability01_Part01",
      "childAbilityList": [
        "3003040_Monster_W3_Figure_Ability01_Camera",
        "3003040_Monster_W3_Figure_Ability01_Part01",
        "3003040_Monster_W3_Figure_Ability01_Part02"
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
          "ability": "Monster_W3_Figure_Ability01_Part02",
          "isTrigger": true
        },
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
    "3003040_Monster_W3_Figure_PassiveAbility_Initiate": {
      "fileName": "3003040_Monster_W3_Figure_PassiveAbility_Initiate",
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
          "name": "Find New Target",
          "from": {
            "name": "Add Target by Unique Identifier",
            "identifier": "DollBoss"
          },
          "searchRandom": true,
          "maxTargets": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"145980133\">Enemy_W3_Figure_AudioControllerForChosenOne</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1950828013\">Enemy_W3_Figure_BreakController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1533608275\">W3_Figure_BattleScore1</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__145980133\">Enemy_W3_Figure_AudioControllerForChosenOne</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1950828013\">Enemy_W3_Figure_BreakController</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3003040_Modifiers": {
      "fileName": "3003040_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1363623\">W3_Figure_BattleScore1_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1533608275\">W3_Figure_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Figure_00_BattleScore1_Flag"
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
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1363623\">W3_Figure_BattleScore1_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1363623\">W3_Figure_BattleScore1_Mark</a>",
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "W3_Figure_00_BattleScore1_Flag",
                      "value": 1,
                      "max": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_Figure_00_BattleScore1_Flag",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Soap Opera",
                              "desc": "Have #1 character(s) enter the sleeping state when battling \"Tomorrow in Harmonious Chords\"",
                              "rarity": "Low",
                              "params": [
                                4
                              ]
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-25601954\">Monster_W3_Figure_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "About to use \"Sleep In Heavenly Peace\"",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Holy Night"
        }
      ],
      "references": []
    }
  }
}