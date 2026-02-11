const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>"
    }
  ],
  "references": []
}