const compositeAbilityObject = {
  "fullCharacterName": 8032020,
  "trimCharacterName": 8032020,
  "abilityList": [
    "8032020_Monster_W1_Soldier01_04_Passive01",
    "8032020_Monster_W1_Soldier01_04_Ability01_Part02",
    "8032020_Monster_W1_Soldier01_04_Ability01_Part01",
    "8032020_Modifiers"
  ],
  "abilityObject": {
    "8032020_Monster_W1_Soldier01_04_Passive01": {
      "fileName": "8032020_Monster_W1_Soldier01_04_Passive01",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "Monster_W1_Soldier01_04_CoinPassive"
        }
      ],
      "references": []
    },
    "8032020_Monster_W1_Soldier01_04_Ability01_Part02": {
      "fileName": "8032020_Monster_W1_Soldier01_04_Ability01_Part02",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8032020_Monster_W1_Soldier01_04_Ability01_Part01": {
      "fileName": "8032020_Monster_W1_Soldier01_04_Ability01_Part01",
      "childAbilityList": [
        "8032020_Monster_W1_Soldier01_04_Ability01_Part01",
        "8032020_Monster_W1_Soldier01_04_Ability01_Part02",
        "8032020_Monster_W1_Soldier01_04_Ability01_Camera"
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
          "ability": "Monster_W1_Soldier01_04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8032020_Modifiers": {
      "fileName": "8032020_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Soldier01_04_CoinPassive",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}