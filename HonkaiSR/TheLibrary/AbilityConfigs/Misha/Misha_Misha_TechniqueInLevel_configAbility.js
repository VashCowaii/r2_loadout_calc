const configAbility = {
  "fileName": "Misha_Misha_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "StageAbility_Misha_TechniqueBonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Misha_TechniqueBonus",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnergyBar_ExtraUltraAttack",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (2) || ADD || RETURN",
                    "displayLines": "(EnergyBar_ExtraUltraAttack + 2)",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ExtraUltraAttack",
                      2
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}