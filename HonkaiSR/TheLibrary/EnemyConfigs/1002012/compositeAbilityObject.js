const compositeAbilityObject = {
  "fullCharacterName": 1002012,
  "trimCharacterName": 1002012,
  "abilityList": [
    "1002012_Boss_Cocolia_P1_Weapon_DeathSetCamera",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1002012_Boss_Cocolia_P1_Weapon_DeathEffect",
    "1002012_Boss_Cocolia_P1_Weapon_MuteHitFly",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01"
  ],
  "abilityObject": {
    "1002012_Boss_Cocolia_P1_Weapon_DeathSetCamera": {
      "fileName": "1002012_Boss_Cocolia_P1_Weapon_DeathSetCamera",
      "skillTrigger": "PassiveSkill04",
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
          "modifier": "Boss_Cocolia_P1_Weapon_DeathSetCamera"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Boss_Cocolia_P1_Weapon_DeathSetCamera",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "BOSS_COCOLIA_BOSS_MDF"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "WeaponDeathCount",
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
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "WeaponDeathCount",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        "Deleted bullshit"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
      "childAbilityList": [
        "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
        "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
        "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002012_Boss_Cocolia_P1_Weapon_DeathEffect": {
      "fileName": "1002012_Boss_Cocolia_P1_Weapon_DeathEffect",
      "skillTrigger": "PassiveSkill03",
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
          "modifier": "Boss_Cocolia_P1_Weapon_DeathEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Boss_Cocolia_P1_Weapon_DeathEffect",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DeathEvent_Trigger_Times",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1002012_Boss_Cocolia_P1_Weapon_MuteHitFly": {
      "fileName": "1002012_Boss_Cocolia_P1_Weapon_MuteHitFly",
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
          "modifier": "Boss_Cocolia_MuteHitFly_Modifier"
        }
      ],
      "references": []
    },
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_1"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathEvent_Trigger_Times",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01": {
      "fileName": "1002012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    }
  }
}