const configAbility = {
  "fileName": "Archer_Archer_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Archer_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Archer_Trace03_CriticalDMG[<span class=\"descriptionNumberColor\">Guardian</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Guardian"
    },
    {
      "name": "Modifier Construction",
      "for": "Archer_Trace03",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_CurrentBP"
            },
            {
              "name": "Define Custom Variable with SkillPoint Changes",
              "variableName": "MDF_ChangeValue",
              "type": "UnclampedDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentBP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Archer_Trace03_CriticalDMG[<span class=\"descriptionNumberColor\">Guardian</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (1.2) || RETURN",
                      "displayLines": "1.2",
                      "constants": [],
                      "variables": [
                        1.2
                      ]
                    }
                  }
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