const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01",
  "childAbilityList": [
    "3021022_Monster_W2_ArgentiTotem_01_IF_Ability01_Part01",
    "3021022_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
    "3021022_Monster_W2_ArgentiTotem_01_IF_Ability01_Camera",
    "3021022_Monster_W2_ArgentiTotem_01_AbilityP01_Insert",
    "3021022_Monster_W2_ArgentiTotem_01_AbilityP01_Part01",
    "3021022_Monster_W2_ArgentiTotem_01_AbilityP01_Camera",
    "3021022_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Insert",
    "3021022_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01",
    "3021022_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
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
      "ability": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "PowerFlag"
      },
      "ifTargetFound": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}