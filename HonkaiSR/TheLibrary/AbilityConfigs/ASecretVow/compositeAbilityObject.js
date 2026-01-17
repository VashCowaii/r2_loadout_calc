const compositeAbilityObject = {
  "fullCharacterName": "A Secret Vow",
  "trimCharacterName": "ASecretVow",
  "abilityList": [
    "ASecretVow_Ability21012"
  ],
  "fixedStats": {
    "1": {
      "DamageAll": 0.2
    },
    "2": {
      "DamageAll": 0.25
    },
    "3": {
      "DamageAll": 0.3
    },
    "4": {
      "DamageAll": 0.35
    },
    "5": {
      "DamageAll": 0.4
    }
  },
  "abilityObject": {
    "ASecretVow_Ability21012": {
      "fileName": "ASecretVow_Ability21012",
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
          "modifier": "LC_21012_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21012_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CasterRatio"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "variableName": "_TargetRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TargetRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_CasterRatio) || RETURN",
                      "displayLines": "_CasterRatio",
                      "constants": [],
                      "variables": [
                        "_CasterRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases DMG dealt by the wearer by #1[i]%. The wearer also deals an extra #2[i]% of DMG to enemies whose current HP percentage is equal to or higher than the wearer's current HP percentage.",
      "params": [
        [
          0.2,
          0.2
        ],
        [
          0.25,
          0.25
        ],
        [
          0.3,
          0.3
        ],
        [
          0.35,
          0.35
        ],
        [
          0.4,
          0.4
        ]
      ]
    }
  },
  "isLightcone": true
}