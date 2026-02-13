const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Ability03_Part01",
  "childAbilityList": [
    "BlackSwanv0_BlackSwan_Ability03_Camera",
    "BlackSwanv0_BlackSwan_Ability03_Part01",
    "BlackSwanv0_BlackSwan_Ability03_Part02",
    "BlackSwanv0_BlackSwan_Ability03_Cutin"
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
      "ability": "BlackSwan_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}