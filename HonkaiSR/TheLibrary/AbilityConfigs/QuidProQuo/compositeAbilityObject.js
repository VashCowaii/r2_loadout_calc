const compositeAbilityObject = {
  "fullCharacterName": "Quid Pro Quo",
  "trimCharacterName": "QuidProQuo",
  "abilityList": [
    "QuidProQuo_Ability21021"
  ],
  "fixedStats": {},
  "abilityObject": {
    "QuidProQuo_Ability21021": {
      "fileName": "QuidProQuo_Ability21021",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21021_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21021_Main",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Teammates (Excluding Owner)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "Energy%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Energy",
                      "on": "Use Prior Target(s) Defined",
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "* ERR"
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
      "desc": "At the start of the wearer's turn, regenerates #2[i] Energy for a randomly chosen ally (excluding the wearer) whose current Energy is lower than #1[i]%.",
      "params": [
        [
          0.5,
          8
        ],
        [
          0.5,
          10
        ],
        [
          0.5,
          12
        ],
        [
          0.5,
          14
        ],
        [
          0.5,
          16
        ]
      ]
    }
  },
  "isLightcone": true
}