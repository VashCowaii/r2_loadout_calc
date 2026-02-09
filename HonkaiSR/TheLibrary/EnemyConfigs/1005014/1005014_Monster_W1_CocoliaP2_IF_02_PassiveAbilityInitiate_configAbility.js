const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_02_PassiveAbilityInitiate",
  "childAbilityList": [
    "1005014_Monster_W1_CocoliaP2_IF_02_PassiveAbilityInitiate"
  ],
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
      "modifier": "<a class=\"gModGreen\" id=\"-1203311995\">Monster_W1_CocoliaP2_IF_BOSS_SummonCount</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID01) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonMonsterID01",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID01"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID_2",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID02) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonMonsterID02",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID02"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W1_CocoliaP2_00_SummonMonsterID03",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID01) || Constants[0] (300) || ADD || RETURN",
        "displayLines": "(Monster_W1_CocoliaP2_00_SummonMonsterID01 + 300)",
        "constants": [
          300
        ],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID01"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W1_CocoliaP2_00_SummonMonsterID04",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID02) || Constants[0] (100) || SUB || RETURN",
        "displayLines": "(Monster_W1_CocoliaP2_00_SummonMonsterID02 - 100)",
        "constants": [
          100
        ],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID02"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID_3",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID03) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonMonsterID03",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID03"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID_4",
      "value": {
        "operator": "Variables[0] (Monster_W1_CocoliaP2_00_SummonMonsterID04) || RETURN",
        "displayLines": "Monster_W1_CocoliaP2_00_SummonMonsterID04",
        "constants": [],
        "variables": [
          "Monster_W1_CocoliaP2_00_SummonMonsterID04"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"525621287\">W1_CocoliaP2_BattleScore1</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"1069495639\">Enemy_W1_CocoliaP2_IF_RemoveOneMore</a>"
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
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Cocolia_AICounter",
      "value": 1
    },
    {
      "name": "Set Enemy Phase",
      "phase": 2
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Cocolia_Tips_Taunt",
      "value": 1
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
      "modifier": "<a class=\"gModGreen\" id=\"-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2030503230\">Enemy_W1_CocoliaP2_EnvironmentEffect_ALL</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1361193715\">Enemy_W1_CocoliaP2_SpinSpeedController</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__896717086\">Enemy_W1_CocoliaP2_IF_AbilityShow</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11"
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1069495639\">Enemy_W1_CocoliaP2_IF_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
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
                  "passed": [
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__144674722\">Enemy_W1_CocoliaP2_ImaginaryAbilityTarget_Anti</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1203311995\">Monster_W1_CocoliaP2_IF_BOSS_SummonCount</a>",
      "execute": [
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
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
                  "variableName": "Monster_W1_CocoliaP2_00_SummonCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
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
              "variableName": "Monster_W1_CocoliaP2_00_SummonRecord",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}