const configAbility = {
  "fileName": "GlobalAbilities_Servant_Standard_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Servant_Standard_PassiveModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Servant_Standard_PassiveModifier",
      "modifierFlags": [
        "KeepAllModifierOnDeathRattle"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true,
                  "abortInsertedAbilities": true
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