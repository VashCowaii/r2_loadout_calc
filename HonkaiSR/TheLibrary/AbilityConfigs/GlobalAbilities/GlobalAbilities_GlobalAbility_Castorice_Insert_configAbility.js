const configAbility = {
  "fileName": "GlobalAbilities_GlobalAbility_Castorice_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "GlobalAbility_Castorice_Main"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Allied Team(ALL) [Exclude battle mechanics]",
      "modifier": "GlobalAbility_Castorice_Listen"
    },
    {
      "name": "Assign Global Buff State",
      "buffID": 140703,
      "state": "False",
      "amount": 0
    },
    {
      "name": "UI Display Event",
      "popUpText": "Sanctuary of Mooncocoon"
    },
    {
      "name": "Find New Target",
      "from": "Allied Team",
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Allied Team(ALL)",
      "modifier": "GlobalAbility_Castorice_Listen"
    },
    {
      "name": "Find New Target",
      "from": "Allied Team",
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
      },
      "ifTargetFound": [
        {
          "name": "Set HP Value",
          "target": "Use Prior Target(s) Defined",
          "setValue": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Use Prior Target(s) Defined",
          "modifier": "GlobalAbility_Castorice_DeathTime[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
          "duration": 2
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Allied Team(ALL) [Exclude battle mechanics]",
      "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
    }
  ],
  "references": []
}