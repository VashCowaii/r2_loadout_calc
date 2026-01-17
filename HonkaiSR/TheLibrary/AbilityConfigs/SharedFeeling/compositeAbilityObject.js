const compositeAbilityObject = {
  "fullCharacterName": "Shared Feeling",
  "trimCharacterName": "SharedFeeling",
  "abilityList": [
    "SharedFeeling_Ability21007"
  ],
  "fixedStats": {
    "1": {
      "HealingOutgoing": 0.1
    },
    "2": {
      "HealingOutgoing": 0.125
    },
    "3": {
      "HealingOutgoing": 0.15
    },
    "4": {
      "HealingOutgoing": 0.175
    },
    "5": {
      "HealingOutgoing": 0.2
    }
  },
  "abilityObject": {
    "SharedFeeling_Ability21007": {
      "fileName": "SharedFeeling_Ability21007",
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
          "modifier": "LC_21007_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21007_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
      "desc": "Increases the wearer's Outgoing Healing by #1[i]%. When using Skill, regenerates #2[f1] Energy for all allies.",
      "params": [
        [
          0.1,
          2
        ],
        [
          0.125,
          2.5
        ],
        [
          0.15,
          3
        ],
        [
          0.175,
          3.5
        ],
        [
          0.2,
          4
        ]
      ]
    }
  },
  "isLightcone": true
}