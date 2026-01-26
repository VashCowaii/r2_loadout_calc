const configAbility = {
  "fileName": "SilverWolfv0_Silwolf_Trace01",
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
      "modifier": "M_Silwolf_Trace01_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Silwolf_Trace01_Bonus",
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
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Silwolf_PassiveAbility_RandomBug"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}