const configAbility = {
  "fileName": "Anaxa_Anaxa_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Anaxa_Eidolon2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_Eidolon2_Bonus_OnCharacterCreate",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Anaxa_AddWeakness",
                  "target": "Use Prior Target(s) Defined"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Anaxa_Eidolon2_Property[<span class=\"descriptionNumberColor\">Soul, True to History</span>]",
                  "referenceModifier": "MReference_AllDamageTypeResistanceDown",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Eidolon2",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)(ALL)",
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Anaxa_AddWeakness",
                  "target": "Use Prior Target(s) Defined"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Anaxa_Eidolon2_Property[<span class=\"descriptionNumberColor\">Soul, True to History</span>]",
                  "referenceModifier": "MReference_AllDamageTypeResistanceDown",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "M_Anaxa_Eidolon2_Bonus_OnCharacterCreate"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}