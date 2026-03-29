const configAbility = {
  "fileName": "5014015_Monster_W5_Vtuber_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{@Sparxiecon: Output Port 1}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W5_VtuberPart01_VtuberAbility03",
      "isTrigger": true
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "dmgCountsForTeam": "Enemy Team",
      "eventID": 20039,
      "variables": null,
      "whenCreated": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-9889952\">Enemy_W5_Vtuber_CountDown01</a>"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{@Sparxiecon: Output Port 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1006247126\">Enemy_W5_VtuberPart01_Charge</a>[<span class=\"descriptionNumberColor\">Ally Popularity</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{@Sparxiecon: Output Port 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-869771857\">Enemy_W5_VtuberPart02_Charge</a>[<span class=\"descriptionNumberColor\">Enemy Popularity</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
        "displayLines": "{[Skill03[2]]}",
        "constants": [],
        "variables": [
          "{[Skill03[2]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-321445076\">Enemy_W5_Vtuber_Charge</a>",
      "valuePerStack": {
        "MDF_AllDamageReduce": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"707844415\">Enemy_W5_Vtuber_Charge01</a>[<span class=\"descriptionNumberColor\">Live Showdown</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
        "displayLines": "{[Skill03[3]]}",
        "constants": [],
        "variables": [
          "{[Skill03[3]]}"
        ]
      },
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
          "locationType": "AroundCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_Layer": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
        "displayLines": "{[Skill03[2]]}",
        "constants": [],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "stayInTeam": true
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
        "displayLines": "{[Skill03[4]]}",
        "constants": [],
        "variables": [
          "{[Skill03[4]]}"
        ]
      },
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
          "locationType": "AroundCaster"
        },
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
          "locationType": "AroundCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>",
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1702970664\">Enemy_W5_Vtuber_DamageAdd</a>[<span class=\"descriptionNumberColor\">Enemy Gratuity</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_Layer": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
        "displayLines": "{[Skill03[2]]}",
        "constants": [],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "stayInTeam": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"308759632\">Enemy_W5_Vtuber_SwitchField</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-9889952\">Enemy_W5_Vtuber_CountDown01</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
              "abilitySource": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W5_Vtuber_00"
              },
              "priorityTag": "MonsterForceKill",
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Departed State: Begin [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
                              },
                              {
                                "name": "Is Entity Type",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "type": "Character"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Vtuber_Ability06_Part01",
                  "abilitySource": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W5_Vtuber_00"
                  },
                  "priorityTag": "MonsterForceKill",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}