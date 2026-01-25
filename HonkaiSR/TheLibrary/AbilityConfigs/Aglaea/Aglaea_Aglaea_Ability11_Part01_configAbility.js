const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability11_Part01",
  "childAbilityList": [
    "Aglaea_Aglaea_Ability11_Camera",
    "Aglaea_Aglaea_Ability11_Part01",
    "Aglaea_Aglaea_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Slash by a Thousandfold Kiss"
    },
    "Deleted bullshit",
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
          "ability": "Aglaea_Ability11_Part02"
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
          "ability": "Servant_AglaeaServant_Ability11_Together_Part01"
        }
      ]
    }
  ],
  "references": []
}