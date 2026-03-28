const configAbility = {
  "fileName": "3012020_Monster_W3_Clock_01_Ability03_Part01",
  "childAbilityList": [
    "3012020_Monster_W3_Clock_01_Ability03_Part01",
    "3012020_Monster_W3_Clock_01_Ability03_Part02",
    "3012020_Monster_W3_Clock_01_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W3_Clock_01_Ability03_Part02",
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