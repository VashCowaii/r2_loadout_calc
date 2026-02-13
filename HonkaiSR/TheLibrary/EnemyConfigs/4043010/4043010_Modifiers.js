const configAbility = {
  "fileName": "4043010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-690947002\">Monster_W4_Herta_Basic</a>",
      "modifierFlags": [
        "MuteHitFly",
        "MuteHitH",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Herta_Ability01_Part01_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterSummon",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -70
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-947845666\">Monster_W4_Herta_SummonMark</a>"
    }
  ],
  "references": []
}