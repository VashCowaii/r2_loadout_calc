const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022070,
  "trimCharacterName": 2022070,
  "abilityList": [
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part02",
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part01",
    "2022070_Monster_W2_Xuanlu_01_PassiveAbility_Effect"
  ],
  "abilityObject": {
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part02_RL": {
      "fileName": "2022070_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
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
            "DamageType": "Wind",
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
            "attackType": "Basic ATK",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_301) || RETURN",
            "displayLines": "UnusedUnderThisBase_301",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_301"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_302) || RETURN",
            "displayLines": "UnusedUnderThisBase_302",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_302"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_300) || RETURN",
              "displayLines": "UnusedUnderThisBase_300",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_300"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part01_RL": {
      "fileName": "2022070_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part02": {
      "fileName": "2022070_Monster_W2_Xuanlu_01_Ability01_Part02",
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
            "DamageType": "Wind",
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
            "attackType": "Basic ATK",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022070_Monster_W2_Xuanlu_01_Ability01_Part01": {
      "fileName": "2022070_Monster_W2_Xuanlu_01_Ability01_Part01",
      "childAbilityList": [
        "2022070_Monster_W2_Xuanlu_01_Ability01_Part01",
        "2022070_Monster_W2_Xuanlu_01_Ability01_Part02",
        "2022070_Monster_W2_Xuanlu_01_Ability01_Camera"
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
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022070_Monster_W2_Xuanlu_01_PassiveAbility_Effect": {
      "fileName": "2022070_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
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
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}