const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60008,
  "trimCharacterName": 60008,
  "abilityList": [
    "60008_MissionBattleEvent60008_Ability02_Part02",
    "60008_MissionBattleEvent60008_Ability02_Part01",
    "60008_MissionBattleEvent60008_Listener",
    "60008_BE_BattleEvents"
  ],
  "abilityObject": {
    "60008_MissionBattleEvent60008_Ability02_Part02": {
      "fileName": "60008_MissionBattleEvent60008_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "valuePercent": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"936193653\">Modifier_MissionBattleEvent60008_Summon</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__936193653\">Modifier_MissionBattleEvent60008_Summon</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Neutral Team",
                  "dmgCountsForTeam": "Player Team",
                  "eventID": 60011,
                  "variables": null
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      }
    },
    "60008_MissionBattleEvent60008_Ability02_Part01": {
      "fileName": "60008_MissionBattleEvent60008_Ability02_Part01",
      "childAbilityList": [
        "60008_MissionBattleEvent60008_Ability02_Camera",
        "60008_MissionBattleEvent60008_Ability02_Part01",
        "60008_MissionBattleEvent60008_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TalkCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TalkCount",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TalkCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkCount",
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TalkCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TalkCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60008_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "TalkCount"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Player Team"
      }
    },
    "60008_MissionBattleEvent60008_Listener": {
      "fileName": "60008_MissionBattleEvent60008_Listener",
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
          "modifier": "<a class=\"gModGreen\" id=\"1136491047\">Modifier_MissionBattleEvent60008_Insert</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1136491047\">Modifier_MissionBattleEvent60008_Insert</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 60008,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "MissionBattleEvent60008_Ability02_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60008_BE_BattleEvents": {
      "fileName": "60008_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 60011,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "MissionBattleEvent60008_Listener"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 120
            }
          ],
          "eventSpeed": 120,
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill08": {
      "skillID": 6000801,
      "trigger": "Skill08",
      "name": "",
      "type": "Single Target",
      "slot": "Basic ATK",
      "desc": "Deals Fire DMG to all targets",
      "energyCost": null,
      "energyRegen": 10,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          3
        ]
      },
      "element": "Fire",
      "attackType": "Normal",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": null,
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