const configAbility = {
  "fileName": "8015020_Monster_W2_Huanlong_Ability01_Part01",
  "childAbilityList": [
    "8015020_Monster_W2_Huanlong_Ability01_Part01",
    "8015020_Monster_W2_Huanlong_Ability01_Part02",
    "8015020_Monster_W2_Huanlong_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W2_Huanlong_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}