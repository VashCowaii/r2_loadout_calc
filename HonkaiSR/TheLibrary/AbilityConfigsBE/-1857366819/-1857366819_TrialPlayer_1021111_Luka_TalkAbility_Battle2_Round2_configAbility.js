const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "MDF_LukaMaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": {
        "operator": "Variables[0] (MDF_LukaMaxHP) || Constants[0] (0.5) || MUL || RETURN",
        "displayLines": "(MDF_LukaMaxHP * 0.5)",
        "constants": [
          0.5
        ],
        "variables": [
          "MDF_LukaMaxHP"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>",
      "valuePerStack": {
        "MDF_AttackRatio": 5
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1091533610\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__887420892\">TrialPlayer_101111_Luka_AddATK_ForMonster</a>",
      "modifierFlags": [
        "Stealth",
        "BlockDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
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
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.41
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 101401010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Svarog"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Ability",
                  "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"887420892\">TrialPlayer_101111_Luka_AddATK_ForMonster</a>"
                }
              ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackRatio) || RETURN",
                "displayLines": "MDF_AttackRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackRatio"
                ]
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 120,
              "isFixed": "(Fixed)"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "set": 0
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_TargetMaxHP2",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "setValue": {
                "operator": "Variables[0] (MDF_TargetMaxHP2) || Constants[0] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_TargetMaxHP2 * 0.3)",
                "constants": [
                  0.3
                ],
                "variables": [
                  "MDF_TargetMaxHP2"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackRatio"
      ],
      "latentQueue": []
    }
  ]
}