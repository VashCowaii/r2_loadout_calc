const configAbility = {
  "fileName": "GlobalAbilities_Servant_Common_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Servant_Common_PassiveModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Servant_Common_PassiveModifier",
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
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": "Owner of this Modifier",
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