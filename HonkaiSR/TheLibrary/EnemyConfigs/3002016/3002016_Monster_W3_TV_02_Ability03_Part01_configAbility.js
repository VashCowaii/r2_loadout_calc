const configAbility = {
  "fileName": "3002016_Monster_W3_TV_02_Ability03_Part01",
  "childAbilityList": [
    "3002016_Monster_W3_TV_02_Ability03_Part01",
    "3002016_Monster_W3_TV_02_Ability03_Part02",
    "3002016_Monster_W3_TV_Ability03_Camera"
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
      "ability": "Monster_W3_TV_02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}