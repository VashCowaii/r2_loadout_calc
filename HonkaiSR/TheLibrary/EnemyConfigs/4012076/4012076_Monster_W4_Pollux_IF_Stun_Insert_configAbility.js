const configAbility = {
  "fileName": "4012076_Monster_W4_Pollux_IF_Stun_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_106) || RETURN",
        "displayLines": "UnusedUnderThisBase_106",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_106"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>"
    }
  ],
  "references": []
}