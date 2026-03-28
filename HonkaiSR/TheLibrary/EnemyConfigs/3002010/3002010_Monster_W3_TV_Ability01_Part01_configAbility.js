const configAbility = {
  "fileName": "3002010_Monster_W3_TV_Ability01_Part01",
  "childAbilityList": [
    "3002010_Monster_W3_TV_Ability01_Part01",
    "3002010_Monster_W3_TV_Ability01_Part02",
    "3002010_Monster_W3_TV_Ability01_Camera"
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
      "ability": "Monster_W3_TV_Ability01_Part02",
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