const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability03_Part01",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_Ability03_Camera",
    "RinTohsaka_TohsakaRin_Ability03_EnterReady",
    "RinTohsaka_TohsakaRin_Ability03_Part01",
    "RinTohsaka_TohsakaRin_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "TohsakaRin_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "All Other Team Members"
  }
}