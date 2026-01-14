const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "target": "Caster's Memosprite",
      "scope": "TargetEntity",
      "variableName": "Skill11_Stance",
      "value": {
        "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || DIV || RETURN",
        "displayLines": "(AOE Toughness Value / 2)",
        "constants": [
          2
        ],
        "variables": [
          "AOE Toughness Value"
        ]
      }
    },
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_30_Ability11_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": "Caster (Memosprite)",
          "ability": "Servant_PlayerBoyServant_30_Ability11_Together"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}