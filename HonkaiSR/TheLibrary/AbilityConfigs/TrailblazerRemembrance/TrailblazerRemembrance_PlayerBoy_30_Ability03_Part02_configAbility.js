const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "PlayerBoy_30_TryCreateServant"
    },
    {
      "name": "Define Custom Variable",
      "target": "Caster's Memosprite",
      "scope": "TargetEntity",
      "variableName": "Ultra_Stance",
      "value": {
        "operator": "Variables[0] (AOE Toughness Value) || RETURN",
        "displayLines": "AOE Toughness Value",
        "constants": [],
        "variables": [
          "AOE Toughness Value"
        ]
      }
    },
    {
      "name": "Trigger Ability",
      "from": "Caster's Memosprite",
      "ability": "Servant_PlayerBoyServant_30_Ability03_Part02",
      "isTrigger": true
    },
    "Trigger: Ability End"
  ],
  "references": []
}