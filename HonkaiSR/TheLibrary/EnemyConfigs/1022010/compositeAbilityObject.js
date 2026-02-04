const compositeAbilityObject = {
  "fullCharacterName": 1022010,
  "trimCharacterName": 1022010,
  "abilityList": [
    "1022010_Monster_W1_Soldier01_02_Ability01_Part02",
    "1022010_Monster_W1_Soldier01_02_Ability01_Part01",
    "1022010_Monster_W1_Soldier01_02_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "1022010_Monster_W1_Soldier01_02_Ability01_Part02": {
      "fileName": "1022010_Monster_W1_Soldier01_02_Ability01_Part02",
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
            "DamageType": "Ice",
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
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill01[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1022010_Monster_W1_Soldier01_02_Ability01_Part01": {
      "fileName": "1022010_Monster_W1_Soldier01_02_Ability01_Part01",
      "childAbilityList": [
        "1022010_Monster_W1_Soldier01_02_Ability01_Camera",
        "1022010_Monster_W1_Soldier01_02_Ability01_Part01",
        "1022010_Monster_W1_Soldier01_02_Ability01_Part02"
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
          "ability": "Monster_W1_Soldier01_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1022010_Monster_W1_Soldier01_02_PassiveAbilityInitiate": {
      "fileName": "1022010_Monster_W1_Soldier01_02_PassiveAbilityInitiate",
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
          "modifier": "Enemy_W1_Soldier01_02_BreakEffectController"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier01_02_IceEffectController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier01_02_MaterialsChange",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier01_02_BreakEffectController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "StanceBreakState"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Soldier01_02_IceEffectController"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Soldier01_02_IceEffectController"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W1_Soldier01_02_MaterialsChange"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Soldier01_02_IceEffectController"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W1_Soldier01_02_MaterialsChange"
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