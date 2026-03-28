const configAbility = {
  "fileName": "2032010_Monster_W2_Lycan_Ability02_Insert_Part01",
  "childAbilityList": [
    "2032010_Monster_W2_Lycan_Ability02_Insert_Part01",
    "2032010_Monster_W2_Lycan_Ability02_Insert_Part02",
    "2032010_Monster_W2_Lycan_Ability02_Insert_Camera"
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
      "ability": "Monster_W2_Lycan_Ability02_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}