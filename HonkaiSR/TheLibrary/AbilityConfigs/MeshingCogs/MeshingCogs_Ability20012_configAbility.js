const configAbility = {
  "fileName": "MeshingCogs_Ability20012",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_20012_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_20012_Main",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Charged",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Charged",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (4)",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Charged",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Charged",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (4)",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Charged",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "After the wearer uses attacks or gets hit, additionally regenerates #1[i] Energy. This effect cannot be repeatedly triggered in a single turn.",
  "params": [
    [
      4
    ],
    [
      5
    ],
    [
      6
    ],
    [
      7
    ],
    [
      8
    ]
  ]
}