const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability01_Part01",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_Ability01_Camera",
    "RinTohsaka_TohsakaRin_Ability01_Part01",
    "RinTohsaka_TohsakaRin_Ability01_Part02"
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "TohsakaRin_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}