const configAbility = {
  "fileName": "4015011_LevelAbility_Dawnseye_WeatherSunny",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1982815636\">Modifier_Monster_W4_DawnsEye_WheaterSunnyForLevel</a>",
      "valuePerStack": {
        "Weather_SunnyHeatInitial": 40,
        "Weather_HeatDamage": 0.04,
        "Weather_HeatAddPerAction": 1,
        "Weather_HeatCountDown": 5,
        "Weather_AllDamageTypeAddedRatio": 0.005
      }
    }
  ],
  "references": []
}