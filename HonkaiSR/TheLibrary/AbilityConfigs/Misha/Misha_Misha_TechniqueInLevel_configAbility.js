const configAbility = {
  "fileName": "Misha_Misha_TechniqueInLevel",
  "childAbilityList": [
    "Misha_Misha_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1784728857\">StageAbility_Misha_TechniqueBonus</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1784728857\">StageAbility_Misha_TechniqueBonus</a>",
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