const compositeAbilityObject = {
  "fullCharacterName": "Thus Burns the Dawn",
  "trimCharacterName": "ThusBurnstheDawn",
  "abilityList": [
    "ThusBurnstheDawn_Ability23044"
  ],
  "fixedStats": {
    "1": {
      "SPDBase": 12
    },
    "2": {
      "SPDBase": 14
    },
    "3": {
      "SPDBase": 16
    },
    "4": {
      "SPDBase": 18
    },
    "5": {
      "SPDBase": 20
    }
  },
  "abilityObject": {
    "ThusBurnstheDawn_Ability23044": {
      "fileName": "ThusBurnstheDawn_Ability23044",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23044_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23044_Sub2[<span class=\"descriptionNumberColor\">Dispossession</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Dispossession"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23044_Sub[<span class=\"descriptionNumberColor\">Blazing Sun</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 200
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect is dispelled at the start of its turn.",
          "type": "Buff",
          "effectName": "Blazing Sun",
          "statusName": "Blazing Sun"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23044_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_23044_Sub[<span class=\"descriptionNumberColor\">Blazing Sun</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23044_Sub2[<span class=\"descriptionNumberColor\">Dispossession</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    }
                  }
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
      "desc": "The wearer's base SPD increases by #1[i]. When dealing DMG, ignores #2[i]% of the target's DEF. After the wearer uses Ultimate, gains \"Blazing Sun,\" which is removed at the start of the turn. While holding \"Blazing Sun,\" increases the wearer's DMG dealt by #3[i]%.",
      "params": [
        [
          12,
          0.18,
          0.6
        ],
        [
          14,
          0.225,
          0.78
        ],
        [
          16,
          0.27,
          0.96
        ],
        [
          18,
          0.315,
          1.14
        ],
        [
          20,
          0.36,
          1.32
        ]
      ]
    }
  },
  "isLightcone": true
}