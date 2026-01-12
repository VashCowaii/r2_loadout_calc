const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Advanced_Silwolf_Trace01_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Trace01_Bonus",
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Silwolf_00_AddModifier_Chance",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            },
            {
              "name": "Trigger Ability",
              "from": "Caster",
              "inherentTarget": "Use Prior Target(s) Defined",
              "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}