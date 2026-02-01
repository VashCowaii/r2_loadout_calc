const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "PowerFlag"
      },
      "ifTargetFound": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}