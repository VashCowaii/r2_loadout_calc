const configAbility = {
  "fileName": "4064012_Monster_W4_Serpent_01_IF_Return_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
          "displayLines": "SummonList_ADF_2",
          "constants": [],
          "variables": [
            "SummonList_ADF_2"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
          "displayLines": "SummonList_ADF_3",
          "constants": [],
          "variables": [
            "SummonList_ADF_3"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1786069431\">Enemy_W2_Beast01_04_AbilityP02_DeathRattle</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 2
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 3
      },
      "ifTargetFound": [
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": true
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1006714510\">Enemy_W4_Serpent_01_IF_OffTeamFormation</a>"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1424767145\">Enemy_W4_Serpent_01_IF_OffTeamController</a>",
      "variable": "MDF_BonusPoint",
      "target2": null,
      "variable2": "AFD_ActualBonusPoint"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1424767145\">Enemy_W4_Serpent_01_IF_OffTeamController</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 3
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 2
      }
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[SkillP03[6]]}) || Variables[1] (AFD_ActualBonusPoint) || MUL || Variables[2] ({[SkillP03[5]]}) || DIV || RETURN",
        "displayLines": "(({[SkillP03[6]]} * AFD_ActualBonusPoint) / {[SkillP03[5]]})",
        "constants": [],
        "variables": [
          "{[SkillP03[6]]}",
          "AFD_ActualBonusPoint",
          "{[SkillP03[5]]}"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ignoreAttackerBonuses": true,
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 3
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-874509273\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimboController</a>[<span class=\"descriptionNumberColor\">Monoform Merger</span>]"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "dieNow": true
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}