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
          "modifier": "Enemy_Mecha_BlockDamage[<span class=\"descriptionNumberColor\">Barrier</span>]"
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
          "modifier": "Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha01_01_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP",
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
                  "modifier": "Monster_W1_Mecha01_01_Instance_DisableAction"
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