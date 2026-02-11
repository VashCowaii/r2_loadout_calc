const configAbility = {
  "fileName": "8032032_Monster_W3_AventurinePart_Passive01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
    }
  ],
  "references": []
}