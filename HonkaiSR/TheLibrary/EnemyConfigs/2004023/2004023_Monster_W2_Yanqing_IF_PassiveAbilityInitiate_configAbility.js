const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate",
  "childAbilityList": [
    "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate"
  ],
  "skillTrigger": "SkillP03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1795073899\">Monster_W2_Yanqing_BOSS_PowerUp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-259584521\">Monster_W2_Yanqing_BOSS_IceDamage</a>",
      "valuePerStack": {
        "MDF_IceDamageTakenUpRatio_PerLayer": {
          "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
          "displayLines": "{[SkillP03[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1992404777\">Monster_W2_Yanqing_BOSS_AssistAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1907558545\">Monster_W2_Yanqing_Sword_AssistAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Logic"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Perform"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Effect"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-944817604\">Monster_W2_Yanqing_BOSS_AssistAbilityTarget</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1992404777\">Monster_W2_Yanqing_BOSS_AssistAbility</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1907558545\">Monster_W2_Yanqing_Sword_AssistAbility</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-640160839\">Monster_W2_Yanqing_Sword_IceDamage</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1004973880\">Enemy_W2_Yanqing_Standard_IceDamageTakenUp</a>",
              "valuePerStack": {
                "IceTakenRatioPerLayer": {
                  "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_IceDamageTakenUpRatio_PerLayer"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-259584521\">Monster_W2_Yanqing_BOSS_IceDamage</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-640160839\">Monster_W2_Yanqing_Sword_IceDamage</a>",
                  "valuePerStack": {
                    "MDF_IceDamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_IceDamageTakenUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
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
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1004973880\">Enemy_W2_Yanqing_Standard_IceDamageTakenUp</a>",
                  "valuePerStack": {
                    "IceTakenRatioPerLayer": {
                      "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_IceDamageTakenUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_IceDamageTakenUpRatio_PerLayer"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1795073899\">Monster_W2_Yanqing_BOSS_PowerUp</a>",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W2_Yanqing_00_SwordStep",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": 1.5
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "W2_Yanqing_00_SwordStep",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
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