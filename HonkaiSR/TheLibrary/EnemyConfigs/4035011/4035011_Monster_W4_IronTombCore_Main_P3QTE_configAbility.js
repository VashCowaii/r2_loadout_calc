const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_P3QTE",
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
      "modifier": "<a class=\"gModGreen\" id=\"1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1833350337\">Enemy_W4_IronTombCore_Main_P3QTETest</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}