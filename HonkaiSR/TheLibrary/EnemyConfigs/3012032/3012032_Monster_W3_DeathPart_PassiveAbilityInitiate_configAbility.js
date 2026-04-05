const configAbility = {
  "fileName": "3012032_Monster_W3_DeathPart_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Divide HP Bar into Segments",
      "segCount": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3014022,
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"94854948\">Monster_W3_DeathPart_RLBoss_SetMaxHP</a>"
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "phase": "PhaseCharge"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Insert_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
      "valuePerStack": {
        "MDF_ShowValue": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
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
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 301402020,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "DeathPart_AppearSkill_Flag",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "noTargetFound": [
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W3_DeathPart_Ability03_Insert",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "EnemyBattleCry",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"785799791\">Monster_W3_DeathPart_PreShow_Attack</a>",
      "valuePerStack": {
        "MDF_ShowValue": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1415744166\">Monster_W3_DeathPart_PreShow_Break</a>",
      "valuePerStack": {
        "MDF_ShowValue": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1415744166\">Monster_W3_DeathPart_PreShow_Break</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Toughness Reduction Preview",
                    "caster": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Basic ATK",
                        "Skill",
                        "Ultimate"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_ShowValue) || DIV || RETURN",
                        "displayLines": "(MDF_MaxHP / MDF_ShowValue)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          "MDF_ShowValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowValue"
      ],
      "latentQueue": [
        "Insert_Flag",
        "DeathPart_AppearSkill_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__785799791\">Monster_W3_DeathPart_PreShow_Attack</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Basic ATK",
                    "Skill",
                    "Ultimate"
                  ],
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_ShowValue) || DIV || RETURN",
                    "displayLines": "(MDF_MaxHP / MDF_ShowValue)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      "MDF_ShowValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowValue"
      ],
      "latentQueue": [
        "Insert_Flag",
        "DeathPart_AppearSkill_Flag"
      ]
    }
  ]
}