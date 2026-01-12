const configAbility = {
  "fileName": "Clara_Klara_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Klara_Eidolon6_Passive",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Klara_Eidolon6_ListenBeHit",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Klara_PassiveATK_Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_Eidolon6_Passive",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Teammates + Unselectable (Excluding Owner)",
              "modifier": "Klara_Eidolon6_ListenBeHit",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
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
                "name": "Is Teammate",
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Excluding Owner)",
                  "modifier": "Klara_Eidolon6_ListenBeHit",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
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
              "modifier": "Klara_Eidolon6_ListenBeHit",
              "onlyRemoveOwnersInstance": true
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