const configAbility = {
  "fileName": "1004016_Boss_Cocolia_P1_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"807903782\">Boss_Cocolia_P2_BattleEvent_ListenPlayerUltra</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"801976131\">ListenHPRatio_Modifier</a>"
    }
  ],
  "references": []
}