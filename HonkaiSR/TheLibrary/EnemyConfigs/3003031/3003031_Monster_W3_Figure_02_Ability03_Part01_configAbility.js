const configAbility = {
  "fileName": "3003031_Monster_W3_Figure_02_Ability03_Part01",
  "childAbilityList": [
    "3003031_Monster_W3_Figure_02_Ability03_Camera",
    "3003031_Monster_W3_Figure_02_Ability03_Part01",
    "3003031_Monster_W3_Figure_02_Ability03_Part02"
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
      "ability": "Monster_W3_Figure_02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  },
  "references": []
}