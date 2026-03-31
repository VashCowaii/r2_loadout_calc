const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60026,
  "trimCharacterName": 60026,
  "abilityList": [
    "60026_Phainon_Ability22_v2_Part02_MainStory",
    "60026_Phainon_Ability22_v2_Part01_MainStory",
    "60026_MissionBattleEvent60026_Ability03_Part01"
  ],
  "abilityObject": {
    "60026_Phainon_Ability22_v2_Part02_MainStory": {
      "fileName": "60026_Phainon_Ability22_v2_Part02_MainStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_delta_frame",
          "value": {
            "operator": "Variables[0] (PHAINON_OBJECT_UNUSED_1) || Variables[1] (PHAINON_OBJECT_UNUSED_2) || SUB || Variables[2] (Count) || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / (Count - 1))",
            "constants": [
              1
            ],
            "variables": [
              "PHAINON_OBJECT_UNUSED_1",
              "PHAINON_OBJECT_UNUSED_2",
              "Count"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Count) || RETURN",
            "displayLines": "Count",
            "constants": [],
            "variables": [
              "Count"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "_count",
                  "value": {
                    "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_count"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": 1
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "instanceTag": "Phainon_Skill22",
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "ADF_TargetCount",
          "context": "ContextAbility"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": 1
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_CurrentHp) || RETURN",
                  "displayLines": "_CurrentHp",
                  "constants": [],
                  "variables": [
                    "_CurrentHp"
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
                  "displayLines": "(1 / ADF_TargetCount)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ADF_TargetCount"
                  ]
                },
                "Toughness": {
                  "displayLines": 30
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60026_Phainon_Ability22_v2_Part01_MainStory": {
      "fileName": "60026_Phainon_Ability22_v2_Part01_MainStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability22_v2_Part02_MainStory",
          "isTrigger": true
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60026_MissionBattleEvent60026_Ability03_Part01": {
      "fileName": "60026_MissionBattleEvent60026_Ability03_Part01",
      "childAbilityList": [
        "60026_MissionBattleEvent60026_Ability03_Part01"
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
        "Show BattleEvent Button",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 1408,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Phainon"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Phainon_Ability22_v2_Part01_MainStory",
              "isTrigger": true
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 1408,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Phainon"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"254185198\">MissionBattleEvent60026_AddAbility</a>"
            }
          ]
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 100,
          "isFixed": "* ERR"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__254185198\">MissionBattleEvent60026_AddAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Phainon_Ability22_v2_Part01_MainStory"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Phainon_Ability22_v2_Part02_MainStory"
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
        "primaryTarget": "All Enemy Team"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6002601,
      "trigger": "Skill03",
      "name": null,
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "attackType": "Ultra",
      "skillEffect": "Support",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60026_Skill03_Phase01"
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