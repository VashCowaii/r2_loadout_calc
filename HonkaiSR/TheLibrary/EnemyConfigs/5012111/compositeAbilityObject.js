const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012111,
  "trimCharacterName": 5012111,
  "abilityList": [
    "5012111_Monster_W5_Limao_Passive",
    "5012111_Monster_W5_Limao_Ability01_Camera_FateRin",
    "5012111_Monster_W5_Limao_Ability01_Part02_FateRin",
    "5012111_Monster_W5_Limao_Ability01_Part01_FateRin",
    "5012111_Handling"
  ],
  "abilityObject": {
    "5012111_Monster_W5_Limao_Passive": {
      "fileName": "5012111_Monster_W5_Limao_Passive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "UI Display Event",
          "popUpText": "Find a way to make the corrupt thief Furbulitzer turn over a new leaf!"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1484589918\">Monster_W5_Limao_Passive_Insert</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1484589918\">Monster_W5_Limao_Passive_Insert</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Limao_Ability01_Part01_FateRin",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "Activity_FateRin_MasterAvatar"
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    "5012111_Monster_W5_Limao_Ability01_Camera_FateRin": {
      "fileName": "5012111_Monster_W5_Limao_Ability01_Camera_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012111_Monster_W5_Limao_Ability01_Part02_FateRin": {
      "fileName": "5012111_Monster_W5_Limao_Ability01_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageFlat": {
              "displayLines": 1
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012111_Monster_W5_Limao_Ability01_Part01_FateRin": {
      "fileName": "5012111_Monster_W5_Limao_Ability01_Part01_FateRin",
      "childAbilityList": [
        "5012111_Monster_W5_Limao_Ability01_Part01_FateRin",
        "5012111_Monster_W5_Limao_Ability01_Part02_FateRin",
        "5012111_Monster_W5_Limao_Ability01_Camera_FateRin"
      ],
      "skillTrigger": "Skill01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_Limao_Ability01_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5012111_Handling": {
      "fileName": "5012111_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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