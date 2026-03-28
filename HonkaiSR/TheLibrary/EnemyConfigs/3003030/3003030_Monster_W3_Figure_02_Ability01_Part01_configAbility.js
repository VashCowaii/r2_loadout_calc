const configAbility = {
  "fileName": "3003030_Monster_W3_Figure_02_Ability01_Part01",
  "childAbilityList": [
    "3003030_Monster_W3_Figure_02_Ability01_Camera",
    "3003030_Monster_W3_Figure_02_Ability01_Part01",
    "3003030_Monster_W3_Figure_02_Ability01_Part02"
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
      "ability": "Monster_W3_Figure_02_Ability01_Part02",
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