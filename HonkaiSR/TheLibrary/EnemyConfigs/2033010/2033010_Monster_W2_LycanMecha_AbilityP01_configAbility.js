const configAbility = {
  "fileName": "2033010_Monster_W2_LycanMecha_AbilityP01",
  "childAbilityList": [
    "2033010_Monster_W2_LycanMecha_AbilityP01"
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
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1104499944\">W2_LycanMecha_BattleScore2</a>"
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
      "name": "Define Custom Variable",
      "variableName": "Wolf_MaxAttackCount",
      "value": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"824686737\">Enemy_W2_LycanMecha_RageListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>",
      "valuePerStack": {
        "MaxAttackCount": {
          "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
          "displayLines": "Wolf_MaxAttackCount",
          "constants": [],
          "variables": [
            "Wolf_MaxAttackCount"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246058342\">Enemy_W2_LycanMecha_BattleCry</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Phase_Flag",
              "value": 1
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
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 2033011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Howling Casket (Bug)",
                "isBaseCompare": true,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Phase_Flag",
              "value": 2
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 4
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>. Can use Lupitoxin Synthesis and Slaughter Algorithm. This is dispelled when Weakness is broken.",
      "type": "Buff",
      "effectName": "Moon Rage",
      "statusName": "Moon Rage"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__824686737\">Enemy_W2_LycanMecha_RageListener</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
                      "operator": "Variables[0] ({[SkillRage[0]]}) || RETURN",
                      "displayLines": "{[SkillRage[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillRage[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]"
                }
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
  ]
}