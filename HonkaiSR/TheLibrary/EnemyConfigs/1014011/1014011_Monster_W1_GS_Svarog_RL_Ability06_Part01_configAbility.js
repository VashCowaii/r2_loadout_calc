const configAbility = {
  "fileName": "1014011_Monster_W1_GS_Svarog_RL_Ability06_Part01",
  "childAbilityList": [
    "1014011_Monster_W1_GS_Svarog_RL_Ability06_Part01",
    "1014011_Monster_W1_GS_Svarog_RL_Ability06_Part02",
    "1014011_Monster_W1_GS_Svarog_RL_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W1_GS_Svarog_RL_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
        }
      ]
    },
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