const configAbility = {
  "fileName": "20085023_Modifiers",
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
      "for": "Standard_EliteField_Servant[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                "displayLines": "MDF_DamageByRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageByRatio"
                ]
              }
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ],
      "description": "Reduces all DMG taken by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Upon defeat, a certain percentage of %CasterName's Max HP will be lost.",
      "type": "Buff",
      "effectName": "Fate's Convergence",
      "statusName": "Fate's Convergence"
    },
    {
      "name": "Modifier Construction",
      "for": "Standard_EliteField_Elite[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
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
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Standard_EliteField_Servant[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
              "valuePerStack": {
                "MDF_AllDamageReduce": {
                  "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                  "displayLines": "MDF_AllDamageReduce",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageReduce"
                  ]
                },
                "MDF_DamageByRatio": {
                  "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                  "displayLines": "MDF_DamageByRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DamageByRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_EliteField_Servant[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    },
                    "MDF_DamageByRatio": {
                      "operator": "Variables[0] (MDF_DamageByRatio) || RETURN",
                      "displayLines": "MDF_DamageByRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageByRatio"
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
        "MDF_AllDamageReduce",
        "MDF_DamageByRatio"
      ],
      "latentQueue": [],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Causes other enemy targets to obtain \"Fate's Convergence.\"",
      "type": "Buff",
      "effectName": "Binding Obligation",
      "statusName": "Binding Obligation"
    }
  ],
  "references": []
}