const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3021032,
  "trimCharacterName": 3021032,
  "abilityList": [
    "3021032_Modifiers",
    "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
    "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part01",
    "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
    "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
    "3021032_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate",
    "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
    "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
    "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
    "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part01",
    "3021032_Functions",
    "3021032_Handling"
  ],
  "abilityObject": {
    "3021032_Modifiers": {
      "fileName": "3021032_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "description": "Gains a Shield that can offset DMG.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield",
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
                  "name": "Set Hit-Class",
                  "reset": true
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1652361404\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1635583785\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1618806166\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1602028547\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1719471880\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1702694261\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1685916642\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
          "description": "Can only select %CasterName as the target to attack.",
          "type": "Debuff",
          "effectName": "Taunt",
          "statusName": "Taunt",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1685916642\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange01</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1702694261\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange02</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1719471880\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange03</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1602028547\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange04</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1618806166\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange05</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1635583785\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange06</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1652361404\">Enemy_W2_ArgentiTotem_02_IF_WeaknessChange07</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part02": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part01": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_ForceKill_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true,
          "toRemove": [
            "STAT_CTRL",
            "DisableAction",
            "Break"
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_AssistAbility01_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1639070947\">Enemy_W2_ArgentiTotem_IF_Initiate</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1639070947\">Enemy_W2_ArgentiTotem_IF_Initiate</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PowerFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Monster_IF_InsertCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "PowerFlag"
                            }
                          }
                        ]
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Amor of Destined Death"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PowerFlag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"64663457\">W2_ArgentiTotem_BattleScore1</a>"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "({[SkillP01[2]]} * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "({[SkillP01[3]]} * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || Constants[0] (0.7) || MUL || RETURN",
                  "displayLines": "({[SkillP01[2]]} * 0.7)",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || Constants[0] (0.7) || MUL || RETURN",
                  "displayLines": "({[SkillP01[3]]} * 0.7)",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "compareType": ">",
                "value2": 0
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                  "displayLines": "{[SkillP01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[1]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCount",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Monster_IF_InsertCount",
          "context": "TargetEntity",
          "value": -1,
          "max": 100
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Monster_IF_InsertCameraFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_IF_InsertCameraFlag02",
              "value": 0
            },
            "Deleted bullshit"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part02": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "_TargetNum"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_TargetNum) || RETURN",
                "displayLines": "_TargetNum",
                "constants": [],
                "variables": [
                  "_TargetNum"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill01[1]]}) || Constants[0] (0.5) || MUL || RETURN",
                          "displayLines": "({[Skill01[1]]} * 0.5)",
                          "constants": [
                            0.5
                          ],
                          "variables": [
                            "{[Skill01[1]]}"
                          ]
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "50%"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "({[Skill01[1]]} * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "50%"
              }
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_TargetNum) || RETURN",
                "displayLines": "_TargetNum",
                "constants": [],
                "variables": [
                  "_TargetNum"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
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
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1312814\">Monster_W2_ArgentiTotem_IF_Ability01_MarkModifier</a>"
        }
      ]
    },
    "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part01": {
      "fileName": "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part01",
      "childAbilityList": [
        "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part01",
        "3021032_Monster_W2_ArgentiTotem_IF_Ability01_Part02",
        "3021032_Monster_W2_ArgentiTotem_Ability01_Camera",
        "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
        "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
        "3021032_Monster_W2_ArgentiTotem_IF_AbilityP01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_ArgentiTotem_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3021032_Functions": {
      "fileName": "3021032_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1173935247\">DeathCamera_First</a>",
          "parse": []
        }
      ],
      "references": []
    },
    "3021032_Handling": {
      "fileName": "3021032_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}