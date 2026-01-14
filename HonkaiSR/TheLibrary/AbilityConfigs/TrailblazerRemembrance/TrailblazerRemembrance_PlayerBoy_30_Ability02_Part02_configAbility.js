const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "PlayerBoy_30_TryCreateServant"
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Target Exists",
        "target": "BattleEvent60021",
        "living": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "BattleEvent60021",
          "modifier": "MissionBattleEvent60021_TriggerBEAbility"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}