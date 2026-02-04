const compositeAbilityObject = {
  "fullCharacterName": 1012021,
  "trimCharacterName": 1012021,
  "abilityList": [
    "1012021_Monster_W1_GSMecha_01_Ability04_Part02",
    "1012021_Monster_W1_GSMecha_01_Ability04_Part01",
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_Insert",
    "1012021_Monster_W1_GSMecha_01_Ability03_Part02",
    "1012021_Monster_W1_GSMecha_01_Ability03_Part01",
    "1012021_Monster_W1_GSMecha_01_Ability02_Part02",
    "1012021_Monster_W1_GSMecha_01_Ability02_Part01",
    "1012021_Monster_W1_GSMecha_01_Ability01_Part02",
    "1012021_Monster_W1_GSMecha_01_Ability01_Part01",
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraSpecialVictory",
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattleCamera",
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraCamera",
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_Initiate"
  ],
  "abilityObject": {
    "1012021_Monster_W1_GSMecha_01_Ability04_Part02": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_Ability04_Part01": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability04_Part01",
      "childAbilityList": [
        "1012021_Monster_W1_GSMecha_01_Ability04_Camera",
        "1012021_Monster_W1_GSMecha_01_Ability04_Part01",
        "1012021_Monster_W1_GSMecha_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W1_GSMecha_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_Insert": {
      "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Chains of Destruction"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_BoomTimes",
          "value": 1,
          "max": 1
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_Ability03_Part02": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_GSMecha_01_Initiate"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
    "1012021_Monster_W1_GSMecha_01_Ability03_Part01": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability03_Part01",
      "childAbilityList": [
        "1012021_Monster_W1_GSMecha_01_Ability03_Camera",
        "1012021_Monster_W1_GSMecha_01_Ability03_Part01",
        "1012021_Monster_W1_GSMecha_01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W1_GSMecha_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Mark Entity For Immediate Death"
        }
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_Ability02_Part02": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_GSMecha_01_ExplodeCharge_Effect"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "About to explode!"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Charge"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_BoomRound",
          "context": "TargetEntity",
          "value": 1,
          "min": -1,
          "max": 10
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_BoomTimes"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GSMecha_01_ExplodeCharge_Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1012021_Monster_W1_GSMecha_01_Ability02_Part01": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability02_Part01",
      "childAbilityList": [
        "1012021_Monster_W1_GSMecha_01_Ability02_Camera",
        "1012021_Monster_W1_GSMecha_01_Ability02_Part01",
        "1012021_Monster_W1_GSMecha_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W1_GSMecha_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_Ability01_Part02": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability01_Part02",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_Ability01_Part01": {
      "fileName": "1012021_Monster_W1_GSMecha_01_Ability01_Part01",
      "childAbilityList": [
        "1012021_Monster_W1_GSMecha_01_Ability01_Camera",
        "1012021_Monster_W1_GSMecha_01_Ability01_Part01",
        "1012021_Monster_W1_GSMecha_01_Ability01_Part02"
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
          "ability": "Monster_W1_GSMecha_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraSpecialVictory": {
      "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraSpecialVictory",
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
          "modifier": "Monster_W1_GSMecha_01_KlaraSpecialVictory_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GSMecha_01_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GSMecha_01_KlaraSpecialVictory_LockHP",
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
                  "modifier": "Monster_W1_GSMecha_01_Instance_DisableAction"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattleCamera": {
      "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattleCamera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraCamera": {
      "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraCamera",
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
          "modifier": "Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1012021_Monster_W1_GSMecha_01_PassiveAbility_Initiate": {
      "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_Initiate",
      "childAbilityList": [
        "1012021_Monster_W1_GSMecha_01_PassiveAbility_Initiate",
        "1012021_Monster_W1_GSMecha_01_PassiveAbility_Insert"
      ],
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
          "modifier": "Monster_W1_GSMecha_01_Initiate"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_BoomTimes"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_BoomRound"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GSMecha_01_Initiate",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_GSMecha_01_PassiveAbility_Insert",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
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