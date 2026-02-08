const compositeAbilityObject = {
  "fullCharacterName": 1012030,
  "trimCharacterName": 1012030,
  "abilityList": [
    "1012030_Monster_W1_Mecha01_01_Ability01_Part02",
    "1012030_Monster_W1_Mecha01_01_Ability01_Part01",
    "1012030_Monster_W1_Mecha01_01_PassiveAbility_KlaraSpecialVictory"
  ],
  "abilityObject": {
    "1012030_Monster_W1_Mecha01_01_Ability01_Part02": {
      "fileName": "1012030_Monster_W1_Mecha01_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-696028198\">Enemy_Mecha_BlockDamage</a>[<span class=\"descriptionNumberColor\">Barrier</span>]"
        },
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
      "references": []
    },
    "1012030_Monster_W1_Mecha01_01_Ability01_Part01": {
      "fileName": "1012030_Monster_W1_Mecha01_01_Ability01_Part01",
      "childAbilityList": [
        "1012030_Monster_W1_Mecha01_01_Ability01_Part01",
        "1012030_Monster_W1_Mecha01_01_Ability01_Part02",
        "1012030_Monster_W1_Mecha01_01_Ability01_Camera"
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
          "ability": "Monster_W1_Mecha01_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012030_Monster_W1_Mecha01_01_PassiveAbility_KlaraSpecialVictory": {
      "fileName": "1012030_Monster_W1_Mecha01_01_PassiveAbility_KlaraSpecialVictory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-411560977\">Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__266091507\">Monster_W1_Mecha01_01_Instance_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-411560977\">Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"266091507\">Monster_W1_Mecha01_01_Instance_DisableAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}