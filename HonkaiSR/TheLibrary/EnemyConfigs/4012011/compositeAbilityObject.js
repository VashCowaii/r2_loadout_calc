const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4012011,
  "trimCharacterName": 4012011,
  "abilityList": [
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02",
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01",
    "4012011_Handling"
  ],
  "abilityObject": {
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02": {
      "fileName": "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02",
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
    "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01": {
      "fileName": "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Camera",
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part01",
        "4012011_Monster_W4_Strongman_LocalLegend_Ability01_Part02"
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
          "ability": "Monster_W4_Strongman_LocalLegend_Ability01_Part02",
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
    "4012011_Handling": {
      "fileName": "4012011_Handling",
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
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
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