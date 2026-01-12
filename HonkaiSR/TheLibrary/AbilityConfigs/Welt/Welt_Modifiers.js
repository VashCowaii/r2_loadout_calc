const configAbility = {
  "fileName": "Welt_Modifiers",
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
      "for": "Welt_Trace01_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Slow"
    },
    {
      "name": "Modifier Construction",
      "for": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
      "counter": 2,
      "stackData": [],
      "latentQueue": [],
      "description": "Basic ATKs and Skills deal an extra hit.",
      "type": "Other",
      "statusName": "Legacy of Honor"
    }
  ],
  "references": []
}