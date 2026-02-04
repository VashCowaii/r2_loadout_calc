const configAbility = {
  "fileName": "2022040_Monster_W2_Beast01_AbilityP01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill02",
      "passed": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Caster}}"
              },
              "set": 0
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Caster}}"
              },
              "popUpText": "Action Advanced",
              "living": true
            }
          ]
        }
      ]
    }
  ],
  "references": []
}