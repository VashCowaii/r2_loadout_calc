const configAbility = {
  "fileName": "Phainon_Phainon_Ability31_SelectTarget",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Target Exists",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "living": true
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability31_Part1",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}