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
      "modifier": "<a class=\"gModGreen\" id=\"1166883348\">GlobalAbility_Castorice_Main</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-678658688\">GlobalAbility_Castorice_DeathTime</a>[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
    }
  ],
  "references": []
}