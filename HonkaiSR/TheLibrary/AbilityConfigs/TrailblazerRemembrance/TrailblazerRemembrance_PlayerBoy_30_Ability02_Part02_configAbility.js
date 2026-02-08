const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1640803691\">PlayerBoy_30_TryCreateServant</a>"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Target Exists",
        "target": {
          "name": "Target Name",
          "target": "{{BattleEvent60021}}"
        },
        "living": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{BattleEvent60021}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1446276332\">MissionBattleEvent60021_TriggerBEAbility</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}