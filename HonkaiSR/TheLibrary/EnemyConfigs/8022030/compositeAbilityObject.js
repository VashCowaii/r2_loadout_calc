const compositeAbilityObject = {
  "fullCharacterName": 8022030,
  "trimCharacterName": 8022030,
  "abilityList": [
    "8022030_Monster_SW_Minion01_02_PassiveAbility_Insert_Part01",
    "8022030_Monster_SW_Minion01_02_Ability01_Part02",
    "8022030_Monster_SW_Minion01_02_Ability01_Part01",
    "8022030_Monster_SW_Minion01_02_Passive01",
    "8022030_Modifiers"
  ],
  "abilityObject": {
    "8022030_Monster_SW_Minion01_02_PassiveAbility_Insert_Part01": {
      "fileName": "8022030_Monster_SW_Minion01_02_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Decay Eulogy"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Quantum"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8022030_Monster_SW_Minion01_02_Ability01_Part02": {
      "fileName": "8022030_Monster_SW_Minion01_02_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": null,
          "eventType": "DOT_Entangle",
          "value": null
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-670541105\">Monster_SW_Minion01_02_Ability01Target</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8022030_Monster_SW_Minion01_02_Ability01_Part01": {
      "fileName": "8022030_Monster_SW_Minion01_02_Ability01_Part01",
      "childAbilityList": [
        "8022030_Monster_SW_Minion01_02_Ability01_Camera",
        "8022030_Monster_SW_Minion01_02_Ability01_Part01",
        "8022030_Monster_SW_Minion01_02_Ability01_Part02"
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
          "ability": "Monster_SW_Minion01_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8022030_Monster_SW_Minion01_02_Passive01": {
      "fileName": "8022030_Monster_SW_Minion01_02_Passive01",
      "skillTrigger": "Monster_SW_Minion01_02_Passive01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2034428405\">Monster_SW_Minion01_02_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1505890812\">Monster_SW_Minion01_02_Deathrattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"456439505\">Monster_SW_Minion01_02_WingsControl</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__456439505\">Monster_SW_Minion01_02_WingsControl</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1505890812\">Monster_SW_Minion01_02_Deathrattle</a>",
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
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_SW_Minion01_02_PassiveAbility_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2034428405\">Monster_SW_Minion01_02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8022030_Modifiers": {
      "fileName": "8022030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-670541105\">Monster_SW_Minion01_02_Ability01Target</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
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