const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_Perform",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Yanqing_IF_Ability01_Effect",
      "isTrigger": true
    }
  ],
  "references": []
}