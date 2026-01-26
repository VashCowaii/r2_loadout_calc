const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Animator Variable",
        "paramType": "Bool",
        "paramName": "IsCombo",
        "compareType": "=",
        "compareValue": true
      }
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      }
    }
  ],
  "references": []
}