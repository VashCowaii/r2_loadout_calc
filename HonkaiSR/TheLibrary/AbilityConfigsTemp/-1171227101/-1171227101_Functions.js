const configAbility = {
  "fileName": "-1171227101_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 51,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__542143301\">Monster_ChangePhase</a>",
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChangePhase_MaxHPValue"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ChangePhase_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setPercent": 1
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Toughness Value",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2049832737\">Enemy_Standard_ChangephaseMark</a>"
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}.[[livingOrLimbo]]"
          },
          "variableName": null,
          "eventType": "MonsterChangePhaseTrigger",
          "value": null
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2049832737\">Enemy_Standard_ChangephaseMark</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1902031976\">Monster_ChangePhase_ParamEntity</a>",
      "parse": [
        {
          "name": "Exit Broken-State",
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
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2098369310\">Wave_StandardPreProcess</a>",
      "parse": [
        {
          "name": "Call Parameter Sequence",
          "parameterName": "WaveSwitchBGM"
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Group has Dying Target",
            "entityType": "Team Characters",
            "team": "Enemy Team",
            "invertCondition": true
          }
        },
        {
          "name": "FAILURE IF",
          "conditions": {
            "name": "Battle is Over"
          }
        },
        "Apply Binding Stage Buff",
        {
          "name": "Enemy Wave Instance",
          "banPassive": true
        },
        {
          "name": "Trigger: Passive Abilities",
          "team": "Enemy Team"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "NeedShowNextWaveDialog",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-50656795\">Wave_StandardProcess</a>",
      "parse": [
        "Apply Binding Stage Buff",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"505671569\">TaskList_WaveMonsterDelayCreate</a>"
        },
        "Trigger: Enter Battle",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2020088159\">Wave_ShowRoleTrialPage</a>"
        },
        {
          "name": "Check Enemy Team Killed",
          "forWaveEnd": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Wave Count",
            "compareType": "=",
            "compareWithMax": true
          },
          "failed": [
            {
              "name": "Call Parameter Sequence",
              "parameterName": "TriggerNextWave"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__505671569\">TaskList_WaveMonsterDelayCreate</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Enemy On-Wave",
            "timing": "DelayCreate",
            "afterWave": true
          },
          "passed": [
            {
              "name": "Enemy Wave Instance",
              "timing": "DelayCreate"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1934732519\">CameraTaskList_Puman_DelayCreate</a>",
      "parse": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "_Puman_Create",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__485608192\">StanceBreak_Physical</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Define Custom Variable with Base Break Damage",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterBreakBaseDamage"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1797970053\">Standard_Element_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_EliteRatio": 0.07,
            "MDF_StandardRatio": 0.16,
            "MDF_DamageMax": {
              "operator": "Variables[0] (CasterBreakBaseDamage) || Constants[0] (2) || MUL || Constants[0] (2) || Variables[1] (TargetStance) || Variables[2] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
              "displayLines": "(((CasterBreakBaseDamage * 2) * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "CasterBreakBaseDamage",
                "TargetStance",
                "StanceUnit"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
              "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-687043424\">StanceBreak_Ice</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-130814791\">Standard_Element_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": 1,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_DamagePercentage": 1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageBreak": {
              "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__483030905\">StanceBreak_Fire</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1852685234\">Standard_Element_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": 2,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_DamagePercentage": 1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
              "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1573629529\">StanceBreak_Wind</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": 2,
              "baseChance": 1.5,
              "valuePerStack": {
                "MDF_DamagePercentage": 1
              },
              "addStacksPerTrigger": 3
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": 2,
              "baseChance": 1.5,
              "valuePerStack": {
                "MDF_DamagePercentage": 1
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageBreak": {
              "operator": "Constants[0] (1.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1796036529\">StanceBreak_Thunder</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1979618180\">Standard_Element_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": 2,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_DamagePercentage": 2
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "DamageBreak": {
              "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-433289498\">StanceBreak_Imaginary</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-838929203\">Standard_Element_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_ActionDelayRatio": 0.3,
            "MDF_SpeedDownRatio": 0.1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageBreak": {
              "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                0.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__789833122\">StanceBreak_Quantum</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "duration": 1,
          "baseChance": 1.5,
          "valuePerStack": {
            "MDF_ActionDelayRatio": 0.2,
            "MDF_DamagePercentage": {
              "operator": "Constants[0] (0.6) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((0.6 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                0.6,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageBreak": {
              "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                0.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1088674520\">StanceCountDown_Physical</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
              "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-184331160\">StanceCountDown_Ice</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageBreak": {
              "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1895171535\">StanceCountDown_Fire</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
              "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1032587311\">StanceCountDown_Wind</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageBreak": {
              "operator": "Constants[0] (1.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__983067753\">StanceCountDown_Thunder</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "DamageBreak": {
              "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1968828018\">StanceCountDown_Imaginary</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageBreak": {
              "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                0.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1123715482\">StanceCountDown_Quantum</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageBreak": {
              "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                0.5,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-112239810\">MLevel_BoxingClubResonance_Fire_ExplodeTask</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331212938\">MLevel_BoxingClubResonance_Fire_10_Debuff</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "ExplodeLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"1331212938\">MLevel_BoxingClubResonance_Fire_10_Debuff</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
              "multiplier": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ExplodeLayer",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Variables[0] (TEMP_OBJECT_UNUSED_8) || Variables[1] (ExplodeLayer) || MUL || ADD || Constants[0] (2) || MUL || Constants[0] (2) || Variables[2] (TargetStance) || Variables[3] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || Variables[4] (TEMP_OBJECT_UNUSED_7) || MUL || RETURN",
              "displayLines": "(((((2 + (TEMP_OBJECT_UNUSED_8 * ExplodeLayer)) * 2) * (2 + (TargetStance / StanceUnit))) / 4) * TEMP_OBJECT_UNUSED_7)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TEMP_OBJECT_UNUSED_8",
                "ExplodeLayer",
                "TargetStance",
                "StanceUnit",
                "TEMP_OBJECT_UNUSED_7"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageBreak": {
              "operator": "Constants[0] (2) || Variables[0] (TEMP_OBJECT_UNUSED_8) || Variables[1] (ExplodeLayer) || MUL || ADD || Constants[0] (2) || MUL || Constants[0] (2) || Variables[2] (TargetStance) || Variables[3] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || Variables[4] (TEMP_OBJECT_UNUSED_7) || MUL || RETURN",
              "displayLines": "(((((2 + (TEMP_OBJECT_UNUSED_8 * ExplodeLayer)) * 2) * (2 + (TargetStance / StanceUnit))) / 4) * TEMP_OBJECT_UNUSED_7)",
              "constants": [
                2,
                4
              ],
              "variables": [
                "TEMP_OBJECT_UNUSED_8",
                "ExplodeLayer",
                "TargetStance",
                "StanceUnit",
                "TEMP_OBJECT_UNUSED_7"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-664267055\">MLevel_BoxingClubResonance_Fire_ExtraDamage</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageFlat": {
              "operator": "Variables[0] (ExplodBaseDamage) || Constants[0] (1) || Variables[1] (TEMP_OBJECT_UNUSED_7) || ADD || MUL || RETURN",
              "displayLines": "(ExplodBaseDamage * (1 + TEMP_OBJECT_UNUSED_7))",
              "constants": [
                1
              ],
              "variables": [
                "ExplodBaseDamage",
                "TEMP_OBJECT_UNUSED_7"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1004297140\">MLevel_BoxingClubResonance_Ice_ExtraDamage</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageFlat": {
              "operator": "Variables[0] (ExplodBaseDamage) || Constants[0] (1) || Variables[1] (TEMP_OBJECT_UNUSED_7) || ADD || MUL || RETURN",
              "displayLines": "(ExplodBaseDamage * (1 + TEMP_OBJECT_UNUSED_7))",
              "constants": [
                1
              ],
              "variables": [
                "ExplodBaseDamage",
                "TEMP_OBJECT_UNUSED_7"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-394635175\">MLevel_BoxingClubResonance_Thunder_ExtraDamage</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "DamageFlat": {
              "operator": "Variables[0] (ExplodBaseDamage) || RETURN",
              "displayLines": "ExplodBaseDamage",
              "constants": [],
              "variables": [
                "ExplodBaseDamage"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1638970024\">MLevel_BoxingClubResonance_Ice_OneMoreBreakTask</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TargetStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageBreak": {
              "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
              "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
              "constants": [
                1,
                2,
                4
              ],
              "variables": [
                "TargetStance",
                "StanceUnit"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__533043980\">Monster_FormChange</a>",
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "inheritAllProperties": true,
          "useType": "FormChange",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                "displayLines": "Summon_MonsterIDKey",
                "constants": [],
                "variables": [
                  "Summon_MonsterIDKey"
                ]
              },
              "locationType": "FormationRecord"
            }
          ]
        },
        {
          "name": "Copy Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "source": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "autoRemoveFromSource": true
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1466558420\">PursuedDamage_PerformanceDelay</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}.[[living]]"
          },
          "scope": "TargetEntity",
          "variableName": "MDF_PerformanceDelay"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Active: Fast-Forward Animations"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is in Timeline Execution",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)}}.[[living]]"
                          },
                          "variableName": "MDF_PerformanceDelay",
                          "value": 0.3
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)}}.[[living]]"
                          },
                          "variableName": "MDF_PerformanceDelay",
                          "value": 0.2
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is in Timeline Execution",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)}}.[[living]]"
                          },
                          "variableName": "MDF_PerformanceDelay",
                          "value": 0.5
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)}}.[[living]]"
                          },
                          "variableName": "MDF_PerformanceDelay",
                          "value": 0.3
                        }
                      ]
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2024963643\">PursuedDamage_PerformanceDelay_ForSnapshotEntity</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "ContextModifier",
          "variableName": "MDF_PerformanceDelay"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.2
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.3
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-446302809\">ModifyDamageData_IndependentDamageAddedRatio</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Converted DMG",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_OriginalDamagePercentage"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_OriginalDamageValue"
            },
            {
              "name": "Define Custom Variable with Damage Data",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_OriginalDamagePercentage",
              "value": "AttackData_RawDamagePercentage",
              "context": "ContextModifier"
            },
            {
              "name": "Define Custom Variable with Damage Data",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_OriginalDamageValue",
              "value": "AttackData_RawDamageValue",
              "context": "ContextModifier"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "AttackData",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Damage%Total</span>&nbsp;",
                  "value": "(MDF_OriginalDamagePercentage * parameter[0]_IndependentDamageAddedRatio)"
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "AttackData",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DMGValueTotal</span>&nbsp;",
                  "value": "(MDF_OriginalDamageValue * parameter[0]_IndependentDamageAddedRatio)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__247970287\">Bounce_SelectTarget</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "conditions": {
                  "name": "Living State",
                  "state": "Mask_AliveOnly",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Call Parameter Sequence",
              "parameterName": "ParamTaskList"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__958478851\">Silwolf_Ability02_OverrideNameForStatus</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-719977260\">Silwolf_BPAbility_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1099669275\">Silwolf_BPAbility_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"110873612\">Silwolf_BPAbility_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Extra Ice Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 8
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"954284461\">Silwolf_BPAbility_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Extra Lightning Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 16
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1411533355\">Silwolf_BPAbility_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Extra Wind Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 32
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-69851026\">Silwolf_BPAbility_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Extra Quantum Weakness</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DF_WeakType",
            "compareType": "=",
            "value2": 64
          },
          "passed": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-780191838\">Silwolf_BPAbility_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Extra Imaginary Weakness</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__538840476\">VS_VAR_AllTargetCount</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "_TargetNum"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "_TargetNum",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1318721654\">VS_VAR_HitTargetCount</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "_TargetNum"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Projectile's Target}}"
          },
          "variableName": "_TargetNum",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_TargetNum",
          "context": "ContextAbility",
          "value": 1,
          "max": 5
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1453468479\">VS_VAR_AttackTargetCount</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "_TargetNum"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Parameter Target}}"
          },
          "variableName": "_TargetNum",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_TargetNum",
          "context": "ContextAbility",
          "value": 1,
          "max": 5
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1595800368\">VS_VAR_ModifierTargetCount</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "ContextAbility",
          "variableName": "_TargetNum"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
          },
          "variableName": "_TargetNum",
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "_TargetNum",
          "context": "ContextAbility",
          "value": 1,
          "max": 5
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__664881127\">VS_PFM_CameraShakeSmall</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1980798041\">VS_PFM_CameraShakeFireBall</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-612430370\">VS_PFM_CameraShakeBig</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-822738563\">VS_PFM_CameraDarkTeamNear</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-869958192\">VS_PFM_CameraDarkTeamFar</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1630420963\">VS_PFM_CameraDarkEntityNear</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1760920045\">VS_PFM_CameraLightTeamNear</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-537679168\">ReduceActionDelay</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "ifTargetFound": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn's Action Phase is Over"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - parameter[0]_NormalizedValue)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Constants[0] (0) || Variables[0] (parameter[0]_NormalizedValue) || SUB || RETURN",
                        "displayLines": "(0 - parameter[0]_NormalizedValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "parameter[0]_NormalizedValue"
                        ]
                      },
                      "adjustmentType": "Advance"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - parameter[0]_NormalizedValue)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1527090005\">ReduceNextActionDelay</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "ifTargetFound": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Extra-Turn"
                      },
                      {
                        "name": "Is Extra-Turn",
                        "actionType": "UltraSkill"
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
                      "modifier": "<a class=\"gModGreen\" id=\"564198756\">Standard_ModifyActionDelayOnTurnEnd</a>",
                      "valuePerStack": {
                        "MDF_DelayCost": {
                          "operator": "Variables[0] (parameter[0]_NormalizedValue) || RETURN",
                          "displayLines": "parameter[0]_NormalizedValue",
                          "constants": [],
                          "variables": [
                            "parameter[0]_NormalizedValue"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn's Action Phase is Over"
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - parameter[0]_NormalizedValue)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Constants[0] (0) || Variables[0] (parameter[0]_NormalizedValue) || SUB || RETURN",
                            "displayLines": "(0 - parameter[0]_NormalizedValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "parameter[0]_NormalizedValue"
                            ]
                          },
                          "adjustmentType": "Advance"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - parameter[0]_NormalizedValue)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__795502164\">DealSuperBreakDamage</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_TotalStanceDamageOnTarget"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "StanceValue",
                "compareType": "<",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-175400695\">MStageAbility_BattleCommonRule_SuperBreak_SubOnEnemy</a>",
                  "variable": "MDF_TotalStanceDamage",
                  "target2": null,
                  "variable2": "TDF_TotalStanceDamageOnTarget",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_TotalStanceDamageOnTarget",
                  "value": {
                    "operator": "Variables[0] (TDF_TotalStanceDamageOnTarget) || RETURN",
                    "displayLines": "TDF_TotalStanceDamageOnTarget",
                    "constants": [],
                    "variables": [
                      "TDF_TotalStanceDamageOnTarget"
                    ]
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
                  "target": "{{Modifier Holder}}"
                },
                "value1": "TDF_TotalStanceDamageOnTarget",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageBreak": {
                      "operator": "Variables[0] (DamagePercentage) || Variables[1] (StanceValue) || Constants[0] (30) || DIV || MUL || RETURN",
                      "displayLines": "(DamagePercentage * (StanceValue / 30))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "DamagePercentage",
                        "StanceValue"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__932403897\">BeingDealSuperBreakDamage</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            }
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_TotalStanceDamageOnTarget"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "StanceValue",
                "compareType": "<",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-175400695\">MStageAbility_BattleCommonRule_SuperBreak_SubOnEnemy</a>",
                  "variable": "MDF_TotalStanceDamage",
                  "target2": null,
                  "variable2": "TDF_TotalStanceDamageOnTarget",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_TotalStanceDamageOnTarget",
                  "value": {
                    "operator": "Variables[0] (TDF_TotalStanceDamageOnTarget) || RETURN",
                    "displayLines": "TDF_TotalStanceDamageOnTarget",
                    "constants": [],
                    "variables": [
                      "TDF_TotalStanceDamageOnTarget"
                    ]
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
                  "target": "{{Modifier Holder}}"
                },
                "value1": "TDF_TotalStanceDamageOnTarget",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    "DamageBreak": {
                      "operator": "Variables[0] (DamagePercentage) || Variables[1] (StanceValue) || Constants[0] (30) || DIV || MUL || RETURN",
                      "displayLines": "(DamagePercentage * (StanceValue / 30))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "DamagePercentage",
                        "StanceValue"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_TotalStanceDamageOnTarget"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "BreakDamagePercentage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "StanceValue",
                "compareType": "<",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-175400695\">MStageAbility_BattleCommonRule_SuperBreak_SubOnEnemy</a>",
                  "variable": "MDF_TotalStanceDamage",
                  "target2": null,
                  "variable2": "TDF_TotalStanceDamageOnTarget",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_TotalStanceDamageOnTarget",
                  "value": {
                    "operator": "Variables[0] (TDF_TotalStanceDamageOnTarget) || RETURN",
                    "displayLines": "TDF_TotalStanceDamageOnTarget",
                    "constants": [],
                    "variables": [
                      "TDF_TotalStanceDamageOnTarget"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BreakDamagePercentage",
              "value": {
                "operator": "Variables[0] (DamagePercentage) || Variables[1] (StanceValue) || Constants[0] (30) || DIV || MUL || RETURN",
                "displayLines": "(DamagePercentage * (StanceValue / 30))",
                "constants": [
                  30
                ],
                "variables": [
                  "DamagePercentage",
                  "StanceValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "TDF_TotalStanceDamageOnTarget",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Call Parameter Sequence",
                  "parameterName": "DamagePerformance"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1682373485\">BeingDealSuperBreakDamage_DamagePerformance</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            }
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_TotalStanceDamageOnTarget"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "BreakDamagePercentage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "StanceValue",
                "compareType": "<",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-175400695\">MStageAbility_BattleCommonRule_SuperBreak_SubOnEnemy</a>",
                  "variable": "MDF_TotalStanceDamage",
                  "target2": null,
                  "variable2": "TDF_TotalStanceDamageOnTarget",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_TotalStanceDamageOnTarget",
                  "value": {
                    "operator": "Variables[0] (TDF_TotalStanceDamageOnTarget) || RETURN",
                    "displayLines": "TDF_TotalStanceDamageOnTarget",
                    "constants": [],
                    "variables": [
                      "TDF_TotalStanceDamageOnTarget"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BreakDamagePercentage",
              "value": {
                "operator": "Variables[0] (DamagePercentage) || Variables[1] (StanceValue) || Constants[0] (30) || DIV || MUL || RETURN",
                "displayLines": "(DamagePercentage * (StanceValue / 30))",
                "constants": [
                  30
                ],
                "variables": [
                  "DamagePercentage",
                  "StanceValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "TDF_TotalStanceDamageOnTarget",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Call Parameter Sequence",
                  "parameterName": "DamagePerformance"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__101547145\">Elation_StartElationTime</a>",
      "dynamicStringsArray": [
        {
          "name": "TryStartElationTime_CustomTag",
          "value": "-1"
        }
      ],
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 70001,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "valuePerStack": {
                "ElationTime_OverrideElationPointTemp": {
                  "operator": "Variables[0] (TryStartElationTime_OverrideElationPoint) || RETURN",
                  "displayLines": "TryStartElationTime_OverrideElationPoint",
                  "constants": [],
                  "variables": [
                    "TryStartElationTime_OverrideElationPoint"
                  ]
                },
                "ElationTime_IsNoConsumeTemp": {
                  "operator": "Variables[0] (TryStartElationTime_ElationTimeIsNoConsume) || RETURN",
                  "displayLines": "TryStartElationTime_ElationTimeIsNoConsume",
                  "constants": [],
                  "variables": [
                    "TryStartElationTime_ElationTimeIsNoConsume"
                  ]
                }
              },
              "target": {
                "name": "Target Name",
                "target": "Elation_BE"
              },
              "dynamicStringsArray": [
                {
                  "name": "ElationTime_CustomTagTemp",
                  "value": {
                    "Custom": true,
                    "Key": "TryStartElationTime_CustomTag"
                  }
                }
              ],
              "afterInjection": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "Elation_BE"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
                  "valuePerStack": {
                    "MDF_OverrideElationPoint": {
                      "operator": "Variables[0] (TryStartElationTime_OverrideElationPoint) || RETURN",
                      "displayLines": "TryStartElationTime_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "TryStartElationTime_OverrideElationPoint"
                      ]
                    },
                    "MDF_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (TryStartElationTime_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "TryStartElationTime_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "TryStartElationTime_ElationTimeIsNoConsume"
                      ]
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "MDF_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "TryStartElationTime_CustomTag"
                      }
                    }
                  ]
                }
              ],
              "copyAbortFlags": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Battle Event",
              "teamName": "Neutral Team",
              "eventID": 70001,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "statSource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "canDupe": true,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "valuePerStack": {
                    "ElationTime_OverrideElationPointTemp": {
                      "operator": "Variables[0] (TryStartElationTime_OverrideElationPoint) || RETURN",
                      "displayLines": "TryStartElationTime_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "TryStartElationTime_OverrideElationPoint"
                      ]
                    },
                    "ElationTime_IsNoConsumeTemp": {
                      "operator": "Variables[0] (TryStartElationTime_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "TryStartElationTime_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "TryStartElationTime_ElationTimeIsNoConsume"
                      ]
                    }
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "Elation_BE"
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "ElationTime_CustomTagTemp",
                      "value": "TryStartElationTime_CustomTag"
                    }
                  ],
                  "afterInjection": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "Elation_BE"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
                      "valuePerStack": {
                        "MDF_OverrideElationPoint": {
                          "operator": "Variables[0] (TryStartElationTime_OverrideElationPoint) || RETURN",
                          "displayLines": "TryStartElationTime_OverrideElationPoint",
                          "constants": [],
                          "variables": [
                            "TryStartElationTime_OverrideElationPoint"
                          ]
                        },
                        "MDF_ElationTimeIsNoConsume": {
                          "operator": "Variables[0] (TryStartElationTime_ElationTimeIsNoConsume) || RETURN",
                          "displayLines": "TryStartElationTime_ElationTimeIsNoConsume",
                          "constants": [],
                          "variables": [
                            "TryStartElationTime_ElationTimeIsNoConsume"
                          ]
                        }
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "MDF_CustomTag",
                          "value": "TryStartElationTime_CustomTag"
                        }
                      ]
                    }
                  ],
                  "copyAbortFlags": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1187511334\">Standard_MuteSpeed</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1003024550\">Standard_LockActionDelayChange</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1003024550\">Standard_LockActionDelayChange</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1187511334\">Standard_MuteSpeed</a>"
        }
      ]
    }
  ],
  "references": []
}