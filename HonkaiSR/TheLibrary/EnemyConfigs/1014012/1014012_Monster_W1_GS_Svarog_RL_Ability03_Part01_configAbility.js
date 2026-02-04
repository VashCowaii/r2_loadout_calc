const configAbility = {
  "fileName": "1014012_Monster_W1_GS_Svarog_RL_Ability03_Part01",
  "childAbilityList": [
    "1014012_Monster_W1_GS_Svarog_RL_Ability03_Part01",
    "1014012_Monster_W1_GS_Svarog_RL_Ability03_Part02",
    "1014012_Monster_W1_GS_Svarog_RL_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_GS_Svarog_RL_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": []
}