const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60019,
  "trimCharacterName": 60019,
  "abilityList": [
    "60019_MissionBattleEvent60019_AbilityP01",
    "60019_MissionBattleEvent60019_Ability03_Part02",
    "60019_MissionBattleEvent60019_Ability03_Part01"
  ],
  "abilityObject": {
    "60019_MissionBattleEvent60019_AbilityP01": {
      "fileName": "60019_MissionBattleEvent60019_AbilityP01",
      "childAbilityList": [
        "60019_MissionBattleEvent60019_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1375694400\">MissionBattleEvent60013_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1005861830\">MissionBattleEvent60013_AutoUseUltraAbility</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"584540750\">MissionBattleEvent60013_AttackIgnoreDEF</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__584540750\">MissionBattleEvent60013_AttackIgnoreDEF</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": -1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1005861830\">MissionBattleEvent60013_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1375694400\">MissionBattleEvent60013_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            },
            {
              "eventTrigger": "Energy Change"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60019_MissionBattleEvent60019_Ability03_Part02": {
      "fileName": "60019_MissionBattleEvent60019_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1863598202\">Monster_W3_Sunday_IF_ChargeDoneHint_Lock</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Horizon's Echo From Afar"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "Train_TargetNumber"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.15,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.15,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.15,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.15,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.15,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.15) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.15)",
            "constants": [
              0.15
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] (Train_TargetNumber) || DIV || RETURN",
              "displayLines": "({[Skill03[0]]} / Train_TargetNumber)",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}",
                "Train_TargetNumber"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.25,
            "Toughness": null,
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.25) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * 0.25)",
            "constants": [
              0.25
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1496118097\">Monster_W3_Sunday_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill03[2]]}) || Constants[0] (0.25) || MUL || RETURN",
            "displayLines": "({[Skill03[2]]} * 0.25)",
            "constants": [
              0.25
            ],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "defender": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"882833488\">Monster_W3_SundayPart_IF_Status</a>"
                }
              }
            ]
          },
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 0,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1718357040\">Enemy_W3_Sunday_DuringBE</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60019_MissionBattleEvent60019_Ability03_Part01": {
      "fileName": "60019_MissionBattleEvent60019_Ability03_Part01",
      "childAbilityList": [
        "60019_MissionBattleEvent60019_Ability03_Part01",
        "60019_MissionBattleEvent60019_Ability03_Part02",
        "60019_MissionBattleEvent60013_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        40,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60019_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6001901,
      "trigger": "Skill03",
      "name": "Horizon's Echo From Afar",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Break enemy summons to Charge 1 Energy. Deals massive Imaginary DMG to all enemies.",
      "energyCost": 8,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          12,
          480,
          30
        ]
      },
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60019_Skill03_Phase01",
        "Avatar_MissionBattleEvent60019_Skill03_Phase02",
        "Avatar_MissionBattleEvent60013_Skill03_Camera"
      ],
      "toughnessList": [
        0,
        120,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6001902,
      "trigger": "SkillP01",
      "name": "",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          100
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60019_SkillP01"
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