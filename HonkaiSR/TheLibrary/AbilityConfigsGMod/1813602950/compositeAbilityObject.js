const compositeAbilityObject = {
  "fullCharacterName": 1813602950,
  "trimCharacterName": 1813602950,
  "abilityList": [
    "1813602950_Modifiers"
  ],
  "abilityObject": {
    "1813602950_Modifiers": {
      "fileName": "1813602950_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-231503615\">WStandard_DOT_ThunderCurse</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_ThunderCurse_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_ThunderCurse_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_ThunderCurse_DamagePercentage"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_18) || RETURN",
                      "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_18",
                      "constants": [],
                      "variables": [
                        "STANDARDSPECIFIC_OBJECT_UNUSED_18"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true
        }
      ],
      "references": []
    }
  }
}