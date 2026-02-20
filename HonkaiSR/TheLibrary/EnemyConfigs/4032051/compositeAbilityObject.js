const compositeAbilityObject = {
  "fullCharacterName": 4032051,
  "trimCharacterName": 4032051,
  "abilityList": [
    "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
    "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01",
    "4032051_Monster_W4_Shooter_01_LocalLegend02_AbilityP01",
    "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part02",
    "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part01",
    "4032051_Monster_W4_Shooter_01_LocalLegend_AbilityP01"
  ],
  "abilityObject": {
    "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "MMonster_W4_Claymore_01_LocalLegend_BlackCurse_Target"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
              "displayLines": "UnusedUnderThisBase_391",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_391"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
              "displayLines": "UnusedUnderThisBase_392",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_392"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
              "displayLines": "UnusedUnderThisBase_393",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_393"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
              "displayLines": "UnusedUnderThisBase_394",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_394"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "MMonster_W4_Claymore_01_LocalLegend_BlackCurse_Target"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4032051_Monster_W4_Shooter_01_LocalLegend02_AbilityP01": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend02_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276019182\">Enemy_W4_Shooter_01_ConfineHit_Controller</a>"
        }
      ],
      "references": []
    },
    "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part02": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part01": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4032051_Monster_W4_Shooter_01_Ability01_Camera",
        "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part01",
        "4032051_Monster_W4_Shooter_01_LocalLegend_Ability01_Part02"
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
          "ability": "Monster_W4_Shooter_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4032051_Monster_W4_Shooter_01_LocalLegend_AbilityP01": {
      "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-316091717\">Enemy_W4_Shooter_01_LocalLegend_AbilityP01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276019182\">Enemy_W4_Shooter_01_ConfineHit_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-316091717\">Enemy_W4_Shooter_01_LocalLegend_AbilityP01</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_IsNegative"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_NegativeHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_IsNegative",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_IsNegative",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_AML_Minion02_01_LocalLegend_NagetiveBlood_Enter",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterReviveSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
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
  }
}