const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability02_Part01",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_Ability02_Camera",
    "RinTohsaka_TohsakaRin_Ability02_Part01",
    "RinTohsaka_TohsakaRin_Ability02_Part02"
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
      "ability": "TohsakaRin_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}