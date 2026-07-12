const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1012010,
  "trimCharacterName": 1012010,
  "abilityList": [
    "1012010_Monster_W1_CWMecha_03_Ability05_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability01_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
    "1012010_Handling"
  ],
  "abilityObject": {
    "1012010_Monster_W1_CWMecha_03_Ability05_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability05_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
      "childAbilityList": [
        "1012010_Monster_W1_CWMecha_03_Ability05_Camera",
        "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
        "1012010_Monster_W1_CWMecha_03_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W1_CWMecha_03_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability01_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability01_Part02",
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
            "DamageType": "Physical",
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
    "1012010_Monster_W1_CWMecha_03_Ability01_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
      "childAbilityList": [
        "1012010_Monster_W1_CWMecha_03_Ability01_Camera",
        "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
        "1012010_Monster_W1_CWMecha_03_Ability01_Part02"
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
          "ability": "Monster_W1_CWMecha_03_Ability01_Part02",
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
    "1012010_Handling": {
      "fileName": "1012010_Handling",
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
      "references": [],
      "parsedSequence": [
        "101201001",
        "101201002"
      ]
    }
  }
}