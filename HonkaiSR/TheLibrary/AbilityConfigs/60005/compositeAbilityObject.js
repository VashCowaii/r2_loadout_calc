const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60005,
  "trimCharacterName": 60005,
  "abilityList": [
    "60005_Monster_BattleEvent_W1_Colossus_PassiveAbility01",
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Camera",
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part02",
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01"
  ],
  "abilityObject": {
    "60005_Monster_BattleEvent_W1_Colossus_PassiveAbility01": {
      "fileName": "60005_Monster_BattleEvent_W1_Colossus_PassiveAbility01",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2137008278\">Enemy_BattleEvent_W1_Colossus_BlockDamage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1765138594\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1765138594\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Skill_UseTime",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Skill_UseTime",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Skill_UseTime",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1397498818\">Monster_BattleEvent_W1_Colossus_Ability08_Show_Modifier_1</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2137008278\">Enemy_BattleEvent_W1_Colossus_BlockDamage</a>",
          "modifierFlags": [
            "BlockDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Camera": {
      "fileName": "60005_Monster_BattleEvent_W1_Colossus_Ability08_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part02": {
      "fileName": "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
              "displayLines": "{[Skill08[0]]}",
              "constants": [],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01": {
      "fileName": "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01",
      "childAbilityList": [
        "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01",
        "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part02",
        "60005_Monster_BattleEvent_W1_Colossus_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Basic ATK",
      "energy": 10,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_BattleEvent_W1_Colossus_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    }
  },
  "enemyData": {
    "Skill08": {
      "skillID": 6000501,
      "trigger": "Skill08",
      "name": "",
      "type": "Single Target",
      "slot": "Basic ATK",
      "desc": "Deals Fire DMG to all targets",
      "energyCost": null,
      "energyRegen": 10,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          3
        ]
      },
      "element": "Fire",
      "attackType": "Normal",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Monster_BattleEvent_W1_Colossus_00_Skill08_Phase01",
        "Monster_BattleEvent_W1_Colossus_00_Skill08_Phase02",
        "Monster_BattleEvent_W1_Colossus_00_Skill08_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}