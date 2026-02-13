const configAbility = {
  "fileName": "20085023_FarmRelicAbility_104315",
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
      "modifier": "<a class=\"gModGreen\" id=\"1923747614\">MFarmRelic_104315</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1118999312\">FarmRelicAbility_104315_Sub</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1128664963\">FarmRelicAbility_104315_TaskTemplate</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1887078258\">Standard_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Physical RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1537044997\">Standard_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Fire RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1969217848\">Standard_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-192876579\">Standard_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Wind RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1410888443\">Standard_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Lightning RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"533883510\">Standard_QuantumResistanceDown</a>[<span class=\"descriptionNumberColor\">Quantum RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1176142950\">Standard_ImaginaryResistanceDown</a>[<span class=\"descriptionNumberColor\">Imaginary RES Reduction</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0.15
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1923747614\">MFarmRelic_104315</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1118999312\">FarmRelicAbility_104315_Sub</a>",
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