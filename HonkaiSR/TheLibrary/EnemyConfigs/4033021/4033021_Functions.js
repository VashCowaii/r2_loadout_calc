const configAbility = {
  "fileName": "4033021_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 4,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1542972511\">W4_Claymore_01_ListenTogether</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  }
                ]
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "InsertCheck03",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "InsertCheck03",
              "value": 0
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1495116910\">W4_Claymore_01_ListenDouble</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": ">=",
                "value2": 2,
                "livingTargets": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
              },
              {
                "name": "Compare: Variable",
                "value1": "InsertCheck04",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "InsertCheck04",
              "value": 0
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>",
      "parse": [
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
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "value1": "_BossUI",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "display": false
            }
          ]
        },
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
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "value1": "_BossUI",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              },
              "display": true
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "variableName": "_BossUI",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>",
      "parse": [
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
                  "target": "{{EVENT[RoT] Light Praetor: 3}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "value1": "_BossUI",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              },
              "display": false
            }
          ]
        },
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
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "value1": "_BossUI",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "display": true
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "variableName": "_BossUI",
              "value": 0
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        }
      ]
    }
  ],
  "references": []
}