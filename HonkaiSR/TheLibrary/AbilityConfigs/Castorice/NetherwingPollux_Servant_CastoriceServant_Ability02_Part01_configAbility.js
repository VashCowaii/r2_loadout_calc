const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Servant_CastoriceServant_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}