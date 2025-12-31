const configAbility = {
  "fileName": "GlobalAbilities_Standard_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Local_SPAdd",
      "valuePerStack": {
        "MDF_AddValue": 10
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "TriggerStanceCountDown_Test"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Standard_TriggerDeparted"
    }
  ],
  "references": []
}