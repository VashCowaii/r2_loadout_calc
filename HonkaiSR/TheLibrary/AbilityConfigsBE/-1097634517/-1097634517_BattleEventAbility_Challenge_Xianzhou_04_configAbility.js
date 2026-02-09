const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"300975739\">Modifier_BattleEventAbility_Challenge_Xianzhou_04</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1478824350\">Modifier_BattleEventAbility_Challenge_Xianzhou_04_Sub</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Insert_Flag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Insert_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Insert_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                          "displayLines": "MDF_DamageValue",
                          "constants": [],
                          "variables": [
                            "MDF_DamageValue"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__300975739\">Modifier_BattleEventAbility_Challenge_Xianzhou_04</a>",
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
              "variableName": "TempHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1478824350\">Modifier_BattleEventAbility_Challenge_Xianzhou_04_Sub</a>",
              "valuePerStack": {
                "MDF_DamageValue": {
                  "operator": "Variables[0] (TempHP) || Variables[1] (#BattleEvent_P1_ADF) || MUL || RETURN",
                  "displayLines": "(TempHP * #BattleEvent_P1_ADF)",
                  "constants": [],
                  "variables": [
                    "TempHP",
                    "#BattleEvent_P1_ADF"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1478824350\">Modifier_BattleEventAbility_Challenge_Xianzhou_04_Sub</a>",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] (TempHP) || Variables[1] (#BattleEvent_P1_ADF) || MUL || RETURN",
                      "displayLines": "(TempHP * #BattleEvent_P1_ADF)",
                      "constants": [],
                      "variables": [
                        "TempHP",
                        "#BattleEvent_P1_ADF"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
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