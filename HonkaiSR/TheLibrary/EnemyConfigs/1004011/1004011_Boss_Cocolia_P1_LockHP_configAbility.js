const configAbility = {
  "fileName": "1004011_Boss_Cocolia_P1_LockHP",
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
      "modifier": "<a class=\"gModGreen\" id=\"801976131\">ListenHPRatio_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__801976131\">ListenHPRatio_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED_2"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Blizzard_Trigger_Times",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Blizzard_Trigger_Times",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_P1_Ability08_Part01",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}