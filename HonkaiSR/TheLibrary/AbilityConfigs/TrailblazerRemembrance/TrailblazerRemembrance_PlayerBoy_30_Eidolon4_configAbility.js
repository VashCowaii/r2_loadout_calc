const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
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
      "modifier": "M_PlayerBoy_30_Eidolon4"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_Eidolon4",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getMemosprite]]"
                },
                "living": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addMemoAndSummon]]"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getMemosprite]]"
                      },
                      "variableName": "CurEnergy",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (0.03) || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "(0.03 * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          0.03
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}