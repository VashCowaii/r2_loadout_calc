const configAbility = {
  "fileName": "3002020_Monster_W1_Mecha01_02_Ability04_Part01",
  "childAbilityList": [
    "3002020_Monster_W1_Mecha01_02_Ability04_Camera",
    "3002020_Monster_W1_Mecha01_02_Ability04_Part01",
    "3002020_Monster_W1_Mecha01_02_Ability04_Part02"
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
      "ability": "Monster_W1_Mecha01_02_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}