const configAbility = {
  "fileName": "1004010_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DeathEvent_Trigger_Times",
      "context": "TargetEntity",
      "value": 1,
      "max": 1
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}