const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Ability02_Part01",
  "childAbilityList": [
    "BlackSwanv0_BlackSwan_Ability02_Camera",
    "BlackSwanv0_BlackSwan_Ability02_Part01",
    "BlackSwanv0_BlackSwan_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "BlackSwan_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}