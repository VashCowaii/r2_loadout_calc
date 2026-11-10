const entityPageType = "misc"
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
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                      "displayLines": "Modifier_ThunderCurse_DamagePercentage"
                    },
                    "DamageFlat": {
                      "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_18"
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
      "references": []
    }
  }
}