const configAbility = {
  "fileName": "Firefly_Sam_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 11310,
      "variables": {
        "BattleEvent_Sam_BaseSpeed": {
          "operator": "Variables[0] (70) || RETURN",
          "displayLines": "70",
          "constants": [],
          "variables": [
            70
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
      "valuePerStack": {
        "MDF_SpeedUP": {
          "operator": "Variables[0] (60) || RETURN",
          "displayLines": "60",
          "constants": [],
          "variables": [
            60
          ]
        },
        "MDF_StatusResistance": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        }
      }
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Advance",
      "multi": -1
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}