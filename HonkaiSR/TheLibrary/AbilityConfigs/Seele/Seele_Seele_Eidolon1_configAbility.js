const configAbility = {
  "fileName": "Seele_Seele_Eidolon1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Seele_Eidolon1"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Seele_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Use Prior Target(s) Defined",
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": "Use Prior Target(s) Defined",
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.8) || MUL || RETURN",
                  "displayLines": "(MDF_MaxHP * 0.8)",
                  "constants": [],
                  "variables": [
                    "MDF_MaxHP",
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
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