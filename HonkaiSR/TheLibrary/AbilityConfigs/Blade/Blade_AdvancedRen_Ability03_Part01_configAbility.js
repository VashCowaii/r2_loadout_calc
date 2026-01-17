const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability03_Part01",
  "childAbilityList": [
    "Blade_Ren_Ability03_Camera",
    "Blade_AdvancedRen_Ability03_EnterReady",
    "Blade_AdvancedRen_Ability03_Part01",
    "Blade_AdvancedRen_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "AdvancedRen_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}