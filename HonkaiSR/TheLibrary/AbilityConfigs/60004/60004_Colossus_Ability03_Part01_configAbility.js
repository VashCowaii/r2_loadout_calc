const configAbility = {
  "fileName": "60004_Colossus_Ability03_Part01",
  "childAbilityList": [
    "60004_Colossus_Ability03_Camera",
    "60004_Colossus_Ability03_Camera_02",
    "60004_Colossus_Ability03_Pre",
    "60004_Colossus_Ability03_Part01",
    "60004_Colossus_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    60,
    0
  ],
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Preservation Creation's Wrath"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Colossus_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}