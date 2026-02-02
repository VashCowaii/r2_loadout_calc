const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_IF_ForceKill_Part01",
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
      "ability": "Monster_W2_ArgentiTotem_IF_ForceKill_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}