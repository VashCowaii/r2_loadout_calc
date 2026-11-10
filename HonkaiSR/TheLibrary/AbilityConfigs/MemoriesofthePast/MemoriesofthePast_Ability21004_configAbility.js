const configAbility = {
  "fileName": "MemoriesofthePast_Ability21004",
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
      "modifier": "<a class=\"gModGreen\" id=\"2087116252\">LC_21004_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2087116252\">LC_21004_Main</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Charged"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
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
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "4"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_Charged"
                }
              ]
            }
          ]
        }
      ]
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