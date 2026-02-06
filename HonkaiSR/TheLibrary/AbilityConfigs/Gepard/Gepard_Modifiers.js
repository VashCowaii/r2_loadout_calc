const configAbility = {
  "fileName": "Gepard_Modifiers",
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
      "for": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AddStatusResistance) || RETURN",
                "displayLines": "MDF_AddStatusResistance",
                "constants": [],
                "variables": [
                  "MDF_AddStatusResistance"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddStatusResistance"
      ],
      "latentQueue": [],
      "description": "Effect RES +<span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>.",
      "type": "Buff",
      "statusName": "Effect RES Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Gepard_Eidolon2_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRaito) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyRaito)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyRaito"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyRaito</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Slow"
    },
    {
      "name": "Modifier Construction",
      "for": "Gepard_Eidolon2_Delay",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Gepard_Eidolon2_Delay"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Gepard_Eidolon2_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                    "displayLines": "MDF_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_Lifetime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRaito": {
                      "operator": "Variables[0] (MDF_SPD) || RETURN",
                      "displayLines": "MDF_SPD",
                      "constants": [],
                      "variables": [
                        "MDF_SPD"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SPD",
        "MDF_Lifetime"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Gepard_Passive02_AttackDeltaUp",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
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
                "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                "displayLines": "MDF_ShowValue",
                "constants": [],
                "variables": [
                  "MDF_ShowValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowValue"
      ],
      "latentQueue": [],
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    }
  ],
  "references": []
}