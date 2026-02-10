const configAbility = {
  "fileName": "8032033_Monster_W3_AventurinePart_IF_AbilityP01_DeathRattle_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Bet"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "ability": "Monster_W3_Aventurine_IF_AbilityP01_Formation",
      "isTrigger": true
    },
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
      "ability": "Monster_W3_AventurinePart_IF_AbilityP01_DeathRattle_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}