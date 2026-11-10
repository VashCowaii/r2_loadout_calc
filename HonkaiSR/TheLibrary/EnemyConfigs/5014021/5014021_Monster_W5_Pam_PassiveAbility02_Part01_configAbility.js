const configAbility = {
  "fileName": "5014021_Monster_W5_Pam_PassiveAbility02_Part01",
  "childAbilityList": [
    "5014021_Monster_W5_Pam_PassiveAbility02_Part01",
    "5014021_Monster_W5_Pam_PassiveAbility_PartChange_Insert",
    "5014021_Monster_W5_Pam_DeathRattle_Insert",
    "5014021_Monster_W5_Pam_PartChange_Camera",
    "5014021_Monster_W5_Pam_PartChange_Camera_02",
    "5014021_Monster_W5_Pam_PartChange_Camera_03"
  ],
  "skillTrigger": "PassiveSkill02",
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
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2085750266\">Monster_W5_Pam_MonsterNumCount</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-605749584\">Monster_W5_Pam_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2115837749\">W5_Pam_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2065504892\">W5_Pam_BattleScore2</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "variableName": "GridFightBoss"
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Neutral Team",
          "eventID": 20033,
          "variables": {
            "PassiveAbility01_P2_DelayPercentage": {
              "displayLines": "{[PassiveSkill01[1]]}"
            },
            "PassiveAbility01_P5_SpeedRatio": {
              "displayLines": "{[PassiveSkill01[4]]}"
            }
          },
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "identifier": "Pamu_Summon"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Battle Event",
          "teamName": "Neutral Team",
          "eventID": 20033,
          "variables": {
            "PassiveAbility01_P2_DelayPercentage": {
              "displayLines": "{[PassiveSkill01[1]]}"
            }
          },
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "identifier": "Pamu_Summon"
            }
          ]
        }
      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__495266650\">Monster_W5_Pam_CanSummon</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2085750266\">Monster_W5_Pam_MonsterNumCount</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "MDF_MonsterNum",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "living": true
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "MDF_MonsterNum",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "living": true
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "MDF_MonsterNum",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "living": true
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_MonsterNum",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_MonsterNum",
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"495266650\">Monster_W5_Pam_CanSummon</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"495266650\">Monster_W5_Pam_CanSummon</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1678930905\">Monster_W5_Pam_DisableAction_Modifier</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2015018608\">Monster_W5_Pam_Insert_Mark</a>"
    }
  ]
}