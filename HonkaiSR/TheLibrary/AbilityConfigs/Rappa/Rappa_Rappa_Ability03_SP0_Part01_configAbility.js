const configAbility = {
  "fileName": "Rappa_Rappa_Ability03_SP0_Part01",
  "skillTrigger": "Skill34",
  "abilityType": "Ultimate",
  "toughnessList": null,
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
    }
  ],
  "references": []
}