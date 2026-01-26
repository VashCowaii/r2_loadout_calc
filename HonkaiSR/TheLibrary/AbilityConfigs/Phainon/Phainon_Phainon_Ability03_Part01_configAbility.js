const configAbility = {
  "fileName": "Phainon_Phainon_Ability03_Part01",
  "childAbilityList": [
    "Phainon_Phainon_Ability03_EnterReady",
    "Phainon_Phainon_Ability03_Part01",
    "Phainon_Phainon_Ability03_Part02",
    "Phainon_Phainon_Ability03_Camera",
    "Phainon_Phainon_Ability31_Camera",
    "Phainon_Phainon_Ability31_SelectTarget",
    "Phainon_Phainon_Ability31_SelectTarget_OnLimbo",
    "Phainon_Phainon_Ability31_Part1",
    "Phainon_Phainon_Ability31_Part2"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Battle Arena",
      "arena": "PhainonBattleArea",
      "tag": "BattleArea01",
      "priorityTag": "Character"
    },
    {
      "name": "Change Character Model"
    },
    {
      "name": "Set Phainon Charge Points",
      "value": {
        "operator": "Variables[0] (Skill22_Energy) || RETURN",
        "displayLines": "Skill22_Energy",
        "constants": [],
        "variables": [
          "Skill22_Energy"
        ]
      }
    }
  ],
  "references": []
}