const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_P3BattlePerform",
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
      "modifier": "<a class=\"gModGreen\" id=\"154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__154177838\">Enemy_W4_IronTombCore_Main_P3BattlePerformTest</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}