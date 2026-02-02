const configAbility = {
  "fileName": "DanceDanceDance_Ability21018",
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
      "modifier": "LC_21018_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21018_Main",
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": "-0.16"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.16) || INVERT || RETURN",
            "displayLines": "-0.16",
            "constants": [],
            "variables": [
              0.16
            ]
          }
        }
      }
    }
  ],
  "isLightcone": true,
  "desc": "When the wearer uses their Ultimate, all allies' actions are Advanced Forward by #1[i]%.",
  "params": [
    [
      0.16
    ],
    [
      0.18
    ],
    [
      0.2
    ],
    [
      0.22
    ],
    [
      0.24
    ]
  ]
}