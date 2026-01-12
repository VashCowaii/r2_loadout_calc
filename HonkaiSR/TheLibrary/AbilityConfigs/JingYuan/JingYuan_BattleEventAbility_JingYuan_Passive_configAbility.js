const configAbility = {
  "fileName": "JingYuan_BattleEventAbility_JingYuan_Passive",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_BattleEvent"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_BattleEvent_BaseSpeed"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_BattleEvent_ForceKill"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_ForceKill",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "JingYuan_ListenFlag"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": "Owner of this Modifier",
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
                },
                {
                  "name": "Show Attack Time",
                  "on": null,
                  "show": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_BaseSpeed",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Caster",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (BattleEvent_JingYuan_00_BaseSpeed) || RETURN",
                "displayLines": "BattleEvent_JingYuan_00_BaseSpeed",
                "constants": [],
                "variables": [
                  "BattleEvent_JingYuan_00_BaseSpeed"
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