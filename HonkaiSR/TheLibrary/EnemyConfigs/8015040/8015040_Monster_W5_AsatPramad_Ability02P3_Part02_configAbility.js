const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability02P3_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability02_Assist_00"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "Monster_W5_AsatPramad_Ability02_Assist_01"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "Monster_W5_AsatPramad_Ability02_Assist_01"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}