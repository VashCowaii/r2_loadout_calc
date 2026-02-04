const configAbility = {
  "fileName": "1014015_Monster_W1_GS_Svarog_RL_Ability04_Part01",
  "childAbilityList": [
    "1014015_Monster_W1_GS_Svarog_RL_Ability04_Part01",
    "1014015_Monster_W1_GS_Svarog_RL_Ability04_Part02",
    "1014015_Monster_W1_GS_Svarog_RL_Ability04_Camera",
    "1014015_Monster_W1_GS_Svarog_Ability04_Camera_2"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W1_GS_Svarog_RL_Ability04_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">",
        "value2": 4
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