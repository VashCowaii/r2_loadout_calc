const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Ability03_Part01",
  "childAbilityList": [
    "BlackSwan_BlackSwan_Ability03_Camera",
    "BlackSwan_Advanced_BlackSwan_Ability03_Part01",
    "BlackSwan_Advanced_BlackSwan_Ability03_Part02",
    "BlackSwan_BlackSwan_Ability03_Cutin"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_BlackSwan_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}