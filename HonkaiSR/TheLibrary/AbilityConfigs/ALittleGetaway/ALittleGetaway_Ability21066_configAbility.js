const configAbility = {
  "fileName": "ALittleGetaway_Ability21066",
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
      "modifier": "<a class=\"gModGreen\" id=\"-558913588\">LC_21066_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-976527319\">LC_21066_Sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "-0.08"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-558913588\">LC_21066_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-976527319\">LC_21066_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-976527319\">LC_21066_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Elation by #1[i]%. During the use of Elation Skill by the wearer, ignores #2[i]% of the target's DEF.",
  "params": [
    [
      0.2,
      0.08
    ],
    [
      0.25,
      0.1
    ],
    [
      0.3,
      0.12
    ],
    [
      0.35,
      0.14
    ],
    [
      0.4,
      0.16
    ]
  ]
}