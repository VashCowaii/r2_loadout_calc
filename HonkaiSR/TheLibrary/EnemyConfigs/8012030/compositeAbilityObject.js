const compositeAbilityObject = {
  "fullCharacterName": 8012030,
  "trimCharacterName": 8012030,
  "abilityList": [
    "8012030_Monster_AML_Minion04_Ability02_Part02",
    "8012030_Monster_AML_Minion04_Ability02_Part01",
    "8012030_Monster_AML_Minion04_Ability01_Part02",
    "8012030_Monster_AML_Minion04_Ability01_Part01",
    "8012030_Monster_AML_Minion04_Passive01",
    "8012030_Modifiers"
  ],
  "abilityObject": {
    "8012030_Monster_AML_Minion04_Ability02_Part02": {
      "fileName": "8012030_Monster_AML_Minion04_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1434034112\">Enemy_AML_Minion04_Overheat</a>[<span class=\"descriptionNumberColor\">Overloaded</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012030_Monster_AML_Minion04_Ability02_Part01": {
      "fileName": "8012030_Monster_AML_Minion04_Ability02_Part01",
      "childAbilityList": [
        "8012030_Monster_AML_Minion04_Ability02_Part01",
        "8012030_Monster_AML_Minion04_Ability02_Part02",
        "8012030_Monster_AML_Minion04_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_AML_Minion04_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012030_Monster_AML_Minion04_Ability01_Part02": {
      "fileName": "8012030_Monster_AML_Minion04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1138460548\">Enemy_AML_Minion04_Overheat_Effect</a>"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.33) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.33)",
                  "constants": [
                    0.33
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "33%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.33) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.33)",
                  "constants": [
                    0.33
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "33%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.34) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.34)",
                  "constants": [
                    0.34
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "34%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1102385587\">Enemy_AML_Minion04_Mark</a>[<span class=\"descriptionNumberColor\">Detonated</span>]",
              "valuePerStack": {
                "Ability01_P2_MarkDamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1434034112\">Enemy_AML_Minion04_Overheat</a>[<span class=\"descriptionNumberColor\">Overloaded</span>]"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012030_Monster_AML_Minion04_Ability01_Part01": {
      "fileName": "8012030_Monster_AML_Minion04_Ability01_Part01",
      "childAbilityList": [
        "8012030_Monster_AML_Minion04_Ability01_Part01",
        "8012030_Monster_AML_Minion04_Ability01_Part02",
        "8012030_Monster_AML_Minion04_Ability01_Camera"
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
          "ability": "Monster_AML_Minion04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012030_Monster_AML_Minion04_Passive01": {
      "fileName": "8012030_Monster_AML_Minion04_Passive01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"-429048412\">Monster_AML_Minion04_EffectController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-364867196\">Monster_AML_Minion04_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-429048412\">Monster_AML_Minion04_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-364867196\">Monster_AML_Minion04_Effect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-364867196\">Monster_AML_Minion04_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-364867196\">Monster_AML_Minion04_Effect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012030_Modifiers": {
      "fileName": "8012030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1102385587\">Enemy_AML_Minion04_Mark</a>[<span class=\"descriptionNumberColor\">Detonated</span>]",
          "counter": 4,
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (Skill01_P2_MarkDamagePercentage) || RETURN",
                      "displayLines": "Skill01_P2_MarkDamagePercentage",
                      "constants": [],
                      "variables": [
                        "Skill01_P2_MarkDamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Skill01_P2_MarkDamagePercentage"
          ],
          "latentQueue": [],
          "description": "Has been attached a detonator by Voidranger: Eliminator. Takes Additional DMG after being attacked.",
          "type": "Debuff",
          "effectName": "Detonated",
          "statusName": "Detonated",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1138460548\">Enemy_AML_Minion04_Overheat_Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1434034112\">Enemy_AML_Minion04_Overheat</a>[<span class=\"descriptionNumberColor\">Overloaded</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138460548\">Enemy_AML_Minion04_Overheat_Effect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Temporarily unable to attack due to Energy overload.",
          "type": "Debuff",
          "effectName": "Overloaded",
          "statusName": "Overloaded"
        }
      ],
      "references": []
    }
  }
}