const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Trace02",
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
      "modifier": "M_Mar_7th_10_Trace02"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_Trace02",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "ForceStanceDamage"
                  ],
                  "modifierName": "M_Mar_7th_10_Trace02"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "Remove Flags from Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagName": [
                "ForceStanceDamage"
              ],
              "modifierName": "M_Mar_7th_10_Trace02"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                },
                "invertCondition": true
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