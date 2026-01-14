const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability02_Part01",
  "childAbilityList": [
    "Xueyi_Xueyi_Ability02_Camera",
    "Xueyi_Xueyi_Ability02_Part01",
    "Xueyi_Xueyi_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Xueyi_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Xueyi_PassiveLayer",
        "compareType": "=",
        "value2": {
          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
          "displayLines": "_Xueyi_Count",
          "constants": [],
          "variables": [
            "_Xueyi_Count"
          ]
        }
      }
    }
  ],
  "references": []
}