const configAbility = {
  "fileName": "3012040_Monster_W3_Ghost_Ability01_Part01",
  "childAbilityList": [
    "3012040_Monster_W3_Ghost_Ability01_Part01",
    "3012040_Monster_W3_Ghost_Ability01_Part02",
    "3012040_Monster_W3_Ghost_Ability01_Camera",
    "3012040_Monster_W3_Ghost_Ability01_InsertAbility"
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
      "ability": "Monster_W3_Ghost_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}