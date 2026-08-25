const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability21_Part01",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_Ability21_Camera",
    "RinTohsaka_TohsakaRin_Ability21_Part01",
    "RinTohsaka_TohsakaRin_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    2,
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
      "ability": "TohsakaRin_Ability21_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}