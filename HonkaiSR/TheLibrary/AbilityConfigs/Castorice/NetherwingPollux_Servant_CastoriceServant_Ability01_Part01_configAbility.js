const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Camera",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Ready"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    10,
    0,
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
      "ability": "Servant_CastoriceServant_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}