const configAbility = {
  "fileName": "Rappa_Rappa_Ability12_Part01",
  "childAbilityList": [
    "Rappa_Rappa_Ability12_Part01",
    "Rappa_Rappa_Ability12_Part02",
    "Rappa_Rappa_Ability03_FPS_Hit2_Camera"
  ],
  "skillTrigger": "Skill12",
  "abilityType": "Basic ATK",
  "energy": 5,
  "toughnessList": [
    10,
    0,
    5
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
      "ability": "Rappa_Ability12_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}