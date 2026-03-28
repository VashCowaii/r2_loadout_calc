const configAbility = {
  "fileName": "3003053_Monster_W3_Figure_01_RLElite_Ability01_Part01",
  "childAbilityList": [
    "3003053_Monster_W3_Figure_01_RLElite_Ability01_Camera",
    "3003053_Monster_W3_Figure_01_RLElite_Ability01_Part01",
    "3003053_Monster_W3_Figure_01_RLElite_Ability01_Part02"
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
      "ability": "Monster_W3_Figure_01_RLElite_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}