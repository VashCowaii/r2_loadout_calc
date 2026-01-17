const configAbility = {
  "fileName": "TrailblazerPreservation_Modifiers",
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
      "for": "PlayerBoy_Weapon_Effect",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">=",
                "value2": 4
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                            "compareType": ">=",
                            "value2": 1
                          }
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": 2
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": 3
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": 4
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
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
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MWAvatar_PlayerBoy_10_Shield_Value01) || RETURN",
                "displayLines": "MWAvatar_PlayerBoy_10_Shield_Value01",
                "constants": [],
                "variables": [
                  "MWAvatar_PlayerBoy_10_Shield_Value01"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MWAvatar_PlayerBoy_10_Shield_Value01"
      ],
      "latentQueue": [],
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_10_DamageResistance_Team[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MAvatar_PlayerBoy_10_DamageResistance_Team_Value01) || RETURN",
                "displayLines": "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01",
                "constants": [],
                "variables": [
                  "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01"
      ],
      "latentQueue": [],
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MAvatar_PlayerBoy_10_DamageResistance_Team_Value01</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "DMG Mitigation"
    },
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_DamageResistance[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MWAvatar_PlayerBoy_10_DamageResistance_Value01) || RETURN",
                "displayLines": "MWAvatar_PlayerBoy_10_DamageResistance_Value01",
                "constants": [],
                "variables": [
                  "MWAvatar_PlayerBoy_10_DamageResistance_Value01"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "AvatarBreak"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MWAvatar_PlayerBoy_10_DamageResistance_Value01"
      ],
      "latentQueue": [],
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MWAvatar_PlayerBoy_10_DamageResistance_Value01</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "DMG Mitigation"
    },
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When there are 4 or more stacks of Magma Will, Enhances Basic ATK.",
      "type": "Other",
      "statusName": "Magma Will"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_10_ChangeAttack",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "The next Basic ATK will become an Enhanced Basic ATK and will not consume Magma Will.",
      "type": "Other",
      "effectName": "Enhanced Basic ATK",
      "statusName": "War-Flaming Lance"
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_10_Eidolon6_Stack[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DefenceAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DefenceAddedRatio"
      ],
      "latentQueue": [],
      "description": "Each stack increases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to <span class=\"descriptionNumberColor\">Rank06_Max_Layer</span> stack(s).",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "DEF Boost",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    }
  ],
  "references": []
}