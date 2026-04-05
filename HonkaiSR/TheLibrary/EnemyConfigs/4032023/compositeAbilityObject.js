const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032023,
  "trimCharacterName": 4032023,
  "abilityList": [
    "4032023_Monster_W4_FireProwler_01_NoDeathRattle",
    "4032023_Monster_W4_FireProwler_01_Ability02_Assist",
    "4032023_Monster_W4_FireProwler_01_Ability01_Assist",
    "4032023_Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory",
    "4032023_Monster_W4_FireProwler_01_Ability02_Part01_FantasticStory",
    "4032023_Monster_W4_FireProwler_01_Ability01_Part02_FantasticStory",
    "4032023_Monster_W4_FireProwler_01_Ability01_Part01_FantasticStory",
    "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate_FantasticStory",
    "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate",
    "4032023_Modifiers"
  ],
  "abilityObject": {
    "4032023_Monster_W4_FireProwler_01_NoDeathRattle": {
      "fileName": "4032023_Monster_W4_FireProwler_01_NoDeathRattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "onAbort": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_Ability02_Assist": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "Skill02_AssistCount",
          "value": 1,
          "max": 4
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "Skill02_CurCount",
          "value": 1,
          "max": 4
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variable": "Skill02_CurCount",
          "target2": null,
          "variable2": "Skill02_CurCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (Skill02_CurCount) || RETURN",
              "displayLines": "Skill02_CurCount",
              "constants": [],
              "variables": [
                "Skill02_CurCount"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (Skill02_CurCount) || RETURN",
              "displayLines": "Skill02_CurCount",
              "constants": [],
              "variables": [
                "Skill02_CurCount"
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (Skill02_CurCount) || MUL || RETURN",
                "displayLines": "({[PassiveSkill01[0]]} * Skill02_CurCount)",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}",
                  "Skill02_CurCount"
                ]
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "barType": "FireProwler",
              "trigger": "NumChange_Increase"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "popUpText": "Calamity Power"
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_RallyHP",
                  "target2": null,
                  "variable2": "Skill02_HealHPRatio"
                }
              ]
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "healPercent": {
                "operator": "Variables[0] (Skill02_HealHPRatio) || Variables[1] (Skill02_CurCount) || MUL || RETURN",
                "displayLines": "(Skill02_HealHPRatio * Skill02_CurCount)",
                "constants": [],
                "variables": [
                  "Skill02_HealHPRatio",
                  "Skill02_CurCount"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_Ability01_Assist": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "Skill01_AssistCount",
          "value": 1,
          "max": 4
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "Skill01_CurCount",
          "value": 1,
          "max": 4
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variable": "Skill01_CurCount",
          "target2": null,
          "variable2": "Skill01_CurCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (Skill01_CurCount) || RETURN",
              "displayLines": "Skill01_CurCount",
              "constants": [],
              "variables": [
                "Skill01_CurCount"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (Skill01_CurCount) || RETURN",
              "displayLines": "Skill01_CurCount",
              "constants": [],
              "variables": [
                "Skill01_CurCount"
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (Skill01_CurCount) || MUL || RETURN",
                "displayLines": "({[PassiveSkill01[0]]} * Skill01_CurCount)",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}",
                  "Skill01_CurCount"
                ]
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "barType": "FireProwler",
              "trigger": "NumChange_Increase"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "popUpText": "Calamity Power"
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_RallyHP",
                  "target2": null,
                  "variable2": "Skill01_HealHPRatio"
                }
              ]
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "healPercent": {
                "operator": "Variables[0] (Skill01_HealHPRatio) || Variables[1] (Skill01_CurCount) || MUL || RETURN",
                "displayLines": "(Skill01_HealHPRatio * Skill01_CurCount)",
                "constants": [],
                "variables": [
                  "Skill01_HealHPRatio",
                  "Skill01_CurCount"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_Ability02_Part01_FantasticStory": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability02_Part01_FantasticStory",
      "childAbilityList": [
        "4032023_Monster_W4_FireProwler_01_Ability02_Camera_FantasticStory",
        "4032023_Monster_W4_FireProwler_01_Ability02_Part01_FantasticStory",
        "4032023_Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
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
          "ability": "Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory",
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
    "4032023_Monster_W4_FireProwler_01_Ability01_Part02_FantasticStory": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability01_Part02_FantasticStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
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
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_Ability01_Part01_FantasticStory": {
      "fileName": "4032023_Monster_W4_FireProwler_01_Ability01_Part01_FantasticStory",
      "childAbilityList": [
        "4032023_Monster_W4_FireProwler_01_Ability01_Camera_FantasticStory",
        "4032023_Monster_W4_FireProwler_01_Ability01_Part01_FantasticStory",
        "4032023_Monster_W4_FireProwler_01_Ability01_Part02_FantasticStory"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
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
          "ability": "Monster_W4_FireProwler_01_Ability01_Part02_FantasticStory",
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
    "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate_FantasticStory": {
      "fileName": "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate_FantasticStory",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-881069101\">Enemy_W4_FireProwler_01_Repeat_FantasticStory</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "valuePerStack": {
            "MDF_Ability01": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "MDF_Ability01_Adjoin": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "MDF_Ability02": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate": {
      "fileName": "4032023_Monster_W4_FireProwler_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-104101548\">Enemy_W4_FireProwler_01_Repeat</a>[<span class=\"descriptionNumberColor\">Futility</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
          },
          "failed": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variable": "CurrentHPRatio",
              "target2": null,
              "variable2": "CurrentHPRatio"
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                "displayLines": "({[PassiveSkill01[1]]} * CurrentHPRatio)",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}",
                  "CurrentHPRatio"
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Physical"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "valuePerStack": {
                "MDF_RallyHP": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
                  "displayLines": "({[PassiveSkill01[1]]} * CurrentHPRatio)",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}",
                    "CurrentHPRatio"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "popUpText": "Entangled By Agony"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "valuePerStack": {
            "MDF_Ability01": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "MDF_Ability01_Adjoin": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "MDF_Ability02": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032023_Modifiers": {
      "fileName": "4032023_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "stackData": [
            "MDF_Skill01",
            "MDF_Skill01_Adjoin",
            "MDF_Skill02"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_LoseHPRatio",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
                      "variable": "MDF_PersistLoseHP",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_PersistLoseHP"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PersistLoseHP",
                      "value": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || Variables[1] (MDF_MaxHP) || Variables[2] (MDF_LoseHPRatio) || MUL || ADD || RETURN",
                        "displayLines": "(MDF_PersistLoseHP + (MDF_MaxHP * MDF_LoseHPRatio))",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP",
                          "MDF_MaxHP",
                          "MDF_LoseHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
                      "variableName": "MDF_PersistLoseHP",
                      "value": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || RETURN",
                        "displayLines": "MDF_PersistLoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP"
                        ]
                      }
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "previewType": "Persisting HP Loss",
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                        "displayLines": "-MDF_PersistLoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP"
                        ]
                      }
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "previewType": "Persisting HP Loss",
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                        "displayLines": "-MDF_PersistLoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_PersistLoseHP"
                        ]
                      }
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (MDF_LoseHPRatio) || RETURN",
                        "displayLines": "MDF_LoseHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_LoseHPRatio"
                        ]
                      },
                      "attackType": "Unknown",
                      "DamageType": {
                        "name": "Damage Type Source",
                        "sourceType": "Physical"
                      }
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Deathrattle",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "Deathrattle",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_FireProwler_01_DeathRattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Deathrattle",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Parameter Target}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-881069101\">Enemy_W4_FireProwler_01_Repeat_FantasticStory</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W4_FireProwler_00"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "barType": "FireProwler",
                      "trigger": "NumChange_Decrease"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "maximum": 0,
                          "assignState": "True",
                          "barType": "FireProwler",
                          "trigger": "Step_01"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-104101548\">Enemy_W4_FireProwler_01_Repeat</a>[<span class=\"descriptionNumberColor\">Futility</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MMonster_W4_FireProwler_01_Repeat_DynamicTarget"
                },
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Speed) || RETURN",
                    "displayLines": "MDF_Speed",
                    "constants": [],
                    "variables": [
                      "MDF_Speed"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Resists Crowd Control debuffs. When \"%DynamicTargetName\" uses \"Demise's Storm\" or \"Fading Fate\" again, if this unit was summoned by this attack and is in the \"Mutual Sacrifice\" state, then this unit will attack together with \"%DynamicTargetName\".",
          "type": "Other",
          "statusName": "Futility"
        }
      ],
      "references": []
    }
  }
}