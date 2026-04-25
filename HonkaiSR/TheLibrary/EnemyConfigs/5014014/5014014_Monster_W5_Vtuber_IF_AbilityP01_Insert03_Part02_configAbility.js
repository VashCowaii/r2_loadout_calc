const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_IF_AbilityP01_Insert03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"433426443\">Enemy_W5_Vtuber_IF_LockStance</a>[<span class=\"descriptionNumberColor\">Toughness Lock</span>]"
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[7]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[7]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[7]]}"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "forceReduction": true,
      "canDelay": true,
      "ToughnessDMGType": "Quantum"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "sourceTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] ({[PassiveSkill01[8]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[8]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[8]]}"
        ]
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}