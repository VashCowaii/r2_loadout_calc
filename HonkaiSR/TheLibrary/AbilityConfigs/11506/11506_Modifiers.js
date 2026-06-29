const configAbility = {
  "fileName": "11506_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__221078581\">GlobalAbility_SilverWolf999_ImmuneCTRL</a>[<span class=\"descriptionNumberColor\">Firewall</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CROWD_CONTROL_IMMUNE_SPECIAL",
        "CLEANSE_CONTROL_ENEMY"
      ],
      "description": "Immune to Crowd Control debuffs inflicted by enemy targets.",
      "type": "Buff",
      "effectName": "Firewall",
      "statusName": "Firewall",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}