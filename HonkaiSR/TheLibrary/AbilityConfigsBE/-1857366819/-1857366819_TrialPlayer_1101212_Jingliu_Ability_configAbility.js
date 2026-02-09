const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1101212_Jingliu_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"-800068298\">MTrialPlayer_1101212_Jingliu_Ability</a>",
      "valuePerStack": {
        "MDF_ActionTime": 0
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-800068298\">MTrialPlayer_1101212_Jingliu_Ability</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_ActionTime",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionTime",
                  "value": 1
                }
              ],
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ActionTime"
      ],
      "latentQueue": []
    }
  ]
}