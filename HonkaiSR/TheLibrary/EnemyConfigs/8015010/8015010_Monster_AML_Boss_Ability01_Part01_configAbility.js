const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Ability01_Part01",
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
      "ability": "Monster_AML_Boss_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    }
  ],
  "references": []
}