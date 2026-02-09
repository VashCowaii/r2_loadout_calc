const configAbility = {
  "fileName": "1004011_BattleEventAbility_CocoliaP1_RL",
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
      "modifier": "<a class=\"gModGreen\" id=\"826546199\">Modifier_CocoliaP1_RL_BattleEvent</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed) || RETURN",
                "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed",
                "constants": [],
                "variables": [
                  "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}