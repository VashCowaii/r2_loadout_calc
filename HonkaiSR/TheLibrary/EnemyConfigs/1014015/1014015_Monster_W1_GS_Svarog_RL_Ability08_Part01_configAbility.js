const configAbility = {
  "fileName": "1014015_Monster_W1_GS_Svarog_RL_Ability08_Part01",
  "childAbilityList": [
    "1014015_Monster_W1_GS_Svarog_RL_Ability08_Part01",
    "1014015_Monster_W1_GS_Svarog_RL_Ability08_Part02",
    "1014015_Monster_W1_GS_Svarog_RL_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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