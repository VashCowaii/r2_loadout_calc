const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
  "childAbilityList": [
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Camera",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
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
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "PlayerBoy_30_Ability11_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Servant_PlayerBoyServant_30_Ability11_Together"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}