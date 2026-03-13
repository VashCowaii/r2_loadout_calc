const configAbility = {
  "fileName": "LingeringTear_Ability20024",
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
      "modifier": "<a class=\"gModGreen\" id=\"1431065629\">LC_20024_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-72440750\">LC_20024_Sub</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.2) || RETURN",
                "displayLines": "0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1431065629\">LC_20024_Main</a>",
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "minValue": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "whenEnteringRange": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72440750\">LC_20024_Sub</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
            }
          ],
          "whenLeavingRange": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72440750\">LC_20024_Sub</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "When the Punchline held is #1[i] or more, the wearer's CRIT DMG increases by #2[i]%.",
  "params": [
    [
      10,
      0.2
    ],
    [
      10,
      0.25
    ],
    [
      10,
      0.3
    ],
    [
      10,
      0.35
    ],
    [
      10,
      0.4
    ]
  ]
}