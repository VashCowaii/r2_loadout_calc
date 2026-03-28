const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032021,
  "trimCharacterName": 4032021,
  "abilityList": [
    "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part02",
    "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part01",
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part02",
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01",
    "4032021_Monster_W4_FireProwler_01_IF_Ability02_Assist",
    "4032021_Monster_W4_FireProwler_01_IF_Ability01_Assist",
    "4032021_Monster_W4_FireProwler_01_IF_PassiveAbilityInitiate",
    "4032021_Monster_W4_FireProwler_IF_HPBack",
    "4032021_Monster_W4_FireProwler_IF_Ability07_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability07_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability06_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability06_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability05_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability05_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability04_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability04_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability031_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability031_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability03_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability03_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability02_Assist",
    "4032021_Monster_W4_FireProwler_IF_Ability01_Assist",
    "4032021_Monster_W4_FireProwler_IF_Ability02_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability02_Part01",
    "4032021_Monster_W4_FireProwler_IF_Ability01_Part02",
    "4032021_Monster_W4_FireProwler_IF_Ability01_Part01",
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part02",
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part01",
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part02",
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part01",
    "4032021_Monster_W4_FireProwler_IF_ChangePhase1",
    "4032021_Monster_W4_FireProwler_IF_AbilityEX05",
    "4032021_Monster_W4_FireProwler_IF_AbilityEX04",
    "4032021_Monster_W4_FireProwler_IF_AbilityEX03",
    "4032021_Monster_W4_FireProwler_IF_AbilityEX02",
    "4032021_Monster_W4_FireProwler_IF_AbilityEX01",
    "4032021_Monster_W4_FireProwler_IF_PassiveAbility01",
    "4032021_Monster_W4_FireProwler_IF_AbilityP03",
    "4032021_Monster_W4_FireProwler_IF_AbilityP02",
    "4032021_Monster_W4_FireProwler_IF_AbilityP01",
    "4032021_Modifiers",
    "4032021_Functions"
  ],
  "abilityObject": {
    "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": 1,
          "casterAssign": "TargetSelf"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "ToastFlag",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability04_Part01",
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W4_FireProwler_01_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part02",
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
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
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
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01",
      "childAbilityList": [
        "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01",
        "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part02",
        "4032021_Monster_W4_FireProwler_01_IF_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W4_FireProwler_01_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_01_IF_Ability02_Assist": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability02_Assist",
      "childAbilityList": [
        "4032021_Monster_W4_FireProwler_01_IF_Ability02_Assist"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
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
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
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
    "4032021_Monster_W4_FireProwler_01_IF_Ability01_Assist": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability01_Assist",
      "childAbilityList": [
        "4032021_Monster_W4_FireProwler_01_IF_Ability01_Assist"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
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
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
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
    "4032021_Monster_W4_FireProwler_01_IF_PassiveAbilityInitiate": {
      "fileName": "4032021_Monster_W4_FireProwler_01_IF_PassiveAbilityInitiate",
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
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4034018,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "characterName": "???",
            "isBaseCompare": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-564419405\">Enemy_W4_FireProwler_01_IF_SuperArmor</a>",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-104101548\">Enemy_W4_FireProwler_01_Repeat</a>[<span class=\"descriptionNumberColor\">Futility</span>]"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-385152966\">Enemy_W4_FireProwler_01_IF_Repeat</a>"
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
    "4032021_Monster_W4_FireProwler_IF_HPBack": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_HPBack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Lost Sacrifice"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "HPBack_TimePowerCount"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "HPBack_TimePowerCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HPBack",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HPBack",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "HPBack_TimePowerCount",
              "value": -1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HPBack",
            "compareType": "=",
            "value2": 1
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "addStacksPerTrigger": -1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "multiBase": 0
                        }
                      ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ToastFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "HPBack",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ToastFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                        "compareType": ">=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 4034018,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "???",
                                "isBaseCompare": true,
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_3) || RETURN",
                      "displayLines": "SummonID_3",
                      "constants": [],
                      "variables": [
                        "SummonID_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID_3",
                          "summonLocation": "FormationRecord"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
                          "valuePerStack": {
                            "MDF_LoseHPRatio": {
                              "operator": "Variables[0] (UnusedUnderThisBase_364) || RETURN",
                              "displayLines": "UnusedUnderThisBase_364",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_364"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Change Character Transformation",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "phase": "Phase03"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
                          "valuePerStack": {
                            "SummonIndex": {
                              "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
                              "displayLines": "CurrentSummonIndex",
                              "constants": [],
                              "variables": [
                                "CurrentSummonIndex"
                              ]
                            },
                            "MDF_ActionDelay1_Weight": {
                              "operator": "Variables[0] (UnusedUnderThisBase_358) || RETURN",
                              "displayLines": "UnusedUnderThisBase_358",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_358"
                              ]
                            },
                            "MDF_ActionDelay1": {
                              "operator": "Variables[0] (UnusedUnderThisBase_359) || RETURN",
                              "displayLines": "UnusedUnderThisBase_359",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_359"
                              ]
                            },
                            "MDF_ActionDelay2_Weight": {
                              "operator": "Variables[0] (UnusedUnderThisBase_360) || RETURN",
                              "displayLines": "UnusedUnderThisBase_360",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_360"
                              ]
                            },
                            "MDF_ActionDelay2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_361) || RETURN",
                              "displayLines": "UnusedUnderThisBase_361",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_361"
                              ]
                            },
                            "MDF_ActionDelay3_Weight": {
                              "operator": "Variables[0] (UnusedUnderThisBase_362) || RETURN",
                              "displayLines": "UnusedUnderThisBase_362",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_362"
                              ]
                            },
                            "MDF_ActionDelay3": {
                              "operator": "Variables[0] (UnusedUnderThisBase_363) || RETURN",
                              "displayLines": "UnusedUnderThisBase_363",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_363"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1876357747\">TaskList_Monster_W4_FireProwler_IF_SummonBounsCheck</a>"
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>"
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
          "name": "Define Custom Variable",
          "variableName": "HPBack",
          "value": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ToastFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability07_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "AttackCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": {
            "operator": "Variables[0] (UnusedUnderThisBase_366) || RETURN",
            "displayLines": "UnusedUnderThisBase_366",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_366"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] (UnusedUnderThisBase_366) || DIV || RETURN",
            "displayLines": "(-AttackCount / UnusedUnderThisBase_366)",
            "constants": [],
            "variables": [
              "AttackCount",
              "UnusedUnderThisBase_366"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": 0,
          "assignState": "True",
          "barType": "FireProwler",
          "trigger": "Step_01"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_367) || RETURN",
              "displayLines": "UnusedUnderThisBase_367",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_367"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (AttackCount) || RETURN",
            "displayLines": "AttackCount",
            "constants": [],
            "variables": [
              "AttackCount"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_368) || RETURN",
                  "displayLines": "UnusedUnderThisBase_368",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_368"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "ifTargetFound": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309826148\">Monster_W4_FireProwler_Ability07Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__309826148\">Monster_W4_FireProwler_Ability07Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4032021_Monster_W4_FireProwler_IF_Ability07_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_IF_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability06_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_AssistCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02_AssistCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_CurCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02_CurCount",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Assist_Flag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Far Left Enemy Entity}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.4,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.8,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                        }
                      ]
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
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 4,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_3) || RETURN",
                          "displayLines": "SummonID_3",
                          "constants": [],
                          "variables": [
                            "SummonID_3"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.4,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.6,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 2
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 1.8,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 3
                              }
                            ]
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "delay": 2.5,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "inherentTarget": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                                }
                              }
                            ]
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Assist_Flag",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Right Enemy Entity}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Far Right Enemy Entity}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "delay": 1.5,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "delay": 2,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                        }
                      ]
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
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "maxTargets": 4,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_3) || RETURN",
                          "displayLines": "SummonID_3",
                          "constants": [],
                          "variables": [
                            "SummonID_3"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "delay": 1.5,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "delay": 1.9,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 2
                              }
                            ]
                          },
                          "delay": 2.1,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        },
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 3
                              }
                            ]
                          },
                          "delay": 2.8,
                          "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Trigger Joint-Attack Ability",
                      "abilityList": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Assist_Flag",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>",
          "stackData": [],
          "latentQueue": [
            "Skill01_AssistCount",
            "Skill02_AssistCount"
          ]
        }
      ]
    },
    "4032021_Monster_W4_FireProwler_IF_Ability06_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability06_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_Ability06_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability05_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1617419184\">Enemy_W4_FireProwler_IF_Charge_Ability031</a>[<span class=\"descriptionNumberColor\">Dying Sobs</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] (HPBack_TimePowerCount) || DIV || RETURN",
                "displayLines": "(-AttackCount / HPBack_TimePowerCount)",
                "constants": [],
                "variables": [
                  "AttackCount",
                  "HPBack_TimePowerCount"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "maximum": 0,
              "assignState": "True",
              "barType": "FireProwler",
              "trigger": "Step_01"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": ">=",
                "value2": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AttackCount",
                    "compareType": ">=",
                    "value2": 8
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_108) || Constants[0] (2) || MUL || RETURN",
                          "displayLines": "(UnusedUnderThisBase_108 * 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "UnusedUnderThisBase_108"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
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
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_108) || RETURN",
                      "displayLines": "UnusedUnderThisBase_108",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_108"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_365) || RETURN",
                  "displayLines": "UnusedUnderThisBase_365",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_365"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              },
              "passed": [
                "Trigger: Ability End"
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                "Trigger: Ability End"
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AttackCount",
              "value": 0
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_365) || RETURN",
                  "displayLines": "UnusedUnderThisBase_365",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_365"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
              },
              "passed": [
                "Trigger: Ability End"
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                "Trigger: Ability End"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability05_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability05_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
            "compareType": ">",
            "value2": 0,
            "valueType": "Layer"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "AttackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AttackCount",
              "value": {
                "operator": "Variables[0] (AttackCount) || Variables[1] (HPBack_TimePowerCount) || MUL || RETURN",
                "displayLines": "(AttackCount * HPBack_TimePowerCount)",
                "constants": [],
                "variables": [
                  "AttackCount",
                  "HPBack_TimePowerCount"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (AttackCount) || RETURN",
                "displayLines": "AttackCount",
                "constants": [],
                "variables": [
                  "AttackCount"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 6
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 8
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_IF_Ability05_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability04_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Defeat clones to weaken the boss's ability"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Defeat clone to reduce the boss's Toughness"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-410869211\">TaskList_Monster_W4_FireProwler_IF_SummonIndexInitiate</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_3) || RETURN",
              "displayLines": "SummonID_3",
              "constants": [],
              "variables": [
                "SummonID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase03"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
              "valuePerStack": {
                "SummonIndex": {
                  "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
                  "displayLines": "CurrentSummonIndex",
                  "constants": [],
                  "variables": [
                    "CurrentSummonIndex"
                  ]
                },
                "MDF_ActionDelay1_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_358) || RETURN",
                  "displayLines": "UnusedUnderThisBase_358",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_358"
                  ]
                },
                "MDF_ActionDelay1": {
                  "operator": "Variables[0] (UnusedUnderThisBase_359) || RETURN",
                  "displayLines": "UnusedUnderThisBase_359",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_359"
                  ]
                },
                "MDF_ActionDelay2_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_360) || RETURN",
                  "displayLines": "UnusedUnderThisBase_360",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_360"
                  ]
                },
                "MDF_ActionDelay2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_361) || RETURN",
                  "displayLines": "UnusedUnderThisBase_361",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_361"
                  ]
                },
                "MDF_ActionDelay3_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_362) || RETURN",
                  "displayLines": "UnusedUnderThisBase_362",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_362"
                  ]
                },
                "MDF_ActionDelay3": {
                  "operator": "Variables[0] (UnusedUnderThisBase_363) || RETURN",
                  "displayLines": "UnusedUnderThisBase_363",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_363"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_3) || RETURN",
              "displayLines": "SummonID_3",
              "constants": [],
              "variables": [
                "SummonID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
          "valuePerStack": {
            "MDF_LoseHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_364) || RETURN",
              "displayLines": "UnusedUnderThisBase_364",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_364"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": 8,
          "casterAssign": "TargetSelf"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Calamity Power"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4032021_Monster_W4_FireProwler_IF_Ability04_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability031_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability031_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1617419184\">Enemy_W4_FireProwler_IF_Charge_Ability031</a>[<span class=\"descriptionNumberColor\">Dying Sobs</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": 6,
          "casterAssign": "TargetSelf"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Calamity Power"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_3",
              "summonLocation": "First"
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Defeat clones to weaken the boss's ability"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Defeat clone to reduce the boss's Toughness"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-410869211\">TaskList_Monster_W4_FireProwler_IF_SummonIndexInitiate</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_3) || RETURN",
              "displayLines": "SummonID_3",
              "constants": [],
              "variables": [
                "SummonID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase03"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
              "valuePerStack": {
                "SummonIndex": {
                  "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
                  "displayLines": "CurrentSummonIndex",
                  "constants": [],
                  "variables": [
                    "CurrentSummonIndex"
                  ]
                },
                "MDF_ActionDelay1_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_358) || RETURN",
                  "displayLines": "UnusedUnderThisBase_358",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_358"
                  ]
                },
                "MDF_ActionDelay1": {
                  "operator": "Variables[0] (UnusedUnderThisBase_359) || RETURN",
                  "displayLines": "UnusedUnderThisBase_359",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_359"
                  ]
                },
                "MDF_ActionDelay2_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_360) || RETURN",
                  "displayLines": "UnusedUnderThisBase_360",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_360"
                  ]
                },
                "MDF_ActionDelay2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_361) || RETURN",
                  "displayLines": "UnusedUnderThisBase_361",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_361"
                  ]
                },
                "MDF_ActionDelay3_Weight": {
                  "operator": "Variables[0] (UnusedUnderThisBase_362) || RETURN",
                  "displayLines": "UnusedUnderThisBase_362",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_362"
                  ]
                },
                "MDF_ActionDelay3": {
                  "operator": "Variables[0] (UnusedUnderThisBase_363) || RETURN",
                  "displayLines": "UnusedUnderThisBase_363",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_363"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_3) || RETURN",
              "displayLines": "SummonID_3",
              "constants": [],
              "variables": [
                "SummonID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
          "valuePerStack": {
            "MDF_LoseHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_364) || RETURN",
              "displayLines": "UnusedUnderThisBase_364",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_364"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability031_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability031_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_FireProwler_IF_Ability031_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability03_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_1) || RETURN",
              "displayLines": "SummonID_1",
              "constants": [],
              "variables": [
                "SummonID_1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase01"
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2095261503\">Enemy_W4_FireProwler_01_IF_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_2) || RETURN",
              "displayLines": "SummonID_2",
              "constants": [],
              "variables": [
                "SummonID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase02"
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2112039122\">Enemy_W4_FireProwler_01_IF_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true
                  }
                ]
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] (UnusedUnderThisBase_357) || RETURN",
                "displayLines": "UnusedUnderThisBase_357",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_357"
                ]
              },
              "adjustmentType": "Advance"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability03_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability03_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Right Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Right Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability02_Assist": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true,
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_356) || RETURN",
                  "displayLines": "UnusedUnderThisBase_356",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_356"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
                  "displayLines": "UnusedUnderThisBase_354",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_354"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
                  "displayLines": "UnusedUnderThisBase_355",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_355"
                  ]
                }
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
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_353) || RETURN",
                  "displayLines": "UnusedUnderThisBase_353",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_353"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
                  "displayLines": "UnusedUnderThisBase_354",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_354"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
                  "displayLines": "UnusedUnderThisBase_355",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_355"
                  ]
                }
              }
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
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill02_Assist_Damage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill02",
          "target2": null,
          "variable2": "Skill02_Assist_Damage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
                  "displayLines": "Skill02_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill02_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability01_Assist": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
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
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill01_Assist_Damage"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill01_Assist_Damage_Adjoin"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill01",
          "target2": null,
          "variable2": "Skill01_Assist_Damage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
          "variable": "MDF_Skill01_Adjoin",
          "target2": null,
          "variable2": "Skill01_Assist_Damage_Adjoin"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 1
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                "name": "Compare: Variable",
                "value1": "Skill01_AssistCount",
                "compareType": "=",
                "value2": 2
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
                  "displayLines": "Skill01_Assist_Damage",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
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
                  "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
                  "displayLines": "Skill01_Assist_Damage_Adjoin",
                  "constants": [],
                  "variables": [
                    "Skill01_Assist_Damage_Adjoin"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability02_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true,
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_356) || RETURN",
                  "displayLines": "UnusedUnderThisBase_356",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_356"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
                  "displayLines": "UnusedUnderThisBase_354",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_354"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
                  "displayLines": "UnusedUnderThisBase_355",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_355"
                  ]
                }
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
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
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
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_353) || RETURN",
                  "displayLines": "UnusedUnderThisBase_353",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_353"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
                  "displayLines": "UnusedUnderThisBase_354",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_354"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
                  "displayLines": "UnusedUnderThisBase_355",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_355"
                  ]
                }
              }
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
        {
          "name": "Create Enemies",
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_2",
              "summonLocation": "KeepOnFirst"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID_2",
              "summonLocation": "KeepOnLast"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase02_Still"
                },
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase02"
                },
                "Deleted bullshit",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2112039122\">Enemy_W4_FireProwler_01_IF_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"41194297\">Enemy_W4_FireProwler_01_IF_NextWave</a>"
                }
              ]
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
    "4032021_Monster_W4_FireProwler_IF_Ability02_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability02_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_Ability01_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability01_Part02",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
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
                  "target": "{{Caster's Minions}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0,
                "conditions": {
                  "name": "Enemy ID",
                  "ID": {
                    "operator": "Variables[0] (SummonID_1) || RETURN",
                    "displayLines": "SummonID_1",
                    "constants": [],
                    "variables": [
                      "SummonID_1"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID_1",
                      "summonLocation": "KeepOnFirst"
                    },
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID_1",
                      "summonLocation": "KeepOnLast"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase01_Still"
                    },
                    "Deleted bullshit"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase01"
                    },
                    "Deleted bullshit",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095261503\">Enemy_W4_FireProwler_01_IF_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"41194297\">Enemy_W4_FireProwler_01_IF_NextWave</a>"
                    }
                  ]
                }
              ]
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
    "4032021_Monster_W4_FireProwler_IF_Ability01_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_Ability01_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "silent": true,
          "toRemove": [
            "STAT_CTRL"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "LMCountDown",
          "value": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMin"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMout"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920196339\">Enemy_W4_FireProwler_IF_Limit_EnvirEffect</a>"
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
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_351) || RETURN",
              "displayLines": "UnusedUnderThisBase_351",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_351"
              ]
            },
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_350) || RETURN",
              "displayLines": "UnusedUnderThisBase_350",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_350"
              ]
            },
            "MDF_LM_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_349) || RETURN",
              "displayLines": "UnusedUnderThisBase_349",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_349"
              ]
            }
          }
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"31704267\">Enemy_W4_FireProwler_IF_Limit_EffectBody</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-953008997\">Enemy_W4_FireProwler_IF_Endurance</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "LMCountDown",
          "value": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMin"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMout"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920196339\">Enemy_W4_FireProwler_IF_Limit_EnvirEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_351) || RETURN",
              "displayLines": "UnusedUnderThisBase_351",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_351"
              ]
            },
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_350) || RETURN",
              "displayLines": "UnusedUnderThisBase_350",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_350"
              ]
            },
            "MDF_LM_DamageStanceValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_349) || RETURN",
              "displayLines": "UnusedUnderThisBase_349",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_349"
              ]
            }
          }
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"31704267\">Enemy_W4_FireProwler_IF_Limit_EffectBody</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part01",
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
          "ability": "Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_ChangePhase1": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_ChangePhase1",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
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
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1617419184\">Enemy_W4_FireProwler_IF_Charge_Ability031</a>[<span class=\"descriptionNumberColor\">Dying Sobs</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMin"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertFlag_LMout"
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
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChangePhase",
          "value": 1
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Assist_Flag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 2
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "LMCountDown",
          "value": 8
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
          },
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityEX05": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityEX04": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX04",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2037202426\">Enemy_W4_FireProwler_IF_AbilityEX04</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityEX03": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1986869569\">Enemy_W4_FireProwler_IF_AbilityEX03</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityEX02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2003647188\">Enemy_W4_FireProwler_IF_AbilityEX02</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityEX01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityEX01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1953314331\">Enemy_W4_FireProwler_IF_AbilityEX01</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_PassiveAbility01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_PassiveAbility01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1791597207\">W4_FireProwler_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808374826\">W4_FireProwler_BattleScore2</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "W4_FireProwler_00",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4034018,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "???",
            "isBaseCompare": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1531014099\">Enemy_W4_FireProwler_IF_ChangePhaseController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1048468329\">Enemy_W4_FireProwler_IF_EffectController</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityP03": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityP03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityP02": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityP02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Monster_W4_FireProwler_IF_AbilityP01": {
      "fileName": "4032021_Monster_W4_FireProwler_IF_AbilityP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"587526798\">Enemy_W4_FireProwler_IF_Limit_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4034018,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "???",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1846248943\">Enemy_W4_FireProwler_IF_Limit_Controller_Main03</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2038871933\">Enemy_W4_FireProwler_IF_RemoveOneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"948149510\">Enemy_W4_FireProwler_IF_NormalState</a>",
          "valuePerStack": {
            "MDF_CurrentStance": {
              "operator": "Variables[0] (UnusedUnderThisBase_348) || RETURN",
              "displayLines": "UnusedUnderThisBase_348",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_348"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1177521295\">Enemy_W4_FireProwler_IF_ListenPartDieLoseHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"165682162\">Enemy_W4_FireProwler_IF_HintToastController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1953314331\">Enemy_W4_FireProwler_IF_AbilityEX01</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_98) || RETURN",
                  "displayLines": "UnusedUnderThisBase_98",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_98"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_97) || RETURN",
                  "displayLines": "UnusedUnderThisBase_97",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_97"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
                  "displayLines": "UnusedUnderThisBase_96",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_96"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
              "valuePerStack": {
                "MDF_FrenzyStartDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_92) || RETURN",
                  "displayLines": "UnusedUnderThisBase_92",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_92"
                  ]
                },
                "MDF_FrenzyIntervalDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_93) || RETURN",
                  "displayLines": "UnusedUnderThisBase_93",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_93"
                  ]
                },
                "MDF_MaxFrenzyLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_94) || RETURN",
                  "displayLines": "UnusedUnderThisBase_94",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_94"
                  ]
                },
                "MDF_TokenDMGAddRatioPerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_95) || RETURN",
                  "displayLines": "UnusedUnderThisBase_95",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_95"
                  ]
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032021_Modifiers": {
      "fileName": "4032021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-88002942\">Enemy_W4_FireProwler_IF_APShow</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock Toughness",
                  "percent": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1617419184\">Enemy_W4_FireProwler_IF_Charge_Ability031</a>[<span class=\"descriptionNumberColor\">Dying Sobs</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
          "stackData": [],
          "latentQueue": [],
          "description": "Uses \"But Suffering is Essential\" in the next action.",
          "type": "Other",
          "effectName": "Dying Sobs",
          "statusName": "Dying Sobs"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-564419405\">Enemy_W4_FireProwler_01_IF_SuperArmor</a>",
          "modifierFlags": [
            "MuteHitH",
            "STAT_SuperArmor"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "A"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
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
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                    "displayLines": "MDF_AllDamageTypeResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeResistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeResistance"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-385152966\">Enemy_W4_FireProwler_01_IF_Repeat</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2037202426\">Enemy_W4_FireProwler_IF_AbilityEX04</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1986869569\">Enemy_W4_FireProwler_IF_AbilityEX03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2003647188\">Enemy_W4_FireProwler_IF_AbilityEX02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1953314331\">Enemy_W4_FireProwler_IF_AbilityEX01</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__165682162\">Enemy_W4_FireProwler_IF_HintToastController</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Defeat clone to reduce the boss's Toughness"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                        "compareType": ">=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "UI Display Event",
                          "popUpText": "Defeat clones to weaken the boss's ability"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1209794480\">Enemy_W4_FireProwler_01_IF_Bonus_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceButKeepLifeTime",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * _Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "duration": 1,
          "stackLimit": 5
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1358994659\">Enemy_W4_FireProwler_01_IF_Bonus_SpecialMark</a>",
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
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1534290588\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_SpecialMark</a>"
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1213942457\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_InsertAction</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1534290588\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_SpecialMark</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1534290588\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_SpecialMark</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1534290588\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_SpecialMark</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                  }
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1213942457\">TaskList_Monster_W4_FireProwler_01_IF_Bonus_InsertAction</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "FireProwler_IF",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": []
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1209794480\">Enemy_W4_FireProwler_01_IF_Bonus_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (UnusedUnderThisBase_371) || RETURN",
                          "displayLines": "UnusedUnderThisBase_371",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_371"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-88002942\">Enemy_W4_FireProwler_IF_APShow</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (UnusedUnderThisBase_369) || SUB || RETURN",
                    "displayLines": "(0 - UnusedUnderThisBase_369)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "UnusedUnderThisBase_369"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": {
                    "operator": "Variables[0] (UnusedUnderThisBase_370) || RETURN",
                    "displayLines": "UnusedUnderThisBase_370",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_370"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After launching an attack, it is absorbed by \"%CasterName\" to grant 1 stack of \"Calamity Power.\" When an ally target defeats a target, immediately grants 1 extra turn and increases DMG dealt.",
          "type": "Other",
          "statusName": "Complete Vessel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__41194297\">Enemy_W4_FireProwler_01_IF_NextWave</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1177521295\">Enemy_W4_FireProwler_IF_ListenPartDieLoseHP</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (UnusedUnderThisBase_364) || RETURN",
                        "displayLines": "UnusedUnderThisBase_364",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_364"
                        ]
                      },
                      "consumeFloor": 1,
                      "attackType": "Unknown",
                      "DamageType": {
                        "name": "Damage Type Source",
                        "sourceType": "Physical"
                      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1049811080\">Enemy_W4_FireProwler_IF_TimePowerListener</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "addStacksPerTrigger": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 0,
                  "assignState": "True",
                  "barType": "FireProwler",
                  "trigger": "Step_01"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonCount",
                      "value": {
                        "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_SummonCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SummonCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_SummonCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SummonCount",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Count",
                      "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                      "multiplier": 1
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4034018,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "???",
                            "isBaseCompare": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
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
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_01"
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
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_01"
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
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_02"
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
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
                                }
                              ]
                            }
                          ],
                          "defaultEvents": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_03"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_Count",
                            "compareType": ">=",
                            "value2": 0
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
                                "value1": "MDF_Count",
                                "compareType": "<=",
                                "value2": 4
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_01"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "MDF_Count",
                                    "compareType": "<=",
                                    "value2": 8
                                  },
                                  "passed": [
                                    {
                                      "name": "Update Displayed Energy Bar",
                                      "value": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "entityClass": "Enemy",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "maximum": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "assignState": "True",
                                      "barType": "FireProwler",
                                      "trigger": "Step_02"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Displayed Energy Bar",
                                      "value": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "entityClass": "Enemy",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "maximum": {
                                        "operator": "Variables[0] (MDF_Count) || RETURN",
                                        "displayLines": "MDF_Count",
                                        "constants": [],
                                        "variables": [
                                          "MDF_Count"
                                        ]
                                      },
                                      "assignState": "True",
                                      "barType": "FireProwler",
                                      "trigger": "Step_03"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__948149510\">Enemy_W4_FireProwler_IF_NormalState</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                        "displayLines": "MDF_CurrentStance",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentStance"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Physical"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CurrentStance"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonIndex) || RETURN",
                    "displayLines": "SummonIndex",
                    "constants": [],
                    "variables": [
                      "SummonIndex"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_ActionDelay1",
                          "isStartingDelay": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_ActionDelay2",
                          "isStartingDelay": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_ActionDelay3",
                          "isStartingDelay": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [
            "SummonIndex",
            "MDF_ActionDelay1_Weight",
            "MDF_ActionDelay1",
            "MDF_ActionDelay2_Weight",
            "MDF_ActionDelay2",
            "MDF_ActionDelay3_Weight",
            "MDF_ActionDelay3"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2112039122\">Enemy_W4_FireProwler_01_IF_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
          "type": "Other",
          "effectName": "Simultaneously use \"Fading Fate\"",
          "statusName": "Mutual Sacrifice"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2095261503\">Enemy_W4_FireProwler_01_IF_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "When \"%CasterName\" uses \"Demise's Storm,\" also use \"Demise's Storm\" at the same time.",
          "type": "Other",
          "effectName": "Simultaneously use \"Demise's Storm\"",
          "statusName": "Mutual Sacrifice"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2038871933\">Enemy_W4_FireProwler_IF_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
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
                  ]
                }
              ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
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
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "DisableAction"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AIFlag",
                                "compareType": "=",
                                "value2": 2,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AIFlag",
                                "compareType": "=",
                                "value2": 4,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 3
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AIFlag",
                                "compareType": "=",
                                "value2": 6,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AIFlag",
                                "compareType": "=",
                                "value2": 3,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
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
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1048468329\">Enemy_W4_FireProwler_IF_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034018,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "???",
                        "isBaseCompare": true,
                        "invertCondition": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1531014099\">Enemy_W4_FireProwler_IF_ChangePhaseController</a>",
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
                    "value1": "ChangePhase",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_FireProwler_IF_ChangePhase1",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
                    "justAddedOrActive": true
                  }
                }
              ]
            },
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
                  "variableName": "HPBack",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "HPBack",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            }
                          },
                          "abilityName": "Monster_W4_FireProwler_IF_HPBack",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "MonsterDeathRattle",
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
                          "variableName": "HPBack",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LoseHPRatio"
          ],
          "latentQueue": [],
          "description": "After receiving a killing blow, if \"%CasterName\" is in the \"Shackle Shatter\" state, be instantly resummoned and enter the \"Shackled\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
          "type": "Other",
          "effectName": "Shackled",
          "statusName": "Shackled"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-953008997\">Enemy_W4_FireProwler_IF_Endurance</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__31704267\">Enemy_W4_FireProwler_IF_Limit_EffectBody</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "LMCountDown",
            "InsertFlag_LMin",
            "InsertFlag_LMout",
            "AIFlag",
            "SkillFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__920196339\">Enemy_W4_FireProwler_IF_Limit_EnvirEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "LMCountDown",
            "InsertFlag_LMin",
            "InsertFlag_LMout"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1130985775\">Enemy_W4_FireProwler_IF_Limit_EffectLoop</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "LMRatio",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.95,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.9,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.85,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.8,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.75,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.7,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.65,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.6,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.55,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.5,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.45,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.4,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.35,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.3,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.25,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.2,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.15,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0.05,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Toughness Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_StanceCount"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LMMaxValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                    "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CurrentStance",
                      "_MaxStance",
                      "_StanceCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LMCurrentValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                    "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CurrentStance",
                      "_MaxStance",
                      "_StanceCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "LMRatio",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1130985775\">Enemy_W4_FireProwler_IF_Limit_EffectLoop</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1049811080\">Enemy_W4_FireProwler_IF_TimePowerListener</a>",
                  "valuePerStack": {
                    "MDF_MaxCount": {
                      "operator": "Variables[0] (UnusedUnderThisBase_352) || RETURN",
                      "displayLines": "UnusedUnderThisBase_352",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_352"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1130985775\">Enemy_W4_FireProwler_IF_Limit_EffectLoop</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"31704267\">Enemy_W4_FireProwler_IF_Limit_EffectBody</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"920196339\">Enemy_W4_FireProwler_IF_Limit_EnvirEffect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1049811080\">Enemy_W4_FireProwler_IF_TimePowerListener</a>"
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
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 403202,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1986869569\">Enemy_W4_FireProwler_IF_AbilityEX03</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                          }
                        ],
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_LM_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_LM_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_LM_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Physical"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1450427216\">Enemy_W4_FireProwler_IF_TimePower</a>"
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
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable with Toughness Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_StanceCount"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LMCurrentValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                    "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CurrentStance",
                      "_MaxStance",
                      "_StanceCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "LMRatio",
                  "value": {
                    "operator": "Variables[0] (LMCurrentValue) || Variables[1] (LMMaxValue) || DIV || RETURN",
                    "displayLines": "(LMCurrentValue / LMMaxValue)",
                    "constants": [],
                    "variables": [
                      "LMCurrentValue",
                      "LMMaxValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio",
            "MDF_SpeedAddedRatio",
            "MDF_LM_DamageStanceValue"
          ],
          "latentQueue": [
            "LMCountDown",
            "InsertFlag_LMin",
            "InsertFlag_LMout"
          ],
          "description": "Alternates between using \"Dying Sobs\" and \"But Suffering is Essential.\" \"Dying Sobs\" summons \"Long-Shattered Vessel\" and enters Charging state, and \"But Suffering is Essential\" deals Powerful Attacks. \"Calamity Power\" stacks increases the Hits Per Action of Powerful Attacks. After destroying \"Long-Shattered Vessel,\" Toughness and \"Calamity Power\" stacks can be reduced. In the second phase, \"Silent Sorrow\" and \"Cry Not for the Discarded\" will be used, and \"Calamity Power\" stacks increases.",
          "type": "Other",
          "effectName": "Shackle Shatter",
          "statusName": "Shackle Shatter"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1846248943\">Enemy_W4_FireProwler_IF_Limit_Controller_Main03</a>",
          "execute": [
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.5
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertFlag_LMin",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-953008997\">Enemy_W4_FireProwler_IF_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag_LMin",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "TargetCurrentToughness",
                            "compareType": "<=",
                            "value2": 2
                          }
                        ]
                      },
                      "abilityName": "Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part01",
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__587526798\">Enemy_W4_FireProwler_IF_Limit_Controller</a>",
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
                  "scope": "TargetEntity",
                  "variableName": "LMCountDown",
                  "value": 8
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1358994659\">Enemy_W4_FireProwler_01_IF_Bonus_SpecialMark</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LMCountDown",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 100
                }
              ]
            },
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertFlag_LMin",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-953008997\">Enemy_W4_FireProwler_IF_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag_LMin",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "TargetCurrentToughness",
                            "compareType": "<=",
                            "value2": 2
                          }
                        ]
                      },
                      "abilityName": "Monster_W4_FireProwler_IF_PassiveAbilityInitiate_Insert_LMin_Part01",
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1358994659\">Enemy_W4_FireProwler_01_IF_Bonus_SpecialMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "LMCountDown",
                  "value": 8
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1932074311\">Enemy_W4_FireProwler_IF_LockStance</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "4032021_Functions": {
      "fileName": "4032021_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-410869211\">TaskList_Monster_W4_FireProwler_IF_SummonIndexInitiate</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentSummonIndex",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentBounsIndex",
              "value": 2
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
                "displayLines": "CurrentSummonIndex",
                "constants": [],
                "variables": [
                  "CurrentSummonIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentSummonIndex",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentSummonIndex",
                      "value": 3
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentSummonIndex",
                      "value": 1
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentSummonIndex",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1876357747\">TaskList_Monster_W4_FireProwler_IF_SummonBounsCheck</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentBounsIndex",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (CurrentBounsIndex) || RETURN",
                  "displayLines": "CurrentBounsIndex",
                  "constants": [],
                  "variables": [
                    "CurrentBounsIndex"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurrentBounsIndex",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentBounsIndex",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}