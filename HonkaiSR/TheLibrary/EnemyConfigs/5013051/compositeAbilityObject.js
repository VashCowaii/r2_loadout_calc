const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5013051,
  "trimCharacterName": 5013051,
  "abilityList": [
    "5013051_Monster_W5_RangerGroup_PassiveAbility01_Insert",
    "5013051_Monster_W5_RangerGroup_PassiveAbilityInitiate",
    "5013051_Monster_W5_RangerGroup_SpecialWin",
    "5013051_Monster_W5_RangerGroup_Revive",
    "5013051_Monster_W5_Ranger_Ability04_Camera_Main",
    "5013051_Monster_W5_Ranger_Ability04_Part02_Main",
    "5013051_Monster_W5_Ranger_Ability04_Part01_Main",
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part02",
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01",
    "5013051_Monster_W5_Ranger_Main_Ability03_Part02",
    "5013051_Monster_W5_Ranger_Main_Ability03_Part01",
    "5013051_Monster_W5_Ranger_Main_PassiveAbility01",
    "5013051_Monster_W5_Ranger_Ability05_Part02",
    "5013051_Monster_W5_Ranger_Ability05_Part01",
    "5013051_Monster_W5_Ranger_Ability04_Part02",
    "5013051_Monster_W5_Ranger_Ability04_Part01",
    "5013051_Monster_W5_Ranger_Ability03_Part02",
    "5013051_Monster_W5_Ranger_Ability03_Part01",
    "5013051_Monster_W5_Ranger_Ability02_Part02",
    "5013051_Monster_W5_Ranger_Ability02_Part01",
    "5013051_Monster_W5_Ranger_Ability01_Part02",
    "5013051_Monster_W5_Ranger_Ability01_Part01",
    "5013051_Monster_W5_Ranger_PassiveAbility01",
    "5013051_Modifiers"
  ],
  "abilityObject": {
    "5013051_Monster_W5_RangerGroup_PassiveAbility01_Insert": {
      "fileName": "5013051_Monster_W5_RangerGroup_PassiveAbility01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                "displayLines": "SummonList_ADF_2",
                "constants": [],
                "variables": [
                  "SummonList_ADF_2"
                ]
              },
              "locationType": "BeforeCaster"
            },
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                "displayLines": "SummonList_ADF_4",
                "constants": [],
                "variables": [
                  "SummonList_ADF_4"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Set Enemy Phase",
          "mode": "Inc"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "resolveToSubGroups": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2082758660\">Enemy_W5_RangerGroup_MainEnd</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1422594911\">Enemy_W5_RangerGroup_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_RangerGroup_PassiveAbilityInitiate": {
      "fileName": "5013051_Monster_W5_RangerGroup_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "PartControl",
          "state": false
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": false
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2004703763\">Enemy_W5_RangerGroup_PassiveAbilityInitiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1422594911\">Enemy_W5_RangerGroup_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_RangerGroup_SpecialWin": {
      "fileName": "5013051_Monster_W5_RangerGroup_SpecialWin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_RangerGroup_Revive": {
      "fileName": "5013051_Monster_W5_RangerGroup_Revive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-488756959\">Enemy_W5_RangerGroup_SpecialWin</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "isFixed": "(Fixed)"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "multiBase": 1
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0,
          "adjustmentType": "="
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1761388509\">Enemy_W5_Ranger_Main_Ultra</a>[<span class=\"descriptionNumberColor\">Ultimate Daybreak</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1577274573\">Enemy_W5_Ranger_Main_UltraViewMode</a>",
          "execute": [
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1761388509\">Enemy_W5_Ranger_Main_Ultra</a>[<span class=\"descriptionNumberColor\">Ultimate Daybreak</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1577274573\">Enemy_W5_Ranger_Main_UltraViewMode</a>"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": 10
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Cannot be knocked down. Ultimate DMG greatly increases.",
          "type": "Buff",
          "effectName": "Ultimate Daybreak",
          "statusName": "Ultimate Daybreak"
        }
      ]
    },
    "5013051_Monster_W5_Ranger_Ability04_Camera_Main": {
      "fileName": "5013051_Monster_W5_Ranger_Ability04_Camera_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability04_Part02_Main": {
      "fileName": "5013051_Monster_W5_Ranger_Ability04_Part02_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2082758660\">Enemy_W5_RangerGroup_MainEnd</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1823743995\">AvatarChange_W5_Ranger_Shield</a>[<span class=\"descriptionNumberColor\">Daybreak Temperance</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1811426878\">Enemy_W5_Ranger_Main_Revive</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || Constants[0] (20) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_154 * 20)",
              "constants": [
                20
              ],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.55,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W5_RangerGroup_Revive",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "priorityTag": "AvatarReviveSelf",
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1811426878\">Enemy_W5_Ranger_Main_Revive</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W5_RangerGroup_Revive"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5013051_Monster_W5_Ranger_Ability04_Part01_Main": {
      "fileName": "5013051_Monster_W5_Ranger_Ability04_Part01_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Shadow Dance of the Daybreak Blade"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_Ranger_Ability04_Part02_Main",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_01_Main_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1643569913\">Enemy_W5_Ranger_Main_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUp": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01",
      "childAbilityList": [
        "5013051_Monster_W5_Ranger_Ability03_Camera",
        "5013051_Monster_W5_Ranger_01_Main_Ability03_Part01",
        "5013051_Monster_W5_Ranger_01_Main_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W5_Ranger_01_Main_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Main_Ability03_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Main_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-680453013\">Enemy_W5_Ranger_Main_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "valuePerStack": {
            "MDF_SpeedUp": {
              "operator": "Variables[0] (UnusedUnderThisBase_593) || RETURN",
              "displayLines": "UnusedUnderThisBase_593",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_593"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Main_Ability03_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Main_Ability03_Part01",
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
          "ability": "Monster_W5_Ranger_Main_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Main_PassiveAbility01": {
      "fileName": "5013051_Monster_W5_Ranger_Main_PassiveAbility01",
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1534116188\">Enemy_W5_Ranger_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1534116188\">Enemy_W5_Ranger_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5013051_Monster_W5_Ranger_Ability05_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_589) || RETURN",
            "displayLines": "UnusedUnderThisBase_589",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_589"
            ]
          },
          "valuePerStack": {
            "MDF_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_590) || RETURN",
              "displayLines": "UnusedUnderThisBase_590",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_590"
              ]
            },
            "MDF_ResistanceDelta": {
              "operator": "Variables[0] (UnusedUnderThisBase_591) || RETURN",
              "displayLines": "UnusedUnderThisBase_591",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_591"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability05_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Ability05_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Ranger_Ability05_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability04_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            }
          ],
          "defaultEvents": []
        },
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                      "displayLines": "UnusedUnderThisBase_154",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_154"
                      ]
                    },
                    "HitSplit": 0.55,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                      "displayLines": "UnusedUnderThisBase_154",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_154"
                      ]
                    },
                    "HitSplit": 0.55,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                      "displayLines": "UnusedUnderThisBase_154",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_154"
                      ]
                    },
                    "HitSplit": 0.55,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                      "displayLines": "UnusedUnderThisBase_154",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_154"
                      ]
                    },
                    "HitSplit": 0.55,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__134483810\">Monster_W5_Ranger_Ability04_Attack</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                          "displayLines": "UnusedUnderThisBase_154",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_154"
                          ]
                        },
                        "HitSplit": 0.05,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                          "displayLines": "UnusedUnderThisBase_154",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_154"
                          ]
                        },
                        "HitSplit": 0.05,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                          "displayLines": "UnusedUnderThisBase_154",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_154"
                          ]
                        },
                        "HitSplit": 0.05,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
                          "displayLines": "UnusedUnderThisBase_154",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_154"
                          ]
                        },
                        "HitSplit": 0.05,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability04_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Ability04_Part01",
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
          "ability": "Monster_W5_Ranger_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability03_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Charge"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
          "valuePerStack": {
            "MDF_MaxCharge": {
              "operator": "Variables[0] (UnusedUnderThisBase_587) || RETURN",
              "displayLines": "UnusedUnderThisBase_587",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_587"
              ]
            },
            "MDF_HitCharge": {
              "operator": "Variables[0] (UnusedUnderThisBase_588) || RETURN",
              "displayLines": "UnusedUnderThisBase_588",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_588"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability03_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Ability03_Part01",
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
          "ability": "Monster_W5_Ranger_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability02_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1864908120\">Monster_W5_Ranger_Ability02_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1864908120\">Monster_W5_Ranger_Ability02_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1864908120\">Monster_W5_Ranger_Ability02_Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1864908120\">Monster_W5_Ranger_Ability02_Attack</a>"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "HitSplit": 0.3,
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
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "HitSplit": 0.3,
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "HitSplit": 0.3,
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
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "HitSplit": 0.3,
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
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1864908120\">Monster_W5_Ranger_Ability02_Attack</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "HitSplit": 0.175,
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
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "HitSplit": 0.175,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "HitSplit": 0.175,
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
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "HitSplit": 0.175,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "HitSplit": 0.175,
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
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "HitSplit": 0.175,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "HitSplit": 0.175,
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
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        },
                        "HitSplit": 0.175,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability02_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Ability02_Part01",
      "childAbilityList": [
        "5013051_Monster_W5_Ranger_Ability02_Camera",
        "5013051_Monster_W5_Ranger_Ability02_Part01",
        "5013051_Monster_W5_Ranger_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W5_Ranger_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability01_Part02": {
      "fileName": "5013051_Monster_W5_Ranger_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
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
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
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
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
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
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_Ability01_Part01": {
      "fileName": "5013051_Monster_W5_Ranger_Ability01_Part01",
      "childAbilityList": [
        "5013051_Monster_W5_Ranger_Ability01_Camera",
        "5013051_Monster_W5_Ranger_Ability01_Part01",
        "5013051_Monster_W5_Ranger_Ability01_Part02"
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
          "ability": "Monster_W5_Ranger_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5013051_Monster_W5_Ranger_PassiveAbility01": {
      "fileName": "5013051_Monster_W5_Ranger_PassiveAbility01",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1534116188\">Enemy_W5_Ranger_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1610837626\">Enemy_W5_Ranger_BreakListener</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MaxChargeValue",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_587) || RETURN",
            "displayLines": "UnusedUnderThisBase_587",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_587"
            ]
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentRanger) || RETURN",
            "displayLines": "CurrentRanger",
            "constants": [],
            "variables": [
              "CurrentRanger"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-460724503\">Standard_Resistance_Quantum</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"338359600\">Standard_Resistance_Fire</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1406200933\">Standard_Resistance_Imaginary</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-810912311\">Standard_Resistance_Physical</a>"
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-810912311\">Standard_Resistance_Physical</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Physical"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MaxChargeValue"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1406200933\">Standard_Resistance_Imaginary</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Imaginary"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MaxChargeValue"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__338359600\">Standard_Resistance_Fire</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Fire"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MaxChargeValue"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-460724503\">Standard_Resistance_Quantum</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Quantum"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Appear_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Trigger_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Trigger_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MaxChargeValue"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1610837626\">Enemy_W5_Ranger_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1534116188\">Enemy_W5_Ranger_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5013051_Modifiers": {
      "fileName": "5013051_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-488756959\">Enemy_W5_RangerGroup_SpecialWin</a>",
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
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.01
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": [
                          "Break"
                        ],
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase1"
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_RangerGroup_SpecialWin",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__2082758660\">Enemy_W5_RangerGroup_MainEnd</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentRanger",
                    "compareType": "=",
                    "value2": 3
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Ranger_Ability04_Part01_Main",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1643569913\">Enemy_W5_Ranger_Main_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUp) || RETURN",
                    "displayLines": "MDF_DamageUp",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUp"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUp"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUp</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-680453013\">Enemy_W5_Ranger_Main_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                    "displayLines": "MDF_SpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUp"
          ],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2046853963\">Enemy_W5_RangerGroup_Unselectable</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1422594911\">Enemy_W5_RangerGroup_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}} + {{Caster's Minions}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Create Shared HP Group",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "isRemove": true,
                          "team": "Enemy Team"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        },
                        {
                          "name": "Remove from Team Target Grouping",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "stayInTeam": false
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W5_RangerGroup_PassiveAbility01_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.3
                      }
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__2004703763\">Enemy_W5_RangerGroup_PassiveAbilityInitiate</a>",
          "modifierFlags": [
            "MuteSpeed",
            "ImmuneDebuff",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Override Enemy Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  }
                },
                {
                  "name": "Override Enemy Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revert": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                        "displayLines": "SummonList_ADF_1",
                        "constants": [],
                        "variables": [
                          "SummonList_ADF_1"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                        "displayLines": "SummonList_ADF_3",
                        "constants": [],
                        "variables": [
                          "SummonList_ADF_3"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "stayInTeam": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1602736914\">W5_Ranger_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "And the Sun Rises",
                      "desc": "During combat against the Daybreak Squadron, hit them with a specific Type attack while they're in the \"Daybreak Forcefield\" state to trigger an immediate action",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Physical RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
          "type": "Debuff",
          "effectName": "Disheartened",
          "statusName": "Disheartened"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Imaginary RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
          "type": "Debuff",
          "effectName": "Disheartened",
          "statusName": "Disheartened"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Fire RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
          "type": "Debuff",
          "effectName": "Disheartened",
          "statusName": "Disheartened"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
          "type": "Debuff",
          "effectName": "Disheartened",
          "statusName": "Disheartened"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-258343603\">Enemy_W5_Ranger_Debuff</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                            "displayLines": "(0 - MDF_ResistanceDelta)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ResistanceDelta"
                            ]
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                            "displayLines": "(0 - MDF_ResistanceDelta)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ResistanceDelta"
                            ]
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                            "displayLines": "(0 - MDF_ResistanceDelta)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ResistanceDelta"
                            ]
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                            "displayLines": "(0 - MDF_ResistanceDelta)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ResistanceDelta"
                            ]
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeTakenRatio",
            "MDF_ResistanceDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
          "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Physical-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
          "type": "Buff",
          "effectName": "Daybreak Forcefield",
          "statusName": "Daybreak Forcefield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
          "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Imaginary-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
          "type": "Buff",
          "effectName": "Daybreak Forcefield",
          "statusName": "Daybreak Forcefield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
          "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Fire-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
          "type": "Buff",
          "effectName": "Daybreak Forcefield",
          "statusName": "Daybreak Forcefield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
          "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Quantum attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
          "type": "Buff",
          "effectName": "Daybreak Forcefield",
          "statusName": "Daybreak Forcefield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1927239462\">Enemy_W5_Ranger_Shield</a>",
          "modifierFlags": [
            "MuteBreak",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revertDefault": true
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingAttacked",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isBeingAttacked",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CurrentChargeValue",
                      "value": {
                        "operator": "Variables[0] (MDF_HitCharge) || RETURN",
                        "displayLines": "MDF_HitCharge",
                        "constants": [],
                        "variables": [
                          "MDF_HitCharge"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentCharge",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      }
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentRanger) || RETURN",
                        "displayLines": "CurrentRanger",
                        "constants": [],
                        "variables": [
                          "CurrentRanger"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                                "displayLines": "MDF_CurrentCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentCharge"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                                "displayLines": "MDF_MaxCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCharge"
                                ]
                              },
                              "assignState": "True"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                                "displayLines": "MDF_CurrentCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentCharge"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                                "displayLines": "MDF_MaxCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCharge"
                                ]
                              },
                              "assignState": "True"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                                "displayLines": "MDF_CurrentCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentCharge"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                                "displayLines": "MDF_MaxCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCharge"
                                ]
                              },
                              "assignState": "True"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                                "displayLines": "MDF_CurrentCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_CurrentCharge"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                                "displayLines": "MDF_MaxCharge",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxCharge"
                                ]
                              },
                              "assignState": "True"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentChargeValue",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                          "displayLines": "MDF_MaxCharge",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCharge"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                              },
                              "failed": [
                                {
                                  "name": "Action Advance/Delay",
                                  "advanceType": "Set",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "set": 0
                                },
                                {
                                  "name": "Assign Advance/Delay to Current Ability Use",
                                  "adjustmentValue": 0,
                                  "adjustmentType": "="
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isBeingAttacked",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isBeingAttackedSpecial",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "DOT",
                                  "Additional DMG"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              },
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "list": [
                                  "Quantum"
                                ]
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "DOT",
                                  "Additional DMG"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              },
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "list": [
                                  "Fire"
                                ]
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 2
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "DOT",
                                  "Additional DMG"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              },
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "list": [
                                  "Imaginary"
                                ]
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 3
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "DOT",
                                  "Additional DMG"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              },
                              {
                                "name": "Is Damage Type/Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "list": [
                                  "Physical"
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_isBeingAttackedSpecial",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1602736914\">W5_Ranger_BattleScore1</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                              },
                              "failed": [
                                {
                                  "name": "Action Advance/Delay",
                                  "advanceType": "Set",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "set": 0
                                },
                                {
                                  "name": "Assign Advance/Delay to Current Ability Use",
                                  "adjustmentValue": 0,
                                  "adjustmentType": "="
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentChargeValue",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                          "displayLines": "MDF_MaxCharge",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCharge"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 6
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                              },
                              "failed": [
                                {
                                  "name": "Action Advance/Delay",
                                  "advanceType": "Set",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "set": 0
                                },
                                {
                                  "name": "Assign Advance/Delay to Current Ability Use",
                                  "adjustmentValue": 0,
                                  "adjustmentType": "="
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentChargeValue",
                  "value": 0
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "AllType"
                  ]
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                          "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingAttacked",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingAttackedSpecial",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Quantum"
                                }
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Fire"
                                }
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 2
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Imaginary"
                                }
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentRanger",
                                "compareType": "=",
                                "value2": 3
                              },
                              {
                                "name": "Has Element",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": {
                                  "name": "Damage Type Source",
                                  "sourceType": "Physical"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentRanger) || RETURN",
                        "displayLines": "CurrentRanger",
                        "constants": [],
                        "variables": [
                          "CurrentRanger"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "trigger": "SpEff_Trigger"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "trigger": "SpEff_Trigger"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "trigger": "SpEff_Trigger"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "trigger": "SpEff_Trigger"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxCharge",
            "MDF_HitCharge"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}