const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1640803691\">PlayerBoy_30_TryCreateServant</a>"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
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
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "ability": "Servant_PlayerBoyServant_30_Ability03_Part02",
      "isTrigger": true
    },
    "Trigger: Ability End"
  ],
  "references": []
}