const configAbility = {
  "fileName": "1023022_Monster_W1_Mecha03_01_Ability05_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_Mecha03_01_Ability05_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1023021,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Frigid Prowler (Bug)"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}