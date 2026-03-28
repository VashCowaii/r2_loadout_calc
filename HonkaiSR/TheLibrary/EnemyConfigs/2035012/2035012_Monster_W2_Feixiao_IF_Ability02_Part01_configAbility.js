const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_Ability02_Part01",
  "childAbilityList": [
    "2035012_Monster_W2_Feixiao_Ability02_Camera",
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W2_Feixiao_IF_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
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