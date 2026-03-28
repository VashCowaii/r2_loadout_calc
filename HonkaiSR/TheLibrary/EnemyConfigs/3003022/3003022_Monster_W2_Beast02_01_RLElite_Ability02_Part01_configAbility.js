const configAbility = {
  "fileName": "3003022_Monster_W2_Beast02_01_RLElite_Ability02_Part01",
  "childAbilityList": [
    "3003022_Monster_W2_Beast02_01_Ability02_Camera",
    "3003022_Monster_W2_Beast02_01_RLElite_Ability02_Part01",
    "3003022_Monster_W2_Beast02_01_RLElite_Ability02_Part02"
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
      "ability": "Monster_W2_Beast02_01_RLElite_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}