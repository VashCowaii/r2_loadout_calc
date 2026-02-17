const configAbility = {
  "fileName": "2024021_Monster_Fuyan_Hit_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "value1": "CurrentHP%",
        "compareType": ">",
        "value2": 0
      }
    }
  ],
  "references": []
}