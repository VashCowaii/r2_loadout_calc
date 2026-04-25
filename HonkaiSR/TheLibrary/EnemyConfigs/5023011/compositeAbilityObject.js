const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5023011,
  "trimCharacterName": 5023011,
  "abilityList": [
    "5023011_Monster_XP_Elite02_03_Deathrattle_LV2",
    "5023011_Monster_XP_Elite02_03_Deathrattle_LV1",
    "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV2",
    "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1",
    "5023011_Monster_XP_Elite02_03_Deathrattle_ForceKill",
    "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part02",
    "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part01",
    "5023011_Monster_XP_Elite02_03_PassiveAbility_ScoreAssign",
    "5023011_Monster_XP_Elite02_03_Ability04_Part02",
    "5023011_Monster_XP_Elite02_03_Ability04_Part01",
    "5023011_Monster_XP_Elite02_03_Ability03_Part02",
    "5023011_Monster_XP_Elite02_03_Ability03_Part01",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_03",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_02",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_01",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_00",
    "5023011_Monster_XP_Elite02_03_Ability02_Part03",
    "5023011_Monster_XP_Elite02_03_Ability02_Part02",
    "5023011_Monster_XP_Elite02_03_Ability02_Part01",
    "5023011_Monster_XP_Elite02_03_Ability01_Part02",
    "5023011_Monster_XP_Elite02_03_Ability01_Part01",
    "5023011_Modifiers"
  ],
  "abilityObject": {
    "5023011_Monster_XP_Elite02_03_Deathrattle_LV2": {
      "fileName": "5023011_Monster_XP_Elite02_03_Deathrattle_LV2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Illwish Fission"
        },
        "Deleted bullshit",
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "SummonMonsterNum",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "SummonMonsterNum",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "SummonMonsterNum",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID2",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[5]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID2",
                  "summonLocation": "AfterCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID2",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[5]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID2",
                  "summonLocation": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1061041544\">Monster_XP_Elite02_03_InitHP_LV2</a>",
          "valuePerStack": {
            "MDF_InitHP_LV2": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            },
            "MDF_InitStance_LV2": {
              "operator": "Variables[0] ({[PassiveSkill01[8]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[8]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[8]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterNum",
            "compareType": ">=",
            "value2": 2,
            "contextScope": "TargetEntity"
          }
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterNum",
            "compareType": ">=",
            "value2": 2,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Shot Fired"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
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
          "searchRandom": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[6]]}"
            ]
          },
          "adjustment": "Add"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Deathrattle_LV1": {
      "fileName": "5023011_Monster_XP_Elite02_03_Deathrattle_LV1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Illwish Fission"
        },
        "Deleted bullshit",
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "SummonMonsterNum",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "SummonMonsterNum",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "SummonMonsterNum",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "AfterCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "BeforeCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1111374401\">Monster_XP_Elite02_03_InitHP_LV1</a>",
          "valuePerStack": {
            "MDF_InitHP_LV1": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_InitStance_LV1": {
              "operator": "Variables[0] ({[PassiveSkill01[7]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[7]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[7]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterNum",
            "compareType": ">=",
            "value2": 2,
            "contextScope": "TargetEntity"
          }
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterNum",
            "compareType": ">=",
            "value2": 2,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Shot Fired"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>"
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
          "searchRandom": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill01[6]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[6]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[6]]}"
            ]
          },
          "adjustment": "Add"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV2": {
      "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV2",
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
          "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
          "stackLimit": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
          "stackLimit": 3
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1": {
      "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_PassiveAbility03_Part01_LV1"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
          "stackLimit": 3
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Deathrattle_ForceKill": {
      "fileName": "5023011_Monster_XP_Elite02_03_Deathrattle_ForceKill",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
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
            "modifier": "<a class=\"gModGreen\" id=\"-1851176516\">Modifier_Monster_XP_Elite02_03_ForceKill</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>"
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
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part02": {
      "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
          "stackLimit": 3
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part01": {
      "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part01",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_Deathrattle_Camera",
        "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part01",
        "5023011_Monster_XP_Elite02_03_PassiveAbility01_Part02",
        "5023011_Monster_XP_Elite02_03_Deathrattle_LV1",
        "5023011_Monster_XP_Elite02_03_Deathrattle_LV2",
        "5023011_Monster_XP_Elite02_03_Deathrattle_ForceKill"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_03_PassiveAbility01_Part02",
          "isTrigger": true
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1942183745\">XP_Elite02_03_BattleScore1</a>",
          "casterAssign": "TargetSelf"
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
                  "target": "{{Modifier Holder}}"
                },
                "value": "XP_Elite02_03_Small_Mark"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>"
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-592056387\">Monster_XP_Elite02_03_PartControl</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-592056387\">Monster_XP_Elite02_03_PartControl</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
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
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 7
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
    "5023011_Monster_XP_Elite02_03_PassiveAbility_ScoreAssign": {
      "fileName": "5023011_Monster_XP_Elite02_03_PassiveAbility_ScoreAssign",
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
    "5023011_Monster_XP_Elite02_03_Ability04_Part02": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"529514456\">Monster_XP_Elite02_03_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2030183935\">Monster_XP_Elite02_03_Charge</a>[<span class=\"descriptionNumberColor\">Budding</span>]"
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Constants[0] (0) || Variables[0] ({[Skill04[2]]}) || SUB || RETURN",
                    "displayLines": "(0 - {[Skill04[2]]})",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "{[Skill04[2]]}"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "popUpText": "Action Delayed"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[Skill04[1]]}"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability04_Part01": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability04_Part01",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_Ability04_Camera",
        "5023011_Monster_XP_Elite02_03_Ability04_Part01",
        "5023011_Monster_XP_Elite02_03_Ability04_Part02"
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
          "ability": "Monster_XP_Elite02_03_Ability04_Part02",
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
    "5023011_Monster_XP_Elite02_03_Ability03_Part02": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"529514456\">Monster_XP_Elite02_03_ChargeEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2030183935\">Monster_XP_Elite02_03_Charge</a>[<span class=\"descriptionNumberColor\">Budding</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability03_Part01": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability03_Part01",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_Ability03_Camera",
        "5023011_Monster_XP_Elite02_03_Ability03_Part01",
        "5023011_Monster_XP_Elite02_03_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_03_Ability03_Part02",
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
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_03": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Current Turn Owner}}"
          },
          "variableName": "Skill02_AssistCount",
          "value": 1,
          "max": 4
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_02": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_01": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Current Turn Owner}}"
          },
          "variableName": "Skill02_AssistCount",
          "value": 1,
          "max": 4
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_00": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability02_Part03": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-125464834\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1513504796\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit_Solo</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                "Trigger: Attack End"
              ],
              "noTargetFound": [
                "Trigger: Attack End"
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                "Trigger: Attack End"
              ],
              "noTargetFound": [
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            "Trigger: Ability End"
          ],
          "failed": [
            "Trigger: Ability End"
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                    "invertCondition": true
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
                    "DamageType": "Wind",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                        "invertCondition": true
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
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
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
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                              "displayLines": "{[Skill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[1]]}"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Ability Target(ST)}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                              "valuePerStack": {
                                "Ability02_P4_BonusChance": {
                                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                                  "displayLines": "{[Skill02[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[3]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 4
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                    "invertCondition": true
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
                    "DamageType": "Wind",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                        "invertCondition": true
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
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
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
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                              "displayLines": "{[Skill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[1]]}"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Ability Target(ST)}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                              "valuePerStack": {
                                "Ability02_P4_BonusChance": {
                                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                                  "displayLines": "{[Skill02[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[3]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-125464834\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                        "invertCondition": true
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
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
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
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                              "displayLines": "{[Skill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[1]]}"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                              "valuePerStack": {
                                "Ability02_P4_BonusChance": {
                                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                                  "displayLines": "{[Skill02[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[3]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Skill02_AssistCount",
                            "compareType": ">=",
                            "value2": 4
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1513504796\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit_Solo</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                        "invertCondition": true
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
                        "DamageType": "Wind",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
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
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                              "displayLines": "{[Skill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[1]]}"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                              "valuePerStack": {
                                "Ability02_P4_BonusChance": {
                                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                                  "displayLines": "{[Skill02[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill02[3]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1535094540\">Modifier_Monster_XP_Elite02_03_SecondaryTarget</a>",
                    "invertCondition": true
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                      "displayLines": "({[Skill02[0]]} * {[Skill02[2]]})",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}",
                        "{[Skill02[2]]}"
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
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                      "displayLines": "({[Skill02[1]]} * {[Skill02[2]]})",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}",
                        "{[Skill02[2]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                          "displayLines": "({[Skill02[0]]} * {[Skill02[2]]})",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}",
                            "{[Skill02[2]]}"
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
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                          "displayLines": "({[Skill02[1]]} * {[Skill02[2]]})",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}",
                            "{[Skill02[2]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
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
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability02_Part02": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "SameMonsterNum",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill02_AssistCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "XP_Elite02_03_Mark"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Current Turn Owner}}"
              },
              "variableName": "SameMonsterNum",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SameMonsterNum",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "XP_Elite02_03_Mark"
              },
              "ifTargetFound": [
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
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_00"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 3
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
                    }
                  ]
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
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_00"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "XP_Elite02_03_Mark"
              },
              "ifTargetFound": [
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
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_02"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
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
                            "name": "Target Filter",
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
                                    "target": "{{Caster}}"
                                  },
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "STAT_CTRL",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "DisableAction",
                                  "invertCondition": true
                                },
                                {
                                  "name": "Has Flag",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagName": "Break",
                                  "invertCondition": true
                                }
                              ]
                            }
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 3
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
                    }
                  ]
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
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_02"
                    }
                  ]
                }
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
    "5023011_Monster_XP_Elite02_03_Ability02_Part01": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part01",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_Ability02_Camera",
        "5023011_Monster_XP_Elite02_03_Ability02_Camera_02",
        "5023011_Monster_XP_Elite02_03_Ability02_Part01",
        "5023011_Monster_XP_Elite02_03_Ability02_Part02",
        "5023011_Monster_XP_Elite02_03_Ability02_Part03",
        "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_00",
        "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_01",
        "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_02",
        "5023011_Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
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
          "ability": "Monster_XP_Elite02_03_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_03_Ability02_Part03"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability01_Part02": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability01_Part02",
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
            "DamageType": "Wind",
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5023011_Monster_XP_Elite02_03_Ability01_Part01": {
      "fileName": "5023011_Monster_XP_Elite02_03_Ability01_Part01",
      "childAbilityList": [
        "5023011_Monster_XP_Elite02_03_Ability01_Camera",
        "5023011_Monster_XP_Elite02_03_Ability01_Part01",
        "5023011_Monster_XP_Elite02_03_Ability01_Part02"
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
          "ability": "Monster_XP_Elite02_03_Ability01_Part02",
          "isTrigger": true
        },
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
    "5023011_Modifiers": {
      "fileName": "5023011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1942183745\">XP_Elite02_03_BattleScore1</a>",
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
                  "variableName": "XP_Elite02_03_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "value": "UNKNOWN_OBJECT_BOOLEAN_828080"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "XP_Elite02_03_BattleScore1_Flag",
                      "value": 1,
                      "max": 100
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "XP_Elite02_03_BattleScore1_Flag",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Good Times Come to an End",
                              "desc": "In the battle against \"Joy Ascendant\", defeat #1 or more \"Joy Ascendant: Finale\" in a single attack",
                              "rarity": "Low",
                              "params": [
                                4
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
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "XP_Elite02_03_BattleScore1_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "XP_Elite02_03_BattleScore1_Flag",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1851176516\">Modifier_Monster_XP_Elite02_03_ForceKill</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1061041544\">Monster_XP_Elite02_03_InitHP_LV2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP_LV2) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitHP_LV2)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitHP_LV2"
                    ]
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "valuePercentReduce": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitStance_LV2) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitStance_LV2)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitStance_LV2"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ]
            }
          ],
          "stackData": [
            "MDF_InitHP_LV2",
            "MDF_InitStance_LV2"
          ],
          "latentQueue": [
            "SummonMonsterNum"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1111374401\">Monster_XP_Elite02_03_InitHP_LV1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP_LV1) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitHP_LV1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitHP_LV1"
                    ]
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "valuePercentReduce": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_InitStance_LV1) || SUB || RETURN",
                    "displayLines": "(1 - MDF_InitStance_LV1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_InitStance_LV1"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ]
            }
          ],
          "stackData": [
            "MDF_InitHP_LV1",
            "MDF_InitStance_LV1"
          ],
          "latentQueue": [
            "SummonMonsterNum"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__529514456\">Monster_XP_Elite02_03_ChargeEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"529514456\">Monster_XP_Elite02_03_ChargeEffect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2030183935\">Monster_XP_Elite02_03_Charge</a>[<span class=\"descriptionNumberColor\">Budding</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "Uses \"Euphoric Spiral\" in the next action.",
          "type": "Other",
          "effectName": "Budding",
          "statusName": "Budding"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
          "stackData": [],
          "latentQueue": [
            "SummonMonsterNum"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1535094540\">Modifier_Monster_XP_Elite02_03_SecondaryTarget</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
          "stackData": [],
          "latentQueue": [
            "SameMonsterNum",
            "Skill02_AssistCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
          "stackType": "Replace",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>"
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
                        "value1": null,
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite02_03_Deathrattle_LV1",
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Mark Entity For Immediate Death"
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
                            "value1": null,
                            "compareType": "=",
                            "value2": 2,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Elite02_03_Deathrattle_LV2",
                          "priorityTag": "EnemyDeathEffect",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Mark Entity For Immediate Death"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Action Completed [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Skill02_P4_BonusChance) || RETURN",
                          "displayLines": "Skill02_P4_BonusChance",
                          "constants": [],
                          "variables": [
                            "Skill02_P4_BonusChance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Skill Points Modification",
                          "adjustmentValue": 1,
                          "adjustmentType": "+"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Skill02_P4_BuffChance"
          ],
          "latentQueue": [
            "SameMonsterNum",
            "Skill02_AssistCount"
          ],
          "description": "Action delayed and loses Skill Point(s) if attacked by Joy Ascendant's ability \"Euphoric Spiral\" while possessing this effect. This effect is removed after using Basic ATK once, and has a high chance to gain additional Skill Point(s).",
          "type": "Other",
          "effectName": "Paramount Bliss",
          "statusName": "Paramount Bliss"
        }
      ],
      "references": []
    }
  }
}