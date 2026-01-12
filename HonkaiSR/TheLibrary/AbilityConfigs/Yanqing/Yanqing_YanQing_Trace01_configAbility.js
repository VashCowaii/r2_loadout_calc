const configAbility = {
  "fileName": "Yanqing_YanQing_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Yanqing_Tree01",
      "valuePerStack": {
        "MDF_DamageRatio": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Yanqing_Tree01",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Skill Point Entity",
                "DamageType": "Ice"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Skill Point Entity",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                      "displayLines": "MDF_DamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageRatio"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageRatio"
      ],
      "latentQueue": []
    }
  ]
}