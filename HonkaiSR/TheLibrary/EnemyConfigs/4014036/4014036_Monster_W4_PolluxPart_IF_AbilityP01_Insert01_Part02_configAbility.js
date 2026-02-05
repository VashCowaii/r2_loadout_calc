const configAbility = {
  "fileName": "4014036_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
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
            "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
            "displayLines": "UnusedUnderThisBase_107",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_107"
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
            "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
            "displayLines": "UnusedUnderThisBase_107",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_107"
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
        "operator": "Variables[0] (UnusedUnderThisBase_116) || RETURN",
        "displayLines": "UnusedUnderThisBase_116",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_116"
        ]
      },
      "consumeFloor": 1
    }
  ],
  "references": []
}