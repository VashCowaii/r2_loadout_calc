const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability02_Part01",
  "childAbilityList": [
    "TopazNumby_Topaz_Ability02_Camera",
    "TopazNumby_Topaz_Ability02_Part01",
    "TopazNumby_Topaz_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Topaz_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      }
    }
  ],
  "references": []
}