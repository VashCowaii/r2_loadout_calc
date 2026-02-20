const configAbility = {
  "fileName": "4032025_Monster_W4_FireProwler_10_Main03_Ability07_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_10_Main03_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}