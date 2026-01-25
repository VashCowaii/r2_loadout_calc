const configAbility = {
  "fileName": "Yunli_Yunli_TechniqueInLevel_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "UI Display Event",
          "popUpText": "Intuit: Cull"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "MazeSkill_Triggered",
          "value": 1
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Yunli_TechniqueInLevel_Insert_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}