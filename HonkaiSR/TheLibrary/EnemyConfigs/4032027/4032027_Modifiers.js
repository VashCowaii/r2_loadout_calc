const configAbility = {
  "fileName": "4032027_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__527560256\">Enemy_W4_Phainon_Part3</a>[<span class=\"descriptionNumberColor\">May You Become The First Blazing Sun</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_InitDelay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DV_InitDelay",
                  "value": "ParamValue2"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "DV_CurrentDelay",
              "value": "ParamValue2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_CurrentDelay",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || Variables[1] (DV_InitDelay) || ADD || RETURN",
                  "displayLines": "(ENEMIES_OBJECT_UNUSED__178 + DV_InitDelay)",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__178",
                    "DV_InitDelay"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": 0.34
                }
              ]
            }
          ]
        }
      ],
      "description": "Khaslana awaits the break of dawn.",
      "type": "Other",
      "statusName": "May You Become The First Blazing Sun"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_InitDelay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DV_InitDelay",
                  "value": "ParamValue2"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "DV_CurrentDelay",
              "value": "ParamValue2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_CurrentDelay",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || Variables[1] (DV_InitDelay) || ADD || RETURN",
                  "displayLines": "(ENEMIES_OBJECT_UNUSED__178 + DV_InitDelay)",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__178",
                    "DV_InitDelay"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": 0.34
                }
              ]
            }
          ]
        }
      ],
      "description": "Khaslana looks forward to saving the world with you.",
      "type": "Other",
      "statusName": "May You Dispel the Sky's Gloom"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__561115494\">Enemy_W4_Phainon_Part1</a>[<span class=\"descriptionNumberColor\">May You End the Evernight</span>]",
      "execute": [
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "DV_CurrentDelay",
              "value": "ParamValue2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_CurrentDelay",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__178) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__178",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__178"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": 0.34
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Khaslana awaits your return.",
      "type": "Other",
      "statusName": "May You End the Evernight"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2021392801\">Enemy_W4_FireProwler_01_Main_Status</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__531265069\">Enemy_W4_Phainon_LockHp_03</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_LockHp03",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__514487450\">Enemy_W4_Phainon_LockHp_02</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"527560256\">Enemy_W4_Phainon_Part3</a>[<span class=\"descriptionNumberColor\">May You Become The First Blazing Sun</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.334
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_LockHp02",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_LockHp02",
                  "value": 0
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Phainon_BattlePerform2",
                  "priorityTag": "PROG_MonsterLowest",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__497709831\">Enemy_W4_Phainon_LockHp_01</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"544337875\">Enemy_W4_Phainon_Part2</a>[<span class=\"descriptionNumberColor\">May You Dispel the Sky's Gloom</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"561115494\">Enemy_W4_Phainon_Part1</a>[<span class=\"descriptionNumberColor\">May You End the Evernight</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.667
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_LockHp01",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_LockHp01",
                  "value": 0
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Phainon_BattlePerform1",
                  "priorityTag": "PROG_MonsterLowest",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__1700303456\">Enemy_W4_Phainon_ShowBattleCondition</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1700303456\">Enemy_W4_Phainon_ShowBattleCondition</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_LockHp03",
        "MDF_CurrentSP"
      ]
    }
  ],
  "references": []
}