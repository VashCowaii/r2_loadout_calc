const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Shadowburn",
  "trimCharacterName": "Shadowburn",
  "abilityList": [
    "Shadowburn_Ability20021"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Shadowburn_Ability20021": {
      "fileName": "Shadowburn_Ability20021",
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
          "modifier": "<a class=\"gModGreen\" id=\"674633456\">LC_20021_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__674633456\">LC_20021_Main</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Memosprite"
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Flag_20021",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (12) || RETURN",
                        "displayLines": "12",
                        "constants": [],
                        "variables": [
                          12
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "Flag_20021"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "When the wearer summons memosprite for the first time, recovers #1[i] Skill Point(s) and regenerates #2[i] Energy for this unit.",
      "params": [
        [
          1,
          12
        ],
        [
          1,
          14
        ],
        [
          1,
          16
        ],
        [
          1,
          18
        ],
        [
          1,
          20
        ]
      ]
    }
  },
  "isLightcone": true
}