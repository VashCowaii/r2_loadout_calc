const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_Ability03_Part01",
  "childAbilityList": [
    "1004025_Monster_W1_Gepard_Ability03_Part01",
    "1004025_Monster_W1_Gepard_Ability03_Part02",
    "1004025_Monster_W1_Gepard_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W1_Gepard_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}