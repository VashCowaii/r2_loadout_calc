const configAbility = {
  "fileName": "3003042_Monster_W3_Figure_RLElite_Ability03_Part01",
  "childAbilityList": [
    "3003042_Monster_W3_Figure_RLElite_Ability03_Camera",
    "3003042_Monster_W3_Figure_RLElite_Ability03_Part01",
    "3003042_Monster_W3_Figure_RLElite_Ability03_Part02"
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
      "ability": "Monster_W3_Figure_RLElite_Ability03_Part02",
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