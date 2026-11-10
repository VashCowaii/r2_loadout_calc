const configAbility = {
  "fileName": "Firefly_Advanced_Sam_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 113101,
      "variables": {
        "BattleEvent_Sam_BaseSpeed": {
          "displayLines": "70"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
      "valuePerStack": {
        "MDF_SpeedUP": {
          "displayLines": "60"
        },
        "MDF_StatusResistance": {
          "displayLines": "0.3"
        },
        "MDF_PropertyValue": {
          "displayLines": "0.2"
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
      "multiAdd": -1
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}