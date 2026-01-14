const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
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
                "target": "Caster's Memosprite",
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
                        "of": "Use Prior Target(s) Defined",
                        "target": "All Team Members(In Context, with Untargetable + Memosprite/Summon)",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": "Caster's Memosprite",
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