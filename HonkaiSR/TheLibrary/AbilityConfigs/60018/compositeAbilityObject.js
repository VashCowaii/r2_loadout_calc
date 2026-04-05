const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60018,
  "trimCharacterName": 60018,
  "abilityList": [
    "60018_MissionBattleEvent60018_Ability03_Camera",
    "60018_MissionBattleEvent60018_Insert_Part01",
    "60018_MissionBattleEvent60018_Ability03_Part01"
  ],
  "abilityObject": {
    "60018_MissionBattleEvent60018_Ability03_Camera": {
      "fileName": "60018_MissionBattleEvent60018_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60018_MissionBattleEvent60018_Insert_Part01": {
      "fileName": "60018_MissionBattleEvent60018_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_FirstTalk",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_FirstTalk",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageExtra": {
                  "displayLines": 2
                },
                "dmgFormulaExtra": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_CurrentStance) || RETURN",
                  "displayLines": "_CurrentStance",
                  "constants": [],
                  "variables": [
                    "_CurrentStance"
                  ]
                },
                "Tags": null,
                "attackType": "Additional DMG",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60018_MissionBattleEvent60018_Ability03_Part01": {
      "fileName": "60018_MissionBattleEvent60018_Ability03_Part01",
      "childAbilityList": [
        "60018_MissionBattleEvent60018_Ability03_Part01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1616458391\">MStageMissionBattleEvent60018</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1616458391\">MStageMissionBattleEvent60018</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "MissionBattleEvent60018_Insert_Part01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "MissionBattleEvent60018_Ability03_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]"
            },
            {
              "eventTrigger": "Entity Created [Anyone]"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "Inject Ability Use",
                  "abilityName": "MissionBattleEvent60018_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}