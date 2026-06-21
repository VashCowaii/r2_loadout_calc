const configAbility = {
  "fileName": "1002061_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1494181192\">Enemy_W1_CocoliaP2_01_DieWithoutEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase2"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>",
      "execute": [
        {
          "eventTrigger": "Being Limbo [Owner]"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    }
  ],
  "references": []
}