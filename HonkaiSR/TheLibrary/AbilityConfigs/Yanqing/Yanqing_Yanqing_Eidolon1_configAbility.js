const configAbility = {
  "fileName": "Yanqing_Yanqing_Eidolon1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Yanqing_Eidolon1",
      "valuePerStack": {
        "MDF_DamageRatio": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yanqing_Eidolon1_TargetMark"
    },
    {
      "name": "Modifier Construction",
      "for": "Yanqing_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Ability Target List",
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Ability Target List",
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