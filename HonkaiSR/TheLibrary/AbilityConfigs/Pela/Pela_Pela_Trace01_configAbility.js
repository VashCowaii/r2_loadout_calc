const configAbility = {
  "fileName": "Pela_Pela_Trace01",
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
      "modifier": "M_Pela_Tree01"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Pela_Tree01",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target TAKING DMG}}"
              },
              "variableName": "DebuffNumber"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DebuffNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.2"
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