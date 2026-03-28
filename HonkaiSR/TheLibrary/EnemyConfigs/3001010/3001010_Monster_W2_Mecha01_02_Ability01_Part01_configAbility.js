const configAbility = {
  "fileName": "3001010_Monster_W2_Mecha01_02_Ability01_Part01",
  "childAbilityList": [
    "3001010_Monster_W2_Mecha01_02_Ability01_Camera",
    "3001010_Monster_W2_Mecha01_02_Ability01_Part01",
    "3001010_Monster_W2_Mecha01_02_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W2_Mecha01_02_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}