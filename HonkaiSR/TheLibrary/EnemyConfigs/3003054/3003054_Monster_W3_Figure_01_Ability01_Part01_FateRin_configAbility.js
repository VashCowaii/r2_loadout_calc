const configAbility = {
  "fileName": "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin",
  "childAbilityList": [
    "3003054_Monster_W3_Figure_01_Ability01_Camera",
    "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin",
    "3003054_Monster_W3_Figure_01_Ability01_Part02_FateRin"
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
      "ability": "Monster_W3_Figure_01_Ability01_Part02_FateRin",
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