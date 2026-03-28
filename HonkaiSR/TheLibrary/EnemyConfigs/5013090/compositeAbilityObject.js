const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5013090,
  "trimCharacterName": 5013090,
  "abilityList": [
    "5013090_Monster_W5_RangerGroup_PassiveAbility01_Insert",
    "5013090_Monster_W5_RangerGroup_PassiveAbilityInitiate",
    "5013090_Monster_W5_RangerGroup_SpecialWin",
    "5013090_Monster_W5_RangerGroup_Revive",
    "5013090_Monster_W5_Ranger_Ability04_Camera_Main",
    "5013090_Monster_W5_Ranger_Ability04_Part02_Main",
    "5013090_Monster_W5_Ranger_Ability04_Part01_Main",
    "5013090_Monster_W5_Ranger_01_Main_Ability03_Part02",
    "5013090_Monster_W5_Ranger_01_Main_Ability03_Part01",
    "5013090_Monster_W5_Ranger_Main_Ability03_Part02",
    "5013090_Monster_W5_Ranger_Main_Ability03_Part01",
    "5013090_Monster_W5_Ranger_Main_PassiveAbility01",
    "5013090_Modifiers"
  ],
  "abilityObject": {
    "5013090_Monster_W5_RangerGroup_PassiveAbility01_Insert": {
      "fileName": "5013090_Monster_W5_RangerGroup_PassiveAbility01_Insert",
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
    "5013090_Monster_W5_RangerGroup_PassiveAbilityInitiate": {
      "fileName": "5013090_Monster_W5_RangerGroup_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
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
    "5013090_Monster_W5_RangerGroup_SpecialWin": {
      "fileName": "5013090_Monster_W5_RangerGroup_SpecialWin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013090_Monster_W5_RangerGroup_Revive": {
      "fileName": "5013090_Monster_W5_RangerGroup_Revive",
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
    "5013090_Monster_W5_Ranger_Ability04_Camera_Main": {
      "fileName": "5013090_Monster_W5_Ranger_Ability04_Camera_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5013090_Monster_W5_Ranger_Ability04_Part02_Main": {
      "fileName": "5013090_Monster_W5_Ranger_Ability04_Part02_Main",
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
    "5013090_Monster_W5_Ranger_Ability04_Part01_Main": {
      "fileName": "5013090_Monster_W5_Ranger_Ability04_Part01_Main",
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
    "5013090_Monster_W5_Ranger_01_Main_Ability03_Part02": {
      "fileName": "5013090_Monster_W5_Ranger_01_Main_Ability03_Part02",
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
              "operator": "Variables[0] (UnusedUnderThisBase_592) || RETURN",
              "displayLines": "UnusedUnderThisBase_592",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_592"
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
    "5013090_Monster_W5_Ranger_01_Main_Ability03_Part01": {
      "fileName": "5013090_Monster_W5_Ranger_01_Main_Ability03_Part01",
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
          "ability": "Monster_W5_Ranger_01_Main_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5013090_Monster_W5_Ranger_Main_Ability03_Part02": {
      "fileName": "5013090_Monster_W5_Ranger_Main_Ability03_Part02",
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
    "5013090_Monster_W5_Ranger_Main_Ability03_Part01": {
      "fileName": "5013090_Monster_W5_Ranger_Main_Ability03_Part01",
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
    "5013090_Monster_W5_Ranger_Main_PassiveAbility01": {
      "fileName": "5013090_Monster_W5_Ranger_Main_PassiveAbility01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1534116188\">Enemy_W5_Ranger_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
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
    "5013090_Modifiers": {
      "fileName": "5013090_Modifiers",
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
        }
      ],
      "references": []
    }
  }
}