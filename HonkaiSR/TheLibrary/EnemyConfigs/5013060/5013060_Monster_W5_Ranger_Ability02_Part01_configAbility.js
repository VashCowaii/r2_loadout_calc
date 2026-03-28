const configAbility = {
  "fileName": "5013060_Monster_W5_Ranger_Ability02_Part01",
  "childAbilityList": [
    "5013060_Monster_W5_Ranger_Ability02_Camera",
    "5013060_Monster_W5_Ranger_Ability02_Part01",
    "5013060_Monster_W5_Ranger_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W5_Ranger_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}