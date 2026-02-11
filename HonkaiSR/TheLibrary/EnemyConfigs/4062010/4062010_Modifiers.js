const configAbility = {
  "fileName": "4062010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__2090234676\">Enemy_W4_Turkey_Ability02_Power_EffectLoop</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2090234676\">Enemy_W4_Turkey_Ability02_Power_EffectLoop</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After other \"Ichor Memosprites: Pheasant\" in the \"Hemotort Resonance\" state attack, this unit will attack together with them. Dispels when Weakness is broken.",
      "type": "Other",
      "effectName": "Hemotort Resonance",
      "statusName": "Hemotort Resonance"
    }
  ],
  "references": []
}