const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Unknown EventType4 (Not always an error)",
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "SilverWolf999_Ability11_Part02",
      "isTrigger": true
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "SilverWolf999_Skill11_EnemyGround",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}