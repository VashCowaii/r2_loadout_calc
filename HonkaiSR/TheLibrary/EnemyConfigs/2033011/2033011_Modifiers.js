const configAbility = {
  "fileName": "2033011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1104499944\">W2_LycanMecha_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Frankenstein's Dog",
                      "desc": "Howling Casket knocks down an allied character that is afflicted with Terrified",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1154832801\">W2_LycanMecha_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "LycanMecha_AddFearPreSuc"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "LycanMecha_FearPreNum"
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
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
                      "target": "{{Level Entity}}"
                    },
                    "value1": "LycanMecha_AddFearPreSuc",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "LycanMecha_FearPreNum",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Ain't Nothing to Fear",
                      "desc": "In a single battle, dispel all the \"Terror Grip\" states inflicted by Howling Casket on your team's characters",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL",
        "AvatarBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Count",
                  "value": -1,
                  "min": 1,
                  "max": 2
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Unable to move until the start of this unit's next turn.",
      "type": "Debuff",
      "effectName": "Becomes Terrified",
      "statusName": "Terrified"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-743573476\">Standard_FearListener</a>",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                  "variable": "MDF_Count",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_Count"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                      "valuePerStack": {
                        "MDF_LoseSP": {
                          "operator": "Variables[0] (MDF_LoseSP) || RETURN",
                          "displayLines": "MDF_LoseSP",
                          "constants": [],
                          "variables": [
                            "MDF_LoseSP"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Count",
              "value": -1
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AddByLycanMecha",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                      "adjustmentType": "+",
                      "variableName": "LycanMecha_FearPreNum",
                      "value": -1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "MonsterType_W2_Lycan"
              },
              "passed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                  "variableName": "LycanMecha_AddFearPreSuc",
                  "value": 1
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                  "adjustmentType": "+",
                  "variableName": "LycanMecha_FearPreNum",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AddByLycanMecha",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-743573476\">Standard_FearListener</a>",
              "valuePerStack": {
                "MDF_LoseSP": {
                  "operator": "Variables[0] (MDF_LoseSP) || RETURN",
                  "displayLines": "MDF_LoseSP",
                  "constants": [],
                  "variables": [
                    "MDF_LoseSP"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
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
                    "target": "{{Caster}}"
                  }
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LoseSP"
      ],
      "latentQueue": [],
      "description": "Enters the \"Terrified\" state at the start of the second turn. Attacking the %CasterName 1 time before then can dispel \"Terror Grip.\"",
      "type": "Debuff",
      "effectName": "Terror Grip",
      "statusName": "Terror Grip",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-434202587\">Enemy_W2_LycanMecha_Ability04_FearResistance</a>",
      "modifierFlags": [
        "ImmuneDebuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "The Bloodlust stacks needed to enter the Moon Rage status are reduced.",
      "type": "Buff",
      "effectName": "Bloodlust limit reduced",
      "statusName": "Blood Fervor"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1246058342\">Enemy_W2_LycanMecha_BattleCry</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W2_LycanMecha_Ability06_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -45
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    }
  ],
  "references": []
}