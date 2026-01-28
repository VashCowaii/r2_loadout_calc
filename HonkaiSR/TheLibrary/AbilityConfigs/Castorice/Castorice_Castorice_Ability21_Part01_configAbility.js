const configAbility = {
  "fileName": "Castorice_Castorice_Ability21_Part01",
  "childAbilityList": [
    "Castorice_Castorice_Ability21_Camera",
    "Castorice_Castorice_Ability21_Camera02",
    "Castorice_Castorice_Ability21_Part01",
    "Castorice_Castorice_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_PairStance",
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
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Castorice_Ability21_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_CastoriceServant_Together_Part01"
        }
      ]
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters"
      }
    }
  ],
  "references": []
}