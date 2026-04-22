const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4014020,
  "trimCharacterName": 4014020,
  "abilityList": [
    "4014020_Monster_W4_Hearse_PassiveAbility_Insert",
    "4014020_Monster_W4_Hearse_Ability04_Part02",
    "4014020_Monster_W4_Hearse_Ability04_Part01",
    "4014020_Monster_W4_Hearse_Ability03_Part02",
    "4014020_Monster_W4_Hearse_Ability03_Part01",
    "4014020_Monster_W4_Hearse_Ability02_Part02",
    "4014020_Monster_W4_Hearse_Ability02_Part01",
    "4014020_Monster_W4_Hearse_Ability01_Part02",
    "4014020_Monster_W4_Hearse_Ability01_Part01",
    "4014020_Monster_W4_Hearse_Born_Part02",
    "4014020_Monster_W4_Hearse_Passive01",
    "4014020_Monster_W4_Hearse_PassiveAbility_BGM",
    "4014020_Modifiers"
  ],
  "abilityObject": {
    "4014020_Monster_W4_Hearse_PassiveAbility_Insert": {
      "fileName": "4014020_Monster_W4_Hearse_PassiveAbility_Insert",
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
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "silent": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"261985089\">Monster_W4_Nikadory_Energy</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Currency Wars Full OffFieldList}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2087329841\">Monster_W4_Nikadory_Charge_UnselectableCheck</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1470468731\">Monster_W4_Hearse_AlreadyAdd</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
        },
        {
          "name": "Add to Team Target Grouping",
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
          "modifier": "<a class=\"gModGreen\" id=\"1275245570\">Monster_W4_Hearse_InChangePhase</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401402020,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1360481929\">Monster_W4_Nikadory_Main3_LockHP</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 4
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "ChangePhase_MaxHPValue"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "ChangePhase_MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setPercent": 1
            },
            {
              "name": "Set Enemy Phase",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mode": "Inc"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"261985089\">Monster_W4_Nikadory_Energy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
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
                    "modifier": "<a class=\"gModGreen\" id=\"1873725361\">Monster_W4_Nikadory_InTurn</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1258691339\">Monster_W4_Nikadory_WithHearse</a>",
                  "variableName": "MDF_CurrentTurn",
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1258691339\">Monster_W4_Nikadory_WithHearse</a>",
                  "variableName": "MDF_CurrentTurn",
                  "value": 1
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": 0,
                  "adjustmentType": "="
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Currency Wars Full OffFieldList}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2087329841\">Monster_W4_Nikadory_Charge_UnselectableCheck</a>"
            }
          ]
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "W4_Hearse_00"
        },
        {
          "name": "Force-Sync AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Create AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "linkOrder": 1,
          "isStart": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1275245570\">Monster_W4_Hearse_InChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
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
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"276604905\">Monster_W4_Hearse_Passive</a>",
          "variableName": "MDF_TurnCount",
          "value": 2
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"191148502\">Monster_W4_Hearse_LockHPNikadory</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"126121466\">Monster_W4_Hearse_LeaveTeam</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Ability04_Part02": {
      "fileName": "4014020_Monster_W4_Hearse_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1470468731\">Monster_W4_Hearse_AlreadyAdd</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1009782212\">Monster_W4_HearsePart_ChangeEffect</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2003197831\">Monster_W4_Hearse_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2115413024\">Monster_W4_Nikadory_Part2EffectWithHearseAbility04</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>"
            }
          }
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1952846644\">Monster_W4_Hearse_Ability04_PositionMark</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1952846644\">Monster_W4_Hearse_Ability04_PositionMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014023,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Mydeimos, Lance of Fury",
                "isBaseCompare": true,
                "invertCondition": true
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1663613862\">Monster_W4_Hearse_BattleScore1Count</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>"
            }
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>"
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
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
              "variableName": "MDF_KillByHearse",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill04Count",
              "value": {
                "operator": "Variables[0] (Skill04Count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Skill04Count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Skill04Count"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill04Count",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (Skill04Count) || RETURN",
                "displayLines": "Skill04Count",
                "constants": [],
                "variables": [
                  "Skill04Count"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "flagName": "STAT_CTRL"
          },
          "passed": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Nikador: Self}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-545445682\">Monster_W4_Nikadory_EnduranceLockWeakness</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          "ifTargetFound": [
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2101563151\">Monster_W4_Hearse_Ability04_Mark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill04Count",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Ability04_Part01": {
      "fileName": "4014020_Monster_W4_Hearse_Ability04_Part01",
      "childAbilityList": [
        "4014020_Monster_W4_Hearse_Ability04_Camera",
        "4014020_Monster_W4_Hearse_Ability04_Part01",
        "4014020_Monster_W4_Hearse_Ability04_Part02"
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
          "ability": "Monster_W4_Hearse_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Ability03_Part02": {
      "fileName": "4014020_Monster_W4_Hearse_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2115413024\">Monster_W4_Nikadory_Part2EffectWithHearseAbility04</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2003197831\">Monster_W4_Hearse_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-672192540\">Monster_W4_Hearse_Ability03_Prepare</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
        },
        "Ability Start",
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "valueType": "Layer",
          "variableName": "Skill03Count",
          "modifierName": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Skill03Count",
                "compareType": "=",
                "value2": 4
              },
              {
                "name": "Stage Type",
                "stageType": "Mainline",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03Damage",
              "value": {
                "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] ({[Skill03[3]]}) || Constants[0] (4) || Variables[2] (Skill03Count) || SUB || MUL || SUB || Variables[3] ({[Skill03[4]]}) || ADD || RETURN",
                "displayLines": "(({[Skill03[0]]} - ({[Skill03[3]]} * (4 - Skill03Count))) + {[Skill03[4]]})",
                "constants": [
                  4
                ],
                "variables": [
                  "{[Skill03[0]]}",
                  "{[Skill03[3]]}",
                  "Skill03Count",
                  "{[Skill03[4]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03Damage",
              "value": {
                "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] ({[Skill03[3]]}) || Constants[0] (4) || Variables[2] (Skill03Count) || SUB || MUL || SUB || RETURN",
                "displayLines": "({[Skill03[0]]} - ({[Skill03[3]]} * (4 - Skill03Count)))",
                "constants": [
                  4
                ],
                "variables": [
                  "{[Skill03[0]]}",
                  "{[Skill03[3]]}",
                  "Skill03Count"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "operator": "Constants[0] (0.1) || Variables[0] (MaxHPValue) || MUL || Variables[1] (Skill03Damage) || MUL || RETURN",
                  "displayLines": "((0.1 * MaxHPValue) * Skill03Damage)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "MaxHPValue",
                    "Skill03Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "operator": "Constants[0] (0.1) || Variables[0] (MaxHPValue) || MUL || Variables[1] (Skill03Damage) || MUL || RETURN",
                  "displayLines": "((0.1 * MaxHPValue) * Skill03Damage)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "MaxHPValue",
                    "Skill03Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "operator": "Constants[0] (0.1) || Variables[0] (MaxHPValue) || MUL || Variables[1] (Skill03Damage) || MUL || RETURN",
                  "displayLines": "((0.1 * MaxHPValue) * Skill03Damage)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "MaxHPValue",
                    "Skill03Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "operator": "Constants[0] (0.7) || Variables[0] (MaxHPValue) || MUL || Variables[1] (Skill03Damage) || MUL || RETURN",
                  "displayLines": "((0.7 * MaxHPValue) * Skill03Damage)",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "MaxHPValue",
                    "Skill03Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "70%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador - The Giver: Skill03 Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-672192540\">Monster_W4_Hearse_Ability03_Prepare</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-200542532\">Monster_APShow_OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-689985018\">Monster_W4_Hearse_ActionBarHint</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-545445682\">Monster_W4_Nikadory_EnduranceLockWeakness</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"770051597\">Monster_W4_Hearse_Sign</a>[<span class=\"descriptionNumberColor\">Strife-Granted Fear</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871536192\">Monster_W4_Hearse_Sign_Enhance</a>[<span class=\"descriptionNumberColor\">Drowning in Terror</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentBlackBloodValue"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentEnhanceBlackBloodValue"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentRemainBlackBloodValue"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentEnhanceBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentRemainBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentBlackBloodValue",
                  "value": {
                    "operator": "Variables[0] (CurrentBlackBloodValue) || Variables[1] (CurrentRemainBlackBloodValue) || SUB || Variables[2] (UnusedUnderThisBase_318) || MUL || Variables[1] (CurrentRemainBlackBloodValue) || ADD || Variables[3] (CurrentEnhanceBlackBloodValue) || SUB || RETURN",
                    "displayLines": "((((CurrentBlackBloodValue - CurrentRemainBlackBloodValue) * UnusedUnderThisBase_318) + CurrentRemainBlackBloodValue) - CurrentEnhanceBlackBloodValue)",
                    "constants": [],
                    "variables": [
                      "CurrentBlackBloodValue",
                      "CurrentRemainBlackBloodValue",
                      "UnusedUnderThisBase_318",
                      "CurrentEnhanceBlackBloodValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentBlackBloodValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                      "displayLines": "UnusedUnderThisBase_319",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_319"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentBlackBloodValue",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                        "displayLines": "UnusedUnderThisBase_319",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_319"
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]",
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] (CurrentBlackBloodValue) || RETURN",
                      "displayLines": "CurrentBlackBloodValue",
                      "constants": [],
                      "variables": [
                        "CurrentBlackBloodValue"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2003197831\">Monster_W4_Hearse_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1065905624\">Monster_W4_Hearse_Ability03_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Ability03_Part01": {
      "fileName": "4014020_Monster_W4_Hearse_Ability03_Part01",
      "childAbilityList": [
        "4014020_Monster_W4_Hearse_Ability03_Camera",
        "4014020_Monster_W4_Hearse_Ability03_Part01",
        "4014020_Monster_W4_Hearse_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W4_Hearse_Ability03_Part02",
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
    "4014020_Monster_W4_Hearse_Ability02_Part02": {
      "fileName": "4014020_Monster_W4_Hearse_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1871536192\">Monster_W4_Hearse_Sign_Enhance</a>[<span class=\"descriptionNumberColor\">Drowning in Terror</span>]",
              "valuePerStack": {
                "MDF_DamageTakenUpRatio": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "MDF_ConfineChance": {
                  "operator": "Variables[0] (UnusedUnderThisBase_317) || RETURN",
                  "displayLines": "UnusedUnderThisBase_317",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_317"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"770051597\">Monster_W4_Hearse_Sign</a>[<span class=\"descriptionNumberColor\">Strife-Granted Fear</span>]",
              "valuePerStack": {
                "MDF_DamageTakenUpRatio": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-200542532\">Monster_APShow_OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-689985018\">Monster_W4_Hearse_ActionBarHint</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Ability02_Part01": {
      "fileName": "4014020_Monster_W4_Hearse_Ability02_Part01",
      "childAbilityList": [
        "4014020_Monster_W4_Hearse_Ability02_Camera",
        "4014020_Monster_W4_Hearse_Ability02_Part01",
        "4014020_Monster_W4_Hearse_Ability02_Part02"
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
          "ability": "Monster_W4_Hearse_Ability02_Part02",
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
    "4014020_Monster_W4_Hearse_Ability01_Part02": {
      "fileName": "4014020_Monster_W4_Hearse_Ability01_Part02",
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
                "value1": "Tutorial_Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1470468731\">Monster_W4_Hearse_AlreadyAdd</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentBlackBloodValue"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentEnhanceBlackBloodValue"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentRemainBlackBloodValue"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentEnhanceBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentRemainBlackBloodValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentBlackBloodValue",
                  "value": {
                    "operator": "Variables[0] (CurrentBlackBloodValue) || Variables[1] (CurrentRemainBlackBloodValue) || SUB || Variables[2] (UnusedUnderThisBase_318) || MUL || Variables[1] (CurrentRemainBlackBloodValue) || ADD || Variables[3] (CurrentEnhanceBlackBloodValue) || SUB || RETURN",
                    "displayLines": "((((CurrentBlackBloodValue - CurrentRemainBlackBloodValue) * UnusedUnderThisBase_318) + CurrentRemainBlackBloodValue) - CurrentEnhanceBlackBloodValue)",
                    "constants": [],
                    "variables": [
                      "CurrentBlackBloodValue",
                      "CurrentRemainBlackBloodValue",
                      "UnusedUnderThisBase_318",
                      "CurrentEnhanceBlackBloodValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentBlackBloodValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                      "displayLines": "UnusedUnderThisBase_319",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_319"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentBlackBloodValue",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_319) || RETURN",
                        "displayLines": "UnusedUnderThisBase_319",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_319"
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"241895029\">Monster_W4_HearsePart_BlackBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Conquered Eon</span>]",
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] (CurrentBlackBloodValue) || RETURN",
                      "displayLines": "CurrentBlackBloodValue",
                      "constants": [],
                      "variables": [
                        "CurrentBlackBloodValue"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
              "variableName": "MDF_KillByHearse",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "types": [
                      "LargeAvatar"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "types": [
                      "LargeAvatar"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "types": [
                      "LargeAvatar"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}.[[removeMemosprite]]"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "types": [
                      "LargeAvatar"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nikador: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          "ifTargetFound": [
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "KeepOnFirst"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "BeforeCaster"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "Last"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "KeepOnLast"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "KeepOnFirst"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "BeforeCaster"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "KeepOnFirst"
                },
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "KeepOnFirst"
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
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
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
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "SoulHPRatio",
              "value": {
                "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                "displayLines": "{[Skill01[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[0]]}"
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
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014022,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014022,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                        "isBaseCompare": true
                      }
                    ]
                  },
                  {
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
                        "ID": 4014023,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mydeimos, Lance of Fury",
                        "isBaseCompare": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-855334554\">Monster_W4_HearsePart_Part2HP</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1382334396\">Monster_W4_HearsePart_BlackBlood</a>[<span class=\"descriptionNumberColor\">Conquered</span>]",
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(Left to Right)}}"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              }
            ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(Left to Right)}}"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              }
            ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(Left to Right)}}"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              }
            ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(Left to Right)}}"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              }
            ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
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
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 2
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1150362687\">Monster_W4_HearsePart_AddPassive</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014023,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Mydeimos, Lance of Fury",
            "isBaseCompare": true,
            "invertCondition": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player & Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Tutorial_Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Tutorial_Flag",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(Right to Left)}}"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-516776989\">Monster_W4_Hearse_ForceAutoLock</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>"
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
    "4014020_Monster_W4_Hearse_Ability01_Part01": {
      "fileName": "4014020_Monster_W4_Hearse_Ability01_Part01",
      "childAbilityList": [
        "4014020_Monster_W4_Hearse_Ability01_Camera",
        "4014020_Monster_W4_Hearse_Ability01_Part01",
        "4014020_Monster_W4_Hearse_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Hearse_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Born_Part02": {
      "fileName": "4014020_Monster_W4_Hearse_Born_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4014020_Monster_W4_Hearse_Passive01": {
      "fileName": "4014020_Monster_W4_Hearse_Passive01",
      "skillTrigger": "Passive01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401402020,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014023,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Mydeimos, Lance of Fury",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-191666641\">Monster_W4_Hearse_FullPhase1</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1810020186\">Monster_W4_Hearse_Part2Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"276604905\">Monster_W4_Hearse_Passive</a>",
              "variableName": "MDF_TurnCount",
              "value": 2
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
          "modifier": "<a class=\"gModGreen\" id=\"-1753098254\">W4_Hearse_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1769875873\">W4_Hearse_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276604905\">Monster_W4_Hearse_Passive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014022,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
            "isBaseCompare": true
          },
          "passed": [
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
              "variableName": "Nikadory_Speed"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "variableName": "Nikadory_Speed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1169900751\">Monster_W4_Hearse_SetSpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] (Nikadory_Speed) || Constants[0] (0) || MUL || RETURN",
                  "displayLines": "(Nikadory_Speed * 0)",
                  "constants": [
                    0
                  ],
                  "variables": [
                    "Nikadory_Speed"
                  ]
                }
              }
            },
            {
              "name": "Create AV Link",
              "from": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "linkOrder": 1,
              "isStart": true
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              }
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID0",
                  "summonLocation": "AfterCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1746079700\">Monster_W4_Hearse_EffectPrepare</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"126121466\">Monster_W4_Hearse_LeaveTeam</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014023,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Mydeimos, Lance of Fury",
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
              "modifier": "<a class=\"gModGreen\" id=\"-580159473\">Monster_W4_Hearse_PartController</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-51927245\">Enemy_Fuyan_Unselectable</a>"
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
    "4014020_Monster_W4_Hearse_PassiveAbility_BGM": {
      "fileName": "4014020_Monster_W4_Hearse_PassiveAbility_BGM",
      "childAbilityList": [
        "4014020_Monster_W4_Hearse_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1447120194\">Enemy_W4_Hearse_ResetStageBGM</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1447120194\">Enemy_W4_Hearse_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave: Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
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
        }
      ]
    },
    "4014020_Modifiers": {
      "fileName": "4014020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1769875873\">W4_Hearse_BattleScore2</a>",
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
                  "variableName": "Hearse_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "The Conqueror King",
                          "desc": "After The Giver, Master of Legions, Lance of Fury uses \"The Vanquished Behold Woe,\" destroy all Conquer or Be Conquered with the same character",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1753098254\">W4_Hearse_BattleScore1</a>",
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
                  "variableName": "Hearse_BattleScore1_Flag"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1663613862\">Monster_W4_Hearse_BattleScore1Count</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Shattered Battleground",
                          "desc": "When facing The Giver, Master of Legions, Lance of Fury, cause the \"The Fallen Feeds My Might\" to fail to absorb \"Conquer or Be Conquered\"",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-191666641\">Monster_W4_Hearse_FullPhase1</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516776989\">Monster_W4_Hearse_ForceAutoLock</a>",
          "modifierFlags": [
            "TauntForAutoLock"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
            "Tutorial_Flag",
            "MDF_KillByHearse"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__126121466\">Monster_W4_Hearse_LeaveTeam</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-18449095\">Monster_W4_Hearse_BattleScore2Count</a>",
          "stackType": "Replace",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1663613862\">Monster_W4_Hearse_BattleScore1Count</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-672192540\">Monster_W4_Hearse_Ability03_Prepare</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Defence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
                      "value": "(0 - MDF_Defence)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2062180239\">Monster_W4_Hearse_ActionDelay</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(MDF_ActionDelayRatio / 2)",
                  "isStartingDelay": true
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1170733797\">Monster_W4_Hearse_ChangeDelay</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1169900751\">Monster_W4_Hearse_SetSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Speed) || Variables[1] (MDF_CurrentSpeed) || SUB || RETURN",
                    "displayLines": "(MDF_Speed - MDF_CurrentSpeed)",
                    "constants": [],
                    "variables": [
                      "MDF_Speed",
                      "MDF_CurrentSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Speed"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__191148502\">Monster_W4_Hearse_LockHPNikadory</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2003197831\">Monster_W4_Hearse_ChargeEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1816428122\">Monster_W4_Hearse_Part2ExtraEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1810020186\">Monster_W4_Hearse_Part2Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1296909781\">Monster_W4_Hearse_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1746079700\">Monster_W4_Hearse_EffectPrepare</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1591064655\">Monster_W4_Hearse_StartEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1952846644\">Monster_W4_Hearse_Ability04_PositionMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
          "stackData": [],
          "latentQueue": [
            "Tutorial_Flag",
            "MDF_KillByHearse"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-580159473\">Monster_W4_Hearse_PartController</a>",
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-818020607\">Monster_W4_Nikadory_AddShield</a>",
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                              "variableName": "MDF_KillByHearse",
                              "value": 1
                            },
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
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Hearse_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                    "isBaseCompare": true
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
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
                            "value1": "InsertCheck",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
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
                              "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                            },
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-818020607\">Monster_W4_Nikadory_AddShield</a>",
                              "casterAssign": "TargetSelf"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertCheck"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 2
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Modifier-Specific Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                                  "variableName": "MDF_KillByHearse",
                                  "value": 1
                                },
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
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_Hearse_PassiveAbility_Insert",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1871536192\">Monster_W4_Hearse_Sign_Enhance</a>[<span class=\"descriptionNumberColor\">Drowning in Terror</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] (MDF_ConfineChance) || RETURN",
                    "displayLines": "MDF_ConfineChance",
                    "constants": [],
                    "variables": [
                      "MDF_ConfineChance"
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                      "displayLines": "{[Skill03[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill03[2]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageTakenUpRatio",
            "MDF_ConfineChance"
          ],
          "latentQueue": [],
          "description": "Increases received damage by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>. When receiving attacks, there is a chance to be inflicted with Imprisonment. Defeat the corresponding \"Conquer or Be Conquered\" to dispel this effect.",
          "type": "Other",
          "effectName": "Drowning in Terror",
          "statusName": "Drowning in Terror"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__770051597\">Monster_W4_Hearse_Sign</a>[<span class=\"descriptionNumberColor\">Strife-Granted Fear</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageTakenUpRatio"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>. This effect can be dispelled by defeating the \"Conquer or Be Conquered\" corresponding to this unit.",
          "type": "Other",
          "effectName": "Fear",
          "statusName": "Strife-Granted Fear"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-689985018\">Monster_W4_Hearse_ActionBarHint</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1584202078\">Monster_W4_Hearse_Action</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W4_Hearse_00"
                },
                {
                  "name": "Create AV Link",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "linkOrder": 1,
                  "isStart": true
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__276604905\">Monster_W4_Hearse_Passive</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W4_Hearse_00",
                  "state": false
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Nikador: Self}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_TurnCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TurnCount",
                              "value": 0
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "AIFlag",
                                "compareType": "=",
                                "value2": 3
                              }
                            },
                            {
                              "name": "Set Action-State",
                              "on": null,
                              "stateName": "W4_Hearse_00"
                            },
                            {
                              "name": "Create AV Link",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "linkOrder": 1,
                              "isStart": true
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TurnCount",
                              "value": 1
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Phase2First",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Phase2First",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Set Action-State",
                              "on": null,
                              "stateName": "W4_Hearse_00"
                            },
                            {
                              "name": "Create AV Link",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Nikador: Self}}"
                              },
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "linkOrder": 1,
                              "isStart": true
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014022,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014022,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                        "isBaseCompare": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1
                      },
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
                        "ID": 4014023,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Mydeimos, Lance of Fury",
                        "isBaseCompare": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnCount",
                      "value": 0
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
                    "name": "Enemy ID",
                    "ID": 401401,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "variableName": "MDF_Speed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1169900751\">Monster_W4_Hearse_SetSpeed</a>",
                      "valuePerStack": {
                        "MDF_Speed": {
                          "operator": "Variables[0] (MDF_Speed) || Constants[0] (0) || MUL || RETURN",
                          "displayLines": "(MDF_Speed * 0)",
                          "constants": [
                            0
                          ],
                          "variables": [
                            "MDF_Speed"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Create AV Link",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "linkOrder": 1,
                      "isStart": true
                    },
                    {
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                      "variableName": "MDF_KillByHearse",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
                    },
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
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1275245570\">Monster_W4_Hearse_InChangePhase</a>",
                    "invertCondition": true
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_TurnCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 0
                        },
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "W4_Hearse_00"
                        },
                        {
                          "name": "Create AV Link",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "linkOrder": 1,
                          "isStart": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2010268595\">Monster_W4_Hearse_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1275245570\">Monster_W4_Hearse_InChangePhase</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_KillByHearse"
          ],
          "description": "Each stack increases DMG dealt for the next attack.",
          "type": "Buff",
          "effectName": "Valiance",
          "statusName": "Strife-Granted Valiance",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-677273932\">Monster_W4_Hearse_Weak</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1470468731\">Monster_W4_Hearse_AlreadyAdd</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "characterName": "Mydeimos, Lance of Fury",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1774231954\">Monster_W4_HearsePart_Soul</a>[<span class=\"descriptionNumberColor\">Conquer</span>]",
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio": {
                          "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                          "displayLines": "MDF_DamageTakenUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageTakenUpRatio"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"323182003\">Monster_W4_HearsePart_Soul_B</a>[<span class=\"descriptionNumberColor\">Conquer</span>]",
                      "valuePerStack": {
                        "MDF_DamageTakenUpRatio": {
                          "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                          "displayLines": "MDF_DamageTakenUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageTakenUpRatio"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117590533\">Monster_W4_Hearse_Born</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Monster_W4_Hearse_Born_Part02",
                  "isTrigger": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 9004113,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        }
      ],
      "references": []
    }
  }
}