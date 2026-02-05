const configAbility = {
  "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          },
          "attacker": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Quantum"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          },
          "attacker": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Quantum"
        }
      ]
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "sourceTarget": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "consumePercent": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
        "displayLines": "{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      },
      "consumeFloor": 1
    }
  ],
  "references": []
}