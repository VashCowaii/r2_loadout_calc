const configAbility = {
  "fileName": "4013012_Monster_W4_Claymore_Ability05_Part01",
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
      "ability": "Monster_W4_Claymore_Ability05_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4013013,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Furiae Praetor (Bug)",
        "isBaseCompare": true
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}