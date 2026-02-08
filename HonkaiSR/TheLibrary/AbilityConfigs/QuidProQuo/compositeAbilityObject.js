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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1623581959\">LC_21021_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1623581959\">LC_21021_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
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
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
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