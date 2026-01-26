const configAbility = {
  "fileName": "Rappa_Rappa_Ability13_Part01",
  "childAbilityList": [
    "Rappa_Rappa_Ability13_Part01",
    "Rappa_Rappa_Ability13_Part02",
    "Rappa_Rappa_Ability03_FPS_Hit3_Camera"
  ],
  "skillTrigger": "Skill13",
  "abilityType": "Basic ATK",
  "energy": 10,
  "toughnessList": [
    0,
    5,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "team": "Enemy Team",
        "value1": "Team_Width_Count",
        "compareType": ">=",
        "value2": 10
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Rappa_Ability13_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_AR_STATE_LIFETIME",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Hide",
          "abilityName": "Basic ATK"
        }
      ],
      "failed": [
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Hide",
          "abilityName": "Basic ATK"
        }
      ]
    }
  ],
  "references": []
}