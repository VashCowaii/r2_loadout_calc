const configAbility = {
  "fileName": "Castorice_Castorice_Ability03_Part01",
  "childAbilityList": [
    "Castorice_Castorice_Ability03_Camera",
    "Castorice_Castorice_Ability03_Camera02",
    "Castorice_Castorice_Ability03_EnterReady",
    "Castorice_Castorice_Ability03_Part01",
    "Castorice_Castorice_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
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
      "ability": "Castorice_Ability03_Part02"
    },
    {
      "name": "Change Battle Arena",
      "arena": "CastoriceBattleArea",
      "tag": "BattleArea01",
      "priorityTag": "Character"
    },
    "Deleted bullshit"
  ],
  "references": []
}