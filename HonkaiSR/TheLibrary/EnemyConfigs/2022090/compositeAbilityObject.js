const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022090,
  "trimCharacterName": 2022090,
  "abilityList": [
    "2022090_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
    "2022090_Monster_W2_Xuanlu_03_Ability01_Part02",
    "2022090_Monster_W2_Xuanlu_03_Ability01_Part01"
  ],
  "abilityObject": {
    "2022090_Monster_W2_Xuanlu_01_PassiveAbility_Effect": {
      "fileName": "2022090_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
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
    "2022090_Monster_W2_Xuanlu_03_Ability01_Part02": {
      "fileName": "2022090_Monster_W2_Xuanlu_03_Ability01_Part02",
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
    "2022090_Monster_W2_Xuanlu_03_Ability01_Part01": {
      "fileName": "2022090_Monster_W2_Xuanlu_03_Ability01_Part01",
      "childAbilityList": [
        "2022090_Monster_W2_Xuanlu_03_Ability01_Part01",
        "2022090_Monster_W2_Xuanlu_03_Ability01_Part02",
        "2022090_Monster_W2_Xuanlu_03_Ability01_Camera"
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
    }
  }
}