const configAbility = {
  "fileName": "3002011_Monster_W3_TV_02_Ultimate_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_TV_02_Ultimate_Part01",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1732782012\">MModifier_Monster_W3_TV_ReduceSPEffect</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "value": {
        "operator": "Variables[0] ({[Skill08[0]]}) || INVERT || RETURN",
        "displayLines": "-{[Skill08[0]]}",
        "constants": [],
        "variables": [
          "{[Skill08[0]]}"
        ]
      },
      "isFixed": "(Fixed)"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "popUpText": "Energy Reduced",
      "living": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}