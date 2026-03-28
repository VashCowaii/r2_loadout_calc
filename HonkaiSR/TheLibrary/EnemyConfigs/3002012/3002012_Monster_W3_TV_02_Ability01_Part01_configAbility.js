const configAbility = {
  "fileName": "3002012_Monster_W3_TV_02_Ability01_Part01",
  "childAbilityList": [
    "3002012_Monster_W3_TV_02_Ability01_Part01",
    "3002012_Monster_W3_TV_02_Ability01_Part02",
    "3002012_Monster_W3_TV_Ability01_Camera",
    "3002012_Monster_W3_TV_02_IF_Ability01_Insert_Part01",
    "3002012_Monster_W3_TV_02_IF_Ability01_Insert_Part02",
    "3002012_Monster_W3_TV_02_IF_Ability01_Insert_Camera"
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
      "ability": "Monster_W3_TV_02_Ability01_Part02",
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