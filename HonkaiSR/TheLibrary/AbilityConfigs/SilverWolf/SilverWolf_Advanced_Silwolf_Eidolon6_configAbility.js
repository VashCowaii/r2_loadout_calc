const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Silwolf_Eidolon6_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Silwolf_Eidolon6_Bonus",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": "Target Receiving DMG",
              "variableName": "_DebuffCount"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] (_DebuffCount) || Variables[1] (0.2) || MUL || RETURN",
                "displayLines": "(_DebuffCount * 0.2)",
                "constants": [],
                "variables": [
                  "_DebuffCount",
                  0.2
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_DamageAddedRatio",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageAddedRatio",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "on": "Attacker",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio"
                ]
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