const configAbility = {
  "fileName": "3021022_Modifiers",
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
      "for": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                "displayLines": "MDF_ShowValue",
                "constants": [],
                "variables": [
                  "MDF_ShowValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Shield State/Value",
              "reset": true
            },
            {
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End"
        }
      ],
      "stackData": [
        "MDF_ShowValue"
      ],
      "latentQueue": [],
      "description": "Gains a Shield that can offset DMG.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Imaginary"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Imaginary",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Quantum"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Quantum",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Wind",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Thunder"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Thunder",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Ice",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Fire",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valueList": []
            },
            {
              "name": "Clear Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
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
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Attach",
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stackType": "Delta",
              "resistArray": [
                {
                  "element": "Physical",
                  "value": -0.2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_CTRL_Taunt_ArgentiTotem_02_IF[<span class=\"descriptionNumberColor\">Taunt</span>]",
      "stackType": "Replace",
      "targetRestriction": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "targetRestrictionFor": "EnemySelect",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Taunt",
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06",
                  "casterAssign": "TargetSelf"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Can only select %CasterName as the target to attack.",
      "type": "Debuff",
      "effectName": "Taunt",
      "statusName": "Taunt"
    }
  ],
  "references": []
}