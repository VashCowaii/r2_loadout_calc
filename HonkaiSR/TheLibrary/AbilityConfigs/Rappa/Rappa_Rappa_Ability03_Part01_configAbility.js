const configAbility = {
  "fileName": "Rappa_Rappa_Ability03_Part01",
  "childAbilityList": [
    "Rappa_Rappa_Ability03_Camera",
    "Rappa_Rappa_Ability03_EnterReady",
    "Rappa_Rappa_Ability03_Part01",
    "Rappa_Rappa_Ability03_Part02",
    "Rappa_Rappa_Ability03_FPS_Camera",
    "Rappa_Rappa_Ability03_FPS_Camera_Steady",
    "Rappa_Rappa_Ability03_SP0_Part01"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    0,
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
      "ability": "Rappa_Ability03_Part02"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_AR_STATE_LIFETIME) || RETURN",
        "displayLines": "_AR_STATE_LIFETIME",
        "constants": [],
        "variables": [
          "_AR_STATE_LIFETIME"
        ]
      },
      "priorState": "Active"
    }
  ],
  "references": []
}