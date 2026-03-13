const configAbility = {
  "fileName": "Sneering_Ability20023",
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
      "modifier": "<a class=\"gModGreen\" id=\"-282250102\">LC_20023_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__343139295\">LC_20023_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.16) || RETURN",
                "displayLines": "0.16",
                "constants": [],
                "variables": [
                  0.16
                ]
              }
            }
          ]
        }
      ],
      "description": "Elation increases by <span class=\"descriptionNumberColor\">#SkillEquip_P1_ElationDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "Elation Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-282250102\">LC_20023_Main</a>",
      "execute": [
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"343139295\">LC_20023_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"343139295\">LC_20023_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "When Aha Instant is activated, the wearer's Elation increases by #1[i]%, lasting until Aha Instant ends.",
  "params": [
    [
      0.16
    ],
    [
      0.2
    ],
    [
      0.24
    ],
    [
      0.28
    ],
    [
      0.32
    ]
  ]
}