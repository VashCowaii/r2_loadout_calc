const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30505,
  "trimCharacterName": 30505,
  "abilityList": [
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Effect",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01"
  ],
  "abilityObject": {
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01": {
      "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01",
      "childAbilityList": [
        "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01"
      ],
      "skillTrigger": "SkillPC01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"847649245\">Modifier_ChallengePeakBattle_Elation_01_PassiveAbility_ExtraElationSkill</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__847649245\">Modifier_ChallengePeakBattle_Elation_01_PassiveAbility_ExtraElationSkill</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    30505
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -90
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Effect": {
      "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02": {
      "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Ability01_P1_HitCount) || RETURN",
            "displayLines": "Ability01_P1_HitCount",
            "constants": [],
            "variables": [
              "Ability01_P1_HitCount"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Define Variable with Random Value",
                  "variableName": "#CL_RandomPosX",
                  "min": -0.3,
                  "max": 0.3
                },
                {
                  "name": "Define Variable with Random Value",
                  "variableName": "#CL_RandomPosY",
                  "min": -0.3,
                  "max": 0.3
                },
                {
                  "name": "Define Variable with Random Value",
                  "variableName": "#CL_RandomRotY",
                  "min": -60,
                  "max": 60
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (Ability01_P2_DamagePercentage) || RETURN",
                      "displayLines": "Ability01_P2_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Ability01_P2_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01": {
      "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01",
      "childAbilityList": [
        "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part01",
        "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
        "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Camera",
        "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Effect"
      ],
      "skillTrigger": "Skill04",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
      "energy": null,
      "toughnessList": [
        20,
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
          "ability": "BattleEventAbility_ChallengePeakBattle_Elation_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    }
  },
  "enemyData": {
    "Skill04": {
      "skillID": 3050501,
      "trigger": "Skill04",
      "name": "Unboxing Surprise",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals multiple hits of Imaginary Elation DMG to a random enemy target.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "element": "Imaginary",
      "skillEffect": "Bounce",
      "maxLevel": 1,
      "configAbilityList": [
        "BattleEventAbility_ChallengePeakBattle_Elation_01_Skill01_Phase01",
        "BattleEventAbility_ChallengePeakBattle_Elation_01_Skill01_Phase02",
        "BattleEventAbility_ChallengePeakBattle_Elation_01_Skill01_Camera",
        "BattleEventAbility_ChallengePeakBattle_Elation_01_Skill01_Effect"
      ],
      "toughnessList": [
        60,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}