const configAbility = {
  "fileName": "60026_Phainon_Ability22_v2_Part01_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability22_v2_Part02_MainStory",
      "isTrigger": true
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}