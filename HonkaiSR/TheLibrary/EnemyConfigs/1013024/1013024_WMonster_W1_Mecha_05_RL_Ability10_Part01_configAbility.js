const configAbility = {
  "fileName": "1013024_WMonster_W1_Mecha_05_RL_Ability10_Part01",
  "childAbilityList": [
    "1013024_WMonster_W1_Mecha_05_RL_Ability10_Camera",
    "1013024_WMonster_W1_Mecha_05_RL_Ability10_Part01",
    "1013024_WMonster_W1_Mecha_05_RL_Ability10_Part02"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "WMonster_W1_Mecha_05_RL_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W1_Mecha03_RL_PartController"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              }
            ]
          }
        }
      ]
    }
  ],
  "references": []
}