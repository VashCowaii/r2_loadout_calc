const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability11_Part01",
  "childAbilityList": [
    "Cyrene_Cyrene_Ability11_Camera",
    "Cyrene_Cyrene_Ability11_Charm_Camera",
    "Cyrene_Cyrene_Ability11_Part01",
    "Cyrene_Cyrene_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    10,
    5,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Charm"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Cyrene_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}