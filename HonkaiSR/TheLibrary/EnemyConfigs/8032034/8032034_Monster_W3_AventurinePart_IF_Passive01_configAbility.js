const configAbility = {
  "fileName": "8032034_Monster_W3_AventurinePart_IF_Passive01",
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
      "modifier": "<a class=\"gModGreen\" id=\"718847384\">Monster_W3_AventurinePart_IF_SpeedZero</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1089097326\">Enemy_W3_AventurinePart_IF_DeathRattle</a>"
    }
  ],
  "references": []
}