const compositeAbilityObject = {
  "fullCharacterName": 1002064,
  "trimCharacterName": 1002064,
  "abilityList": [
    "1002064_Monster_W1_CocoliaP2_01_Ability01_Part02",
    "1002064_Monster_W1_CocoliaP2_01_Ability01_Part01",
    "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
    "1002064_Boss_Cocolia_P1_Weapon_DeathSetCamera",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1002064_Boss_Cocolia_P1_Weapon_DeathEffect",
    "1002064_Boss_Cocolia_P1_Weapon_MuteHitFly",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
    "1002064_Modifiers"
  ],
  "abilityObject": {
    "1002064_Monster_W1_CocoliaP2_01_Ability01_Part02": {
      "fileName": "1002064_Monster_W1_CocoliaP2_01_Ability01_Part02",
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
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
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
    "1002064_Monster_W1_CocoliaP2_01_Ability01_Part01": {
      "fileName": "1002064_Monster_W1_CocoliaP2_01_Ability01_Part01",
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
          "ability": "Monster_W1_CocoliaP2_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate": {
      "fileName": "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>"
        }
      ],
      "references": []
    },
    "1002064_Boss_Cocolia_P1_Weapon_DeathSetCamera": {
      "fileName": "1002064_Boss_Cocolia_P1_Weapon_DeathSetCamera",
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
          "modifier": "<a class=\"gModGreen\" id=\"1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-79024859\">BOSS_COCOLIA_BOSS_MDF</a>"
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
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
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
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
      "childAbilityList": [
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Camera"
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
    "1002064_Boss_Cocolia_P1_Weapon_DeathEffect": {
      "fileName": "1002064_Boss_Cocolia_P1_Weapon_DeathEffect",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>",
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
    "1002064_Boss_Cocolia_P1_Weapon_MuteHitFly": {
      "fileName": "1002064_Boss_Cocolia_P1_Weapon_MuteHitFly",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1485263337\">Boss_Cocolia_MuteHitFly_Modifier</a>"
        }
      ],
      "references": []
    },
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
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
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
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
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002064_Modifiers": {
      "fileName": "1002064_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1494181192\">Enemy_W1_CocoliaP2_01_DieWithoutEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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