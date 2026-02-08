const configAbility = {
  "fileName": "1014012_Monster_W1_GS_Svarog_PassiveAbility04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1203290559\">SlowModifier</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__512006331\">OnBreakSlowModifier</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1203290559\">SlowModifier</a>",
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