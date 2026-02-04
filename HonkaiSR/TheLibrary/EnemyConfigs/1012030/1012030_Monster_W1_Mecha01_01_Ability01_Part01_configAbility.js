const configAbility = {
  "fileName": "1012030_Monster_W1_Mecha01_01_Ability01_Part01",
  "childAbilityList": [
    "1012030_Monster_W1_Mecha01_01_Ability01_Part01",
    "1012030_Monster_W1_Mecha01_01_Ability01_Part02",
    "1012030_Monster_W1_Mecha01_01_Ability01_Camera"
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
      "ability": "Monster_W1_Mecha01_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}