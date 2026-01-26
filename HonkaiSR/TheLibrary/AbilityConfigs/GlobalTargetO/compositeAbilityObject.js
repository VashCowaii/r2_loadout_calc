const compositeAbilityObject = {
  "fullCharacterName": "Global Target Operators",
  "trimCharacterName": "GlobalTargetO",
  "abilityList": [
    "GlobalTargetO"
  ],
  "abilityObject": {
    "GlobalTargetO": {
      "fileName": "GlobalTargetO",
      "abilityType": "Target Operators",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Target Configuration",
          "nameTarget": "sortByLineup",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Physical Positioning"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByEnemyRank",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Monster Rank"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByDebuffs",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Modifier Types",
              "buffType": "Debuff"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByBuffs",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Modifier Types",
              "buffType": "Buff"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByAV",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Action Order"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByBreakEffect",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByToughMax",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByToughCurrent",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByShield",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByHPMax",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "sortByHPCurrent",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Sort by Stat",
              "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "reverse",
          "isTargetOperator": true,
          "execute": [
            "Reverse Target Order"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "randomize",
          "isTargetOperator": true,
          "execute": [
            "Shuffle Targets"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getLast",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "Last"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "index4",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "IndexStrict",
              "indexValue": 4
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "index3",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "IndexStrict",
              "indexValue": 3
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "index2",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "IndexStrict",
              "indexValue": 2
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "index1",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "IndexStrict",
              "indexValue": 1
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "index0",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Index",
              "indexType": "IndexStrict"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "deadButNotProcessed",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Living State",
                "state": "Mask_DiedButNotDispose",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "livingOrLimbo",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOrLimbo",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "living",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCharChange",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} + {{Parameter Target List}}.[[getCharByChangeSource]] + {{Parameter Target List}}.[[getCharByChange]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCharChangeTargetOrSelf",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Character Change Target",
              "includeSelf": true
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCharChangeSourceOrSelf",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Character Change Source",
              "includeSelf": true
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeCharChange",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Character-Change Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCharByChange",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Character Change Target"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCharByChangeSource",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Character Change Source"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAbilityTargetAgent",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Dummy Entity",
              "entityName": "SkillTargetAgent"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getDummy",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Dummy Entity",
              "autoCreate": true
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSnapshotTarget",
          "isTargetOperator": true,
          "execute": [
            "Map Target to Snapshot Target"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAbilityTargetList",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target}}.[[getAbilityTarget]] | {{Parameter Target}}.[[getAbilitySubTargets]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAbilitySubTargets",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Ability Sub-Targets"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAbilityTargetwError",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Ability Target"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAbilityTarget",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Ability Target"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getDMGReceiver",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Target TAKING DMG"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getDMGDealer",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Target DEALING DMG"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSourceCreator",
          "isTargetOperator": true,
          "execute": [
            "Get Source Owner"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addBattleEventMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getBattleEventMemosprite]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getBattleEventMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Sequence",
              "Sequence": [
                "Adjust Target by Battle-Events Created",
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "expectedType": "Memosprite[Battle Event]"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeBattleEventMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true,
                "expectedType": "Memosprite[Battle Event]"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite",
                "invertCondition": true,
                "livingState": "Anyone"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getMemosprite]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getMemosprite",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Sequence",
              "Sequence": [
                "Adjust Target by Summoned Minions",
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addSelfMadeSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getSelfMadeSummon]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addAttachedSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getAttachedSummon]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSelfMadeSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAttachedSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Sequence",
              "Sequence": [
                "Adjust Target by Battle-Events Created",
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "expectedType": "Summon"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addMemoAndSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getMemosprite]] | {{Parameter Target List}}.[[getAttachedSummon]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getMemoAndSummon",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}}.[[getMemosprite]] + {{Parameter Target List}}.[[getAttachedSummon]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addSummoner",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getSummoner]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSummonMinions",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Summoned Minions"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSummoner",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Summoner"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getCreator",
          "isTargetOperator": true,
          "execute": [
            "Map Target to Creator"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addAdjacentNoMemo",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} + {{Parameter Target List}}.[[getAdjacentNoMemo]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAdjacentNoMemo",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Target by Adjacent Targets",
              "countSetting": "skipMemosprites"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addAdjacent",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} + {{Parameter Target List}}.[[getAdjacent]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getAdjacent",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Adjacent Targets"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeBattleEventsFromOthers",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true,
                    "livingState": "Anyone"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "target2": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "Map Target to Creator"
                      ]
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSelfMadeBattleEvents",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Sequence",
              "Sequence": [
                "Adjust Target by Battle-Events Created",
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "target2": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "Map Target to Creator"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "addBattleEvents",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Name",
              "target": "{{Parameter Target List}} | {{Parameter Target List}}.[[getBattleEvents]]"
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getBattleEvents",
          "isTargetOperator": true,
          "execute": [
            "Adjust Target by Battle-Events Created"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeBattleEvents",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Battle Event",
                "invertCondition": true,
                "livingState": "Anyone"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getEnemyTeam",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getPlayerTeam",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSelfApplyCustomUnselectables",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Add Target by All Custom Unselectable Targets",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getSelfApplyUnselectables",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Add Target by All Unselectable Targets",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "regardPartAsOwner",
          "isTargetOperator": true,
          "execute": [
            "Override Part Map to Part Owner"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeSelectable",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "removeUnselectable",
          "isTargetOperator": true,
          "execute": [
            "Remove Unselectables From Target"
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getHostileTargets",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "Adjust Target by Hostile Team Entity",
                {
                  "name": "Adjust Relative to Target, Get Team",
                  "removeUnselectable": false
                }
              ]
            }
          ]
        },
        {
          "name": "Target Configuration",
          "nameTarget": "getTeamMembers",
          "isTargetOperator": true,
          "execute": [
            {
              "name": "Adjust Relative to Target, Get Team",
              "removeUnselectable": false
            }
          ]
        }
      ],
      "references": []
    }
  }
}