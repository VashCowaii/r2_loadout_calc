const configAbility = {
  "fileName": "Welt_Welt_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Welt_Tree03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Welt_Tree03",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Target Receiving DMG",
                "modifier": "StanceBreakState"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
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