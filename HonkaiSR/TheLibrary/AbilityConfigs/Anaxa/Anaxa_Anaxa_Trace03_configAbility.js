const configAbility = {
  "fileName": "Anaxa_Anaxa_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Anaxa_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Trace03",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Use Prior Target(s) Defined",
              "target2": "Owner of this Modifier",
              "variable": "_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_WeakCount",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (_WeakCount) || Constants[0] (7) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_WeakCount, 7)",
                "constants": [
                  7
                ],
                "variables": [
                  "MIN",
                  "_WeakCount"
                ]
              }
            },
            {
              "name": "Adjust Target Stats",
              "on": "Defender",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (0.04) || Variables[1] (_WeakCount) || MUL || SUB || RETURN",
                "displayLines": "(0 - (0.04 * _WeakCount))",
                "constants": [
                  0
                ],
                "variables": [
                  0.04,
                  "_WeakCount"
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