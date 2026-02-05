const configAbility = {
  "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_AbilityEX04"
        }
      ]
    }
  ],
  "references": []
}