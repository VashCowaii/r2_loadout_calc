const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Ability01_Part01",
  "childAbilityList": [
    "BlackSwan_BlackSwan_Ability01_Camera",
    "BlackSwan_BlackSwan_Ability01_Part01",
    "BlackSwan_BlackSwan_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "BlackSwan_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}