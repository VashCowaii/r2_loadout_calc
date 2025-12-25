const compositeAbilityObject = {
  "fullCharacterName": "Fine Fruit",
  "trimCharacterName": "FineFruit",
  "abilityList": [
    "FineFruit_Ability20008"
  ],
  "abilityObject": {
    "FineFruit_Ability20008": {
      "fileName": "FineFruit_Ability20008",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20008_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20008_Main",
          "execute": [
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
                      "name": "Update Energy",
                      "on": "Allied Team (One per Pairing of Memo/Owner)",
                      "value": {
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      },
                      "isFixed": "* ERR"
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
      "desc": "At the start of the battle, immediately regenerates #1[i] Energy for all allies.",
      "params": [
        [
          6
        ],
        [
          7.5
        ],
        [
          9
        ],
        [
          10.5
        ],
        [
          12
        ]
      ]
    }
  },
  "isLightcone": true
}