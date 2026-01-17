const configAbility = {
  "fileName": "Yukong_Yukong_Trace01",
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
      "modifier": "Yukong_Point01_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yukong_Point01_ResistCD",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
              "valuePerStack": {
                "MDF_ResistCD": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
      "modifierFlags": [
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Yukong_Point01_ResistCD",
              "duration": {
                "operator": "Variables[0] (MDF_ResistCD) || RETURN",
                "displayLines": "MDF_ResistCD",
                "constants": [],
                "variables": [
                  "MDF_ResistCD"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ResistCD"
      ],
      "latentQueue": [],
      "description": "Blocks 1 debuff.",
      "type": "Buff",
      "statusName": "Debuff Block"
    },
    {
      "name": "Modifier Construction",
      "for": "Yukong_Point01_Bonus",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Yukong_Point01_ResistCD"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                  "valuePerStack": {
                    "MDF_ResistCD": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
              "valuePerStack": {
                "MDF_ResistCD": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}