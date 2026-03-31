const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60027,
  "trimCharacterName": 60027,
  "abilityList": [
    "60027_Phainon_Ability31_Part2_MainStory",
    "60027_Phainon_Ability31_Part1_MainStory",
    "60027_MissionBattleEvent60027_Ability03_Part01"
  ],
  "abilityObject": {
    "60027_Phainon_Ability31_Part2_MainStory": {
      "fileName": "60027_Phainon_Ability31_Part2_MainStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "variableName": "ADF_TargetCount",
          "livingTargets": true,
          "context": "ContextAbility"
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
                  "displayLines": 60
                },
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Ultimate"
              },
              "attackType": "Ultimate"
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
    "60027_Phainon_Ability31_Part1_MainStory": {
      "fileName": "60027_Phainon_Ability31_Part1_MainStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"754083449\">Enemy_W4_DawnsEyePart_03_DieController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"740710426\">Monster_Standard_DisableAction</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Battle Event ID",
                "ID": 20015,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "Battle Event ID",
                "ID": 60029,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Destroy Battle Entity",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "He Who Bears the World Must Burn"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability31_Part2_MainStory",
          "isTrigger": true
        },
        "Deleted bullshit",
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
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60027_MissionBattleEvent60027_Ability03_Part01": {
      "fileName": "60027_MissionBattleEvent60027_Ability03_Part01",
      "childAbilityList": [
        "60027_MissionBattleEvent60027_Ability03_Part01"
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
              "ability": "Phainon_Ability31_Part1_MainStory",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2002345609\">MissionBattleEvent60027_AddAbility</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2002345609\">MissionBattleEvent60027_AddAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Phainon_Ability31_Part1_MainStory"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Phainon_Ability31_Part2_MainStory"
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
      "skillID": 6002701,
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
        "Avatar_MissionBattleEvent60027_Skill03_Phase01"
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