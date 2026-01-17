const configAbility = {
  "fileName": "GlobalAbilities_GlobalAbility_Castorice_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "GlobalAbility_Castorice_Main"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
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
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "GlobalAbility_Castorice_Listen"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
      },
      "ifTargetFound": [
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "setValue": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "GlobalAbility_Castorice_DeathTime[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
          "duration": 2
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
    }
  ],
  "references": []
}