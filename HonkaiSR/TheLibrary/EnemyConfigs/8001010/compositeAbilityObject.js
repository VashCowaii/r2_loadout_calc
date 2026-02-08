const compositeAbilityObject = {
  "fullCharacterName": 8001010,
  "trimCharacterName": 8001010,
  "abilityList": [
    "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part02",
    "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part01",
    "8001010_Monster_XP_Minion01_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part02": {
      "fileName": "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part02",
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
            "DamageType": "Fire",
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
    "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part01": {
      "fileName": "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part01",
      "childAbilityList": [
        "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part01",
        "8001010_WMonster_Element_Slime_01_Fire_Ability01_Part02"
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
          "ability": "WMonster_Element_Slime_01_Fire_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "8001010_Monster_XP_Minion01_PassiveAbilityInitiate": {
      "fileName": "8001010_Monster_XP_Minion01_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1878716990\">Enemy_XP_Minion01_EffectController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1878716990\">Enemy_XP_Minion01_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}