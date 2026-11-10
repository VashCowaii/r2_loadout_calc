const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3001010,
  "trimCharacterName": 3001010,
  "abilityList": [
    "3001010_Monster_W2_Mecha01_02_Ability01_Part02",
    "3001010_Monster_W2_Mecha01_02_Ability01_Part01",
    "3001010_Handling"
  ],
  "abilityObject": {
    "3001010_Monster_W2_Mecha01_02_Ability01_Part02": {
      "fileName": "3001010_Monster_W2_Mecha01_02_Ability01_Part02",
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
              "displayLines": "{[Skill01[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"4474377\">Standard_StatusResistanceDown</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
          "duration": {
            "displayLines": "{[Skill01[2]]}"
          },
          "baseChance": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "{[Skill01[1]]}"
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1843127678\">Monster_W2_Mecha01_02_ResistanceDown</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - MDF_PropertyValue)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "3001010_Monster_W2_Mecha01_02_Ability01_Part01": {
      "fileName": "3001010_Monster_W2_Mecha01_02_Ability01_Part01",
      "childAbilityList": [
        "3001010_Monster_W2_Mecha01_02_Ability01_Camera",
        "3001010_Monster_W2_Mecha01_02_Ability01_Part01",
        "3001010_Monster_W2_Mecha01_02_Ability01_Part02"
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
          "ability": "Monster_W2_Mecha01_02_Ability01_Part02",
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
    "3001010_Handling": {
      "fileName": "3001010_Handling",
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
              "optionName": "UseSequenceSkill",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  "Use Sequence Ability Option"
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
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