const configAbility = {
  "fileName": "5012041_Monster_W2_Mecha01_03_Ability01_Part01",
  "childAbilityList": [
    "5012041_Monster_W2_Mecha01_03_Ability01_Camera",
    "5012041_Monster_W2_Mecha01_03_Ability01_Part01",
    "5012041_Monster_W2_Mecha01_03_Ability01_Part02"
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
      "ability": "Monster_W2_Mecha01_03_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}