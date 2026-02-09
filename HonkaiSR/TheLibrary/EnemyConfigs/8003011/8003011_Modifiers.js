const configAbility = {
  "fileName": "8003011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Phase_Flag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Phase_Flag",
              "value": 2
            }
          ]
        }
      ],
      "stackData": [
        "Modifier_AllDamageTypeResistance",
        "Modifier_StanceWeakAddedRatio",
        "Modifier_Stance"
      ],
      "latentQueue": [],
      "description": "Ice Out of Space's attack mode is enhanced.",
      "type": "Other",
      "effectName": "Freezing Point",
      "statusName": "Freezing Point"
    }
  ],
  "references": []
}