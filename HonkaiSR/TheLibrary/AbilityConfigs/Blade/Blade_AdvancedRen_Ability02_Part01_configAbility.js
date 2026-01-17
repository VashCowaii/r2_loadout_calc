const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability02_Part01",
  "childAbilityList": [
    "Blade_Ren_Ability02_Camera",
    "Blade_AdvancedRen_Ability02_Part01",
    "Blade_AdvancedRen_Ability02_Part02",
    "Blade_AdvancedRen_Bonus",
    "Blade_Ren_Bonus_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
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
      "ability": "AdvancedRen_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}