const configAbility = {
  "fileName": "3003020_Monster_W2_Beast02_01_Ability01_Part01",
  "childAbilityList": [
    "3003020_Monster_W2_Beast02_01_Ability01_Camera",
    "3003020_Monster_W2_Beast02_01_Ability01_Part01",
    "3003020_Monster_W2_Beast02_01_Ability01_Part02"
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
      "ability": "Monster_W2_Beast02_01_Ability01_Part02",
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