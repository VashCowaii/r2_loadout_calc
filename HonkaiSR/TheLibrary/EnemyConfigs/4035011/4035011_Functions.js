const configAbility = {
  "fileName": "4035011_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 9,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1699523791\">W4_IronTombCore_CalWorldErosion</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] (_ErosionParam) || Variables[1] (_WorldErosion) || MUL || Constants[0] (100) || MUL || RETURN",
            "displayLines": "((_ErosionParam * _WorldErosion) * 100)",
            "constants": [
              100
            ],
            "variables": [
              "_ErosionParam",
              "_WorldErosion"
            ]
          },
          "max": 100
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion02",
          "value": {
            "operator": "Variables[0] (_ErosionParam) || Constants[0] (80) || MUL || RETURN",
            "displayLines": "(_ErosionParam * 80)",
            "constants": [
              80
            ],
            "variables": [
              "_ErosionParam"
            ]
          },
          "min": 1,
          "max": 99
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1295613867\">Enemy_W4_IronTombCore_Main_P1_DamageReduceController</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_WorldErosionCtl",
              "value": 0.4
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "variableName": "_WorldErosionCtl",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "variableName": "_LightTeamIgnoreServantCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_LightTeamIgnoreServantCount",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WorldErosionCtl",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "variableName": "_WorldErosionCtl",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_LightTeamIgnoreServantCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WorldErosionCtl",
                      "value": {
                        "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
                        "displayLines": "{[Skill09[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill09[2]]}"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                      },
                      "variableName": "_WorldErosionCtl",
                      "value": {
                        "operator": "Variables[0] ({[Skill09[2]]}) || RETURN",
                        "displayLines": "{[Skill09[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill09[2]]}"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_LightTeamIgnoreServantCount",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
                            "displayLines": "{[Skill09[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[1]]}"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                          },
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
                            "displayLines": "{[Skill09[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[1]]}"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
                            "displayLines": "{[Skill09[0]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[0]]}"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                          },
                          "variableName": "_WorldErosionCtl",
                          "value": {
                            "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
                            "displayLines": "{[Skill09[0]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill09[0]]}"
                            ]
                          }
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1500971197\">W4_IronTombCore_RemoveAllCharge</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-151375815\">Enemy_W4_IronTombCorePart_01_Ability02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__144377800\">W4_IronTombCore_RemoveBreakEffect</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1438614862\">W4_IronTombCore_RemoveChargeEffect_WithOutFade</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1291213263\">W4_IronTombCore_AddBreakEffect</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Part 1}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Part 2}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1496068463\">W4_IronTombCorePart_Recover</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2061848542\">W4_IronTombCorePart_01_Recover</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1359702869\">Monster4035010StartCamera</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Wave Count",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "PauseLevelForCameraPerform",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "PauseLevelForCameraPerform"
        }
      ]
    }
  ],
  "references": []
}