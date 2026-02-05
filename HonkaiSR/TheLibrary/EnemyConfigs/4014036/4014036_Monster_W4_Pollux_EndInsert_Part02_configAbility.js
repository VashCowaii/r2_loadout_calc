const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_EndInsert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Monster_W4_Pollux_Main_DisableAction"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "StunCheck02",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}