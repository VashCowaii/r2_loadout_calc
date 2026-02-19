const configAbility = {
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
  "references": []
}