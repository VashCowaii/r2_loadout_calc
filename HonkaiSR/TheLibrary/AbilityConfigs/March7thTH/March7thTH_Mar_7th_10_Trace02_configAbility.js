const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
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
                    "target": "All Teammates + Unselectable (Excluding Owner)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": "March 7th's Shifu",
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Is Weak to Attacker",
                    "weakTo": "Caster",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Flags to Modifier",
                  "target": "Owner of this Modifier",
                  "flagName": [
                    "ForceStanceDamage"
                  ],
                  "modifierName": "M_Mar_7th_10_Trace02"
                },
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
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
              "target": "Owner of this Modifier",
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
                "target": "All Teammates + Unselectable (Excluding Owner)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
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