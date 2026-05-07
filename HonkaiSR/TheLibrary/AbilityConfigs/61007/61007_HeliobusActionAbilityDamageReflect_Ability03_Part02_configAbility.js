const configAbility = {
  "fileName": "61007_HeliobusActionAbilityDamageReflect_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Amulet: Altar Aegis"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>[<span class=\"descriptionNumberColor\">Altar Aegis</span>]",
      "counter": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      },
      "duration": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      },
      "valuePerStack": {
        "DamagePercent": {
          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
          "displayLines": "#BattleEvent_P3_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P3_ADF"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>[<span class=\"descriptionNumberColor\">Altar Aegis</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "BlockDamage"
      ],
      "stackData": [
        "DamagePercent"
      ],
      "description": "Provides immunity to all damage. When hit by an attack, deal Ice DMG equal to <span class=\"descriptionNumberColor\">DamagePercent</span> of this unit's DEF to the attacker. This DMG cannot CRIT hit and cannot defeat the enemy. Every time this unit is attacked, 1 stack will be reduced.",
      "type": "Buff",
      "effectName": "Altar Aegis",
      "statusName": "Altar Aegis",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HitFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Defence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": -2
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageFlat": {
                      "operator": "Variables[0] (_Defence) || Variables[1] (DamagePercent) || MUL || RETURN",
                      "displayLines": "(_Defence * DamagePercent)",
                      "constants": [],
                      "variables": [
                        "_Defence",
                        "DamagePercent"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": 2
                },
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>[<span class=\"descriptionNumberColor\">Altar Aegis</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>[<span class=\"descriptionNumberColor\">Altar Aegis</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1003203034\">Modifier_HeliobusActionAbilityDamageReflect</a>[<span class=\"descriptionNumberColor\">Altar Aegis</span>]",
                          "function": "Add"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "HitFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitFlag",
              "value": 0
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  }
}