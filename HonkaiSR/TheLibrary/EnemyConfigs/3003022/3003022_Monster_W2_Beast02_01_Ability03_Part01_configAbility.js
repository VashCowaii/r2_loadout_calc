const configAbility = {
  "fileName": "3003022_Monster_W2_Beast02_01_Ability03_Part01",
  "childAbilityList": [
    "3003022_Monster_W2_Beast02_01_Ability03_Camera",
    "3003022_Monster_W2_Beast02_01_Ability03_Part01",
    "3003022_Monster_W2_Beast02_01_Ability03_Part02"
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
      "ability": "Monster_W2_Beast02_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}