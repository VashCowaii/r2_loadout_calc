const configAbility = {
  "fileName": "1014013_Monster_W1_GS_Svarog_RL_Ability08_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "OneMore"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_GS_Svarog_RL_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}