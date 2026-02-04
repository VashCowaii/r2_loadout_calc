const configAbility = {
  "fileName": "1014013_Monster_W1_GS_Svarog_RL_PassiveAbility04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "SlowModifier",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                "displayLines": "PassiveSkill04_SpeedDelta",
                "constants": [],
                "variables": [
                  "PassiveSkill04_SpeedDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "OnBreakSlowModifier",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "SlowModifier",
              "duration": 1,
              "valuePerStack": {
                "PassiveAbility04_SpeedDelta": {
                  "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                  "displayLines": "PassiveSkill04_SpeedDelta",
                  "constants": [],
                  "variables": [
                    "PassiveSkill04_SpeedDelta"
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ]
}