const configAbility = {
  "fileName": "3002022_Monster_W1_Mecha01_03_IF_Ability04_Part01",
  "childAbilityList": [
    "3002022_Monster_W1_Mecha01_03_IF_Ability04_Part01",
    "3002022_Monster_W1_Mecha01_03_IF_Ability04_Part02",
    "3002022_Monster_W1_Mecha01_02_Ability04_Camera"
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
      "ability": "Monster_W1_Mecha01_03_IF_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}