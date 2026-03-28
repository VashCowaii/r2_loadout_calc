const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3024022,
  "trimCharacterName": 3024022,
  "abilityList": [
    "3024022_Monster_W3_Sam_PassiveAbility_InsertSpecial",
    "3024022_Monster_W3_Sam_PassiveAbility_Insert",
    "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part02",
    "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part01",
    "3024022_Monster_W3_Sam_Ability06_Part02",
    "3024022_Monster_W3_Sam_Ability06_Part01",
    "3024022_Monster_W3_Sam_Ability05_Part02",
    "3024022_Monster_W3_Sam_Ability05_Part01",
    "3024022_Monster_W3_Sam_Ability04_Part02",
    "3024022_Monster_W3_Sam_Ability04_Part01",
    "3024022_Monster_W3_Sam_Ability03_Part02",
    "3024022_Monster_W3_Sam_Ability03_Part01",
    "3024022_Monster_W3_Sam_Ability02_Part02",
    "3024022_Monster_W3_Sam_Ability02_Part01",
    "3024022_Monster_W3_Sam_Ability01_Part02",
    "3024022_Monster_W3_Sam_Ability01_Part01",
    "3024022_Monster_W3_Sam_Passive01",
    "3024022_Monster_W3_Sam_PassiveAbility_BGM",
    "3024022_Modifiers"
  ],
  "abilityObject": {
    "3024022_Monster_W3_Sam_PassiveAbility_InsertSpecial": {
      "fileName": "3024022_Monster_W3_Sam_PassiveAbility_InsertSpecial",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "revertDefault": true
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
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Define Custom Variable with Skill Point Max",
          "variableName": "MaxBP"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (MaxBP) || RETURN",
            "displayLines": "MaxBP",
            "constants": [],
            "variables": [
              "MaxBP"
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Set SkillPoint Mechanic",
          "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
          "isRemove": true
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557060605\">Monster_W3_Sam_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3024022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Sam",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_PassiveAbility_Insert": {
      "fileName": "3024022_Monster_W3_Sam_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Set SkillPoint Mechanic",
          "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
          "isRemove": true
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557060605\">Monster_W3_Sam_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3024022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Sam",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part02": {
      "fileName": "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"671626404\">Monster_W3_Sam_MainEnd</a>"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            },
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "MDF_ChangeHPRatio": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part01": {
      "fileName": "3024022_Monster_W3_Sam_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Sam_PassiveAbility_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability06_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Define Custom Variable with Skill Point Max",
          "variableName": "MaxBP"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (MaxBP) || RETURN",
            "displayLines": "MaxBP",
            "constants": [],
            "variables": [
              "MaxBP"
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Set SkillPoint Mechanic",
          "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
          "isRemove": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1431346612\">Monster_W3_Sam_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
              "displayLines": "{[Skill04[4]]}",
              "constants": [],
              "variables": [
                "{[Skill04[4]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break"
          },
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability06_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability06_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability06_Camera",
        "3024022_Monster_W3_Sam_Ability06_Part01",
        "3024022_Monster_W3_Sam_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Sam_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability05_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-498176717\">Enemy_W3_Sam_RLBoss_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">Thermocumulative Upgrade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_283) || RETURN",
                      "displayLines": "UnusedUnderThisBase_283",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_283"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                  "displayLines": "{[Skill05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability05_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability05_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability05_Camera",
        "3024022_Monster_W3_Sam_Ability05_Part01",
        "3024022_Monster_W3_Sam_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W3_Sam_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability04_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"574655319\">Monster_W3_Sam_Main</a>"
          }
        },
        "Ability Start",
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_Sam_RLBoss"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "MDF_ChangeHPRatio": {
                  "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                  "displayLines": "{[Skill04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "MDF_ChangeHPRatio": {
                  "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                  "displayLines": "{[Skill04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]",
          "valuePerStack": {
            "MDF_HealDownRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[4]]}"
              ]
            },
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          }
        },
        {
          "name": "Set SkillPoint Mechanic",
          "modifierName": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability04_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability04_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability04_Camera",
        "3024022_Monster_W3_Sam_Ability04_Part01",
        "3024022_Monster_W3_Sam_Ability04_Part02"
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
          "ability": "Monster_W3_Sam_Ability04_Part02",
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
    "3024022_Monster_W3_Sam_Ability03_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-498176717\">Enemy_W3_Sam_RLBoss_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">Thermocumulative Upgrade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_283) || RETURN",
                      "displayLines": "UnusedUnderThisBase_283",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_283"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability03_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability03_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability03_Camera",
        "3024022_Monster_W3_Sam_Ability03_Part01",
        "3024022_Monster_W3_Sam_Ability03_Part02"
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
          "ability": "Monster_W3_Sam_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability02_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-498176717\">Enemy_W3_Sam_RLBoss_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">Thermocumulative Upgrade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_283) || RETURN",
                      "displayLines": "UnusedUnderThisBase_283",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_283"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
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
                "HitSplit": 0.4,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                },
                "HitSplit": 0.6,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
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
                "HitSplit": 0.6,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                  "displayLines": "{[Skill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[3]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
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
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability02_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability02_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability02_Camera",
        "3024022_Monster_W3_Sam_Ability02_Part01",
        "3024022_Monster_W3_Sam_Ability02_Part02"
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
          "ability": "Monster_W3_Sam_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "3024022_Monster_W3_Sam_Ability01_Part02": {
      "fileName": "3024022_Monster_W3_Sam_Ability01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-498176717\">Enemy_W3_Sam_RLBoss_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">Thermocumulative Upgrade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_283) || RETURN",
                      "displayLines": "UnusedUnderThisBase_283",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_283"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Monster_Sam_RLBoss"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1788586863\">Enemy_W3_Sam_RLBoss_Ability07AimTarget</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3024022_Monster_W3_Sam_Ability01_Part01": {
      "fileName": "3024022_Monster_W3_Sam_Ability01_Part01",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_Ability01_Camera",
        "3024022_Monster_W3_Sam_Ability01_Part01",
        "3024022_Monster_W3_Sam_Ability01_Part02"
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
          "ability": "Monster_W3_Sam_Ability01_Part02",
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
    "3024022_Monster_W3_Sam_Passive01": {
      "fileName": "3024022_Monster_W3_Sam_Passive01",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"606972422\">W3_Sam_BattleScore1</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3024021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Sam"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"574655319\">Monster_W3_Sam_Main</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1279716150\">Monster_W3_Sam_Deathrattle</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3024022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Sam",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1337606012\">Monster_W3_Sam_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "BurningBPDamageUpRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[2]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__1337606012\">Monster_W3_Sam_AIChange</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]"
                },
                {
                  "name": "Set SkillPoint Mechanic",
                  "modifierNameRemoved": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sam_Ability06_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
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
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "InsertCheck",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "InsertSpecial",
                          "value": 1
                        }
                      ]
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revertDefault": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024022_Monster_W3_Sam_PassiveAbility_BGM": {
      "fileName": "3024022_Monster_W3_Sam_PassiveAbility_BGM",
      "childAbilityList": [
        "3024022_Monster_W3_Sam_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2001241954\">Enemy_W3_Sam_ResetStageBGM</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2001241954\">Enemy_W3_Sam_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
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
    "3024022_Modifiers": {
      "fileName": "3024022_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__606972422\">W3_Sam_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Sam_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sam_BattleScore1_Flag",
                      "value": 2
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Sam_BattleScore1_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Quiet Burning",
                          "desc": "During the battle against Stellaron Hunter Sam, Sam did not use \"DHGDR: Supernova Overload\" when their Secondary Combustion state is dispelled",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sam_BattleScore1_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Sam_BattleScore1_Flag",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-557060605\">Monster_W3_Sam_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-613973055\">Monster_W3_Sam_PartController</a>",
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
                        "value1": "PhaseInsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-557060605\">Monster_W3_Sam_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PhaseInsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "mode": "Inc"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "InsertSpecial",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W3_Sam_PassiveAbility_InsertSpecial",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W3_Sam_PassiveAbility_Insert",
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
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__671626404\">Monster_W3_Sam_MainEnd</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1431346612\">Monster_W3_Sam_TakenDamage</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_DamageTakenUpRatio_PerLayer"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "Takes <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span> more DMG. This effect expires when Sam recovers from Weakness Break state.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1279716150\">Monster_W3_Sam_Deathrattle</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DeathCheck",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DeathCheck",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sam_PassiveAbility_Insert_Part01",
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
          "for": "<a class=\"gModGreen\" id=\"mod__574655319\">Monster_W3_Sam_Main</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2077045969\">Monster_W3_Sam_NotUseBurningBP</a>",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-874455927\">Monster_W3_Sam_UseBurningBP_Target5</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-891233546\">Monster_W3_Sam_UseBurningBP_Target4</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-840900689\">Monster_W3_Sam_UseBurningBP_Target3</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-857678308\">Monster_W3_Sam_UseBurningBP_Target2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-807345451\">Monster_W3_Sam_UseBurningBP_Target1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__909865518\">Monster_W3_Sam_UseBurningBP</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-807345451\">Monster_W3_Sam_UseBurningBP_Target1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-857678308\">Monster_W3_Sam_UseBurningBP_Target2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-840900689\">Monster_W3_Sam_UseBurningBP_Target3</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-891233546\">Monster_W3_Sam_UseBurningBP_Target4</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-874455927\">Monster_W3_Sam_UseBurningBP_Target5</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-807345451\">Monster_W3_Sam_UseBurningBP_Target1</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageAddValue1",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue1",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValue1) || Variables[1] (MDF_DamageAddValue1) || ADD || RETURN",
                        "displayLines": "(MDF_DamageValue1 + MDF_DamageAddValue1)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue1",
                          "MDF_DamageAddValue1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-857678308\">Monster_W3_Sam_UseBurningBP_Target2</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageAddValue2",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue2",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValue2) || Variables[1] (MDF_DamageAddValue2) || ADD || RETURN",
                        "displayLines": "(MDF_DamageValue2 + MDF_DamageAddValue2)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue2",
                          "MDF_DamageAddValue2"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-840900689\">Monster_W3_Sam_UseBurningBP_Target3</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageAddValue3",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue3",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValue3) || Variables[1] (MDF_DamageAddValue3) || ADD || RETURN",
                        "displayLines": "(MDF_DamageValue3 + MDF_DamageAddValue3)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue3",
                          "MDF_DamageAddValue3"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-891233546\">Monster_W3_Sam_UseBurningBP_Target4</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageAddValue4",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue4",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValue4) || Variables[1] (MDF_DamageAddValue4) || ADD || RETURN",
                        "displayLines": "(MDF_DamageValue4 + MDF_DamageAddValue4)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue4",
                          "MDF_DamageAddValue4"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-874455927\">Monster_W3_Sam_UseBurningBP_Target5</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageAddValue5",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue5",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValue5) || Variables[1] (MDF_DamageAddValue5) || ADD || RETURN",
                        "displayLines": "(MDF_DamageValue5 + MDF_DamageAddValue5)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue5",
                          "MDF_DamageAddValue5"
                        ]
                      }
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
                  "scope": "ContextModifier",
                  "variableName": "MDF_DamageUpRatio",
                  "value": {
                    "operator": "Variables[0] (BurningBPDamageUpRatio) || RETURN",
                    "displayLines": "BurningBPDamageUpRatio",
                    "constants": [],
                    "variables": [
                      "BurningBPDamageUpRatio"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-807345451\">Monster_W3_Sam_UseBurningBP_Target1</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-857678308\">Monster_W3_Sam_UseBurningBP_Target2</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-840900689\">Monster_W3_Sam_UseBurningBP_Target3</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-891233546\">Monster_W3_Sam_UseBurningBP_Target4</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-332010810\">Monster_W3_Sam_UseBurningBP_Target</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-874455927\">Monster_W3_Sam_UseBurningBP_Target5</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-807345451\">Monster_W3_Sam_UseBurningBP_Target1</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DamageValue1",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue1) || Variables[1] (MDF_DamageUpRatio) || MUL || RETURN",
                          "displayLines": "(MDF_DamageValue1 * MDF_DamageUpRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue1",
                            "MDF_DamageUpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-857678308\">Monster_W3_Sam_UseBurningBP_Target2</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DamageValue2",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue2) || Variables[1] (MDF_DamageUpRatio) || MUL || RETURN",
                          "displayLines": "(MDF_DamageValue2 * MDF_DamageUpRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue2",
                            "MDF_DamageUpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-840900689\">Monster_W3_Sam_UseBurningBP_Target3</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DamageValue3",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue3) || Variables[1] (MDF_DamageUpRatio) || MUL || RETURN",
                          "displayLines": "(MDF_DamageValue3 * MDF_DamageUpRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue3",
                            "MDF_DamageUpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-891233546\">Monster_W3_Sam_UseBurningBP_Target4</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DamageValue4",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue4) || Variables[1] (MDF_DamageUpRatio) || MUL || RETURN",
                          "displayLines": "(MDF_DamageValue4 * MDF_DamageUpRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue4",
                            "MDF_DamageUpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-874455927\">Monster_W3_Sam_UseBurningBP_Target5</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DamageValue5",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue5) || Variables[1] (MDF_DamageUpRatio) || MUL || RETURN",
                          "displayLines": "(MDF_DamageValue5 * MDF_DamageUpRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue5",
                            "MDF_DamageUpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Receiving Heal Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Target",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_HealDownRatio) || MUL || RETURN",
                        "displayLines": "(-1 * MDF_HealDownRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_HealDownRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-427433460\">RefreshBattleAlert</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "modifierName": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
                        "value1": "Skill_Point_Change_Preview",
                        "compareType": "<",
                        "value2": 0,
                        "useCurrentSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP Loss Est",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "targetDefender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "dmgType": {
                        "name": "Damage Type Source",
                        "sourceType": "Fire"
                      },
                      "attackType": "Additional DMG",
                      "damagePrecent": {
                        "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[3]]}"
                        ]
                      },
                      "behaviorTag": "DirectlyLoseHp",
                      "variableName": "MDF_DamageValue"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Basic ATK",
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                        "displayLines": "MDF_DamageValue",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Character ID",
                        "ID": 1501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Sparxie"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill11",
                        "useActive": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP Loss Est",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "targetDefender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "dmgType": {
                        "name": "Damage Type Source",
                        "sourceType": "Fire"
                      },
                      "attackType": "Additional DMG",
                      "damagePrecent": {
                        "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[3]]}"
                        ]
                      },
                      "behaviorTag": "DirectlyLoseHp",
                      "variableName": "MDF_DamageValue"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Basic ATK"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                        "displayLines": "MDF_DamageValue",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-427433460\">RefreshBattleAlert</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "modifierName": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
                    "value1": "Skill_Point_Change_Preview",
                    "compareType": "<",
                    "value2": 0
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "modifierName": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>",
                    "value1": "Skill_Point_Change_Preview",
                    "compareType": "<",
                    "value2": 0,
                    "controlType": "ControlSkill02"
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HealDownRatio",
            "MDF_DamageUpRatio"
          ],
          "latentQueue": [],
          "description": "When an ally consumes Combusted Skill Points, loses HP and additionally deals a set amount of Fire DMG equal to <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span> of the original DMG. When they receive healing from sources other than oneself, the amount of HP restored is massively reduced.",
          "type": "Other",
          "effectName": "Molten Core",
          "statusName": "Molten Core"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1568615261\">Monster_W3_Sam_FireAccelerate</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_15) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_15 * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_15",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck",
            "InsertSpecial"
          ],
          "description": "Sam's Toughness cannot be reduced before entering the Secondary Combustion state.",
          "type": "Other",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-307608089\">Monster_W3_Sam_Burn</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage_Layer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage_Layer",
                        "ModifierLayers"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Receiving Heal Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (ModifierLayers) || MUL || Variables[1] (ENEMIES_OBJECT_UNUSED__122) || MUL || RETURN",
                        "displayLines": "((-1 * ModifierLayers) * ENEMIES_OBJECT_UNUSED__122)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "ModifierLayers",
                          "ENEMIES_OBJECT_UNUSED__122"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Burn_Layer",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage_Layer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage_Layer",
                        "ModifierLayers"
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackLimit": 5,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-887682534\">Monster_W3_Sam_BurningBPDamage</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "notAHit": true,
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHp",
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 0.05
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Ignite My Heart, Inflame My Flesh",
                          "desc": "During the battle against Stellaron Hunter Sam, use Skill Points with the Combustion effect to reduce #1 allies' HP to below #2%",
                          "rarity": "Low",
                          "params": [
                            1,
                            5
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-802134051\">Monster_W3_Sam_TriggerBreak</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "HintCheck",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_InitHPRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-642289168\">Monster_W3_Sam_EnhanceEffectPart</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1457316398\">Monster_W3_Sam_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
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
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
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
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Sam_Ability06_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
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
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-613973055\">Monster_W3_Sam_PartController</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "InsertCheck",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "InsertSpecial",
                          "value": 1
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentPoint",
                  "value": {
                    "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                    "displayLines": "{[Skill04[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[5]]}"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentPoint) || RETURN",
                    "displayLines": "MDF_CurrentPoint",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentPoint"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                    "displayLines": "{[Skill04[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[5]]}"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]",
                          "valuePerStack": {
                            "MDF_HealDownRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[4]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[4]]}"
                              ]
                            },
                            "MDF_DamageUpRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "MDF_CurrentBPChange",
                  "type": "RawDelta",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentBPChange",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BPChange",
                      "value": {
                        "operator": "Variables[0] (MDF_BPChange) || Variables[1] (MDF_CurrentBPChange) || ADD || RETURN",
                        "displayLines": "(MDF_BPChange + MDF_CurrentBPChange)",
                        "constants": [],
                        "variables": [
                          "MDF_BPChange",
                          "MDF_CurrentBPChange"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPChange",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentPoint",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentPoint) || Variables[1] (MDF_BPChange) || ADD || RETURN",
                        "displayLines": "(MDF_CurrentPoint + MDF_BPChange)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentPoint",
                          "MDF_BPChange"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentPoint",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CurrentPoint",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentPoint) || RETURN",
                        "displayLines": "MDF_CurrentPoint",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentPoint"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                        "displayLines": "{[Skill04[5]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[5]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPChange",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentBPChange",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentPoint",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentPoint",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-887682534\">Monster_W3_Sam_BurningBPDamage</a>",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Skill Effect",
                            "skillType": [
                              "AoEAttack",
                              "Blast",
                              "Bounce",
                              "Damage",
                              "SingleAttack"
                            ]
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{SAM: Self}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Targets}}"
                                },
                                "mustBeAlive2": true
                              },
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{SAM: Self}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target's Ability Sub-Targets}}"
                                },
                                "mustBeAlive2": true
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPChange",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentBPChange",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_DamagePercentage",
            "MDF_SpeedUpRatio",
            "MDF_ChangeHPRatio"
          ],
          "latentQueue": [],
          "description": "All attacks consume HP. Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span> and gains an additional action. <span class=\"descriptionNumberColor\">MDF_CurrentPoint</span> point(s) of Molten Energy remain before the Secondary Combustion state expires.",
          "type": "Other",
          "effectName": "Secondary Combustion",
          "statusName": "Secondary Combustion"
        }
      ],
      "references": []
    }
  }
}