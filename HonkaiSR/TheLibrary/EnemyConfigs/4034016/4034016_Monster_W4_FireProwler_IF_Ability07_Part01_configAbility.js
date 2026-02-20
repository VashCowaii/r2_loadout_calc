const configAbility = {
  "fileName": "4034016_Monster_W4_FireProwler_IF_Ability07_Part01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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
      "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_IF_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}