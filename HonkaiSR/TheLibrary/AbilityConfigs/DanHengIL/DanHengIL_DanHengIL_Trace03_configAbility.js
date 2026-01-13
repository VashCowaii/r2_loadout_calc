const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_Trace03",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use Prior Target(s) Defined",
                "DamageType": "Imaginary"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
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