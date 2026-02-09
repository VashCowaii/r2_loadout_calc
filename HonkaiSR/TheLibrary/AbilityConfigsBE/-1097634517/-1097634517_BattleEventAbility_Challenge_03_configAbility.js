const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1801411501\">Modifier_BattleEventAbility_Challenge_03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1604949652\">Modifier_BattleEventAbility_Challenge_03_Sub</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1801411501\">Modifier_BattleEventAbility_Challenge_03</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1604949652\">Modifier_BattleEventAbility_Challenge_03_Sub</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}