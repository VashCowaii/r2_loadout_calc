const configAbility = {
  "fileName": "4012076_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "team": "Enemy Team"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healPercent": {
                "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                "displayLines": "{[SkillP01[3]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[3]]}"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ],
          "failed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healPercent": {
                "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                "displayLines": "{[SkillP01[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[2]]}"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        }
      ]
    },
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