const compositeAbilityObject = {
  "fullCharacterName": "Memories of the Past",
  "trimCharacterName": "MemoriesofthePast",
  "abilityList": [
    "MemoriesofthePast_Ability21004"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.28
    },
    "2": {
      "DamageBreak": 0.35
    },
    "3": {
      "DamageBreak": 0.42
    },
    "4": {
      "DamageBreak": 0.49
    },
    "5": {
      "DamageBreak": 0.56
    }
  },
  "abilityObject": {
    "MemoriesofthePast_Ability21004": {
      "fileName": "MemoriesofthePast_Ability21004",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21004_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21004_Main",
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
                        "operator": "Variables[0] (4) || RETURN",
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
      "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer attacks, additionally regenerates #2[i] Energy. This effect cannot be repeatedly triggered in a single turn.",
      "params": [
        [
          0.28,
          4
        ],
        [
          0.35,
          5
        ],
        [
          0.42,
          6
        ],
        [
          0.49,
          7
        ],
        [
          0.56,
          8
        ]
      ]
    }
  },
  "isLightcone": true
}