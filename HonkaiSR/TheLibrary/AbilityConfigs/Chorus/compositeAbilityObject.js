const compositeAbilityObject = {
  "fullCharacterName": "Chorus",
  "trimCharacterName": "Chorus",
  "abilityList": [
    "Chorus_Ability20005"
  ],
  "abilityObject": {
    "Chorus_Ability20005": {
      "fileName": "Chorus_Ability20005",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20005_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20005_Main",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier (Expire)",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "LC_EquipUnique_AttackAddedRatio",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
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
                      "to": "All Team Members(In Context)",
                      "modifier": "LC_EquipUnique_AttackAddedRatio",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08)",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "After entering battle, increases the ATK of all allies by #1[i]%. Abilities of the same type cannot stack.",
      "params": [
        [
          0.08
        ],
        [
          0.09
        ],
        [
          0.1
        ],
        [
          0.11
        ],
        [
          0.12
        ]
      ],
      "referencesGlobal": [
        {
          "name": "Modifier Construction",
          "for": "LC_EquipUnique_AttackAddedRatio",
          "stackType": "ReplaceByCasterOrUnStack",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue)",
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
        }
      ]
    }
  },
  "isLightcone": true
}