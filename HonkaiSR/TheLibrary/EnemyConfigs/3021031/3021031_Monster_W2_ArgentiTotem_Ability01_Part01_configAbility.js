const configAbility = {
  "fileName": "3021031_Monster_W2_ArgentiTotem_Ability01_Part01",
  "childAbilityList": [
    "3021031_Monster_W2_ArgentiTotem_Ability01_Part01",
    "3021031_Monster_W2_ArgentiTotem_Ability01_Part02",
    "3021031_Monster_W2_ArgentiTotem_Ability01_Camera",
    "3021031_Monster_W2_ArgentiTotem_AbilityP01_Insert",
    "3021031_Monster_W2_ArgentiTotem_AbilityP01_Part01",
    "3021031_Monster_W2_ArgentiTotem_AbilityP01_Camera"
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
      "ability": "Monster_W2_ArgentiTotem_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}