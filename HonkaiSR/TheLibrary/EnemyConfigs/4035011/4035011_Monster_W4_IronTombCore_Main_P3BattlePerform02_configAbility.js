const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"463592931\">Enemy_W4_IronTombCore_Main_P3Level</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1313833624\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest02</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}