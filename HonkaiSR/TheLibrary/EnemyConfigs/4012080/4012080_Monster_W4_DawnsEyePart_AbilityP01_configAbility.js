const configAbility = {
  "fileName": "4012080_Monster_W4_DawnsEyePart_AbilityP01",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1513761820\">Monster_W4_DawnsEyePart_BreakController</a>"
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1513761820\">Monster_W4_DawnsEyePart_BreakController</a>",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "revertDefault": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}