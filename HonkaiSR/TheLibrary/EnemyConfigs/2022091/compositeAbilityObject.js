const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022091,
  "trimCharacterName": 2022091,
  "abilityList": [
    "2022091_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
    "2022091_Monster_W2_Xuanlu_03_Ability01_Part02",
    "2022091_Monster_W2_Xuanlu_03_Ability01_Part01",
    "2022091_Handling"
  ],
  "abilityObject": {
    "2022091_Monster_W2_Xuanlu_01_PassiveAbility_Effect": {
      "fileName": "2022091_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
      "skillTrigger": "Passive",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "2022091_Monster_W2_Xuanlu_03_Ability01_Part02": {
      "fileName": "2022091_Monster_W2_Xuanlu_03_Ability01_Part02",
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
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2022091_Monster_W2_Xuanlu_03_Ability01_Part01": {
      "fileName": "2022091_Monster_W2_Xuanlu_03_Ability01_Part01",
      "childAbilityList": [
        "2022091_Monster_W2_Xuanlu_03_Ability01_Part01",
        "2022091_Monster_W2_Xuanlu_03_Ability01_Part02",
        "2022091_Monster_W2_Xuanlu_03_Ability01_Camera"
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
          "ability": "Monster_W2_Xuanlu_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022091_Handling": {
      "fileName": "2022091_Handling",
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
              "option": "Decision01",
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
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    }
  }
}