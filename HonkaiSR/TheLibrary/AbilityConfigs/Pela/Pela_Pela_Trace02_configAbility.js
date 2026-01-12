const configAbility = {
  "fileName": "Pela_Pela_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Pela_Tree02"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Pela_Tree02",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Pela_StatusProbability",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
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
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Pela_StatusProbability",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
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
              "modifier": "Pela_StatusProbability",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}